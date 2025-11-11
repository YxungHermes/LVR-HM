"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { whatIOffer, pricingOverview } from "@/content/pricing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="font-serif text-4xl md:text-6xl font-bold tracking-wide text-ink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Wedding Film Collections
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-espresso max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cinematic wedding films tailored to the way you celebrate — from
              intimate elopements to full destination weekends.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#what-i-offer"
                className="inline-block bg-rose-wax-red text-white px-8 py-3 rounded-md font-medium transition-all hover:bg-rose-wax-red/90 hover:scale-105 focus-ring"
              >
                View Collections
              </a>
              <Link
                href="/contact"
                className="inline-block border-2 border-rose-wax-red text-rose-wax-red px-8 py-3 rounded-md font-medium transition-all hover:bg-rose-wax-red hover:text-white focus-ring"
              >
                Book Your Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What I Offer Section */}
        <section
          id="what-i-offer"
          className="px-6 py-20 bg-warm-sand/30 border-y border-coffee/10"
        >
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                What I Offer
              </h2>
              <p className="text-base md:text-lg text-espresso leading-relaxed max-w-3xl mx-auto">
                Every couple and every celebration is different. Instead of
                overwhelming you with add-ons, I've shaped four clear
                collections that cover the most meaningful ways people choose to
                get married. Start by finding the kind of day that feels like
                yours.
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

        {/* Pricing Overview */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
                Pricing Overview
              </h2>
              <p className="text-base md:text-lg text-espresso leading-relaxed max-w-2xl mx-auto">
                Clear starting points for each collection. Every celebration is
                unique, and pricing reflects your coverage needs and timeline.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {pricingOverview.map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  className="bg-white border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
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
                    <span>More details</span>
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="px-6 pb-24">
          <motion.div
            className="mx-auto max-w-3xl text-center bg-warm-sand border border-coffee/10 rounded-lg p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
              Not sure which collection fits your day?
            </h3>
            <p className="text-base text-espresso mb-8 leading-relaxed">
              Share your date, location, guest count, and what matters most to
              you. I'll recommend the collection that fits — no pressure.
            </p>
            <Link
              href="/contact"
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
