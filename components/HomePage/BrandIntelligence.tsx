"use client";

import { useEffect, useState, useRef, createContext, useContext, ReactNode } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  angle: number;
  spin: number;
}

// Context to share state between canvas and card components
interface BrandIntelligenceContextType {
  isIdle: boolean;
  iqScore: number;
  particlesRef: React.MutableRefObject<Particle[]>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
}

const BrandIntelligenceContext = createContext<BrandIntelligenceContextType | null>(null);

// Hook to use the Brand Intelligence context
const useBrandIntelligence = () => {
  const context = useContext(BrandIntelligenceContext);
  if (!context) {
    throw new Error("useBrandIntelligence must be used within a BrandIntelligenceProvider");
  }
  return context;
};

// Provider component that handles all the mouse tracking logic
export const BrandIntelligenceProvider = ({ children }: { children: ReactNode }) => {
  const [isIdle, setIsIdle] = useState(true);
  const [iqScore, setIqScore] = useState(0);
  const peakSpeedRef = useRef(0);
  const accumulatedDistanceRef = useRef(0);
  const lastMoveTimeRef = useRef(Date.now());
  const mousePrevRef = useRef({ x: 0, y: 0 });

  // Canvas ref for fluid smoke effect
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  // Brand Intelligence mouse tracking
  useEffect(() => {
    const CRAZY_SPEED_THRESHOLD = 2000;
    const IMPOSSIBLE_SPEED_THRESHOLD = 3500;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mousePrevRef.current.x;
      const dy = e.clientY - mousePrevRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      accumulatedDistanceRef.current += dist;
      lastMoveTimeRef.current = Date.now();
      mousePrevRef.current = { x: e.clientX, y: e.clientY };

      // Add smoke particles
      if (dist > 3 && canvasRef.current) {
        const colors = ["rgba(147, 197, 253, 0.15)", "rgba(196, 181, 253, 0.15)", "rgba(103, 232, 249, 0.15)"];
        for (let i = 0; i < 4; i++) {
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 80,
            y: e.clientY + (Math.random() - 0.5) * 80,
            size: 50 + Math.random() * 50,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 60 + Math.random() * 30,
            maxLife: 60 + Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)],
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.1,
          });
        }
      }
    };

    const interval = setInterval(() => {
      const currentSpeed = accumulatedDistanceRef.current;
      accumulatedDistanceRef.current = 0;

      const now = Date.now();
      const timeSinceMove = now - lastMoveTimeRef.current;

      if (timeSinceMove > 200) {
        if (!isIdle) {
          peakSpeedRef.current = 0;
          setIqScore(0);
          setIsIdle(true);
        }
      } else {
        if (isIdle) {
          setIsIdle(false);
        }
        if (currentSpeed > peakSpeedRef.current) {
          peakSpeedRef.current = currentSpeed;
        }
        let score = 0;
        if (peakSpeedRef.current < CRAZY_SPEED_THRESHOLD) {
          score = (peakSpeedRef.current / CRAZY_SPEED_THRESHOLD) * 97;
        } else {
          const extra = peakSpeedRef.current - CRAZY_SPEED_THRESHOLD;
          const range = IMPOSSIBLE_SPEED_THRESHOLD - CRAZY_SPEED_THRESHOLD;
          score = 97 + (extra / range) * 3;
        }
        if (score > 100) score = 100;
        setIqScore(score);
      }
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [isIdle]);

  return (
    <BrandIntelligenceContext.Provider value={{ isIdle, iqScore, particlesRef, canvasRef }}>
      {children}
    </BrandIntelligenceContext.Provider>
  );
};

// Fluid Smoke Canvas component
export const FluidSmokeCanvas = () => {
  const { particlesRef, canvasRef } = useBrandIntelligence();

  // Canvas animation for smoke effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life--;
        p.size += 0.5;
        p.angle += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        const lifeRatio = p.life / p.maxLife;
        ctx.globalAlpha = lifeRatio * 0.6;
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          i--;
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [particlesRef, canvasRef]);

  return <canvas ref={canvasRef} id="fluid-canvas" />;
};

// Brand Intelligence Card component
interface BrandIntelligenceCardProps {
  className?: string;
}

