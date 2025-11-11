import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChooseYourStory from "@/components/ChooseYourStory";
// import SignatureWork from "@/components/SignatureWork";
// import Packages from "@/components/Packages";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChooseYourStory />
        {/* Temporarily removed per spec - to be decided in future flow */}
        {/* <SignatureWork /> */}
        {/* <Packages /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
