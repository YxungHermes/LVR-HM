import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Identity Colors
        "rose-wax-red": "#A14C41",
        "warm-sand": "#E9DDD2",
        "ivory-white": "#FAF7F2",
        "cinematic-black": "#141210", // Deepened for better contrast
        "muted-brown": "#7B6A5A",

        // Cool Accent Colors (use sparingly for visual rhythm)
        "deep-teal": "#2C5F5D",
        "charcoal-blue": "#3B4856",

        // Legacy mappings (for backward compatibility)
        cream: "#FAF7F2",
        espresso: "#141210", // Updated to match cinematic-black
        coffee: "#7B6A5A",
        rose: {
          1: "#A14C41",
          2: "#A14C41",
        },
        ink: "#141210", // Updated for stronger contrast
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Helvetica Neue", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.04em",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(-50%)' },
          '50%': { transform: 'translateY(-6px) translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
