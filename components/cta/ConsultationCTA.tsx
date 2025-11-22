"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { trackCTAClick } from "@/lib/analytics";

type Props = {
  className?: string;
  tone?: "light" | "cream";
};

export default function ConsultationCTA({
  className = "",
  tone = "cream",
}: Props) {
  const pathname = usePathname();
  const params = useSearchParams();
  const sent = params?.get("sent") === "true";

  // Hide on the consultation page itself, and hide if we've just sent the inquiry
  if (pathname === "/consultation" || sent) return null;

  const bg = tone === "light" ? "bg-white" : "bg-[#FAF7F2]";
  const border = "border border-[#E6DAD0]";
  const h2 = "text-2xl md:text-3xl font-serif text-[#1C1A18]";
  const p = "text-[#4A4039] mt-2 max-w-2xl mx-auto";

  return (
    <section
      aria-labelledby="consultation-cta"
      className={`${bg} ${border} rounded-2xl px-6 py-10 md:py-12 text-center mx-auto max-w-3xl shadow-sm ${className}`}
    >
      <h2 id="consultation-cta" className={h2}>
        Not sure which path is right for you?
      </h2>
      <p className={p}>
        Share your date, location, guest count, and what matters most. I'll
        recommend the perfect fit, with clear pricing.
      </p>

      <div className="mt-6">
        <Link
          href="/consultation"
          onClick={() => trackCTAClick(pathname || 'unknown', "Let's Talk", '/consultation')}
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium
                     bg-[#A14C41] text-white hover:opacity-90 transition focus:outline-none focus-visible:ring-2
                     focus-visible:ring-offset-2 focus-visible:ring-[#A14C41]"
          aria-label="Let's talk about your wedding"
        >
          Let's Talk
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
