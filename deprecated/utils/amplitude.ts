import * as amplitude from '@amplitude/analytics-browser';

// Initialize Amplitude
export const initAmplitude = () => {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  
  if (!apiKey) {
    console.warn('Amplitude API key not found. Analytics will not be tracked.');
    return;
  }

  amplitude.init(apiKey, undefined, {
    defaultTracking: {
      pageViews: true,
      sessions: true,
      formInteractions: true,
      fileDownloads: true
    },
    autocapture: {
      attribution: true,
      pageViews: true,
      sessions: true,
      formInteractions: true,
      fileDownloads: true
    }
  });
  
  // Expose to window for debugging in development
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    (window as any).amplitude = amplitude;
    (window as any).testAmplitude = () => {
      console.log('✅ Amplitude is working! Sending test event...');
      amplitude.track('Test Event - Local', { 
        test: true, 
        timestamp: new Date().toISOString(),
        url: window.location.href
      });
      console.log('Event sent! Check https://app.amplitude.com in 30-60 seconds');
    };
    console.log('🎯 Amplitude initialized! Test it by typing: testAmplitude()');
  }
};

// Track custom events
export const trackEvent = (eventName: string, eventProperties?: Record<string, any>) => {
  if (!process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
    return;
  }
  
  amplitude.track(eventName, eventProperties);
};

// Track page views with custom properties
export const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  if (!process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
    return;
  }
  
  amplitude.track('Page View', {
    page: pageName,
    url: window.location.href,
    referrer: document.referrer,
    ...properties
  });
};

// Set user properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (!process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
    return;
  }
  
  const identify = new amplitude.Identify();
  
  Object.keys(properties).forEach(key => {
    identify.set(key, properties[key]);
  });
  
  amplitude.identify(identify);
};

// Set user ID for logged-in users
export const setUserId = (userId: string | null) => {
  if (!process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
    return;
  }
  
  amplitude.setUserId(userId || undefined);
};

// Track CTA clicks with UTM parameters
export const trackCTAClick = (ctaName: string, destination: string, utmParams?: Record<string, string>) => {
  if (!process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
    return;
  }
  
  amplitude.track('CTA Clicked', {
    cta_name: ctaName,
    destination: destination,
    page_url: window.location.href,
    page_title: document.title,
    ...utmParams
  });
};

// Track signup button clicks
export const trackSignupClick = (location: string, utmParams?: Record<string, string>) => {
  trackCTAClick(`Signup - ${location}`, 'https://atlas.app.fn7.io/auth/provider/signup', utmParams);
};

// Get current UTM parameters from URL
export const getCurrentUTMParams = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  params.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      utmParams[key] = value;
    }
  });
  
  return utmParams;
};

// Test function for local debugging - call this from browser console
export const testAmplitude = () => {
  console.log('✅ Amplitude is working! Check your dashboard at https://app.amplitude.com');
  trackEvent('Test Event', { test: true, timestamp: new Date().toISOString() });
};