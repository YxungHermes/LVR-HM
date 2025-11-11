import { Metadata } from "next";
import PricingDetailPage from "@/components/pricing/PricingDetailPage";
import { pricingPages } from "@/content/pricing";

export const metadata: Metadata = {
  title: pricingPages.elopements.seoTitle,
  description: pricingPages.elopements.introBody,
};

export default function ElopementsPage() {
  return <PricingDetailPage {...pricingPages.elopements} />;
}
