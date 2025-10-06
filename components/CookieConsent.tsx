"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: ''
  });

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem('cookieConsent');
      if (!storedConsent) {
        setShowBanner(true);
      } else {
        const parsed = JSON.parse(storedConsent);
        setConsent(parsed);
        // Only load scripts if we have valid consent
        if (parsed && parsed.timestamp) {
          loadConditionalScripts(parsed);
        }
      }
    } catch (error) {
      console.error('Error reading cookie consent:', error);
      // If there's an error parsing, show the banner
      setShowBanner(true);
    }
  }, []);

  const loadConditionalScripts = (consentSettings: ConsentSettings) => {
    if (consentSettings.analytics && typeof window !== 'undefined') {
      // Check if GTM is already loaded
      const existingGTM = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
      if (!existingGTM && !(window as any).dataLayer) {
        // Load Google Tag Manager
        (function(w: any,d: any,s: any,l: any,i: any){
          w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s) as any,dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;(f.parentNode as any).insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NND2BW5R');

        // Also add the noscript fallback to body
        if (!document.getElementById('gtm-noscript')) {
          const noscript = document.createElement('noscript');
          noscript.id = 'gtm-noscript';
          noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NND2BW5R" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
          document.body.insertBefore(noscript, document.body.firstChild);
        }
      }
    }

    // Send consent update to GTM if it's loaded
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'consent_update',
        consent_settings: consentSettings
      });
    }
  };

  const saveConsent = (settings: ConsentSettings) => {
    const consentWithTimestamp = {
      ...settings,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentWithTimestamp));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setConsent(consentWithTimestamp);
    loadConditionalScripts(consentWithTimestamp);
    setShowBanner(false);
    setShowDetails(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    });
  };

  const handleAcceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    });
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    });
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-lg p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Cookie Consent
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <Link href="/cookie-policy" className="text-purple-600 hover:text-purple-700 underline">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline">
                  Privacy Policy
                </Link>{' '}
                to learn more.
              </p>
              {!showDetails && (
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-sm text-purple-600 hover:text-purple-700 underline"
                >
                  Customize preferences
                </button>
              )}
            </div>
            
            {!showDetails && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Necessary Only
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-lg hover:from-red-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Accept All
                </button>
              </div>
            )}
          </div>

          {/* Detailed Preferences */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies are essential for the website to function properly. They cannot be disabled.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded cursor-not-allowed opacity-50"
                  />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies help us understand how visitors interact with our website using Google Analytics.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                    className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies are used to track visitors across websites for marketing and advertising purposes.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
                    className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-lg hover:from-red-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};