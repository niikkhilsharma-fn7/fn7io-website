/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import React, { useState } from 'react';

export const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (id: string | React.SetStateAction<null>) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white" style={{ marginTop: '20px' }}>
      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-gray-600">Last updated Aug 23, 2025</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents - Sticky on desktop */}
        <nav className="md:w-64 flex-shrink-0 md:sticky md:top-6 self-start">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('agreement')}
                  className={`text-left w-full hover:text-blue-600 ${activeSection === 'agreement' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                >
                  Agreement to Our Legal Terms
                </button>
              </li>
              {Array.from({ length: 40 }, (_, i) => i + 1).map(num => (
                <li key={num}>
                  <button
                    onClick={() => scrollToSection(`section-${num}`)}
                    className={`text-left w-full hover:text-blue-600 ${activeSection === `section-${num}` ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                  >
                    {num}. {getSectionTitle(num)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1">
          <section id="agreement" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
            <div className="prose max-w-none text-gray-700">
              <p>We are fn7 Inc. ("Company," "we," "us," "our"), a company registered in the United States at 3013 Portulaca Dr, Round Rock, Texas 78681.</p>
              <p>We operate the website https://fn7.io (the "Site"), the Atlas Platform, as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
              <p>You can contact us by email at support@fn7.io, or by mail to 3013 Portulaca Dr, Round Rock, Texas 78681, United States.</p>
              <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and fn7 Inc., concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
              <p>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.</p>
              <p>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</p>
              <p>We recommend that you print a copy of these Legal Terms for your records.</p>
            </div>
          </section>

          {renderSection(1, "OUR SERVICES",
            <>
              <p>Our Services specifically include Go-To-Market (GTM) Agents designed to automate marketing, social listening, and business development activities for founders and marketing agencies. These include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Scout Agent: Monitors real-time conversations across multiple social platforms (Reddit, LinkedIn, X/Twitter, Meta/Facebook, TikTok, and others) to identify potential customers discussing relevant business problems</li>
                <li>Muse Agent: Generates and schedules social media content across platforms including LinkedIn, X/Twitter, Meta/Facebook, TikTok, and emerging platforms</li>
                <li>Hunt Agent: Identifies and qualifies leads through automated prospecting across social networks</li>
                <li>Spark Agent: Manages and optimizes marketing campaigns across multiple social media and advertising platforms</li>
                <li>Echo Agent: Conducts social listening and sentiment analysis across platforms to monitor brand mentions, competitor activity, and market trends</li>
                <li>Nudge Agent: Automates follow-up communications and lead nurturing sequences across multiple channels</li>
                <li>Oracle Agent: Provides analytics and insights on marketing performance, social sentiment, and competitive intelligence</li>
              </ul>
              <p>Our agents perform social listening, probing, and sentiment analysis to discover market problems, gauge public opinion, and identify business opportunities. These agents operate autonomously within parameters you define and may interact with current and future third-party platforms on your behalf.</p>
              <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
              <p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
            </>
          )}

          {renderSection(2, "INTELLECTUAL PROPERTY RIGHTS",
            <>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Our intellectual property</h3>
              <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
              <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>
              <p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Your use of our Services</h3>
              <p>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:</p>
              <ul>
                <li>access the Services; and</li>
                <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
              </ul>
              <p>solely for your personal, non-commercial use or internal business purpose.</p>
              <p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
              <p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: support@fn7.io. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>
              <p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
              <p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Your Submissions and Contributions</h3>
              <p>Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the rights you grant us and the responsibilities you hold when posting or uploading any content.</p>

              <h4 className="text-lg font-medium text-gray-800 mt-3 mb-1">Submissions (e.g., Feedback or Suggestions)</h4>
              <p>If you choose to submit to us any ideas, feedback, suggestions, or other information about the Services ("Submissions"), you retain ownership of your Submissions. However, by submitting them, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, worldwide license to use, reproduce, display, distribute, and incorporate your Submissions into the Services for the purpose of operating, improving, and promoting the platform.</p>
              <p>We do not claim exclusive ownership of general ideas or methods submitted, and you are free to reuse your Submissions independently.</p>

              <h4 className="text-lg font-medium text-gray-800 mt-3 mb-1">Contributions (e.g., Posted Content)</h4>
              <p>If you create, submit, post, display, or transmit any content or materials to us or through the Services—including but not limited to text, writings, graphics, photos, videos, audio, code, or other material ("Contributions")—those Contributions may be viewable by other users or third-party services.</p>
              <p>Contributions are governed by the terms outlined in <strong>Section 10 (Contribution License)</strong>. You retain full ownership of your Contributions and any intellectual property rights or proprietary interest associated with them. By posting Contributions, you grant us a limited license to use them only as outlined in Section 10.</p>
              <p>You are solely responsible for the content of your Submissions and Contributions. You agree not to post or share any content that:</p>
              <ul>
                <li>Violates any applicable law or regulation.</li>
                <li>Infringes on the intellectual property or privacy rights of others.</li>
                <li>Is harassing, defamatory, obscene, deceptive, or harmful to any individual or group.</li>
                <li>Contains any confidential or proprietary information you are not authorized to share.</li>
              </ul>
              <p>We reserve the right to remove, edit, or restrict access to any Submissions or Contributions that we believe, in our sole discretion, violate these Legal Terms or pose a risk to the integrity or security of the Services.</p>
              <p>For more detail on your rights and responsibilities regarding Contributions, please see Section 10.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Copyright infringement</h3>
              <p>We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately refer to the "DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY" section below.</p>
            </>
          )}

          {renderSection(3, "USER REPRESENTATIONS",
            <p>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.</p>
          )}

          {renderSection(4, "USER REGISTRATION",
            <p>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
          )}

          {renderSection(5, "PURCHASES AND PAYMENT",
            <>
              <p>We accept the following forms of payment:</p>
              <ul className="list-disc list-inside">
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>Discover</li>
                <li>PayPal</li>
                <li>Stripe</li>
                <li>ACH/Wire Transfer</li>
              </ul>
              <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.</p>
              <p className="font-semibold">MENTOR PAYMENT ADJUSTMENTS:</p>
              <p>For users participating in mentor or referral programs:</p>
              <ul className="list-disc list-inside">
                <li>If subscription prices increase, mentor payments and commissions do not automatically increase and will remain at previously agreed rates unless explicitly renegotiated</li>
                <li>If subscription prices decrease, mentor payments and commissions will be adjusted downward proportionally to reflect the new pricing structure</li>
                <li>Mentor payment rates are subject to change with 30 days written notice</li>
                <li>Changes to mentor compensation will be communicated via email and updated in your account dashboard</li>
              </ul>
              <p>You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. If your order is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>
              <p>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.</p>
            </>
          )}

          {renderSection(6, "FREE TRIAL",
            <p>We offer a 7-day free trial to new users who register with the Services. The account will be charged according to the user's chosen subscription at the end of the free trial.</p>
          )}

          {renderSection(7, "CANCELLATION",
            <>
              <p>All purchases are non-refundable. You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term.</p>
              <p>If you are unsatisfied with our Services, please email us at support@fn7.io.</p>
            </>
          )}

          {renderSection(8, "PROHIBITED ACTIVITIES",
            <>
              <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
              <p>As a user of the Services, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Create, deploy, or use AI agents that violate any applicable laws, regulations, or third-party rights.</li>
                <li>Use the Atlas Platform to develop agents designed to harm, mislead, or deceive users.</li>
                <li>Attempt to gain unauthorized access to agent data, models, or configurations belonging to other users.</li>
                <li>Use GTM Agents for social listening activities that violate platform terms of service or privacy policies.</li>
                <li>Engage in social probing that constitutes harassment, stalking, or invasive monitoring of individuals.</li>
                <li>Use agents to collect private or restricted social media content without proper authorization.</li>
                <li>Deploy social listening capabilities to gather competitive intelligence through deceptive means.</li>
                <li>Use sentiment analysis or social probing to target vulnerable populations or exploit personal crises.</li>
                <li>Engage in social media manipulation, astroturfing, or coordinated inauthentic behavior across platforms.</li>
                <li>Use agents to circumvent platform rate limits, anti-bot measures, or content access restrictions.</li>
                <li>Deploy agents on platforms where automated social listening or data collection is prohibited.</li>
                <li>Use social listening data to doxx, harass, or harm individuals or organizations.</li>
                <li>Engage in social probing activities that violate applicable privacy laws (GDPR, CCPA, etc.).</li>
                <li>Use GTM Agents to create spam, unsolicited communications, or violate anti-spam laws (CAN-SPAM Act, GDPR, etc.).</li>
                <li>Deploy agents to engage in deceptive marketing practices or false advertising.</li>
                <li>Use agents to scrape or harvest data in violation of platform terms of service.</li>
                <li>Configure agents to make misleading claims about products, services, or business credentials.</li>
                <li>Use agents to engage in competitive intelligence gathering that violates confidentiality or non-disclosure agreements.</li>
                <li>Deploy agents on platforms where you lack proper authorization or violate platform-specific marketing policies.</li>
              </ul>
            </>
          )}

          {/* Continue with remaining sections */}
          {renderSection(9, "USER GENERATED CONTRIBUTIONS",
            <>
              <p>The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary.</p>
              <p>When you create or make available any Contributions, you thereby represent and warrant that:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
                <li>Your Contributions are not false, inaccurate, or misleading.</li>
                <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
                <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
                <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
              </ul>
            </>
          )}

          {renderSection(10, "CONTRIBUTION LICENSE",
            <>
              <p>This includes the right to prepare derivative works and to sublicense these rights to service providers, only as required for core service functionality. We will not use your Contributions for unrelated commercial purposes, nor will we publicly display confidential or private data without your written permission. You retain ownership of your Contributions. We claim no ownership.</p>
              <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
              <p>You may contact us at support@fn7.io to restrict the use of Contributions beyond what is operationally required.</p>
            </>
          )}

          {/* Render all remaining sections */}
          {renderSection(11, "GUIDELINES FOR REVIEWS", <p>We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.</p>)}

          {renderSection(12, "SOCIAL MEDIA", <p>As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.</p>)}

          {renderSection(13, "THIRD-PARTY WEBSITES AND CONTENT", <p>The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services.</p>)}

          {renderSection(14, "ADVERTISERS", <p>We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</p>)}

          {renderSection(15, "SERVICES MANAGEMENT", <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>)}

          {renderSection(16, "PRIVACY POLICY", <p>We care about data privacy and security. Please review our Privacy Policy: https://atlas.fn7.io/privacy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.</p>)}

          {renderSection(17, "DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY", <p>We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a "Notification"). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.</p>)}

          {renderSection(18, "TERM AND TERMINATION", <p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>)}

          {renderSection(19, "MODIFICATIONS AND INTERRUPTIONS", <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>)}

          {renderSection(20, "GOVERNING LAW", <p>These Legal Terms shall be governed by and defined following the laws of the State of Texas, United States. fn7 Inc. and yourself irrevocably consent that the courts of the State of Texas shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.</p>)}

          {renderSection(21, "DISPUTE RESOLUTION", <p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>)}

          {renderSection(22, "CORRECTIONS", <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>)}

          {renderSection(23, "DISCLAIMER",
            <>
              <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
              <p>WE MAKE NO WARRANTIES REGARDING THE EFFECTIVENESS OF MARKETING CAMPAIGNS, LEAD GENERATION ACTIVITIES, OR BUSINESS OUTCOMES RESULTING FROM GTM AGENT ACTIVITIES. AGENT PERFORMANCE MAY BE AFFECTED BY THIRD-PARTY PLATFORM CHANGES, ALGORITHM UPDATES, POLICY MODIFICATIONS, OR TECHNICAL LIMITATIONS BEYOND OUR CONTROL.</p>
            </>
          )}

          {renderSection(24, "LIMITATIONS OF LIABILITY",
            <>
              <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
              <p>SPECIFICALLY REGARDING GTM AGENTS, WE SHALL NOT BE LIABLE FOR: (1) MARKETING CAMPAIGN FAILURES OR POOR PERFORMANCE; (2) LEAD GENERATION SHORTFALLS OR UNQUALIFIED LEADS; (3) CONTENT GENERATED BY AGENTS THAT VIOLATES THIRD-PARTY PLATFORM POLICIES; (4) ACCOUNT RESTRICTIONS OR BANS ON THIRD-PARTY PLATFORMS; (5) MISSED BUSINESS OPPORTUNITIES OR COMPETITIVE DISADVANTAGES; (6) REPUTATION DAMAGE FROM AGENT ACTIVITIES; OR (7) COMPLIANCE VIOLATIONS RESULTING FROM YOUR USE OF AGENT-GENERATED CONTENT OR STRATEGIES.</p>
            </>
          )}

          {renderSection(25, "INDEMNIFICATION", <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services.</p>)}

          {renderSection(26, "USER DATA",
            <>
              <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
              <p className="font-semibold">MARKETING DATA:</p>
              <p>GTM Agents may process various types of marketing data including prospect information, social media interactions, campaign performance metrics, and business intelligence. While we implement security measures to protect this data, you acknowledge that marketing data may be inherently less confidential than other business data and that some data sharing with Third-Party Platforms is necessary for agent functionality.</p>
              <p className="font-semibold">SOCIAL LISTENING AND SENTIMENT DATA:</p>
              <p>GTM Agents collect and process publicly available social media content, engagement metrics, sentiment indicators, and trend data. This data may include:</p>
              <ul className="list-disc pl-5">
                <li>Public posts, comments, and social media interactions</li>
                <li>Hashtag usage and trending topic analysis</li>
                <li>Public profile information and engagement patterns</li>
                <li>Sentiment scores and opinion analysis</li>
                <li>Competitive intelligence and market research data</li>
              </ul>
              <p>You acknowledge that:</p>
              <ul className="list-disc pl-5">
                <li>Social listening data is derived from public sources and may not be comprehensive or representative</li>
                <li>Sentiment analysis is automated and may misinterpret context, sarcasm, or cultural nuances</li>
                <li>Social media data is dynamic and may become outdated quickly</li>
                <li>Cross-platform data correlation may reveal additional insights but also increase privacy considerations</li>
                <li>We implement reasonable measures to anonymize and aggregate social listening data where possible</li>
              </ul>
              <p className="font-semibold">MARKETING USE OF USER DATA:</p>
              <p>You acknowledge and consent that we may use your data for marketing and promotional purposes, including but not limited to:</p>
              <ul className="list-disc pl-5">
                <li>Engagement behavior and interaction patterns with our Services</li>
                <li>Impact scores, performance metrics, and achievement data</li>
                <li>Usage statistics and feature adoption rates</li>
                <li>Success stories and case studies (with anonymization where appropriate)</li>
                <li>Testimonials and user feedback</li>
                <li>Platform analytics and user journey data</li>
              </ul>
              <p>This data may be used in:</p>
              <ul className="list-disc pl-5">
                <li>Marketing materials, presentations, and promotional content</li>
                <li>Website testimonials and case studies</li>
                <li>Social media posts and advertising campaigns</li>
                <li>Industry reports and whitepapers</li>
                <li>Sales presentations and demos</li>
                <li>Public relations and media communications</li>
              </ul>
              <p>You may opt out of certain marketing uses of your data by contacting us at support@fn7.io, though this may limit some personalization features of the Services.</p>
              <p className="font-semibold">LEADERBOARD AND PUBLIC RECOGNITION:</p>
              <p>By using our Services, you understand and consent that:</p>
              <ul className="list-disc pl-5">
                <li>Your activity data, including but not limited to impact scores, engagement metrics, and achievement levels, may be displayed on public leaderboards</li>
                <li>Your username, profile information, and performance statistics may be visible to other users of the Services</li>
                <li>Leaderboard rankings and public recognition features are integral parts of the product experience</li>
                <li>Your participation in competitive features and public rankings is voluntary but enabled by default</li>
                <li>You may request to opt out of public leaderboards by contacting support@fn7.io, though this may limit access to certain gamification and social features</li>
                <li>We reserve the right to feature top performers in marketing materials and case studies (with prior notice)</li>
                <li>Public visibility settings may be adjusted through your account preferences where available</li>
              </ul>
            </>
          )}

          {renderSection(27, "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES", <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.</p>)}

          {renderSection(28, "CALIFORNIA USERS AND RESIDENTS", <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>)}

          {renderSection(29, "MISCELLANEOUS", <p>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions.</p>)}

          {renderSection(30, "DEFINITION OF AGENTS AND SERVICES",
            <>
              <p>For the purposes of this Agreement:</p>
              <p>"GTM Agents" or "Agents" shall mean the autonomous AI marketing entities including Scout (conversation monitoring), Muse (content generation), Hunt (lead identification), Spark (campaign management), Echo (brand monitoring), Nudge (follow-up automation), and Oracle (analytics and insights).</p>
              <p>"Marketing Activities" shall include but not be limited to lead generation, content creation, social media posting, conversation monitoring, prospect identification, campaign optimization, and performance analytics.</p>
              <p>"Atlas Platform" shall include all infrastructure, APIs, tools, and resources provided for GTM Agent deployment and operation.</p>
            </>
          )}

          {renderSection(31, "COMPANY PROPRIETARY RIGHTS", <p>You acknowledge and agree that the Company (and its licensors, where applicable) owns all legal rights, title, and interest in and to the Services, including but not limited to: The Atlas Platform infrastructure and core functionality; Pre-built Agent templates and base models; Platform APIs and SDKs; System-level integrations and connectors; and Documentation and training materials.</p>)}

          {renderSection(32, "YOUR PROPRIETARY RIGHTS", <p>You retain all rights, title, and interest in and to: Any custom AI agents you develop using the Atlas Platform ("Your Custom Agents"); Business logic, workflows, and configurations you create; Data you input or process through Your Custom Agents; and Results and outputs generated by Your Custom Agents from your data.</p>)}

          {renderSection(33, "AGENT-SPECIFIC DEVELOPMENTS", <p>If the Company, at your request, creates new agents, agent capabilities, or Atlas Components specifically for your exclusive use: You will own the intellectual property rights to such custom developments upon full payment of agreed fees; The Company retains a non-exclusive, royalty-free license to use any general improvements or bug fixes for the benefit of all platform users; and You grant the Company a license to use anonymized learnings to improve the platform.</p>)}

          {renderSection(34, "PLATFORM HOSTING AND USAGE", <p>The Company will host Your Custom Agents and maintain the necessary infrastructure resources to keep them operational. You are responsible for: Ensuring Your Custom Agents comply with all applicable laws and regulations; Managing user access and permissions to Your Custom Agents; and Paying applicable hosting and usage fees as outlined in your subscription agreement.</p>)}

          {renderSection(35, "GTM AGENT PERFORMANCE DISCLAIMERS",
            <>
              <p className="font-semibold">MARKETING RESULTS NOT GUARANTEED.</p>
              <p>While our GTM Agents are designed to enhance your marketing efforts and lead generation activities, we make no guarantees regarding:</p>
              <ul className="list-disc pl-5">
                <li>Lead generation quantities or quality</li>
                <li>Conversion rates or sales outcomes</li>
                <li>Return on investment (ROI) or return on ad spend (ROAS)</li>
                <li>Social media engagement rates or follower growth</li>
                <li>Campaign performance or marketing effectiveness</li>
              </ul>
              <p className="font-semibold">AI-GENERATED CONTENT DISCLAIMER:</p>
              <p>You acknowledge and accept that:</p>
              <ul className="list-disc pl-5">
                <li>AI-generated comments, posts, and content may not always be accurate, appropriate, or aligned with your intended message</li>
                <li>Generated content may contain errors, misinterpretations, or inappropriate language</li>
                <li>You bear full responsibility for reviewing, editing, and approving all AI-generated content before posting or publishing</li>
                <li>You must not rely solely on AI-generated content without human oversight and approval</li>
                <li>We are not liable for any consequences arising from the use of unreviewed or inappropriate AI-generated content</li>
                <li>Final responsibility for all published content rests with you, regardless of whether it was AI-generated or human-created</li>
              </ul>
              <p>Marketing results depend on numerous factors outside our control, including but not limited to: market conditions, competition, product-market fit, pricing, target audience responsiveness, platform algorithm changes, and overall economic conditions.</p>
              <p>You acknowledge that GTM Agents are tools to assist your marketing efforts and that ultimate responsibility for marketing strategy, compliance, and outcomes remains with you.</p>
              <p className="font-semibold">SOCIAL LISTENING AND SENTIMENT ANALYSIS LIMITATIONS:</p>
              <ul className="list-disc pl-5">
                <li>Sentiment analysis accuracy varies by platform, language, and cultural context</li>
                <li>Social listening may miss relevant conversations due to privacy settings, platform limitations, or algorithm changes</li>
                <li>Trend identification and market insights are based on available data and may not represent complete market conditions</li>
                <li>Cross-platform sentiment correlation may be affected by different user demographics and platform cultures</li>
                <li>Social probing effectiveness depends on platform algorithms, user engagement patterns, and content visibility</li>
              </ul>
            </>
          )}

          {renderSection(36, "SOCIAL LISTENING AND DATA COLLECTION ACTIVITIES",
            <>
              <p>Our GTM Agents engage in social listening, probing, and sentiment analysis activities across various social media platforms to:</p>
              <ul className="list-disc pl-5">
                <li>Monitor conversations relevant to your business or industry</li>
                <li>Identify market trends and consumer sentiment</li>
                <li>Discover unmet needs and business opportunities</li>
                <li>Track brand mentions and competitive intelligence</li>
                <li>Analyze public social media content and engagement patterns</li>
              </ul>
              <p className="font-semibold">IMPORTANT LIMITATIONS AND DISCLAIMERS:</p>
              <ul className="list-disc pl-5">
                <li>Social listening activities are limited to publicly available information</li>
                <li>We do not access private accounts, direct messages, or restricted content</li>
                <li>Sentiment analysis and trend identification are automated interpretations that may not reflect actual consumer intent</li>
                <li>Social probing activities comply with platform terms of service and applicable privacy laws</li>
                <li>Data collected through social listening may be incomplete, biased, or temporally limited</li>
                <li>We are not responsible for the accuracy or completeness of social media data or derived insights</li>
              </ul>
              <p>You acknowledge that social listening insights are supplementary tools and should not be the sole basis for business decisions.</p>
              <p className="font-semibold">USER BEHAVIOR LEARNING AND COMMENT GENERATION:</p>
              <p>By using Scout Agent's commenting features, you explicitly grant permission for the system to:</p>
              <ul className="list-disc pl-5">
                <li>Learn from your commenting behavior, writing style, and engagement patterns</li>
                <li>Analyze your historical comments to understand your communication preferences</li>
                <li>Generate future comments that align with your established style and voice</li>
                <li>Adapt comment generation based on your feedback and editing patterns</li>
              </ul>
              <p>You understand that this learning process improves the relevance and authenticity of AI-generated comments but does not guarantee perfect replication of your style or intent.</p>
            </>
          )}

          {renderSection(37, "THIRD-PARTY PLATFORM DEPENDENCIES AND MULTI-PLATFORM OPERATIONS",
            <>
              <p>Our GTM Agents integrate with and depend upon multiple third-party platforms including but not limited to LinkedIn, X (Twitter), Reddit, Meta (Facebook/Instagram), TikTok, YouTube, Pinterest, Snapchat, and emerging social media and marketing platforms ("Third-Party Platforms").</p>
              <p className="font-semibold">PLATFORM EXPANSION AND CHANGES:</p>
              <ul className="list-disc pl-5">
                <li>We continuously add new platform integrations based on market demand and technical feasibility</li>
                <li>Platform availability may vary by geographic region and local regulations</li>
                <li>Some platforms may require separate agreements, premium accounts, or additional fees</li>
                <li>Platform-specific features and limitations may affect agent capabilities differently across platforms</li>
              </ul>
              <p>You acknowledge and agree that:</p>
              <ul className="list-disc pl-5">
                <li>We have no control over Third-Party Platform policies, algorithms, content moderation, or availability</li>
                <li>Each platform has unique terms of service, community guidelines, and technical limitations</li>
                <li>Changes to Third-Party Platform APIs, algorithms, or policies may affect agent performance differently across platforms</li>
                <li>Account restrictions, suspensions, shadow bans, or permanent bans on any platform are beyond our control</li>
                <li>Platform algorithm changes may impact content reach, engagement, and lead generation effectiveness</li>
                <li>We are not liable for service interruptions, reduced performance, or account issues on any Third-Party Platform</li>
                <li>Cross-platform data synchronization may be limited by individual platform policies</li>
                <li>Some platforms may prohibit or restrict automated activities, social listening, or data collection</li>
              </ul>
              <p className="font-semibold">EMERGING PLATFORMS:</p>
              <p>As we add new social media platforms, you will be notified of additional integrations. Use of new platforms will be subject to these same terms unless otherwise specified.</p>
            </>
          )}

          {renderSection(38, "SOCIAL MEDIA COMPLIANCE AND PLATFORM-SPECIFIC RISKS",
            <>
              <p className="font-semibold">MULTI-PLATFORM COMPLIANCE:</p>
              <p>Each social media platform has unique policies regarding:</p>
              <ul className="list-disc pl-5">
                <li>Automated posting and engagement</li>
                <li>Data collection and social listening</li>
                <li>Commercial use and advertising</li>
                <li>Content guidelines and community standards</li>
                <li>User privacy and data protection</li>
              </ul>
              <p>You are responsible for ensuring compliance with all applicable platform policies across all integrated platforms.</p>
              <p className="font-semibold">PLATFORM-SPECIFIC RISKS:</p>
              <ul className="list-disc pl-5">
                <li>TikTok: Content may be subject to additional scrutiny due to data localization requirements and changing regulatory environments</li>
                <li>Meta (Facebook/Instagram): Algorithm changes frequently affect organic reach and may impact agent effectiveness</li>
                <li>LinkedIn: Professional networking focus requires adherence to business communication standards</li>
                <li>X (Twitter): Rapid policy changes and content moderation updates may affect agent operations</li>
                <li>Emerging Platforms: New platforms may have unstable APIs, changing policies, or uncertain long-term viability</li>
              </ul>
              <p className="font-semibold">GEOGRAPHIC AND REGULATORY CONSIDERATIONS:</p>
              <ul className="list-disc pl-5">
                <li>Platform availability and features vary by country and jurisdiction</li>
                <li>Local laws may restrict social listening, data collection, or automated social media activities</li>
                <li>Cross-border data transfer restrictions may limit agent functionality in certain regions</li>
                <li>You are responsible for compliance with applicable local laws and regulations in your operating jurisdictions</li>
              </ul>
            </>
          )}

          {renderSection(39, "CLIENT RESPONSIBILITIES FOR GTM SERVICES",
            <>
              <p>When using our GTM Agents, you are responsible for:</p>
              <ul className="list-disc pl-5">
                <li>Providing accurate business information, target market data, and marketing objectives</li>
                <li>Reviewing and approving agent-generated content before publication where applicable</li>
                <li>Ensuring compliance with all applicable marketing laws and regulations (CAN-SPAM, GDPR, FTC guidelines, etc.)</li>
                <li>Maintaining valid accounts and proper permissions on integrated Third-Party Platforms</li>
                <li>Monitoring agent activities and reporting any issues or concerns promptly</li>
                <li>Providing feedback necessary for agent optimization and performance improvement</li>
                <li>Ensuring marketing claims and content generated by agents are truthful and substantiated</li>
                <li>Maintaining appropriate professional liability insurance for your marketing activities</li>
              </ul>
            </>
          )}

          {renderSection(40, "CONTACT US",
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
              <address className="mt-2 not-italic">
                fn7 Inc.<br />
                3013 Portulaca Dr<br />
                Round Rock, Texas 78681<br />
                United States<br />
                Email: <a href="mailto:support@fn7.io" className="text-blue-600 hover:underline">support@fn7.io</a>
              </address>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to render sections with consistent styling
function renderSection(num: string | number, title: string, content: React.ReactNode) {
  return (
    <section id={`section-${num}`} className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{num}. {title}</h2>
      <div className="prose max-w-none text-gray-700">
        {content}
      </div>
    </section>
  );
}

// Helper function to get section titles
function getSectionTitle(num: number) {
  const titles = {
    1: "OUR SERVICES",
    2: "INTELLECTUAL PROPERTY RIGHTS",
    3: "USER REPRESENTATIONS",
    4: "USER REGISTRATION",
    5: "PURCHASES AND PAYMENT",
    6: "FREE TRIAL",
    7: "CANCELLATION",
    8: "PROHIBITED ACTIVITIES",
    9: "USER GENERATED CONTRIBUTIONS",
    10: "CONTRIBUTION LICENSE",
    11: "GUIDELINES FOR REVIEWS",
    12: "SOCIAL MEDIA",
    13: "THIRD-PARTY WEBSITES AND CONTENT",
    14: "ADVERTISERS",
    15: "SERVICES MANAGEMENT",
    16: "PRIVACY POLICY",
    17: "DMCA NOTICE AND POLICY",
    18: "TERM AND TERMINATION",
    19: "MODIFICATIONS AND INTERRUPTIONS",
    20: "GOVERNING LAW",
    21: "DISPUTE RESOLUTION",
    22: "CORRECTIONS",
    23: "DISCLAIMER",
    24: "LIMITATIONS OF LIABILITY",
    25: "INDEMNIFICATION",
    26: "USER DATA",
    27: "ELECTRONIC COMMUNICATIONS",
    28: "CALIFORNIA USERS AND RESIDENTS",
    29: "MISCELLANEOUS",
    30: "DEFINITION OF AGENTS AND SERVICES",
    31: "COMPANY PROPRIETARY RIGHTS",
    32: "YOUR PROPRIETARY RIGHTS",
    33: "AGENT-SPECIFIC DEVELOPMENTS",
    34: "PLATFORM HOSTING AND USAGE",
    35: "GTM AGENT PERFORMANCE DISCLAIMERS",
    36: "SOCIAL LISTENING AND DATA COLLECTION ACTIVITIES",
    37: "THIRD-PARTY PLATFORM DEPENDENCIES",
    38: "SOCIAL MEDIA COMPLIANCE AND RISKS",
    39: "CLIENT RESPONSIBILITIES FOR GTM SERVICES",
    40: "CONTACT US"
  };

  return titles[num] || `SECTION ${num}`;
}