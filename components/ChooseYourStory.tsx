"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { chooseYourStory } from "@/content/home";

export default function ChooseYourStory() {
  return (
    <section className="bg-warm-sand/20 px-6 py-20 border-y border-coffee/10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            Choose Your Kind of Story
          </h2>
          <p className="text-base md:text-lg text-espresso max-w-2xl mx-auto">
            Every celebration is different. Start with the type of day you're
            planning.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {chooseYourStory.map((collection, index) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={collection.href}
                className="group block h-full bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-ring"
              >
                <h3 className="font-serif text-lg font-bold text-ink mb-2 group-hover:text-rose-wax-red transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-espresso leading-relaxed">
                  {collection.teaser}
                </p>

                {/* Test: Add video to first offering card */}
                {index === 0 && (
                  <div className="mt-4 relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1057632056?title=0&byline=0&portrait=0&muted=1&loop=1&background=1"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
