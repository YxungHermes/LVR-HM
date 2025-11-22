import { Metadata } from "next";
import PricingDetailPage from "@/components/pricing/PricingDetailPage";
import { pricingPages } from "@/content/pricing";

export const metadata: Metadata = {
  title: pricingPages["destination-weddings"].seoTitle,
  description: pricingPages["destination-weddings"].seoDescription,
};

export default function DestinationWeddingsPage() {
  return <PricingDetailPage {...pricingPages["destination-weddings"]} />;
}
