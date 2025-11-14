"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ConsultationCTA from "@/components/cta/ConsultationCTA";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Redirect with success flag to hide CTA
    router.push("/?sent=true");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-white px-6 py-16 md:py-20 min-h-screen snap-center flex flex-col justify-center">
      <div className="mx-auto max-w-3xl w-full">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg font-serif tracking-wider">
            Let's Create Something Beautiful
          </h2>
          <p className="subhead mx-auto mt-4 max-w-2xl text-espresso">
            Tell me about your love story. I reply within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-espresso"
              >
                Your Names
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

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-espresso"
              >
                Email
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
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-espresso"
              >
                Wedding Date
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
                Location
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

          <div>
            <label
              htmlFor="package"
              className="mb-2 block text-sm font-medium text-espresso"
            >
              Package Interest
            </label>
            <select
              id="package"
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
            >
              <option value="">Select a package</option>
              <option value="intimate">Intimate (4 hours)</option>
              <option value="classic">Classic (6 hours)</option>
              <option value="premium">Premium (8 hours)</option>
              <option value="legacy">Legacy (10-12 hours)</option>
              <option value="custom">Custom / Not sure yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-espresso"
            >
              Tell Me About Your Day
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-2 focus:outline-none focus:ring-2 focus:ring-rose-1/20"
              placeholder="Share your vision, style, and what matters most to you..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-rose-grad inline-flex items-center rounded-full px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus-ring"
            >
              Send Inquiry
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
            </button>
          </div>
        </motion.form>

        {/* Consultation CTA - appears below form, hides after submission */}
        <div className="mt-16 md:mt-24">
          <Suspense fallback={null}>
            <ConsultationCTA tone="light" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
