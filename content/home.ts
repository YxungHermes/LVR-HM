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

// Navigation with mega menu content
export const navigation = {
  left: [
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
      label: "Pricing",
      href: "/pricing",
      megaMenu: {
        sections: [
          {
            title: "Collections",
            links: [
              { label: "Elopements & Intimate Gatherings", href: "/pricing#elopements" },
              { label: "Wedding Day Films", href: "/pricing#wedding-day-films" },
              { label: "Destination Wedding Films", href: "/pricing#destination-weddings" },
              { label: "Adventure Sessions & Stories", href: "/pricing#adventure-sessions" }
            ]
          },
          {
            title: "Explore",
            links: [
              { label: "View All Collections", href: "/pricing" },
              { label: "Book Consultation", href: "/consultation" }
            ]
          }
        ]
      }
    }
  ],
  right: [
    {
      label: "Stories",
      href: "#testimonials",
      megaMenu: {
        sections: [
          {
            title: "Testimonials",
            links: [
              { label: "Read Reviews", href: "#testimonials" },
              { label: "Client Gallery", href: "#testimonials" }
            ]
          }
        ]
      }
    },
    {
      label: "Book Consultation",
      href: "/consultation",
      megaMenu: {
        sections: [
          {
            title: "Get Started",
            links: [
              { label: "Book Your Consultation", href: "/consultation" },
              { label: "View Pricing", href: "/pricing" },
              { label: "Learn the Process", href: "/process" }
            ]
          }
        ]
      }
    }
  ]
};

export const socialLinks = [
  { platform: "Instagram", href: "https://instagram.com/lovevioletarose", label: "@lovevioletarose" },
  { platform: "Vimeo", href: "https://vimeo.com/lovevioletarose", label: "Watch on Vimeo" }
];
