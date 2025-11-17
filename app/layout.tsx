import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import StagingBadge from "@/components/StagingBadge";
import PageTransition from "@/components/PageTransition";
import ClickOrigin from "@/components/ClickOrigin";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import MetaPixel from "@/components/MetaPixel";

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
  title: "Weddings by Michael Andrade — Cinematic Wedding Films",
  description: "Cinematic wedding films crafted with heart. From intimate elopements to grand celebrations, we create films you'll treasure forever.",
  keywords: ["wedding videography", "cinematic wedding films", "luxury wedding videographer", "weddings by michael andrade"],
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
      <body
        className="font-sans antialiased"
        style={{
          '--lvr-header-height-mobile': '56px',
          '--lvr-header-height-desktop': '72px',
        } as React.CSSProperties}
      >
        {/* Capture click position for radial transition mode */}
        <ClickOrigin />

        {/* SVG gooey blur filter for CTA button extra depth */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <filter id="lvrGooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>

        {/* Page transitions - switch between "crossfade" or "radial" */}
        <PageTransition mode="crossfade" tint="#FAF7F2">
          {children}
        </PageTransition>

        <StagingBadge />
        <SpeedInsights />

        {/* Google Analytics 4 - Website traffic tracking */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
            <ScrollDepthTracker />
          </>
        )}

        {/* Meta Pixel - Facebook/Instagram ad retargeting */}
        <MetaPixel />
      </body>
    </html>
  );
}
