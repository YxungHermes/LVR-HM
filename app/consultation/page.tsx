"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Turnstile from "@/components/Turnstile";

// Form data interface
interface FormData {
  // Step 1: About Your Celebration
  partner1Name: string;
  partner1Pronouns: string;
  partner2Name: string;
  partner2Pronouns: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  eventType: string;

  // Event type specific fields
  eventSubtype: string; // For engagement/couples: "engagement" or "couples-session"
  sessionTier: string; // For engagement/couples: "essential" | "signature" | "cinematic"

  guestCount: string;

  // Step 2: Vision & Style
  tradition: string;
  traditionOther: string;
  filmStyle: string;

  // Step 3: What You're Looking For
  deliverables: string[];
  budgetRange: string;

  // Step 4: Your Story (Optional)
  howYouMet: string;
  additionalNotes: string;

  // Step 5: Next Steps
  howDidYouHear: string;
  bookingTimeline: string;
}

const TOTAL_STEPS = 5;

export default function ConsultationWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    partner1Name: "",
    partner1Pronouns: "",
    partner2Name: "",
    partner2Pronouns: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    eventType: "",
    eventSubtype: "",
    sessionTier: "",
    guestCount: "",
    tradition: "",
    traditionOther: "",
    filmStyle: "",
    deliverables: [],
    budgetRange: "",
    howYouMet: "",
    additionalNotes: "",
    howDidYouHear: "",
    bookingTimeline: ""
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const toggleDeliverable = (value: string) => {
    setFormData(prev => ({
      ...prev,
      deliverables: prev.deliverables.includes(value)
        ? prev.deliverables.filter(d => d !== value)
        : [...prev.deliverables, value]
    }));
  };

  // Format phone number
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length === 0) return '';
    if (phoneNumber.length <= 3) return `(${phoneNumber}`;
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (value: string) => {
    updateField('phone', formatPhoneNumber(value));
  };

  // Validation for each step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.partner1Name) newErrors.partner1Name = "Partner 1 name is required";
        if (!formData.partner2Name) newErrors.partner2Name = "Partner 2 name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
        if (!formData.weddingDate) newErrors.weddingDate = "Date is required";
        if (!formData.location) newErrors.location = "Location is required";
        if (!formData.eventType) newErrors.eventType = "Please select an event type";
        break;
      case 2:
        if (!formData.tradition) newErrors.tradition = "Please select a tradition";
        if (formData.tradition === "other" && !formData.traditionOther) newErrors.traditionOther = "Please describe your tradition";
        if (!formData.filmStyle) newErrors.filmStyle = "Please select a film style";
        break;
      case 3:
        if (formData.deliverables.length === 0) newErrors.deliverables = "Please select at least one deliverable";
        if (!formData.budgetRange) newErrors.budgetRange = "Please select a budget range";
        break;
      case 5:
        if (!formData.howDidYouHear) newErrors.howDidYouHear = "Please let us know how you heard about us";
        if (!turnstileToken) newErrors.captcha = "Please complete the CAPTCHA verification";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      });

      if (response.ok) {
        router.push("/consultation/success");
      } else {
        const result = await response.json();
        alert(result.error || "There was an issue submitting your request. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("There was a network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  // Progress bar
  const progress = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

  // Smart bubble component for collapsed answers
  const CompactAnswer = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
    <div className="inline-flex items-center gap-2 bg-rose-wax-red/5 border border-rose-wax-red/20 rounded-full px-4 py-2 text-sm">
      {icon && <span className="text-rose-wax-red">{icon}</span>}
      <span className="text-coffee/60">{label}:</span>
      <span className="text-ink font-medium">{value}</span>
    </div>
  );

  return (
    <>
      <Header settled hideCta />
      <main className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-warm-sand/30 to-cream">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
              Let's Create Your Film
            </h1>
            <p className="text-lg md:text-xl text-espresso/70">
              Tell us about your celebration so we can craft the perfect film for you.
            </p>
          </div>
        </section>

        {/* Progress Bar - Glassmorphic Design */}
        <div className="sticky top-24 z-40 px-4 flex justify-center">
          <div
            className="w-full max-w-3xl px-6 py-4 bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_60px_rgba(244,105,126,0.06)] transition-all duration-700"
            style={{
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-ink">
                Step {currentStep} of {TOTAL_STEPS}
              </span>
              <span className="text-sm text-espresso/60">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="h-2 bg-warm-sand/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-rose-wax-red rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: About Your Celebration */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-ink mb-2">
                        About Your Celebration
                      </h2>
                      <p className="text-espresso/70">
                        Let's start with the basics about your special day.
                      </p>
                    </div>

                    {/* Event Type Selection */}
                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        What type of film are you looking for? *
                      </label>

                      {/* Show compact answer if already selected */}
                      {formData.eventType && (
                        <div className="mb-4">
                          <CompactAnswer
                            label="Event Type"
                            value={
                              formData.eventType === "wedding" ? "Wedding Day Film" :
                              formData.eventType === "elopement" ? "Elopement/Intimate Gathering" :
                              formData.eventType === "engagement" ? "Engagement/Couples Session" :
                              formData.eventType === "anniversary" ? "Anniversary Film" : "Other"
                            }
                            icon={
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            }
                          />
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: "wedding", label: "Wedding Day Film", description: "Full day or partial coverage" },
                          { value: "elopement", label: "Elopement/Intimate Gathering", description: "Small, intimate celebrations" },
                          { value: "engagement", label: "Engagement/Couples Session", description: "Pre-wedding, proposals, or couples film" },
                          { value: "anniversary", label: "Anniversary Film", description: "Celebrate your milestone" },
                          { value: "other", label: "Something Else", description: "Tell us what you have in mind" }
                        ].map((type) => (
                          <label
                            key={type.value}
                            className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.eventType === type.value
                                ? 'border-rose-wax-red bg-rose-wax-red/5'
                                : 'border-coffee/20 hover:border-rose-wax-red/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="eventType"
                              value={type.value}
                              checked={formData.eventType === type.value}
                              onChange={(e) => updateField('eventType', e.target.value)}
                              className="mr-3 mt-1"
                            />
                            <div>
                              <div className="font-medium text-ink">{type.label}</div>
                              <div className="text-sm text-espresso/60">{type.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>

                      {/* Event Type Specific Questions - Expanding/Collapsing */}
                      <AnimatePresence>
                        {formData.eventType === "engagement" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 overflow-hidden"
                          >
                            <div className="bg-warm-sand/20 border border-coffee/10 rounded-lg p-6 space-y-4">
                              {/* Show compact answers if already filled */}
                              {formData.eventSubtype && formData.sessionTier && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                  <CompactAnswer
                                    label="Type"
                                    value={formData.eventSubtype === "engagement" ? "Engagement Session" : "Couples Adventure"}
                                  />
                                  <CompactAnswer
                                    label="Tier"
                                    value={
                                      formData.sessionTier === "essential" ? "Essential" :
                                      formData.sessionTier === "signature" ? "Signature" : "Cinematic"
                                    }
                                  />
                                </div>
                              )}

                              <div>
                                <label className="block text-sm font-medium text-ink mb-3">
                                  What's the occasion?
                                </label>
                                <div className="space-y-2">
                                  {[
                                    { value: "engagement", label: "Engagement Session", description: "Celebrating your engagement or surprise proposal" },
                                    { value: "couples-session", label: "Couples Adventure", description: "Date night, anniversary, or just because" }
                                  ].map((subtype) => (
                                    <label
                                      key={subtype.value}
                                      className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${
                                        formData.eventSubtype === subtype.value
                                          ? 'border-rose-wax-red bg-rose-wax-red/5'
                                          : 'border-coffee/20 hover:border-rose-wax-red/20'
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        name="eventSubtype"
                                        value={subtype.value}
                                        checked={formData.eventSubtype === subtype.value}
                                        onChange={(e) => updateField('eventSubtype', e.target.value)}
                                        className="mr-3 mt-0.5"
                                      />
                                      <div>
                                        <div className="font-medium text-ink text-sm">{subtype.label}</div>
                                        <div className="text-xs text-espresso/60">{subtype.description}</div>
                                      </div>
                                    </label>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-ink mb-3">
                                  Which experience level?
                                </label>
                                <div className="space-y-2">
                                  {[
                                    { value: "essential", label: "Essential", duration: "1-2 hours", description: "Single location, casual & authentic" },
                                    { value: "signature", label: "Signature", duration: "2-3 hours", description: "Multiple locations, outfit changes" },
                                    { value: "cinematic", label: "Cinematic Adventure", duration: "Half/Full day", description: "Epic locations, multiple scenes, custom experience" }
                                  ].map((tier) => (
                                    <label
                                      key={tier.value}
                                      className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${
                                        formData.sessionTier === tier.value
                                          ? 'border-rose-wax-red bg-rose-wax-red/5'
                                          : 'border-coffee/20 hover:border-rose-wax-red/20'
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        name="sessionTier"
                                        value={tier.value}
                                        checked={formData.sessionTier === tier.value}
                                        onChange={(e) => updateField('sessionTier', e.target.value)}
                                        className="mr-3 mt-0.5"
                                      />
                                      <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                          <div className="font-medium text-ink text-sm">{tier.label}</div>
                                          <div className="text-xs text-rose-wax-red font-medium">{tier.duration}</div>
                                        </div>
                                        <div className="text-xs text-espresso/60">{tier.description}</div>
                                      </div>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Partner Names with Pronouns */}
                    <div className="space-y-6">
                      {/* Partner 1 */}
                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Partner 1 Name *
                        </label>

                        {/* Show compact answer if complete */}
                        {formData.partner1Name && formData.partner1Pronouns && (
                          <div className="mb-3">
                            <CompactAnswer
                              label="Partner 1"
                              value={`${formData.partner1Name} (${formData.partner1Pronouns})`}
                            />
                          </div>
                        )}

                        <div className="space-y-3">
                          <input
                            type="text"
                            value={formData.partner1Name}
                            onChange={(e) => updateField('partner1Name', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors ${
                              errors.partner1Name ? 'border-red-500' : 'border-coffee/20'
                            }`}
                            placeholder="Your name"
                          />
                          {errors.partner1Name && (
                            <p className="text-sm text-red-500 mt-1">{errors.partner1Name}</p>
                          )}

                          {/* Pronouns dropdown - appears after name is entered */}
                          <AnimatePresence>
                            {formData.partner1Name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <select
                                  value={formData.partner1Pronouns}
                                  onChange={(e) => updateField('partner1Pronouns', e.target.value)}
                                  className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors bg-white"
                                >
                                  <option value="">Select pronouns (optional)</option>
                                  <option value="she/her">she/her</option>
                                  <option value="he/him">he/him</option>
                                  <option value="they/them">they/them</option>
                                  <option value="prefer-not-to-say">Prefer not to say</option>
                                </select>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Partner 2 */}
                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Partner 2 Name *
                        </label>

                        {/* Show compact answer if complete */}
                        {formData.partner2Name && formData.partner2Pronouns && (
                          <div className="mb-3">
                            <CompactAnswer
                              label="Partner 2"
                              value={`${formData.partner2Name} (${formData.partner2Pronouns})`}
                            />
                          </div>
                        )}

                        <div className="space-y-3">
                          <input
                            type="text"
                            value={formData.partner2Name}
                            onChange={(e) => updateField('partner2Name', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors ${
                              errors.partner2Name ? 'border-red-500' : 'border-coffee/20'
                            }`}
                            placeholder="Partner's name"
                          />
                          {errors.partner2Name && (
                            <p className="text-sm text-red-500 mt-1">{errors.partner2Name}</p>
                          )}

                          {/* Pronouns dropdown - appears after name is entered */}
                          <AnimatePresence>
                            {formData.partner2Name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <select
                                  value={formData.partner2Pronouns}
                                  onChange={(e) => updateField('partner2Pronouns', e.target.value)}
                                  className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors bg-white"
                                >
                                  <option value="">Select pronouns (optional)</option>
                                  <option value="she/her">she/her</option>
                                  <option value="he/him">he/him</option>
                                  <option value="they/them">they/them</option>
                                  <option value="prefer-not-to-say">Prefer not to say</option>
                                </select>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors ${
                            errors.email ? 'border-red-500' : 'border-coffee/20'
                          }`}
                          placeholder="you@email.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          {formData.eventType === "engagement" ? "Session Date" :
                           formData.eventType === "anniversary" ? "Anniversary Date" :
                           "Wedding/Event Date"} *
                        </label>
                        <input
                          type="date"
                          value={formData.weddingDate}
                          onChange={(e) => updateField('weddingDate', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors ${
                            errors.weddingDate ? 'border-red-500' : 'border-coffee/20'
                          }`}
                        />
                        {errors.weddingDate && (
                          <p className="text-sm text-red-500 mt-1">{errors.weddingDate}</p>
                        )}
                      </div>

                      {formData.eventType !== "engagement" && (
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Guest Count
                          </label>
                          <select
                            value={formData.guestCount}
                            onChange={(e) => updateField('guestCount', e.target.value)}
                            className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors"
                          >
                            <option value="">Select guest count</option>
                            <option value="intimate">Intimate (Under 50)</option>
                            <option value="small">Small (50-100)</option>
                            <option value="medium">Medium (100-200)</option>
                            <option value="large">Large (200+)</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">
                        Location/Venue *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => updateField('location', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors ${
                          errors.location ? 'border-red-500' : 'border-coffee/20'
                        }`}
                        placeholder="e.g., Napa Valley, CA or The Grand Hotel"
                      />
                      {errors.location && (
                        <p className="text-sm text-red-500 mt-1">{errors.location}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Vision & Style */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-ink mb-2">
                        Vision & Style
                      </h2>
                      <p className="text-espresso/70">
                        Help us understand the aesthetic and feel you're envisioning.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        Cultural/Religious Tradition *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: "catholic", label: "Catholic/Christian" },
                          { value: "jewish", label: "Jewish" },
                          { value: "hindu", label: "Hindu/Indian" },
                          { value: "muslim", label: "Muslim/Islamic" },
                          { value: "korean", label: "Korean" },
                          { value: "chinese", label: "Chinese" },
                          { value: "filipino", label: "Filipino" },
                          { value: "multicultural", label: "Multicultural/Interfaith" },
                          { value: "other", label: "Other" }
                        ].map((tradition) => (
                          <label
                            key={tradition.value}
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.tradition === tradition.value
                                ? 'border-rose-wax-red bg-rose-wax-red/5'
                                : 'border-coffee/20 hover:border-rose-wax-red/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="tradition"
                              value={tradition.value}
                              checked={formData.tradition === tradition.value}
                              onChange={(e) => updateField('tradition', e.target.value)}
                              className="mr-3"
                            />
                            <span className="text-ink">{tradition.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.tradition && (
                        <p className="text-sm text-red-500 mt-2">{errors.tradition}</p>
                      )}

                      {formData.tradition === "other" && (
                        <div className="mt-4">
                          <input
                            type="text"
                            value={formData.traditionOther}
                            onChange={(e) => updateField('traditionOther', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors ${
                              errors.traditionOther ? 'border-red-500' : 'border-coffee/20'
                            }`}
                            placeholder="Please describe your tradition"
                          />
                          {errors.traditionOther && (
                            <p className="text-sm text-red-500 mt-1">{errors.traditionOther}</p>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        Film Style *
                      </label>
                      <div className="space-y-3">
                        {[
                          { value: "cinematic", label: "Cinematic & Artistic", description: "Dreamy, emotive, film-like" },
                          { value: "documentary", label: "Documentary Style", description: "Authentic, storytelling, natural" },
                          { value: "romantic", label: "Romantic & Timeless", description: "Classic, elegant, refined" },
                          { value: "energetic", label: "Energetic & Fun", description: "Dynamic, lively, vibrant" }
                        ].map((style) => (
                          <label
                            key={style.value}
                            className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.filmStyle === style.value
                                ? 'border-rose-wax-red bg-rose-wax-red/5'
                                : 'border-coffee/20 hover:border-rose-wax-red/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="filmStyle"
                              value={style.value}
                              checked={formData.filmStyle === style.value}
                              onChange={(e) => updateField('filmStyle', e.target.value)}
                              className="mr-3 mt-1"
                            />
                            <div>
                              <div className="font-medium text-ink">{style.label}</div>
                              <div className="text-sm text-espresso/60">{style.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.filmStyle && (
                        <p className="text-sm text-red-500 mt-2">{errors.filmStyle}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: What You're Looking For */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-ink mb-2">
                        What You're Looking For
                      </h2>
                      <p className="text-espresso/70">
                        Select the deliverables and investment range that works for you.
                      </p>
                    </div>

                    {/* Summary bubbles if everything is answered */}
                    {formData.deliverables.length > 0 && formData.budgetRange && (
                      <div className="bg-rose-wax-red/5 border border-rose-wax-red/20 rounded-lg p-6">
                        <h3 className="text-sm font-semibold text-ink mb-3">Your Selection Summary</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-coffee/60 mb-2">Deliverables:</p>
                            <div className="flex flex-wrap gap-2">
                              {formData.deliverables.map((id) => {
                                const deliverableNames: Record<string, string> = {
                                  highlight: "Highlight Film",
                                  ceremony: "Full Ceremony",
                                  reception: "Full Reception",
                                  teaser: "Social Teaser",
                                  documentary: "Documentary Edit",
                                  raw: "Raw Footage"
                                };
                                return (
                                  <CompactAnswer
                                    key={id}
                                    label=""
                                    value={deliverableNames[id]}
                                    icon={
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    }
                                  />
                                );
                              })}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-coffee/60 mb-2">Investment Range:</p>
                            <CompactAnswer
                              label=""
                              value={
                                formData.budgetRange === "under-3k" ? "Under $3,000" :
                                formData.budgetRange === "3k-5k" ? "$3,000 - $5,000" :
                                formData.budgetRange === "5k-8k" ? "$5,000 - $8,000" : "$8,000+"
                              }
                              icon={
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        Deliverables * (Select all that apply)
                      </label>
                      <div className="space-y-3">
                        {[
                          { id: "highlight", name: "Highlight Film", duration: "5-7 minutes" },
                          { id: "ceremony", name: "Full Ceremony Edit", duration: "20-30 minutes" },
                          { id: "reception", name: "Full Reception Edit", duration: "30-60 minutes" },
                          { id: "teaser", name: "Social Media Teaser", duration: "60-90 seconds" },
                          { id: "documentary", name: "Documentary Edit", duration: "45-90 minutes" },
                          { id: "raw", name: "Raw Footage Files", duration: "All clips" }
                        ].map((deliverable) => (
                          <label
                            key={deliverable.id}
                            className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.deliverables.includes(deliverable.id)
                                ? 'border-rose-wax-red bg-rose-wax-red/5'
                                : 'border-coffee/20 hover:border-rose-wax-red/30'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.deliverables.includes(deliverable.id)}
                              onChange={() => toggleDeliverable(deliverable.id)}
                              className="mr-3 mt-1"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-ink">{deliverable.name}</div>
                              <div className="text-sm text-espresso/60">{deliverable.duration}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.deliverables && (
                        <p className="text-sm text-red-500 mt-2">{errors.deliverables}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        Investment Range *
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { value: "under-3k", label: "Under $3,000" },
                          { value: "3k-5k", label: "$3,000 - $5,000" },
                          { value: "5k-8k", label: "$5,000 - $8,000" },
                          { value: "8k-plus", label: "$8,000+" }
                        ].map((budget) => (
                          <label
                            key={budget.value}
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.budgetRange === budget.value
                                ? 'border-rose-wax-red bg-rose-wax-red/5'
                                : 'border-coffee/20 hover:border-rose-wax-red/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="budgetRange"
                              value={budget.value}
                              checked={formData.budgetRange === budget.value}
                              onChange={(e) => updateField('budgetRange', e.target.value)}
                              className="mr-3"
                            />
                            <span className="text-ink font-medium">{budget.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.budgetRange && (
                        <p className="text-sm text-red-500 mt-2">{errors.budgetRange}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Your Story (Optional) */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-ink mb-2">
                        Your Story
                      </h2>
                      <p className="text-espresso/70">
                        Optional: Share more about your love story to help us understand what makes your relationship special.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">
                        How did you meet?
                      </label>
                      <textarea
                        value={formData.howYouMet}
                        onChange={(e) => updateField('howYouMet', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors resize-none"
                        placeholder="Tell us your love story..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">
                        Anything else you'd like us to know?
                      </label>
                      <textarea
                        value={formData.additionalNotes}
                        onChange={(e) => updateField('additionalNotes', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-coffee/20 rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors resize-none"
                        placeholder="Special moments you want captured, family dynamics, cultural details, inspiration..."
                      />
                    </div>

                    <div className="bg-warm-sand/20 border border-coffee/10 rounded-lg p-6">
                      <p className="text-sm text-espresso/70 italic flex items-start gap-2">
                        <svg className="w-4 h-4 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span>Tip: Feel free to skip this section and come back to it later. You can always share more details during our consultation call!</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 5: Next Steps */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-ink mb-2">
                        Almost Done!
                      </h2>
                      <p className="text-espresso/70">
                        Just a couple more questions to help us connect with you.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        How did you hear about us? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Instagram",
                          "Google Search",
                          "Friend/Family Referral",
                          "Wedding Planner",
                          "Venue Recommendation",
                          "Other"
                        ].map((source) => (
                          <label
                            key={source}
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.howDidYouHear === source
                                ? 'border-rose-wax-red bg-rose-wax-red/5'
                                : 'border-coffee/20 hover:border-rose-wax-red/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="howDidYouHear"
                              value={source}
                              checked={formData.howDidYouHear === source}
                              onChange={(e) => updateField('howDidYouHear', e.target.value)}
                              className="mr-3"
                            />
                            <span className="text-ink">{source}</span>
                          </label>
                        ))}
                      </div>
                      {errors.howDidYouHear && (
                        <p className="text-sm text-red-500 mt-2">{errors.howDidYouHear}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        When are you hoping to book?
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { value: "asap", label: "As soon as possible" },
                          { value: "1-month", label: "Within 1 month" },
                          { value: "1-3-months", label: "1-3 months" },
                          { value: "3-plus-months", label: "3+ months" },
                          { value: "just-browsing", label: "Just browsing for now" }
                        ].map((timeline) => (
                          <label
                            key={timeline.value}
                            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.bookingTimeline === timeline.value
                                ? 'border-rose-wax-red bg-rose-wax-red/5'
                                : 'border-coffee/20 hover:border-rose-wax-red/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="bookingTimeline"
                              value={timeline.value}
                              checked={formData.bookingTimeline === timeline.value}
                              onChange={(e) => updateField('bookingTimeline', e.target.value)}
                              className="mr-3"
                            />
                            <span className="text-ink">{timeline.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-rose-wax-red/5 border border-rose-wax-red/20 rounded-lg p-6">
                      <h3 className="font-semibold text-ink mb-2">What happens next?</h3>
                      <ul className="space-y-2 text-sm text-espresso/80">
                        <li className="flex items-start">
                          <span className="text-rose-wax-red mr-2">•</span>
                          We'll review your information within 24-48 hours
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-wax-red mr-2">•</span>
                          You'll receive a personalized proposal with pricing and availability
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-wax-red mr-2">•</span>
                          We'll schedule a call to discuss your vision and answer questions
                        </li>
                      </ul>
                    </div>

                    {/* CAPTCHA Verification */}
                    <div>
                      <label className="block text-sm font-medium text-ink mb-3">
                        Verify you're human *
                      </label>
                      <Turnstile
                        onVerify={(token) => {
                          setTurnstileToken(token);
                          // Clear CAPTCHA error if exists
                          if (errors.captcha) {
                            setErrors(prev => {
                              const newErrors = { ...prev };
                              delete newErrors.captcha;
                              return newErrors;
                            });
                          }
                        }}
                        onError={() => {
                          setTurnstileToken("");
                          setErrors(prev => ({ ...prev, captcha: "CAPTCHA verification failed. Please try again." }));
                        }}
                        onExpire={() => {
                          setTurnstileToken("");
                          setErrors(prev => ({ ...prev, captcha: "CAPTCHA expired. Please verify again." }));
                        }}
                      />
                      {errors.captcha && (
                        <p className="text-sm text-red-500 mt-2">{errors.captcha}</p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between gap-4">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  currentStep === 1
                    ? 'opacity-0 pointer-events-none'
                    : 'border-2 border-coffee/20 text-ink hover:border-rose-wax-red/50 hover:bg-rose-wax-red/5'
                }`}
              >
                ← Back
              </button>

              <div className="flex items-center gap-3">
                {[...Array(TOTAL_STEPS)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index + 1 === currentStep
                        ? 'w-8 bg-rose-wax-red'
                        : index + 1 < currentStep
                        ? 'w-2 bg-rose-wax-red/50'
                        : 'w-2 bg-coffee/20'
                    }`}
                  />
                ))}
              </div>

              {currentStep < TOTAL_STEPS ? (
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-rose-wax-red text-white rounded-full font-semibold hover:bg-rose-wax-red/90 hover:shadow-lg transition-all hover:scale-105"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-rose-wax-red text-white rounded-full font-semibold hover:bg-rose-wax-red/90 hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
