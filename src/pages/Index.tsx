import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import MissionValues from "@/components/home/MissionValues";
import ProductsOverview from "@/components/home/ProductsOverview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <MissionValues />
        
        {/* Parallax Section */}
        <section 
          className="parallax h-[500px]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070')`,
          }}
          aria-label="Family togetherness visual break"
        />
        
        <ProductsOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
