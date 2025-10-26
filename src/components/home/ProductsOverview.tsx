import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductsOverview = () => {
  // Define our product offerings
  const products = [
    {
      title: "Delta Life Classic Preferred",
      features: [
        "Permanent protection",
        "Children's rider to age 25",
        "Premium waiver included",
        "Accidental death benefit"
      ]
    },
    {
      title: "Delta One Parent Family Plan",
      features: [
        "Whole life paid up at age 65",
        "Unlimited number of children covered",
        "Additional benefits for loss of sight or limbs"
      ]
    },
    {
      title: "Delta Life Protector Plan",
      features: [
        "Simple issue graded death benefit",
        "Existing health conditions accepted",
        "Immediate benefit"
      ]
    },
    {
      title: "Delta Life Lump Sum Cancer Plan",
      features: [
        "Benefits paid upon confirmed diagnosis of invasive or non-invasive Cancer",
        "Annual Wellness benefit",
        "Individual and family plans available"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-base text-white/90 max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to protect what matters most to your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-left">
                      <span className="mr-2 text-secondary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
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
