"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinaleBlock from "@/components/FinaleBlock";

export default function ProcessPage() {
  return (
    <>
      <Header settled logoAbove />
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
                How We Work Together
              </h1>
              <p className="text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto">
                Your film starts long before the wedding day. Here's what working together looks like, from the first call to the moment you watch your finished film.
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
                The Full Timeline
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                From your first message to the day your film arrives, here's exactly what happens and when.
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
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">You Reach Out</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Fill out the inquiry form or shoot me an email. I'll respond within 24 hours to set up a time to talk.
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
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">We Talk</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    30-45 minute video call to hear your story, understand what matters most to you, and make sure we're a good fit.
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
                    I send over pricing tailored to your day. Coverage hours, deliverables, travel costs if needed. Everything in one clear document.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">WHEN YOU'RE READY</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">You're Officially Booked</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Sign the contract, pay the 30% retainer, and your date is locked in. No one else can book it.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">6 WEEKS OUT</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Pre-Production Call</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    We connect with your photographer, planner, and DJ to sync timelines and make sure everyone's on the same page.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">THE BIG DAY</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">We Show Up Early</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Arrive 30 minutes before coverage starts, settle in quietly, and capture your day as it unfolds.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">2-3 WEEKS LATER</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Teaser Film</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    60-90 seconds of your day, ready to share while you're still buzzing from the celebration.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">6-12 WEEKS LATER</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Your Full Film</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Highlight film arrives in 6-8 weeks. Feature film (if booked) takes 10-12 weeks.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="px-6 py-20 bg-warm-sand/30">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                Why Process Matters
              </h2>
              <p className="text-base md:text-lg text-espresso leading-relaxed max-w-3xl mx-auto mb-10">
                Great films don't just happen. They come from preparation, trust, and understanding what really matters to you. When I know your story before the wedding day, I can anticipate the moments that will mean something ten years from now. The ones you'll want to relive.
              </p>

              {/* Two-button CTA */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/offerings"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-rose-wax-red rounded-full text-rose-wax-red font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red hover:text-white hover:shadow-lg transition-all duration-300"
                >
                  <span>View Pricing</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/consultation"
                  className="group inline-flex items-center gap-3 bg-rose-wax-red text-white rounded-full px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Let's Talk</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Questions? */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4 text-center">
                Still Have Questions?
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                These might help. Or just book a call and we'll talk through everything.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Link href="/faq" className="block group">
                    <div className="bg-cream border border-coffee/10 rounded-lg p-8 h-full transition-all hover:shadow-lg hover:border-rose-wax-red/30">
                      <div className="text-rose-wax-red mb-4">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                        Common Questions
                      </h3>
                      <p className="text-sm text-espresso leading-relaxed mb-4">
                        Everything from deliverables and timelines to equipment and filming style. If you're wondering about something, it's probably answered here.
                      </p>
                      <span className="text-rose-wax-red text-sm font-medium flex items-center group-hover:underline">
                        Read the FAQ
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
                  <Link href="/films" className="block group">
                    <div className="bg-cream border border-coffee/10 rounded-lg p-8 h-full transition-all hover:shadow-lg hover:border-rose-wax-red/30">
                      <div className="text-rose-wax-red mb-4">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                        See Past Work
                      </h3>
                      <p className="text-sm text-espresso leading-relaxed mb-4">
                        Watch full films from real weddings. See the style, pacing, and storytelling approach before you book.
                      </p>
                      <span className="text-rose-wax-red text-sm font-medium flex items-center group-hover:underline">
                        Watch films
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
