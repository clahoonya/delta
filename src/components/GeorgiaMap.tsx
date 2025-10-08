import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, MapPin, Phone } from "lucide-react";
import athensImage from "@/assets/offices/athens.png";
import atlantaImage from "@/assets/offices/atlanta.png";
import brunswickImage from "@/assets/offices/brunswick.png";
import albanyImage from "@/assets/offices/albany.jpg";
import augustaImage from "@/assets/offices/augusta.jpg";
import douglasImage from "@/assets/offices/douglas.jpg";
import dublinImage from "@/assets/offices/dublin.jpg";
import maconImage from "@/assets/offices/macon.jpg";
import savannahImage from "@/assets/offices/savannah.jpg";
import thomasvilleImage from "@/assets/offices/thomasville.jpg";

interface Office {
  id: number;
  name: string;
  city: string;
  address: string;
  fullAddress: string;
  phone1: string;
  phone2: string;
  lat: number;
  lng: number;
  image: string;
}

const offices: Office[] = [
  {
    id: 1,
    name: "Albany Office",
    city: "Albany",
    address: "2101 Dawson Rd",
    fullAddress: "2101 Dawson Rd, Albany, GA 31707",
    phone1: "(229) 439-7021",
    phone2: "(800) 924-5433",
    lat: 31.602,
    lng: -84.184,
    image: albanyImage,
  },
  {
    id: 2,
    name: "Athens Office",
    city: "Athens",
    address: "2500 W Broad St Suite 501",
    fullAddress: "2500 W Broad St Suite 501, Athens, GA 30606",
    phone1: "(706) 369-8032",
    phone2: "(800) 982-8321",
    lat: 33.971,
    lng: -83.415,
    image: athensImage,
  },
  {
    id: 3,
    name: "Atlanta Office",
    city: "Atlanta",
    address: "4921 Jonesboro Rd Suite C",
    fullAddress: "4921 Jonesboro Rd Suite C, Forest Park, GA 30297",
    phone1: "(404) 361-4897",
    phone2: "(800) 254-1076",
    lat: 33.616,
    lng: -84.366,
    image: atlantaImage,
  },
  {
    id: 4,
    name: "Augusta Office",
    city: "Augusta",
    address: "1212 West Medical Park Rd",
    fullAddress: "1212 West Medical Park Rd, Augusta, GA 30909",
    phone1: "(706) 798-3244",
    phone2: "(800) 287-3244",
    lat: 33.455,
    lng: -82.046,
    image: augustaImage,
  },
  {
    id: 5,
    name: "Brunswick Office",
    city: "Brunswick",
    address: "3303 Norwich St",
    fullAddress: "3303 Norwich St, Brunswick, GA 31502",
    phone1: "(912) 265-0318",
    phone2: "(800) 675-0318",
    lat: 31.157,
    lng: -81.492,
    image: brunswickImage,
  },
  {
    id: 6,
    name: "Douglas Office",
    city: "Douglas",
    address: "810 North Madison Ave",
    fullAddress: "810 North Madison Ave, Douglas, GA 31533",
    phone1: "(912) 384-3932",
    phone2: "(800) 725-3846",
    lat: 31.509,
    lng: -82.851,
    image: douglasImage,
  },
  {
    id: 7,
    name: "Dublin Office",
    city: "Dublin",
    address: "120 Oak Street",
    fullAddress: "120 Oak Street, Dublin, GA 31021",
    phone1: "(478) 272-1312",
    phone2: "(800) 865-0676",
    lat: 32.539,
    lng: -82.923,
    image: dublinImage,
  },
  {
    id: 8,
    name: "Macon Office",
    city: "Macon",
    address: "1314 Hardeman Ave",
    fullAddress: "1314 Hardeman Ave, Macon, GA 31201",
    phone1: "(478) 745-7961",
    phone2: "(800) 616-0277",
    lat: 32.846,
    lng: -83.652,
    image: maconImage,
  },
  {
    id: 9,
    name: "Savannah Office",
    city: "Savannah",
    address: "2231 E Victory Dr",
    fullAddress: "2231 E Victory Dr, Savannah, GA 31414",
    phone1: "(912) 354-0996",
    phone2: "(800) 773-0996",
    lat: 32.041,
    lng: -81.066,
    image: savannahImage,
  },
  {
    id: 10,
    name: "Thomasville Office",
    city: "Thomasville",
    address: "444 E Jackson St",
    fullAddress: "444 E Jackson St, Thomasville, GA 31792",
    phone1: "(229) 226-9390",
    phone2: "(800) 281-9390",
    lat: 30.835,
    lng: -83.980,
    image: thomasvilleImage,
  },
];

const GeorgiaMap = () => {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

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
        setTimeout(initMap, 100); // Retry after 100ms
        return;
      }

      const L = (window as any).L;

      // Only initialize if map hasn't been created yet and ref exists
      if (mapRef.current && !mapInstanceRef.current) {
        try {
          // Initialize the map with lower zoom to show all pins
          const map = L.map(mapRef.current).setView([32.84, -83.63], 6);
          mapInstanceRef.current = map;

          // Add OpenStreetMap tile layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // Add markers for each office
          offices.forEach(office => {
            const marker = L.marker([office.lat, office.lng]).addTo(map);
            marker.bindPopup(`<strong>${office.name}</strong><br>${office.address}`);
            
            // Show popup on hover
            marker.on('mouseover', function() {
              this.openPopup();
            });
            
            marker.on('mouseout', function() {
              this.closePopup();
            });
            
            // Add click event to open modal
            marker.on('click', () => {
              setSelectedOffice(office);
            });
          });
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
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="border-b">
        <CardTitle className="text-2xl text-center">Georgia District Offices</CardTitle>
        <p className="text-center text-muted-foreground text-sm mt-2">
          Click on any location pin to view office details
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div 
          ref={mapRef}
          id="officeMap" 
          className="w-full h-[250px] rounded-lg overflow-hidden border"
          style={{ zIndex: 1 }}
        />
      </CardContent>

      {/* Selected office modal */}
      {selectedOffice && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <CardHeader className="relative pb-4">
              <button
                onClick={() => setSelectedOffice(null)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
              <CardTitle className="text-2xl text-primary pr-8">
                {selectedOffice.city} Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Office Image */}
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={selectedOffice.image}
                  alt={`${selectedOffice.city} office building`}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Physical Address */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  Physical Address
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-900">
                    {selectedOffice.fullAddress}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  Phone Numbers
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-lg text-gray-900">
                      <a href={`tel:${selectedOffice.phone1.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                        {selectedOffice.phone1}
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-lg text-gray-900">
                      <a href={`tel:${selectedOffice.phone2.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                        {selectedOffice.phone2}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
};

export default GeorgiaMap;
