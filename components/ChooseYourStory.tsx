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

export default function ChooseYourStory() {
  return (
    <section
      id="choose-your-story"
      className="relative min-h-screen flex flex-col"
    >
      {/* Header - centered above grid */}
      <motion.div
        className="w-full text-center py-12 md:py-16 px-6 bg-gradient-to-b from-warm-sand/20 to-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-4">
          Choose Your Kind of Story
        </h2>
        <p className="text-base md:text-lg text-espresso max-w-2xl mx-auto">
          Every celebration is different. Start with the type of day you're planning.
        </p>
      </motion.div>

      {/* Full-bleed 2x2 grid - fills remaining viewport */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {chooseYourStory.map((collection, index) => (
          <motion.div
            key={collection.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative"
          >
            <Link
              href={collection.href}
              className={`group relative block h-full min-h-[50vh] ${cardGradients[index]}
                border border-coffee/10 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:z-10`}
            >
              {/* Hover overlay - darkens on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />

              {/* Content - centered in card */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12 text-center">
                {/* Collection number - subtle */}
                <span className="text-espresso/30 text-sm font-medium uppercase tracking-widest mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Collection name - LARGE */}
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6
                  leading-tight max-w-md transition-all duration-500 group-hover:scale-105">
                  {collection.name}
                </h3>

                {/* Teaser - medium size */}
                <p className="text-base md:text-lg text-espresso/80 max-w-sm leading-relaxed">
                  {collection.teaser}
                </p>

                {/* Explore arrow - appears on hover */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-ink">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-rose-1/10 via-transparent to-transparent" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
