"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { pricingOverview } from "@/content/pricing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="font-serif text-4xl md:text-6xl font-bold tracking-wide text-ink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Pricing & Collections
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-espresso max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Each collection is crafted to fit the rhythm of your celebration.
              From intimate elopements to destination weekends, every film is
              made with the same care.
            </motion.p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              {pricingOverview.map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={collection.href}
                    className="group block h-full bg-white border border-coffee/10 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-rose-wax-red/20 focus-ring"
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink group-hover:text-rose-wax-red transition-colors">
                        {collection.name}
                      </h2>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-coffee uppercase tracking-wider">
                        Starting from
                      </p>
                      <p className="font-serif text-3xl font-bold text-ink mt-1">
                        {collection.startingFrom}
                      </p>
                      <p className="text-sm text-espresso/60 mt-1">
                        {collection.range}
                      </p>
                    </div>

                    <p className="text-base text-espresso leading-relaxed mb-6">
                      {collection.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-rose-wax-red group-hover:translate-x-2 transition-transform">
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
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 pb-24">
          <motion.div
            className="mx-auto max-w-3xl text-center bg-warm-sand border border-coffee/10 rounded-lg p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
              Not sure which collection fits?
            </h3>
            <p className="text-base text-espresso mb-8 leading-relaxed">
              Every wedding is different. Share your plans, and we'll build a
              proposal that feels right for your day.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-rose-wax-red text-white px-8 py-3 rounded-md font-medium transition-all hover:bg-rose-wax-red/90 hover:scale-105 focus-ring"
            >
              Start your inquiry
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
