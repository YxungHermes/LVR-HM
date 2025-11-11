"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { pricing } from "@/content/pricing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsultationPage() {
  const router = useRouter();
  const [isPlannerMode, setIsPlannerMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    guestCount: "",
    howYouMet: "",
    filmFeel: [] as string[],
    isPlannerMode: false,
    plannerName: "",
    plannerEmail: "",
    plannerPhone: "",
    plannerCompany: "",
    budgetRange: "",
    contactPreference: "email",
    privacyConsent: false,
    additionalNotes: "",
  });

  const filmFeelOptions = [
    "Romantic",
    "Cinematic",
    "Documentary",
    "Editorial",
    "Playful",
    "Moody",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Consultation form submitted:", formData);
    // Redirect to thank you page or show confirmation
    router.push("/?consultation=success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && (e.target as HTMLInputElement).checked !== undefined) {
      const checkbox = e.target as HTMLInputElement;
      if (name === "privacyConsent") {
        setFormData({ ...formData, [name]: checkbox.checked });
      } else if (name === "isPlannerMode") {
        setIsPlannerMode(checkbox.checked);
        setFormData({ ...formData, [name]: checkbox.checked });
      } else if (name === "filmFeel") {
        const feelValue = checkbox.value;
        const currentFeels = formData.filmFeel;
        const updatedFeels = checkbox.checked
          ? [...currentFeels, feelValue]
          : currentFeels.filter(f => f !== feelValue);
        setFormData({ ...formData, filmFeel: updatedFeels });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6 tracking-wide">
                Let's Create Something Beautiful Together
              </h1>
              <p className="text-lg text-espresso leading-relaxed max-w-2xl mx-auto">
                Tell me about your celebration — your story, your vision, and everything that matters most.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-3xl">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white border border-coffee/10 rounded-lg p-8 md:p-12 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Your Information
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-espresso">
                      Your Names <span className="text-rose-wax-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      placeholder="Sarah & James"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-espresso">
                      Email <span className="text-rose-wax-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-espresso">
                    Phone <span className="text-rose-wax-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Event Details
                </h3>

                <div>
                  <label htmlFor="eventType" className="mb-2 block text-sm font-medium text-espresso">
                    Event Type <span className="text-rose-wax-red">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                  >
                    <option value="">Select a collection</option>
                    <option value="elopements">{pricing.elopements.title} (from ${pricing.elopements.starting.toLocaleString()})</option>
                    <option value="weddingDay">{pricing.weddingDay.title} (from ${pricing.weddingDay.starting.toLocaleString()})</option>
                    <option value="destination">{pricing.destination.title} (from ${pricing.destination.starting.toLocaleString()})</option>
                    <option value="adventure">{pricing.adventure.title} (from ${pricing.adventure.starting.toLocaleString()})</option>
                    <option value="custom">Not sure yet / Custom</option>
                  </select>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="date" className="mb-2 block text-sm font-medium text-espresso">
                      Event Date <span className="text-rose-wax-red">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="guestCount" className="mb-2 block text-sm font-medium text-espresso">
                      Estimated Guest Count
                    </label>
                    <input
                      type="text"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      placeholder="e.g., 50-75 guests"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="mb-2 block text-sm font-medium text-espresso">
                    Location <span className="text-rose-wax-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    placeholder="City, State or Country"
                  />
                </div>
              </div>

              {/* Your Story */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Your Story
                </h3>

                <div>
                  <label htmlFor="howYouMet" className="mb-2 block text-sm font-medium text-espresso">
                    How did you meet?
                  </label>
                  <textarea
                    id="howYouMet"
                    name="howYouMet"
                    value={formData.howYouMet}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    placeholder="Share the story of how you two found each other..."
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-espresso">
                    How do you want your film to feel? <span className="text-xs text-espresso/60">(Select all that apply)</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {filmFeelOptions.map((feel) => (
                      <label
                        key={feel}
                        className="flex items-center space-x-3 rounded-lg border border-coffee/20 bg-cream px-4 py-3 cursor-pointer hover:border-rose-wax-red transition-colors"
                      >
                        <input
                          type="checkbox"
                          name="filmFeel"
                          value={feel}
                          checked={formData.filmFeel.includes(feel)}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                        />
                        <span className="text-sm text-espresso">{feel}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Planner Mode */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 p-4 bg-warm-sand/30 rounded-lg">
                  <input
                    type="checkbox"
                    id="isPlannerMode"
                    name="isPlannerMode"
                    checked={isPlannerMode}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                  />
                  <label htmlFor="isPlannerMode" className="text-sm font-medium text-espresso cursor-pointer">
                    I am a wedding planner inquiring on behalf of a client
                  </label>
                </div>

                {isPlannerMode && (
                  <motion.div
                    className="space-y-4 p-6 bg-warm-sand/20 rounded-lg border border-coffee/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-serif text-lg font-semibold text-ink">Planner Information</h4>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="plannerName" className="mb-2 block text-sm font-medium text-espresso">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="plannerName"
                          name="plannerName"
                          value={formData.plannerName}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          placeholder="Jane Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="plannerCompany" className="mb-2 block text-sm font-medium text-espresso">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="plannerCompany"
                          name="plannerCompany"
                          value={formData.plannerCompany}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          placeholder="Elite Events Co."
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="plannerEmail" className="mb-2 block text-sm font-medium text-espresso">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="plannerEmail"
                          name="plannerEmail"
                          value={formData.plannerEmail}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          placeholder="jane@eliteevents.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="plannerPhone" className="mb-2 block text-sm font-medium text-espresso">
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          id="plannerPhone"
                          name="plannerPhone"
                          value={formData.plannerPhone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          placeholder="(555) 987-6543"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Budget & Preferences */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Investment & Preferences
                </h3>

                <div>
                  <label htmlFor="budgetRange" className="mb-2 block text-sm font-medium text-espresso">
                    Budget Range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                  >
                    <option value="">Select a budget range</option>
                    <option value="1200-2200">$1,200 - $2,200</option>
                    <option value="2200-4800">$2,200 - $4,800</option>
                    <option value="3500-7500">$3,500 - $7,500</option>
                    <option value="5500-12000">$5,500 - $12,000</option>
                    <option value="12000+">$12,000+</option>
                    <option value="flexible">Flexible / Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-espresso">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === "email"}
                        onChange={handleChange}
                        className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                      />
                      <span className="text-sm text-espresso">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === "phone"}
                        onChange={handleChange}
                        className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                      />
                      <span className="text-sm text-espresso">Phone</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="either"
                        checked={formData.contactPreference === "either"}
                        onChange={handleChange}
                        className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                      />
                      <span className="text-sm text-espresso">Either</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="mb-2 block text-sm font-medium text-espresso">
                    Additional Notes or Questions
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    placeholder="Any additional details, special requests, or questions..."
                  />
                </div>
              </div>

              {/* Privacy Consent */}
              <div className="flex items-start space-x-3 p-4 bg-warm-sand/30 rounded-lg">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                />
                <label htmlFor="privacyConsent" className="text-sm text-espresso cursor-pointer">
                  I consent to Love, Violeta Rose storing and using my information to respond to my inquiry. Your information will never be shared with third parties. <span className="text-rose-wax-red">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center bg-rose-wax-red text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring"
                >
                  Book My Consultation
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
                </button>
                <p className="mt-4 text-sm text-espresso/60">
                  I respond to all inquiries within 24 hours
                </p>
              </div>
            </motion.form>

            {/* Back to Pricing Link */}
            <div className="mt-8 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center text-sm text-espresso/60 hover:text-rose-wax-red transition-colors"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
