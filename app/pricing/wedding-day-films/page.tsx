import { Metadata } from "next";
import PricingDetailPage from "@/components/pricing/PricingDetailPage";
import { pricingPages } from "@/content/pricing";

export const metadata: Metadata = {
  title: pricingPages["wedding-day-films"].seoTitle,
  description: pricingPages["wedding-day-films"].introBody,
};

export default function WeddingDayFilmsPage() {
  return <PricingDetailPage {...pricingPages["wedding-day-films"]} />;
}
