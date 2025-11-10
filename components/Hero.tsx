"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] bg-gradient-to-br from-cream via-rose-1/20 to-cream overflow-hidden">
      {/* Elegant background pattern - can add image here later */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(181,139,131,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,88,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-3xl">
          <motion.h1
            className="heading-xl font-serif tracking-wider text-ink [font-variant-ligatures:common-ligatures]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {hero.title.split(" ").slice(0, 3).join(" ")}
            <br />
            {hero.title.split(" ").slice(3).join(" ")}
          </motion.h1>

          <motion.p
            className="subhead mt-4 text-espresso"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#packages"
              className="group bg-rose-grad rounded-full px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus-ring"
            >
              View Our Collections
            </a>
            <a
              href="#signature-work"
              className="rounded-full border border-rose-2 px-6 py-3 text-rose-2 transition-all duration-300 hover:scale-105 hover:bg-rose-2 hover:text-white focus-ring"
            >
              Explore Our Stories
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-8 flex gap-8 text-sm text-espresso"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div>
              <span className="font-serif text-2xl font-bold text-ink">
                {hero.stats.weddings}
              </span>
              <span className="ml-2">Weddings</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-ink">
                {hero.stats.rating}
              </span>
              <span className="ml-2">Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
