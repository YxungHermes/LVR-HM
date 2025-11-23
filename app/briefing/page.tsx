"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

// Types
interface FormData {
  // Section 1: Your Celebration
  partner1Name: string;
  partner2Name: string;
  email: string;
  phone: string;
  weddingDate: string;
  venueName: string;
  location: string;
  celebrationType: string;
  isMultiDay: boolean;
  numberOfDays: string;
  guestCount: string;
  weddingPlanner: string;

  // Timeline sharing
  hasTimeline: string; // 'yes', 'no', 'both'
  timelineLink: string;
  timelineNotes: string;

  // Section 2: Moments to Capture
  moments: string[];
  otherMoments: string;

  // Section 3: Your Film's Vibe
  filmStyle: string;
  musicVibeDescription: string;
  firstDanceSong: string;
  spotifyPlaylistUrl: string;
  appleMusicPlaylistUrl: string;

  // Section 4: Special Details
  culturalTraditions: string;
  familyDynamics: string;
  surpriseMoments: string;
  anythingElse: string;
  moodBoardLinks: string;
  inspirationNotes: string;

  // Section 5: What You'll Receive
  deliverables: string[];

  // Section 6: Timeline & Next Steps
  deliveryTimeline: string;
  bookingTimeline: string;
  howDidYouHear: string;
  questionsForUs: string;
}

