"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { whatIOffer, pricingOverview } from "@/content/pricing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";


export default function PricingPage() {
  return (
    <>
      <Header settled logoAbove />
      <main className="bg-cream">
        {/* Compact Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-ink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Collections & Pricing
            </motion.h1>
            <motion.p
              className="mt-5 text-base md:text-lg text-espresso max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Clear starting points for each collection. Every celebration is
              unique, and your final quote reflects your timeline, locations,
              and coverage needs.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/consultation"
                className="inline-block bg-rose-wax-red text-white px-8 py-3 rounded-md font-medium transition-all hover:bg-rose-wax-red/90 hover:scale-105 focus-ring"
              >
                Book Your Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Pricing Overview - FIRST (with anchor IDs) */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {pricingOverview.map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  id={collection.slug}
                  className="group bg-white border-2 border-coffee/10 rounded-lg overflow-hidden scroll-mt-24 transition-all duration-500 hover:border-rose-wax-red/30 hover:shadow-2xl"
                  style={{
                    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.05)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Collection Image/Video - Fixed aspect ratio */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                    {collection.vimeoId ? (
                      <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <iframe
                          src={`https://player.vimeo.com/video/${collection.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                          className="absolute pointer-events-none"
                          style={{
                            position: "absolute",
                            top: collection.slug === "couples-films" ? "40%" : "50%",
                            left: "50%",
                            width: "100%",
                            height: "100%",
                            transform: `translate(-50%, -50%) scale(${
                              collection.slug === "destination-weddings" ? "2.2" :
                              collection.slug === "elopements" ? "1.65" :
                              collection.slug === "couples-films" ? "1.4" :
                              collection.slug === "wedding-day-films" ? "1.32" :
                              "1.2"
                            })`,
                          }}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title={collection.name}
                        />

                        {/* Elegant Number Badge - Top Left */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm border border-coffee/20 flex items-center justify-center shadow-lg">
                            <span className="font-serif text-lg font-bold text-rose-wax-red">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* Price Badge - Top Right */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-coffee/20 shadow-lg">
                            <div className="flex flex-col items-end">
                              <span className="text-[10px] uppercase tracking-wider text-espresso/70 font-medium leading-none">Starting from</span>
                              <span className="font-serif text-base font-bold text-rose-wax-red leading-none mt-1">
                                {collection.startingFrom}
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>
                    ) : (
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>

                  <div className="p-8 md:p-10">
                    {/* "For Who" Label */}
                    <p className="font-serif text-sm md:text-base italic text-espresso/80 mb-3">
                      {collection.forWho}
                    </p>

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-3">
                      {collection.name}
                    </h3>

                    {/* Tagline */}
                    <p className="font-serif text-base md:text-lg italic text-rose-wax-red/90 mb-6 leading-relaxed">
                      {collection.tagline}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 pb-6 border-b border-coffee/10">
                      <ul className="space-y-2.5">
                        {collection.highlights.map((highlight: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-espresso leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href={collection.href}
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-rose-wax-red hover:shadow-lg hover:scale-105"
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Which Collection Fits Us? - SECOND (Explainer) */}
        <section className="px-6 py-20 bg-warm-sand/30 border-y border-coffee/10">
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                Which collection fits us best?
              </h2>
              <p className="text-base md:text-lg text-espresso leading-relaxed max-w-3xl mx-auto">
                If you're unsure where to begin, start with the type of day
                you're planning. Each collection is shaped around how you
                celebrate, not just how many hours we're there.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {whatIOffer.map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={collection.href}
                    className="group block h-full bg-white rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-ring"
                  >
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-base text-espresso leading-relaxed mb-4">
                      {collection.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-rose-wax-red group-hover:translate-x-2 transition-transform">
                      <span>Explore</span>
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap - What Happens Next */}
        <Roadmap variant="mini" cta />

        {/* Final CTA */}
        <section className="px-6 py-24">
          <motion.div
            className="mx-auto max-w-3xl text-center bg-warm-sand border border-coffee/10 rounded-lg p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
              Not sure which path is right for you?
            </h3>
            <p className="text-base text-espresso mb-8 leading-relaxed">
              Share your date, locations, guest count, and what matters most.
              I'll recommend a collection that fits, with transparent pricing.
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-rose-wax-red text-white px-8 py-3 rounded-md font-medium transition-all hover:bg-rose-wax-red/90 hover:scale-105 focus-ring"
            >
              Book Your Consultation
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
