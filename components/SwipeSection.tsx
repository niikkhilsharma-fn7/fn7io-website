"use client";
import React, { ReactNode } from 'react';

interface SwipeSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SwipeSection: React.FC<SwipeSectionProps> = ({ 
  children, 
  className = '', 
  id 
}) => {
  return (
    <section
      id={id}
      className={`swipe-section page-transition ${className}`}
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      {children}
    </section>
  );
};