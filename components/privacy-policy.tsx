"use client";
import { useState, useEffect } from "react";

export const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Set the "Last updated" date
  const currentDate = 'Aug 23, 2025';

  // Handle scroll events to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      // Optional: Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white text-gray-800">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="font-bold mb-6">Last updated: {currentDate}</p>

      {/* Introduction */}
      <div className="mb-8">
        <p>This privacy notice for <strong>fn7 Inc.</strong> ("<strong>fn7</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might collect, store, use, and/or share ("<strong>process</strong>") your information when you use our services ("<strong>Services</strong>"), such as when you:</p>
        <ul className="list-disc pl-6 my-4">
          <li>Visit our website at <a href="https://www.fn7.io" className="text-blue-600 hover:underline">https://www.fn7.io</a>, or any website of ours that links to this privacy notice</li>
          <li>Use our Atlas Platform or any of our AI agents and applications</li>
          <li>Engage with our AI-powered Go-To-Market (GTM) services</li>
          <li>Interact with our AI agents (Scout, Muse, Hunt, Spark, Echo, Nudge, Oracle) across various platforms</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:privacy@fn7.io" className="text-blue-600 hover:underline">privacy@fn7.io</a>.</p>
      </div>

      {/* Key Points Summary */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">SUMMARY OF KEY POINTS</h2>
        <p className="mb-4">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>

        <p className="mb-2"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with fn7 and the Services, the choices you make, and the products and features you use. Learn more about <a href="#1-what-information-do-we-collect" className="text-blue-600 hover:underline" onClick={(e) => {e.preventDefault(); scrollToSection('1-what-information-do-we-collect')}}>personal information you disclose to us</a>.</p>

        <p className="mb-2"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>

        <p className="mb-2"><strong>Do we receive any information from third parties?</strong> We may receive information from third-party platforms when our AI agents interact with services like LinkedIn, Product Hunt, X (Twitter), Reddit, Meta (Facebook/Instagram), TikTok, YouTube, Pinterest, Snapchat, Google PMAX, and other emerging social media and marketing platforms on your behalf.</p>

        <p className="mb-2"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#2-how-do-we-process-your-information" className="text-blue-600 hover:underline" onClick={(e) => {e.preventDefault(); scrollToSection('2-how-do-we-process-your-information')}}>how we process your information</a>.</p>

        <p className="mb-2"><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#4-when-and-with-whom-do-we-share-your-personal-information" className="text-blue-600 hover:underline" onClick={(e) => {e.preventDefault(); scrollToSection('4-when-and-with-whom-do-we-share-your-personal-information')}}>when and with whom we share your personal information</a>.</p>

        <p className="mb-2"><strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#8-how-do-we-keep-your-information-safe" className="text-blue-600 hover:underline" onClick={(e) => {e.preventDefault(); scrollToSection('8-how-do-we-keep-your-information-safe')}}>how we keep your information safe</a>.</p>

        <p className="mb-2"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#9-what-are-your-privacy-rights" className="text-blue-600 hover:underline" onClick={(e) => {e.preventDefault(); scrollToSection('9-what-are-your-privacy-rights')}}>your privacy rights</a>.</p>

        <p className="mb-2"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="https://www.fn7.io/privacy-request" className="text-blue-600 hover:underline">https://www.fn7.io/privacy-request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

        <p className="mt-4">Want to learn more about what fn7 does with any information we collect? Review the privacy notice in full.</p>
      </section>

      {/* Table of Contents */}
      <section className="my-8 p-4 bg-gray-50 rounded-lg shadow-sm sticky top-4 z-10 max-h-[calc(100vh-2rem)] overflow-auto hidden md:block">
        <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
        <ol className="list-decimal pl-6">
          {[
            { id: "1-what-information-do-we-collect", title: "WHAT INFORMATION DO WE COLLECT?" },
            { id: "2-how-do-we-process-your-information", title: "HOW DO WE PROCESS YOUR INFORMATION?" },
            { id: "3-what-legal-bases-do-we-rely-on-to-process-your-personal-information", title: "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?" },
            { id: "4-when-and-with-whom-do-we-share-your-personal-information", title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" },
            { id: "5-do-we-use-cookies-and-other-tracking-technologies", title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" },
            { id: "6-how-do-we-handle-your-social-logins", title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" },
            { id: "7-how-long-do-we-keep-your-information", title: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
            { id: "8-how-do-we-keep-your-information-safe", title: "HOW DO WE KEEP YOUR INFORMATION SAFE?" },
            { id: "9-what-are-your-privacy-rights", title: "WHAT ARE YOUR PRIVACY RIGHTS?" },
            { id: "10-controls-for-do-not-track-features", title: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
            { id: "11-do-united-states-residents-have-specific-privacy-rights", title: "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?" },
            { id: "12-do-we-make-updates-to-this-notice", title: "DO WE MAKE UPDATES TO THIS NOTICE?" },
            { id: "13-how-can-you-contact-us-about-this-notice", title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
            { id: "14-how-can-you-review-update-or-delete-the-data-we-collect-from-you", title: "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?" }
          ].map((item) => (
            <li key={item.id} className={`mb-2 ${activeSection === item.id ? 'font-bold' : ''}`}>
              <a
                href={`#${item.id}`}
                className="text-blue-600 hover:underline"
                onClick={(e) => {e.preventDefault(); scrollToSection(item.id)}}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Mobile Table of Contents */}
      <section className="my-8 md:hidden">
        <details className="bg-gray-50 rounded-lg p-4">
          <summary className="text-2xl font-bold cursor-pointer">TABLE OF CONTENTS</summary>
          <ol className="list-decimal pl-6 mt-4">
            {[
              { id: "1-what-information-do-we-collect", title: "WHAT INFORMATION DO WE COLLECT?" },
              { id: "2-how-do-we-process-your-information", title: "HOW DO WE PROCESS YOUR INFORMATION?" },
              { id: "3-what-legal-bases-do-we-rely-on-to-process-your-personal-information", title: "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?" },
              { id: "4-when-and-with-whom-do-we-share-your-personal-information", title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" },
              { id: "5-do-we-use-cookies-and-other-tracking-technologies", title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" },
              { id: "6-how-do-we-handle-your-social-logins", title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" },
              { id: "7-how-long-do-we-keep-your-information", title: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
              { id: "8-how-do-we-keep-your-information-safe", title: "HOW DO WE KEEP YOUR INFORMATION SAFE?" },
              { id: "9-what-are-your-privacy-rights", title: "WHAT ARE YOUR PRIVACY RIGHTS?" },
              { id: "10-controls-for-do-not-track-features", title: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
              { id: "11-do-united-states-residents-have-specific-privacy-rights", title: "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?" },
              { id: "12-do-we-make-updates-to-this-notice", title: "DO WE MAKE UPDATES TO THIS NOTICE?" },
              { id: "13-how-can-you-contact-us-about-this-notice", title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
              { id: "14-how-can-you-review-update-or-delete-the-data-we-collect-from-you", title: "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?" }
            ].map((item) => (
              <li key={item.id} className="mb-2">
                <a
                  href={`#${item.id}`}
                  className="text-blue-600 hover:underline"
                  onClick={(e) => {e.preventDefault(); scrollToSection(item.id)}}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </details>
      </section>

      {/* Content Sections */}
      <section id="1-what-information-do-we-collect" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>

        <h3 className="text-xl font-bold mb-2">Personal information you disclose to us</h3>
        <p className="mb-2"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
        <p className="mb-4">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

        <p className="mb-2"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
          <li>Job titles</li>
          <li>Mailing addresses</li>
          <li>Usernames</li>
          <li>Contact preferences</li>
          <li>Contact or authentication data</li>
          <li>Billing addresses</li>
          <li>Passwords</li>
          <li>Company information</li>
          <li>Business objectives and goals (for AI agent configuration)</li>
          <li>Target market information</li>
          <li>Marketing preferences and strategies</li>
          <li>Mentor and referral program participation data</li>
          <li>Commission and payment information for mentors</li>
          <li>Referral tracking and attribution data</li>
        </ul>

        <p className="mb-2"><strong>Sensitive Information.</strong> We do not process sensitive personal information.</p>

        <p className="mb-4"><strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is processed by our secure payment processors in accordance with PCI-DSS standards.</p>

        <p className="mb-2"><strong>AI Agent Interaction Data.</strong> When you use our AI agents, we may collect:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Queries and prompts you provide to our agents</li>
          <li>Business context and objectives you define</li>
          <li>Performance metrics and results from agent activities</li>
          <li>Feedback and ratings on agent performance</li>
          <li>Commenting behavior and writing style patterns (for Scout Agent learning)</li>
          <li>Historical comments and engagement patterns for style analysis</li>
          <li>User preferences and communication patterns</li>
          <li>Impact scores, achievement levels, and performance rankings</li>
          <li>Leaderboard participation and competitive activity data</li>
        </ul>

        <p className="mb-2"><strong>Platform Integration Data.</strong> When our AI agents interact with third-party platforms on your behalf, we may collect:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Social media profile information (as authorized)</li>
          <li>Campaign performance data</li>
          <li>Lead and prospect information</li>
          <li>Content engagement metrics</li>
          <li>Communication histories</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Information automatically collected</h3>
        <p className="mb-2"><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>

        <p className="mb-4">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

        <p>The information we collect includes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files.</li>
          <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services.</li>
          <li><strong>AI Agent Performance Data.</strong> We collect metrics on agent performance, execution times, success rates, and resource utilization to improve our Services.</li>
        </ul>
      </section>

      <section id="2-how-do-we-process-your-information" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p className="mb-2"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

        <p className="mb-4">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
        <ul className="list-disc pl-6">
          <li><strong>To facilitate account creation and authentication</strong> and otherwise manage user accounts.</li>
          <li><strong>To deliver and facilitate delivery of services to the user,</strong> including operating our AI agents on your behalf.</li>
          <li><strong>To execute AI agent tasks,</strong> such as market research, content creation, lead generation, and campaign management.</li>
          <li><strong>To maintain and improve our Knowledge Graph</strong> to provide better contextual understanding for our AI agents.</li>
          <li><strong>To respond to user inquiries/offer support to users.</strong></li>
          <li><strong>To send administrative information to you</strong> about our products and services, changes to our terms and policies.</li>
          <li><strong>To fulfill and manage your orders.</strong></li>
          <li><strong>To enable user-to-user communications</strong> through our platform.</li>
          <li><strong>To request feedback</strong> and contact you about your use of our Services.</li>
          <li><strong>To send you marketing and promotional communications</strong> (with your consent).</li>
          <li><strong>To deliver targeted advertising to you.</strong></li>
          <li><strong>To protect our Services</strong> through fraud monitoring and prevention.</li>
          <li><strong>To identify usage trends</strong> and improve our AI agents and platform.</li>
          <li><strong>To determine the effectiveness of our marketing and promotional campaigns.</strong></li>
          <li><strong>To train and improve our AI models</strong> (using anonymized and aggregated data).</li>
          <li><strong>To learn from user behavior</strong> to improve AI-generated content and commenting styles.</li>
          <li><strong>To use your data for marketing and promotional purposes,</strong> including case studies, testimonials, and success stories.</li>
          <li><strong>To display user activity on leaderboards</strong> and provide public recognition features.</li>
          <li><strong>To manage mentor and referral programs</strong> and calculate associated payments and commissions.</li>
          <li><strong>To save or protect an individual's vital interest.</strong></li>
        </ul>
      </section>

      <section id="3-what-legal-bases-do-we-rely-on-to-process-your-personal-information" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
        <p className="mb-2"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>

        <p className="mb-2"><strong>If you are located in the EU or UK, this section applies to you.</strong></p>
        <p className="mb-4">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose.</li>
          <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you.</li>
          <li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms.</li>
          <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
          <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
        </ul>

        <p className="mb-2"><strong>If you are located in the United States, this section applies to you.</strong></p>
        <p className="mb-4">We may process your information if you have given us specific permission to use your personal information for a specific purpose, or in situations where your permission can be inferred. You can withdraw your consent at any time.</p>

        <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent.</p>
      </section>

      <section id="4-when-and-with-whom-do-we-share-your-personal-information" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p className="mb-2"><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>

        <p className="mb-4">We may need to share your personal information in the following situations:</p>
        <ul className="list-disc pl-6">
          <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>With Third-Party Platform Integrations.</strong> Our AI agents may share information with platforms like LinkedIn, Product Hunt, X (Twitter), Reddit, Meta (Facebook/Instagram), TikTok, YouTube, Pinterest, Snapchat, Google PMAX, and other emerging social media and marketing platforms to execute tasks on your behalf, always with your authorization.</li>
          <li><strong>Service Providers.</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf, including:
            <ul className="list-disc pl-6 mt-2">
              <li>Cloud infrastructure providers (AWS, Google Cloud)</li>
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Customer support tools</li>
              <li>Security and monitoring services</li>
            </ul>
          </li>
          <li><strong>Professional Advisors.</strong> We may share information with our lawyers, accountants, and other professional advisors.</li>
          <li><strong>Compliance with Laws.</strong> We may disclose information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
        </ul>
      </section>

      <section id="5-do-we-use-cookies-and-other-tracking-technologies" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p className="mb-2"><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>

        <p className="mb-4">We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. These technologies help us:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Remember your preferences</li>
          <li>Understand how you use our platform</li>
          <li>Improve our Services</li>
          <li>Provide relevant content and advertising</li>
        </ul>

        <p>You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our Services.</p>
      </section>

      <section id="6-how-do-we-handle-your-social-logins" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p className="mb-2"><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>

        <p className="mb-4">Our Services offer you the ability to register and log in using your third-party social media account details (like LinkedIn, Google, or other providers). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, and profile picture.</p>

        <p>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services.</p>
      </section>

      <section id="7-how-long-do-we-keep-your-information" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p className="mb-2"><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>

        <p className="mb-4">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. Generally:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Account Information:</strong> We retain your account information for as long as your account is active or as needed to provide you services.</li>
          <li><strong>AI Agent Data:</strong> We retain data processed by our AI agents for as long as necessary to provide the service and improve our models.</li>
          <li><strong>Behavioral Learning Data:</strong> We retain commenting patterns and style analysis data for as long as necessary to provide personalized AI-generated content.</li>
          <li><strong>Leaderboard Data:</strong> We retain performance metrics and impact scores for as long as your account is active or until you opt out of public rankings.</li>
          <li><strong>Mentor Program Data:</strong> We retain referral and commission data for 7 years for tax and accounting purposes.</li>
          <li><strong>Transaction Records:</strong> We retain transaction records for 7 years for tax and accounting purposes.</li>
          <li><strong>Marketing Data:</strong> We retain marketing preferences until you opt-out or request deletion.</li>
        </ul>

        <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.</p>
      </section>

      <section id="8-how-do-we-keep-your-information-safe" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p className="mb-2"><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>

        <p className="mb-4">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Encryption:</strong> All data transmitted between you and our Services is encrypted using industry-standard TLS/SSL protocols.</li>
          <li><strong>Access Controls:</strong> We use Auth0 for identity management and implement role-based access controls.</li>
          <li><strong>Infrastructure Security:</strong> Our platform runs on Kubernetes with enterprise-grade security configurations.</li>
          <li><strong>Monitoring:</strong> We use Sentry for real-time error tracking and security monitoring.</li>
          <li><strong>Regular Security Audits:</strong> We conduct regular security assessments and penetration testing.</li>
          <li><strong>Data Isolation:</strong> Multi-tenant architecture ensures your data is isolated from other users.</li>
          <li><strong>Employee Training:</strong> Our staff receives regular training on data protection and security best practices.</li>
        </ul>

        <p>However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
      </section>

      <section id="9-what-are-your-privacy-rights" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p className="mb-2"><strong>In Short:</strong> Depending on your location, you may have certain rights regarding your personal information.</p>

        <p className="mb-4">In some regions, you have certain rights under applicable data protection laws. These may include the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Request access and obtain a copy of your personal information</li>
          <li>Request rectification or erasure</li>
          <li>Restrict the processing of your personal information</li>
          <li>Data portability (if applicable)</li>
          <li>Object to the processing of your personal information</li>
          <li>Withdraw consent at any time (where we rely on consent)</li>
        </ul>

        <p className="mb-4">To exercise any of these rights, please contact us using the details provided below.</p>

        <p className="mb-2"><strong>Account Information</strong></p>
        <p className="mb-4">If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Log in to your account settings and update your user account</li>
          <li>Contact us using the contact information provided</li>
        </ul>

        <p className="mb-2"><strong>Opting out of marketing communications</strong></p>
        <p className="mb-4">You can unsubscribe from our marketing emails at any time by clicking the unsubscribe link in the emails we send or by contacting us using the details provided below.</p>

        <p className="mb-2"><strong>Leaderboard and Public Data Visibility</strong></p>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Opt out of public leaderboards and performance rankings by contacting <a href="mailto:support@fn7.io" className="text-blue-600 hover:underline">support@fn7.io</a></li>
          <li>Request removal of your data from marketing materials and case studies</li>
          <li>Adjust public visibility settings through your account preferences (where available)</li>
          <li>Withdraw consent for behavioral learning and AI style analysis</li>
        </ul>
        <p className="mb-4">Note that opting out of certain features may limit access to gamification elements and social features of the platform.</p>
      </section>

      <section id="10-controls-for-do-not-track-features" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.</p>
      </section>

      <section id="11-do-united-states-residents-have-specific-privacy-rights" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p className="mb-2"><strong>In Short:</strong> If you are a resident of certain US states, you are granted specific rights regarding access to your personal information.</p>

        <h3 className="text-xl font-bold mb-2">California Residents</h3>
        <p className="mb-4">Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have specific rights, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>The right to know what personal information we collect, use, disclose, and sell</li>
          <li>The right to delete personal information (subject to certain exceptions)</li>
          <li>The right to opt-out of the sale or sharing of personal information</li>
          <li>The right to non-discrimination for exercising your privacy rights</li>
          <li>The right to correct inaccurate personal information</li>
          <li>The right to limit use and disclosure of sensitive personal information</li>
        </ul>

        <p className="mb-4">To exercise these rights, California residents can contact us at <a href="mailto:privacy@fn7.io" className="text-blue-600 hover:underline">privacy@fn7.io</a>.</p>

        <h3 className="text-xl font-bold mb-2">Virginia Residents</h3>
        <p className="mb-4">Under the Virginia Consumer Data Protection Act (VCDPA), Virginia residents have rights including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Right to access personal data</li>
          <li>Right to correct inaccuracies</li>
          <li>Right to delete personal data</li>
          <li>Right to data portability</li>
          <li>Right to opt-out of targeted advertising, sale of personal data, and profiling</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Other States</h3>
        <p>Residents of Colorado, Connecticut, Utah, and other states with comprehensive privacy laws may have similar rights. Please contact us for more information about your specific rights.</p>
      </section>

      <section id="12-do-we-make-updates-to-this-notice" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p className="mb-2"><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this notice. If we make material changes, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.</p>
      </section>

      <section id="13-how-can-you-contact-us-about-this-notice" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p className="mb-4">If you have questions or comments about this notice, you may contact us by:</p>

        <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@fn7.io" className="text-blue-600 hover:underline">privacy@fn7.io</a></p>

        <p className="mb-2"><strong>Mail:</strong></p>
        <p className="mb-4">
          fn7 Inc.<br />
          3013 Portulaca Dr<br />
          Round Rock, TX 78681<br />
          United States
        </p>

        <p><strong>Data Protection Officer:</strong> <a href="mailto:privacy@fn7.io" className="text-blue-600 hover:underline">privacy@fn7.io</a></p>
      </section>

      <section id="14-how-can-you-review-update-or-delete-the-data-we-collect-from-you" className="my-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p className="mb-4">Based on the applicable laws of your country or state, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Visit: <a href="https://www.fn7.io/privacy-request" className="text-blue-600 hover:underline">https://www.fn7.io/privacy-request</a></li>
          <li>Email: <a href="mailto:privacy@fn7.io" className="text-blue-600 hover:underline">privacy@fn7.io</a></li>
          <li>Submit a request through your account dashboard</li>
        </ul>

        <p>We will respond to your request within the timeframe required by applicable law.</p>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};
