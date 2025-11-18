import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.filipino.seoTitle,
  description: culturalWeddings.filipino.seoDescription,
};

export default function FilipinoWeddingPage() {
  return <CulturalWeddingPage weddingType="filipino" />;
}
