import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { trackSignupClick, getCurrentUTMParams } from '@/utils/amplitude';
import HomeScoutLoadingBox from './HomeScoutLoadingBox';

interface HeroSectionProps {}

type ValidationStep = {
  message: string;
  delay: number;
};

export const HeroSection = ({}: HeroSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [shouldShake, setShouldShake] = useState(false);
  const shakeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const [website, setWebsite] = useState('');
  const [websiteValid, setWebsiteValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [websiteTouched, setWebsiteTouched] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const validateURL = (url: string): boolean => {
    if (!url || url.length < 4) {
      return false;
    }

    // Ensure protocol so URL constructor works
    const normalisedUrl = (() => {
      if (/^https?:\/\//i.test(url)) {
        return url;
      }
      // If it starts with www., prepend https://
      if (/^www\./i.test(url)) {
        return `https://${url}`;
      }
      return `https://${url}`;
    })();

    try {
      const parsed = new URL(normalisedUrl);

      // hostname must contain at least one dot and not end with a dot
      const hostname = parsed.hostname;
      const hasValidHostname =
        hostname.includes('.') &&
        !hostname.endsWith('.') &&
        hostname.split('.').every(part => part.length > 0);

      if (!hasValidHostname) {
        return false;
      }

      // Basic TLD validation (2+ characters, alphabetic)
      const tld = hostname.split('.').pop() ?? '';
      if (!/^[a-z]{2,}$/i.test(tld)) {
        return false;
      }

      // Reject obviously invalid hostnames
      if (/[\s@]/.test(hostname)) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  };


  const performRealValidation = async (url: string): Promise<boolean> => {
    setIsValidating(true);
    setValidationMessage('Validating website...');
    setShowError(false);

    // Simulate real validation steps
    const steps: ValidationStep[] = [
      { message: 'Checking URL format...', delay: 1000 },
      { message: 'Verifying domain...', delay: 1500 },
      { message: 'Testing connectivity...', delay: 1500 },
      { message: 'Finalizing validation...', delay: 1000 }
    ];

    for (const step of steps) {
      setValidationMessage(step.message);
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    // Final validation result
    const isValid = validateURL(url);
    setIsValidating(false);
    setValidationMessage('');

    if (isValid) {
      setWebsiteValid(true);
      setShowError(false);
      setShowLoader(true);
      const redirectUrl = getSignupUrlWithUTM();

      const userData = {
        additionalData: {
          websiteUrl: url
        }
      }
      // After 10 seconds, navigate to signup
      setTimeout(() => {
        const queryParams = Object.fromEntries(
          new URLSearchParams(redirectUrl.split('?')[1] || '')
        );
        const queryWithUserData = new URLSearchParams({
          ...queryParams,
          user: JSON.stringify(userData)
        }).toString();

        if (typeof window !== 'undefined') {
          localStorage.setItem('userWebsite', url);
        }

        const urlWithoutQuery = redirectUrl.split('?')[0];
        const finalUrl = queryWithUserData
          ? `${urlWithoutQuery}?${queryWithUserData}`
          : redirectUrl;

        window.open(finalUrl, '_blank', 'noopener,noreferrer');
        
        // Reset UI to initial stage
        setWebsite('');
        setWebsiteValid(false);
        setWebsiteTouched(false);
        setShowError(false);
        setIsValidating(false);
        setValidationMessage('');
        setShowLoader(false);
      }, 10000);
    } else {
      setWebsiteValid(false);
      setShowError(true);
    }

    return isValid;
  };

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWebsite(value);
    setWebsiteTouched(true);

    // Clear previous validation states
    if (value.length === 0) {
      setShowError(false);
      setWebsiteValid(false);
      setIsValidating(false);
      setValidationMessage('');
      setShowLoader(false);
    }
  };


  const handleWebsiteBlur = async () => {
    if (website.length > 0 && !websiteValid && !isValidating) {
      // Start real validation when user leaves the field
      await performRealValidation(website);
    }
  };

  const handleWebsiteKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && website.length > 0 && !isValidating) {
      e.preventDefault();
      await performRealValidation(website);
    }
  };

  useEffect(() => {
    const triggerHeroInput = () => {
      inputRef.current?.focus({ preventScroll: true });
      if (shakeTimeoutRef.current) {
        clearTimeout(shakeTimeoutRef.current);
      }
      setShouldShake(true);
      requestAnimationFrame(() => {
        setShouldShake(true);
        shakeTimeoutRef.current = setTimeout(() => {
          console.log('shakeTimeoutRef.current', shakeTimeoutRef.current, shouldShake);
          setShouldShake(false);
          shakeTimeoutRef.current = null;
        }, 2000);
      });
    };

    window.addEventListener('trigger-hero-input', triggerHeroInput);
    return () => {
      window.removeEventListener('trigger-hero-input', triggerHeroInput);
      if (shakeTimeoutRef.current) {
        clearTimeout(shakeTimeoutRef.current);
      }
    };
  }, []);

  // Function to preserve UTM parameters when redirecting to beta access form
  const getSignupUrlWithUTM = () => {
    const baseUrl = 'https://atlas.dev2.app.fn7.io/auth/provider/signup';
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

  return (
    <section
      id="hero-section"
      className="relative flex flex-col items-center self-stretch pb-40 sm:pb-28 md:pb-32 lg:pb-[20rem] w-full text-center bg-white overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-background.svg)',
        backgroundSize: 'cover',
        backgroundPosition: isMobile ? 'center 0rem' : 'center -12vw',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1 className="mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black max-w-[1200px] leading-tight px-6 md:px-8 lg:px-4">
        Your Buyers Are Talking.<br />Agent Scout Finds Them.
      </h1>
      <p className="mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl font-normal text-black px-6 md:px-8 lg:px-4 max-w-[900px]">
        Not cold leads - real buyers in live conversations about the problems you solve.
      </p>
      <div className="scout-form">
                <div className="input-wrapper">
                  <div className={`input-group pulse-border ${shouldShake ? 'shake' : ''}`}>
                    <input
                      type="text"
                      ref={inputRef}
                      className={`form-input ${websiteValid ? 'valid' : ''} ${showError ? 'invalid' : ''}`}
                      placeholder="Enter your website URL to get started"
                      value={website}
                      onChange={handleWebsiteChange}
                      onBlur={handleWebsiteBlur}
                      onKeyPress={handleWebsiteKeyPress}
                      disabled={isValidating || showLoader}
                      required
                    />
                    {isValidating && (
                      <div className="validation-spinner">
                        <div className="spinner"></div>
                      </div>
                    )}
                    {websiteValid && !isValidating && (
                      <div className="checkmark">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.667 5L7.5 14.167L3.333 10"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    {showError && !isValidating && <span className="error-mark">!</span>}
                  </div>
                  {showError && (
                    <div className="error-message fade-in">
                      <span>Please enter a valid website URL to get started(e.g., example.com or www.example.com)</span>
                    </div>
                  )}
                  {isValidating && (
                    <div className="validation-message fade-in">
                      <span>{validationMessage}</span>
                    </div>
                  )}
                </div>

                {/* Show loader after valid URL */}
                {showLoader && (
                  <div className="w-full mt-4 fade-in">
                    <HomeScoutLoadingBox />
                  </div>
                )}
              </div>
     {!showLoader && <button
        onClick={() => {
          trackSignupClick('Hero Section', getCurrentUTMParams());
          handleWebsiteBlur();
        }}
        className="px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 mt-6 md:mt-7 text-base md:text-lg font-medium text-white bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-lg hover:from-red-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Find My Buyers
      </button>
      }
    </section>
  );
};
