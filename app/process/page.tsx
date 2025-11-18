"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
import FinaleBlock from "@/components/FinaleBlock";

const faqs = [
  {
    question: "When should I book my film?",
    answer: "Most couples book 8–12 months in advance to secure their date, though we occasionally have availability for shorter timelines. If you have your date confirmed and you love our work, reach out soon—our calendar fills quickly, especially during peak season (May–October)."
  },
  {
    question: "What if I'm not sure which collection fits my needs?",
    answer: "That's exactly what the consultation is for. We'll talk through your day, your vision, your priorities, and your timeline. Then we'll create a custom proposal that feels tailored to you—not a one-size-fits-all package. No pressure, just clarity."
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
    answer: "Yes, absolutely. During pre-production, we'll create a shot list together based on what matters most to you—whether that's capturing your grandparents dancing, a specific family portrait, or the quiet moment before you walk down the aisle. We balance thoughtful direction with documentary-style observation to keep everything authentic."
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
    answer: "Your deposit is non-refundable as it reserves your date and turns away other inquiries. However, if you need to reschedule due to unforeseen circumstances, we'll work with you to find a new date based on availability—no rescheduling fee."
  },
  {
    question: "Can we choose the music for our film?",
    answer: "We typically handle music selection to ensure the emotional arc and pacing of your film feels cohesive. That said, if you have a meaningful song (your first dance, a song that represents your relationship), we'll absolutely incorporate it. We use fully licensed music from premium libraries."
  },
];

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
                Your film starts long before the cameras roll. Here's how we keep everything calm, clear, and beautifully told—from first hello to final delivery.
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
                From the day you reach out to the day your final film arrives—here's exactly what happens and when.
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
                  <div className="text-rose-wax-red font-bold text-sm mb-2">DAY 3-7</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Consultation Call</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    30-45 min video call to understand your story, vision, and priorities.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">DAY 10</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">Proposal Sent</h3>
                  <p className="text-sm text-espresso leading-relaxed">
                    Custom proposal with pricing, deliverables, and timeline within 2-3 days.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="text-rose-wax-red font-bold text-sm mb-2">DAY 14</div>
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
                    We finalize your timeline, shot list, and creative direction together.
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
                    We arrive 30 min early and capture your story with intention and artistry.
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
                    Your 60-90 second teaser film—perfect for sharing while the excitement is fresh.
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

        {/* Roadmap Component */}
        <Roadmap variant="full" cta />

        {/* Why It Matters Section */}
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
              <div className="space-y-6 text-base md:text-lg text-espresso leading-relaxed text-left max-w-3xl mx-auto">
                <p>
                  Great films don't happen by accident. They're the result of preparation, communication, and trust. When we take time upfront to understand your story—how you met, what your day means, what moments matter most—we can anticipate the shots that will make you feel something years from now.
                </p>
                <p>
                  This process also means fewer surprises. You'll know exactly what to expect on your wedding day, what your deliverables include, and when your films will arrive. No guesswork, no confusion—just clarity, intention, and beautiful work.
                </p>
                <p className="text-center italic text-espresso/80 pt-4">
                  "We felt like Michael knew us before he even showed up. The planning process made the whole day feel seamless."
                  <span className="block mt-2 text-sm not-italic">— Sarah & James, 2024</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect on Your Wedding Day */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                What to Expect on Your Wedding Day
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                Here's exactly how we show up, where we'll be, and what we bring—so you know what to expect before we even arrive.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">Arrival & Setup</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>We arrive 30 minutes early</strong> to scout locations, test lighting, and coordinate with your photographer and planner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>All-black professional attire</strong>—we blend into the background, never stand out</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Introduce ourselves to key vendors</strong> early—photographer, DJ, planner, venue coordinator</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">Equipment & Approach</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Professional cinema cameras</strong> with multiple lenses for every moment and lighting condition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Stabilization equipment</strong> for smooth, cinematic movement without distraction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Professional wireless audio</strong>—discreet microphones capture vows, toasts, and reactions crystal clear</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Full redundancy</strong>—backup cameras, batteries, cards, and recorders so nothing is left to chance</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">During the Ceremony</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Positioned strategically</strong>—one at the altar, one in the aisle for processional and reactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Silent operation</strong>—no talking, no direction, no interruptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Capture audio cleanly</strong>—vows, readings, officiant, and reactions from guests</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">Reception & Timeline</h3>
                  <ul className="space-y-3 text-sm text-espresso">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Flexible with timeline changes</strong>—we adapt to delays, surprises, and spontaneous moments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Meal during cocktail hour</strong>—we eat quickly and discreetly (vendor meal appreciated but not required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Stay until the end</strong>—your coverage hours are guaranteed, even if the day runs long</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Payment & Investment Section */}
        <section className="px-6 py-20 bg-cream">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 text-center">
                Investment & Payment
              </h2>
              <p className="text-base text-espresso/70 text-center mb-12 max-w-2xl mx-auto">
                Total transparency on pricing, payment structure, and what's included—no hidden fees, no surprises.
              </p>

              <div className="bg-white border border-coffee/10 rounded-lg p-8 md:p-10 mb-8">
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
                        Credit card (via Stripe), bank transfer, Venmo, or check. <strong>Payment plans available</strong>—we can split your balance into 3-4 monthly installments at no extra charge.
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

        {/* What We Need from You */}
        <section className="px-6 py-20 bg-white">
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
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
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
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
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
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2">6 Weeks Before Your Wedding</h3>
                      <ul className="space-y-2 text-sm text-espresso">
                        <li>• Finalized wedding timeline (with buffer time for delays)</li>
                        <li>• Contact list for vendors (photographer, planner, DJ, venue coordinator)</li>
                        <li>• Family dynamics & VIP list (grandparents, parents, anyone who needs special attention)</li>
                        <li>• List of must-capture moments (vows, first look, specific dances, family photos, etc.)</li>
                        <li>• Venue restrictions (drone rules, ceremony movement, quiet hours)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
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
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
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
                  className="bg-warm-sand/10 border border-coffee/10 rounded-lg p-6"
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
                        <li>• Share your films once they're delivered—we love seeing your reactions!</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20 bg-cream">
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
                    className="border-b border-coffee/10 pb-6 last:border-b-0"
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
                className="mt-12 p-8 bg-warm-sand/50 rounded-lg text-center"
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
