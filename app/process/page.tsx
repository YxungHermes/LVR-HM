"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinaleBlock from "@/components/FinaleBlock";

export default function ProcessPage() {
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
                The Process
              </h1>
              <p className="text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto">
                Your film starts long before the cameras roll. Here's how we keep everything calm, clear, and beautifully told, from first hello to final delivery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* At-a-Glance Timeline */}
        <section className="px-6 py-16 bg-white">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4 text-center">
                Your Complete Timeline
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                From the day you reach out to the day your final film arrives, here's exactly what happens and when.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">DAY 0-1</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">First Contact</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    You submit an inquiry. We respond within 24 hours to schedule a consultation.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">WITHIN A WEEK</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Consultation Call</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    30-45 min video call (scheduled around your availability) to understand your story, vision, and priorities.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">WITHIN 2-3 DAYS</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Custom Proposal</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Tailored pricing based on your specific needs: coverage hours, deliverables, add-ons. (Rough pricing is on our site if you just want a ballpark first.)
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">ONCE YOU'RE READY</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">You're Booked</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Sign agreement, submit 30% deposit, and your date is officially secured.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">6 WEEKS BEFORE</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Pre-Production</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Ideally, we sync up with you, your photographer, planner, and DJ together to finalize the timeline, shot list, and ensure everyone's coordinated.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">WEDDING DAY</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">We Film</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    We arrive 30 min early and capture your story as it unfolds naturally.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">+2-3 WEEKS</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Teaser Arrives</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Your 60-90 second teaser film, perfect for sharing while the excitement is fresh.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">+6-12 WEEKS</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Final Films</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Highlight film (6-8 weeks) and full feature film (10-12 weeks) delivered.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters - Brief */}
        <section className="px-6 py-20 bg-warm-sand/30">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                Why the Process Matters
              </h2>
              <p className="text-base md:text-lg text-espresso leading-relaxed max-w-3xl mx-auto mb-10">
                Great films don't happen by accident. They're the result of preparation, communication, and trust. When we take time upfront to understand your story, we can anticipate the shots that will make you feel something years from now.
              </p>

              {/* Two-button CTA pattern */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/process/approach"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-rose-wax-red rounded-full text-rose-wax-red font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red hover:text-white hover:shadow-lg transition-all duration-300"
                >
                  <span>Next: Our Approach</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/consultation"
                  className="group inline-flex items-center gap-3 bg-rose-wax-red text-white rounded-full px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Explore More - Navigation Cards */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4 text-center">
                Explore the Details
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                Dive deeper into how we work, what to expect, and how to plan your investment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Link href="/process/approach" className="block group">
                    <div className="bg-cream border border-coffee/10 rounded-lg p-8 h-full transition-all hover:shadow-lg hover:border-rose-wax-red/30">
                      <div className="text-rose-wax-red text-3xl mb-4">🎯</div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                        Our Approach
                      </h3>
                      <p className="text-sm text-espresso leading-relaxed mb-4">
                        Our philosophy, collaborative process, and what we need from you to create something extraordinary.
                      </p>
                      <span className="text-rose-wax-red text-sm font-medium flex items-center group-hover:underline">
                        Learn more
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Link href="/process/what-to-expect" className="block group">
                    <div className="bg-cream border border-coffee/10 rounded-lg p-8 h-full transition-all hover:shadow-lg hover:border-rose-wax-red/30">
                      <div className="text-rose-wax-red text-3xl mb-4">📹</div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                        What to Expect
                      </h3>
                      <p className="text-sm text-espresso leading-relaxed mb-4">
                        Exactly how we show up on your wedding day, where we'll be, and what equipment we bring.
                      </p>
                      <span className="text-rose-wax-red text-sm font-medium flex items-center group-hover:underline">
                        See the details
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Link href="/process/investment" className="block group">
                    <div className="bg-cream border border-coffee/10 rounded-lg p-8 h-full transition-all hover:shadow-lg hover:border-rose-wax-red/30">
                      <div className="text-rose-wax-red text-3xl mb-4">💳</div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                        Investment & Payment
                      </h3>
                      <p className="text-sm text-espresso leading-relaxed mb-4">
                        Transparent pricing, payment structure, what's included, and answers to common questions.
                      </p>
                      <span className="text-rose-wax-red text-sm font-medium flex items-center group-hover:underline">
                        View pricing details
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
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
