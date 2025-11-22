"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "Pricing & Packages",
      faqs: [
        {
          question: "Can I add extra hours to my package?",
          answer: "Absolutely. Most packages include a set number of hours, but you can add additional coverage in hourly increments. During our consultation call, we'll build a custom proposal based on your timeline and needs."
        },
        {
          question: "What if my wedding day runs over the scheduled time?",
          answer: "No stress. If your day runs a bit long, we'll stay to capture the key moments. Significant overages (beyond 30 minutes) are billed at the hourly rate discussed in your contract, but we always prioritize capturing your full story."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes. A 30% retainer secures your date, and the remaining 70% balance is due 2 weeks before your wedding. For larger packages, we can arrange a custom payment schedule. Just ask during your consultation."
        },
        {
          question: "Are there any hidden fees?",
          answer: "Never. Your proposal will include everything: coverage hours, deliverables, travel costs (if applicable), and any add-ons. What you see is what you pay. No surprises."
        }
      ]
    },
    {
      category: "Travel & Destination Weddings",
      faqs: [
        {
          question: "Do you travel for weddings? Is travel included?",
          answer: "Yes, I travel anywhere for weddings! For local weddings within 50 miles of New York City, travel is included. For destination weddings or locations beyond 50 miles, travel costs (flights, accommodations, ground transport) are added to your package. I provide a detailed breakdown during your custom proposal."
        },
        {
          question: "How far in advance should I book for a destination wedding?",
          answer: "Ideally 10-12 months in advance, especially for international destinations. This gives us time to coordinate travel, scout locations (if needed), and ensure availability for your dates."
        },
        {
          question: "Do you offer multi-day coverage for destination weddings?",
          answer: "Absolutely. Many destination couples book 2-3 days of coverage to capture welcome events, rehearsal dinners, ceremony, reception, and day-after sessions. We can customize the schedule to fit your celebration."
        }
      ]
    },
    {
      category: "Deliverables & Timeline",
      faqs: [
        {
          question: "What films are included in my package?",
          answer: "All packages include a cinematic highlight film (5-8 minutes) and a teaser film (60-90 seconds). The highlight film captures the best moments of your day set to music. Longer formats like feature films (20-40 minutes with full speeches and ceremony) or full ceremony edits are available as add-ons or in premium packages."
        },
        {
          question: "When will I receive my wedding film?",
          answer: "You'll receive your teaser film (60-90 seconds) within 2-3 weeks—perfect for sharing while the excitement is fresh. Your highlight film arrives in 6-8 weeks. If you've booked a feature film or ceremony edit, those are delivered in 10-12 weeks. Rush delivery is available for an additional fee."
        },
        {
          question: "What's the difference between a highlight film, feature film, and ceremony edit?",
          answer: "A highlight film (5-8 minutes) is the cinematic storytelling piece—best moments set to music, vows, key emotions, and events. A feature film (20-40 minutes) includes full speeches, extended ceremony footage, getting ready, and a complete narrative of your day. A ceremony edit is the full, uncut ceremony from processional to recessional. Most couples book the highlight film as their main deliverable."
        },
        {
          question: "How will I receive my final films?",
          answer: "All films are delivered via a private online gallery where you can stream, download, and share with family and friends. The gallery stays active indefinitely, so you'll never lose access to your films."
        },
        {
          question: "Can I request specific moments or songs to be included?",
          answer: "Absolutely. During our planning process, let me know any must-have moments (first look, father-daughter dance, etc.) or song preferences. I'll do my best to accommodate, pending licensing availability for music."
        }
      ]
    },
    {
      category: "Music & Audio",
      faqs: [
        {
          question: "Can I choose the music for my film?",
          answer: "You're welcome to share song preferences or meaningful tracks, and I'll do my best to incorporate them (pending licensing availability). Most couples trust me to select music that matches the tone and emotion of their day, and I always nail it."
        },
        {
          question: "Will you capture our vows and speeches?",
          answer: "Yes! I use professional wireless lavalier mics to capture clean audio of your vows, toasts, and any readings. Audio is a huge part of what makes wedding films emotional and personal."
        }
      ]
    },
    {
      category: "The Process",
      faqs: [
        {
          question: "What's the booking process?",
          answer: "First, book a consultation call where we'll discuss your vision, timeline, and needs. Then I'll send a custom proposal with pricing and deliverables. Once you approve, a 30% retainer and signed contract secures your date. Simple and stress-free."
        },
        {
          question: "What's your filming style?",
          answer: "I blend cinematic and documentary styles to give you the best of both worlds—beautiful, intentional shots combined with authentic, candid moments. If you prefer a fully hands-off approach where I stay in the background, I'm happy to work in a pure documentary style. We'll discuss your comfort level during our consultation."
        },
        {
          question: "Do you require a shot list?",
          answer: "Not required, but welcomed! If you have specific must-have shots (family portraits, detail shots, etc.), just share them with me and I'll make sure they're covered. I work naturally with minimal disruption to your day."
        },
        {
          question: "Will you attend our rehearsal?",
          answer: "For most weddings, I don't attend the rehearsal unless it's specifically booked. However, I'm always available for a walkthrough or phone call beforehand to discuss your timeline, locations, and any special moments you want captured."
        },
        {
          question: "What if we need to reschedule our wedding?",
          answer: "We understand plans change. If you need to reschedule and I have availability on your new date, your retainer can be applied as a credit toward the final balance. However, a new retainer is required to secure the new date. All reschedule terms are outlined in your contract."
        }
      ]
    },
    {
      category: "Equipment & Technical",
      faqs: [
        {
          question: "What equipment do you use?",
          answer: "I shoot on professional cinema cameras (Sony FX3/FX6), use stabilization equipment (gimbals, sliders), and capture high-quality audio with wireless lavalier mics. Every wedding gets the same premium gear, regardless of package."
        },
        {
          question: "Do you offer drone footage?",
          answer: "Yes, drone footage is available for select packages or as an add-on (venue permitting and where legally allowed). Aerial shots are stunning for outdoor venues, estates, and destination locations."
        },
        {
          question: "Do you have backup equipment?",
          answer: "Always. I carry backup cameras, lenses, audio recorders, batteries, and memory cards to every wedding. Your day is too important to risk."
        }
      ]
    }
  ];

  let faqIndex = 0;

  return (
    <>
      <Header settled logoAbove />
      <main className="bg-cream">
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-warm-sand/40 to-cream">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px bg-rose-wax-red/30 w-16" />
                <p className="text-sm uppercase tracking-[0.3em] text-espresso/70 font-semibold">
                  Everything You Need to Know
                </p>
                <div className="h-px bg-rose-wax-red/30 w-16" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-ink mb-6">
                Frequently Asked Questions
              </h1>
              <p className="mt-5 text-base md:text-lg text-espresso max-w-2xl mx-auto leading-relaxed">
                Have a question that's not answered here?
                <Link href="/consultation" className="text-rose-wax-red hover:underline ml-1">
                  Let's talk
                </Link>
                {' '}and we'll figure it out together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                {/* Category Header */}
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-8 pb-4 border-b border-coffee/20">
                  {category.category}
                </h2>

                {/* FAQs in Category */}
                <div className="space-y-4">
                  {category.faqs.map((faq) => {
                    const currentIndex = faqIndex++;
                    return (
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="border border-coffee/10 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-200"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === currentIndex ? null : currentIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-warm-sand/20 transition-colors duration-200"
                          aria-expanded={openFaq === currentIndex}
                        >
                          <h4 className="font-serif text-lg font-semibold text-ink pr-4">
                            {faq.question}
                          </h4>
                          <div className="flex-shrink-0 text-rose-wax-red text-2xl font-light">
                            {openFaq === currentIndex ? '−' : '+'}
                          </div>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: openFaq === currentIndex ? 'auto' : 0,
                            opacity: openFaq === currentIndex ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 bg-warm-sand/10">
                            <p className="text-base text-espresso leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-warm-sand/30 border-y border-coffee/10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              Still have questions?
            </h3>
            <p className="text-base md:text-lg text-espresso mb-8 leading-relaxed">
              Every wedding is unique, and I'm here to answer any questions specific to your celebration.
              Let's talk about your vision.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-3 px-10 py-4 bg-rose-wax-red text-white font-semibold rounded-full hover:bg-rose-wax-red/90 hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm"
            >
              <span>Let's Talk</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
