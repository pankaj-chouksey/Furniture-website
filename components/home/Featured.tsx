"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── Products data ─── */
const products = [
  {
    id: 1,
    num: "01",
    name: "The Laurent Lounge Chair",
    category: "Seating",
    price: "$1,250",
    image: "/images/collections/living.jpeg",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-0",
  },
  {
    id: 2,
    num: "02",
    name: "Onyx Marble Dining Table",
    category: "Tables",
    price: "$3,400",
    image: "/images/collections/dining.jpeg",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-24",
  },
  {
    id: 3,
    num: "03",
    name: "Minimalist Oak Bedframe",
    category: "Bedroom",
    price: "$2,100",
    image: "/images/collections/bedroom.jpeg",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-12",
  },
];

/* ─── Single product card ─── */
function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  /* Subtle card parallax on scroll */
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={cardRef} className={`flex flex-col ${product.offset}`}>
      {/* Editorial number */}
      <motion.span
        className="mb-4 font-serif text-[11px] tracking-[0.3em] text-gray-400"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.15, duration: 0.6 }}
      >
        {product.num}
      </motion.span>

      {/* Image with clip-path reveal */}
      <Link href="/collection">
        <motion.div
          className={`relative w-full overflow-hidden bg-[#e8e4de] ${product.aspect}`}
          style={{ borderRadius: 4 }}
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
          transition={{
            delay: index * 0.15 + 0.05,
            duration: 1.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Parallax image inside */}
          <motion.div
            className="absolute inset-[-8%]"
            style={{ y: imgY }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              style={{
                transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: hovered ? "scale(1.06)" : "scale(1.0)",
              }}
            />
          </motion.div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />

          {/* Slide-up info panel on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6"
            initial={false}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                {product.category}
              </p>
              <p className="mt-1 font-serif text-lg text-white">
                {product.name}
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-sm">
              <ArrowUpRight size={16} />
            </div>
          </motion.div>
        </motion.div>
      </Link>

      {/* Below-image details */}
      <motion.div
        className="mt-5 flex items-end justify-between"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: index * 0.15 + 0.55,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-gray-400">
            {product.category}
          </p>
          <h3 className="mt-1.5 font-serif text-lg text-gray-900">
            {product.name}
          </h3>
        </div>
        <p className="font-serif text-base text-gray-500 shrink-0 ml-4">
          {product.price}
        </p>
      </motion.div>

      {/* Animated underline */}
      <motion.div
        className="mt-4 h-px bg-gray-200"
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          delay: index * 0.15 + 0.7,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}

/* ─── Section ─── */
export default function Featured() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#f8f6f2] py-28 lg:py-40" style={{ padding: undefined }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

        {/* ── Section header ── */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-gray-200 pb-10 md:flex-row md:items-end">
          <div>
            <motion.p
              className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#8B5E3C]"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Signature Pieces
            </motion.p>
            <div className="mt-4 overflow-hidden">
              <motion.h2
                className="font-serif text-5xl leading-[1.0] text-gray-900 md:text-6xl lg:text-7xl"
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.1, duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
              >
                Featured <span className="italic text-gray-400">Works.</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Link
              href="/collection"
              className="group inline-flex items-center gap-3 rounded-full border border-gray-300 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-widest text-gray-600 transition-all duration-300 hover:border-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white"
            >
              View All Pieces
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* ── Staggered asymmetric product grid ── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
