"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.05]);

  return (
    <div ref={containerRef} className="bg-[#f8f6f2]">
      <Navbar />

      <main>
        {/* ── 1. The Editorial Hero ── */}
        <section ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#16120e]">
          <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
            <Image
              src="/images/whyus/whyus.jpeg"
              alt="Oak & Stone Heritage"
              fill
              className="object-cover object-center opacity-60 grayscale-[30%]"
              priority
            />
            {/* Dark gradient for pure contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#16120e]" />
          </motion.div>

          {/* Absolute Center Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.6em] text-[#C8A97E]">
                Est. 2012 — London
              </p>
              <h1 className="font-serif text-[12vw] leading-[0.85] text-white opacity-90 mix-blend-overlay">
                HERITAGE.
              </h1>
            </motion.div>
          </div>
          
          {/* Bottom scroll indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="h-16 w-px bg-gradient-to-b from-white/50 to-transparent" />
            <span className="text-[9px] uppercase tracking-widest text-white/50">Scroll</span>
          </motion.div>
        </section>

        {/* ── 2. The Manifesto (Asymmetric Layout) ── */}
        <section className="relative z-10 -mt-10 bg-[#f8f6f2] pt-32 pb-40 rounded-t-[3rem] px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            
            <motion.h2 
              className="max-w-4xl font-serif text-5xl leading-[1.1] text-gray-900 md:text-7xl lg:text-[5.5rem]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              We don't design for seasons. <br />
              <span className="italic text-[#8B5E3C]">We build for generations.</span>
            </motion.h2>

            <div className="mt-24 flex flex-col items-start gap-16 lg:flex-row lg:gap-32">
              
              {/* Tall Portrait Image */}
              <motion.div 
                className="relative aspect-[3/4] w-full max-w-sm shrink-0 overflow-hidden rounded-sm lg:w-[400px]"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/images/collections/workspace.jpeg"
                  alt="Craftsmanship"
                  fill
                  className="object-cover scale-105"
                />
              </motion.div>

              {/* Airy Text Block */}
              <motion.div 
                className="flex max-w-xl flex-col gap-10 pt-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg leading-relaxed text-gray-600 font-light">
                  Founded on the principle that true luxury is defined by permanence, Oak & Stone was born out of a desire to create furniture that outlasts the ephemera of modern trends. We believe that your home is a living sanctuary, and the pieces within it should hold meaning, character, and absolute integrity.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-light">
                  Every dining table, lounge chair, and bedframe that leaves our workshop is the culmination of hundreds of hours of design refinement and masterful craftsmanship. We don't believe in shortcuts. We believe in wood that ages beautifully, joinery that holds forever, and finishes that tell a story over time.
                </p>
                
                <div className="pt-8">
                  <Image src="/images/collections/living.jpeg" alt="Signature" width={120} height={40} className="opacity-0" /> {/* Placeholder for actual signature image */}
                  <p className="font-serif text-3xl italic text-gray-900 mt-4">Eleanor Richards</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-gray-400">Founder & Creative Director</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 3. The Materials (Alternating Massive Blocks) ── */}
        <section className="bg-[#16120e] py-40">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
            
            <div className="mb-32">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C8A97E]">
                The Foundation
              </p>
              <h2 className="mt-6 font-serif text-5xl text-white md:text-7xl">
                Honest <span className="italic text-gray-500">Materials.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-32 lg:gap-48">
              
              {/* Block 1: Wood */}
              <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
                <motion.div 
                  className="relative aspect-[4/5] w-full lg:w-1/2 overflow-hidden"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src="/images/collections/living.jpeg" alt="Solid Wood" fill className="object-cover" />
                </motion.div>
                <motion.div 
                  className="lg:w-1/2 max-w-md"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-[120px] font-serif leading-none text-white/5 mb-4">01</div>
                  <h3 className="font-serif text-4xl text-white">Solid Oak & Walnut</h3>
                  <p className="mt-6 text-base leading-relaxed text-white/50 font-light">
                    Sourced from sustainably managed forests, our timbers are kiln-dried and hand-selected for striking grain patterns. We celebrate the natural imperfections that make every single piece entirely unique.
                  </p>
                </motion.div>
              </div>

              {/* Block 2: Stone (Reversed) */}
              <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:gap-24">
                <motion.div 
                  className="lg:w-1/2 max-w-md lg:text-right flex flex-col lg:items-end"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-[120px] font-serif leading-none text-white/5 mb-4">02</div>
                  <h3 className="font-serif text-4xl text-white">Natural Stone</h3>
                  <p className="mt-6 text-base leading-relaxed text-white/50 font-light">
                    From Italian Carrara to deeply veined Onyx, our marble is carved from single blocks to ensure seamless, monumental beauty. Cold to the touch, yet bringing incredible warmth to any room.
                  </p>
                </motion.div>
                <motion.div 
                  className="relative aspect-[4/5] w-full lg:w-1/2 overflow-hidden"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src="/images/collections/dining.jpeg" alt="Natural Stone" fill className="object-cover" />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
