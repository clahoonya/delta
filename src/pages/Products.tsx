import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import familyPortrait from "@/assets/family-portrait.jpg";
import insurancePlanning from "@/assets/insurance-planning.jpg";
import familyHomeExterior from "@/assets/family-home-exterior.jpg";

const Products = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    products: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.zipCode || !formData.products) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const message = `Product(s) interested in: ${formData.products}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nZip Code: ${formData.zipCode}`;

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: 'getcovered@delta-life.com',
          message,
          phone: formData.phone,
          address: formData.address,
          zipCode: formData.zipCode,
          products: formData.products,
          type: 'quote'
        }),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Received!",
          description: "Thank you! An agent will contact you shortly with your personalized quote."
        });
        setFormData({ name: "", email: "", phone: "", address: "", zipCode: "", products: "" });
      } else {
        throw new Error('Failed to send quote request');
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive"
      });
    }
  };
  const wholeLifeProducts = [
    {
      name: "Delta Life Classic Preferred",
      features: [
        "Permanent protection",
        "Children's rider to age 25",
        "Premium waiver included",
        "Accidental death benefit"
      ],
      brochureUrl: "/brochures/classic-preferred.pdf"
    },
    {
      name: "Delta One Parent Family Plan",
      features: [
        "Whole life paid up at age 65",
        "Unlimited number of children covered",
        "Additional benefits for loss of sight or limbs"
      ],
      brochureUrl: "/brochures/one-parent-family.pdf"
    },
    {
      name: "Delta Life Protector Plan",
      features: [
        "Simple issue graded death benefit",
        "Existing health conditions accepted",
        "Immediate benefit"
      ],
      brochureUrl: "/brochures/protector-plan.pdf"
    },
    {
      name: "Delta Life Lump Sum Cancer Plan",
      features: [
        "Benefits paid upon confirmed diagnosis of invasive or non-invasive Cancer",
        "Annual Wellness benefit",
        "Individual and family plans available"
      ],
      brochureUrl: "/brochures/cancer-plan.pdf"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Background */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={familyPortrait}
              alt="Family portrait - representing comprehensive family protection"
              className="w-full h-full object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Insurance Products
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Experience the personal touch of home service insurance. We bring whole life insurance directly to your door—building lasting coverage through face-to-face relationships. Serving families across Georgia with protection that grows cash value while securing your family's future.
            </p>
          </div>
        </section>

        {/* Products Overview - Whole Life Insurance Grid */}
        <section className="py-16 md:py-24 bg-background-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Whole Life Insurance</h2>
              
              {/* Life Insurance Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto">
                <img
                  src={insurancePlanning}
                  alt="Life insurance planning documents with family photos"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Grid Layout for Products */}
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {wholeLifeProducts.map((product, index) => (
                  <Card key={index} className="transition-shadow text-center">
                    <CardHeader>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start justify-center">
                            <span className="mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" asChild>
                        <a href={product.brochureUrl} download>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Download Brochure
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Request Information Section */}
        <section className="py-16 md:py-24 bg-[#1a2332]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Request information on our Products
                </h2>
                <p className="text-lg text-white/80">
                  Request your personalized life insurance quote today — quick, easy, and secure.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-2">
                    Products Interested In *
                  </label>
                  <select
                    id="products"
                    value={formData.products}
                    onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white"
                    required
                  >
                    <option value="">Select a product</option>
                    <option value="Delta Life Classic Preferred">Delta Life Classic Preferred</option>
                    <option value="Delta One Parent Family Plan">Delta One Parent Family Plan</option>
                    <option value="Delta Life Protector Plan">Delta Life Protector Plan</option>
                    <option value="Delta Life Lump Sum Cancer Plan">Delta Life Lump Sum Cancer Plan</option>
                  </select>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="px-12"
                  >
                    Submit Request
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Your information is safe and will only be used to provide your quote.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
