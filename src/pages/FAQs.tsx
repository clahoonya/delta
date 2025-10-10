import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import familyReading from "@/assets/family-reading.jpg";

const FAQs = () => {
  const faqs = [
    {
      question: "What is the Home Service model?",
      answer: "Home service life insurance (sometimes called debit insurance or industrial life insurance) is a type of life insurance that has traditionally been sold and serviced in person, with agents visiting policyholders at their homes to collect premiums, explain coverage, and assist with claims. This personal approach means you have a dedicated agent who builds a relationship with you and your family, providing a trusted, face-to-face resource right in your community."
    },
    {
      question: "What are the key benefits of Home Service Life Insurance?",
      answer: "1. Personalized Service: A dedicated agent builds a relationship with you and your family, providing trusted face-to-face support. 2. Convenience: Premiums can be collected at your home or workplace, helpful for those without reliable access to banks or online payments. 3. Accessibility: Provides coverage to working-class families, rural areas, and people who may not be targeted by traditional insurance channels. 4. Education and Guidance: Your agent explains coverage in plain language and helps with paperwork, providing hands-on support during the claims process. 5. Affordable Policies: Smaller face-value policies ($1,000-$25,000) designed for final expenses. 6. Trust and Accountability: Regular visits create accountability and visibility in the community."
    },
    {
      question: "What are final expenses and why are they important?",
      answer: "Final expenses include all costs associated with end-of-life arrangements, including funeral services, burial or cremation, caskets, flowers, obituaries, and related fees. These costs typically range from $10,000 to $20,000 or more. Planning for these expenses ensures your family isn't burdened with financial stress during an already difficult time."
    },
    {
      question: "How much does a funeral typically cost?",
      answer: "According to national data, viewing and burial funerals average around $8,300 (median), while cremation with viewing averages $6,280. General funeral costs typically range from $7,000 to $12,000. However, when you include cemetery-related costs (burial plot, opening/closing fees, vault, headstone), the total can easily reach $11,500 to $20,000+ depending on location, cemetery type (public vs. private), and service choices."
    },
    {
      question: "Why should I choose whole life insurance over term life?",
      answer: "Whole life insurance provides lifelong coverage with guaranteed premiums that never increase. It also builds cash value over time that you can access if needed. Term life insurance only covers you for a specific period and has no cash value. While term may have lower initial premiums, whole life offers permanent protection and long-term financial benefits."
    },
    {
      question: "How do I file a claim?",
      answer: "Filing a claim is simple. Contact your local Delta Life agent or call our main office. Your agent will guide you through the process, help gather necessary documentation, and ensure your claim is processed quickly. We understand that claims occur during difficult times, so we make the process as easy and compassionate as possible."
    },
    {
      question: "Can I change my coverage amount later?",
      answer: "Yes, in many cases you can adjust your coverage as your needs change. Life events like marriage, children, home purchases, or career changes may warrant reviewing your policy. Contact your agent to discuss your options and ensure your coverage continues to meet your family's needs."
    },
    {
      question: "What makes Delta Life different from online insurance companies?",
      answer: "Unlike online companies where you're just a policy number, Delta Life provides personal, face-to-face service through local agents who know you and your family. We've been serving Georgia communities for over 65 years, and our family-owned structure means we prioritize long-term relationships over short-term profits. You'll always have someone to call, someone who cares, and someone who's there when you need them most."
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
              src={familyReading}
              alt="Family reading together - representing education and informed decisions"
              className="w-full h-full object-cover object-[center_60%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-background-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg shadow-sm px-6">
                    <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Section */}
        <section className="py-16 md:py-24 bg-background-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Understanding Final Expense Costs
              </h2>
              
              <div className="bg-card p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Funeral Home Services & Ceremony Costs</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">Service Type Averages</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium text-gray-900">Viewing & Burial Funeral</span>
                      <span className="text-gray-600">~$8,300 (median)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium text-gray-900">Cremation with Viewing</span>
                      <span className="text-gray-600">~$6,280 (median)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-medium text-gray-900">General Funeral Range</span>
                      <span className="text-gray-600">$7,000 - $12,000</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-primary mb-3">Typical Cost Composition (Median Values)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Basic services fee</span>
                    <span className="text-gray-600">~$2,300</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Transport</span>
                    <span className="text-gray-600">~$350</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Embalming</span>
                    <span className="text-gray-600">~$775</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Preparation (makeup, etc.)</span>
                    <span className="text-gray-600">~$275</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Viewing facility/staff</span>
                    <span className="text-gray-600">~$450</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Funeral ceremony</span>
                    <span className="text-gray-600">~$515</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Hearse & service car</span>
                    <span className="text-gray-600">~$500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Printed memorial package</span>
                    <span className="text-gray-600">~$183</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Metal casket</span>
                    <span className="text-gray-600">~$2,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-900">Vault (additional)</span>
                    <span className="text-gray-600">~$1,572</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Cemetery-Related Costs</h3>
                <p className="text-sm text-gray-600 mb-4 italic">Often not included in funeral home pricing</p>
                
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-primary mb-2">Burial Plot:</div>
                    <div className="pl-4 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Public cemetery</span>
                        <span className="text-gray-600">~$1,000 - $4,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Private cemetery</span>
                        <span className="text-gray-600">~$2,000 - $10,000+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Opening & closing fee</span>
                    <span className="text-gray-600">~$300 - $1,500</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">Vault / grave liner</span>
                    <span className="text-gray-600">~$700 - $2,000</span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-primary mb-2">Headstones / Markers:</div>
                    <div className="pl-4 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Flat marker</span>
                        <span className="text-gray-600">~$600 - $1,500</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Upright headstone</span>
                        <span className="text-gray-600">~$1,000 - $5,000+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Installation fee</span>
                        <span className="text-gray-600">~$200 - $1,000</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-primary mb-2 mt-3">Other Fees:</div>
                    <div className="pl-4 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Burial permit</span>
                        <span className="text-gray-600">~$10 - $30</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Maintenance/perpetual care</span>
                        <span className="text-gray-600">$50 - $1,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Example Breakdown: Typical Mid-Range Traditional Burial</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">1. Funeral Home Services</span>
                    <span className="text-gray-600">~$8,300</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">2. Burial Plot (public)</span>
                    <span className="text-gray-600">$1,000 - $4,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">3. Opening/Closing</span>
                    <span className="text-gray-600">$300 - $1,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">4. Vault / Liner</span>
                    <span className="text-gray-600">$700 - $2,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">5. Headstone / Marker</span>
                    <span className="text-gray-600">$1,000 - $3,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-900">6. Miscellaneous (flowers, maintenance)</span>
                    <span className="text-gray-600">Several hundred dollars</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 text-lg font-bold border-t-2">
                    <span className="text-primary">Estimated Total Range:</span>
                    <div className="text-right">
                      <div className="text-secondary">Lower end: ~$11,500</div>
                      <div className="text-secondary">Higher end: $15,000 - $20,000+</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-6">Summary</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">•</span>
                    <span><strong>Basic funeral home services:</strong> ~$6,000 to ~$9,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">•</span>
                    <span><strong>Cemetery-related costs</strong> (plot, burial equipment, headstones): Add another $3,000 to $10,000+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">•</span>
                    <span><strong>Total final expense estimate:</strong> $10,000 to $20,000 or more, depending on location, cemetery type, and optional services</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="text-lg font-semibold text-primary mb-3">Tips to Manage Costs</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">→</span>
                      <span>Shop around: Use the FTC's Funeral Rule to request price lists and compare services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">→</span>
                      <span>Consider cremation or green burials for lower costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">→</span>
                      <span>Buy urns or caskets separately, possibly cheaper at third-party retailers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">→</span>
                      <span>Pre-plan or pre-pay where available to lock in current prices</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary p-6 rounded-lg">
                <p className="text-primary-foreground">
                  <strong>Important:</strong> These are estimated ranges based on national averages and data from funeral industry sources.
                  Actual costs can vary significantly based on location, service choices, and individual preferences.
                  Having adequate life insurance coverage ensures your family can afford the services you desire without
                  financial hardship during an already difficult time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
