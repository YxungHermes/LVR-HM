import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureWork from "@/components/SignatureWork";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignatureWork />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
