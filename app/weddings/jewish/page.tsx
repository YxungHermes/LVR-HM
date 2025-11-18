import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.jewish.seoTitle,
  description: culturalWeddings.jewish.seoDescription,
};

export default function JewishWeddingPage() {
  return <CulturalWeddingPage weddingType="jewish" />;
}
