"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pricingOverview } from '@/content/pricing';

export default function ReservePage() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReserve = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageSlug: selectedPackage,
          clientName: name,
          clientEmail: email,
          weddingDate,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong. Please try again or contact us directly.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      alert('Something went wrong. Please try again or contact us directly.');
      setLoading(false);
    }
  };

  const selectedPackageDetails = pricingOverview.find(p => p.slug === selectedPackage);
  const depositAmount = selectedPackageDetails
    ? parseInt(selectedPackageDetails.range.split('—')[0].replace('$', '').replace(',', '').trim()) / 2
    : 0;

  return (
    <>
      <Header settled hideCta />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-warm-sand/30 to-cream">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Reserve Your Date
              </h1>
              <p className="text-lg md:text-xl text-espresso/70 mb-4">
                Secure your wedding date with a 50% deposit
              </p>
              <p className="text-sm text-espresso/60 max-w-2xl mx-auto">
                Your date is only reserved once the deposit is received. We limit bookings to ensure every couple gets our full attention.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="px-6 py-8 bg-white border-y border-coffee/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-rose-wax-red mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="font-semibold text-ink mb-1">Secure Payment</h3>
                <p className="text-sm text-espresso/70">Powered by Stripe, bank-level encryption</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-rose-wax-red mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-ink mb-1">Instant Confirmation</h3>
                <p className="text-sm text-espresso/70">Your date is secured immediately</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-rose-wax-red mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-ink mb-1">Flexible Payment</h3>
                <p className="text-sm text-espresso/70">Pay remaining 50% before your wedding</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Form */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-coffee/10"
            >
              <form onSubmit={handleReserve} className="space-y-6">
                {/* Package Selection */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-3">
                    Select Your Package *
                  </label>
                  <div className="space-y-3">
                    {pricingOverview.map((pkg) => (
                      <label
                        key={pkg.slug}
                        className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedPackage === pkg.slug
                            ? 'border-rose-wax-red bg-rose-wax-red/5'
                            : 'border-coffee/20 hover:border-rose-wax-red/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={pkg.slug}
                          checked={selectedPackage === pkg.slug}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          className="mr-4 mt-1"
                          required
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-ink">{pkg.name}</span>
                            {pkg.popular && (
                              <span className="text-xs bg-rose-wax-red text-white px-2 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-espresso/70 mb-2">{pkg.forWho}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-rose-wax-red">{pkg.range}</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors"
                    placeholder="John & Jane Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors"
                    placeholder="you@email.com"
                    required
                  />
                </div>

                {/* Wedding Date */}
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Wedding Date *
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors"
                    required
                  />
                </div>

                {/* Deposit Summary */}
                {selectedPackage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-warm-sand/20 border border-coffee/10 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-espresso/70">Package Range</span>
                      <span className="font-medium text-ink">{selectedPackageDetails?.range}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-espresso/70">Deposit (50%)</span>
                      <span className="text-lg font-bold text-rose-wax-red">
                        ${depositAmount.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-espresso/60 mt-3">
                      Final pricing will be confirmed based on your specific needs. Remaining balance due 30 days before your wedding.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !selectedPackage}
                  className="w-full bg-rose-wax-red text-white rounded-full px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red/90 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Continue to Payment →'
                  )}
                </button>

                <p className="text-xs text-center text-espresso/60">
                  You'll be redirected to Stripe's secure payment page
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 bg-white border-t border-coffee/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-ink mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-2">When is the remaining balance due?</h3>
                <p className="text-sm text-espresso/80">
                  The remaining 50% is due 30 days before your wedding date. We'll send you a payment reminder and link.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Is the deposit refundable?</h3>
                <p className="text-sm text-espresso/80">
                  Deposits are non-refundable but can be transferred to a new date within 12 months if your wedding is postponed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">What payment methods do you accept?</h3>
                <p className="text-sm text-espresso/80">
                  We accept all major credit cards, debit cards, Apple Pay, and Google Pay through Stripe.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">What happens after I pay?</h3>
                <p className="text-sm text-espresso/80">
                  You'll receive an instant confirmation email, and we'll send you a detailed welcome packet with next steps, timeline, and questionnaire.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
