"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/content/home";
import { trackCTAClick } from "@/lib/analytics";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Track scroll position for scroll marker fade-out effect
  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position from the main scroll container
      const mainContainer = document.querySelector('.overflow-y-auto');
      if (mainContainer) {
        setScrollY(mainContainer.scrollTop);
      }
    };

    const mainContainer = document.querySelector('.overflow-y-auto');
    if (mainContainer) {
      mainContainer.addEventListener('scroll', handleScroll);
      return () => mainContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Simulate video load - give it time to start playing
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1500); // 1.5s delay before fading in video
    return () => clearTimeout(timer);
  }, []);

  // Calculate opacity for scroll marker: fades out after 100px of scroll
  const scrollMarkerOpacity = Math.max(0, 1 - scrollY / 100);

  // Scroll to next section smoothly
  const scrollToNext = () => {
    const nextSection = document.querySelector('#choose-your-story');
    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Static Poster Image - shows immediately while video loads */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero.poster})`,
          opacity: videoLoaded ? 0 : 1,
          transition: "opacity 2000ms ease-out",
        }}
      />

      {/* Vimeo Video Background - fades in smoothly */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: videoLoaded ? 1 : 0,
          transition: "opacity 2000ms ease-out",
        }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${hero.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-full min-h-full object-cover"
          style={{
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.78vh", // 16:9 aspect ratio
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Hero Background Video"
        />
      </div>

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
      <div className="relative z-10 mx-auto flex h-full max-w-[1000px] items-center justify-center px-6 pt-[56px] md:pt-[72px]">
        <div className="w-full text-center max-w-4xl mx-auto">
          {/* SECOND BEAT: Tagline - appears in second beat with subheading and CTAs */}
          {/* Tagline above title */}
          <motion.p
            className="text-xs md:text-sm text-white/80 uppercase font-medium mb-6 md:mb-8"
            style={{
              letterSpacing: "0.25em",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.location}
          </motion.p>

          {/* FIRST BEAT: Main headline only - elegant solo entrance */}
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.title}
          </motion.h1>

          {/* SECOND BEAT: Subheading - appears with tagline and CTAs */}

          <motion.p
            className="mt-6 md:mt-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="mt-10 md:mt-14 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={hero.ctas.primary.href}
              onClick={() => trackCTAClick('hero', hero.ctas.primary.label, hero.ctas.primary.href)}
              className="group bg-white text-ink rounded-full px-8 py-4 font-medium hover:scale-105 hover:shadow-2xl focus-ring"
              style={{
                transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              onClick={() => trackCTAClick('hero', hero.ctas.secondary.label, hero.ctas.secondary.href)}
              className="rounded-full border-2 border-white/70 px-8 py-4 text-white font-medium hover:border-white hover:bg-white/10 backdrop-blur-sm focus-ring"
              style={{
                transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {hero.ctas.secondary.label}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll affordance with continuous bounce animation */}
      <motion.button
        onClick={scrollToNext}
        className="fixed bottom-8 left-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group focus-ring rounded-lg px-4 py-2"
        style={{
          opacity: scrollMarkerOpacity,
          transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`,
          pointerEvents: scrollMarkerOpacity < 0.1 ? 'none' : 'auto',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 4.2 },
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
