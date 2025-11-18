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
                    <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                      {moment.title}
                    </h3>
                    <p className="text-base text-espresso leading-relaxed">
                      {moment.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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