interface AccordionSectionProps {
  number: string;
  title: string;
  isOpen: boolean;
  isCompleted: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function AccordionSection({ number, title, isOpen, isCompleted, onClick, children }: AccordionSectionProps) {
  return (
    <div className="border-b border-coffee/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 px-6 text-left hover:bg-cream/50 transition-colors duration-200 group"
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

export default function BriefingPage() {
  const [openSection, setOpenSection] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormData>({
    partner1Name: "",
    partner2Name: "",
    email: "",
    phone: "",
    weddingDate: "",
    venueName: "",
    location: "",
    celebrationType: "",
    isMultiDay: false,
    numberOfDays: "1",
    guestCount: "",
    weddingPlanner: "",
    hasTimeline: "",
    timelineLink: "",
    timelineNotes: "",
    moments: [],
    otherMoments: "",
    filmStyle: "",
    musicVibeDescription: "",
    firstDanceSong: "",
    spotifyPlaylistUrl: "",
    appleMusicPlaylistUrl: "",
    culturalTraditions: "",
    familyDynamics: "",
    surpriseMoments: "",
    anythingElse: "",
    moodBoardLinks: "",
    inspirationNotes: "",
    deliverables: [],
    deliveryTimeline: "",
    bookingTimeline: "",
    howDidYouHear: "",
    questionsForUs: ""
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: 'moments' | 'deliverables', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  // Toggle section open/close
  const toggleSection = (sectionIndex: number) => {
    setOpenSection(prevSection => prevSection === sectionIndex ? -1 : sectionIndex);
  };

  // Check if section is completed
  const isSectionCompleted = (sectionIndex: number): boolean => {
    switch (sectionIndex) {
      case 0: // Your Celebration
        return !!(formData.partner1Name && formData.partner2Name && formData.email && formData.weddingDate && formData.location);
      case 1: // Moments to Capture
        return formData.moments.length > 0;
      case 2: // Your Film's Vibe
        return !!formData.filmStyle;
      case 3: // Special Details - optional but show complete if any field filled
        return !!(formData.culturalTraditions || formData.familyDynamics || formData.surpriseMoments || formData.anythingElse);
      case 4: // What You'll Receive
        return formData.deliverables.length > 0;
      case 5: // Timeline & Next Steps
        return !!formData.deliveryTimeline;
      default:
        return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setValidationErrors([]);

    // Validate required sections
    const errors: string[] = [];
    let firstIncompleteSection: number | null = null;

    // Section 0: Your Celebration
    if (!formData.partner1Name || !formData.partner2Name) {
      errors.push("Please enter both partner names in 'Your Celebration'");
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    if (!formData.email) {
      errors.push("Please enter your email address in 'Your Celebration'");
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    // Basic email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push("Please enter a valid email address in 'Your Celebration'");
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    if (!formData.weddingDate) {
      errors.push("Please enter your wedding date in 'Your Celebration'");
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }
    if (!formData.location) {
      errors.push("Please enter your wedding location in 'Your Celebration'");
      if (firstIncompleteSection === null) firstIncompleteSection = 0;
    }

    // Section 1: Moments to Capture
    if (formData.moments.length === 0) {
      errors.push("Please select at least one moment to capture in 'Moments to Capture'");
      if (firstIncompleteSection === null) firstIncompleteSection = 1;
    }

    // Section 2: Your Film's Vibe
    if (!formData.filmStyle) {
      errors.push("Please select a film style in 'Your Film's Vibe'");
      if (firstIncompleteSection === null) firstIncompleteSection = 2;
    }

    // Section 4: What You'll Receive
    if (formData.deliverables.length === 0) {
      errors.push("Please select at least one deliverable in 'What You'll Receive'");
      if (firstIncompleteSection === null) firstIncompleteSection = 4;
    }

    // Section 5: Timeline & Next Steps
    if (!formData.deliveryTimeline) {
      errors.push("Please select a delivery timeline in 'Timeline & Next Steps'");
      if (firstIncompleteSection === null) firstIncompleteSection = 5;
    }

    // If there are errors, show them and open the first incomplete section
    if (errors.length > 0) {
      setValidationErrors(errors);
      if (firstIncompleteSection !== null) {
        setOpenSection(firstIncompleteSection);
      }
      // Scroll to error messages
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // All validation passed - submit the form
    // In production, send to your backend/email/CRM
    console.log('Form submitted:', formData);

    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const moments = [
    "Getting Ready",
    "First Look",
    "Ceremony",
    "Family Formals",
    "Wedding Party Portraits",
    "Couple Portraits",
    "Cocktail Hour",
    "Reception Entrance",
    "First Dance",
    "Parent Dances",
    "Toasts & Speeches",
    "Cake Cutting",
    "Bouquet/Garter Toss",
    "Send-off/Grand Exit"
  ];

  const deliverables = [
    { id: "highlight", name: "Highlight Film", duration: "5-7 minutes", description: "Your love story set to music. The perfect shareable film" },
    { id: "ceremony", name: "Full Ceremony Edit", duration: "15-30 minutes", description: "Complete ceremony coverage, fully edited" },
    { id: "reception", name: "Full Reception Edit", duration: "30-60 minutes", description: "All the big reception moments" },
    { id: "teaser", name: "Short Teaser/Trailer", duration: "60-90 seconds", description: "Perfect for social media" },
    { id: "documentary", name: "Documentary Edit", duration: "45-90 minutes", description: "Full day story from start to finish" },
    { id: "raw", name: "Raw Footage Files", duration: "All clips", description: "Every single clip we capture" }
  ];

  if (isSubmitted) {
    return (
      <>
        <Header settled hideCta />
        <main className="bg-cream min-h-screen pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full bg-rose-wax-red/10 flex items-center justify-center mx-auto mb-8">
                <Check size={40} className="text-rose-wax-red" strokeWidth={2.5} />
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
                Thank You, {formData.partner1Name} & {formData.partner2Name}!
              </h1>

              <p className="text-lg md:text-xl text-espresso/80 mb-8 leading-relaxed">
                We've received all your wedding details! We'll review everything and reach out
                2-3 weeks before your wedding to confirm final timeline and logistics.
              </p>

              <p className="text-base text-espresso/70 mb-10">
                In the meantime, feel free to reach out if you have any questions.
              </p>

              <p className="font-serif text-2xl text-ink italic">
                — Michael
              </p>

              <div className="mt-12 pt-12 border-t border-coffee/10">
                <p className="text-sm text-coffee/60 mb-4">Want to make changes?</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-rose-wax-red hover:text-rose-wax-red/80 font-medium transition-colors"
                >
                  Edit Your Submission
                </button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
                Your Wedding Film Planning Guide
              </h1>
              <p className="text-lg md:text-xl text-espresso/80 mb-4 leading-relaxed max-w-3xl mx-auto">
                Now that you're booked, let's dive into the details! These questions help us plan every aspect
                of your wedding day coverage to capture your celebration perfectly.
              </p>
              <p className="text-sm text-coffee/60 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-rose-wax-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Best filled out 60-90 days before your wedding • Takes about 15-20 minutes
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
                    <p className="text-sm text-red-600 mt-3">
                      We've opened the first incomplete section for you. Please fill in all required information before submitting.
                    </p>
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
                  {/* Section 1: Your Celebration */}
                  <AccordionSection
                    number="/01"
                    title="Your Celebration"
                    isOpen={openSection === 0}
                    isCompleted={isSectionCompleted(0)}
                    onClick={() => toggleSection(0)}
                  >
                    <div className="space-y-6">
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
                            placeholder="Sarah"
                            required
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
                            placeholder="James"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="sarah@email.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Wedding Date *
                        </label>
                        <input
                          type="date"
                          value={formData.weddingDate}
                          onChange={(e) => updateField('weddingDate', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Venue Name
                        </label>
                        <input
                          type="text"
                          value={formData.venueName}
                          onChange={(e) => updateField('venueName', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          placeholder="The Estate at Sunset Farm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Location (City, State) *
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => updateField('location', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          placeholder="Hudson Valley, NY"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Type of Celebration
                        </label>
                        <select
                          value={formData.celebrationType}
                          onChange={(e) => updateField('celebrationType', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                        >
                          <option value="">Select type...</option>
                          <option value="elopement">Elopement</option>
                          <option value="intimate">Intimate Gathering</option>
                          <option value="full">Full Wedding</option>
                          <option value="large">Large Celebration</option>
                          <option value="destination">Destination Wedding</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Guest Count (approximate)
                          </label>
                          <input
                            type="number"
                            value={formData.guestCount}
                            onChange={(e) => updateField('guestCount', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            placeholder="100"
                            min="2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            Number of Days
                          </label>
                          <div className="flex items-center gap-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.isMultiDay}
                                onChange={(e) => updateField('isMultiDay', e.target.checked)}
                                className="w-5 h-5 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                              />
                              <span className="text-sm text-ink">Multi-day event</span>
                            </label>
                            {formData.isMultiDay && (
                              <input
                                type="number"
                                value={formData.numberOfDays}
                                onChange={(e) => updateField('numberOfDays', e.target.value)}
                                className="w-24 px-3 py-2 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                                placeholder="2"
                                min="2"
                                max="7"
                              />
                            )}
                          </div>
                          <p className="text-xs text-coffee/60 mt-1">
                            Check if your celebration spans multiple days
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Wedding Planner/Coordinator
                        </label>
                        <input
                          type="text"
                          value={formData.weddingPlanner}
                          onChange={(e) => updateField('weddingPlanner', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          placeholder="Name or company (if you have one, helps us coordinate)"
                        />
                      </div>

                      {/* Timeline Sharing Section */}
                      <div className="pt-4 mt-4 border-t border-coffee/10">
                        <h4 className="text-base font-semibold text-ink mb-3">Your Wedding Day Timeline</h4>
                        <p className="text-sm text-espresso/70 mb-4">
                          Save time! If you already have a timeline from your planner, just share the link.
                          We'll extract all the details automatically.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-ink mb-3">
                              Do you have a wedding timeline already created?
                            </label>
                            <div className="space-y-2">
                              {[
                                { value: "yes", label: "Yes - I'll share a link or upload it" },
                                { value: "no", label: "No - I'll fill out the details manually" },
                                { value: "both", label: "I'll do both (share link + add key details)" }
                              ].map((option) => (
                                <label key={option.value} className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-cream/30 transition-colors">
                                  <input
                                    type="radio"
                                    name="hasTimeline"
                                    value={option.value}
                                    checked={formData.hasTimeline === option.value}
                                    onChange={(e) => updateField('hasTimeline', e.target.value)}
                                    className="mt-0.5 w-4 h-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                                  />
                                  <span className="text-sm text-ink">{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {(formData.hasTimeline === "yes" || formData.hasTimeline === "both") && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                              className="space-y-4 p-4 bg-warm-sand/10 rounded-lg border border-coffee/10"
                            >
                              <div>
                                <label className="block text-sm font-medium text-ink mb-2">
                                  Share Your Timeline Link or Upload
                                </label>
                                <p className="text-xs text-coffee/60 mb-3 flex items-center gap-2">
                                  <svg className="w-3.5 h-3.5 text-rose-wax-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                  </svg>
                                  Accepted: Google Docs/Sheets, Aisle Planner, HoneyBook, PDFs, Dropbox/Drive links
                                </p>
                                <input
                                  type="text"
                                  value={formData.timelineLink}
                                  onChange={(e) => updateField('timelineLink', e.target.value)}
                                  className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-white focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                                  placeholder="Paste link here (e.g., https://docs.google.com/...)"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-ink mb-2">
                                  Quick Notes or Highlights (optional)
                                </label>
                                <textarea
                                  value={formData.timelineNotes}
                                  onChange={(e) => updateField('timelineNotes', e.target.value)}
                                  className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-white focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                                  rows={3}
                                  placeholder="E.g., Ceremony at 4pm, golden hour portraits at 6pm..."
                                />
                              </div>
                            </motion.div>
                          )}

                          {formData.hasTimeline && formData.hasTimeline !== "yes" && (
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                              <p className="text-sm text-blue-800">
                                <strong>No timeline yet?</strong> No problem! We'll work with your planner closer to the date,
                                or you can fill this out later. Just make sure to provide key timing details in the form below.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 2: Moments to Capture */}
                  <AccordionSection
                    number="/02"
                    title="Moments to Capture"
                    isOpen={openSection === 1}
                    isCompleted={isSectionCompleted(1)}
                    onClick={() => toggleSection(1)}
                  >
                    <div className="space-y-6">
                      <p className="text-sm text-espresso/70">
                        Select all the moments you'd like included in your film. We'll make sure to capture everything that matters to you.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {moments.map((moment) => (
                          <label key={moment} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.moments.includes(moment)}
                              onChange={() => toggleArrayField('moments', moment)}
                              className="w-5 h-5 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                            />
                            <span className="text-sm text-ink group-hover:text-rose-wax-red transition-colors">
                              {moment}
                            </span>
                          </label>
                        ))}
                      </div>

                      <div className="pt-4">
                        <label className="flex items-center gap-3 cursor-pointer group mb-3">
                          <input
                            type="checkbox"
                            checked={formData.moments.includes('Other')}
                            onChange={() => toggleArrayField('moments', 'Other')}
                            className="w-5 h-5 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red focus:ring-offset-0 cursor-pointer"
                          />
                          <span className="text-sm text-ink group-hover:text-rose-wax-red transition-colors">
                            Other special moments
                          </span>
                        </label>

                        {formData.moments.includes('Other') && (
                          <textarea
                            value={formData.otherMoments}
                            onChange={(e) => updateField('otherMoments', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                            rows={4}
                            placeholder="Tell us about any other moments you want captured..."
                          />
                        )}
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 3: Your Film's Vibe */}
                  <AccordionSection
                    number="/03"
                    title="Your Film's Vibe"
                    isOpen={openSection === 2}
                    isCompleted={isSectionCompleted(2)}
                    onClick={() => toggleSection(2)}
                  >
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-espresso/70 mb-4">
                          Every couple is unique. Help us understand the feeling you want your film to convey.
                        </p>
                        <label className="block text-sm font-medium text-ink mb-3">
                          Which style speaks to you most?
                        </label>
                        <div className="space-y-3">
                          {[
                            { value: "cinematic", label: "Cinematic & Dramatic", description: "Bold, movie-like storytelling with emotional impact" },
                            { value: "documentary", label: "Documentary & Candid", description: "Natural, unposed moments as they unfold" },
                            { value: "romantic", label: "Romantic & Soft", description: "Dreamy, intimate, and tender" },
                            { value: "energetic", label: "Bold & Energetic", description: "Dynamic, high-energy celebration" },
                            { value: "classic", label: "Classic & Timeless", description: "Elegant, traditional, never goes out of style" }
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
                        <label className="block text-sm font-medium text-ink mb-2">
                          Songs you love (that capture your vibe)
                        </label>
                        <p className="text-xs text-coffee/60 italic mb-3">
                          Share any songs that capture the vibe you're going for! While we may not be able to use the exact song
                          due to copyright restrictions, it gives us a great sense of your style and helps us find similar licensed music.
                        </p>
                        <textarea
                          value={formData.musicVibeDescription}
                          onChange={(e) => updateField('musicVibeDescription', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={3}
                          placeholder="Artist - Song Title (one per line)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          First dance song (if you have one)
                        </label>
                        <input
                          type="text"
                          value={formData.firstDanceSong}
                          onChange={(e) => updateField('firstDanceSong', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          placeholder="Artist - Song Title"
                        />
                        <p className="text-xs text-coffee/60 mt-2">
                          We have access to an extensive library of licensed music across all genres and moods.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-coffee/10">
                        <h4 className="text-sm font-semibold text-ink mb-3">Share Your Playlists (Optional)</h4>
                        <p className="text-xs text-espresso/70 mb-4">
                          Share your Spotify or Apple Music playlist to give us a complete picture of your musical taste!
                        </p>

                        <div className="space-y-4">
                          {/* Spotify Playlist */}
                          <div>
                            <label className="block text-sm font-medium text-ink mb-2">
                              Spotify Playlist URL
                            </label>
                            <input
                              type="url"
                              value={formData.spotifyPlaylistUrl}
                              onChange={(e) => updateField('spotifyPlaylistUrl', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                              placeholder="https://open.spotify.com/playlist/..."
                            />
                            {formData.spotifyPlaylistUrl && formData.spotifyPlaylistUrl.includes('spotify.com/playlist/') && (
                              <div className="mt-3">
                                <iframe
                                  src={`https://open.spotify.com/embed/playlist/${formData.spotifyPlaylistUrl.split('playlist/')[1].split('?')[0]}`}
                                  width="100%"
                                  height="152"
                                  frameBorder="0"
                                  allow="encrypted-media"
                                  className="rounded-lg"
                                  title="Spotify Playlist Preview"
                                />
                              </div>
                            )}
                          </div>

                          {/* Apple Music Playlist */}
                          <div>
                            <label className="block text-sm font-medium text-ink mb-2">
                              Apple Music Playlist URL
                            </label>
                            <input
                              type="url"
                              value={formData.appleMusicPlaylistUrl}
                              onChange={(e) => updateField('appleMusicPlaylistUrl', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                              placeholder="https://music.apple.com/us/playlist/..."
                            />
                            {formData.appleMusicPlaylistUrl && formData.appleMusicPlaylistUrl.includes('music.apple.com') && (
                              <div className="mt-3 p-3 bg-cream/50 rounded-lg border border-coffee/10">
                                <p className="text-xs text-espresso/70">
                                  ✓ Apple Music playlist link detected - we'll check it out!
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 4: Special Details */}
                  <AccordionSection
                    number="/04"
                    title="Special Details"
                    isOpen={openSection === 3}
                    isCompleted={isSectionCompleted(3)}
                    onClick={() => toggleSection(3)}
                  >
                    <div className="space-y-6">
                      <p className="text-sm text-espresso/70">
                        These details help us tell your story authentically and make sure we don't miss anything important.
                      </p>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Cultural or religious traditions
                        </label>
                        <textarea
                          value={formData.culturalTraditions}
                          onChange={(e) => updateField('culturalTraditions', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={4}
                          placeholder="Describe any special ceremonies, rituals, or traditions..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Family dynamics we should be aware of
                        </label>
                        <p className="text-xs text-coffee/60 mb-2">
                          This helps us be sensitive and thoughtful in our coverage.
                        </p>
                        <textarea
                          value={formData.familyDynamics}
                          onChange={(e) => updateField('familyDynamics', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={3}
                          placeholder="Blended families, parents who prefer not to be on camera, anyone we should give extra attention to, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Surprise moments planned
                        </label>
                        <textarea
                          value={formData.surpriseMoments}
                          onChange={(e) => updateField('surpriseMoments', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={3}
                          placeholder="Special performance, flash mob, surprise guest, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Anything else we should know
                        </label>
                        <textarea
                          value={formData.anythingElse}
                          onChange={(e) => updateField('anythingElse', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={4}
                          placeholder="Special heirlooms, meaningful details, inside jokes, must-capture moments..."
                        />
                      </div>

                      <div className="pt-4 border-t border-coffee/10">
                        <h4 className="text-sm font-semibold text-ink mb-3">Share Your Vision (Optional)</h4>
                        <p className="text-xs text-espresso/70 mb-4">
                          Share mood boards, Pinterest boards, wedding planner documents, or any inspiration that helps us understand your vision!
                        </p>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-ink mb-2">
                              Mood Board / Inspiration Links
                            </label>
                            <p className="text-xs text-coffee/60 mb-2">
                              Share links to Pinterest boards, Google Drive folders, Dropbox, etc.
                            </p>
                            <textarea
                              value={formData.moodBoardLinks}
                              onChange={(e) => updateField('moodBoardLinks', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                              rows={3}
                              placeholder="Paste links here (one per line)&#10;https://pinterest.com/yourboard&#10;https://drive.google.com/folder/..."
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-ink mb-2">
                              Inspiration Notes
                            </label>
                            <p className="text-xs text-coffee/60 mb-2">
                              Describe your vision, color palette, overall aesthetic, or any films/photos that inspire you
                            </p>
                            <textarea
                              value={formData.inspirationNotes}
                              onChange={(e) => updateField('inspirationNotes', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                              rows={4}
                              placeholder="e.g., We love earthy tones, romantic lighting, films that feel like a love letter..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionSection>

                  {/* Section 5: What You'll Receive */}
                  <AccordionSection
                    number="/05"
                    title="What You'll Receive"
                    isOpen={openSection === 4}
                    isCompleted={isSectionCompleted(4)}
                    onClick={() => toggleSection(4)}
                  >
                    <div className="space-y-6">
                      <p className="text-sm text-espresso/70">
                        Select the deliverables you'd like. We'll include pricing for each in your custom proposal.
                      </p>

                      <div className="space-y-3">
                        {deliverables.map((deliverable) => (
                          <label
                            key={deliverable.id}
                            className="flex items-start gap-3 cursor-pointer group p-4 rounded-lg hover:bg-cream/50 transition-colors border border-transparent hover:border-coffee/10"
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
                  </AccordionSection>

                  {/* Section 6: Timeline & Next Steps */}
                  <AccordionSection
                    number="/06"
                    title="Timeline & Next Steps"
                    isOpen={openSection === 5}
                    isCompleted={isSectionCompleted(5)}
                    onClick={() => toggleSection(5)}
                  >
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">
                          When do you need your film delivered?
                        </label>
                        <div className="space-y-3">
                          {[
                            { value: "standard", label: "Standard Timeline (8-12 weeks)", description: "Best value, allows for careful editing" },
                            { value: "rush", label: "Rush Delivery (4-6 weeks)", description: "Additional fee applies" },
                            { value: "flexible", label: "We're flexible", description: "Let's discuss what works" }
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
                          <option value="asap">As soon as possible</option>
                          <option value="1-2-weeks">Within 1-2 weeks</option>
                          <option value="2-4-weeks">Within 2-4 weeks</option>
                          <option value="1-2-months">Within 1-2 months</option>
                          <option value="still-researching">Still researching options</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          How did you hear about us?
                        </label>
                        <input
                          type="text"
                          value={formData.howDidYouHear}
                          onChange={(e) => updateField('howDidYouHear', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          placeholder="Instagram, Google search, referral from a friend, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          Any questions for us?
                        </label>
                        <textarea
                          value={formData.questionsForUs}
                          onChange={(e) => updateField('questionsForUs', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-coffee/20 bg-cream focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20 transition-all"
                          rows={4}
                          placeholder="Feel free to ask us anything about our services, process, pricing, or your wedding day..."
                        />
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
                        Your Selections
                      </h2>
                      <p className="text-sm text-espresso/70">
                        We'll review these and send you a custom proposal
                      </p>
                    </div>

                    <div className="space-y-6 mb-8">
                      {/* Your Celebration */}
                      {(formData.partner1Name || formData.partner2Name || formData.weddingDate || formData.location) && (
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
                            {formData.location && <p>{formData.location}</p>}
                            {formData.celebrationType && (
                              <p className="text-espresso/70 capitalize">{formData.celebrationType.replace('-', ' ')}</p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Moments */}
                      {formData.moments.length > 0 && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Moments
                          </h3>
                          <p className="text-sm text-ink">
                            {formData.moments.length} moment{formData.moments.length !== 1 ? 's' : ''} selected
                          </p>
                          {formData.moments.slice(0, 3).map((moment, i) => (
                            <p key={i} className="text-sm text-espresso/70">• {moment}</p>
                          ))}
                          {formData.moments.length > 3 && (
                            <p className="text-sm text-coffee/60 italic">+ {formData.moments.length - 3} more...</p>
                          )}
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

                      {/* Deliverables */}
                      {formData.deliverables.length > 0 && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Deliverables
                          </h3>
                          <p className="text-sm text-ink mb-1">
                            {formData.deliverables.length} item{formData.deliverables.length !== 1 ? 's' : ''} selected
                          </p>
                          {formData.deliverables.map((id) => {
                            const deliverable = deliverables.find(d => d.id === id);
                            return deliverable ? (
                              <p key={id} className="text-sm text-espresso/70">• {deliverable.name}</p>
                            ) : null;
                          })}
                        </div>
                      )}

                      {/* Timeline & Next Steps */}
                      {(formData.deliveryTimeline || formData.bookingTimeline || formData.howDidYouHear) && (
                        <div>
                          <h3 className="text-xs uppercase tracking-wider text-coffee/60 mb-2 font-semibold">
                            Timeline & Next Steps
                          </h3>
                          {formData.deliveryTimeline && (
                            <p className="text-sm text-ink capitalize">
                              Delivery: {formData.deliveryTimeline}
                            </p>
                          )}
                          {formData.bookingTimeline && (
                            <p className="text-sm text-espresso/70">
                              Booking: {formData.bookingTimeline}
                            </p>
                          )}
                          {formData.howDidYouHear && (
                            <p className="text-sm text-espresso/70">
                              Referral: {formData.howDidYouHear}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 p-4 bg-cream/50 rounded-lg">
                      <p className="text-xs text-coffee/70 mb-2">
                        Have questions while filling this out?
                      </p>
                      <div className="space-y-1 text-sm">
                        <a href="mailto:contact@violetarose.com" className="block text-rose-wax-red hover:text-rose-wax-red/80 transition-colors">
                          contact@violetarose.com
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
                      className="w-full py-4 bg-rose-wax-red text-white font-semibold rounded-full hover:bg-rose-wax-red/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 uppercase tracking-wider text-sm"
                    >
                      Submit My Preferences
                    </button>
                    <p className="text-xs text-center text-coffee/60 mt-3">
                      We'll send your custom proposal within 48 hours
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
