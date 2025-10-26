import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import officeImage from "@/assets/office-exterior.jpg";
import GeorgiaMap from "@/components/GeorgiaMap";
import { MapPin, Phone } from "lucide-react";

const DistrictOffices = () => {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Background */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={officeImage}
              alt="Delta Life district office exterior"
              className="w-full h-full object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              District Offices
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Serving communities across Georgia
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-background-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Our Locations Across Georgia</h2>
                <p className="text-white/90">
                  Click on any location pin to view office details
                </p>
              </div>
              <GeorgiaMap />
            </div>
          </div>
        </section>

        {/* Office Address List */}
        <section className="py-16 bg-background-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                All Office Locations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-semibold text-primary mb-3">Albany Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">2101 Dawson Rd, Albany, GA 31707</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">(229) 439-7021</p>
                  </div>
                </div>

                <div className="bg-amber-50 border-2 border-amber-500 p-6 rounded-lg shadow-md card-hover relative">
                  <div className="absolute top-2 right-2">
                    <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-amber-500 rounded">HQ</span>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-3">Atlanta Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">4370 Peachtree Rd NE Ste 500, Atlanta, GA 30319</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      <p className="text-gray-700">Desk: 404.504.5880</p>
                    </div>
                    <p className="text-gray-700 text-sm ml-6">Cell: 404.217.8626</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-semibold text-primary mb-3">Augusta Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">1212 West Medical Park Rd, Augusta, GA 30909</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">(706) 798-3244</p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-semibold text-primary mb-3">Douglas Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">810 North Madison Ave, Douglas, GA 31533</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">(912) 384-3932</p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-semibold text-primary mb-3">Dublin Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">120 Oak Street, Dublin, GA 31021</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">(478) 272-1312</p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-semibold text-primary mb-3">Macon Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">1314 Hardeman Ave, Macon, GA 31201</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">(478) 745-7961</p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-semibold text-primary mb-3">Savannah Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">2231 E Victory Dr, Savannah, GA 31414</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">(912) 354-0996</p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-semibold text-primary mb-3">Thomasville Office</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">444 E Jackson St, Thomasville, GA 31792</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">(229) 226-9390</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-background-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Personal Service, Right in Your Neighborhood
              </h2>
              <p className="text-lg text-white/90">
                Each of our district offices is staffed with experienced agents who live and work in your community. 
                They understand your needs and are committed to providing the personal, face-to-face service that 
                has been our hallmark for over 65 years.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DistrictOffices;
