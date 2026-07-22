"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─── Floating-label input on light background ─── */
function Field({
  label,
  name,
  type = "text",
  span2 = false,
}: {
  label: string;
  name: string;
  type?: string;
  span2?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState("");
  const lifted = focused || val.length > 0;

  return (
    <div className={`relative pt-6 ${span2 ? "col-span-1 sm:col-span-2" : "col-span-1"}`}>
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-0 transition-all duration-300 ease-out ${
          lifted
            ? "top-0 text-[9px] tracking-[0.35em] uppercase text-[#8B5E3C]"
            : "top-6 text-sm text-gray-400"
        }`}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={3}
          className="w-full resize-none border-b border-gray-200 bg-transparent pb-3 pt-2 text-sm text-gray-900 outline-none transition-colors duration-300 focus:border-gray-900"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className="w-full border-b border-gray-200 bg-transparent pb-3 pt-2 text-sm text-gray-900 outline-none transition-colors duration-300 focus:border-gray-900"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setVal(e.target.value)}
        />
      )}
      {/* Gold sweep underline on focus */}
      <motion.span
        className="absolute bottom-0 left-0 h-[1.5px] bg-[#8B5E3C]"
        initial={false}
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

const interests = [
  "Living Room", "Bedroom", "Dining", "Home Office",
  "Full Home", "Custom Commission",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (tag: string) =>
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col lg:flex-row overflow-hidden">

        {/* ════════════════════════════════════
            LEFT — Dark editorial panel
        ════════════════════════════════════ */}
        <div className="relative flex w-full flex-col overflow-hidden bg-[#16120e] lg:sticky lg:top-0 lg:h-screen lg:w-[42%]">

          {/* Ambient image */}
          <div className="absolute inset-0">
            <Image
              src="/images/whyus/whyus.jpeg"
              alt="DK Furnitures Studio"
              fill
              className="object-cover opacity-[0.18] scale-110"
              style={{ objectPosition: "center 40%" }}
            />
            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#16120e] via-[#16120e]/60 to-transparent" />
            {/* Grain */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between px-8 pb-14 pt-32 lg:px-14 xl:px-16">

            {/* Top: Headline */}
            <div>
              <motion.span
                className="text-[9px] font-semibold uppercase tracking-[0.5em] text-[#C8A97E]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Begin the conversation
              </motion.span>

              <motion.h1
                className="mt-8 font-serif text-5xl leading-[1.0] text-white lg:text-6xl xl:text-7xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                Let&apos;s create
                <br />
                <em className="not-italic text-[#C8A97E]">something</em>
                <br />
                exceptional.
              </motion.h1>

              <motion.p
                className="mt-10 max-w-xs text-sm leading-relaxed text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9 }}
              >
                Whether a single statement chair or an entire estate, share your vision and our team will respond within 48 hours.
              </motion.p>
            </div>

            {/* Bottom: Contact info */}
            <motion.div
              className="flex flex-col gap-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 1 }}
            >
              {[
                { label: "Atelier",  value: "14 Belgravia Mews, London SW1X 8PL" },
                { label: "Phone",    value: "+44 (0) 20 7123 4567" },
                { label: "Email",    value: "hello@dkfurnitures.com" },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 border-t border-white/[0.07] py-5"
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 pt-0.5 shrink-0">
                    {label}
                  </span>
                  <span className="text-right text-sm text-white/60">
                    {value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between border-t border-white/[0.07] pt-5 text-[10px] text-white/25">
                <span>Mon – Fri · 9:00–18:00</span>
                <span>Sat · 10:00–16:00</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ════════════════════════════════════
            RIGHT — Clean light form panel
        ════════════════════════════════════ */}
        <div className="flex w-full flex-col justify-center bg-[#f8f6f2] px-8 py-28 lg:w-[58%] lg:px-16 xl:px-24">

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Form header */}
                <div className="flex items-end justify-between border-b border-gray-200 pb-8">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#8B5E3C]">
                      Consultation Request
                    </p>
                    <h2 className="mt-3 font-serif text-3xl text-gray-900 lg:text-4xl">
                      Your vision, <em className="not-italic text-gray-500">our craft.</em>
                    </h2>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400">Est.</p>
                    <p className="font-serif text-2xl text-gray-200">2012</p>
                  </div>
                </div>

                <form
                  className="mt-12"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  {/* Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                    <Field label="First Name"     name="first_name" />
                    <Field label="Last Name"      name="last_name"  />
                    <Field label="Email Address"  name="email"  type="email" />
                    <Field label="Phone Number"   name="phone"  type="tel"   />
                    <Field label="Your Message"   name="message" type="textarea" span2 />
                  </div>

                  {/* Interest Tags */}
                  <div className="mt-14">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-5">
                      I&apos;m interested in
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {interests.map((tag) => {
                        const active = selected.includes(tag);
                        return (
                          <motion.button
                            key={tag}
                            type="button"
                            onClick={() => toggle(tag)}
                            whileTap={{ scale: 0.96 }}
                            className={`rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 ${
                              active
                                ? "border-[#8B5E3C] bg-[#8B5E3C] text-white shadow-md shadow-[#8B5E3C]/20"
                                : "border-gray-300 bg-transparent text-gray-500 hover:border-gray-400 hover:text-gray-700"
                            }`}
                          >
                            {tag}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-14 flex items-center gap-8">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group flex items-center gap-3 rounded-full bg-[#16120e] px-9 py-4.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-xl shadow-black/20 transition-all duration-300 hover:bg-[#8B5E3C] hover:shadow-[#8B5E3C]/30"
                      style={{ paddingTop: "1.1rem", paddingBottom: "1.1rem" }}
                    >
                      Send Enquiry
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </motion.button>
                    <p className="text-[10px] text-gray-400">Response within 48 hrs</p>
                  </div>
                </form>
              </motion.div>

            ) : (
              /* ─── Success State ─── */
              <motion.div
                key="success"
                className="flex flex-col items-center py-20 text-center"
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Animated checkmark ring */}
                <motion.div
                  className="relative flex h-24 w-24 items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 16 }}
                >
                  <div className="absolute inset-0 rounded-full border border-[#C8A97E]/40" />
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>

                <motion.h2
                  className="mt-10 font-serif text-5xl text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Thank you.
                </motion.h2>

                <motion.p
                  className="mt-5 max-w-sm text-base leading-relaxed text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Your enquiry has been received. A member of our design team will be in touch personally within 48 hours.
                </motion.p>

                <motion.div
                  className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                />

                <motion.p
                  className="mt-6 text-[9px] uppercase tracking-[0.4em] text-[#8B5E3C]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  DK Furnitures · London
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>

      <Footer />
    </>
  );
}
