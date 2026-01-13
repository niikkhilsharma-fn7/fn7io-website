// Test file to verify Amplitude tracking is working
// This file is for development testing only

import { trackEvent, trackPageView, trackSignupClick, setUserProperties } from './amplitude';

export const testAmplitudeTracking = () => {
  console.log('🧪 Testing Amplitude Tracking...');
  
  // Test 1: Page View
  console.log('Test 1: Tracking page view');
  trackPageView('/test-page', { test: true });
  
  // Test 2: Custom Event
  console.log('Test 2: Tracking custom event');
  trackEvent('Test Event', { 
    category: 'Testing',
    value: 123 
  });
  
  // Test 3: Signup Click
  console.log('Test 3: Tracking signup click');
  trackSignupClick('Test Location', {
    utm_source: 'test',
    utm_medium: 'test',
    utm_campaign: 'test'
  });
  
  // Test 4: User Properties
  console.log('Test 4: Setting user properties');
  setUserProperties({
    test_user: true,
    environment: 'development'
  });
  
  console.log('✅ Amplitude test events sent! Check your Amplitude dashboard.');
  console.log('📊 Dashboard: https://app.amplitude.com');
  console.log('Note: Events may take a few seconds to appear in Amplitude.');
};