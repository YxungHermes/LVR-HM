import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.mexican.seoTitle,
  description: culturalWeddings.mexican.seoDescription,
};

export default function MexicanWeddingPage() {
  return <CulturalWeddingPage weddingType="mexican" />;
}
