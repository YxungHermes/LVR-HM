import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.muslim.seoTitle,
  description: culturalWeddings.muslim.seoDescription,
};

export default function MuslimWeddingPage() {
  return <CulturalWeddingPage weddingType="muslim" />;
}
