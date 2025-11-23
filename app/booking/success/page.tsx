"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Confetti from 'react-confetti';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header settled hideCta />
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <main className="bg-cream min-h-screen">
        <section className="px-6 py-32 md:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Success Icon */}
              <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Your Date is Reserved!
              </h1>

              <p className="text-xl md:text-2xl text-espresso/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're so excited to film your wedding. You've officially secured your date with us!
              </p>

              {/* What Happens Next */}
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-coffee/10 text-left mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
                  What Happens Next
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-wax-red text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Check Your Email</h3>
                      <p className="text-sm text-espresso/80">
                        You'll receive a payment confirmation and welcome packet within the next few minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-wax-red text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Fill Out Your Questionnaire</h3>
                      <p className="text-sm text-espresso/80">
                        We'll send you a detailed questionnaire to learn about your vision, timeline, and special moments you want captured
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-wax-red text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Pre-Wedding Consultation</h3>
                      <p className="text-sm text-espresso/80">
                        We'll schedule a call 2-3 months before your wedding to finalize timeline, shot list, and logistics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-wax-red text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Final Payment Reminder</h3>
                      <p className="text-sm text-espresso/80">
                        Remaining balance is due 30 days before your wedding. We'll send you a payment link when it's time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-wax-red text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Wedding Day!</h3>
                      <p className="text-sm text-espresso/80">
                        I'll be there to capture every beautiful moment. Then expect your film 8-12 weeks after your big day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Info Box */}
              <div className="bg-warm-sand/20 border border-coffee/10 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-ink mb-3">Quick Reminder</h3>
                <ul className="text-sm text-espresso/80 space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-wax-red">•</span>
                    <span>Your deposit secures your date exclusively for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-wax-red">•</span>
                    <span>Check your spam folder if you don't see our welcome email within 10 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-wax-red">•</span>
                    <span>You can reach me anytime at contact@violetarose.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-wax-red">•</span>
                    <span>Keep an eye out for the questionnaire and respond when you can. No rush!</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/films"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-rose-wax-red rounded-full text-rose-wax-red font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red hover:text-white transition-all"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Watch More Films</span>
                </Link>

                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-rose-wax-red text-white rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red/90 transition-all"
                >
                  <span>See the Full Process</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <p className="mt-8 text-sm text-espresso/60">
                Transaction ID: {sessionId?.substring(0, 20)}...
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-cream">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-wax-red mx-auto"></div>
          <p className="mt-4 text-espresso">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
