"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const categories = ["All", "Seating", "Tables", "Bedroom", "Storage"];

const products = [
  {
    id: 1,
    name: "The Laurent Lounge Chair",
    category: "Seating",
    price: "$1,250",
    image: "/images/collections/living.jpeg",
  },
  {
    id: 2,
    name: "Onyx Marble Dining Table",
    category: "Tables",
    price: "$3,400",
    image: "/images/collections/dining.jpeg",
  },
  {
    id: 3,
    name: "Minimalist Oak Bedframe",
    category: "Bedroom",
    price: "$2,100",
    image: "/images/collections/bedroom.jpeg",
  },
  {
    id: 4,
    name: "Walnut Executive Desk",
    category: "Tables",
    price: "$2,800",
    image: "/images/collections/workspace.jpeg",
  },
  {
    id: 5,
    name: "Atelier Sofa",
    category: "Seating",
    price: "$4,200",
    image: "/images/collections/living.jpeg", // Reusing for mockup
  },
  {
    id: 6,
    name: "Monolith Sideboard",
    category: "Storage",
    price: "$1,850",
    image: "/images/collections/dining.jpeg", // Reusing for mockup
  },
  {
    id: 7,
    name: "Serene Nightstand",
    category: "Bedroom",
    price: "$450",
    image: "/images/collections/bedroom.jpeg", // Reusing for mockup
  },
  {
    id: 8,
    name: "Curved Accent Chair",
    category: "Seating",
    price: "$890",
    image: "/images/whyus/whyus.jpeg", // Reusing for mockup
  },
];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  /* Parallax setup for luxury header */
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });
  
  // Slower parallax for the main large image
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Faster reverse parallax for the smaller offset image
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="bg-[#f8f6f2] pb-24">
        
        {/* ── Editorial Split Parallax Header ── */}
        <section ref={headerRef} className="relative flex min-h-[80vh] w-full flex-col lg:flex-row pt-32 pb-12">
          
          {/* Left: Typography (Sticky-like behavior achieved via layout) */}
          <div className="flex w-full flex-col justify-center px-6 lg:w-5/12 lg:pl-16 lg:pr-12 xl:pl-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8B5E3C]">
                Explore
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.1] text-gray-900 md:text-6xl lg:text-7xl">
                The
                <br />
                <span className="italic">Collection.</span>
              </h1>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-gray-500">
                A curated selection of our most definitive pieces. Handcrafted materials meet thoughtful, enduring design to elevate your everyday living spaces.
              </p>
            </motion.div>
          </div>

          {/* Right: Parallax Image Collage */}
          <div className="relative mt-16 flex h-[60vh] w-full items-center justify-center px-6 lg:mt-0 lg:h-auto lg:w-7/12 lg:pr-16 xl:pr-24">
            
            {/* Main Image (Back) */}
            <motion.div 
              className="relative aspect-[3/4] w-3/4 max-w-md overflow-hidden rounded-2xl shadow-2xl lg:w-2/3"
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/whyus/whyus.jpeg"
                alt="Living Collection"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Accent Image (Front, Parallax) */}
            <motion.div 
              className="absolute -bottom-10 right-4 aspect-[4/5] w-2/5 max-w-[240px] overflow-hidden rounded-xl border-4 border-[#f8f6f2] shadow-xl lg:-left-12 lg:bottom-12 lg:right-auto"
              style={{ y: y2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/collections/workspace.jpeg"
                alt="Workspace Collection Detail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* ── Toolbar & Filters ── */}
        <section className="container-custom mt-20 px-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === category
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-300 bg-transparent text-gray-500 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Product Count & Sort (Visual only) */}
            <div className="flex items-center gap-6 text-xs font-medium tracking-wider text-gray-500">
              <span>{filteredProducts.length} Products</span>
              <div className="h-4 w-px bg-gray-300" />
              <button className="uppercase hover:text-gray-900">Sort By</button>
            </div>
            
          </div>
        </section>

        {/* ── Product Grid ── */}
        <section className="container-custom mt-16 px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            layout
          >
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Quick View Button */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link href={`/collection`} className="block rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-xl hover:bg-gray-50">
                      Quick View
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-5 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                    {product.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-medium text-gray-900 transition-colors group-hover:text-[#8B5E3C]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-32 text-center">
              <h3 className="font-serif text-2xl text-gray-400">No products found in this category.</h3>
            </div>
          )}
        </section>

      </main>

      <Footer />
    </>
  );
}
