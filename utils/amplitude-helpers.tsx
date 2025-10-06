// Amplitude Helper Functions for Common CTA Tracking
// This file provides reusable functions for tracking CTAs across the application

import { trackEvent, getCurrentUTMParams, trackSignupClick } from './amplitude';
import { useSearchParams } from 'next/navigation';

// Helper hook to get signup URL with UTM parameters
export const useSignupUrl = () => {
  const searchParams = useSearchParams();
  
  const getSignupUrlWithUTM = () => {
    const baseUrl = 'https://atlas.app.fn7.io/auth/provider/signup';
    const utmParams: Record<string, string> = {};
    
    // Collect all UTM parameters from current URL
    searchParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utmParams[key] = value;
      }
    });
    
    // If there are UTM parameters, append them to the signup URL
    if (Object.keys(utmParams).length > 0) {
      const queryString = new URLSearchParams(utmParams).toString();
      return `${baseUrl}?${queryString}`;
    }
    
    // No UTM params, return base URL
    return baseUrl;
  };

  return getSignupUrlWithUTM;
};

// Track and navigate to signup with UTM preservation
export const trackAndNavigateToSignup = (ctaName: string, page: string, location?: string) => {
  trackEvent('CTA Clicked', {
    cta_name: ctaName,
    page: page,
    location: location || 'Unknown',
    destination: 'Signup',
    ...getCurrentUTMParams()
  });
};

// Track internal navigation CTAs
export const trackInternalNavigation = (
  ctaName: string, 
  page: string, 
  destination: string, 
  location?: string
) => {
  trackEvent('CTA Clicked', {
    cta_name: ctaName,
    page: page,
    location: location || 'Unknown',
    destination: destination,
    ...getCurrentUTMParams()
  });
};

// Track form field interactions
export const trackFormFieldInteraction = (
  fieldName: string, 
  formName: string, 
  action: 'focus' | 'blur' | 'change'
) => {
  trackEvent('Form Field Interaction', {
    field_name: fieldName,
    form_name: formName,
    action: action,
    ...getCurrentUTMParams()
  });
};

// Track social link clicks
export const trackSocialClick = (platform: string, page: string) => {
  trackEvent('Social Link Clicked', {
    platform: platform,
    page: page,
    ...getCurrentUTMParams()
  });
};

// Track download events
export const trackDownload = (fileName: string, fileType: string, page: string) => {
  trackEvent('File Downloaded', {
    file_name: fileName,
    file_type: fileType,
    page: page,
    ...getCurrentUTMParams()
  });
};

// Track scroll depth (can be called at specific scroll percentages)
export const trackScrollDepth = (depth: number, page: string) => {
  trackEvent('Scroll Depth', {
    depth_percentage: depth,
    page: page,
    ...getCurrentUTMParams()
  });
};

// Track video interactions
export const trackVideoInteraction = (
  videoTitle: string, 
  action: 'play' | 'pause' | 'complete', 
  page: string
) => {
  trackEvent('Video Interaction', {
    video_title: videoTitle,
    action: action,
    page: page,
    ...getCurrentUTMParams()
  });
};

// Track FAQ interactions
export const trackFAQInteraction = (question: string, action: 'expand' | 'collapse', page: string) => {
  trackEvent('FAQ Interaction', {
    question: question,
    action: action,
    page: page,
    ...getCurrentUTMParams()
  });
};

// Track search events
export const trackSearch = (searchTerm: string, resultsCount: number, page: string) => {
  trackEvent('Search Performed', {
    search_term: searchTerm,
    results_count: resultsCount,
    page: page,
    ...getCurrentUTMParams()
  });
};

// Track errors
export const trackError = (errorMessage: string, errorType: string, page: string) => {
  trackEvent('Error Occurred', {
    error_message: errorMessage,
    error_type: errorType,
    page: page,
    ...getCurrentUTMParams()
  });
};