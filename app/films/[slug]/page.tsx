import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { signatureWork } from "@/content/home";

export async function generateStaticParams() {
  return signatureWork.map((film) => ({
    slug: film.slug,
  }));
}

export default function FilmPage({ params }: { params: { slug: string } }) {
  const film = signatureWork.find((f) => f.slug === params.slug);

  if (!film) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-cream">
      <Header />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Film Title */}
          <div className="mb-8 text-center">
            <h1 className="font-serif text-5xl font-bold text-espresso md:text-6xl">
              {film.title}
            </h1>
            <p className="mt-2 text-xl text-espresso/70">{film.subtitle}</p>
          </div>

          {/* Vimeo Player */}
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
            <iframe
              src={`https://player.vimeo.com/video/${film.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title={film.title}
            />
          </div>

          {/* Back to Films */}
          <div className="mt-12 text-center">
            <a
              href="/#signature-work"
              className="inline-flex items-center text-espresso transition-colors hover:text-espresso/70"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="font-medium">Back to Films</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />

      {/* Load Vimeo Player Script */}
      <script src="https://player.vimeo.com/api/player.js" async />
    </div>
  );
}
