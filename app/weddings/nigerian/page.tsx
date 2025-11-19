import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.nigerian.seoTitle,
  description: culturalWeddings.nigerian.seoDescription,
};

export default function NigerianWeddingPage() {
  return <CulturalWeddingPage weddingType="nigerian" />;
}
