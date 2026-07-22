"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/* ── Word-by-word reveal ── */
function RevealText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: 40, opacity: 0 }}
            animate={{ y: "0%", rotateX: 0, opacity: 1 }}
            transition={{
              delay: delay + i * 0.09,
              duration: 0.85,
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

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ["0%", "20%"]);
  const contentY = useTransform(scrollY, [0, 400], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  /* Dual-axis mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 22 });
  const panX = useTransform(springX, [-1, 1], ["-2%", "2%"]);
  const panY = useTransform(springY, [-1, 1], ["-2%", "2%"]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden bg-[#16120e]" style={{ padding: 0 }}>

      {/* ── Background with dual parallax ── */}
      <motion.div className="absolute inset-[-5%]" style={{ y: bgY, x: panX }}>
        <motion.div className="absolute inset-0" style={{ y: panY }}>
          <Image
            src="/images/hero/hero.png"
            alt="DK Furnitures — Luxury Furniture"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </motion.div>
      </motion.div>

      {/* ── Overlays ── */}
      {/* Main: left-heavy dark gradient for legibility */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
      {/* Bottom vignette */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {/* Top vignette */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-black/30 to-transparent" />
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Floating year badge (top-right) ── */}
      <motion.div
        className="absolute right-10 top-32 z-20 hidden flex-col items-center gap-2 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <div className="rounded-full border border-white/15 px-4 py-2 backdrop-blur-sm">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/50">Est. 2012 · London</p>
        </div>
      </motion.div>

      {/* ── Main content — bottom-left ── */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end"
        style={{ y: contentY, opacity: overlayOpacity }}
      >
        <div className="container-custom w-full px-6 pb-20 lg:px-12 lg:pb-28">

          {/* Label */}
          <motion.div
            className="mb-7 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <div className="h-[1px] w-10 bg-[#C8A97E]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#C8A97E]">
              Luxury Furniture · Handcrafted
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-[3.5rem] leading-[1.0] text-white sm:text-7xl lg:text-[7.5rem]">
            <RevealText text="Crafted" delay={0.2} />
            <br />
            <RevealText text="for" delay={0.3} className="text-white" />
            {" "}
            <span className="inline-block overflow-hidden">
              <motion.span
                className="shimmer-gold inline-block font-serif"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                modern living.
              </motion.span>
            </span>
          </h1>

          {/* Divider + subtext row */}
          <motion.div
            className="mt-8 flex max-w-lg items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="h-[1px] w-14 shrink-0 bg-white/20" />
            <p className="text-sm leading-relaxed text-white/50">
              Heirloom-grade furniture designed in London, crafted by master artisans for spaces that endure.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex items-center gap-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/collection"
              className="group relative overflow-hidden rounded-full bg-[#C8A97E] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#16120e] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(200,169,126,0.45)]"
            >
              <span className="relative z-10">Explore Collection</span>
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0 opacity-20" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-[#C8A97E]"
            >
              Book a Consultation
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator (bottom-right) ── */}
      <motion.div
        className="absolute bottom-8 right-10 z-20 hidden flex-col items-center gap-3 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.9 }}
      >
        <motion.div
          className="h-12 w-[1px] origin-top bg-gradient-to-b from-[#C8A97E] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="rotate-90 text-[8px] uppercase tracking-[0.4em] text-white/35">Scroll</span>
      </motion.div>

    </section>
  );
}