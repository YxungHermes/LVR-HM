"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { culturalWeddings, CulturalWeddingKey } from "@/content/cultural-weddings";

interface CulturalWeddingPageProps {
  weddingType: CulturalWeddingKey;
}

export default function CulturalWeddingPage({ weddingType }: CulturalWeddingPageProps) {
  const content = culturalWeddings[weddingType];

  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-warm-sand/30 to-cream">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 tracking-wide">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl text-rose-wax-red font-medium mb-8 italic">
                {content.introHeading}
              </p>
              <p className="text-lg text-espresso leading-relaxed max-w-3xl mx-auto">
                {content.introBody}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Facts Section */}
        {content.quickFacts && (
          <section className="px-6 py-16 bg-white">
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
                  At a Glance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-rose-wax-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="font-semibold text-ink">Duration</h3>
                    </div>
                    <p className="text-espresso text-sm">{content.quickFacts.duration}</p>
                  </div>
                  <div className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-rose-wax-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h3 className="font-semibold text-ink">Venue</h3>
                    </div>
                    <p className="text-espresso text-sm">{content.quickFacts.venue}</p>
                  </div>
                  <div className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-rose-wax-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <h3 className="font-semibold text-ink">Dress Code</h3>
                    </div>
                    <p className="text-espresso text-sm">{content.quickFacts.dressCode}</p>
                  </div>
                  <div className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-rose-wax-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h3 className="font-semibold text-ink">Typical Size</h3>
                    </div>
                    <p className="text-espresso text-sm">{content.quickFacts.guestCount}</p>
                  </div>
                  <div className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-rose-wax-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      <h3 className="font-semibold text-ink">Music</h3>
                    </div>
                    <p className="text-espresso text-sm">{content.quickFacts.musicStyle}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Key Moments Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                Ceremony Timeline & Key Moments
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                Understanding the flow and sacred moments of the ceremony.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.keyMoments.map((moment, index) => (
                  <motion.div
                    key={index}
                    className="border border-coffee/10 rounded-lg p-6 hover:border-rose-wax-red/30 hover:shadow-sm transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-serif text-xl font-semibold text-ink">
                        {moment.title}
                      </h3>
                      {moment.duration && (
                        <span className="text-xs font-medium text-rose-wax-red bg-rose-wax-red/10 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                          {moment.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-base text-espresso leading-relaxed">
                      {moment.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Glossary Section */}
        {content.glossary && (
          <section className="px-6 py-20 bg-cream">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                  Key Terms & Pronunciation
                </h2>
                <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                  Helpful vocabulary to know before attending the ceremony.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.glossary.map((term, index) => (
                    <motion.div
                      key={index}
                      className="bg-white border border-coffee/10 rounded-lg p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="mb-2">
                        <h3 className="font-serif text-xl font-bold text-ink inline">
                          {term.term}
                        </h3>
                        {term.pronunciation && (
                          <span className="text-sm text-rose-wax-red ml-3 italic">
                            ({term.pronunciation})
                          </span>
                        )}
                      </div>
                      <p className="text-base text-espresso leading-relaxed">
                        {term.definition}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Guest Etiquette Section */}
        {content.guestEtiquette && (
          <section className="px-6 py-20 bg-white">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6 text-center">
                  {content.guestEtiquette.heading}
                </h2>

                <div className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8 md:p-10">
                  <ul className="space-y-5">
                    {content.guestEtiquette.points.map((point, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                      >
                        <svg
                          className="w-6 h-6 text-rose-wax-red flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-base text-espresso leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Full Day Timeline Section - Vendor Perspective */}
        {content.fullDayTimeline && (
          <section className="px-6 py-20 bg-white">
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                  Complete Wedding Day Timeline
                </h2>
                <p className="text-base text-espresso/70 text-center mb-6 max-w-3xl mx-auto">
                  From getting ready to the last dance. Here's how I approach filming your day and what you can expect from me as your videographer.
                </p>
                <p className="text-sm text-espresso/60 text-center mb-12 max-w-2xl mx-auto italic">
                  Note: This timeline is flexible and can be adjusted based on your preferences and coordination with your planner. Every wedding is unique, and we'll work together to create the flow that works best for your day.
                </p>

                <div className="space-y-6">
                  {content.fullDayTimeline.map((segment, index) => (
                    <motion.div
                      key={index}
                      className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6 md:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                        {/* Time Badge */}
                        <div className="flex-shrink-0 mb-3 md:mb-0">
                          <span className="inline-flex items-center gap-2 bg-rose-wax-red/10 text-rose-wax-red px-4 py-2 rounded-full text-sm font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {segment.time}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                            {segment.title}
                          </h3>
                          <p className="text-base text-espresso leading-relaxed mb-3">
                            {segment.description}
                          </p>
                          {segment.whatIllBeDoing && (
                            <div className="bg-cream/50 border-l-4 border-rose-wax-red pl-4 py-2">
                              <p className="text-sm text-espresso/80">
                                <strong className="text-rose-wax-red">What I'll be doing:</strong> {segment.whatIllBeDoing}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Cultural Considerations Section */}
        <section className="px-6 py-20 bg-warm-sand/20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6 text-center">
                {content.culturalConsiderations.heading}
              </h2>

              <div className="bg-white border border-coffee/10 rounded-lg p-8 md:p-10">
                <ul className="space-y-4">
                  {content.culturalConsiderations.points.map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <svg
                        className="w-6 h-6 text-rose-wax-red flex-shrink-0 mt-0.5"
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
                      <span className="text-base text-espresso leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                Common questions about {content.title.toLowerCase()} traditions and customs.
              </p>

              <div className="space-y-8">
                {content.commonQuestions.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-coffee/10 pb-6 last:border-b-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-base text-espresso leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learn More Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-warm-sand/30 to-cream">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                Learn More
              </h2>
              <p className="text-lg text-espresso mb-8 leading-relaxed">
                Interested in learning about other wedding traditions? Explore our educational guides.
              </p>
              <Link
                href="/weddings"
                className="inline-flex items-center bg-rose-wax-red text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring"
              >
                Explore More Traditions
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
