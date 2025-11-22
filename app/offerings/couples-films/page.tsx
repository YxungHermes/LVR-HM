import { Metadata } from "next";
import PricingDetailPage from "@/components/pricing/PricingDetailPage";
import { pricingPages } from "@/content/pricing";

export const metadata: Metadata = {
  title: pricingPages["couples-films"].seoTitle,
  description: pricingPages["couples-films"].seoDescription,
};

export default function CouplesFilmsPage() {
  return <PricingDetailPage {...pricingPages["couples-films"]} />;
}
