import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  HeroSection,
  MeetScout7Section,
  FeaturesGridSection,
  HowItWorksSection,
  ComparisonTableSection,
  SegmentsSliderSection,
  OrganicEngagementSection,
  QualifiedLeadsSection,
  AudienceInsightsSection,
  AdCampaignsSection,
  VideoStudioSection,
  ImageStudioSection,
  WhoItsForSection,
  PricingSection,
  FAQSection,
} from "@/components/HomePage";

interface HomeProps {
  currentYear: number;
}

// Typing animation words
const TYPING_WORDS = [
  "Organic Engagement",
  "Qualified Leads",
  "Audience Insights",
  "Targeted Ad-Campaigns",
  "Creative Studio",
];

export default function Home({}: HomeProps) {
  // Typing animation state
  const [typingText, setTypingText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // FAQ state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Brand Intelligence game state
  const [isIdle, setIsIdle] = useState(true);
  const [iqScore, setIqScore] = useState(0);
  const peakSpeedRef = useRef(0);
  const accumulatedDistanceRef = useRef(0);
  const lastMoveTimeRef = useRef(Date.now());
  const mousePrevRef = useRef({ x: 0, y: 0 });

  // Canvas ref for fluid smoke effect
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<
    Array<{
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
    }>
  >([]);

  // Typing animation effect
  useEffect(() => {
    const typeSpeed = 20;
    const deleteSpeed = 10;
    const delayBetweenWords = 1000;

    const currentWord = TYPING_WORDS[wordIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setTypingText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setTypingText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }

        // Check if word is complete
        if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

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
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "fn7 Scout",
    url: "https://www.fn7.io",
    logo: "https://www.fn7.io/fn7_nav_logo.svg",
    description:
      "Scout AI finds real people asking for help with problems your product solves. Turn social conversations into traffic without paid ads.",
    sameAs: ["https://x.com/fn7_io", "https://linkedin.com/company/fn7io"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.fn7.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        <title>Scout AI - Turn Social Conversations Into Traffic | fn7</title>
        <meta
          name="description"
          content="Scout finds real people asking for help with problems your product solves on Reddit, LinkedIn & X. Turn conversations into traffic without paid ads."
        />
        <meta
          name="keywords"
          content="Scout AI, social media monitoring, conversation marketing, Reddit marketing, LinkedIn engagement, Twitter marketing, organic traffic"
        />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Scout AI - Turn Social Conversations Into Traffic" />
        <meta
          property="og:description"
          content="Find real people asking for help with problems your product solves. Generate organic traffic from social conversations."
        />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7 Scout" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scout AI - Turn Social Conversations Into Traffic" />
        <meta
          name="twitter:description"
          content="Find real demand on social media. Turn conversations into organic traffic."
        />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fn7.io" />

        {/* Favicon */}
        <link rel="icon" href="/fn7_nav_logo.svg" type="image/svg+xml" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="selection:bg-blue-100 selection:text-blue-900 font-sora">
        <HeroSection />
        <MeetScout7Section />
        <FeaturesGridSection />
        <HowItWorksSection />
        <ComparisonTableSection />
        <SegmentsSliderSection />
        <OrganicEngagementSection />
        <QualifiedLeadsSection />
        <AudienceInsightsSection />
        <AdCampaignsSection />
        <VideoStudioSection />
        <ImageStudioSection />
        <WhoItsForSection />
        <PricingSection />
        <FAQSection />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Get current year for footer
  const currentYear = new Date().getFullYear();

  return {
    props: {
      currentYear,
    },
  };
};
