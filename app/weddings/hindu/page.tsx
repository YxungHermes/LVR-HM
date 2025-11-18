import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.hindu.seoTitle,
  description: culturalWeddings.hindu.seoDescription,
};

export default function HinduWeddingPage() {
  return <CulturalWeddingPage weddingType="hindu" />;
}
