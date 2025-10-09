import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import familyMoving from "@/assets/family-moving.jpg";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
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
        setFormData({ name: "", address: "", email: "", products: "" });
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

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Background */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={familyMoving}
              alt="Family moving into new home - representing life transitions and protection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Get a Quote
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Start protecting your family today
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 md:py-24 bg-background-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Request Your Free Quote</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and one of our experienced agents will contact you to discuss 
                  your coverage needs and provide a personalized quote.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-primary">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="!bg-white !border-gray-300 !text-black placeholder:!text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-primary">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="123 Main St, Atlanta, GA 30301"
                      className="!bg-white !border-gray-300 !text-black placeholder:!text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-primary">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john.doe@example.com"
                      required
                      className="!bg-white !border-gray-300 !text-black placeholder:!text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="products" className="text-primary">Products Interested In *</Label>
                    <Select value={formData.products} onValueChange={(value) => setFormData({ ...formData, products: value })}>
                      <SelectTrigger className="!bg-white !border-gray-300 !text-black">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent className="!bg-white !text-black z-[100]">
                        <SelectItem value="whole-life-classic">Delta Life Classic Preferred</SelectItem>
                        <SelectItem value="whole-life-family">One Parent Family Policy</SelectItem>
                        <SelectItem value="whole-life-graded">Graded Policy</SelectItem>
                        <SelectItem value="whole-life-paidup">10/20-Year Paid Up</SelectItem>
                        <SelectItem value="cancer">Cancer Insurance</SelectItem>
                        <SelectItem value="property">Fire & Contents Insurance</SelectItem>
                        <SelectItem value="multiple">Multiple Products</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full">
                    Request Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
