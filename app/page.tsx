import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChooseYourStory from "@/components/ChooseYourStory";
import SignatureWork from "@/components/SignatureWork";
// import Packages from "@/components/Packages";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main
        className="snap-y snap-proximity"
        style={{
          scrollSnapType: "y proximity",
        }}
      >
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <ChooseYourStory />
        </div>
        <div className="snap-start">
          <SignatureWork />
        </div>
        {/* Temporarily removed per spec - to be decided in future flow */}
        {/* <Packages /> */}
        {/* <Testimonials /> */}
        <div className="snap-start">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
