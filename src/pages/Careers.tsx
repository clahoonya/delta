import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, FileText, TrendingUp, Mail, Download } from "lucide-react";
import careersImage from "@/assets/business-professional.jpg";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Background */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={careersImage}
              alt="Delta Life team members collaborating"
              className="w-full h-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Build a rewarding career helping families and serving your community
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-background-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Work at Delta Life?
              </h2>
              <p className="text-lg text-white/90">
                For over 65 years, Delta Life has been more than just an insurance company—we're a family. 
                We invest in our employees' growth, offer competitive benefits, and provide the support you 
                need to build a lasting career.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Supportive Culture</h3>
                <p className="text-white/80">
                  Work with a team that values collaboration, respect, and personal growth.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Career Growth</h3>
                <p className="text-white/80">
                  Access training, development programs, and advancement opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Competitive Benefits</h3>
                <p className="text-white/80">
                  Enjoy comprehensive health coverage, retirement plans, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recruiting Brochures */}
        <section className="py-16 md:py-24 bg-[#1a2332]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Learn More About Opportunities
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Download our recruiting brochures to discover the benefits and opportunities
                of joining the Delta Life family.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <a href="/brochures/recruiting-full.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Full Brochure
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/brochures/recruiting-mini.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Quick Guide
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-background-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                We're always looking for talented, dedicated individuals who share our commitment
                to serving families and communities. Send us your information and we'll be in touch
                about current opportunities.
              </p>
              <Button asChild variant="default" size="lg">
                <a href="mailto:careers@delta-life.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
