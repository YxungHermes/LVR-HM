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
        - snap-y: vertical scroll snapping
        - snap-proximity: gentle snap - only snaps when close to a section (s-curve feel)
        - Gives user more freedom while scrolling, less aggressive than snap-mandatory
        Only enabled on homepage for cinematic slide-based experience
      */}
      <div className="snap-y snap-proximity overflow-y-auto h-screen">
        <main>
          {/* Each major section has snap-start to create full-screen "slides" */}
          <div className="snap-start">
            <Hero />
          </div>
          <div className="snap-start">
            <ChooseYourStory />
          </div>
          {/* Temporarily removed per spec - to be decided in future flow */}
          {/* <SignatureWork /> */}
          {/* <Packages /> */}
          {/* <Testimonials /> */}
          <div className="snap-start">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
