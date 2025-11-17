// content/pricing.ts

export const whatIOffer = [
  {
    slug: "elopements",
    name: "Elopements & Intimate Gatherings",
    description:
      "For intentional ceremonies, city hall vows, rooftops, at-home celebrations, and days where you know every face in the room.",
    href: "/offerings/elopements",
    image: "/collections/elopements.jpg",
  },
  {
    slug: "wedding-day-films",
    name: "Wedding Day Films",
    description:
      "For full wedding days close to home, from quiet mornings to the final song, crafted as one cohesive cinematic story.",
    href: "/offerings/wedding-day-films",
    image: "/collections/wedding-day.jpg",
  },
  {
    slug: "destination-weddings",
    name: "Destination Wedding Films",
    description:
      "For celebrations in meaningful locations around the world, where the setting, your people, and the entire weekend become part of the film.",
    href: "/offerings/destination-weddings",
    image: "/collections/destination.jpg",
  },
  {
    slug: "adventure-sessions",
    name: "Adventure Sessions & Stories",
    description:
      "For engagements, welcome parties, day-after sessions, anniversaries, or creative stories beyond the wedding day.",
    href: "/offerings/adventure-sessions",
    image: "/collections/adventure.jpg",
  },
];

export const pricingOverview = [
  {
    slug: "elopements",
    name: "Elopements & Intimate Gatherings",
    startingFrom: "$2,200",
    range: "$2,200 — $4,800",
    description:
      "For intentional ceremonies, city hall 'I do's, rooftops, and small gatherings where every face matters.",
    href: "/offerings/elopements",
    image: "/collections/elopements.jpg",
  },
  {
    slug: "wedding-day-films",
    name: "Wedding Day Films",
    startingFrom: "$3,500",
    range: "$3,500 — $7,500",
    description:
      "For full wedding days at home, crafted as emotive, cinematic films you'll want to revisit often.",
    href: "/offerings/wedding-day-films",
    image: "/collections/wedding-day.jpg",
  },
  {
    slug: "destination-weddings",
    name: "Destination Wedding Films",
    startingFrom: "$5,500",
    range: "$5,500 — $12,000+",
    description:
      "For celebrations in meaningful places around the world, with films that weave in people, place, and atmosphere.",
    href: "/offerings/destination-weddings",
    image: "/collections/destination.jpg",
    vimeoId: "1137400003",
  },
  {
    slug: "adventure-sessions",
    name: "Adventure Sessions & Stories",
    startingFrom: "$1,200",
    range: "$1,200 — $3,000",
    description:
      "For engagements, welcome parties, day-after sessions, anniversaries, or brand stories with the same cinematic care.",
    href: "/offerings/adventure-sessions",
    image: "/collections/adventure.jpg",
  },
];

