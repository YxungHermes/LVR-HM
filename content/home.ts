export const hero = {
  title: "Love Stories Worth Reliving",
  sub: "Cinematic wedding films for couples who want something real. From intimate elopements to full celebrations, I create films you'll actually want to watch.",
  location: "Based in New York City • Traveling Worldwide",
  // Using Vimeo for reliable video hosting and streaming
  // 16:9 wedding video for hero background
  vimeoId: "1137323325",
  poster: "/media/hero-poster.jpg",
  ctas: {
    primary: {
      label: "Book Consultation",
      href: "/consultation"
    },
    secondary: {
      label: "How We Work",
      href: "/process"
    }
  }
};

export const chooseYourStory = [
  {
    slug: "elopements",
    name: "Elopements & Intimate Gatherings",
    teaser: "For small, intentional 'just us' celebrations.",
    href: "/offerings/elopements",
    vimeoId: "1139445343",
    startingFrom: "$2,200"
  },
  {
    slug: "wedding-day-films",
    name: "Wedding Day Films",
    teaser: "For full wedding days close to home.",
    href: "/offerings/wedding-day-films",
    vimeoId: "1139429379",
    startingFrom: "$3,500",
    popular: true
  },
  {
    slug: "destination-weddings",
    name: "Destination Wedding Films",
    teaser: "For weekends and celebrations around the world.",
    href: "/offerings/destination-weddings",
    vimeoId: "1137400003",
    startingFrom: "$5,500"
  },
  {
    slug: "couples-films",
    name: "Couples Films",
    teaser: "For couples celebrating love. Anniversaries, birthdays, or just because—not wedding required.",
    href: "/offerings/couples-films",
    vimeoId: "1139450155",
    startingFrom: "$750"
  }
];

export const signatureWork = [
  {
    title: "Chrislady & Emanuel",
    subtitle: "Majorca, Spain",
    location: "Majorca, Spain",
    date: "2023",
    style: "Romantic & Cinematic",
    vimeoId: "859109463",
    description: "A stunning Mediterranean destination wedding trailer from the beautiful island of Majorca.",
    collection: "destination"
  },
  {
    title: "Selene & Isidro",
    subtitle: "Utah",
    location: "Utah",
    date: "2024",
    style: "Cinematic & Artistic",
    vimeoId: "1057949189",
    description: "A breathtaking mountain celebration filled with genuine emotion and timeless moments.",
    collection: "destination"
  },
  {
    title: "Courtney & Sterling",
    subtitle: "Connecticut",
    location: "Connecticut",
    date: "2025",
    style: "Romantic & Timeless",
    vimeoId: "1137483566",
    description: "An elegant New England venue wedding capturing beauty and heartfelt vows.",
    collection: "wedding-day"
  },
  {
    title: "Brianna & Steven",
    subtitle: "New Jersey",
    location: "New Jersey",
    date: "2023",
    style: "Documentary Style",
    vimeoId: "1137492115",
    description: "A joyful venue celebration with energy, emotion, and unforgettable moments.",
    collection: "wedding-day"
  },
  {
    title: "Robert & Tishula",
    subtitle: "Long Island, New York",
    location: "Long Island, New York",
    date: "2023",
    style: "Cinematic & Intimate",
    vimeoId: "1139491105",
    description: "An intimate Long Island venue celebration captured with heart and artistry.",
    collection: "wedding-day"
  },
  {
    title: "Ari & Billy",
    subtitle: "Brooklyn, New York",
    location: "Brooklyn, New York",
    date: "2024",
    style: "Urban & Cinematic",
    vimeoId: "1058318297",
    description: "A vibrant Brooklyn celebration at Box House capturing urban elegance and authentic love.",
    collection: "wedding-day"
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
    quote: "Wow. Just... wow. The film brings us right back to that day so clearly. We keep discovering moments we didn't even know happened. It's like reliving the entire celebration all over again...WOW",
    couple: "Selene & Isidro",
    location: "Utah",
    date: "2024",
    tradition: "Western",
    vimeoId: "1057949189"
  },
  {
    quote: "We loved the video. It was absolutely beautiful and captured everything we could have hoped for.",
    couple: "Brianna & Steven",
    location: "New Jersey",
    date: "2023",
    tradition: "Western",
    vimeoId: "1137492115"
  },
  {
    quote: "Yooo this is fire man! I knew you could do it. The way you captured our day exceeded all our expectations.",
    couple: "Robert & Tishula",
    location: "Long Island, New York",
    date: "2023",
    tradition: "Western",
    vimeoId: "1139491105"
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
      label: "Films",
      href: "/films",
      megaMenu: {
        sections: [
          {
            title: "Latest Films",
            links: [
              { label: "Chrislady & Emanuel", href: "/films", subtitle: "Majorca, Spain" },
              { label: "Selene & Isidro", href: "/films", subtitle: "Utah" },
              { label: "Courtney & Sterling", href: "/films", subtitle: "Connecticut" }
            ]
          },
          {
            title: "Explore",
            links: [
              { label: "View All Films", href: "/films" },
              { label: "Book Consultation", href: "/consultation" }
            ]
          }
        ]
      }
    },
    {
      label: "Services",
      href: "/offerings",
      megaMenu: {
        sections: [
          {
            title: "Collections",
            links: [
              { label: "Elopements", href: "/offerings/elopements" },
              { label: "Wedding Day Films", href: "/offerings/wedding-day-films" },
              { label: "Destination Weddings", href: "/offerings/destination-weddings" },
              { label: "Couples Films", href: "/offerings/couples-films" }
            ]
          },
          {
            title: "Explore",
            links: [
              { label: "View All Services", href: "/offerings" },
              { label: "Book Consultation", href: "/consultation" }
            ]
          }
        ]
      }
    },
    {
      label: "Traditions",
      href: "/weddings",
      megaMenu: {
        sections: [
          {
            title: "Wedding Traditions A-K",
            links: [
              { label: "Catholic Weddings", href: "/weddings/catholic" },
              { label: "Chinese Weddings", href: "/weddings/chinese" },
              { label: "Filipino Weddings", href: "/weddings/filipino" },
              { label: "Greek Orthodox Weddings", href: "/weddings/greek-orthodox" },
              { label: "Hindu & Indian Weddings", href: "/weddings/hindu" },
              { label: "Jewish Weddings", href: "/weddings/jewish" },
              { label: "Korean Weddings", href: "/weddings/korean" }
            ]
          },
          {
            title: "Wedding Traditions M-S",
            links: [
              { label: "Mexican Weddings", href: "/weddings/mexican" },
              { label: "Muslim & Islamic Weddings", href: "/weddings/muslim" },
              { label: "Nigerian Weddings", href: "/weddings/nigerian" },
              { label: "Sikh Weddings", href: "/weddings/sikh" }
            ]
          },
          {
            title: "Explore",
            links: [
              { label: "View All Traditions", href: "/weddings" }
            ]
          }
        ]
      }
    }
  ],
  right: [
    {
      label: "About",
      href: "/about"
      // No mega menu - simple link to about page
    },
    {
      label: "Process",
      href: "/process",
      megaMenu: {
        sections: [
          {
            title: "How We Work",
            links: [
              { label: "Timeline Overview", href: "/process", subtitle: "Start here" },
              { label: "Our Approach", href: "/process/approach", subtitle: "Philosophy" },
              { label: "What to Expect", href: "/process/what-to-expect", subtitle: "Wedding day" },
              { label: "Investment", href: "/process/investment", subtitle: "Pricing & payments" }
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
