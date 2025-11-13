"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/home";

export default function Hero() {
  // Scroll to next section smoothly
  const scrollToNext = () => {
    const nextSection = document.querySelector('#choose-your-story');
    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-rose-1/20 to-cream overflow-hidden">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 z-0">
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
        {/* Darker gradient overlay for better contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Content - Full viewport height accounting for fixed header */}
      <div className="relative z-10 mx-auto flex h-screen max-w-[1000px] items-center justify-center px-6 pt-[56px] md:pt-[72px]">
        <div className="w-full text-center max-w-4xl mx-auto">
          {/* Tagline above title */}
          <motion.p
            className="text-xs md:text-sm text-white/80 uppercase tracking-[0.2em] font-medium mb-6 md:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {hero.location}
          </motion.p>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="mt-6 md:mt-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="mt-10 md:mt-14 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href={hero.ctas.primary.href}
              className="group bg-white text-ink rounded-full px-8 py-4 font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-ring"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="rounded-full border-2 border-white/80 px-8 py-4 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-ink focus-ring"
            >
              {hero.ctas.secondary.label}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll affordance - appears at bottom of hero */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-all duration-300 group focus-ring rounded-lg px-4 py-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
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
