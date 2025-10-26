import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90">Your privacy is important to us</p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-card p-8 rounded-lg shadow-md space-y-6 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-3">Privacy Policy</h2>
                  <p>
                    Delta Life Insurance Company is committed to protecting your privacy and ensuring the security 
                    of your personal information. This Privacy Policy explains how we collect, use, and safeguard 
                    your data when you visit our website or interact with our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Information We Collect</h3>
                  <p>
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, address, email, phone number, and other contact details you provide through forms or communications.</li>
                    <li><strong>Policy Information:</strong> Details related to insurance policies, claims, and coverage.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
                    <li><strong>Cookies and Tracking:</strong> Data collected through cookies and similar technologies to enhance your experience and analyze site performance.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">How We Use Your Information</h3>
                  <p>
                    Delta Life uses your information for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and manage insurance services, including processing applications, claims, and policy changes</li>
                    <li>To communicate with you about your policies, answer inquiries, and provide customer support</li>
                    <li>To improve our website functionality and user experience</li>
                    <li>To comply with legal and regulatory requirements</li>
                    <li>To send promotional materials and updates, with your consent (you may opt out at any time)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Information Sharing and Disclosure</h3>
                  <p>
                    We do not sell, rent, or trade your personal information to third parties. We may share your 
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our business, such as IT service providers and claims processors, under strict confidentiality agreements</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Data Security</h3>
                  <p>
                    Delta Life employs industry-standard security measures to protect your personal information 
                    from unauthorized access, alteration, disclosure, or destruction. These measures include secure 
                    servers, encryption, and restricted access to sensitive data. However, no method of transmission 
                    over the internet is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Your Rights and Choices</h3>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access, update, or delete your personal information by contacting us</li>
                    <li>Opt out of receiving marketing communications at any time</li>
                    <li>Disable cookies through your browser settings (though this may affect website functionality)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Children's Privacy</h3>
                  <p>
                    Our website is not intended for children under the age of 13. We do not knowingly collect 
                    personal information from children. If we become aware that we have inadvertently collected 
                    such information, we will take steps to delete it.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Changes to This Privacy Policy</h3>
                  <p>
                    Delta Life reserves the right to update this Privacy Policy at any time. Any changes will be 
                    posted on this page with an updated effective date. We encourage you to review this policy 
                    periodically to stay informed about how we protect your information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Contact Us</h3>
                  <p>
                    If you have any questions or concerns about this Privacy Policy or how we handle your personal 
                    information, please contact us through our Contact page or reach out to your local Delta Life agent.
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm italic">
                    Effective Date: January 2025
                  </p>
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

export default Privacy;
