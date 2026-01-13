"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import HomeScoutLoadingBox from "../HomeScoutLoadingBox";

type ValidationStep = {
  message: string;
  delay: number;
};

// Zod schema for website validation
const websiteSchema = z.object({
  website: z
    .string()
    .min(1, "Please enter your website URL")
    .min(4, "Please enter a valid website URL")
    .refine(
      (url) => {
        // Normalize the URL
        const normalisedUrl = (() => {
          if (/^https?:\/\//i.test(url)) {
            return url;
          }
          if (/^www\./i.test(url)) {
            return `https://${url}`;
          }
          return `https://${url}`;
        })();

        try {
          const parsed = new URL(normalisedUrl);
          const hostname = parsed.hostname;

          // Check for valid hostname structure
          const hasValidHostname =
            hostname.includes(".") && !hostname.endsWith(".") && hostname.split(".").every((part) => part.length > 0);

          if (!hasValidHostname) {
            return false;
          }

          // Check for valid TLD
          const tld = hostname.split(".").pop() ?? "";
          if (!/^[a-z]{2,}$/i.test(tld)) {
            return false;
          }

          // Check for invalid characters
          if (/[\s@]/.test(hostname)) {
            return false;
          }

          return true;
        } catch {
          return false;
        }
      },
      {
        message: "Please enter a valid website URL (e.g., example.com or www.example.com)",
      }
    ),
});

// Infer the type from the schema
type WebsiteFormData = z.infer<typeof websiteSchema>;

interface WebsiteInputFormProps {
  placeholder?: string;
  buttonText?: string;
  validatingText?: string;
  className?: string;
}

