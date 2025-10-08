import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Heart, Home } from "lucide-react";

const ProductsOverview = () => {
  const products = [
    {
      icon: FileText,
      title: "Whole Life Insurance",
      description: "Comprehensive coverage options including Classic Preferred, One Parent Family Policy, Graded Policy, and 10/20-Year Paid Up plans.",
      link: "/products#whole-life"
    },
    {
      icon: Heart,
      title: "Cancer Insurance",
      description: "Specialized coverage to help protect your family from the financial burden of cancer treatment.",
      link: "/products#cancer"
    },
    {
      icon: Home,
      title: "Fire & Contents Insurance",
      description: "Protect your home and belongings with comprehensive property insurance coverage.",
      link: "/products#fire-contents"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Comprehensive insurance solutions tailored to protect what matters most to your family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {product.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <Link to={product.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
