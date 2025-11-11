"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";

export default function ProcessPage() {
  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6 tracking-wide">
                The Process
              </h1>
              <p className="text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto">
                Your film starts long before the cameras roll. Here's how we keep everything calm, clear, and beautifully told.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Roadmap Component */}
        <Roadmap variant="full" cta />

        {/* FAQ Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
                Common Questions
              </h2>

              <div className="space-y-8">
                {/* FAQ Item 1 */}
                <motion.div
                  className="border-b border-coffee/10 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                    When should I book?
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Most couples book 8–12 months in advance, though we occasionally have availability for shorter timelines. Reach out as soon as you have your date confirmed.
                  </p>
                </motion.div>

                {/* FAQ Item 2 */}
                <motion.div
                  className="border-b border-coffee/10 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                    What if I'm not sure which collection fits?
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    That's exactly what the consultation is for. We'll talk through your day, your vision, and what matters most, then tailor a proposal that feels right.
                  </p>
                </motion.div>

                {/* FAQ Item 3 */}
                <motion.div
                  className="border-b border-coffee/10 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                    Do you travel for destination weddings?
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Yes. Travel fees are included transparently in the proposal. We've filmed in Italy, Mexico, California, and beyond. If it's meaningful to you, we'll be there.
                  </p>
                </motion.div>

                {/* FAQ Item 4 */}
                <motion.div
                  className="border-b border-coffee/10 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                    How long does editing take?
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Teasers arrive in 2–3 weeks, highlights in 6–8 weeks, and full feature films in 10–12 weeks. Rush delivery is available for an additional fee.
                  </p>
                </motion.div>

                {/* FAQ Item 5 */}
                <motion.div
                  className="pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                    Can we request specific shots or moments?
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Absolutely. During pre-production, we'll create a shot list together. We balance direction with documentary-style observation to keep the day authentic.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20 bg-warm-sand/30">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
              Ready to begin your story?
            </h3>
            <p className="text-base text-espresso mb-8 leading-relaxed">
              Share your vision, your date, and what matters most. We'll send a thoughtful proposal within 48 hours.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center bg-rose-wax-red text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring"
            >
              Book Your Consultation
              <svg
                className="ml-3 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
