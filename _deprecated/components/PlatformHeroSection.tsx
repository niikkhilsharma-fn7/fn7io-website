import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { trackEvent, getCurrentUTMParams } from "@/deprecated/utils/amplitude";

export const PlatformHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Function to preserve UTM parameters when redirecting to signup
  const getSignupUrlWithUTM = () => {
    const baseUrl = "https://www.fn7.io/get-form";
    const utmParams: Record<string, string> = {};

    // Collect all UTM parameters from current URL
    searchParams.forEach((value, key) => {
      if (key.startsWith("utm_")) {
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative flex flex-col items-center self-stretch pb-20 sm:pb-28 md:pb-32 lg:pb-40 w-full text-center bg-white overflow-hidden">
      <h1 className="mt-20 sm:mt-24 md:mt-28 lg:mt-36 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black max-w-[1200px] leading-tight px-6 md:px-8 lg:px-4">
        Conquer Growth.
        <br />
        With Atlas - The Agentic OS.
      </h1>
      <p className="mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl font-normal text-black px-6 md:px-8 lg:px-4 max-w-[900px]">
        Build bespoke hyperintelligent growth agents for Marketing, Sales, and CRM.
      </p>
      <button
        onClick={() => {
          trackEvent("CTA Clicked", {
            cta_name: "Get Atlas Access",
            page: "Atlas Platform",
            location: "Hero Section",
            ...getCurrentUTMParams(),
          });
          window.location.href = getSignupUrlWithUTM();
        }}
        className="px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 mt-6 md:mt-7 text-base md:text-lg font-medium text-white bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-lg hover:from-red-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Get Beta Access
      </button>
    </section>
  );
};
