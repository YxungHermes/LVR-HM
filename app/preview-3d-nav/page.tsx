"use client";

import Header3D from "@/components/Header3D";
import { motion } from "framer-motion";

export default function Preview3DNav() {
  return (
    <>
      <Header3D />

      {/* Hero Section - Light background to see transparent nav */}
      <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="font-serif text-6xl md:text-8xl font-bold text-stone-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Love Stories
            <br />
            <span className="text-rose-wax-red">Worth Reliving</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cinematic wedding films crafted with heart. From intimate elopements to grand celebrations.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/consultation"
              className="px-8 py-4 bg-rose-wax-red text-white font-bold uppercase text-sm tracking-wider rounded-full hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Book Consultation
            </a>
            <a
              href="/films"
              className="px-8 py-4 bg-white border-2 border-stone-800 text-stone-800 font-bold uppercase text-sm tracking-wider rounded-full hover:bg-stone-800 hover:text-white transition-colors"
            >
              View Films
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Solid background to see nav transform */}
      <section className="min-h-screen bg-white py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl font-bold text-stone-800 mb-8 text-center">
            3D Glass Morphism Navigation
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Scroll down to see the navigation transform from a transparent floating pill to a compact,
              solid glass design. The 3D perspective effect creates depth and visual interest.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
                <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">✨ Features</h3>
                <ul className="space-y-3 text-stone-600">
                  <li>• 3D pill design with perspective effects</li>
                  <li>• Glass morphism with backdrop blur</li>
                  <li>• Smooth scale animation on scroll</li>
                  <li>• Mega menus with staggered animations</li>
                  <li>• Mobile menu with 3D card flip</li>
                  <li>• Scroll progress indicator</li>
                  <li>• Active page highlighting</li>
                  <li>• Smooth scroll to top button</li>
                </ul>
              </div>

              <div className="bg-rose-50 p-8 rounded-lg border border-rose-200">
                <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">🎨 Design Details</h3>
                <ul className="space-y-3 text-stone-600">
                  <li>• Floating pill at top of page</li>
                  <li>• Expands when scrolled to top (95% width)</li>
                  <li>• Contracts when scrolling (90% width)</li>
                  <li>• White/transparent glass effect</li>
                  <li>• Rose gold accent color</li>
                  <li>• Hover glow effects on links</li>
                  <li>• CTA button with hover lift</li>
                  <li>• Mobile-first responsive design</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-wax-red to-stone-800 text-white p-12 rounded-2xl my-12 text-center">
              <h3 className="font-serif text-4xl font-bold mb-4">Try It Out!</h3>
              <p className="text-xl mb-6">Hover over "Films", "Services", "Traditions", or "Process" to see the mega menus</p>
              <p className="text-lg opacity-90">On mobile, tap the hamburger menu to see the 3D card flip animation</p>
            </div>

            <h3 className="font-serif text-3xl font-bold text-stone-800 mt-16 mb-6">Keep Scrolling...</h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              The navigation will compact as you scroll down. Notice how it scales down and becomes
              more solid. The 3D perspective creates a subtle depth effect that makes the navigation
              feel premium and modern.
            </p>
          </div>
        </div>
      </section>

      {/* More Content */}
      <section className="min-h-screen bg-gradient-to-br from-stone-50 to-rose-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl font-bold text-stone-800 mb-8">
            Scroll to Top
          </h2>
          <p className="text-stone-600 text-xl leading-relaxed mb-12">
            A scroll-to-top button appears after scrolling 400px. Click it to smoothly return to the top!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-stone-100">
                <div className="w-16 h-16 bg-rose-wax-red rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {i}
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Feature {i}</h3>
                <p className="text-stone-600">
                  Beautiful design with smooth animations and premium effects.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-3xl mb-4">Love, Violeta Rose</p>
          <p className="text-stone-400">Cinematic Wedding Films</p>
        </div>
      </footer>
    </>
  );
}
