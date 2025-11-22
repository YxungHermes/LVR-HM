"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// Blog posts data (in a real app, this would come from a CMS or markdown files)
const blogPosts = [
  {
    slug: "how-to-choose-wedding-videographer-nyc",
    title: "How to Choose a Wedding Videographer in NYC: 10 Questions to Ask",
    excerpt: "Booking a wedding videographer is a big decision. Here are the exact questions to ask to ensure you find the perfect fit for your celebration.",
    category: "Planning Tips",
    date: "November 20, 2025",
    readTime: "8 min read",
    image: "/journal/videographer-guide.jpg",
    featured: true
  },
  {
    slug: "selene-isidro-utah-mountain-wedding",
    title: "Selene & Isidro's Utah Mountain Wedding: A Love Story in Film",
    excerpt: "Against the breathtaking backdrop of Utah's mountains, Selene and Isidro celebrated their love with genuine emotion and timeless moments.",
    category: "Real Weddings",
    date: "November 15, 2025",
    readTime: "6 min read",
    image: "/journal/selene-isidro.jpg",
    featured: true
  },
  {
    slug: "brooklyn-wedding-venues-perfect-for-film",
    title: "Brooklyn Wedding Videography: Top 5 Venues Perfect for Film",
    excerpt: "As a Brooklyn-based wedding videographer, these are the venues that consistently deliver stunning cinematic footage.",
    category: "Planning Tips",
    date: "November 10, 2025",
    readTime: "7 min read",
    image: "/journal/brooklyn-venues.jpg",
    featured: false
  },
  {
    slug: "destination-wedding-videography-guide",
    title: "Destination Wedding Videography: What to Expect & How to Plan",
    excerpt: "Planning a destination wedding? Here's everything you need to know about hiring a videographer for your celebration abroad.",
    category: "Planning Tips",
    date: "November 5, 2025",
    readTime: "10 min read",
    image: "/journal/destination-guide.jpg",
    featured: false
  },
  {
    slug: "elopement-vs-intimate-wedding",
    title: "Elopement vs. Intimate Wedding: Which Film Package is Right for You?",
    excerpt: "Confused about the difference between elopement and intimate wedding packages? Let's break down what you get with each.",
    category: "Planning Tips",
    date: "October 28, 2025",
    readTime: "5 min read",
    image: "/journal/elopement-guide.jpg",
    featured: false
  },
  {
    slug: "ari-billy-brooklyn-box-house-wedding",
    title: "Ari & Billy's Brooklyn Box House Wedding: Urban Elegance Captured",
    excerpt: "A vibrant Brooklyn celebration at Box House showcasing urban elegance, genuine love, and unforgettable moments.",
    category: "Real Weddings",
    date: "October 20, 2025",
    readTime: "6 min read",
    image: "/journal/ari-billy.jpg",
    featured: false
  }
];

const categories = [
  "All Posts",
  "Planning Tips",
  "Real Weddings",
  "Behind the Scenes",
  "Vendor Spotlights"
];

export default function JournalPage() {
  return (
    <>
      <Header settled logoAbove />
      <main className="bg-cream">
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-warm-sand/40 to-cream">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px bg-rose-wax-red/30 w-16" />
                <p className="text-sm uppercase tracking-[0.3em] text-espresso/70 font-semibold">
                  Stories, Insights & Inspiration
                </p>
                <div className="h-px bg-rose-wax-red/30 w-16" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-ink mb-6">
                Journal
              </h1>
              <p className="mt-5 text-base md:text-lg text-espresso max-w-2xl mx-auto leading-relaxed">
                Real wedding stories, planning tips, and insights from behind the lens.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="px-6 py-16 md:py-20 border-b border-coffee/10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-2">Featured</h2>
              <p className="text-espresso/70">Our latest stories and insights</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/journal/${post.slug}`} className="group block">
                    {/* Image */}
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-warm-sand/30 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-warm-sand to-rose-wax-red/20 group-hover:opacity-75 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-20">📷</span>
                      </div>
                    </div>

                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="text-rose-wax-red font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-espresso/40">•</span>
                      <span className="text-espresso/60">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-espresso/80 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Date */}
                    <p className="text-sm text-espresso/50">{post.date}</p>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-2">All Posts</h2>
              <p className="text-espresso/70">Explore our complete collection of stories and guides</p>
            </div>

            {/* Category Filter (optional - can add state to filter) */}
            {/* <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all border border-coffee/10 hover:bg-rose-wax-red hover:text-white hover:border-rose-wax-red"
                >
                  {category}
                </button>
              ))}
            </div> */}

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/journal/${post.slug}`} className="group block">
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-warm-sand/30 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-warm-sand to-rose-wax-red/20 group-hover:opacity-75 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl opacity-20">📷</span>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="mb-2">
                      <span className="text-xs text-rose-wax-red font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-ink mb-2 group-hover:text-rose-wax-red transition-colors leading-tight">
                      {post.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-espresso/50">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA (Optional) */}
        <section className="px-6 py-20 bg-warm-sand/30 border-y border-coffee/10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              Ready to create your own story?
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
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
