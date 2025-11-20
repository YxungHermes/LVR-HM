export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lovevioletarose.com",
    "name": "Love, Violeta Rose",
    "alternateName": "Love Violeta Rose",
    "description": "Cinematic wedding and couples films crafted with heart. From intimate elopements to grand celebrations, adventure sessions to anniversary films.",
    "url": "https://lovevioletarose.com",
    "telephone": "+1-347-774-7840",
    "email": "contact@violetarose.com",
    "priceRange": "$$-$$$",
    "image": "https://lovevioletarose.com/og-image.jpg",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lovevioletarose.com/favicons/lvr-monogram.svg",
      "width": "512",
      "height": "512"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "serviceType": [
      "Wedding Videography",
      "Cinematic Wedding Films",
      "Elopement Films",
      "Couples Films",
      "Destination Wedding Videography"
    ],
    "sameAs": [
      "https://instagram.com/lovevioletarose",
      "https://vimeo.com/lovevioletarose"
    ],
    "founder": {
      "@type": "Person",
      "name": "Violeta Rose",
      "jobTitle": "Wedding Filmmaker"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Videography",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Love, Violeta Rose",
      "url": "https://lovevioletarose.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Film Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elopement & Intimate Wedding Films",
            "description": "4-6 hours of coverage with cinematic highlight film for intimate celebrations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Wedding Day Films",
            "description": "8-10 hours of coverage with highlight film, ceremony, and speeches edits"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Destination Wedding Films",
            "description": "Multi-day coverage for destination weddings with custom planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Couples & Engagement Films",
            "description": "Adventure sessions and couples films for engagements and anniversaries"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Love, Violeta Rose",
    "url": "https://lovevioletarose.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://lovevioletarose.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
