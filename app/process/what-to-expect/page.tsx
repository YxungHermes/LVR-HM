"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinaleBlock from "@/components/FinaleBlock";

export default function WhatToExpectPage() {
  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 tracking-wide">
                What to Expect
              </h1>
              <p className="text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto">
                Here's exactly how we show up on your wedding day, where we'll be, and what we bring so you know what to expect before we even arrive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What to Expect on Your Wedding Day */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">Arrival & Setup</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>We arrive 30 minutes early</strong> to scout locations, test lighting, and coordinate with your photographer and planner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>All-black professional attire.</strong> We blend into the background, never stand out</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Introduce ourselves to key vendors</strong> early: photographer, DJ, planner, venue coordinator</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">Equipment & Approach</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Professional cinema cameras</strong> with multiple lenses for every moment and lighting condition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Stabilization equipment</strong> for smooth, cinematic movement without distraction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Professional wireless audio.</strong> Discreet microphones capture vows, toasts, and reactions crystal clear</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Full redundancy.</strong> Backup cameras, batteries, cards, and recorders so nothing is left to chance</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">During the Ceremony</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Positioned strategically.</strong> One at the altar, one in the aisle for processional and reactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Silent operation.</strong> No talking, no direction, no interruptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Capture audio cleanly.</strong> Vows, readings, officiant, and reactions from guests</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">Reception & Timeline</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Flexible with timeline changes.</strong> We adapt to delays, surprises, and spontaneous moments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Meal during cocktail hour.</strong> We eat quickly and discreetly (vendor meal appreciated but not required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Stay until the end.</strong> Your coverage hours are guaranteed, even if the day runs long</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-warm-sand/30">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
                Questions About Pricing?
              </h2>
              <p className="text-base text-espresso mb-8">
                Learn about our investment structure, payment plans, and what's included in every collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/process/investment"
                  className="inline-flex items-center justify-center bg-rose-wax-red text-white px-8 py-3 rounded-full font-medium text-base transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg"
                >
                  Investment Details
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center border-2 border-rose-wax-red text-rose-wax-red px-8 py-3 rounded-full font-medium text-base transition-all hover:bg-rose-wax-red hover:text-white hover:scale-105"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Finale Block */}
        <FinaleBlock />
      </main>
      <Footer />
    </>
  );
}
