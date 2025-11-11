"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
import FinaleBlock from "@/components/FinaleBlock";

export default function ConsultationSuccessPage() {
  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero / Thank You */}
        <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Success Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-rose-wax-red/10 border-2 border-rose-wax-red flex items-center justify-center">
                  <svg
                    className="h-10 w-10 text-rose-wax-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6 tracking-wide">
                Thank you for reaching out
              </h1>
              <p className="text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto mb-4">
                We're already envisioning your story.
              </p>
              <p className="text-base text-espresso/70 leading-relaxed max-w-xl mx-auto">
                Your inquiry has been received. We'll respond within 24 hours with next steps and a personalized proposal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-3xl">
            <motion.div
              className="bg-white border border-coffee/10 rounded-lg p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl font-bold text-ink mb-6 text-center">
                What to expect in the next 24 hours
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-wax-red/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-rose-wax-red font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Confirmation Email</h3>
                    <p className="text-sm text-espresso">
                      You'll receive an automated confirmation shortly with a copy of your inquiry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-wax-red/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-rose-wax-red font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Personal Response</h3>
                    <p className="text-sm text-espresso">
                      Violeta will review your details and send a thoughtful, personalized message.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-wax-red/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-rose-wax-red font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Consultation Scheduling</h3>
                    <p className="text-sm text-espresso">
                      We'll coordinate a phone or video call to learn more about your vision and answer questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-wax-red/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-rose-wax-red font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Custom Proposal</h3>
                    <p className="text-sm text-espresso">
                      Within 48 hours, you'll receive a tailored collection designed specifically for your day.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Roadmap Component */}
        <div className="pb-8">
          <Roadmap variant="full" cta />
        </div>

        {/* Quick Actions */}
        <section className="px-6 py-16 bg-white">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
                While you wait...
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div
                  className="bg-cream border border-coffee/10 rounded-lg p-6 text-center hover:border-rose-wax-red/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-wax-red/10 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-rose-wax-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                    Watch Our Films
                  </h3>
                  <p className="text-sm text-espresso mb-4">
                    Explore our signature work and get inspired by the stories we've told.
                  </p>
                  <Link
                    href="/#signature-work"
                    className="text-sm text-rose-wax-red hover:text-rose-wax-red/80 transition-colors underline underline-offset-4"
                  >
                    View Portfolio
                  </Link>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="bg-cream border border-coffee/10 rounded-lg p-6 text-center hover:border-rose-wax-red/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-wax-red/10 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-rose-wax-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                    Review Pricing
                  </h3>
                  <p className="text-sm text-espresso mb-4">
                    Explore all four collections and see which fits your celebration.
                  </p>
                  <Link
                    href="/pricing"
                    className="text-sm text-rose-wax-red hover:text-rose-wax-red/80 transition-colors underline underline-offset-4"
                  >
                    View Collections
                  </Link>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="bg-cream border border-coffee/10 rounded-lg p-6 text-center hover:border-rose-wax-red/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-wax-red/10 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-rose-wax-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                    Learn the Process
                  </h3>
                  <p className="text-sm text-espresso mb-4">
                    See exactly what happens from inquiry to final delivery.
                  </p>
                  <Link
                    href="/process"
                    className="text-sm text-rose-wax-red hover:text-rose-wax-red/80 transition-colors underline underline-offset-4"
                  >
                    View Timeline
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
