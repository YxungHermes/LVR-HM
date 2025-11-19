"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinaleBlock from "@/components/FinaleBlock";

export default function ApproachPage() {
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
                Our Approach
              </h1>
              <p className="text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto">
                How we work, why the process matters, and what we need from you to create something extraordinary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6 text-center">
                Why the Process Matters
              </h2>
              <div className="space-y-6 text-base md:text-lg text-espresso leading-relaxed text-left max-w-3xl mx-auto">
                <p>
                  Great films don't happen by accident. They're the result of preparation, communication, and trust. When we take time upfront to understand your story (how you met, what your day means, what moments matter most), we can anticipate the shots that will make you feel something years from now.
                </p>
                <p>
                  This process also means fewer surprises. You'll know exactly what to expect on your wedding day, what your deliverables include, and when your films will arrive. No guesswork, no confusion. Just clarity, intention, and beautiful work.
                </p>
                <p className="text-center italic text-espresso/80 pt-4">
                  "We felt like Michael knew us before he even showed up. The planning process made the whole day feel seamless."
                  <span className="block mt-2 text-sm not-italic">— Sarah & James, 2024</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Need from You */}
        <section className="px-6 py-20 bg-warm-sand/30">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                What We Need from You
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                To make your film incredible, we need a few things from you at key moments. Here's exactly what to prepare and when.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="bg-white border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-wax-red text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">Before Your Consultation Call</h3>
                      <ul className="space-y-2 text-sm text-espresso">
                        <li>• Your wedding date and venue location</li>
                        <li>• Rough budget range you're working with</li>
                        <li>• 2-3 films from our portfolio that you love</li>
                        <li>• Any specific must-capture moments or people</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-wax-red text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">6 Weeks Before Your Wedding (Pre-Production Meeting)</h3>
                      <p className="text-sm text-espresso mb-3">Ideally, we coordinate a meeting with you, your photographer, wedding planner, and DJ together to sync up the timeline and ensure everyone's on the same page. We'll need:</p>
                      <ul className="space-y-2 text-sm text-espresso">
                        <li>• Finalized wedding timeline (with buffer time for delays)</li>
                        <li>• Family dynamics & VIP list (grandparents, parents, anyone who needs special attention)</li>
                        <li>• List of must-capture moments (vows, first look, specific dances, family photos, etc.)</li>
                        <li>• Venue restrictions (drone rules, ceremony movement, quiet hours)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-wax-red text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">2 Weeks Before Your Wedding</h3>
                      <ul className="space-y-2 text-sm text-espresso">
                        <li>• Final payment (remaining 70% balance)</li>
                        <li>• Any last-minute timeline changes</li>
                        <li>• Confirmation that all vendors have our contact info</li>
                        <li>• Song preferences (if you have a meaningful song for your film)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-wax-red text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">The Day Before Your Wedding</h3>
                      <ul className="space-y-2 text-sm text-espresso">
                        <li>• Confirm our arrival time and location</li>
                        <li>• Share any last-minute changes to the timeline</li>
                        <li>• Let us know where we can park and load equipment</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-wax-red text-white flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">During the Editing Process</h3>
                      <ul className="space-y-2 text-sm text-espresso">
                        <li>• Review your teaser when it arrives (2-3 weeks)</li>
                        <li>• Provide one round of revision notes on your highlight film (if needed)</li>
                        <li>• Share your films once they're delivered. We love seeing your reactions!</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
                Ready to Learn More?
              </h2>
              <p className="text-base text-espresso mb-8">
                Explore what to expect on your wedding day, or dive into investment details and FAQs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/process/what-to-expect"
                  className="inline-flex items-center justify-center bg-rose-wax-red text-white px-8 py-3 rounded-full font-medium text-base transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg"
                >
                  What to Expect
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/process/investment"
                  className="inline-flex items-center justify-center border-2 border-rose-wax-red text-rose-wax-red px-8 py-3 rounded-full font-medium text-base transition-all hover:bg-rose-wax-red hover:text-white hover:scale-105"
                >
                  Investment Details
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
