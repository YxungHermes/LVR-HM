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
    <div className="relative">
      <Header />
      {/*
        Scroll snap container for full-screen sections
        - snap-proximity: subtle snapping only when very close to section
        - Prevents aggressive pull-back when scrolling to footer
        - Each section is a full viewport slide
      */}
      <div className="snap-y snap-proximity overflow-y-auto h-screen scroll-smooth">
        <main>
          {/* Each major section is a full-screen "slide" with snap-start */}
          <Hero />
          <ChooseYourStory />
          {/* Temporarily removed per spec - to be decided in future flow */}
          {/* <SignatureWork /> */}
          {/* <Packages /> */}
          {/* <Testimonials /> */}
          <Contact />
        </main>
        {/* Footer: no snap alignment, flows naturally after Contact */}
        <Footer />
      </div>
    </div>
  );
}
