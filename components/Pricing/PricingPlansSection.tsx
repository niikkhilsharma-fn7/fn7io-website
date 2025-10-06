"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { CheckIcon } from "./CheckIcon";
import { trackEvent, getCurrentUTMParams } from '@/utils/amplitude';
import { useSearchParams } from 'next/navigation';

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19141C3.49609 6.19141 2.72656 5.42188 2.72656 4.47266C2.72656 3.52344 3.49609 2.75391 4.44922 2.75391C5.39844 2.75391 6.16797 3.52344 6.16797 4.47266C6.16797 5.41797 5.39844 6.19141 4.44922 6.19141ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8086V17.043Z" fill="#0077B5"/>
  </svg>
);

const RedditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10C20 10.75 19.6875 11.4375 19.1875 11.9375C19.25 12.25 19.25 12.5625 19.25 12.875C19.25 16.125 15.625 18.75 11.125 18.75C6.625 18.75 3 16.125 3 12.875C3 12.5625 3 12.25 3.0625 11.9375C2.5625 11.4375 2.25 10.75 2.25 10C2.25 8.8125 3.1875 7.875 4.375 7.875C4.9375 7.875 5.4375 8.125 5.8125 8.5C7.25 7.5625 9.125 7 11.125 6.9375L12.125 2.6875L15.5 3.375C15.6875 2.5625 16.4375 1.9375 17.375 1.9375C18.4375 1.9375 19.3125 2.8125 19.3125 3.875C19.3125 4.9375 18.4375 5.8125 17.375 5.8125C16.5 5.8125 15.75 5.25 15.625 4.4375L12.875 3.875L12.125 7.0625C14.0625 7.125 15.875 7.6875 17.3125 8.625C17.6875 8.1875 18.25 7.9375 18.8125 7.9375C19.9375 7.875 20.9375 8.8125 20.9375 10H20ZM7.5 11.9375C7.5 11.1875 6.875 10.5625 6.125 10.5625C5.375 10.5625 4.75 11.1875 4.75 11.9375C4.75 12.6875 5.375 13.3125 6.125 13.3125C6.875 13.3125 7.5 12.6875 7.5 11.9375ZM15.125 10.5625C14.375 10.5625 13.75 11.1875 13.75 11.9375C13.75 12.6875 14.375 13.3125 15.125 13.3125C15.875 13.3125 16.5 12.6875 16.5 11.9375C16.5 11.1875 15.875 10.5625 15.125 10.5625ZM13.75 15.4375C13.1875 16 12.1875 16.3125 11.125 16.3125C10.0625 16.3125 9.0625 16 8.5 15.4375C8.3125 15.25 8.3125 14.9375 8.5 14.75C8.6875 14.5625 9 14.5625 9.1875 14.75C9.5 15.0625 10.25 15.3125 11.125 15.3125C12 15.3125 12.75 15.0625 13.0625 14.75C13.25 14.5625 13.5625 14.5625 13.75 14.75C13.9375 14.9375 13.9375 15.25 13.75 15.4375Z" fill="#FF4500"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.751 0.5H18.816L12.116 8.186L20 19.5H13.826L8.996 12.808L3.464 19.5H0.397L7.542 11.296L0 0.5H6.328L10.714 6.64L15.751 0.5ZM14.616 17.521H16.202L5.454 2.368H3.745L14.616 17.521Z" fill="#000000"/>
  </svg>
);

