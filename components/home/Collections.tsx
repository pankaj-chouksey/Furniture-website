"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

/* ─────────────────────────────────────────
   How many px of extra vertical scroll
   drives the full horizontal travel.
   Increase to make the scroll feel slower.
───────────────────────────────────────── */
const EXTRA_SCROLL = 1600;

/* ─────────────────────────────────────────
   Word-by-word clip reveal
───────────────────────────────────────── */
function RevealHeadline({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              delay: delay + i * 0.09,
              duration: 0.78,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────
   Image card
───────────────────────────────────────── */
function ImageCard({
  src,
  title,
  index,
}: {
  src: string;
  title: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative flex-shrink-0 overflow-hidden rounded-2xl snap-start"
      style={{
        width:  "clamp(240px, 22vw, 320px)",
        height: "clamp(300px, 52vh, 460px)",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href="/collection" className="group block h-full relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />

        {/* Dark hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Title */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          <p className="translate-y-3 text-xs font-semibold uppercase tracking-[0.28em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {title}
          </p>
        </div>

        {/* Corner pill */}
        <span className="absolute right-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore →
        </span>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Collections — pinned horizontal scroll
───────────────────────────────────────── */
const images = [
  { src: "/images/collections/living.jpeg",    title: "Living Room" },
  { src: "/images/collections/dining.jpeg",    title: "Dining"      },
  { src: "/images/collections/bedroom.jpeg",   title: "Bedroom"     },
  { src: "/images/collections/workspace.jpeg", title: "Workspace"   },
];

export default function Collections() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ── 1. Tall wrapper — this is what the browser scrolls through ── */
  const pinnedRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pinnedRef,
    // start: when wrapper-top hits viewport-top (pin starts)
    // end:   when wrapper-bottom hits viewport-bottom (pin ends)
    offset: ["start start", "end end"],
  });

  /* Spring smoothing adds weight / momentum */
  const spring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.7,
  });

  /* Map 0→1 to 0→-(horizontal travel distance) */
  const x = useTransform(spring, [0, 1], [0, -(EXTRA_SCROLL - 400)]);
  const progressWidth = useTransform(spring, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#f5f3ef]" style={{ padding: 0 }}>

      {/* ── TOP HEADER — scrolls normally ── */}
      <div className="container-custom px-8 pb-16 pt-24 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">

          {/* Left — word reveal headline */}
          <div>
            <h2 className="font-sans text-4xl font-black uppercase leading-tight tracking-[0.16em] text-gray-900 lg:text-5xl">
              <RevealHeadline text="Redefine Your" delay={0} />
              <br />
              <RevealHeadline text="Living Space" delay={0.18} />
            </h2>
            <motion.p
              className="mt-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              Crafted for comfort.&nbsp;&nbsp;Designed for elegance.
            </motion.p>
          </div>

          {/* Right — description */}
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-relaxed text-gray-500">
              Discover our curated collection of handcrafted furniture, designed
              to transform your home into a sanctuary of style and sophistication.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        className="mx-8 h-px bg-gray-200 lg:mx-16"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── PINNED SECTION ──────────────────────────────────────────
          This wrapper is taller than the viewport.
          The browser scrolls through the extra height while
          the sticky inner stays fixed, driving the horizontal pan.
      ─────────────────────────────────────────────────────────── */}
      <div
        ref={pinnedRef}
        style={{ height: isMobile ? "auto" : `calc(100vh + ${EXTRA_SCROLL}px)` }}
      >
        {/* Sticky viewport — stays locked while wrapper scrolls */}
        <div
          className={
            isMobile
              ? "relative flex flex-col h-auto bg-[#f5f3ef] pt-10 pb-16"
              : "sticky top-0 flex h-screen items-center overflow-hidden bg-[#f5f3ef]"
          }
        >
          {/* Left label */}
          <div className="relative z-10 flex-shrink-0 px-8 lg:px-16">
            <div className="overflow-hidden">
              <motion.h3
                className="font-sans text-4xl font-black uppercase leading-[0.92] tracking-[0.1em] text-gray-900 lg:text-5xl"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                Shop
                <br />
                Our
                <br />
                Collections
              </motion.h3>
            </div>

            <motion.p
              className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8B5E3C]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              200+ Categories
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Link
                href="/collection"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-gray-600 transition-all duration-300 hover:border-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white"
              >
                View All
              </Link>
            </motion.div>
          </div>

          {/* ── Horizontally translating image strip with smooth CSS mask blend ── */}
          <div
            className={
              isMobile
                ? "relative w-full overflow-x-auto snap-x snap-mandatory pb-6 mt-10"
                : "relative flex-1 overflow-hidden"
            }
            style={
              isMobile
                ? undefined
                : {
                    maskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
                  }
            }
          >
            <motion.div
              className={isMobile ? "flex gap-5 px-8" : "flex gap-5 pl-8"}
              style={isMobile ? { willChange: "transform" } : { x, willChange: "transform" }}
            >
              {images.map((img, i) => (
                <ImageCard key={img.title} {...img} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          {!isMobile && (
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-[#8B5E3C]"
              style={{ width: progressWidth }}
            />
          )}

          {/* Ghost label */}
          {!isMobile && (
            <motion.p
              className="absolute bottom-6 right-10 text-[9px] font-bold uppercase tracking-[0.35em] text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Scroll to explore
            </motion.p>
          )}
        </div>
      </div>

    </section>
  );
}