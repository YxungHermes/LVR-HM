import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.sikh.seoTitle,
  description: culturalWeddings.sikh.seoDescription,
};

export default function SikhWeddingPage() {
  return <CulturalWeddingPage weddingType="sikh" />;
}
