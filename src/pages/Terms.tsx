import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl opacity-90">Please read these terms carefully</p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-card p-8 rounded-lg shadow-md space-y-6 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-3">Terms and Conditions of Use</h2>
                  <p>
                    This document provides the terms and conditions of use of the DELTA LIFE INSURANCE website delta-life.com. 
                    Your use of this Site is conditional upon your acceptance of and compliance with these terms.
                  </p>
                  <p className="mt-3">
                    If you do not agree with any part of the Terms and Conditions, you must not use the apps and/or website (the "Site"). 
                    You can use the Site for online access to your personal policy information, our product information, educational content, our services.
                  </p>
                  <p className="mt-3 font-semibold">Read all our Terms and Conditions or click below to review a specific topic:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Email Policy</li>
                    <li>Copyrights and Trademarks</li>
                    <li>Third-Party Websites</li>
                    <li>Website Linking</li>
                    <li>Web Cookie Policy</li>
                    <li>General Privacy Notice</li>
                    <li>Disclaimer of Warranty</li>
                    <li>Limitation of Liability</li>
                    <li>Jurisdiction / Enforceability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Email Policy</h3>
                  <p>
                    If you no longer wish to receive marketing or promotional emails from Delta Life Insurance, please click the 
                    Unsubscribe link included in these emails. If you unsubscribe from marketing or promotional emails, we will 
                    continue to send transactional email messages for service and support.
                  </p>
                  <p className="mt-3">
                    Email messages are not secure. Our security software encrypts email messages.
                  </p>
                  <p className="mt-3">
                    Unencrypted email messages traveling through the Internet are potentially subject to viewing, alteration and 
                    copying by others.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Copyrights and Trademarks</h3>
                  <p>
                    All Contents ©2025 Delta Life Insurance Company. All Rights Reserved. The contents of all material available 
                    on this Internet site are copyrighted by Delta Life Insurance Company, unless otherwise indicated. All rights 
                    are reserved by Delta Life Insurance Company, and content may not be reproduced, downloaded, disseminated, 
                    published, or transferred in any form or by any means, except with the prior written permission of Delta Life 
                    Insurance Company. Copyright infringement is a violation of federal law subject to criminal and civil penalties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Third-Party Websites</h3>
                  <p>
                    The Site contains links to other Internet websites (third-party websites) that are not maintained by Delta Life 
                    Insurance Company. These links are provided solely for your convenience. Delta Life Insurance Company makes no 
                    warranties or representations about the content of, about any products or services offered by, or about the security 
                    or the intellectual property compliance of, such third-party websites. We recommend that, before using these websites, 
                    you take the time to read the privacy policies and user agreements of those websites.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Website Linking</h3>
                  <p>
                    You may not link to our website without our consent. By using the Website, you agree to cooperate with us in causing 
                    any unauthorized framing or linking to immediately cease.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Web Cookie Policy</h3>
                  <p>
                    Web cookies are small computer files that a website places on an Internet user's computer to store basic information. 
                    Generally, cookies help website operators serve their users better and more quickly. There are two types of cookies: 
                    session and persistent. Session cookies exist only during an Internet user's online session. They do not collect 
                    information from a user's computer, and they typically store information only in the form of session identification. 
                    Session cookies are erased from a user's computer when the user closes the browser software. Persistent cookies remain 
                    on a user's computer after the browser has been closed and are stored on a user's hard drive until they expire or until 
                    the user deletes the cookie. Persistent cookies are used to collect identifying information about a user, such as Web 
                    surfing behavior or user preferences for a specific website.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-primary mb-2 mt-4">How We Use Web Cookies</h4>
                  <p>
                    When you interact with the Delta Life Insurance Company website, we strive to make your experience easy and meaningful. 
                    Our Web server uses both session and persistent cookies to improve your interaction with the Website, and to help us 
                    improve user experience. We use cookies to measure behavior on this website for usability purposes and to save choices 
                    made on some pages. The cookies used on this website do not identify you personally. Unless you choose to identify yourself 
                    voluntarily, they merely recognize your browser. You may choose to identify yourself to us by requesting a quote, by 
                    requesting more information on a product or service, or by completing one of several contact forms. Otherwise, you remain 
                    anonymous. Users who disable their Web browsers' ability to accept cookies can still browse this website. However, we 
                    encourage you to accept cookies (which can be set through your browser settings) so that we may take further strides in 
                    making this website easier to use.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">General Privacy Notice</h3>
                  <p>
                    Delta Life Insurance Company recognizes the importance of our customers' trust. Keeping personal information confidential 
                    is a top priority for all Delta Life Insurance Company employees, agents and staff. This privacy notice, which is required 
                    by state and federal law, explains our privacy practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Disclaimer of Warranty</h3>
                  <p className="uppercase">
                    THE CONTENT AND MATERIALS IN THE DELTA LIFE INSURANCE SITE ARE PROVIDED "AS IS" AND EXPRESSLY DISCLAIMS ALL WARRANTIES, 
                    EXPRESS OR IMPLIED, WITH RESPECT TO THIS SITE INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, 
                    FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. DELTA LIFE INSURANCE DOES NOT WARRANT OR REPRESENT THAT THE 
                    FUNCTIONS OR OPERATION OF THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE 
                    SITE, ITS SERVERS OR ANY EMAIL SENT FROM DELTA LIFE INSURANCE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. SOME 
                    STATES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES, SO SOME OR ALL OF THE FOREGOING DISCLAIMER MAY NOT APPLY TO YOU.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Limitation of Liability</h3>
                  <p className="uppercase">
                    DELTA LIFE INSURANCE SHALL NOT BE LIABLE FOR ANY INJURY, LOSS, CLAIM, OR DAMAGES OF ANY KIND, WHETHER BASED IN CONTRACT, 
                    TORT, STRICT LIABILITY OR OTHERWISE, WHICH ARISES OUT OF (1) THE USE OF, OR INABILITY TO USE, THIS WEBSITE OR CONTENT 
                    FOUND IN THE SITE, AND (2) UNLESS RESULTING FROM THE GROSS NEGLIGENCE OR INTENTIONAL ACTIONS OF DELTA LIFE INSURANCE, 
                    OR THE UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA BUT ONLY TO THE EXTENT OF THE COST TO CORRECT THE SECURITY 
                    DEFECT OR TO RESTORE THE AFFECTED INFORMATION. DELTA LIFE INSURANCE SHALL NOT IN ANY CASE BE LIABLE FOR ANY INDIRECT, 
                    SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR SIMILAR DAMAGES OF ANY KIND, EVEN IF DELTA LIFE INSURANCE HAS BEEN ADVISED OF 
                    THE POSSIBILITY OF SUCH DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OF LIABILITY FOR CERTAIN DAMAGES, SO SOME OR 
                    ALL OF THE FOREGOING EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Jurisdiction / Enforceability</h3>
                  <p>
                    Use of the Delta Life Insurance Company website shall be governed by, and its language must be construed in accordance 
                    with the laws of, the State of Georgia without giving effect to any principles of conflicts of laws. Any dispute concerning 
                    the Site or the stated policies shall be subject to the exclusive venue of a court of competent jurisdiction in Fulton 
                    County, Georgia.
                  </p>
                  <p className="mt-3">
                    Should any provision of these Terms and Conditions be held to be invalid, unlawful or for any reason unenforceable, then 
                    the affected provision shall be severable from the remaining provisions. A severed provision shall not affect the validity 
                    or enforceability of the remaining provisions.
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm italic">
                    Last Updated: January 2025
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

export default Terms;
