import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import familyAdvisor from "@/assets/family-advisor.jpg";
import familyReading from "@/assets/family-reading.jpg";
import familyTogether from "@/assets/family-together.jpg";
import seniorCouplePlanning from "@/assets/senior-couple-planning.jpg";
import homeOfficeExterior from "@/assets/home-office-exterior.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Background */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={familyTogether}
              alt="Family together - representing Delta Life's commitment to protecting families"
              className="w-full h-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About Delta Life Insurance
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              A legacy of trust and service since 1958
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-background-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-white/90 mb-4">
                  Delta Life Insurance Company and Delta Fire and Casualty Insurance Company were founded in 1958 by Atlanta businessman, philanthropist, and entrepreneur J. Mack Robinson. 
                  What began as a vision to provide credit life insurance for his finance clients soon expanded into the Home Service marketplace in 1962.
                </p>
                <p className="text-white/90 mb-4">
                  Today, our companies continue Robinson's legacy of innovation and service, dedicated to protecting families and supporting communities with dependable insurance solutions.
                </p>
              </div>
              
              {/* Office Building Image */}
              <div className="mt-8 flex justify-center">
                <img
                  src={homeOfficeExterior}
                  alt="Delta Life Insurance Company home office building exterior"
                  className="rounded-lg shadow-lg max-w-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Home Service Model */}
        <section className="py-16 md:py-24 bg-background-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img
                    src={familyAdvisor}
                    alt="Family meeting with insurance advisor - representing personalized home service"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    The Home Service Difference
                  </h2>
                  <p className="text-lg text-white/90 mb-6">
                    Home service life insurance is a personal approach to insurance that has served families for generations. 
                    Our agents come to you, building relationships and providing face-to-face support when you need it most.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    A dedicated agent builds a relationship with you and your family. Your agent lives in or near your community,
                    providing a trusted, face-to-face resource who understands your needs.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">Convenience</h3>
                  <p className="text-muted-foreground">
                    Premiums are collected at your home or workplace, helpful for people without reliable access to banks or online
                    payments, or who simply prefer in-person transactions.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">Accessibility for All</h3>
                  <p className="text-muted-foreground">
                    Home service has historically provided coverage to working-class families, rural areas, and people who may not
                    be targeted by traditional insurance channels, helping everyone gain the protection they need.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">Education & Guidance</h3>
                  <p className="text-muted-foreground">
                    Your agent explains coverage in plain language and helps with paperwork. Beneficiaries receive hands-on support
                    during the claims process—a major relief during difficult times.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">Affordable Coverage</h3>
                  <p className="text-muted-foreground">
                    Many home service policies are structured as smaller face-value policies ($1,000–$25,000), making them more
                    affordable for families on a budget, often intended for final expenses.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">Trust & Accountability</h3>
                  <p className="text-muted-foreground">
                    Regular visits create accountability—you know who your agent is, and we maintain visibility in your community,
                    building lasting trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Why Choose Delta Life?
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                      <h3 className="text-xl font-semibold text-primary mb-3">65+ Years of Stability</h3>
                      <p className="text-muted-foreground">
                        Decades of financial strength and proven reliability give you confidence that we'll be 
                        here when your family needs us most.
                      </p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                      <h3 className="text-xl font-semibold text-primary mb-3">Personal Service</h3>
                      <p className="text-muted-foreground">
                        Our agents come to you, building lasting relationships and providing the individualized 
                        attention your family deserves.
                      </p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                      <h3 className="text-xl font-semibold text-primary mb-3">Georgia-Focused</h3>
                      <p className="text-muted-foreground">
                        As a company exclusively serving Georgia, we understand the unique needs of our 
                        communities and are deeply invested in their well-being.
                      </p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md card-hover text-center">
                      <h3 className="text-xl font-semibold text-primary mb-3">Family Owned</h3>
                      <p className="text-muted-foreground">
                        Our family-owned structure means we can prioritize long-term relationships over 
                        short-term profits, always putting your needs first.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={familyReading}
                    alt="Multi-generational family reading together - representing family values and trust"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-24 bg-background-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Our Commitment to You
                  </h2>
                  <p className="text-lg text-white/90">
                    At Delta Life, we understand that life insurance is about more than policies and premiums. 
                    It's about peace of mind. It's about knowing your loved ones will be cared for. It's about 
                    dignity, security, and the confidence to face the future. That's why we're committed to 
                    being there for you—not just when you sign up, but throughout your entire journey with us.
                  </p>
                </div>
                <div>
                  <img
                    src={seniorCouplePlanning}
                    alt="Senior couple reviewing insurance documents - peace of mind and security"
                    className="rounded-lg shadow-lg w-full"
                  />
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

export default About;
