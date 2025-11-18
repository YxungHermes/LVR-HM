import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.korean.seoTitle,
  description: culturalWeddings.korean.seoDescription,
};

export default function KoreanWeddingPage() {
  return <CulturalWeddingPage weddingType="korean" />;
}
