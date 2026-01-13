# Amplitude Tracking Implementation - Complete Guide

## Overview
This document details all Amplitude tracking implementations across the FN7 website. All CTAs, forms, and user interactions are tracked with UTM parameter preservation.

## Implementation Status ✅

### 1. Core Setup
- ✅ Amplitude SDK installed (`@amplitude/analytics-browser`)
- ✅ API Key configured: `c9d44178b542e7fece5cc0992b4607f3`
- ✅ Auto-tracking for page views in `_app.tsx`
- ✅ UTM parameter preservation across all CTAs

### 2. Navigation Components

#### Navbar (`/components/Navbar.tsx`)
- ✅ **Main Navbar Signup** - Tracks as "Navbar - Main"
- ✅ **Scrolled Navbar Signup** - Tracks as "Navbar - Scrolled"
- ✅ **Mobile Menu Signup** - Tracks as "Navbar - Mobile Menu"

#### Footer
- Standard navigation links (no special tracking needed as page views are auto-tracked)

### 3. Homepage (`/pages/index.tsx`)

#### HeroSection (`/components/HeroSection.tsx`)
- ✅ **"Start Scouting" Button** - Tracks as "Hero Section" signup click

#### FeatureSection CTAs
- ✅ **"Try Scout" Button** - Tracks with plan details
- ✅ **"Try Muse" Button** - Tracks with plan details
- ✅ **"View Agent Roadmap" Button** - Tracks internal navigation

#### CTASection (`/components/CTASection.tsx`)
- ✅ **Desktop "Show Me My Buyers"** - Tracks as "CTA Section - Desktop"
- ✅ **Mobile "Show Me My Buyers"** - Tracks as "CTA Section - Mobile"

### 4. Pricing Page (`/pages/pricing.tsx`)

#### PricingPlansSection (`/components/Pricing/PricingPlansSection.tsx`)
- ✅ **Basic Plan "Start 7 Days Free Trial"** - Tracks with pricing details
- ✅ **Pro Plan "Start 7 Days Free Trial"** - Tracks with pricing details
- ✅ **Team Size Adjustments** - Tracks increment/decrement actions
- ✅ **Dynamic Pricing** - Includes currency, total price, and seats in events

### 5. Atlas Platform Page (`/pages/atlas-platform.tsx`)

#### PlatformHeroSection (`/components/PlatformHeroSection.tsx`)
- ✅ **"Get Atlas Access" Button** - Tracks as "Atlas Platform" CTA

### 6. Partner Program

#### FinalCTASection (`/components/PartnerProgram/FinalCTASection.tsx`)
- ✅ **"Guide & Grow" Button** - Tracks navigation to partner application

#### PartnerApplicationForm (`/components/PartnerProgram/PartnerApplicationForm.tsx`)
- ✅ **Form Submission** - Tracks with partner type and consent details
- ✅ **Success Event** - Tracks successful form submission

### 7. Forms

#### GetAccessForm (`/components/GetAccessForm.tsx`)
- ✅ **Form Submission** - Tracks with all form fields
- ✅ **Success Event** - Tracks successful submission
- ✅ **GDPR Consent** - Includes privacy and marketing consent status

## Event Schema

### CTA Click Events
```javascript
{
  event_type: "CTA Clicked",
  event_properties: {
    cta_name: "Button Text",           // e.g., "Start Scouting"
    page: "Current Page",              // e.g., "Home", "Pricing"
    location: "Section",               // e.g., "Hero Section"
    destination: "Target URL/Page",    // e.g., "Signup"
    // UTM Parameters (if present)
    utm_source: "source",
    utm_medium: "medium",
    utm_campaign: "campaign",
    utm_term: "term",
    utm_content: "content"
  }
}
```

### Form Submission Events
```javascript
{
  event_type: "Form Submitted",
  event_properties: {
    form_name: "Form Name",            // e.g., "Get Priority Access"
    page: "Current Page",
    // Form-specific fields
    topic: "Selected Topic",
    company: "Company Name",
    privacy_consent: true/false,
    marketing_consent: true/false,
    // UTM Parameters
  }
}
```

### Pricing Events
```javascript
{
  event_type: "CTA Clicked",
  event_properties: {
    cta_name: "Start Trial - [Plan]",
    page: "Pricing",
    plan_type: "Basic/Pro",
    total_price: 145,
    total_seats: 2,
    currency: "$" or "₹",
    // UTM Parameters
  }
}
```

