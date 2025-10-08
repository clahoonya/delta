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
        <ProductsOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
