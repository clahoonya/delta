import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

const HeadOfficeMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const headOffice = {
    name: "Delta Life Insurance Company - Head Office",
    address: "4370 Peachtree Rd, NE",
    fullAddress: "4370 Peachtree Rd, NE, Atlanta, GA 30319",
    phone: "404-231-2111",
    lat: 33.8488,
    lng: -84.3632,
  };

  useEffect(() => {
    // Wait for Leaflet to be available
    const checkLeaflet = () => {
      if (typeof window === 'undefined' || !(window as any).L) {
        return false;
      }
      return true;
    };

    // Function to initialize map
    const initMap = () => {
      if (!checkLeaflet()) {
        setTimeout(initMap, 100);
        return;
      }

      const L = (window as any).L;

      // Only initialize if map hasn't been created yet and ref exists
      if (mapRef.current && !mapInstanceRef.current) {
        try {
          // Initialize the map with tight zoom on head office
          const map = L.map(mapRef.current).setView([headOffice.lat, headOffice.lng], 15);
          mapInstanceRef.current = map;

          // Add OpenStreetMap tile layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // Add marker for head office
          const marker = L.marker([headOffice.lat, headOffice.lng]).addTo(map);
          marker.bindPopup(`<strong>${headOffice.name}</strong><br>${headOffice.address}`);
          marker.openPopup();
        } catch (error) {
          console.error('Error initializing map:', error);
        }
      }
    };

    // Start initialization
    initMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (error) {
          console.error('Error removing map:', error);
        }
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef}
      id="headOfficeMap" 
      className="w-full h-[250px] rounded-lg overflow-hidden border border-white/20"
      style={{ zIndex: 1 }}
    />
  );
};

export default HeadOfficeMap;
