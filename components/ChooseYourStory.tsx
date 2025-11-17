"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { chooseYourStory } from "@/content/home";
import { useState } from "react";

// Subtle gradient backgrounds for each card - premium, muted tones
const cardGradients = [
  "bg-gradient-to-br from-rose-50 via-cream to-warm-sand/30", // Elopements - soft rose
  "bg-gradient-to-br from-warm-sand/40 via-cream to-rose-1/20", // Wedding Day - warm neutral
  "bg-gradient-to-br from-cream via-warm-sand/30 to-rose-2/30", // Destination - travel vibes
  "bg-gradient-to-br from-rose-1/10 via-cream to-warm-sand/20", // Adventure - soft adventure
];

// Card size variants for asymmetric Bento Box layout
const cardSizes = [
  "md:col-span-2 md:row-span-2", // Elopements - LARGE (featured)
  "md:col-span-3 md:row-span-2", // Wedding Day - Medium Wide
  "md:col-span-3 md:row-span-1", // Destination - Medium Wide Short
  "md:col-span-2 md:row-span-1", // Adventure - Small
];

// Typography sizes based on card prominence - smaller for better fit
const typographySizes = [
  "text-3xl md:text-4xl lg:text-5xl", // Large card - Large
  "text-2xl md:text-3xl lg:text-4xl", // Medium wide - Medium
  "text-2xl md:text-3xl lg:text-4xl", // Medium wide - Medium
  "text-xl md:text-2xl lg:text-3xl", // Small - Compact
];

export default function ChooseYourStory() {
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  return (
    <section
      id="choose-your-story"
      className="relative min-h-screen md:h-screen flex flex-col overflow-hidden"
    >
      {/* Header - centered above grid, with minimal padding */}
      <motion.div
        className="w-full text-center pt-20 md:pt-24 pb-6 md:pb-6 px-6 bg-gradient-to-b from-warm-sand/20 to-transparent flex-shrink-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-2">
          Choose Your Kind of Story
        </h2>
        <p className="text-xs md:text-sm text-espresso max-w-2xl mx-auto">
          Every celebration is different. Start with the type of day you're planning.
        </p>
      </motion.div>

      {/* MOBILE: Compact accordion-style list */}
      <div className="flex-1 md:hidden flex flex-col gap-3 px-6 pb-6 overflow-y-auto">
        {chooseYourStory.map((collection, index) => (
          <motion.div
            key={collection.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => setExpandedMobile(expandedMobile === index ? null : index)}
              className={`w-full text-left transition-all duration-300 rounded-lg overflow-hidden border border-coffee/10
                ${expandedMobile === index ? 'shadow-lg' : 'shadow-sm'}`}
            >
              {/* Collapsed State - Compact Row */}
              <div className={`flex items-center justify-between p-4 ${collection.vimeoId ? 'bg-black text-white' : cardGradients[index]}`}>
                <div className="flex items-center gap-3 flex-1">
                  <span className={`text-xs font-mono ${collection.vimeoId ? 'text-white/60' : 'text-espresso/40'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`font-serif text-lg font-bold ${collection.vimeoId ? 'text-white' : 'text-ink'}`}>
                    {collection.name}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${expandedMobile === index ? 'rotate-180' : ''} ${collection.vimeoId ? 'text-white/60' : 'text-espresso/40'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expanded State - Full Content */}
              <AnimatePresence>
                {expandedMobile === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`relative ${collection.vimeoId ? 'bg-black' : cardGradients[index]}`}>
                      {/* Video removed from mobile - videos don't autoplay reliably on mobile browsers */}
                      {/* Keep simple gradient background instead */}

                      <div className="p-4">
                        <p className={`text-sm ${collection.vimeoId ? 'text-white/80' : 'text-espresso/80'} mb-4 leading-relaxed`}>
                          {collection.teaser}
                        </p>
                        <Link
                          href={collection.href}
                          className={`inline-flex items-center gap-2 text-sm font-medium ${collection.vimeoId ? 'text-white' : 'text-ink'}`}
                        >
                          <span>Explore</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP: Bento Box Grid - Asymmetric, dynamic layout */}
      <div className="hidden md:grid flex-1 grid-cols-5 grid-rows-3 gap-0 overflow-hidden min-h-0">
        {chooseYourStory.map((collection, index) => (
          <motion.div
            key={collection.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`relative ${cardSizes[index]}`}
          >
            <Link
              href={collection.href}
              className={`group relative block h-full ${collection.vimeoId ? 'bg-black' : cardGradients[index]}
                border border-coffee/10 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:shadow-2xl`}
            >
              {/* Video background for destination weddings */}
              {collection.vimeoId && (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${collection.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                    className="absolute pointer-events-none"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "100vw",
                      height: "56.25vw",
                      minHeight: "100%",
                      minWidth: "177.78vh",
                      transform: "translate(-50%, -50%)",
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={collection.name}
                  />
                  {/* Darker overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

                  {/* Frosted glass overlay - luxury glass case effect */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backdropFilter: "blur(0.5px) saturate(1.2)",
                      WebkitBackdropFilter: "blur(0.5px) saturate(1.2)",
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%)",
                      boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                    }}
                  />
                </div>
              )}

              {/* Hover overlay - darkens on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

              {/* Content - centered in card */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 text-center">
                {/* Collection number - subtle */}
                <span className={`${collection.vimeoId ? 'text-white/60' : 'text-espresso/30'} text-xs font-medium uppercase tracking-widest mb-2`}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Collection name - scales by card size */}
                <h3 className={`font-serif ${typographySizes[index]} font-bold ${collection.vimeoId ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]' : 'text-ink'} mb-2 md:mb-4
                  leading-tight max-w-md transition-all duration-500 group-hover:scale-105`}>
                  {collection.name}
                </h3>

                {/* Teaser - responsive sizing */}
                <p className={`text-xs md:text-sm ${index === 0 ? 'lg:text-base' : ''} ${collection.vimeoId ? 'text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : 'text-espresso/80'} max-w-sm leading-relaxed`}>
                  {collection.teaser}
                </p>

                {/* Explore arrow - appears on hover */}
                <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${collection.vimeoId ? 'text-white' : 'text-ink'}`}>
                    Explore
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Subtle glow effect on hover - stronger on featured card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-t ${index === 0 ? 'from-rose-1/20' : 'from-rose-1/10'} via-transparent to-transparent`} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
