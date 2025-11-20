"use client";

import HeaderRollover from "@/components/HeaderRollover";
import { motion } from "framer-motion";

export default function PreviewRollover() {
  return (
    <>
      <HeaderRollover />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-warm-sand/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-stone-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Rollover Navigation
            <br />
            <span className="text-rose-wax-red italic">Preview</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hover over the navigation links to see the elegant rollover effect. Scroll down to see the morphing animation.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="px-6 py-3 bg-rose-wax-red/10 border border-rose-wax-red/20 rounded-full text-sm text-stone-700">
              ✨ Dual-state rollover effect
            </div>
            <div className="px-6 py-3 bg-rose-wax-red/10 border border-rose-wax-red/20 rounded-full text-sm text-stone-700">
              🎯 Morphing width on scroll
            </div>
            <div className="px-6 py-3 bg-rose-wax-red/10 border border-rose-wax-red/20 rounded-full text-sm text-stone-700">
              📱 Full-screen mobile menu
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="min-h-screen bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-4 text-center">
            How It Works
          </h2>
          <p className="text-center text-stone-600 text-lg mb-16 max-w-2xl mx-auto">
            The navigation bar combines elegant animations with functional design
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-wax-red/10">
              <div className="w-16 h-16 bg-rose-wax-red rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3 text-center">Rollover Effect</h3>
              <p className="text-stone-600 text-center leading-relaxed">
                Hover over nav links to see them transform from uppercase sans-serif to elegant italic serif in rose gold
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl border border-stone-200">
              <div className="w-16 h-16 bg-stone-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3 text-center">Morphing Bar</h3>
              <p className="text-stone-600 text-center leading-relaxed">
                The nav bar smoothly expands at the top (95% width) and contracts when scrolling (90% width) with rounded corners
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-warm-sand/20 to-white p-8 rounded-2xl border border-warm-sand/30">
              <div className="w-16 h-16 bg-rose-wax-red rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3 text-center">Mobile Menu</h3>
              <p className="text-stone-600 text-center leading-relaxed">
                Full-screen overlay with staggered animations and large typography for an immersive mobile experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Section */}
      <section className="min-h-screen bg-gradient-to-br from-stone-50 to-rose-50 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-8 text-center">
            Keep Scrolling
          </h2>
          <p className="text-stone-600 text-xl leading-relaxed mb-12 text-center">
            Watch the navigation bar morph as you scroll. It transitions from a wide rounded rectangle to a compact pill shape with smooth easing.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-100">
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">At Top</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>95% width (max-w-7xl)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>Rounded corners (rounded-2xl)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>More padding (py-5 px-8)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>Full button scale</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-100">
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">When Scrolled</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>90% width (max-w-4xl)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>Full pill shape (rounded-full)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>Less padding (py-3 px-6)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-wax-red mt-1">•</span>
                  <span>Button scales down (95%)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-rose-wax-red text-white p-10 rounded-2xl text-center">
            <h3 className="font-serif text-3xl font-bold mb-4">Try It Now!</h3>
            <p className="text-lg mb-6 text-white/90">
              Hover over "Films", "Services", "Traditions", or "Process" in the navigation to see mega menus
            </p>
            <p className="text-white/80">
              On mobile, tap the menu icon to experience the full-screen overlay
            </p>
          </div>
        </div>
      </section>

      {/* More Content for Scrolling */}
      <section className="min-h-screen bg-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-8">
            Design Details
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Glass Effect", desc: "Backdrop blur with 85% white opacity" },
              { title: "Smooth Transitions", desc: "700ms cubic-bezier easing" },
              { title: "Fixed Positioning", desc: "Stays at top with 24px margin" },
              { title: "Centered Navigation", desc: "Absolute positioning for perfect centering" },
              { title: "Mega Menus", desc: "Hover-triggered with staggered animations" },
              { title: "Active States", desc: "Rose gold color for current page" }
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                <h4 className="font-serif text-lg font-bold text-stone-800 mb-2">{item.title}</h4>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a
              href="/"
              className="inline-block px-8 py-4 bg-stone-800 text-white font-bold uppercase text-sm tracking-wider rounded-full hover:bg-rose-wax-red transition-colors shadow-lg"
            >
              Back to Home
            </a>
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
