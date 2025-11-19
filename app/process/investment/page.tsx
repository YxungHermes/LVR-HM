"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinaleBlock from "@/components/FinaleBlock";

const faqs = [
  {
    question: "When should I book my film?",
    answer: "Most couples book 8–12 months in advance to secure their date, though we occasionally have availability for shorter timelines. If you have your date confirmed and you love our work, reach out soon. Our calendar fills quickly, especially during peak season (May–October)."
  },
  {
    question: "What if I'm not sure which collection fits my needs?",
    answer: "You can get a rough sense of pricing from our collections on the website, which helps you know if we're in your ballpark. But if you want something tailored to your specific day (your hours, your priorities, your add-ons), that's what the consultation is for. We'll create a custom proposal that fits you perfectly, not a one-size-fits-all package. No pressure, just clarity."
  },
  {
    question: "Do you travel for destination weddings and adventure sessions?",
    answer: "Absolutely. We've filmed in Italy, Mexico, California, the Redwoods, mountaintops, and everywhere in between. Travel fees are included transparently in your proposal. If the location is meaningful to your story, we'll be there."
  },
  {
    question: "How long does editing and delivery take?",
    answer: "Teasers arrive in 2–3 weeks (perfect for sharing the excitement while it's fresh). Highlight films take 6–8 weeks, and full feature films are delivered in 10–12 weeks. Rush delivery is available for an additional fee if you need your film sooner."
  },
  {
    question: "Can we request specific shots or moments to be captured?",
    answer: "Yes, absolutely. During pre-production, we'll create a shot list together based on what matters most to you. Whether that's capturing your grandparents dancing, a specific family portrait, or the quiet moment before you walk down the aisle, we balance thoughtful direction with documentary-style observation to keep everything authentic."
  },
  {
    question: "What happens if something goes wrong on the day?",
    answer: "We always bring backup cameras, audio recorders, batteries, and memory cards. We've filmed through power outages, rainstorms, and last-minute timeline changes. Our priority is staying calm, adaptable, and focused on capturing your story no matter what happens."
  },
  {
    question: "Do you offer raw footage or unedited files?",
    answer: "Raw footage can be added to any collection for an additional fee. We'll deliver all usable clips organized by moment (getting ready, ceremony, reception, etc.) via secure download link."
  },
  {
    question: "How do payments and deposits work?",
    answer: "We require a 30% non-refundable deposit to secure your date. The remaining balance is due 14 days before your event. We accept credit cards, bank transfers, and payment plans can be arranged if needed."
  },
  {
    question: "What's your cancellation and refund policy?",
    answer: "Your deposit is non-refundable as it reserves your date and turns away other inquiries. However, if you need to reschedule due to unforeseen circumstances, we'll work with you to find a new date based on availability. No rescheduling fee."
  },
  {
    question: "Can we choose the music for our film?",
    answer: "We typically handle music selection to ensure the emotional arc and pacing of your film feels cohesive. That said, if you have a meaningful song (your first dance, a song that represents your relationship), we'll absolutely incorporate it. We use fully licensed music from premium libraries."
  },
];

export default function InvestmentPage() {
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
                Investment & Payment
              </h1>
              <p className="text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto">
                Total transparency on pricing, payment structure, and what's included. No hidden fees, no surprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Payment & Investment Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-cream border border-coffee/10 rounded-lg p-8 md:p-10 mb-8">
                <h3 className="font-serif text-xl font-semibold text-ink mb-6">How Payments Work</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-wax-red/10 flex items-center justify-center">
                      <span className="text-rose-wax-red font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-ink mb-1">30% Deposit to Secure Your Date</h4>
                      <p className="text-sm text-espresso leading-relaxed">
                        Due upon signing the contract. This reserves your date exclusively and is non-refundable (but applied to your total investment). We turn away other inquiries once you're booked.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-wax-red/10 flex items-center justify-center">
                      <span className="text-rose-wax-red font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-ink mb-1">Remaining 70% Due 14 Days Before</h4>
                      <p className="text-sm text-espresso leading-relaxed">
                        Final payment due two weeks before your wedding day. We'll send a friendly reminder email when it's time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-wax-red/10 flex items-center justify-center">
                      <span className="text-rose-wax-red font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-ink mb-1">Payment Methods Accepted</h4>
                      <p className="text-sm text-espresso leading-relaxed">
                        Credit card (via Stripe), bank transfer, Venmo, or check. <strong>Payment plans available.</strong> We can split your balance into 3-4 monthly installments at no extra charge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-warm-sand/30 border border-coffee/10 rounded-lg p-8">
                <h3 className="font-serif text-xl font-semibold text-ink mb-4 text-center">What's Included in Your Investment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-espresso">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Your agreed coverage hours on the day</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All agreed deliverables (teaser, highlight, feature)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pre-production planning call & timeline review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional color grading & sound design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully licensed music from premium libraries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Private online gallery with streaming & downloads</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One round of revision notes during editing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Travel within 50 miles of NYC (additional fees beyond)</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-coffee/10">
                  <h4 className="font-semibold text-ink mb-3 text-sm">Optional Add-Ons (Additional Cost)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-espresso/70">
                    <div>• Raw footage archive (+$500)</div>
                    <div>• Second filmmaker (+$800)</div>
                    <div>• Rush delivery under 2 weeks (+$1000)</div>
                    <div>• Drone footage (+varies by location)</div>
                    <div>• USB keepsake box (+$150)</div>
                    <div>• Extended coverage hours (+varies)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20 bg-warm-sand/30">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                Common Questions
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                Everything you need to know about booking, filming, and receiving your final films.
              </p>

              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-coffee/10 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-base text-espresso leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Still Have Questions CTA */}
              <motion.div
                className="mt-12 p-8 bg-white rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                  Still have questions?
                </h3>
                <p className="text-base text-espresso mb-6">
                  The best way to get answers is to talk. Book a consultation and we'll cover everything specific to your day.
                </p>
                <Link
                  href="/consultation"
                  className="inline-flex items-center bg-rose-wax-red text-white px-8 py-3 rounded-full font-medium text-base transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring"
                >
                  Book Your Consultation
                  <svg
                    className="ml-2 h-5 w-5"
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
