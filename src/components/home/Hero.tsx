import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/family-bike.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy family with child learning to ride bike - representing security, growth and family protection"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Service is our priority and people are our focus
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Protecting families and securing futures since 1958 with trusted life insurance solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