export const WebsiteInputForm = ({
  placeholder = "Enter your website",
  buttonText = "Start Free",
  validatingText = "Validating...",
  className = "",
}: WebsiteInputFormProps) => {
  const searchParams = useSearchParams();

  // React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<WebsiteFormData>({
    resolver: zodResolver(websiteSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      website: "",
    },
  });

  const websiteValue = watch("website");

  // UI state
  const [isValidating, setIsValidating] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [websiteValid, setWebsiteValid] = useState(false);
  const shakeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [shouldShake, setShouldShake] = useState(false);

  // Get signup URL with UTM parameters
  const getSignupUrlWithUTM = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SIGNUP_BASE_URL || "https://atlas.dev2.app.fn7.io/auth/provider/signup";
    const utmParams: Record<string, string> = {};

    if (searchParams) {
      searchParams.forEach((value, key) => {
        if (key.startsWith("utm_")) {
          utmParams[key] = value;
        }
      });
    }

    if (Object.keys(utmParams).length > 0) {
      const queryString = new URLSearchParams(utmParams).toString();
      return `${baseUrl}?${queryString}`;
    }

    return baseUrl;
  };

  // Perform validation with animated steps
  const performValidationWithAnimation = async (url: string): Promise<boolean> => {
    setIsValidating(true);
    setValidationMessage("Validating website...");

    const steps: ValidationStep[] = [
      { message: "Checking URL format...", delay: 1000 },
      { message: "Verifying domain...", delay: 1500 },
      { message: "Testing connectivity...", delay: 1500 },
      { message: "Finalizing validation...", delay: 1000 },
    ];

    for (const step of steps) {
      setValidationMessage(step.message);
      await new Promise((resolve) => setTimeout(resolve, step.delay));
    }

    // Validate using Zod schema
    const result = websiteSchema.safeParse({ website: url });
    const isURLValid = result.success;

    setIsValidating(false);
    setValidationMessage("");

    if (isURLValid) {
      setWebsiteValid(true);
      setShowLoader(true);
      const redirectUrl = getSignupUrlWithUTM();

      const userData = {
        additionalData: {
          websiteUrl: url,
        },
      };

      setTimeout(() => {
        const queryParams = Object.fromEntries(new URLSearchParams(redirectUrl.split("?")[1] || ""));
        const queryWithUserData = new URLSearchParams({
          ...queryParams,
          user: JSON.stringify(userData),
        }).toString();

        if (typeof window !== "undefined") {
          localStorage.setItem("userWebsite", url);
        }

        const urlWithoutQuery = redirectUrl.split("?")[0];
        const finalUrl = queryWithUserData ? `${urlWithoutQuery}?${queryWithUserData}` : redirectUrl;

        window.open(finalUrl, "_blank", "noopener,noreferrer");

        // Reset UI to initial stage
        reset();
        setWebsiteValid(false);
        setIsValidating(false);
        setValidationMessage("");
        setShowLoader(false);
      }, 10000);
    }

    return isURLValid;
  };

  // Form submit handler
  const onSubmit = async (data: WebsiteFormData) => {
    if (!isValidating && !showLoader) {
      await performValidationWithAnimation(data.website);
    }
  };

  // Handle button click (for empty form case)
  const handleButtonClick = () => {
    if (!websiteValue || websiteValue.length === 0) {
      setFocus("website");
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 600);
    }
  };

  // Listen for external trigger to focus input
  useEffect(() => {
    const triggerHeroInput = () => {
      setFocus("website");
      if (shakeTimeoutRef.current) {
        clearTimeout(shakeTimeoutRef.current);
      }
      setShouldShake(true);
      shakeTimeoutRef.current = setTimeout(() => {
        setShouldShake(false);
        shakeTimeoutRef.current = null;
      }, 2000);
    };

    window.addEventListener("trigger-hero-input", triggerHeroInput);
    return () => {
      window.removeEventListener("trigger-hero-input", triggerHeroInput);
      if (shakeTimeoutRef.current) {
        clearTimeout(shakeTimeoutRef.current);
      }
    };
  }, [setFocus]);

  const hasError = !!errors.website;
  const showError = hasError && !isValidating;

  return (
    <div className={`w-full ${className}`}>
      {/* CTA Section */}
      <div className="w-full max-w-lg mx-auto mb-8 relative group z-20">
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${
            showError
              ? "from-red-400 to-red-400"
              : websiteValid
              ? "from-green-400 to-emerald-400"
              : "from-blue-400 to-cyan-400"
          } rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
        />
        <form
          className={`relative flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-xl shadow-xl border ${
            showError ? "border-red-300" : websiteValid ? "border-green-300" : "border-slate-100"
          } transition-colors ${shouldShake ? "animate-shake" : ""}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-1 relative flex items-center">
            <input
              {...register("website")}
              className="w-full px-5 py-4 rounded-lg bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-lg font-medium pr-12"
              placeholder={placeholder}
              type="text"
              disabled={isValidating || showLoader}
            />
            {/* Validation feedback icons */}
            <div className="absolute right-3 flex items-center">
              {isValidating && (
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
              {websiteValid && !isValidating && (
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.667 5L7.5 14.167L3.333 10" />
                </svg>
              )}
              {showError && (
                <span className="w-5 h-5 flex items-center justify-center text-red-500 font-bold text-lg">!</span>
              )}
            </div>
          </div>
          {!showLoader && (
            <button
              className="px-8 py-3 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-bold text-lg transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              onClick={handleButtonClick}
              disabled={isValidating}
            >
              {isValidating ? validatingText : buttonText}
              {!isValidating && <span className="material-symbols-outlined text-sm transition-all">arrow_forward</span>}
            </button>
          )}
        </form>
        {/* Error message from Zod via react-hook-form */}
        {showError && errors.website && (
          <p className="text-sm text-red-500 mt-2 text-left px-2 animate-fadeIn">{errors.website.message}</p>
        )}
        {/* Validation step message */}
        {isValidating && validationMessage && (
          <p className="text-sm text-blue-500 mt-2 text-left px-2 animate-fadeIn">{validationMessage}</p>
        )}
      </div>

      {/* Show loader after valid URL */}
      {showLoader && (
        <div className="w-full max-w-lg mx-auto mb-8 animate-fadeIn">
          <HomeScoutLoadingBox />
        </div>
      )}

      {/* No credit card message */}
      {!showLoader && (
        <p className="text-sm text-slate-500 font-semibold flex items-center justify-center gap-2 mb-20">
          <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
          No credit card required
        </p>
      )}
    </div>
  );
};
