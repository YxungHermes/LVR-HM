import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import StagingBadge from "@/components/StagingBadge";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Love, Violeta Rose — Cinematic Wedding Films",
  description: "Cinematic wedding films crafted with heart. From intimate elopements to grand celebrations, we create films you'll treasure forever.",
  keywords: ["wedding videography", "cinematic wedding films", "luxury wedding videographer", "love violeta rose"],
  icons: {
    icon: [
      { url: '/favicons/lvr-monogram.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicons/lvr-monogram.svg'],
    apple: [
      { url: '/favicons/lvr-monogram.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  robots:
    process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <StagingBadge />
        <SpeedInsights />
      </body>
    </html>
  );
}
