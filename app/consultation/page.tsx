"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { pricing } from "@/content/pricing";
import { TRADITION_CATEGORIES, SPECIAL_CHOICES, getTraditionLabel } from "@/data/traditions";
import { formatPhoneSmart } from "@/lib/phone";
import { trackMetaEvent } from "@/components/MetaPixel";
import { trackConsultationFormView, trackConsultationFormSubmit } from "@/lib/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PinterestShare from "@/components/consultation/PinterestShare";

type Role = "couple" | "planner" | "parent";

const LOCATIONS = [
  "New York City",
  "New Jersey",
  "Long Island",
  "Hudson Valley",
  "Upstate New York",
  "Connecticut",
  "Pennsylvania",
  "Other",
];

export default function ConsultationPage() {
  const router = useRouter();

  // Track form view on mount
  useEffect(() => {
    trackConsultationFormView();
  }, []);

  // Names
  const [partner1, setPartner1] = useState("");
  const [partner2, setPartner2] = useState("");

  // Phone with smart formatting
  const [phone, setPhone] = useState("");
  const [isUS, setIsUS] = useState<boolean | null>(null);

  // Location with select + other
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [locationOther, setLocationOther] = useState("");

  // Role selector with expanded fields
  const [role, setRole] = useState<Role>("couple");
  const [plannerName, setPlannerName] = useState("");
  const [plannerEmail, setPlannerEmail] = useState("");
  const [plannerPhone, setPlannerPhone] = useState("");
  const [plannerCompany, setPlannerCompany] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentRelation, setParentRelation] = useState("");
  const [parentContactPreference, setParentContactPreference] = useState<"email" | "phone" | "either">("email");

  // Tradition selector
  const [tradition, setTradition] = useState<string>("");
  const [multiTraditions, setMultiTraditions] = useState<string[]>([]);
  const [traditionOther, setTraditionOther] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    eventType: "",
    date: "",
    guestCount: "",
    venueName: "",
    venueLink: "",
    isMultiDay: false,
    howYouMet: "",
    otherInspirationLinks: "",
    filmFeel: [] as string[],
    budgetRange: "",
    contactPreference: "email",
    pinterestBoardUrl: "",
    pinterestBoardTitle: "",
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

  const isMulti = tradition === "multicultural_interfaith";
  const isOther = tradition === "other";

  const toggleMulti = (key: string) => {
    setMultiTraditions((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const onPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, isLikelyUS } = formatPhoneSmart(e.target.value);
    setIsUS(isLikelyUS);
    setPhone(value);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate names
    if (!partner1.trim() || !partner2.trim()) {
      alert("Please enter both partner names.");
      return;
    }

    // Validate planner fields
    if (role === "planner") {
      if (!plannerName.trim()) {
        alert("Please enter your name in the Planner Information section.");
        return;
      }
      if (!plannerEmail.trim()) {
        alert("Please enter your email in the Planner Information section.");
        return;
      }
    }

    // Validate parent fields
    if (role === "parent") {
      if (!parentName.trim()) {
        alert("Please enter your name in the Parent/Family Information section.");
        return;
      }
      if (!parentEmail.trim()) {
        alert("Please enter your email in the Parent/Family Information section.");
        return;
      }
    }

    // Validate tradition field
    if (!tradition) {
      alert("Please select a tradition or cultural context.");
      return;
    }
    if (isMulti && multiTraditions.length < 2) {
      alert("Please select two traditions for a multicultural/interfaith wedding.");
      return;
    }
    if (isOther && !traditionOther.trim()) {
      alert("Please describe your tradition or event.");
      return;
    }

    // Validate location "Other"
    if (location === "Other" && !locationOther.trim()) {
      alert("Please specify the location.");
      return;
    }

    // Build tradition resolved string
    let traditionResolved = "";
    if (isMulti) {
      const labels = multiTraditions.map(getTraditionLabel);
      traditionResolved = `Multicultural / Interfaith: ${labels.join(" + ")}`;
    } else if (isOther) {
      traditionResolved = `Other: ${traditionOther}`;
    } else {
      traditionResolved = getTraditionLabel(tradition);
    }

    // Resolve final location
    const finalLocation = location === "Other" ? locationOther : location;

    // Prepare submission data
    const submissionData = {
      partner1,
      partner2,
      phone,
      role,
      plannerName: role === "planner" ? plannerName : undefined,
      plannerEmail: role === "planner" ? plannerEmail : undefined,
      plannerPhone: role === "planner" ? plannerPhone : undefined,
      plannerCompany: role === "planner" ? plannerCompany : undefined,
      parentName: role === "parent" ? parentName : undefined,
      parentEmail: role === "parent" ? parentEmail : undefined,
      parentPhone: role === "parent" ? parentPhone : undefined,
      parentRelation: role === "parent" ? parentRelation : undefined,
      parentContactPreference: role === "parent" ? parentContactPreference : undefined,
      location: finalLocation,
      tradition,
      traditionResolved,
      multiTraditions: isMulti ? multiTraditions : undefined,
      traditionOther: isOther ? traditionOther : undefined,
      ...formData,
    };

    // Submit to API
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        // Track conversion in Meta Pixel (Facebook/Instagram Ads)
        trackMetaEvent("Lead", {
          content_name: "Consultation Form",
          content_category: "wedding_inquiry",
        });

        // Track conversion in Google Analytics 4
        trackConsultationFormSubmit(formData.eventType, formData.budgetRange);

        // Success - redirect to thank you page
        router.push("/consultation/success");
      } else {
        // Handle error
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && (e.target as HTMLInputElement).checked !== undefined) {
      const checkbox = e.target as HTMLInputElement;
      if (name === "filmFeel") {
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
        <section className="px-6 pt-32 pb-12 sm:pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6 tracking-wide">
                Let's Create Something Beautiful Together
              </h1>
              <p className="text-base sm:text-lg text-espresso leading-relaxed max-w-2xl mx-auto">
                Tell me about your celebration — your story, your vision, and everything that matters most.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 pb-16 sm:pb-20 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white border border-coffee/10 rounded-lg p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink pb-2 sm:pb-3 border-b border-coffee/10">
                  Your Information
                </h3>

                {/* Names - Split into two fields */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-espresso">
                    Couple's Names <span className="text-rose-wax-red">*</span>
                  </label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      id="partner1"
                      name="partner1"
                      value={partner1}
                      onChange={(e) => setPartner1(e.target.value)}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      id="partner2"
                      name="partner2"
                      value={partner2}
                      onChange={(e) => setPartner2(e.target.value)}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      placeholder="Partner's Name"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid gap-6 md:grid-cols-2">
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

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-espresso">
                      Phone <span className="text-xs text-espresso/60">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={onPhoneInput}
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      placeholder={isUS ? "(555) 123-4567" : "+44 7123 456789"}
                    />
                  </div>
                </div>

                {/* Role Selector */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-espresso">
                    Who's reaching out?
                  </label>
                  <div className="flex flex-wrap gap-4 items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value="couple"
                        checked={role === "couple"}
                        onChange={() => setRole("couple")}
                        className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                      />
                      <span className="text-sm text-espresso">We're the couple</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value="planner"
                        checked={role === "planner"}
                        onChange={() => setRole("planner")}
                        className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                      />
                      <span className="text-sm text-espresso">Wedding planner</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value="parent"
                        checked={role === "parent"}
                        onChange={() => setRole("parent")}
                        className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                      />
                      <span className="text-sm text-espresso">Parent / Family</span>
                    </label>
                  </div>

                  {role === "planner" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-6 bg-warm-sand/20 rounded-lg border border-coffee/10 space-y-4"
                    >
                      <h4 className="font-serif text-lg font-semibold text-ink">Planner Information</h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <input
                            type="text"
                            name="plannerName"
                            placeholder="Your Name *"
                            value={plannerName}
                            onChange={(e) => setPlannerName(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="plannerCompany"
                            placeholder="Agency/Company Name"
                            value={plannerCompany}
                            onChange={(e) => setPlannerCompany(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <input
                            type="email"
                            name="plannerEmail"
                            placeholder="Your Email *"
                            value={plannerEmail}
                            onChange={(e) => setPlannerEmail(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="plannerPhone"
                            placeholder="Your Phone (optional)"
                            value={plannerPhone}
                            onChange={(e) => setPlannerPhone(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {role === "parent" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-6 bg-warm-sand/20 rounded-lg border border-coffee/10 space-y-4"
                    >
                      <h4 className="font-serif text-lg font-semibold text-ink">Your Information</h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <input
                            type="text"
                            name="parentName"
                            placeholder="Your Name *"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="parentRelation"
                            placeholder="Relation (e.g., Mother of the Bride)"
                            value={parentRelation}
                            onChange={(e) => setParentRelation(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <input
                            type="email"
                            name="parentEmail"
                            placeholder="Your Email *"
                            value={parentEmail}
                            onChange={(e) => setParentEmail(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="parentPhone"
                            placeholder="Your Phone (optional)"
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}
                            className="w-full rounded-lg border border-coffee/20 bg-white px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-espresso">
                          How would you prefer to be contacted?
                        </label>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="parentContactPreference"
                              value="email"
                              checked={parentContactPreference === "email"}
                              onChange={() => setParentContactPreference("email")}
                              className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                            />
                            <span className="text-sm text-espresso">Email</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="parentContactPreference"
                              value="phone"
                              checked={parentContactPreference === "phone"}
                              onChange={() => setParentContactPreference("phone")}
                              className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                            />
                            <span className="text-sm text-espresso">Phone</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="parentContactPreference"
                              value="either"
                              checked={parentContactPreference === "either"}
                              onChange={() => setParentContactPreference("either")}
                              className="h-4 w-4 border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                            />
                            <span className="text-sm text-espresso">Either</span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}
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
                    <option value="elopements">Elopements & Intimate Gatherings</option>
                    <option value="weddingDay">Wedding Day Films</option>
                    <option value="destination">Destination Wedding Films</option>
                    <option value="adventure">Adventure Sessions & Stories</option>
                    <option value="custom">Not sure yet / Custom</option>
                  </select>

                  {/* Multi-day question for destination weddings */}
                  {formData.eventType === "destination" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 flex items-center space-x-3 p-4 bg-warm-sand/20 rounded-lg"
                    >
                      <input
                        type="checkbox"
                        id="isMultiDay"
                        name="isMultiDay"
                        checked={formData.isMultiDay}
                        onChange={(e) => setFormData({ ...formData, isMultiDay: e.target.checked })}
                        className="h-4 w-4 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                      />
                      <label htmlFor="isMultiDay" className="text-sm font-medium text-espresso cursor-pointer">
                        This is a multi-day celebration
                      </label>
                    </motion.div>
                  )}
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

                {/* Tradition / Cultural Context */}
                <div>
                  <label htmlFor="tradition" className="mb-2 block text-sm font-medium text-espresso">
                    Tradition / Cultural Context <span className="text-rose-wax-red">*</span>
                  </label>
                  <p className="mb-3 text-xs text-espresso/60">
                    This helps us plan coverage respectfully. Choose the option that fits best. For blended ceremonies, choose "Multicultural / Interfaith."
                  </p>
                  <select
                    id="tradition"
                    name="tradition"
                    value={tradition}
                    onChange={(e) => {
                      setTradition(e.target.value);
                      setMultiTraditions([]);
                      setTraditionOther("");
                    }}
                    required
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                  >
                    <option value="">Select one</option>

                    {TRADITION_CATEGORIES.map((cat) => (
                      <optgroup key={cat.label} label={cat.label}>
                        {cat.options.map((opt) => (
                          <option key={opt.key} value={opt.key}>
                            {opt.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}

                    <optgroup label="More">
                      {SPECIAL_CHOICES.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </optgroup>
                  </select>

                  {/* Multicultural / Interfaith picker */}
                  {isMulti && (
                    <motion.div
                      className="mt-4 p-4 bg-warm-sand/20 rounded-lg border border-coffee/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mb-3 text-sm font-medium text-espresso">
                        Choose the two traditions you're blending:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {TRADITION_CATEGORIES[0].options.map((opt) => (
                          <label
                            key={opt.key}
                            className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer transition-colors ${
                              multiTraditions.includes(opt.key)
                                ? "border-rose-wax-red bg-rose-wax-red/5"
                                : "border-coffee/20 hover:border-coffee/30"
                            }`}
                          >
                            <input
                              type="checkbox"
                              value={opt.key}
                              checked={multiTraditions.includes(opt.key)}
                              onChange={() => toggleMulti(opt.key)}
                              className="h-4 w-4 rounded border-coffee/30 text-rose-wax-red focus:ring-rose-wax-red/20"
                            />
                            <span className="text-sm text-espresso">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Other describe */}
                  {isOther && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <input
                        name="traditionOther"
                        placeholder="Describe your tradition or event"
                        value={traditionOther}
                        onChange={(e) => setTraditionOther(e.target.value)}
                        required
                        className="mt-4 w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Location - Select with Other option */}
                <div>
                  <label htmlFor="location" className="mb-2 block text-sm font-medium text-espresso">
                    General Location <span className="text-rose-wax-red">*</span>
                  </label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <select
                      id="location"
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    >
                      {LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>

                    {location === "Other" && (
                      <motion.input
                        type="text"
                        name="locationOther"
                        placeholder="City, State or Country"
                        value={locationOther}
                        onChange={(e) => setLocationOther(e.target.value)}
                        required
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                      />
                    )}
                  </div>
                </div>

                {/* Venue Information (optional) */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-espresso">
                    Venue <span className="text-xs text-espresso/60">(optional)</span>
                  </label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      id="venueName"
                      name="venueName"
                      value={formData.venueName}
                      onChange={handleChange}
                      placeholder="Venue Name"
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    />
                    <input
                      type="url"
                      id="venueLink"
                      name="venueLink"
                      value={formData.venueLink}
                      onChange={handleChange}
                      placeholder="Venue Website Link"
                      className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                    />
                  </div>
                </div>
              </div>

              {/* Your Story */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink pb-3 border-b border-coffee/10">
                  Your Story
                </h3>

                <div>
                  <label htmlFor="howYouMet" className="mb-2 block text-sm font-medium text-espresso">
                    How did you meet? <span className="text-xs text-espresso/60">(optional — we'll discuss during consultation)</span>
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

              {/* Pinterest Inspiration Board - Moved after Your Story */}
              <div>
                <PinterestShare
                  coupleNameFieldId="partner1"
                  onSelect={({ url, title }) => {
                    setFormData({
                      ...formData,
                      pinterestBoardUrl: url,
                      pinterestBoardTitle: title,
                    });
                  }}
                />

                {/* Other Inspiration Links */}
                <div className="mt-6">
                  <label htmlFor="otherInspirationLinks" className="mb-2 block text-sm font-medium text-espresso">
                    Other Inspiration Links <span className="text-xs text-espresso/60">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="otherInspirationLinks"
                    name="otherInspirationLinks"
                    value={formData.otherInspirationLinks}
                    onChange={handleChange}
                    placeholder="YouTube videos, Instagram reels, or other links that inspire you"
                    className="w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 text-espresso transition-colors focus:border-rose-wax-red focus:outline-none focus:ring-2 focus:ring-rose-wax-red/20"
                  />
                </div>
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
              </div>

              {/* Additional Notes */}
              <div className="space-y-6">
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

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center bg-rose-wax-red text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
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
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
                <p className="mt-4 text-sm text-espresso/60">
                  I respond to all inquiries within 24 hours
                </p>
              </div>
            </motion.form>

            {/* Back to Pricing Link */}
            <div className="mt-8 text-center">
              <Link
                href="/offerings"
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
