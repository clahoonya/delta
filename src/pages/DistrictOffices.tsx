import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import officeImage from "@/assets/office-exterior.jpg";
import GeorgiaMap from "@/components/GeorgiaMap";

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
              className="w-full h-full object-cover object-[center_60%]"
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
