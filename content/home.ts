export const hero = {
  title: "Love Stories Worth Reliving",
  sub: "Cinematic wedding films crafted with heart. From intimate elopements to grand celebrations, we create films you'll treasure forever.",
  // Using Vimeo for reliable video hosting and streaming
  // Vimeo ID from: https://vimeo.com/1057598499
  vimeoId: "1057598499",
  poster: "/media/hero-poster.jpg",
  stats: {
    weddings: "500+",
    rating: "5.0"
  }
};

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

export const navigation = [
  { label: "Films", href: "#signature-work" },
  { label: "Packages", href: "#packages" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  { platform: "Instagram", href: "https://instagram.com/lovevioletarose", label: "@lovevioletarose" },
  { platform: "Vimeo", href: "https://vimeo.com/lovevioletarose", label: "Watch on Vimeo" }
];
