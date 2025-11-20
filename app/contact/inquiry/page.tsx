"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Turnstile from "@/components/Turnstile";

export default function InquiryPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [captchaError, setCaptchaError] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate CAPTCHA
    if (!turnstileToken) {
      setCaptchaError("Please complete the CAPTCHA verification");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Success - redirect to thank you page
        router.push("/consultation/success");
      } else {
        // Handle error
        console.error("Submission error:", result);
        alert(
          result.error ||
          "There was an issue submitting your inquiry. Please try again or contact us directly."
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "There was a network error. Please check your connection and try again."
      );
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header settled logoAbove />
      <main className="bg-gradient-to-b from-cream to-white min-h-screen">
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Let's Create Something
                <br />
                <span className="text-rose-2">Beautiful Together</span>
              </h1>
              <p className="text-lg md:text-xl text-espresso/80 leading-relaxed max-w-2xl mx-auto">
                Share a bit about your celebration, and I'll get back to you within 24 hours to discuss how we can bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-3xl">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white border border-coffee/10 rounded-2xl p-8 md:p-12 space-y-8 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Tell Me About You
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-espresso"
                  >
                    Your Names <span className="text-rose-2">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
                    placeholder="Sarah & James"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-espresso"
                    >
                      Email <span className="text-rose-2">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
                      placeholder="hello@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-espresso"
                    >
                      Phone <span className="text-xs text-espresso/60">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Your Celebration
                </h3>

                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-2 block text-sm font-medium text-espresso"
                  >
                    What type of celebration? <span className="text-rose-2">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
                  >
                    <option value="">Select a type</option>
                    <option value="elopements">Elopement / Intimate Gathering</option>
                    <option value="weddingDay">Full Wedding Day</option>
                    <option value="destination">Destination Wedding</option>
                    <option value="adventure">Adventure Session</option>
                    <option value="custom">Not sure yet / Custom</option>
                  </select>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-medium text-espresso"
                    >
                      Event Date <span className="text-rose-2">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-medium text-espresso"
                    >
                      Location <span className="text-rose-2">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
                      placeholder="Malibu, California"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Your Vision
                </h3>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-espresso"
                  >
                    Tell me about your day <span className="text-rose-2">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
                    placeholder="Share your vision, what matters most to you, any special details..."
                  />
                </div>
              </div>

              {/* CAPTCHA Verification */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-espresso">
                  Verify you're human <span className="text-rose-2">*</span>
                </label>
                <Turnstile
                  onVerify={(token) => {
                    setTurnstileToken(token);
                    setCaptchaError("");
                  }}
                  onError={() => {
                    setTurnstileToken("");
                    setCaptchaError("CAPTCHA verification failed. Please try again.");
                  }}
                  onExpire={() => {
                    setTurnstileToken("");
                    setCaptchaError("CAPTCHA expired. Please verify again.");
                  }}
                />
                {captchaError && (
                  <p className="text-sm text-rose-2">{captchaError}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="inline-flex items-center gap-3 bg-rose-grad text-white px-10 py-5 rounded-full font-semibold uppercase tracking-wider text-sm hover:shadow-[0_8px_24px_rgba(244,105,126,0.4)] focus-ring transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
                    </>
                  )}
                </button>
                <p className="mt-6 text-sm text-espresso/60">
                  I respond to all inquiries within 24 hours. For a more detailed consultation,{" "}
                  <Link href="/consultation" className="text-rose-2 hover:underline font-medium">
                    click here
                  </Link>
                  .
                </p>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
