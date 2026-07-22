"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#8B5E3C]">
      
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/collections/dining.jpeg"
          alt="Texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#8B5E3C] mix-blend-multiply" />
      </div>

      <div className="container-custom relative z-10 px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C8A97E]">
              Begin Your Journey
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="mt-6 font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to transform
            <br />
            <span className="italic text-white/90">your space?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Schedule a complimentary consultation with our design experts and discover how DK Furnitures can bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#8B5E3C] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button className="group px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:text-[#C8A97E]">
              View Lookbook
              <span className="mt-1 block h-[1px] w-0 bg-[#C8A97E] transition-all duration-300 group-hover:w-full" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
