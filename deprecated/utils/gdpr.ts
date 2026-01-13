/**
 * GDPR Utility Functions
 * Provides helper functions for GDPR compliance
 */

interface ConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

/**
 * Check if user has given consent for a specific category
 */
export const hasConsent = (category: 'necessary' | 'analytics' | 'marketing'): boolean => {
  if (typeof window === 'undefined') return false;
  
  const consentStr = localStorage.getItem('cookieConsent');
  if (!consentStr) return false;
  
  try {
    const consent: ConsentSettings = JSON.parse(consentStr);
    return consent[category] || false;
  } catch {
    return false;
  }
};

/**
 * Get all consent settings
 */
export const getConsentSettings = (): ConsentSettings | null => {
  if (typeof window === 'undefined') return null;
  
  const consentStr = localStorage.getItem('cookieConsent');
  if (!consentStr) return null;
  
  try {
    return JSON.parse(consentStr);
  } catch {
    return null;
  }
};

/**
 * Update consent settings
 */
export const updateConsent = (settings: Partial<ConsentSettings>): void => {
  if (typeof window === 'undefined') return;
  
  const current = getConsentSettings() || {
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString()
  };
  
  const updated = {
    ...current,
    ...settings,
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('cookieConsent', JSON.stringify(updated));
  localStorage.setItem('cookieConsentDate', new Date().toISOString());
  
  // Trigger a custom event for consent updates
  window.dispatchEvent(new CustomEvent('consentUpdated', { detail: updated }));
};

/**
 * Clear all consent settings
 */
export const clearConsent = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('cookieConsent');
  localStorage.removeItem('cookieConsentDate');
  
  // Clear cookies
  clearAllCookies();
  
  // Don't reload automatically - let the calling code handle it
  // window.location.reload();
};

/**
 * Clear all cookies for the current domain
 */
export const clearAllCookies = (): void => {
  if (typeof window === 'undefined') return;
  
  // Get all cookies
  document.cookie.split(';').forEach((cookie) => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    
    // Skip consent cookies
    if (name === 'cookieConsent' || name === 'cookieConsentDate') return;
    
    // Delete cookie
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.fn7.io`;
  });
};

/**
 * Check if consent is expired (older than 12 months)
 */
export const isConsentExpired = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  const consentDate = localStorage.getItem('cookieConsentDate');
  if (!consentDate) return true;
  
  const date = new Date(consentDate);
  const now = new Date();
  const monthsDiff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30);
  
  return monthsDiff > 12;
};

// Track if GDPR has been initialized to prevent multiple setups
let gdprInitialized = false;

/**
 * Initialize GDPR compliance
 */
export const initGDPR = (): void => {
  if (typeof window === 'undefined') return;
  
  // Prevent multiple initializations
  if (gdprInitialized) return;
  gdprInitialized = true;
  
  // Check if consent is expired - but don't clear it automatically to avoid refresh loop
  // Just let the cookie banner show again
  if (isConsentExpired()) {
    // Instead of clearing, just remove the consent to show banner again
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
  }
  
  // Check if we have valid consent and load scripts accordingly
  const consent = getConsentSettings();
  if (consent && consent.analytics) {
    loadGoogleTagManager();
  }
  
  // Create event handler function to avoid multiple listeners
  const handleConsentUpdate = (event: any) => {
    const settings = event.detail;
    
    // Handle analytics consent
    if (settings.analytics) {
      loadGoogleTagManager();
    } else {
      disableGoogleAnalytics();
    }
    
    // Handle marketing consent
    if (settings.marketing) {
      enableMarketingTracking();
    } else {
      disableMarketingTracking();
    }
  };
  
  // Remove any existing listener before adding new one
  window.removeEventListener('consentUpdated', handleConsentUpdate);
  window.addEventListener('consentUpdated', handleConsentUpdate);
};

/**
 * Load Google Tag Manager if consent is given
 */
export const loadGoogleTagManager = (): void => {
  if (typeof window === 'undefined') return;
  if (!hasConsent('analytics')) return;
  
  // Check if GTM is already loaded by looking for the script tag
  const existingGTM = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
  if (existingGTM || (window as any).dataLayer) return;
  
  // Load GTM
  (function(w: any, d: any, s: any, l: any, i: any) {
    w[l] = w[l] || [];
    w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s) as any;
    const dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-NND2BW5R');
};

/**
 * Disable Google Analytics
 */
const disableGoogleAnalytics = (): void => {
  if (typeof window === 'undefined') return;
  
  // Set the ga-disable flag
  (window as any)['ga-disable-GA_MEASUREMENT_ID'] = true;
  
  // Clear GA cookies
  document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.fn7.io';
  document.cookie = '_gid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.fn7.io';
  document.cookie = '_gat=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.fn7.io';
};

/**
 * Enable marketing tracking
 */
const enableMarketingTracking = (): void => {
  if (typeof window === 'undefined') return;
  
  // Send consent update to GTM
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'consent_update',
      marketing_consent: true
    });
  }
};

/**
 * Disable marketing tracking
 */
const disableMarketingTracking = (): void => {
  if (typeof window === 'undefined') return;
  
  // Clear marketing cookies
  document.cookie = 'fbp=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.fn7.io';
  document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.fn7.io';
  
  // Send consent update to GTM
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'consent_update',
      marketing_consent: false
    });
  }
};

/**
 * Format date for privacy notices
 */
export const formatPrivacyDate = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Anonymize IP address for analytics
 */
export const anonymizeIP = (ip: string): string => {
  const parts = ip.split('.');
  if (parts.length === 4) {
    // IPv4: set last octet to 0
    parts[3] = '0';
    return parts.join('.');
  }
  
  // IPv6: truncate to /64 network
  const v6Parts = ip.split(':');
  if (v6Parts.length > 4) {
    return v6Parts.slice(0, 4).join(':') + '::';
  }
  
  return ip;
};

/**
 * Check if user is from EU (requires IP geolocation service)
 */
export const isEUUser = async (): Promise<boolean> => {
  // This is a simplified check - in production, use a proper geolocation service
  const euCountries = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
    'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
    'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
  ];
  
  try {
    // You would typically call your geolocation API here
    // For now, we'll default to showing consent banner to everyone
    return true;
  } catch {
    // Default to showing consent banner if detection fails
    return true;
  }
};