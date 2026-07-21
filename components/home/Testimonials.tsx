"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Eleanor Richards",
    role: "Interior Designer",
    text: "The craftsmanship is unparalleled. Oak & Stone pieces don't just fill a room; they define its character. Every client I've specified them for has been absolutely thrilled.",
    rating: 5,
  },
  {
    name: "James Cavendish",
    role: "Homeowner",
    text: "We furnished our entire dining room with Oak & Stone. The table is a masterpiece, and the delivery process was seamless. Truly a white-glove experience from start to finish.",
    rating: 5,
  },
  {
    name: "Sophia Laurent",
    role: "Architect",
    text: "Finding furniture that respects both modern minimalism and traditional durability is rare. Oak & Stone achieves this balance perfectly. Built to last generations.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Boutique Hotel Owner",
    text: "Our guests constantly ask where our lobby furniture is from. It handles heavy commercial use while maintaining a luxurious, residential feel. Exceptional quality.",
    rating: 5,
  },
  {
    name: "Isabella Vance",
    role: "Homeowner",
    text: "The custom finish on our bed frame matches our vision perfectly. The attention to detail in the joinery is something you just don't see anymore. Worth every penny.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-[#C8A97E] text-[#C8A97E]" : "fill-transparent text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for background element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Duplicate for seamless marquee
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white py-28 lg:py-36">
      
      {/* ── Subtle Background Accent ── */}
      <motion.div 
        className="pointer-events-none absolute -right-[20%] top-0 h-[800px] w-[800px] rounded-full bg-[#f8f6f2] opacity-50 blur-[100px]"
        style={{ y }}
      />

      <div className="container-custom relative z-10 px-8 lg:px-16">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col items-center text-center">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#8B5E3C]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Client Stories
          </motion.p>

          <motion.h2 
            className="mt-5 font-serif text-4xl leading-tight text-gray-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Words from our
            <br />
            <span className="italic text-[#8B5E3C]">patrons.</span>
          </motion.h2>
          
          <motion.div
            className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
      </div>

      {/* ── MARQUEE SCROLL ── */}
      <div className="relative mt-20 flex overflow-hidden">
        
        {/* Left/Right Fade Masks */}
        <div className="absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-white to-transparent md:w-32 lg:w-48" />
        <div className="absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-white to-transparent md:w-32 lg:w-48" />

        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              className="flex w-[320px] flex-col justify-between rounded-3xl border border-gray-100 bg-[#f8f6f2]/50 p-8 shadow-sm backdrop-blur-sm md:w-[400px]"
            >
              <div>
                <StarRating rating={item.rating} />
                <p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-base">
                  &quot;{item.text}&quot;
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 border-t border-gray-200/60 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5E3C] text-sm font-serif text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