### Team Size Adjustment Events
```javascript
{
  event_type: "Team Size Adjusted",
  event_properties: {
    plan: "Basic/Pro",
    action: "increment/decrement",
    new_count: 3,
    page: "Pricing"
  }
}
```

## Helper Functions Available

### Core Tracking (`/utils/amplitude.ts`)
- `initAmplitude()` - Initialize Amplitude
- `trackEvent(name, properties)` - Track custom events
- `trackPageView(page, properties)` - Track page views
- `trackSignupClick(location, utmParams)` - Track signup CTAs
- `trackCTAClick(name, destination, utmParams)` - Track any CTA
- `setUserProperties(properties)` - Set user attributes
- `setUserId(userId)` - Identify users
- `getCurrentUTMParams()` - Get current UTM parameters

### Helper Functions (`/utils/amplitude-helpers.tsx`)
- `useSignupUrl()` - Hook to get signup URL with UTM params
- `trackAndNavigateToSignup()` - Track and redirect to signup
- `trackInternalNavigation()` - Track internal page navigation
- `trackFormFieldInteraction()` - Track form field interactions
- `trackSocialClick()` - Track social media link clicks
- `trackDownload()` - Track file downloads
- `trackScrollDepth()` - Track scroll depth
- `trackVideoInteraction()` - Track video interactions
- `trackFAQInteraction()` - Track FAQ expand/collapse
- `trackSearch()` - Track search events
- `trackError()` - Track errors

## UTM Parameter Handling

All CTAs automatically:
1. Preserve UTM parameters from the current URL
2. Append them to signup redirects
3. Include them in Amplitude events
4. Support these parameters:
   - utm_source
   - utm_medium
   - utm_campaign
   - utm_term
   - utm_content

## Testing Your Implementation

### 1. Local Testing
```bash
# Start dev server
npm run dev

# Visit with UTM params
http://localhost:3000?utm_source=test&utm_medium=test&utm_campaign=test

# Click CTAs and check Amplitude dashboard
```

### 2. Verify Events in Amplitude
1. Go to https://app.amplitude.com
2. Navigate to "User Activity" or "Events"
3. Look for your test events (may take 30-60 seconds)
4. Check event properties include UTM parameters

### 3. Debug in Browser Console
```javascript
// Check if Amplitude is initialized
window.amplitude

// Manually trigger test event
amplitude.track('Test Event', { test: true });
```

## Remaining Components (Not Yet Implemented)

These components may benefit from additional tracking:

1. **Blog Pages** - Track article reads, time on page
2. **Contact Page** - Track contact method clicks
3. **FAQ Section** - Track which questions are expanded
4. **Roadmap Page** - Track agent interest clicks
5. **Social Links** - Track external social media clicks
6. **Footer Links** - Track policy page visits

## Best Practices

1. **Consistent Naming**: Use consistent event names across the application
2. **Context Inclusion**: Always include page context in events
3. **UTM Preservation**: Never lose UTM parameters in the funnel
4. **Error Tracking**: Track form validation errors and API failures
5. **User Journey**: Track complete user journeys from landing to conversion

## Monitoring & Analysis

### Key Metrics to Track
1. **Conversion Funnel**: Page View → CTA Click → Form Submit → Success
2. **UTM Attribution**: Which campaigns drive most conversions
3. **Plan Selection**: Basic vs Pro selection rates
4. **Form Abandonment**: Where users drop off in forms
5. **Navigation Patterns**: Most common user paths

### Amplitude Dashboards to Create
1. **Conversion Funnel** - Track drop-off at each step
2. **UTM Performance** - Compare campaign effectiveness
3. **Feature Adoption** - Which CTAs get most clicks
4. **User Journey Map** - Visualize common paths
5. **Error Tracking** - Monitor form and API errors

## Maintenance

### Regular Tasks
1. Review untracked CTAs monthly
2. Update event schema documentation
3. Monitor for broken tracking
4. Audit UTM parameter preservation
5. Clean up unused events

### Adding New CTAs
When adding new CTAs:
1. Import tracking utilities
2. Add onClick handler with tracking
3. Include page and location context
4. Test UTM preservation
5. Document in this guide

## Support

For questions or issues:
- Amplitude Documentation: https://docs.amplitude.com
- Implementation Guide: `/docs/AMPLITUDE_SETUP.md`
- Helper Functions: `/utils/amplitude-helpers.tsx`