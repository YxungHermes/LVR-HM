"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { chooseYourStory } from "@/content/home";

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

// Typography sizes based on card prominence
const typographySizes = [
  "text-4xl md:text-5xl lg:text-6xl", // Large card - HUGE
  "text-3xl md:text-4xl lg:text-5xl", // Medium wide - Large
  "text-3xl md:text-4xl lg:text-5xl", // Medium wide - Large
  "text-2xl md:text-3xl lg:text-4xl", // Small - Medium
];

export default function ChooseYourStory() {
  return (
    <section
      id="choose-your-story"
      className="relative min-h-screen flex flex-col pt-20 md:pt-24"
    >
      {/* Header - centered above grid, with padding to avoid nav cutoff */}
      <motion.div
        className="w-full text-center py-8 md:py-12 px-6 bg-gradient-to-b from-warm-sand/20 to-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-3">
          Choose Your Kind of Story
        </h2>
        <p className="text-base md:text-lg text-espresso max-w-2xl mx-auto">
          Every celebration is different. Start with the type of day you're planning.
        </p>
      </motion.div>

      {/* Bento Box Grid - Asymmetric, dynamic layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-0 pb-0">
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
              className={`group relative block h-full min-h-[40vh] md:min-h-0 ${cardGradients[index]}
                border border-coffee/10 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:shadow-2xl`}
            >
              {/* Hover overlay - darkens on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />

              {/* Content - centered in card */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 text-center">
                {/* Collection number - subtle */}
                <span className="text-espresso/30 text-xs md:text-sm font-medium uppercase tracking-widest mb-3 md:mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Collection name - scales by card size */}
                <h3 className={`font-serif ${typographySizes[index]} font-bold text-ink mb-4 md:mb-6
                  leading-tight max-w-md transition-all duration-500 group-hover:scale-105`}>
                  {collection.name}
                </h3>

                {/* Teaser - responsive sizing */}
                <p className={`text-sm md:text-base ${index === 0 ? 'lg:text-lg' : ''} text-espresso/80 max-w-sm leading-relaxed`}>
                  {collection.teaser}
                </p>

                {/* Explore arrow - appears on hover */}
                <div className="mt-6 md:mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-wider text-ink">
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
