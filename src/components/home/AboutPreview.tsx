import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import agentFamilyMeeting from "@/assets/agent-family-meeting.jpg";

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout: image on left, content on right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={agentFamilyMeeting}
                alt="Insurance agent meeting with family - personal service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Legacy of Trust Since 1958
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Delta Life Insurance Company and Delta Fire and Casualty Insurance Company were founded in 1958 by Atlanta businessman, philanthropist, and entrepreneur J. Mack Robinson. 
                What began as a vision to provide credit life insurance for his finance clients soon expanded into the Home Service marketplace in 1962.
              </p>
              <p className="text-lg text-white/90 mb-8">
                Today, our companies continue Robinson's legacy of innovation and service, dedicated to protecting families and supporting communities with dependable insurance solutions.
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
