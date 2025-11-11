import { Metadata } from "next";
import PricingDetailPage from "@/components/pricing/PricingDetailPage";
import { pricingPages } from "@/content/pricing";

export const metadata: Metadata = {
  title: pricingPages["adventure-sessions"].seoTitle,
  description: pricingPages["adventure-sessions"].introBody,
};

export default function AdventureSessionsPage() {
  return <PricingDetailPage {...pricingPages["adventure-sessions"]} />;
}
