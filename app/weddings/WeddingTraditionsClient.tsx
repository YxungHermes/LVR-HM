"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const traditions = [
  {
    slug: "catholic",
    title: "Catholic Wedding Traditions",
    description: "Sacred Mass, sacraments, and centuries of liturgical tradition",
    highlights: ["Nuptial Mass", "Seven Blessings", "Ring Exchange", "Communion"],
    color: "from-purple-50 to-blue-50"
  },
  {
    slug: "jewish",
    title: "Jewish Wedding Traditions",
    description: "From the ketubah to the glass—rich with meaning and joy",
    highlights: ["Chuppah Ceremony", "Ketubah Signing", "Breaking the Glass", "Hora Dance"],
    color: "from-blue-50 to-indigo-50"
  },
  {
    slug: "hindu",
    title: "Hindu & Indian Wedding Traditions",
    description: "Vibrant multi-day celebrations with color, ritual, and music",
    highlights: ["Mehendi Ceremony", "Sangeet Night", "Saat Phere", "Baraat Procession"],
    color: "from-orange-50 to-red-50"
  },
  {
    slug: "muslim",
    title: "Muslim & Islamic Wedding Traditions",
    description: "Sacred Nikah ceremony and cultural celebrations",
    highlights: ["Nikah Contract", "Mahr Gift", "Walima Reception", "Mehndi Night"],
    color: "from-emerald-50 to-teal-50"
  },
  {
    slug: "greek-orthodox",
    title: "Greek Orthodox Wedding Traditions",
    description: "Ancient Byzantine traditions with symbolic rituals",
    highlights: ["Stefana Crowning", "Common Cup", "Isaiah Dance", "Koufeta"],
    color: "from-cyan-50 to-blue-50"
  },
  {
    slug: "chinese",
    title: "Chinese Wedding Traditions",
    description: "Ancient customs blended with modern celebrations",
    highlights: ["Tea Ceremony", "Door Games", "Red Envelopes", "Traditional Qipao"],
    color: "from-red-50 to-pink-50"
  },
  {
    slug: "nigerian",
    title: "Nigerian Wedding Traditions",
    description: "Spectacular celebrations across Yoruba, Igbo, and Hausa cultures",
    highlights: ["Traditional Engagement", "Aso Ebi", "Money Spraying", "Wine Carrying"],
    color: "from-green-50 to-emerald-50"
  },
  {
    slug: "korean",
    title: "Korean Wedding Traditions",
    description: "Honoring family through elegant Confucian ceremonies",
    highlights: ["Pyebaek Ceremony", "Hanbok Attire", "Wooden Ducks", "Formal Bows"],
    color: "from-pink-50 to-rose-50"
  }
];

export default function WeddingTraditionsClient() {
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
                Wedding Traditions Guide
              </h1>
              <p className="text-xl md:text-2xl text-rose-wax-red font-medium mb-8 italic">
                Educational resources for understanding wedding ceremonies around the world
              </p>
              <p className="text-lg text-espresso leading-relaxed max-w-3xl mx-auto">
                Explore comprehensive guides to Catholic, Jewish, Hindu, Muslim, Greek Orthodox, Chinese, Nigerian, and Korean wedding traditions. Learn about ceremony timelines, sacred rituals, cultural customs, and the meaning behind each tradition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Traditions Grid */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {traditions.map((tradition, index) => (
                <motion.div
                  key={tradition.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/weddings/${tradition.slug}`}
                    className="block h-full"
                  >
                    <div className={`h-full border border-coffee/10 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-br ${tradition.color}`}>
                      <div className="p-8">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-3">
                          {tradition.title}
                        </h2>
                        <p className="text-base text-espresso mb-6 leading-relaxed">
                          {tradition.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {tradition.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-rose-wax-red flex-shrink-0"
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
                              <span className="text-sm text-espresso/80">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-rose-wax-red font-medium group">
                          <span>Learn More</span>
                          <svg
                            className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Learn Section */}
        <section className="px-6 py-20 bg-warm-sand/20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6 text-center">
                Why Understanding Wedding Traditions Matters
              </h2>

              <div className="bg-white border border-coffee/10 rounded-lg p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                    For Couples Planning Their Wedding
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Understanding your cultural or religious traditions helps you plan a meaningful ceremony that honors your heritage, family values, and spiritual beliefs. Learn what each ritual symbolizes and how to incorporate traditions authentically.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                    For Wedding Guests
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Being invited to a wedding from a different culture is an honor. Learn about proper etiquette, dress codes, gift-giving customs, and what to expect during the ceremony so you can participate respectfully and confidently.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                    For Interfaith & Multicultural Couples
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Blending traditions from different cultures or religions requires understanding the significance behind each ritual. These guides help you identify which traditions are most meaningful to both families and how to honor multiple heritages.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                    For Cultural Education
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    Wedding ceremonies offer windows into different cultures, values, and spiritual practices. Learning about traditions from around the world broadens understanding and appreciation for the diverse ways people celebrate love and commitment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="px-6 py-20 bg-cream">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                What Each Guide Includes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white border border-coffee/10 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-rose-wax-red flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                        Ceremony Timeline
                      </h3>
                      <p className="text-sm text-espresso">
                        Step-by-step breakdown of key moments, rituals, and the flow of the ceremony from start to finish.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-coffee/10 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-rose-wax-red flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                        Cultural Meanings
                      </h3>
                      <p className="text-sm text-espresso">
                        The symbolism and spiritual significance behind each tradition, ritual, and custom.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-coffee/10 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-rose-wax-red flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                        Important Customs
                      </h3>
                      <p className="text-sm text-espresso">
                        Etiquette, dress codes, gift-giving traditions, and what guests should know.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-coffee/10 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-rose-wax-red flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                        FAQs Answered
                      </h3>
                      <p className="text-sm text-espresso">
                        Common questions about the traditions, their origins, and modern variations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
