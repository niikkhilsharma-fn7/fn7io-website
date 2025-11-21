"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import React from "react";
import { usePreserveQueryParams } from "@/hooks/usePreserveQueryParams";
import { trackSignupClick, getCurrentUTMParams } from "@/utils/amplitude";

export default function Navbar() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { navigateWithQuery, getLinkWithQuery } = usePreserveQueryParams();
  const handleGetStarted = useCallback(
    (options?: { closeMenu?: boolean }) => {
      if (options?.closeMenu) {
        setMobileMenuOpen(false);
      }
      
      const scrollToHero = () => {
        const heroElement = document.getElementById('hero-section');
        if (heroElement) {
          heroElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        window.dispatchEvent(new Event('trigger-hero-input'));
      };

      if (router.pathname === '/') {
        // Already on index page, scroll immediately
        scrollToHero();
      } else {
        // Navigate to index page first, then scroll after navigation
        navigateWithQuery('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          scrollToHero();
        }, 100);
      }
    },
    [router.pathname, navigateWithQuery]
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/blogs", label: "Blogs" },
    { href: "/partner-program", label: "Partner" },
    { href: "/pricing", label: "Pricing" },
  ];

  if ((isDesktop || isTablet) && isScrolled) {
    return (
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 ${isTablet ? 'w-[90%] max-w-[700px]' : 'w-[800px]'} bg-black rounded-[10px] flex items-center justify-between ${isTablet ? 'gap-4' : 'gap-[60px]'} px-4 py-2 animate-slide-down`}>
        <Image
          className="cursor-pointer"
          src="/fn7_nav_logo_white.svg"
          alt="Logo"
          width={40}
          height={40}
          onClick={() => navigateWithQuery("/")}
        />
        <div className={`flex ${isTablet ? 'gap-3' : 'gap-[25px]'} items-center`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={getLinkWithQuery(href)}
              className={`${isTablet ? 'text-sm' : 'text-md'} text-white hover:font-bold cursor-pointer ${
                router.pathname === href ? 'font-bold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => {
            trackSignupClick('Navbar - Scrolled', getCurrentUTMParams());
            handleGetStarted();
          }}
          className={`bg-gradient-to-r from-[#ff482ccc] to-[#a245eecc] text-white ${isTablet ? 'w-[140px] h-[32px] text-base' : 'w-[180px] h-[35px] text-lg'} rounded-xl leading-6 whitespace-nowrap`}
        >
         Get Started
        </button>
      </div>
    );
  }

  return (
    <div
      className={`sticky top-0 z-50 ${isMobile ? "bg-white" : isTablet ? "px-6 bg-white" : "px-10 bg-white"}`}
    >
      <nav
        className={`flex items-center justify-between h-[75px] md:h-[80px] px-3 md:px-0 relative ${
          isMobile ? "bg-black" : "bg-[#ffffff20]"
        } transition-all duration-300`}
      >
        <Image
          className="hidden md:block md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 cursor-pointer"
          src="/fn7_nav_logo.svg"
          alt="Logo"
          width={isTablet ? 45 : 50}
          height={isTablet ? 45 : 50}
          onClick={() => navigateWithQuery("/")}
        />
        <Image
          className="md:hidden cursor-pointer"
          src="/fn7_nav_logo_white.svg"
          alt="Logo"
          width={40}
          height={40}
          onClick={() => navigateWithQuery("/")}
        />

        <div className="hidden md:block md:grow md:w-full">
          <div className="flex justify-center items-center">
            <div className={`hidden md:flex justify-center items-center ${isTablet ? 'gap-4' : 'gap-[30px]'}`}>
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={getLinkWithQuery(href)}
                  className={`${isTablet ? 'text-base' : 'text-lg'} text-black hover:font-bold cursor-pointer ${
                    router.pathname === href ? 'font-bold' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <button
            onClick={() => {
              trackSignupClick('Navbar - Main', getCurrentUTMParams());
              handleGetStarted();
            }}
            className={`bg-white md:bg-black text-black md:text-white text-sm md:text-base px-2 md:px-3 py-2 rounded-lg whitespace-nowrap static md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 cursor-pointer`}>
             Get Started
          </button>

          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-[85px] right-0 bg-black text-white rounded-2xl p-6 flex flex-wrap flex-col gap-4 z-50 md:hidden w-full transition-opacity duration-300">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={getLinkWithQuery(href)}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl cursor-pointer ${
                  router.pathname === href ? 'font-bold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => {
                trackSignupClick('Navbar - Mobile Menu', getCurrentUTMParams());
                handleGetStarted({ closeMenu: true });
              }}
              className="bg-white text-black text-lg rounded-lg py-3 px-6 cursor-pointer">
             Get Started
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
