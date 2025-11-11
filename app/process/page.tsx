"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
import FinaleBlock from "@/components/FinaleBlock";
import SectionDivider from "@/components/SectionDivider";

export default function ProcessPage() {
  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero */}
        <section className="relative px-6 pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
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

          {/* Organic wave divider */}
          <SectionDivider color="#FAF6F0" height="100px" />
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

        {/* Finale Block */}
        <FinaleBlock />
      </main>
      <Footer />
    </>
  );
}
