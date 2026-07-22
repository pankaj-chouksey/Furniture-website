"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "Handcrafted Quality",
  "White Glove Delivery",
  "Custom Finishes",
  "Lifetime Warranty",
  "Sustainable Materials"
];

export default function WhyUs() {
  return (
    <section className="relative h-auto md:h-screen md:min-h-[700px] w-full overflow-hidden bg-[#16120e]">

      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/whyus/whyus.jpeg"
          alt="Luxury Furniture Detail"
          fill
          className="object-cover object-right"
          quality={95}
        />
        {/* Gradient overlays to darken and create mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative flex flex-col md:flex-row h-full w-full">

        {/* ── Glassmorphism Sidebar (Left) ── */}
        <motion.div
          className="relative flex h-auto md:h-full w-full md:w-[320px] lg:w-[380px] flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 bg-black/30 px-8 py-10 md:px-10 md:py-16 backdrop-blur-md"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top Label */}
          <p className="text-xs tracking-[0.2em] text-white/50">Why Us</p>

          {/* Vertical Timeline List */}
          <div className="relative py-10">
            {/* Connecting Vertical Line */}
            <div className="absolute bottom-10 left-[3px] top-10 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <ul className="flex flex-col gap-8">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="group flex items-center gap-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  {/* Diamond Bullet */}
                  <div className="relative z-10 flex h-2 w-2 items-center justify-center rotate-45 border border-[#C8A97E] bg-[#16120e] transition-colors group-hover:bg-[#C8A97E]" />
                  <span className="text-sm tracking-wide text-white/70 transition-colors group-hover:text-white">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Bottom Label */}
          <p className="text-xs tracking-[0.2em] text-white/50">{new Date().getFullYear()}</p>
        </motion.div>

        {/* ── Main Content Area (Right) ── */}
        <div className="relative flex flex-1 flex-col p-8 md:p-16 lg:p-24">

          {/* Centered Large Typography */}
          <div className="flex flex-1 items-center justify-center lg:justify-start lg:pl-10">
            <motion.h2
              className="font-serif text-5xl leading-[0.95] text-white/95 md:text-7xl lg:text-[7rem]"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              DK<br />
              FURNITURES
            </motion.h2>
          </div>

          {/* Bottom Descriptions */}
          <div className="mt-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-3xl lg:self-end">
            <motion.p
              className="text-xs leading-relaxed text-white/60 md:text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              This collection represents a harmonious blend of functional aesthetics, and personal expression. We don&apos;t just build furniture; we craft legacies.
            </motion.p>
            <motion.p
              className="text-xs leading-relaxed text-white/60 md:text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Every detail has been thoughtfully curated to create a space that not only looks beautiful, but also enhances your daily experience and stands the test of time.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
