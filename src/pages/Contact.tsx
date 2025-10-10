import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import officeExterior from "@/assets/office-exterior.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          type: 'contact'
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
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
              src={officeExterior}
              alt="Delta Life office exterior"
              className="w-full h-full object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We're here to help answer your questions
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-[#2c3e50]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column - Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Name"
                          required
                          className="bg-white border-[#4a5f73] text-black placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email"
                          required
                          className="bg-white border-[#4a5f73] text-black placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Message"
                        maxLength={1000}
                        className="min-h-[150px] bg-white border-[#4a5f73] text-black placeholder:text-gray-500"
                        required
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="bg-[#4a5f73] hover:bg-[#5a6f83] text-white">
                      Send
                    </Button>
                  </form>
                </div>

                {/* Right Column - Company Information */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Company Information</h2>
                  <div className="text-white/90 space-y-4">
                    <p className="text-lg">Delta Life Insurance Company</p>
                    <p>4370 Peachtree Rd, NE</p>
                    <p>Atlanta, GA 30319</p>
                    <p className="pt-2">404-231-2111</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