export const PricingPlansSection = () => {
  const [basicTeamCount, setBasicTeamCount] = useState(0);
  const [proTeamCount, setProTeamCount] = useState(0);
  const [userCountry, setUserCountry] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  // Function to preserve UTM parameters when redirecting to signup
  const getSignupUrlWithUTM = () => {
    const baseUrl = 'https://www.fn7.io/get-form';
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

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // First try FN7's own API (using GET to avoid CORS issues)
        let country = '';

        try {
          // Try FN7 API first
          const fn7Response = await fetch('https://atlas.dev.app.fn7.io/api/fn7UserClientLocation', {
            method: 'GET',
            headers: {
              'x-fn7-host': 'atlas.dev.app.fn7.io',
              'Content-Type': 'application/json'
            }
          });

          if (fn7Response.ok) {
            const fn7Data = await fn7Response.json();
            console.log('FN7 API location data:', fn7Data);

            // FN7 API returns {"country_code": "IN"}
            country = fn7Data.country_code || fn7Data.countryCode || fn7Data.country || '';

            if (country) {
              console.log('Detected country from FN7 API:', country);
              setUserCountry(country);
              return; // Exit if successful
            }
          }
        } catch (fn7Error) {
          console.log('FN7 API not available, trying fallback:', fn7Error instanceof Error ? fn7Error.message : 'Unknown error');
        }

        // Fallback to ipapi.co if FN7 API fails or returns no country
        const response = await fetch('https://ipapi.co/json/');

        if (response.ok) {
          const data = await response.json();
          console.log('Fallback location data (ipapi.co):', data);

          // ipapi.co returns country_code like "IN" for India
          country = data.country_code || data.country || '';
          console.log('Detected country from fallback:', country);

          setUserCountry(country);
        } else {
          // Fallback to default (USD) if API fails
          console.error('All location APIs failed, using default pricing');
          setUserCountry('US');
        }
      } catch (error) {
        console.error('Error fetching user location:', error);
        // Fallback to default (USD) if error occurs
        setUserCountry('US');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserLocation();
  }, []);

  const handleBasicDecrement = () => {
    if (basicTeamCount > 0) {
      setBasicTeamCount(basicTeamCount - 1);
      trackEvent('Team Size Adjusted', {
        plan: 'Basic',
        action: 'decrement',
        new_count: basicTeamCount - 1,
        page: 'Pricing'
      });
    }
  };

  const handleBasicIncrement = () => {
    setBasicTeamCount(basicTeamCount + 1);
    trackEvent('Team Size Adjusted', {
      plan: 'Basic',
      action: 'increment',
      new_count: basicTeamCount + 1,
      page: 'Pricing'
    });
  };

  const handleProDecrement = () => {
    if (proTeamCount > 0) {
      setProTeamCount(proTeamCount - 1);
      trackEvent('Team Size Adjusted', {
        plan: 'Pro',
        action: 'decrement',
        new_count: proTeamCount - 1,
        page: 'Pricing'
      });
    }
  };

  const handleProIncrement = () => {
    setProTeamCount(proTeamCount + 1);
    trackEvent('Team Size Adjusted', {
      plan: 'Pro',
      action: 'increment',
      new_count: proTeamCount + 1,
      page: 'Pricing'
    });
  };

  // Pricing based on user location
  const isIndia = userCountry && (
    userCountry.toUpperCase() === 'IN' ||
    userCountry.toLowerCase() === 'india' ||
    userCountry.toUpperCase() === 'IND'
  );

  console.log('Is India?', isIndia, 'Country:', userCountry); // Debug log

  // Pricing configuration
  const pricing = {
    basic: {
      base: isIndia ? 2500 : 70,
      perSeat: isIndia ? 400 : 5,
      currency: isIndia ? '₹' : '$'
    },
    pro: {
      base: isIndia ? 4500 : 145,
      perSeat: isIndia ? 600 : 10,
      currency: isIndia ? '₹' : '$'
    }
  };

  const basicTotalPrice = pricing.basic.base + (basicTeamCount * pricing.basic.perSeat);
  const proTotalPrice = pricing.pro.base + (proTeamCount * pricing.pro.perSeat);
  const basicTotalSeats = 1 + basicTeamCount;
  const proTotalSeats = 1 + proTeamCount;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center px-24 w-full max-md:px-12 max-sm:px-5">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-2xl text-gray-500">Loading pricing...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full">
      <div className="flex gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-stretch flex-col lg:flex-row lg:items-stretch">
        {/* Basic Plan */}
        <div className="relative flex flex-col px-4 sm:px-5 md:px-6 lg:px-7 py-6 md:py-7 lg:py-8 bg-white rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300 min-h-[750px] md:min-h-[800px] lg:min-h-[850px] w-full lg:w-[520px] xl:w-[575px] max-w-full lg:max-w-none mx-auto lg:mx-0 border border-gray-100">
          <div className="mb-4 md:mb-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-left text-black">
            Basic
          </div>
          <div className="mb-12 md:mb-16 lg:mb-20 text-lg sm:text-xl md:text-2xl text-left text-neutral-500">
            For Solopreneurs & Small Startups
          </div>
          <div className="flex gap-2 md:gap-2.5 items-end mb-4 md:mb-5 flex-col sm:flex-row sm:items-end">
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left sm:text-center text-black">
              {pricing.basic.currency}{pricing.basic.base.toLocaleString()}
            </div>
            <div className="mb-0 sm:mb-1.5 text-base sm:text-lg md:text-xl text-left sm:text-center text-neutral-500">
              per member / per month
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <div className="text-base sm:text-lg md:text-xl font-semibold text-black">
              <span className="block sm:inline">Add Team:</span>
              <span className="block sm:inline sm:ml-1 mt-1 sm:mt-0"> {pricing.basic.currency}{pricing.basic.perSeat}/Member</span>
            </div>
            <div className="flex gap-3 md:gap-4 lg:gap-5 items-center">
              <button
                onClick={handleBasicDecrement}
                className="flex justify-center items-center bg-white rounded-md border-solid cursor-pointer border-[0.5px] border-neutral-300 h-[23px] w-[23px] hover:bg-gray-50"
              >
                <div className="text-lg text-center text-black">
                  -
                </div>
              </button>
              <div className="text-lg md:text-xl lg:text-2xl text-center text-black">
                {basicTeamCount}
              </div>
              <button
                onClick={handleBasicIncrement}
                className="flex justify-center items-center bg-white rounded-md border-solid cursor-pointer border-[0.5px] border-neutral-300 h-[23px] w-[23px] hover:bg-gray-50"
              >
                <div className="text-lg text-center text-black">
                  +
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 md:p-4 lg:p-5 mb-5 md:mb-7 lg:mb-9 rounded-xl border border-solid bg-zinc-100 border-neutral-300 h-[50px] md:h-[58px] lg:h-[66px] w-full">
            <div className="text-lg md:text-xl lg:text-2xl text-center text-black">
              {basicTotalSeats} Seat{basicTotalSeats !== 1 ? 's' : ''}
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-center text-black">
              {pricing.basic.currency}{basicTotalPrice.toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5 flex-grow">
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black flex items-center gap-2">
                Scout on LinkedIn <LinkedInIcon />
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black flex items-center gap-2">
                Scout on Reddit <RedditIcon />
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                40 qualified conversations daily
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Impact Dashboard
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Autoposting from connected accounts
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Unlimited response regeneration
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              trackEvent('CTA Clicked', {
                cta_name: 'Start Trial - Basic Plan',
                page: 'Pricing',
                plan_type: 'Basic',
                total_price: basicTotalPrice,
                total_seats: basicTotalSeats,
                currency: pricing.basic.currency,
                ...getCurrentUTMParams()
              });
              window.location.href = getSignupUrlWithUTM();
            }}
            className="flex justify-center items-center bg-black rounded-xl cursor-pointer h-[50px] md:h-[58px] lg:h-[66px] w-full mt-6 md:mt-8 lg:mt-10 hover:bg-gray-800 transition-colors">
            <div className="text-lg md:text-xl lg:text-2xl text-center text-white">
              Get Beta Access
            </div>
          </button>
        </div>

        {/* Pro Plan */}
        <div className="relative flex flex-col px-4 sm:px-5 md:px-6 lg:px-7 py-6 md:py-7 lg:py-8 bg-white rounded-2xl md:rounded-3xl border-2 border-[#767070] shadow-2xl hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:scale-[1.01] md:hover:scale-[1.02] min-h-[750px] md:min-h-[800px] lg:min-h-[850px] w-full lg:w-[520px] xl:w-[575px] max-w-full lg:max-w-none mx-auto lg:mx-0">
          <div className="mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
            <div className="text-2xl sm:text-3xl md:text-4xl text-left text-black font-semibold">
              Pro
            </div>
            <div className="inline-flex justify-center items-center px-2.5 sm:px-3 md:px-3.5 pt-1 sm:pt-1.5 pb-1.5 sm:pb-2 rounded-[30px] bg-gradient-to-r from-[#FF6C57] to-[#B56AF1]">
              <div className="text-sm sm:text-base md:text-lg text-center text-white">
                Recommended
              </div>
            </div>
          </div>
          <div className="mb-12 md:mb-16 lg:mb-20 text-lg sm:text-xl md:text-2xl text-left text-neutral-500">
            For Growing Teams
          </div>
          <div className="flex gap-2 md:gap-2.5 items-end mb-4 md:mb-5 flex-col sm:flex-row sm:items-end">
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left sm:text-center text-black">
              {pricing.pro.currency}{pricing.pro.base.toLocaleString()}
            </div>
            <div className="mb-0 sm:mb-1.5 text-base sm:text-lg md:text-xl text-left sm:text-center text-neutral-500">
              per member / per month
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <div className="text-base sm:text-lg md:text-xl font-semibold text-black">
              <span className="block sm:inline">Add Team:</span>
              <span className="block sm:inline sm:ml-1 mt-1 sm:mt-0"> {pricing.pro.currency}{pricing.pro.perSeat}/Member</span>
            </div>
            <div className="flex gap-3 md:gap-4 lg:gap-5 items-center">
              <button
                onClick={handleProDecrement}
                className="flex justify-center items-center bg-white rounded-md border-solid cursor-pointer border-[0.5px] border-neutral-300 h-[23px] w-[23px] hover:bg-gray-50"
              >
                <div className="text-lg text-center text-black">
                  -
                </div>
              </button>
              <div className="text-lg md:text-xl lg:text-2xl text-center text-black">
                {proTeamCount}
              </div>
              <button
                onClick={handleProIncrement}
                className="flex justify-center items-center bg-white rounded-md border-solid cursor-pointer border-[0.5px] border-neutral-300 h-[23px] w-[23px] hover:bg-gray-50"
              >
                <div className="text-lg text-center text-black">
                  +
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 md:p-4 lg:p-5 mb-5 md:mb-7 lg:mb-9 rounded-xl border border-solid bg-zinc-100 border-neutral-300 h-[50px] md:h-[58px] lg:h-[66px] w-full">
            <div className="text-lg md:text-xl lg:text-2xl text-center text-black">
              {proTotalSeats} Seat{proTotalSeats !== 1 ? 's' : ''}
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-center text-black">
              {pricing.pro.currency}{proTotalPrice.toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5 flex-grow">
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black flex items-center gap-2">
                Integration with <TwitterIcon /> (Formerly Twitter)
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black flex items-center gap-2">
                Scout on LinkedIn <LinkedInIcon />
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black flex items-center gap-2">
                Scout on Reddit <RedditIcon />
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Unlimited 'Scout More' actions
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Impact Dashboard
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Autoposting from connected accounts
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Unlimited response regeneration
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 lg:gap-7 items-start">
              <CheckIcon />
              <div className="flex-1 text-base sm:text-lg md:text-xl text-black">
                Priority Support
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              trackEvent('CTA Clicked', {
                cta_name: 'Start Trial - Pro Plan',
                page: 'Pricing',
                plan_type: 'Pro',
                total_price: proTotalPrice,
                total_seats: proTotalSeats,
                currency: pricing.pro.currency,
                ...getCurrentUTMParams()
              });
              window.location.href = getSignupUrlWithUTM();
            }}
            className="flex justify-center items-center bg-black rounded-xl cursor-pointer h-[50px] md:h-[58px] lg:h-[66px] w-full mt-6 md:mt-8 lg:mt-10 hover:bg-gray-800 transition-colors">
            <div className="text-lg md:text-xl lg:text-2xl text-center text-white">
            Start 7 Days Free Trial
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
