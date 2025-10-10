import { Shield, Users, TrendingUp, Heart } from "lucide-react";

const MissionValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty and transparency in every interaction."
    },
    {
      icon: Users,
      title: "Customer-first Approach",
      description: "Your family's needs and security are at the heart of everything we do."
    },
    {
      icon: TrendingUp,
      title: "Financial Stability",
      description: "65 years of proven strength and reliability you can count on."
    },
    {
      icon: Heart,
      title: "Community Commitment",
      description: "Deeply rooted in Georgia, serving our neighbors with care."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background-soft">
      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground">
                We provide financial security and protection for Georgia families through our trusted insurance products and personal service.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-4">Vision</h3>
              <p className="text-muted-foreground">
                Our vision is to be the leading provider of insurance products to safeguard the financial future of those we service.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
