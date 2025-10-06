import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 800
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return 'opacity-0';
        case 'slideUp':
          return 'opacity-0 translate-y-10';
        case 'slideLeft':
          return 'opacity-0 translate-x-10';
        case 'slideRight':
          return 'opacity-0 -translate-x-10';
        case 'scale':
          return 'opacity-0 scale-95';
        default:
          return 'opacity-0';
      }
    }
    
    return 'opacity-100 translate-x-0 translate-y-0 scale-100';
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all ease-out ${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};