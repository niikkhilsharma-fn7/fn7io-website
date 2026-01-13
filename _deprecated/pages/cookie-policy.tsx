import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                FN7 ("we", "our", or "us") uses cookies and similar tracking technologies on our website 
                (fn7.io and related subdomains). This Cookie Policy explains what cookies are, how we use them, 
                and how you can manage your cookie preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit a website. They help websites remember information about your visit, 
                making your next visit easier and the site more useful to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Necessary Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are essential for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas of the website.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li><strong>cookieConsent:</strong> Stores your cookie consent preferences</li>
                  <li><strong>cookieConsentDate:</strong> Records when you provided consent</li>
                  <li><strong>sessionId:</strong> Maintains your session while browsing</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li><strong>_ga:</strong> Google Analytics - distinguishes unique users (expires after 2 years)</li>
                  <li><strong>_gid:</strong> Google Analytics - distinguishes unique users (expires after 24 hours)</li>
                  <li><strong>_gat:</strong> Google Analytics - throttles request rate (expires after 1 minute)</li>
                  <li><strong>GTM cookies:</strong> Google Tag Manager - manages other tracking tags</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Marketing Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies track your online activity to help advertisers deliver more relevant 
                  advertising or to limit how many times you see an ad.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li><strong>utm_* parameters:</strong> Track marketing campaign effectiveness</li>
                  <li><strong>fbp:</strong> Facebook Pixel - tracks visits from Facebook ads</li>
                  <li><strong>li_* cookies:</strong> LinkedIn - tracks visits from LinkedIn</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies to:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website and improve its performance</li>
                <li>Analyze traffic patterns and user behavior</li>
                <li>Personalize your experience</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
                <li>Provide relevant advertisements</li>
                <li>Detect and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-gray-700">
                  When you first visit our website, you will see a cookie consent banner that allows you to:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                  <li>Accept all cookies</li>
                  <li>Accept only necessary cookies</li>
                  <li>Customize your preferences by category</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                You can change your cookie preferences at any time by:
              </p>
              <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-2">
                <li>Clearing your browser cookies for fn7.io</li>
                <li>Revisiting our website to see the consent banner again</li>
                <li>Adjusting your browser settings to block or delete cookies</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Browser Cookie Settings</h2>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. Here's how to 
                manage cookies in popular browsers:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Note:</strong> Blocking all cookies may affect your experience on our website and 
                prevent certain features from working properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Some cookies on our website are set by third-party services that appear on our pages. 
                We do not control these cookies, and you should refer to the third parties' privacy 
                policies for more information:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                    Facebook Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                    LinkedIn Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                Cookie data is retained for different periods depending on the type of cookie:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Retained for the period specified in the cookie (typically 1-2 years)</li>
                <li><strong>Analytics data:</strong> Aggregated and anonymized after 26 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Your Rights</h2>
              <p className="text-gray-700 mb-4">Under GDPR and other privacy laws, you have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Know what cookies we use and why</li>
                <li>Consent to or refuse the use of cookies</li>
                <li>Withdraw your consent at any time</li>
                <li>Request information about the data collected through cookies</li>
                <li>Request deletion of data collected through cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for legal, operational, or regulatory reasons. We will notify you of any material 
                changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@fn7.io<br />
                  <strong>Address:</strong> FN7 Inc.<br />
                  Data Protection Officer<br />
                  [Your Address]
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Related policies: 
                <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline ml-2">
                  Privacy Policy
                </Link>
                {" | "}
                <Link href="/tnc" className="text-purple-600 hover:text-purple-700 underline ml-2">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}