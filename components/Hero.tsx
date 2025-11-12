"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] bg-gradient-to-br from-cream via-rose-1/20 to-cream pt-[56px] md:pt-[72px] overflow-hidden">
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
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[880px] items-center justify-center px-6">
        <div className="w-full text-center md:text-left max-w-3xl mx-auto pt-12 md:pt-16">
          <motion.h1
            className="heading-xl font-serif tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] [font-variant-ligatures:common-ligatures]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {hero.title.split(" ").slice(0, 3).join(" ")}
            <br />
            {hero.title.split(" ").slice(3).join(" ")}
          </motion.h1>

          <motion.p
            className="subhead mt-6 md:mt-8 text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {hero.sub}
          </motion.p>

          {/* Location tagline - Luxury studio placement */}
          <motion.p
            className="mt-5 md:mt-6 text-sm md:text-base text-white/90 uppercase tracking-[0.15em] font-medium text-center md:text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {hero.location}
          </motion.p>

          <motion.div
            className="mt-10 md:mt-12 flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href={hero.ctas.primary.href}
              className="group bg-rose-grad rounded-full px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus-ring"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="rounded-full border border-rose-2 px-6 py-3 text-rose-2 transition-all duration-300 hover:scale-105 hover:bg-rose-2 hover:text-white focus-ring"
            >
              {hero.ctas.secondary.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
