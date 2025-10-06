import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { MobileLayout } from "@/components/MobileLayout";
import { CookieConsent } from "@/components/CookieConsent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Sora, Poppins } from 'next/font/google'
import { useEffect } from "react";
import { initGDPR } from "@/utils/gdpr";
import { initAmplitude, trackPageView } from "@/utils/amplitude";
import { useRouter } from "next/router";


const sora = Sora({subsets: ['latin']})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins'
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    // Initialize GDPR compliance on app mount
    initGDPR();
    
    // Initialize Amplitude analytics
    initAmplitude();
  }, []);
  
  useEffect(() => {
    // Track page views on route change
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Track initial page view
    trackPageView(router.pathname);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <ErrorBoundary>
      <div className={`${sora.className} ${poppins.variable}`}>
        <MobileLayout>
          <Navbar/>
          <Component {...pageProps} />
          <Footer />
          <CookieConsent />
        </MobileLayout>
      </div>
    </ErrorBoundary>
  );
}
