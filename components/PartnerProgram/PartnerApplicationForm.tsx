"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { trackEvent, getCurrentUTMParams } from '@/utils/amplitude';

export const PartnerApplicationForm = () => {
  const router = useRouter();
  const [partnerType, setPartnerType] = useState<string>("");
  const [incubatorLink, setIncubatorLink] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!partnerType || !firstName || !lastName || !email) {
      alert("Please fill in all required fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (partnerType === "Incubator" && !incubatorLink) {
      alert("Please provide your incubator link");
      return;
    }

    if (!privacyConsent) {
      setConsentError(true);
      alert("Please accept the Privacy Policy and Terms of Service to continue");
      return;
    }

    setIsSubmitting(true);

    // Track partner application form submission
    trackEvent('Form Submitted', {
      form_name: 'Partner Application',
      page: 'Partner Application',
      partner_type: partnerType,
      has_incubator_link: partnerType === "Incubator" && !!incubatorLink,
      privacy_consent: privacyConsent,
      marketing_consent: marketingConsent,
      ...getCurrentUTMParams()
    });

    try {
      const submittedAt = new Date().toISOString();
      const consentData = {
        privacyConsent: privacyConsent,
        marketingConsent: marketingConsent,
        consentTimestamp: submittedAt,
      };
      
      // Email HTML template for atlas@fn7.io
      const adminEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; margin-left: 10px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Partner Application Received</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Partner Type:</span>
                <span class="value">${partnerType}</span>
              </div>
              ${incubatorLink ? `
              <div class="field">
                <span class="label">Incubator Link:</span>
                <span class="value"><a href="${incubatorLink}">${incubatorLink}</a></span>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${firstName} ${lastName}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="field">
                <span class="label">Submitted At:</span>
                <span class="value">${new Date(submittedAt).toLocaleString()}</span>
              </div>
              <div class="field">
                <span class="label">Privacy Consent:</span>
                <span class="value">${consentData.privacyConsent ? 'Yes' : 'No'}</span>
              </div>
              <div class="field">
                <span class="label">Marketing Consent:</span>
                <span class="value">${consentData.marketingConsent ? 'Yes' : 'No'}</span>
              </div>
              <div class="footer">
                <p>This application was submitted through the FN7 Partner Program form.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      // Confirmation email HTML for applicant
      const applicantEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Your Application!</h2>
            </div>
            <div class="content">
              <p>Dear ${firstName},</p>
              <p>We have received your application to become a <strong>${partnerType}</strong> partner with FN7.</p>
              <p>Our team will review your application and get back to you within 2-3 business days.</p>
              <p>If you have any questions in the meantime, please don't hesitate to reach out to us at <a href="mailto:atlas@fn7.io">atlas@fn7.io</a>.</p>
              <p>Best regards,<br>The FN7 Team</p>
              <div class="footer">
                <p>© 2024 FN7. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      // Prepare payload for admin email
      const adminEmailPayload = {
        from: {
          name: "FN7 Partner Program",
          email: "noreply@fn7.io",
        },
        to: [
          {
            email: "atlas@fn7.io",
            name: "FN7 Partner Team",
          },
        ],
        subject: `New Partner Application - ${partnerType} - ${firstName} ${lastName}`,
        body: adminEmailHtml,
      };

      // Prepare payload for applicant confirmation email
      const applicantEmailPayload = {
        from: {
          name: "FN7 Team",
          email: "noreply@fn7.io",
        },
        to: [
          {
            email: email,
            name: `${firstName} ${lastName}`,
          },
        ],
        subject: "FN7 Partner Application Received",
        body: applicantEmailHtml,
      };

      // Send admin notification email directly to helix API - same as get-form
      const adminEmailResponse = await fetch("https://helix.app.fn7.io/api/send-email", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminEmailPayload),
      });
      
      const adminData = await adminEmailResponse.json();
      
      // Send applicant confirmation email
      const applicantEmailResponse = await fetch("https://helix.app.fn7.io/api/send-email", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicantEmailPayload),
      });
      
      const applicantData = await applicantEmailResponse.json();
      
      // Always navigate to success page - matching get-form pattern
      setIsSubmitting(false);
      
      // Track successful submission
      trackEvent('Form Submission Success', {
        form_name: 'Partner Application',
        page: 'Partner Application',
        partner_type: partnerType,
        ...getCurrentUTMParams()
      });
      
      router.push('/submitpage');
    } catch (error) {
      setIsSubmitting(false);
      alert("Error occurred. Please try again after some time.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-20 px-4">
      <div className="w-full max-w-xl">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-md:p-8">
          <h1 className="text-3xl font-bold text-center text-black mb-12 max-md:text-3xl max-md:mb-8">
            Apply to Partner
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Partner Type Selection */}
            <div>
              <label className="text-xl font-medium text-black mb-4 block max-md:text-lg">
                You are:
              </label>
              <div className="flex gap-8 justify-center max-md:flex-col max-md:gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="partnerType"
                    value="Incubator"
                    checked={partnerType === "Incubator"}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="text-xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-medium max-md:text-lg">
                    Incubator
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="partnerType"
                    value="Influencer"
                    checked={partnerType === "Influencer"}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="text-xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-medium max-md:text-lg">
                    Influencer
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="partnerType"
                    value="Mentor"
                    checked={partnerType === "Mentor"}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="text-xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-medium max-md:text-lg">
                    Mentor
                  </span>
                </label>
              </div>
            </div>

            {/* Incubator Link - Only show if Incubator is selected */}
            {partnerType === "Incubator" && (
              <div>
                <label htmlFor="incubatorLink" className="text-lg font-medium text-black mb-3 block max-md:text-base">
                  Incubator Link
                </label>
                <input
                  type="url"
                  id="incubatorLink"
                  value={incubatorLink}
                  onChange={(e) => setIncubatorLink(e.target.value)}
                  placeholder="www.xyz.com"
                  className="w-full px-6 py-4 bg-gray-100 rounded-xl text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 max-md:text-sm"
                  required={partnerType === "Incubator"}
                />
              </div>
            )}

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              <div>
                <label htmlFor="firstName" className="text-lg font-medium text-black mb-3 block max-md:text-base">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Donald"
                  className="w-full px-6 py-4 bg-gray-100 rounded-xl text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 max-md:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-lg font-medium text-black mb-3 block max-md:text-base">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Trump"
                  className="w-full px-6 py-4 bg-gray-100 rounded-xl text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 max-md:text-sm"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-lg font-medium text-black mb-3 block max-md:text-base">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="donald@gmail.com"
                className="w-full px-6 py-4 bg-gray-100 rounded-xl text-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 max-md:text-base"
                required
              />
            </div>

            {/* GDPR Consent Section */}
            <div className="border-t pt-6 space-y-4">
              <h3 className="text-lg font-medium text-black mb-3 max-md:text-base">Data Protection & Privacy</h3>
              
              {/* Privacy Policy Consent (Required) */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="partner-privacy-consent"
                  checked={privacyConsent}
                  onChange={(e) => {
                    setPrivacyConsent(e.target.checked);
                    setConsentError(false);
                  }}
                  className={`mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-pink-400 ${
                    consentError ? 'border-red-500' : ''
                  }`}
                  required
                />
                <label htmlFor="partner-privacy-consent" className="ml-3 text-sm text-gray-700 max-md:text-xs">
                  <span className="text-red-500">*</span> I have read and agree to the{' '}
                  <Link href="/privacy-policy" target="_blank" className="text-purple-600 hover:text-purple-700 underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/tnc" target="_blank" className="text-purple-600 hover:text-purple-700 underline">
                    Terms of Service
                  </Link>
                  . I understand that FN7 will process my personal data for partner program purposes.
                </label>
              </div>
              {consentError && (
                <p className="text-red-500 text-xs ml-7">
                  You must accept the Privacy Policy and Terms of Service to continue
                </p>
              )}

              {/* Marketing Consent (Optional) */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="partner-marketing-consent"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-pink-400"
                />
                <label htmlFor="partner-marketing-consent" className="ml-3 text-sm text-gray-700 max-md:text-xs">
                  I would like to receive partner updates, opportunities, and marketing communications from FN7 
                  (optional - you can unsubscribe at any time)
                </label>
              </div>

              {/* Data Rights Information */}
              <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-600 max-md:p-3">
                <p className="font-semibold mb-1">Your Data Rights:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>You have the right to access, correct, or delete your personal data</li>
                  <li>You can withdraw consent at any time by contacting privacy@fn7.io</li>
                  <li>Partner applications are reviewed within 2-3 business days</li>
                  <li>Your data is stored securely in compliance with GDPR</li>
                </ul>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-black text-white text-xl font-semibold rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8 max-md:text-lg max-md:py-4"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};