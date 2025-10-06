"use client";
import React, { useEffect, useRef, useState } from 'react';

interface MobileSwipeWrapperProps {
  children: React.ReactNode;
  className?: string;
  enableVerticalSwipe?: boolean;
}

export const MobileSwipeWrapper: React.FC<MobileSwipeWrapperProps> = ({
  children,
  className = '',
  enableVerticalSwipe = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      isDragging = true;
      setIsSwiping(true);
      container.style.transition = 'none';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !enableVerticalSwipe) return;
      
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      
      // Add resistance at boundaries
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      
      if (scrollTop <= 0 && deltaY > 0) {
        // At top, pulling down - add resistance
        container.style.transform = `translateY(${deltaY * 0.3}px)`;
      } else if (scrollTop + clientHeight >= scrollHeight && deltaY < 0) {
        // At bottom, pulling up - add resistance
        container.style.transform = `translateY(${deltaY * 0.3}px)`;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsSwiping(false);
      container.style.transition = 'transform 0.3s ease-out';
      container.style.transform = 'translateY(0)';
    };

    // Add event listeners
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [enableVerticalSwipe]);

  return (
    <div
      ref={containerRef}
      className={`mobile-swipe-container ${className} ${isSwiping ? 'is-swiping' : ''}`}
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        height: '100%',
        position: 'relative',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};