export const pricingPages = {
  elopements: {
    title: "Elopements & Intimate Gatherings",
    seoTitle: "Elopement Wedding Films | Weddings by Michael Andrade",
    heroImage: "/collections/elopements.jpg",
    introHeading: "For the couples choosing presence over spectacle.",
    introBody:
      "Some vows are whispered on a rooftop, in a quiet courthouse, or under a tree with only your closest people. These celebrations deserve the same cinematic respect as any ballroom. This collection is for couples who want a refined, honest film that reflects the intimacy of the day.",
    startingFrom: "$2,200",
    rangeNote: "Most couples invest between $2,200 — $4,800 depending on coverage and travel.",
    idealFor: [
      "City hall ceremonies and weekday elopements",
      "At-home or private estate ceremonies",
      "Micro-weddings up to ~40 guests",
      "Couples who value a calm, unobtrusive approach",
    ],
    includes: [
      "4–6 hours of tailored coverage",
      "1–3 minute cinematic highlight film",
      "Clean audio of vows and key words",
      "Subtle guidance only when needed, never forced posing",
      "Private online delivery ready to download and share",
    ],
    addOnsNote:
      "Longer coverage, additional locations, or travel outside the city are available by custom quote.",
    ctaLabel: "Book This Package",
    ctaHref: "/consultation",
  },

  "wedding-day-films": {
    title: "Wedding Day Films",
    seoTitle: "Wedding Day Film Collections | Weddings by Michael Andrade",
    heroImage: "/collections/wedding-day.jpg",
    introHeading: "A complete, cinematic record of the day you built.",
    introBody:
      "From getting ready through the final song, your wedding day moves quickly. Our focus is to craft a film that feels like you: how your families hold you, the energy in the room, the way the night turns into story. This collection is for couples who want their full day told with intention.",
    startingFrom: "$3,500",
    rangeNote: "Most couples invest between $4,500 — $7,500 depending on hours and deliverables.",
    idealFor: [
      "Full-day celebrations in one or two locations",
      "Couples who want both a cinematic film and full ceremony coverage",
      "Those who value audio from vows, letters, and speeches woven into their story",
    ],
    includes: [
      "8–10 hours of coverage",
      "Lead filmmaker + second filmmaker (for key portions of the day)",
      "5–8 minute cinematic highlight film",
      "Full ceremony film with professional audio",
      "Speeches / toasts edit",
      "Licensed music so your film is safe to share online",
      "Online gallery for easy viewing, download, and sharing",
    ],
    addOnsNote:
      "Extras available: teaser film, extended highlight, raw footage delivery, rehearsal dinner coverage, drone where permitted.",
    ctaLabel: "Book This Package",
    ctaHref: "/consultation",
  },

  "destination-weddings": {
    title: "Destination Wedding Films",
    seoTitle: "Destination Wedding Videography | Weddings by Michael Andrade",
    heroImage: "/collections/destination.jpg",
    vimeoId: "1137400003",
    introHeading: "For celebrations that live across borders and timelines.",
    introBody:
      "A destination wedding is more than one day. It is airport greetings, welcome dinners, slow mornings, boat rides, late-night toasts. This collection is for couples who want that full atmosphere held on film. We travel with you, move like guests, and create a film that feels like an heirloom from another world.",
    startingFrom: "$5,500 + travel",
    rangeNote:
      "Most destination couples invest between $7,500 — $12,000+ depending on country, schedule, and coverage days.",
    idealFor: [
      "Weekend or multi-day celebrations abroad",
      "Intimate groups traveling together",
      "Couples who care about the sense of place as much as the ceremony",
    ],
    includes: [
      "Custom coverage plan (typically 2–3 days)",
      "6–10 minute cinematic highlight film",
      "Ceremony and speeches edits",
      "Selective coverage of welcome events, excursions, or day-after moments",
      "Travel handled with clear, simple terms in your proposal",
    ],
    addOnsNote:
      "Longer stays, extra events, or editorial-style story pieces can be added for a fully bespoke experience.",
    ctaLabel: "Book This Package",
    ctaHref: "/consultation",
  },

  "adventure-sessions": {
    title: "Adventure Sessions & Stories",
    seoTitle: "Couples Films & Love Story Sessions | Weddings by Michael Andrade",
    heroImage: "/collections/adventure.jpg",
    introHeading: "Your relationship deserves more than iPhone footage.",
    introBody:
      "Birthdays, anniversaries, proposals, or just because it's Tuesday and you want a beautiful film of your favorite person. These sessions are for couples who want cinematic storytelling without the wedding day price tag. Affordable luxury that captures your love story exactly as it is right now.",
    startingFrom: "$750",
    rangeNote:
      "Most couples invest between $750 — $2,000 depending on coverage and film length.",
    idealFor: [
      "Anniversary celebrations (annual tradition, anyone?)",
      "Birthday surprises — the gift they'll actually treasure",
      "Proposal films with secret coordination",
      "\"Just because\" love stories",
      "Long-distance reunion films",
      "Date day adventures — hikes, beach days, city explorations",
    ],
    packages: [
      {
        name: "Mini Session",
        price: "$750",
        duration: "2 hours",
        filmLength: "1 minute social-ready film",
        description: "Perfect for Instagram, TikTok, and social sharing",
        includes: [
          "2 hours of coverage",
          "1 minute highlight film optimized for social media",
          "One location (NYC + 30 miles, travel extra)",
          "Vertical & horizontal formats included",
          "Simple planning — one call, no fuss",
          "Online delivery in 3-4 weeks",
        ],
      },
      {
        name: "Classic",
        price: "$1,200",
        duration: "3 hours",
        filmLength: "2–3 minute cinematic film",
        description: "Our most popular session for couples who want a complete story",
        popular: true,
        includes: [
          "3 hours of coverage",
          "2–3 minute narrative film",
          "Up to 2 locations",
          "Styling and location guidance",
          "Licensed music safe for sharing",
          "Online delivery in 3-4 weeks",
        ],
      },
      {
        name: "Premium",
        price: "$2,000",
        duration: "4–5 hours",
        filmLength: "3–5 minute cinematic film",
        description: "For activity-based sessions and proposal coverage",
        includes: [
          "4–5 hours of coverage",
          "3–5 minute cinematic film",
          "Multiple locations or activity-based",
          "Second filmmaker for proposals (full coverage)",
          "Secret coordination for surprise proposals",
          "Licensed music + professional audio",
          "Online delivery in 3-4 weeks",
        ],
      },
    ],
    addOnsNote:
      "Gift certificates available. Ask about our Anniversary Film Club — book 3 sessions over 3 years and save.",
    ctaLabel: "Book a Session",
    ctaHref: "/consultation",
  },
};

// Adapter export for consultation form (matches integration guide format)
export const pricing = {
  elopements: {
    title: "Elopements & Intimate Gatherings",
    starting: 2200,
    range: [2200, 4800],
    description:
      "For intentional ceremonies, city hall vows, rooftops, or at-home celebrations — moments where you know every face in the room.",
  },
  weddingDay: {
    title: "Wedding Day Films",
    starting: 3500,
    range: [3500, 7500],
    description:
      "For full wedding days close to home, from quiet mornings to the final dance, crafted as one cohesive cinematic story.",
  },
  destination: {
    title: "Destination Wedding Films",
    starting: 5500,
    range: [5500, 12500],
    description:
      "For celebrations in meaningful destinations, where the setting becomes part of the story.",
  },
  adventure: {
    title: "Adventure Sessions & Stories",
    starting: 1200,
    range: [1200, 3000],
    description:
      "For engagements, welcome parties, anniversaries, or creative stories beyond the wedding day.",
  },
};
