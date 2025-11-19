import { Metadata } from "next";
import WeddingTraditionsClient from "./WeddingTraditionsClient";

export const metadata: Metadata = {
  title: "Wedding Traditions Guide | Understanding Cultural & Religious Wedding Ceremonies",
  description: "For couples, guests, and anyone curious about different cultures. Comprehensive guides to 11 wedding traditions from around the world with etiquette tips, ceremony timelines, and cultural meanings.",
};

export default function WeddingTraditionsPage() {
  return <WeddingTraditionsClient />;
}
