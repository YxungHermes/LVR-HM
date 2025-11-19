import { Metadata } from "next";
import CulturalWeddingPage from "@/components/CulturalWeddingPage";
import { culturalWeddings } from "@/content/cultural-weddings";

export const metadata: Metadata = {
  title: culturalWeddings.chinese.seoTitle,
  description: culturalWeddings.chinese.seoDescription,
};

export default function ChineseWeddingPage() {
  return <CulturalWeddingPage weddingType="chinese" />;
}
