import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings["greek-orthodox"].seoTitle,
  description: culturalWeddings["greek-orthodox"].seoDescription,
};

export default function GreekOrthodoxWeddingPage() {
  return <CulturalWeddingPage weddingType="greek-orthodox" />;
}
