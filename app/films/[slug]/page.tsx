import { notFound } from "next/navigation";
import { signatureWork } from "@/content/home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

// Generate static params for all films
export async function generateStaticParams() {
  return signatureWork.map((film) => ({
    slug: film.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-'),
  }));
}

// Generate metadata for each film
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const film = signatureWork.find(
    (f) => f.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === params.slug
  );

  if (!film) {
    return {
      title: "Film Not Found | Love, Violeta Rose",
    };
  }

  return {
    title: `${film.title} - ${film.location} Wedding Film | Love, Violeta Rose`,
    description: `${film.description} Watch the cinematic wedding film for ${film.title}'s ${film.date} celebration in ${film.location}.`,
  };
}

export default function FilmDetailPage({ params }: { params: { slug: string } }) {
  // Find the film based on slug
  const film = signatureWork.find(
    (f) => f.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === params.slug
  );

  if (!film) {
    notFound();
  }

  return (
    <>
      <Header settled logoAbove />
      <main className="bg-black">
        {/* Hero Video Section */}
        <section className="relative h-screen">
          {/* Vimeo Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${film.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
              className="absolute pointer-events-none"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "56.25vw",
                minHeight: "100%",
                minWidth: "177.78vh",
                transform: "translate(-50%, -50%) scale(1.12)",
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title={film.title}
            />
          </div>

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.60) 35%, rgba(0, 0, 0, 0.30) 60%, rgba(0, 0, 0, 0.15) 100%)",
            }}
          />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 z-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-4">
                <Link
                  href="/films"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Films
                </Link>
              </div>
              <p className="text-sm md:text-base text-white/70 uppercase tracking-widest mb-3">
                {film.style} • {film.date}
              </p>
              <h1
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
                style={{
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 4px 24px rgba(0, 0, 0, 0.6)'
                }}
              >
                {film.title}
              </h1>
              <p
                className="text-xl md:text-2xl text-white/90 mb-8 font-light"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                }}
              >
                {film.location}
              </p>
            </div>
          </div>
        </section>

        {/* Film Details Section */}
        <section className="bg-cream px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* Film Details */}
              <div className="md:col-span-2">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                  Their Story
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-espresso leading-relaxed mb-4">
                    {film.description}
                  </p>

                  {film.title === "Selene & Isidro" && (
                    <>
                      <p className="text-espresso leading-relaxed mb-4">
                        Against the breathtaking backdrop of Utah's mountain landscapes, Selene and Isidro celebrated their love surrounded by family and friends. Every moment was filled with genuine emotion, from the intimate ceremony to the joyful reception.
                      </p>
                      <p className="text-espresso leading-relaxed mb-4">
                        What made their day special wasn't just the stunning location, but the way their love radiated through every glance, every laugh, and every embrace. Their wedding film captures those raw, authentic moments that make you feel like you're right there with them, reliving the celebration.
                      </p>
                    </>
                  )}

                  {film.title === "Chrislady & Emanuel" && (
                    <>
                      <p className="text-espresso leading-relaxed mb-4">
                        The sun-drenched island of Majorca set the scene for this romantic Mediterranean wedding. Chrislady and Emanuel's trailer showcases the cinematic beauty of a destination celebration where every frame feels like a work of art.
                      </p>
                      <p className="text-espresso leading-relaxed mb-4">
                        From the cobblestone streets to the ocean vistas, this film captures not just a wedding, but an entire experience—the kind of destination celebration that becomes a story told for generations.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Sidebar Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-espresso/70 font-semibold mb-2">Location</h3>
                  <p className="font-serif text-xl text-ink">{film.location}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-espresso/70 font-semibold mb-2">Date</h3>
                  <p className="font-serif text-xl text-ink">{film.date}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-espresso/70 font-semibold mb-2">Style</h3>
                  <p className="font-serif text-xl text-ink">{film.style}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-espresso/70 font-semibold mb-2">Collection</h3>
                  <p className="font-serif text-xl text-ink capitalize">{film.collection.replace('-', ' ')}</p>
                </div>
              </div>
            </div>

            {/* Full Film Embed */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-16">
              <iframe
                src={`https://player.vimeo.com/video/${film.vimeoId}?title=0&byline=0&portrait=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`${film.title} Wedding Film`}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-warm-sand/30 px-6 py-20 border-y border-coffee/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              Ready to create your own film?
            </h3>
            <p className="text-base md:text-lg text-espresso mb-8 leading-relaxed">
              Every wedding is unique, and every film tells a different story. Let's talk about yours.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-3 px-10 py-4 bg-rose-wax-red text-white font-semibold rounded-full hover:bg-rose-wax-red/90 hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm"
            >
              <span>Book Your Consultation</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* More Films Section */}
        <section className="bg-cream px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
                More Love Stories
              </h3>
              <p className="text-espresso/70">Explore our portfolio of cinematic wedding films</p>
            </div>
            <div className="text-center">
              <Link
                href="/films"
                className="inline-flex items-center gap-2 text-rose-wax-red hover:text-rose-wax-red/80 font-semibold uppercase tracking-wider text-sm transition-colors"
              >
                <span>View All Films</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
