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
                  className="bg-white border border-coffee/10 rounded-lg overflow-hidden scroll-mt-24"
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

                  <div className="p-8">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-4">
                      {collection.name}
                    </h3>

                  <div className="mb-4 pb-4 border-b border-coffee/10">
                    <p className="text-xs font-medium text-coffee uppercase tracking-wider mb-2">
                      Starting from
                    </p>
                    <p className="font-serif text-3xl font-bold text-rose-wax-red">
                      {collection.startingFrom}
                    </p>
                    <p className="text-sm text-espresso/60 mt-1">
                      {collection.range}
                    </p>
                  </div>

                  <p className="text-sm text-espresso leading-relaxed mb-6">
                    {collection.description}
                  </p>

                    <Link
                      href={collection.href}
                      className="inline-flex items-center text-sm font-medium text-rose-wax-red hover:text-rose-wax-red/80 transition-colors focus-ring"
                    >
                      <span>View details</span>
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
