import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChooseYourStory from "@/components/ChooseYourStory";
// import SignatureWork from "@/components/SignatureWork";
// import Packages from "@/components/Packages";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothSnapScroll from "@/components/SmoothSnapScroll";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      {/*
        Smooth snap scroll container
        - Detects when user stops scrolling
        - Smoothly eases into nearest section instead of abrupt snap
        - Only snaps if within 30% of section boundary
        - Footer remains freely scrollable
      */}
      <SmoothSnapScroll>
        <main>
          {/* Each major section smoothly snaps with data-snap-section */}
          <div data-snap-section>
            <Hero />
          </div>
          <div data-snap-section>
            <ChooseYourStory />
          </div>
          {/* Temporarily removed - waiting for couple videos to replace destination reel */}
          {/* <SignatureWork /> */}
          {/* <Packages /> */}
          {/* <Testimonials /> */}
          <div data-snap-section>
            <Contact />
          </div>
        </main>
        {/* Footer: no snap attribute, flows naturally after Contact */}
        <Footer />
      </SmoothSnapScroll>
    </div>
  );
}
