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
    address: "",
    products: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.products) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const message = `Product(s) interested in: ${formData.products}${formData.address ? `\nAddress: ${formData.address}` : ''}`;

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message,
          address: formData.address,
          products: formData.products,
          type: 'quote'
        }),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Received!",
          description: "Thank you! An agent will contact you shortly with your personalized quote."
        });
        setFormData({ name: "", email: "", address: "", products: "" });
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
        "Competitive premiums",
        "Flexible coverage options",
        "Cash value accumulation"
      ],
      brochureUrl: "/brochures/classic-preferred.pdf"
    },
    {
      name: "Delta Life One Parent Family Policy",
      features: [
        "Family coverage in one policy",
        "Affordable protection",
        "Simple application process"
      ],
      brochureUrl: "/brochures/one-parent-family.pdf"
    },
    {
      name: "Delta Life Graded Policy",
      features: [
        "Guaranteed acceptance",
        "No medical exam required",
        "Immediate coverage"
      ],
      brochureUrl: "/brochures/graded-policy.pdf"
    },
    {
      name: "10 and 20-Year Paid Up Whole Life",
      features: [
        "Limited payment period",
        "Lifetime coverage",
        "Guaranteed cash values"
      ],
      brochureUrl: "/brochures/10-20-year-paid-up.pdf"
    },
    {
      name: "Delta's 12-Point Protection Plan",
      features: [
        "Comprehensive household contents insurance",
        "Protection against fire, smoke, and water damage",
        "Coverage for lightning and storm damage",
        "Safeguards furniture, appliances, electronics, and clothing",
        "Simple and affordable package"
      ],
      brochureUrl: "/brochures/12-point-protection.pdf"
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Insurance Products
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive protection for every stage of life
            </p>
          </div>
        </section>

        {/* Products Overview - Two Column Layout */}
        <section className="py-16 md:py-24 bg-background-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
              
              {/* Left Column: Whole Life Insurance */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Whole Life Insurance</h2>
                
                {/* Life Insurance Image */}
                <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={insurancePlanning}
                    alt="Life insurance planning documents with family photos"
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  {wholeLifeProducts.map((product, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground mb-4">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
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

              {/* Right Column: Fire or Contents Insurance */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 whitespace-nowrap">Fire or Contents Insurance</h2>
                
                {/* Fire Insurance Image */}
                <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={familyHomeExterior}
                    alt="Happy family in front of their protected home"
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <Card className="hover:shadow-lg transition-shadow h-fit">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6">
                      Our property and casualty division provides comprehensive coverage for your home, auto, and personal property needs. We understand that protecting your assets is just as important as protecting your family's future.
                    </p>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Homeowners Insurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Cancer Insurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Auto Insurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Personal Property Coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Liability Protection</span>
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/brochures/fire-safety.pdf" download>
                        Download Brochure
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Get a Quote Section */}
        <section className="py-16 md:py-24 bg-[#1a2332]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get a Quote
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
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                  />
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
                    <option value="Delta Life One Parent Family Policy">Delta Life One Parent Family Policy</option>
                    <option value="Delta Life Graded Policy">Delta Life Graded Policy</option>
                    <option value="10 and 20-Year Paid Up Whole Life">10 and 20-Year Paid Up Whole Life</option>
                    <option value="Delta's 12-Point Protection Plan">Delta's 12-Point Protection Plan</option>
                    <option value="Fire or Contents Insurance">Fire or Contents Insurance</option>
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
