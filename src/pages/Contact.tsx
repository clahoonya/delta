import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import officeExterior from "@/assets/office-exterior.jpg";
import HeadOfficeMap from "@/components/HeadOfficeMap";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Make sure all fields are filled out
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Send the contact form to our email API
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
        // Reset form after successful submission
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

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24 bg-[#2c3e50]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column - Map and Head Office Info */}
                <div>
                  {/* Map Section */}
                  <div className="mb-6">
                    <HeadOfficeMap />
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-8">Head Office</h2>
                  <div className="text-white/90 space-y-4 mb-8">
                    <p className="text-lg font-semibold">Delta Life Insurance Company</p>
                    <p>4921 Jonesboro Rd Suite C</p>
                    <p>Forest Park, GA 30297</p>
                    <p className="pt-2">(404) 361-4897 • (800) 254-1076</p>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <p className="text-white/90 mb-4">Looking for another location?</p>
                    <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                      <Link to="/district-offices">
                        Find an Office Near You
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
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
