import { Metadata } from "next";
import WeddingTraditionsClient from "./WeddingTraditionsClient";

export const metadata: Metadata = {
  title: "Wedding Traditions Guide | Understanding Cultural & Religious Wedding Ceremonies",
  description: "Educational guides to Catholic, Jewish, Hindu, Muslim, Greek Orthodox, Chinese, Nigerian, and Korean wedding traditions. Learn ceremony timelines, rituals, customs, and cultural meanings.",
};

export default function WeddingTraditionsPage() {
  return <WeddingTraditionsClient />;
}
