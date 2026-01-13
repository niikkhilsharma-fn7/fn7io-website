# Development Context for fn7 Website

## Project Overview

This is a Next.js website deployed on Fastly Edge Compute with a focus on performance, SEO, and user tracking.

## Core Development Principles

### 1. Server-Side Rendering (SSR)

- **Important pages should use SSR** for better SEO and performance
- All SSR pages must include:
  - `getServerSideProps` function
  - Comprehensive SEO metadata in `<Head>`
  - Open Graph and Twitter Card meta tags
  - Structured data (JSON-LD) when applicable
  - Canonical URLs
- Current SSR pages: `/`, `/faqs`, `/blogs`, `/blogs/[id]`
- Hidden pages: `/atlas-platform` (redirects to home page)

### 2. Query Parameter Preservation

- **ALL query parameters must be preserved** during navigation
- UTM parameters and tracking IDs are critical for analytics
- Use `usePreserveQueryParams` hook for all navigation:
  - `navigateWithQuery()` for programmatic navigation
  - `getLinkWithQuery()` for Link components
- Page-specific params (like `page`, `sort`) are automatically removed when navigating to different pages

### 3. UTM Parameter Handling

- **Accept ALL parameters starting with 'utm'** (not just predefined ones)
- Form submissions must capture and send all UTM parameters
- Dynamic UTM display in emails - no hardcoded UTM parameter lists
- Examples: utm_source, utm_medium, utm_campaign, utm_content, utm_term, utm_id, utm_source_platform, etc.

### 4. Image and Asset Management

- Default OG image: `fn7_logo.jpeg` for all non-blog SSR pages
- Blog pages use their individual blog images
- Favicon: `fn7_nav_logo.svg`
- Regularly clean up unused assets in `/public` folder

### 5. Navigation Components

- All buttons and links must use query-preserving navigation
- Components using navigation:
  - Hero sections (Scale Now buttons)
  - Navbar (all links and mobile menu)
  - Footer (all links)
  - Blog pagination
  - Form submissions

### 6. Email Integration

- Single API endpoint: `https://helix.app.fn7.io/api/send-email`
- Method: PUT
- Must include all form data and ALL UTM parameters
- Dynamic generation of UTM parameter display

### 7. Blog System

- Blog data stored in `/data/blogs.ts`
- SEO-friendly IDs (matching slugs)
- Simple 2-step blog addition process (see BLOG_ADDITION_GUIDE.md)
- HTML content rendered with `dangerouslySetInnerHTML`
- Custom CSS styles in `globals.css` for blog content

### 8. Deployment Process

```bash
# Deploy to Fastly
npm run fastly-deploy -- --token hvdENd8J2pjPSQMy4EhzmMsuSAFQ-vvB

# Clear cache (ALWAYS do this after deployment)
fastly purge --all --token hvdENd8J2pjPSQMy4EhzmMsuSAFQ-vvB --service-id iHzlVmEXjoUnfbwQpHdFO5
fastly purge --all --token hvdENd8J2pjPSQMy4EhzmMsuSAFQ-vvB --service-id kAMlxjhEvWm3K6DbXv6jv1
```

## Key Technical Decisions

1. **Why SSR for specific pages?**

   - Better SEO for important landing pages
   - Faster perceived load times
   - Proper social media preview cards

2. **Why preserve ALL query parameters?**

   - Complete analytics tracking
   - Campaign attribution
   - Future-proof for new tracking parameters

3. **Why dynamic UTM handling?**
   - No code changes needed for new UTM parameters
   - Flexibility for marketing campaigns
   - Cleaner, more maintainable code

## Common Tasks

### Adding a new SSR page

1. Add `getServerSideProps` function
2. Import and use `Head` from 'next/head'
3. Add all SEO meta tags
4. Set OG image to `https://www.fn7.io/fn7_logo.jpeg`
5. Add structured data if applicable

### Adding navigation to a component

1. Import `usePreserveQueryParams` hook
2. Use `navigateWithQuery()` for buttons
3. Use `getLinkWithQuery()` for Link components

### Working with UTM parameters

1. Always use `searchParams.forEach()` to collect ALL utm\_\* parameters
2. Never hardcode specific UTM parameter names
3. Display dynamically using `Object.entries()`

## Testing Checklist

- [ ] SSR pages render with full HTML (View Source)
- [ ] Query parameters preserved on navigation
- [ ] UTM parameters captured in forms
- [ ] OG images appear in social previews
- [ ] All navigation preserves tracking params
- [ ] Cache cleared after deployment
