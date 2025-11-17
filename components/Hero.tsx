"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/content/home";
import { trackCTAClick } from "@/lib/analytics";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device - videos often don't autoplay on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position for scroll marker fade-out effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate video load - give it time to start playing (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 3000); // Wait 3 seconds for video to fully buffer and start playing
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Calculate opacity for scroll marker: fades out after 100px of scroll
  const scrollMarkerOpacity = Math.max(0, 1 - scrollY / 100);

  // Scroll to next section smoothly
  const scrollToNext = () => {
    const nextSection = document.querySelector('#choose-your-story');
    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[100dvh] md:h-screen bg-black overflow-hidden">
      {/* Static Poster Image - shows on mobile, or while video loads on desktop */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero.poster})`,
          opacity: (isMobile || !videoLoaded) ? 1 : 0,
          transition: "opacity 3000ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Vimeo Video Background - desktop only, fades in smoothly */}
      {!isMobile && (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 3000ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${hero.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] min-w-full min-h-full"
            style={{
              width: "100vw",
              height: "56.25vw", // 16:9 aspect ratio
              minHeight: "100dvh",
              minWidth: "177.78vh", // 16:9 aspect ratio
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Hero Background Video"
          />
        </div>
      )}

      {/* Vignette effect on corners */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Localized gradient overlay - only behind text area */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 120% 60% at 50% 50%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.1) 70%, transparent 100%)',
        }}
      />

      {/* Content - Full viewport height accounting for fixed header */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1000px] items-end md:items-center justify-center px-6 pb-20 md:pb-0 pt-[56px] md:pt-[72px]">
        <div className="w-full text-center max-w-4xl mx-auto">
          {/* Tagline above title */}
          <motion.p
            className="text-xs md:text-sm text-white/80 uppercase font-medium mb-6 md:mb-8"
            style={{
              letterSpacing: "0.25em",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.location}
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.title}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.sub}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={hero.ctas.primary.href}
              onClick={() => trackCTAClick('hero', hero.ctas.primary.label, hero.ctas.primary.href)}
              className="group inline-flex items-center justify-center gap-3 bg-white text-ink rounded-full px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:shadow-[0_4px_16px_rgba(255,255,255,0.4)] focus-ring w-full sm:w-auto min-w-[200px]"
              style={{
                transition: "box-shadow 400ms cubic-bezier(0.22, 1, 0.36, 1)"
              }}
            >
              <span>{hero.ctas.primary.label}</span>
            </a>
            <a
              href={hero.ctas.secondary.href}
              onClick={() => trackCTAClick('hero', hero.ctas.secondary.label, hero.ctas.secondary.href)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white rounded-full text-white font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-ink hover:shadow-[0_4px_16px_rgba(255,255,255,0.4)] focus-ring w-full sm:w-auto min-w-[200px]"
              style={{
                transition: "background-color 400ms cubic-bezier(0.22, 1, 0.36, 1), color 400ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 400ms cubic-bezier(0.22, 1, 0.36, 1)"
              }}
            >
              <span>{hero.ctas.secondary.label}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll affordance with continuous bounce animation */}
      <motion.button
        onClick={scrollToNext}
        className="fixed bottom-8 left-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group focus-ring rounded-lg px-4 py-2"
        style={{
          x: "-50%",
          opacity: scrollMarkerOpacity,
          pointerEvents: scrollMarkerOpacity < 0.1 ? 'none' : 'auto',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 3.0 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        aria-label="Scroll to next section"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        {/* Animated chevron */}
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
    </section>
  );
}
