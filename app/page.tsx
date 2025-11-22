import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChooseYourStory from "@/components/ChooseYourStory";
// import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main
        className="snap-y snap-proximity scroll-smooth"
        style={{
          scrollSnapType: "y proximity",
          scrollBehavior: "smooth",
        }}
      >
        <section className="snap-start snap-always">
          <Hero />
        </section>
        <section className="snap-start snap-always">
          <ChooseYourStory />
        </section>
        {/* Temporarily removed per spec - to be decided in future flow */}
        {/* <Packages /> */}
        <section className="snap-start snap-always">
          <Testimonials />
        </section>
        <section className="snap-start snap-always">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
