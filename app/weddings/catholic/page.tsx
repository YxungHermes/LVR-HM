import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.catholic.seoTitle,
  description: culturalWeddings.catholic.seoDescription,
};

export default function CatholicWeddingPage() {
  return <CulturalWeddingPage weddingType="catholic" />;
}
