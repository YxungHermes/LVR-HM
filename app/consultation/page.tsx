"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

// Types
interface AdditionalPartner {
  name: string;
  pronouns: string;
}

interface FormData {
  // Section 1: About Your Celebration
  partner1Name: string;
  partner1Pronouns: string;
  partner2Name: string;
  partner2Pronouns: string;
  additionalPartners: AdditionalPartner[];
  email: string;
  phone: string;
  weddingDate: string;
  venueName: string;
  location: string;
  locationDetails: string; // For adventure sessions with multiple locations
  eventType: string;
  adventureTier: string; // Mini, Classic, or Premium for adventure sessions
  isMultiDay: boolean;
  numberOfDays: string;
  guestCount: string;

  // Section 2: Your Vision & Style
  tradition: string;
  traditionOther: string;
  filmStyle: string;
  keyMoments: string[];

  // Section 3: What You're Looking For
  deliverables: string[];
  budgetRange: string;
  deliveryTimeline: string;

  // Section 4: Tell Us Your Story (Optional)
  howYouMet: string;
  inspirationLinks: string;
  additionalNotes: string;

  // Section 5: Next Steps
  howDidYouHear: string;
  bookingTimeline: string;
  contactPreference: string;
}

interface AccordionSectionProps {
  number: string;
  title: string;
  isOpen: boolean;
  isCompleted: boolean;
  hasError?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function AccordionSection({ number, title, isOpen, isCompleted, hasError, onClick, children }: AccordionSectionProps) {
  return (
    <div className={`border-b ${hasError && !isCompleted ? 'border-l-4 border-l-red-500 border-b-coffee/10' : 'border-coffee/10'}`}>
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between py-6 px-6 text-left hover:bg-cream/50 transition-colors duration-200 group ${hasError && !isCompleted ? 'bg-red-50/30' : ''}`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 flex-1">
          {isCompleted ? (
            <div className="w-6 h-6 rounded-full bg-rose-wax-red flex items-center justify-center flex-shrink-0">
              <Check size={16} className="text-white" strokeWidth={3} />
            </div>
          ) : (
            <span className="text-sm text-coffee/50 font-mono w-6 text-center flex-shrink-0">{number}</span>
          )}
          <h3 className="text-lg md:text-xl font-semibold text-ink group-hover:text-rose-wax-red transition-colors duration-200">
            {title}
          </h3>
        </div>
        <ChevronDown
          size={24}
          className={`text-coffee/40 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-8 pt-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default function ConsultationPage() {
  const router = useRouter();
  const [openSection, setOpenSection] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [sectionsWithErrors, setSectionsWithErrors] = useState<Set<number>>(new Set());

  const [formData, setFormData] = useState<FormData>({
    partner1Name: "",
    partner1Pronouns: "",
    partner2Name: "",
    partner2Pronouns: "",
    additionalPartners: [],
    email: "",
    phone: "",
    weddingDate: "",
    venueName: "",
    location: "",
    locationDetails: "",
    eventType: "",
    adventureTier: "",
    isMultiDay: false,
    numberOfDays: "",
    guestCount: "",
    tradition: "",
    traditionOther: "",
    filmStyle: "",
    keyMoments: [],
    deliverables: [],
    budgetRange: "",
    deliveryTimeline: "",
    howYouMet: "",
    inspirationLinks: "",
    additionalNotes: "",
    howDidYouHear: "",
    bookingTimeline: "",
    contactPreference: "email"
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: 'keyMoments' | 'deliverables', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');

    // Format based on length
    if (phoneNumber.length === 0) return '';
    if (phoneNumber.length <= 3) return `(${phoneNumber}`;
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    updateField('phone', formatted);
  };

  // Additional partner management
  const addPartner = () => {
    setFormData(prev => ({
      ...prev,
      additionalPartners: [...prev.additionalPartners, { name: '', pronouns: '' }]
    }));
  };

  const removePartner = (index: number) => {
    setFormData(prev => ({
      ...prev,
      additionalPartners: prev.additionalPartners.filter((_, i) => i !== index)
    }));
  };

  const updateAdditionalPartner = (index: number, field: 'name' | 'pronouns', value: string) => {
    setFormData(prev => ({
      ...prev,
      additionalPartners: prev.additionalPartners.map((partner, i) =>
        i === index ? { ...partner, [field]: value } : partner
      )
    }));
  };

  // Toggle section open/close - Allow any section to be opened
  const toggleSection = (sectionIndex: number) => {
    setOpenSection(prevSection => prevSection === sectionIndex ? -1 : sectionIndex);
  };

  // Check if section is completed
  const isSectionCompleted = (sectionIndex: number): boolean => {
    switch (sectionIndex) {
      case 0: // About Your Celebration
        return !!(formData.partner1Name && formData.partner2Name && formData.email && formData.weddingDate && formData.location);
      case 1: // Your Vision & Style
        return !!(formData.tradition && formData.filmStyle);
      case 2: // What You're Looking For
        return !!(formData.deliverables.length > 0 && formData.budgetRange);
      case 3: // Tell Us Your Story - optional
        return !!(formData.howYouMet || formData.inspirationLinks || formData.additionalNotes);
      case 4: // Next Steps
        return !!(formData.howDidYouHear);
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setValidationErrors([]);
    const errorSections = new Set<number>();

    // Validate required sections
    const errors: string[] = [];
    let firstIncompleteSection: number | null = null;

    // Section 0: About Your Celebration
    if (!formData.partner1Name || !formData.partner2Name) {
      errors.push("Please enter both partner names in 'About Your Celebration'");
      errorSections.add(0);
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    if (!formData.email) {
      errors.push("Please enter your email address");
      errorSections.add(0);
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push("Please enter a valid email address");
      errorSections.add(0);
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    if (!formData.weddingDate) {
      errors.push("Please enter your wedding date");
      errorSections.add(0);
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    if (!formData.location) {
      errors.push("Please enter your wedding location");
      errorSections.add(0);
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }

    // Section 1: Your Vision & Style
    if (!formData.tradition) {
      errors.push("Please select a tradition/cultural context");
      errorSections.add(1);
      if (firstIncompleteSection === null) firstIncompleteSection = 1;
    }
    if (formData.tradition === "other" && !formData.traditionOther) {
      errors.push("Please describe your tradition");
      errorSections.add(1);
      if (firstIncompleteSection === null) firstIncompleteSection = 1;
    }
    if (!formData.filmStyle) {
      errors.push("Please select a film style");
      errorSections.add(1);
      if (firstIncompleteSection === null) firstIncompleteSection = 1;
    }

    // Section 2: What You're Looking For
    if (formData.deliverables.length === 0) {
      errors.push("Please select at least one deliverable");
      errorSections.add(2);
      if (firstIncompleteSection === null) firstIncompleteSection = 2;
    }
    if (!formData.budgetRange) {
      errors.push("Please select a budget range");
      errorSections.add(2);
      if (firstIncompleteSection === null) firstIncompleteSection = 2;
    }

    // Section 4: Next Steps
    if (!formData.howDidYouHear) {
      errors.push("Please let us know how you heard about us");
      errorSections.add(4);
      if (firstIncompleteSection === null) firstIncompleteSection = 4;
    }

    // If there are errors, show them and open the first incomplete section
    if (errors.length > 0) {
      setValidationErrors(errors);
      setSectionsWithErrors(errorSections);
      if (firstIncompleteSection !== null) {
        setOpenSection(firstIncompleteSection);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Clear error sections if validation passed
    setSectionsWithErrors(new Set());

    // All validation passed - submit the form
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success - redirect to thank you page
        router.push("/consultation/success");
      } else {
        console.error("Submission error:", result);
        alert(
          result.error ||
          "There was an issue submitting your request. Please try again or contact us directly."
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "There was a network error. Please check your connection and try again, or contact us directly."
      );
      setIsSubmitting(false);
    }
  };

  const keyMoments = [
    "Getting Ready",
    "First Look",
    "Ceremony & Vows",
    "Family Portraits",
    "Couple Portraits",
    "Reception Entrance",
    "First Dance",
    "Parent Dances",
    "Toasts & Speeches",
    "Cultural Traditions",
    "Dancing & Celebration",
    "Grand Exit"
  ];

  const deliverables = [
    { id: "highlight", name: "Highlight Film", duration: "5-7 minutes", description: "Your love story set to music" },
    { id: "ceremony", name: "Full Ceremony Edit", duration: "20-30 minutes", description: "Complete ceremony coverage" },
    { id: "reception", name: "Full Reception Edit", duration: "30-60 minutes", description: "All the big reception moments" },
    { id: "teaser", name: "Social Media Teaser", duration: "60-90 seconds", description: "Perfect for sharing" },
    { id: "documentary", name: "Documentary Edit", duration: "45-90 minutes", description: "Full day story" },
    { id: "raw", name: "Raw Footage Files", duration: "All clips", description: "Every clip we capture" },
    // Adventure Session-specific options (Premium only)
    { id: "cinematic-storytelling", name: "Cinematic Storytelling", duration: "Premium only", description: "Documentary-style filming with narrative structure", premiumOnly: true },
    { id: "voice-recording", name: "Voice & Story Recording", duration: "Premium only", description: "Audio interviews woven into your film", premiumOnly: true }
  ];

  const traditions = [
    { value: "western", label: "Western/Non-denominational" },
    { value: "catholic", label: "Catholic/Christian" },
    { value: "jewish", label: "Jewish" },
    { value: "hindu", label: "Hindu" },
    { value: "muslim", label: "Muslim" },
    { value: "south-asian", label: "South Asian" },
    { value: "east-asian", label: "East Asian" },
    { value: "multicultural", label: "Multicultural/Interfaith" },
    { value: "other", label: "Other" }
  ];

  return (
    <>
      <Header settled hideCta />
      <main className="bg-cream">
        {/* Page Header */}
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Request Your Custom Proposal
              </h1>
              <p className="text-lg md:text-xl text-espresso/80 mb-4 leading-relaxed max-w-3xl mx-auto">
                Tell us about your celebration and vision. We'll send you a personalized proposal
                with pricing and package options within 24 hours.
              </p>
              <p className="text-sm text-coffee/60">
                Takes about 5-7 minutes
              </p>
            </motion.div>
          </div>
        </section>

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <section className="px-6 pb-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-red-800 font-semibold mb-2">
                      Please complete all required fields
                    </h3>
                    <ul className="space-y-1">
                      {validationErrors.map((error, index) => (
                        <li key={index} className="text-sm text-red-700">
                          • {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setValidationErrors([])}
                    className="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors"
                    aria-label="Dismiss errors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Form Section */}
        <section className="px-6 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* LEFT: Form Sections */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-coffee/5">

                  {/* Section 1: About Your Celebration */}
                  <AccordionSection
                    number="/01"
                    title="About Your Celebration"
                    isOpen={openSection === 0}
                    isCompleted={isSectionCompleted(0)}
                    hasError={sectionsWithErrors.has(0)}
                    onClick={() => toggleSection(0)}
                  >
                    <div className="space-y-6">
                      {/* Type of Celebration - Moved to top */}
                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Type of Celebration
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => updateField('eventType', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                        >
                          <option value="">Select type...</option>
                          <option value="elopement">Elopement</option>
                          <option value="intimate">Intimate Wedding</option>
                          <option value="full">Full Wedding</option>
                          <option value="large">Large Celebration</option>
                          <option value="destination">Destination Wedding</option>
                          <option value="adventure">Adventure Sessions & Stories (Couples)</option>
                        </select>
                      </div>

                      {/* Adventure Tier Selection - Only shown for adventure sessions */}
                      {formData.eventType === 'adventure' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.4 }}
                        >
                          <label className="block text-sm font-medium text-ink mb-3">
                            Choose Your Session Package *
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* The Social Tier */}
                            <button
                              type="button"
                              onClick={() => updateField('adventureTier', 'social')}
                              className={`p-4 rounded-lg border-2 text-left transition-all relative ${
                                formData.adventureTier === 'social'
                                  ? 'border-rose-wax-red bg-rose-wax-red/5'
                                  : 'border-coffee/20 hover:border-coffee/40'
                              }`}
                            >
                              <div className="absolute -top-2 right-2 bg-rose-wax-red text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase">
                                Most Popular
                              </div>
                              <div className="font-semibold text-ink mb-1">The Social</div>
                              <div className="text-2xl font-bold text-rose-wax-red mb-1">$750</div>
                              <div className="text-xs text-espresso/70">Up to 2 hours • 1-min film</div>
                              <div className="text-xs text-espresso/70 mt-1">Social media ready</div>
                            </button>

                            {/* The Story Tier */}
                            <button
                              type="button"
                              onClick={() => updateField('adventureTier', 'story')}
                              className={`p-4 rounded-lg border-2 text-left transition-all ${
                                formData.adventureTier === 'story'
                                  ? 'border-rose-wax-red bg-rose-wax-red/5'
                                  : 'border-coffee/20 hover:border-coffee/40'
                              }`}
                            >
                              <div className="font-semibold text-ink mb-1">The Story</div>
                              <div className="text-2xl font-bold text-rose-wax-red mb-1">$1,200</div>
                              <div className="text-xs text-espresso/70">3 hours • 2-3 min film</div>
                              <div className="text-xs text-espresso/70 mt-1">Up to 2 locations</div>
                            </button>

                            {/* The Signature Tier */}
                            <button
                              type="button"
                              onClick={() => updateField('adventureTier', 'signature')}
                              className={`p-4 rounded-lg border-2 text-left transition-all ${
                                formData.adventureTier === 'signature'
                                  ? 'border-rose-wax-red bg-rose-wax-red/5'
                                  : 'border-coffee/20 hover:border-coffee/40'
                              }`}
                            >
                              <div className="font-semibold text-ink mb-1">The Signature</div>
                              <div className="text-2xl font-bold text-rose-wax-red mb-1">$2,000</div>
                              <div className="text-xs text-espresso/70">4-5 hours • 3-5 min film</div>
                              <div className="text-xs text-espresso/70 mt-1">Full storytelling + audio</div>
                            </button>
                          </div>
                          <p className="text-xs text-espresso/60 mt-2">
                            Different features available based on package selected
                          </p>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Partner 1 Name *
                          </label>
                          <input
                            type="text"
                            value={formData.partner1Name}
                            onChange={(e) => updateField('partner1Name', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="Your name"
                          />
                          <input
                            type="text"
                            value={formData.partner1Pronouns}
                            onChange={(e) => updateField('partner1Pronouns', e.target.value)}
                            className="mt-2 w-full px-4 py-2 text-sm rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="Pronouns (optional)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Partner 2 Name *
                          </label>
                          <input
                            type="text"
                            value={formData.partner2Name}
                            onChange={(e) => updateField('partner2Name', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="Partner's name"
                          />
                          <input
                            type="text"
                            value={formData.partner2Pronouns}
                            onChange={(e) => updateField('partner2Pronouns', e.target.value)}
                            className="mt-2 w-full px-4 py-2 text-sm rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="Pronouns (optional)"
                          />
                        </div>
                      </div>

                      {/* Additional Partners */}
                      {formData.additionalPartners.map((partner, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4 relative pt-4 border-t border-coffee/10"
                        >
                          <div>
                            <label className="block text-sm font-medium text-ink mb-2">
                              Partner {index + 3} Name
                            </label>
                            <input
                              type="text"
                              value={partner.name}
                              onChange={(e) => updateAdditionalPartner(index, 'name', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                              placeholder="Partner's name"
                            />
                            <input
                              type="text"
                              value={partner.pronouns}
                              onChange={(e) => updateAdditionalPartner(index, 'pronouns', e.target.value)}
                              className="mt-2 w-full px-4 py-2 text-sm rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                              placeholder="Pronouns (optional)"
                            />
                          </div>
                          <div className="flex items-start">
                            <button
                              type="button"
                              onClick={() => removePartner(index)}
                              className="mt-8 px-4 py-2 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Remove Partner {index + 3}
                            </button>
                          </div>
                        </motion.div>
                      ))}

                      {/* Add Partner Button */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={addPartner}
                          className="text-sm text-rose-wax-red hover:text-rose-wax-red/80 font-medium transition-colors flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Add another partner
                        </button>
                        <p className="text-xs text-espresso/60 mt-1">
                          For partnerships with 3+ people
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Email Address *
                          </label>
                          <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="you@email.com or you@email.com, partner@email.com"
                          />
                          <p className="text-xs text-espresso/60 mt-1">
                            Separate multiple emails with commas
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="(555) 123-4567"
                            maxLength={14}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          {formData.eventType === 'adventure' ? 'Session Date *' : 'Wedding Date *'}
                        </label>
                        <input
                          type="date"
                          value={formData.weddingDate}
                          onChange={(e) => updateField('weddingDate', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Location (City, State or Region) *
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => updateField('location', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          placeholder="e.g., Hudson Valley, NY"
                        />
                      </div>

                      {/* Venue Name - Hidden for adventure sessions */}
                      {formData.eventType !== 'adventure' && (
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Venue Name
                          </label>
                          <input
                            type="text"
                            value={formData.venueName}
                            onChange={(e) => updateField('venueName', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="If you have one"
                          />
                        </div>
                      )}

                      {/* Location Details for Adventure Sessions - The Story and The Signature only */}
                      {formData.eventType === 'adventure' && (formData.adventureTier === 'story' || formData.adventureTier === 'signature') && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <label className="block text-sm font-medium text-ink mb-2">
                            {formData.adventureTier === 'story' ? 'Location(s) — Up to 2' : 'Locations — Tell Us Your Vision'}
                          </label>
                          <p className="text-xs text-espresso/60 mb-3">
                            {formData.adventureTier === 'story'
                              ? 'Where would you like to film? You can choose up to 2 locations.'
                              : 'Describe the locations or activities you have in mind. Multiple locations or activity-based sessions welcome.'}
                          </p>
                          <textarea
                            value={formData.locationDetails}
                            onChange={(e) => updateField('locationDetails', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder={formData.adventureTier === 'story'
                              ? 'e.g., Central Park and Brooklyn Bridge'
                              : 'e.g., Starting at our apartment in Brooklyn, then sunset at Dumbo waterfront, ending with dinner in Manhattan'}
                            rows={3}
                          />
                        </motion.div>
                      )}

                      {/* Guest Count - Hidden for adventure sessions */}
                      {formData.eventType !== 'adventure' && (
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            How many guests are you expecting?
                          </label>
                          <p className="text-xs text-espresso/60 mb-3">
                            An estimate is fine - this helps us understand the scale of your celebration.
                          </p>
                          <input
                            type="text"
                            value={formData.guestCount}
                            onChange={(e) => updateField('guestCount', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="e.g., 75-100 guests"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">
                          Is this a multi-day celebration?
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.isMultiDay}
                            onChange={(e) => updateField('isMultiDay', e.target.checked)}
                            className="w-5 h-5 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                          />
                          <span className="text-sm text-ink">Yes, we're celebrating across multiple days</span>
                        </label>

                        {formData.isMultiDay && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-4"
                          >
                            <label className="block text-sm font-medium text-ink mb-2">
                              How many days total? (including the wedding day)
                            </label>
                            <input
                              type="number"
                              value={formData.numberOfDays || ""}
                              onChange={(e) => updateField('numberOfDays', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                              placeholder="e.g., 3"
                              min="2"
                              max="7"
                            />
                            <p className="text-xs text-espresso/60 mt-2">
                              For example, if you have a welcome dinner, wedding day, and farewell brunch, that's 3 days.
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 2: Your Vision & Style */}
                  <AccordionSection
                    number="/02"
                    title="Your Vision & Style"
                    isOpen={openSection === 1}
                    isCompleted={isSectionCompleted(1)}
                    hasError={sectionsWithErrors.has(1)}
                    onClick={() => toggleSection(1)}
                  >
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Tradition / Cultural Context *
                        </label>
                        <p className="text-xs text-espresso/60 mb-3">
                          This helps us plan coverage respectfully and understand your celebration.
                        </p>
                        <select
                          value={formData.tradition}
                          onChange={(e) => updateField('tradition', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                        >
                          <option value="">Select one...</option>
                          {traditions.map((trad) => (
                            <option key={trad.value} value={trad.value}>
                              {trad.label}
                            </option>
                          ))}
                        </select>

                        {formData.tradition === "other" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                          >
                            <input
                              type="text"
                              value={formData.traditionOther}
                              onChange={(e) => updateField('traditionOther', e.target.value)}
                              placeholder="Please describe your tradition"
                              className="mt-4 w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            />
                          </motion.div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">
                          What film style speaks to you most? *
                        </label>
                        <div className="space-y-3">
                          {[
                            { value: "cinematic", label: "Cinematic & Dramatic", description: "Bold, movie-like storytelling with emotional impact" },
                            { value: "romantic", label: "Romantic & Dreamy", description: "Soft, intimate, and timeless" },
                            { value: "documentary", label: "Documentary & Candid", description: "Natural, unposed moments as they unfold" },
                            { value: "editorial", label: "Editorial & Artistic", description: "Fashion-forward, curated aesthetic" },
                            { value: "energetic", label: "Bold & Energetic", description: "Dynamic, high-energy celebration" }
                          ].map((style) => (
                            <label key={style.value} className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-cream/50 transition-colors">
                              <input
                                type="radio"
                                name="filmStyle"
                                value={style.value}
                                checked={formData.filmStyle === style.value}
                                onChange={(e) => updateField('filmStyle', e.target.value)}
                                className="mt-1 w-4 h-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                              />
                              <div>
                                <div className="font-medium text-ink group-hover:text-rose-wax-red transition-colors">
                                  {style.label}
                                </div>
                                <div className="text-sm text-espresso/70">
                                  {style.description}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">
                          Key Moments You Care About
                        </label>
                        <p className="text-xs text-espresso/60 mb-4">
                          Select the moments that matter most to you (optional but helpful)
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {keyMoments.map((moment) => (
                            <label key={moment} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={formData.keyMoments.includes(moment)}
                                onChange={() => toggleArrayField('keyMoments', moment)}
                                className="w-5 h-5 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                              />
                              <span className="text-sm text-ink group-hover:text-rose-wax-red transition-colors">
                                {moment}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 3: What You're Looking For */}
                  <AccordionSection
                    number="/03"
                    title="What You're Looking For"
                    isOpen={openSection === 2}
                    isCompleted={isSectionCompleted(2)}
                    hasError={sectionsWithErrors.has(2)}
                    onClick={() => toggleSection(2)}
                  >
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">
                          What deliverables interest you? *
                        </label>
                        <p className="text-xs text-espresso/60 mb-4">
                          Select all that you're interested in. We'll include pricing for each in your proposal.
                        </p>
                        <div className="space-y-3">
                          {deliverables
                            .filter((deliverable) => {
                              // For adventure sessions, show only relevant options
                              if (formData.eventType === 'adventure') {
                                // Hide wedding-specific deliverables
                                const weddingOnly = ['ceremony', 'reception'];
                                if (weddingOnly.includes(deliverable.id)) return false;

                                // Only show premium options if The Signature tier is selected
                                if (deliverable.premiumOnly && formData.adventureTier !== 'signature') {
                                  return false;
                                }
                              } else {
                                // For weddings, hide adventure-specific premium options
                                if (deliverable.premiumOnly) return false;
                              }
                              return true;
                            })
                            .map((deliverable) => (
                            <label
                              key={deliverable.id}
                              className={`flex items-start gap-3 cursor-pointer group p-4 rounded-lg transition-colors border ${
                                deliverable.premiumOnly
                                  ? 'border-rose-wax-red/30 bg-rose-wax-red/5 hover:bg-rose-wax-red/10'
                                  : 'border-transparent hover:border-coffee/10 hover:bg-cream/50'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.deliverables.includes(deliverable.id)}
                                onChange={() => toggleArrayField('deliverables', deliverable.id)}
                                className="mt-1 w-5 h-5 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                              />
                              <div className="flex-1">
                                <div className="font-semibold text-ink group-hover:text-rose-wax-red transition-colors">
                                  {deliverable.name}
                                  {deliverable.premiumOnly && (
                                    <span className="ml-2 text-xs bg-rose-wax-red text-white px-2 py-0.5 rounded-full uppercase font-semibold">
                                      Premium
                                    </span>
                                  )}
                                  <span className="text-sm font-normal text-coffee/60 ml-2">
                                    ({deliverable.duration})
                                  </span>
                                </div>
                                <div className="text-sm text-espresso/70 mt-1">
                                  {deliverable.description}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Investment Range *
                        </label>
                        <p className="text-xs text-espresso/60 mb-3">
                          This helps us recommend the right package for your needs.
                        </p>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => updateField('budgetRange', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                        >
                          <option value="">Select a budget range</option>
                          <option value="2000-4000">$2,000 - $4,000</option>
                          <option value="4000-7000">$4,000 - $7,000</option>
                          <option value="7000-12000">$7,000 - $12,000</option>
                          <option value="12000-20000">$12,000 - $20,000</option>
                          <option value="20000+">$20,000+</option>
                          <option value="flexible">Flexible / Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">
                          When do you need your film delivered?
                        </label>
                        <div className="space-y-3">
                          {[
                            { value: "standard", label: "Standard (8-12 weeks)", description: "Best value, allows for careful editing" },
                            { value: "rush", label: "Rush (4-6 weeks)", description: "Additional fee applies" },
                            { value: "flexible", label: "Flexible", description: "We can discuss what works best" }
                          ].map((timeline) => (
                            <label key={timeline.value} className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-cream/50 transition-colors">
                              <input
                                type="radio"
                                name="deliveryTimeline"
                                value={timeline.value}
                                checked={formData.deliveryTimeline === timeline.value}
                                onChange={(e) => updateField('deliveryTimeline', e.target.value)}
                                className="mt-1 w-4 h-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                              />
                              <div>
                                <div className="font-medium text-ink group-hover:text-rose-wax-red transition-colors">
                                  {timeline.label}
                                </div>
                                <div className="text-sm text-espresso/70">
                                  {timeline.description}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 4: Tell Us Your Story */}
                  <AccordionSection
                    number="/04"
                    title="Tell Us Your Story"
                    isOpen={openSection === 3}
                    isCompleted={isSectionCompleted(3)}
                    hasError={sectionsWithErrors.has(3)}
                    onClick={() => toggleSection(3)}
                  >
                    <div className="space-y-6">
                      <p className="text-sm text-espresso/70">
                        This section is optional, but it helps us personalize your proposal and understand your vision!
                      </p>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          How did you two meet?
                        </label>
                        <textarea
                          value={formData.howYouMet}
                          onChange={(e) => updateField('howYouMet', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={4}
                          placeholder="We love knowing your story..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Inspiration Links
                        </label>
                        <p className="text-xs text-coffee/60 mb-2">
                          Pinterest boards, Instagram posts, YouTube videos, or other films you love
                        </p>
                        <textarea
                          value={formData.inspirationLinks}
                          onChange={(e) => updateField('inspirationLinks', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={3}
                          placeholder="Paste links here (one per line)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Anything else we should know?
                        </label>
                        <textarea
                          value={formData.additionalNotes}
                          onChange={(e) => updateField('additionalNotes', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={4}
                          placeholder="Special traditions, must-capture moments, questions for us..."
                        />
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 5: Next Steps */}
                  <AccordionSection
                    number="/05"
                    title="Next Steps"
                    isOpen={openSection === 4}
                    isCompleted={isSectionCompleted(4)}
                    hasError={sectionsWithErrors.has(4)}
                    onClick={() => toggleSection(4)}
                  >
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          How did you hear about us? *
                        </label>
                        <select
                          value={formData.howDidYouHear}
                          onChange={(e) => updateField('howDidYouHear', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                        >
                          <option value="">Select one...</option>
                          <option value="instagram">Instagram/Social Media</option>
                          <option value="google">Google Search</option>
                          <option value="planner">Wedding Planner/Vendor</option>
                          <option value="friend">Friend or Family Referral</option>
                          <option value="venue">Venue Recommendation</option>
                          <option value="theknot">The Knot/WeddingWire</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          When are you hoping to book your videographer?
                        </label>
                        <select
                          value={formData.bookingTimeline}
                          onChange={(e) => updateField('bookingTimeline', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                        >
                          <option value="">Select timeframe...</option>
                          <option value="asap">ASAP - date is coming up!</option>
                          <option value="1-2-weeks">Within 1-2 weeks</option>
                          <option value="2-4-weeks">Within 2-4 weeks</option>
                          <option value="1-2-months">Within 1-2 months</option>
                          <option value="researching">Still browsing/researching</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-4">
                          {['email', 'phone', 'either'].map((pref) => (
                            <label key={pref} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="contactPreference"
                                value={pref}
                                checked={formData.contactPreference === pref}
                                onChange={(e) => updateField('contactPreference', e.target.value)}
                                className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                              />
                              <span className="text-sm text-espresso capitalize">{pref}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionSection>
                </form>
              </div>

              {/* RIGHT: Sticky Summary Card */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <div className="bg-white rounded-lg shadow-lg border border-coffee/5 p-8">
                    <div className="mb-6 pb-6 border-b border-coffee/10">
                      <h2 className="font-serif text-2xl font-bold text-ink mb-2">
                        Your Request
                      </h2>
                      <p className="text-sm text-espresso/70">
                        We'll send you a custom proposal within 24 hours
                      </p>
                    </div>

                    <div className="space-y-6 mb-8">
                      {/* Your Celebration */}
                      {(formData.partner1Name || formData.partner2Name || formData.weddingDate || formData.location || formData.venueName) && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Your Celebration
                          </h3>
                          <div className="space-y-1 text-sm text-ink">
                            {formData.partner1Name && formData.partner2Name && (
                              <p className="font-medium">{formData.partner1Name} & {formData.partner2Name}</p>
                            )}
                            {formData.weddingDate && (
                              <p>{new Date(formData.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            )}
                            {formData.venueName && (
                              <p className="text-espresso/90">{formData.venueName}</p>
                            )}
                            {formData.location && <p className="text-espresso/70">{formData.location}</p>}
                            {formData.eventType && (
                              <p className="text-espresso/70">
                                {formData.eventType === 'elopement' && 'Elopement'}
                                {formData.eventType === 'intimate' && 'Intimate Wedding'}
                                {formData.eventType === 'full' && 'Full Wedding'}
                                {formData.eventType === 'large' && 'Large Celebration'}
                                {formData.eventType === 'destination' && 'Destination Wedding'}
                                {formData.eventType === 'adventure' && 'Couples Session'}
                                {formData.isMultiDay && formData.numberOfDays && ` • ${formData.numberOfDays} days`}
                              </p>
                            )}
                            {formData.eventType === 'adventure' && formData.adventureTier && (
                              <div className="mt-2 inline-block px-3 py-1.5 bg-rose-wax-red/10 border border-rose-wax-red/30 rounded-full">
                                <p className="text-xs font-semibold text-rose-wax-red uppercase tracking-wider">
                                  {formData.adventureTier === 'social' && 'The Social — $750'}
                                  {formData.adventureTier === 'story' && 'The Story — $1,200'}
                                  {formData.adventureTier === 'signature' && 'The Signature — $2,000'}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Film Style */}
                      {formData.filmStyle && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Film Style
                          </h3>
                          <p className="text-sm text-ink capitalize">
                            {formData.filmStyle.replace('-', ' ')} style
                          </p>
                        </div>
                      )}

                      {/* Key Moments */}
                      {formData.keyMoments.length > 0 && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Key Moments ({formData.keyMoments.length})
                          </h3>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                            {formData.keyMoments.map((moment) => (
                              <p key={moment} className="text-xs text-espresso/70">
                                • {moment}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Deliverables */}
                      {formData.deliverables.length > 0 && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Interested In
                          </h3>
                          <div className="space-y-1">
                            {formData.deliverables.map((id) => {
                              const deliverable = deliverables.find(d => d.id === id);
                              return deliverable ? (
                                <p key={id} className="text-sm text-espresso/70">• {deliverable.name}</p>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}

                      {/* Budget */}
                      {formData.budgetRange && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Investment Range
                          </h3>
                          <p className="text-sm text-ink">
                            {formData.budgetRange === 'flexible'
                              ? 'Flexible'
                              : formData.budgetRange.includes('+')
                                ? `$${formData.budgetRange.replace('+', '')}+`
                                : `$${formData.budgetRange.replace('-', ' - $')}`
                            }
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 p-4 bg-cream/50 rounded-lg">
                      <p className="text-xs text-coffee/70 mb-2">
                        Questions while filling this out?
                      </p>
                      <div className="space-y-1 text-sm">
                        <a href="mailto:contact@michael-andrade.com" className="block text-rose-wax-red hover:text-rose-wax-red/80 transition-colors">
                          contact@michael-andrade.com
                        </a>
                        <a href="tel:+13477747840" className="block text-rose-wax-red hover:text-rose-wax-red/80 transition-colors">
                          (347) 774-7840
                        </a>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full py-4 bg-rose-wax-red text-white font-semibold rounded-full hover:bg-rose-wax-red/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 uppercase tracking-wider text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        </span>
                      ) : (
                        'Send My Request'
                      )}
                    </button>
                    <p className="text-xs text-center text-coffee/60 mt-3">
                      We respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
