import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/fn7_nav_logo.svg" />
        <link rel="shortcut icon" type="image/svg+xml" href="/fn7_nav_logo.svg" />
        
        {/* Google Tag Manager will be loaded conditionally after cookie consent */}
        {/* See CookieConsent component for implementation */}
      </Head>
      <body className="antialiased">
        {/* GTM noscript will be added dynamically after consent */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
