export const hero = {
  title: "Love Stories Worth Reliving",
  sub: "Cinematic wedding films crafted with heart. From intimate elopements to grand celebrations, we create films you'll treasure forever.",
  // Using Vimeo for reliable video hosting and streaming
  // Vimeo ID from:
  vimeoId: "1057598499",
  poster: "/media/hero-poster.jpg",
  stats: {
    weddings: "500+",
    rating: "5.0"
  },
  ctas: {
    primary: {
      label: "View Film Collections",
      href: "/pricing"
    },
    secondary: {
      label: "Watch Our Films",
      href: "#signature-work"
    }
  }
};

export const chooseYourStory = [
  {
    slug: "elopements",
    name: "Elopements & Intimate Gatherings",
    teaser: "For small, intentional 'just us' celebrations.",
    href: "/pricing#elopements"
  },
  {
    slug: "wedding-day-films",
    name: "Wedding Day Films",
    teaser: "For full wedding days close to home.",
    href: "/pricing#wedding-day-films"
  },
  {
    slug: "destination-weddings",
    name: "Destination Wedding Films",
    teaser: "For weekends and celebrations around the world.",
    href: "/pricing#destination-weddings"
  },
  {
    slug: "adventure-sessions",
    name: "Adventure Sessions & Stories",
    teaser: "For engagements, welcome parties, and day-after moments.",
    href: "/pricing#adventure-sessions"
  }
];

export const signatureWork = [
  {
    title: "Ari & Billy",
    subtitle: "Malibu, California",
    src: "/media/reel-1.mp4",
    poster: "/media/reel-1.jpg"
  },
  {
    title: "Jeremy & Lourdes",
    subtitle: "Palm Springs, California",
    src: "/media/reel-2.mp4",
    poster: "/media/reel-2.jpg"
  },
  {
    title: "Caitlyn & Michael",
    subtitle: "Santa Barbara, California",
    src: "/media/reel-3.mp4",
    poster: "/media/reel-3.jpg"
  }
];

export const packages = [
  {
    name: "Intimate",
    hours: "4 hours",
    price: "$2,500",
    description: "Perfect for intimate ceremonies and elopements",
    features: [
      "4 hours of coverage",
      "1 videographer",
      "3-5 minute highlight film",
      "Full ceremony video",
      "Digital delivery in 6-8 weeks"
    ]
  },
  {
    name: "Classic",
    hours: "6 hours",
    price: "$3,500",
    description: "Ideal for most wedding celebrations",
    features: [
      "6 hours of coverage",
      "1 videographer",
      "5-7 minute highlight film",
      "Full ceremony & speeches",
      "Digital delivery in 6-8 weeks",
      "Save the date video option"
    ],
    popular: true
  },
  {
    name: "Premium",
    hours: "8 hours",
    price: "$4,800",
    description: "Complete coverage for your full day",
    features: [
      "8 hours of coverage",
      "2 videographers",
      "7-10 minute highlight film",
      "Full ceremony & speeches",
      "Getting ready footage",
      "Digital delivery in 6-8 weeks",
      "Save the date video included"
    ]
  },
  {
    name: "Legacy",
    hours: "10-12 hours",
    price: "$6,500",
    description: "The complete cinematic experience",
    features: [
      "10-12 hours of coverage",
      "2 videographers",
      "10-15 minute highlight film",
      "Documentary-style feature film",
      "Full ceremony & speeches",
      "Getting ready & detail shots",
      "Digital delivery in 6-8 weeks",
      "Save the date video included",
      "Drone footage (venue permitting)"
    ]
  }
];

export const testimonials = [
  {
    quote: "Violeta captured our day in a way that felt like a dream. Every time we watch our film, we're transported back to that perfect moment.",
    couple: "Sarah & James",
    location: "Napa Valley"
  },
  {
    quote: "The attention to detail and artistry is unmatched. Our film is a work of art that we'll cherish for generations.",
    couple: "Maria & David",
    location: "Los Angeles"
  }
];

// Type definitions for navigation
export type MegaMenuLink = {
  label: string;
  href: string;
  subtitle?: string;
};

export type MegaMenuSection = {
  title: string;
  links: MegaMenuLink[];
};

export type NavItem = {
  label: string;
  href: string;
  isCta?: boolean; // CTA items have no dropdown/mega menu
  megaMenu?: {
    sections: MegaMenuSection[];
  };
};

export type Navigation = {
  left: NavItem[];
  right: NavItem[];
};

// Navigation with mega menu content
export const navigation: Navigation = {
  left: [
    {
      label: "Home",
      href: "/",
      megaMenu: {
        sections: [
          {
            title: "Welcome",
            links: [
              { label: "Back to Homepage", href: "/" },
              { label: "View Our Work", href: "#signature-work" }
            ]
          }
        ]
      }
    },
    {
      label: "Films",
      href: "#signature-work",
      megaMenu: {
        sections: [
          {
            title: "Latest Films",
            links: [
              { label: "Ari & Billy", href: "#signature-work", subtitle: "Malibu" },
              { label: "Jeremy & Lourdes", href: "#signature-work", subtitle: "Palm Springs" },
              { label: "Caitlyn & Michael", href: "#signature-work", subtitle: "Santa Barbara" }
            ]
          },
          {
            title: "Collections",
            links: [
              { label: "Full Weddings", href: "#signature-work" },
              { label: "Elopements", href: "#signature-work" },
              { label: "Highlight Reels", href: "#signature-work" }
            ]
          }
        ]
      }
    },
    {
      label: "Offerings",
      href: "/offerings",
      megaMenu: {
        sections: [
          {
            title: "Collections",
            links: [
              { label: "Elopements & Intimate Gatherings", href: "/offerings#elopements" },
              { label: "Wedding Day Films", href: "/offerings#wedding-day-films" },
              { label: "Destination Wedding Films", href: "/offerings#destination-weddings" },
              { label: "Adventure Sessions & Stories", href: "/offerings#adventure-sessions" }
            ]
          },
          {
            title: "Explore",
            links: [
              { label: "View All Collections", href: "/offerings" },
              { label: "Book Consultation", href: "/consultation" }
            ]
          }
        ]
      }
    }
  ],
  right: [
    {
      label: "Process",
      href: "/process",
      megaMenu: {
        sections: [
          {
            title: "How We Work",
            links: [
              { label: "Our Approach", href: "/process#approach" },
              { label: "Timeline & Planning", href: "/process#timeline" },
              { label: "What to Expect", href: "/process#expect" }
            ]
          }
        ]
      }
    },
    {
      label: "Book Consultation",
      href: "/consultation",
      isCta: true // Primary CTA - no dropdown, focused action only
    }
  ]
};

export const socialLinks = [
  { platform: "Instagram", href: "https://instagram.com/lovevioletarose", label: "@lovevioletarose" },
  { platform: "Vimeo", href: "https://vimeo.com/lovevioletarose", label: "Watch on Vimeo" }
];