export const BrandIntelligenceCard = ({ className = "" }: BrandIntelligenceCardProps) => {
  const { isIdle, iqScore } = useBrandIntelligence();

  return (
    <div
      className={`mb-12 relative w-72 s7-card-base overflow-hidden transform hover:-translate-y-1 transition-transform ${className}`}
    >
      <div className="px-6 py-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <span className="material-symbols-outlined">psychology</span>
          </div>
          <span className="font-bold text-lg text-slate-800">Brand Intelligence</span>
        </div>
        {/* IQ Game Display Area */}
        <div className="h-12 w-full relative">
          {/* Idle State */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
              isIdle ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Grows with Usage</span>
          </div>
          {/* Active State (Progress Bar) */}
          <div
            className={`absolute inset-0 flex items-center transition-all duration-300 transform ${
              isIdle ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                style={{
                  width: `${Math.min(iqScore, 99.9)}%`,
                  background:
                    iqScore > 80
                      ? "linear-gradient(to right, #3b82f6, #ec4899)"
                      : "linear-gradient(to right, #3b82f6, #06b6d4)",
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-end px-3">
              <span className="text-xs font-black text-slate-600 z-10 tabular-nums">
                {Math.floor(Math.min(iqScore, 99.9))}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Legacy export for backwards compatibility - renders both canvas and card
interface BrandIntelligenceProps {
  className?: string;
  showCard?: boolean;
  showCanvas?: boolean;
}

export const BrandIntelligence = ({
  className = "",
  showCard = true,
  showCanvas = true,
}: BrandIntelligenceProps) => {
  const [isIdle, setIsIdle] = useState(true);
  const [iqScore, setIqScore] = useState(0);
  const peakSpeedRef = useRef(0);
  const accumulatedDistanceRef = useRef(0);
  const lastMoveTimeRef = useRef(Date.now());
  const mousePrevRef = useRef({ x: 0, y: 0 });

  // Canvas ref for fluid smoke effect
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  // Brand Intelligence mouse tracking
  useEffect(() => {
    const CRAZY_SPEED_THRESHOLD = 2000;
    const IMPOSSIBLE_SPEED_THRESHOLD = 3500;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mousePrevRef.current.x;
      const dy = e.clientY - mousePrevRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      accumulatedDistanceRef.current += dist;
      lastMoveTimeRef.current = Date.now();
      mousePrevRef.current = { x: e.clientX, y: e.clientY };

      // Add smoke particles
      if (dist > 3 && canvasRef.current) {
        const colors = ["rgba(147, 197, 253, 0.15)", "rgba(196, 181, 253, 0.15)", "rgba(103, 232, 249, 0.15)"];
        for (let i = 0; i < 4; i++) {
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 80,
            y: e.clientY + (Math.random() - 0.5) * 80,
            size: 50 + Math.random() * 50,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 60 + Math.random() * 30,
            maxLife: 60 + Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)],
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.1,
          });
        }
      }
    };

    const interval = setInterval(() => {
      const currentSpeed = accumulatedDistanceRef.current;
      accumulatedDistanceRef.current = 0;

      const now = Date.now();
      const timeSinceMove = now - lastMoveTimeRef.current;

      if (timeSinceMove > 200) {
        if (!isIdle) {
          peakSpeedRef.current = 0;
          setIqScore(0);
          setIsIdle(true);
        }
      } else {
        if (isIdle) {
          setIsIdle(false);
        }
        if (currentSpeed > peakSpeedRef.current) {
          peakSpeedRef.current = currentSpeed;
        }
        let score = 0;
        if (peakSpeedRef.current < CRAZY_SPEED_THRESHOLD) {
          score = (peakSpeedRef.current / CRAZY_SPEED_THRESHOLD) * 97;
        } else {
          const extra = peakSpeedRef.current - CRAZY_SPEED_THRESHOLD;
          const range = IMPOSSIBLE_SPEED_THRESHOLD - CRAZY_SPEED_THRESHOLD;
          score = 97 + (extra / range) * 3;
        }
        if (score > 100) score = 100;
        setIqScore(score);
      }
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [isIdle]);

  // Canvas animation for smoke effect
  useEffect(() => {
    if (!showCanvas) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life--;
        p.size += 0.5;
        p.angle += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        const lifeRatio = p.life / p.maxLife;
        ctx.globalAlpha = lifeRatio * 0.6;
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          i--;
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [showCanvas]);

  return (
    <>
      {/* Fluid Smoke Canvas */}
      {showCanvas && <canvas ref={canvasRef} id="fluid-canvas" />}

      {/* Brand Intelligence Card */}
      {showCard && (
        <div
          className={`mb-12 relative w-72 s7-card-base overflow-hidden transform hover:-translate-y-1 transition-transform ${className}`}
        >
          <div className="px-6 py-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <span className="font-bold text-lg text-slate-800">Brand Intelligence</span>
            </div>
            {/* IQ Game Display Area */}
            <div className="h-12 w-full relative">
              {/* Idle State */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                  isIdle ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Grows with Usage</span>
              </div>
              {/* Active State (Progress Bar) */}
              <div
                className={`absolute inset-0 flex items-center transition-all duration-300 transform ${
                  isIdle ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200">
                  <div
                    className="h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    style={{
                      width: `${Math.min(iqScore, 99.9)}%`,
                      background:
                        iqScore > 80
                          ? "linear-gradient(to right, #3b82f6, #ec4899)"
                          : "linear-gradient(to right, #3b82f6, #06b6d4)",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-end px-3">
                  <span className="text-xs font-black text-slate-600 z-10 tabular-nums">
                    {Math.floor(Math.min(iqScore, 99.9))}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
