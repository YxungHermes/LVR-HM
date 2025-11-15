"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

/**
 * Meta Pixel (Facebook Pixel) Integration
 *
 * Tracks page views and custom events for Meta (Facebook/Instagram) advertising.
 * Essential for retargeting campaigns and conversion tracking.
 *
 * Setup:
 * 1. Go to https://business.facebook.com/events_manager
 * 2. Create a Pixel (or use existing one)
 * 3. Copy the Pixel ID (format: 1234567890123456)
 * 4. Add to Vercel: NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id
 *
 * Events tracked:
 * - PageView (automatic on every route change)
 * - ViewContent (consultation page)
 * - Lead (form submission)
 * - Custom events can be added via window.fbq()
 */

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    // Track page view on route change
    if (pixelId && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams, pixelId]);

  // Don't render if pixel ID is not configured
  if (!pixelId) {
    return null;
  }

  return (
    <>
      {/* Meta Pixel base code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* Noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

/**
 * Helper function to track custom events
 *
 * Usage in other components:
 *
 * import { trackMetaEvent } from "@/components/MetaPixel";
 *
 * trackMetaEvent("Lead", { content_name: "Consultation Form" });
 * trackMetaEvent("ViewContent", { content_type: "portfolio" });
 */
export function trackMetaEvent(eventName: string, data?: Record<string, any>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, data);
  }
}
