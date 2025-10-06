"use client";
import React, { useEffect, useState } from 'react';
import { MobileSwipeWrapper } from './MobileSwipeWrapper';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Add mobile-specific classes to body
    if (isMobile) {
      document.body.classList.add('mobile-device');
    } else {
      document.body.classList.remove('mobile-device');
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('mobile-device');
    };
  }, [isMobile]);

  // Only wrap in MobileSwipeWrapper for mobile devices
  if (isMobile) {
    return (
      <MobileSwipeWrapper className="min-h-screen">
        {children}
      </MobileSwipeWrapper>
    );
  }

  // For desktop, return children as-is
  return <>{children}</>;
};