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
        "cinematic-black": "#1C1A18",
        "muted-brown": "#7B6A5A",

        // Legacy mappings (for backward compatibility)
        cream: "#FAF7F2",
        espresso: "#1C1A18",
        coffee: "#7B6A5A",
        rose: {
          1: "#A14C41",
          2: "#A14C41",
        },
        ink: "#1C1A18",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Helvetica Neue", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
