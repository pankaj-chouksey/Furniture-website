"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#16120e] pt-24 pb-10 text-white">
      <div className="container-custom px-6 lg:px-12">
        
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* ── Brand & Ethos (Left Column) ── */}
          <div className="lg:col-span-4 lg:pr-12">
            <h2 className="font-serif text-3xl font-semibold">
              DK<span className="text-[#C8A97E]"> </span>FURNITURES
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              Crafting legacies, not just furniture. We source the finest sustainable materials to build pieces that endure through generations, blending timeless aesthetics with modern functionality.
            </p>
            
            {/* Socials */}
            <div className="mt-8 flex gap-5 text-xs font-semibold tracking-widest text-white/40">
              <a href="#" className="transition-colors hover:text-[#C8A97E]">
                INSTAGRAM
              </a>
              <a href="#" className="transition-colors hover:text-[#C8A97E]">
                TWITTER
              </a>
              <a href="#" className="transition-colors hover:text-[#C8A97E]">
                PINTEREST
              </a>
            </div>
          </div>

          {/* ── Links (Middle Columns) ── */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-3">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A97E]">
                Collections
              </h4>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Living Room</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Bedroom</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Dining</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Workspace</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Outdoor</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A97E]">
                Company
              </h4>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Our Story</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Craftsmanship</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Sustainability</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Careers</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A97E]">
                Support
              </h4>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Contact Us</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">FAQ</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Shipping & Returns</Link>
              <Link href="#" className="text-sm text-white/60 transition-colors hover:text-white">Warranty</Link>
            </div>
            
          </div>

          {/* ── Newsletter (Right Column) ── */}
          <div className="lg:col-span-4 lg:pl-12">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A97E]">
              Join The List
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Subscribe to receive updates on new collections, exclusive access to limited pieces, and design inspiration.
            </p>
            
            <form className="mt-6 relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full border-b border-white/20 bg-transparent py-3 pr-10 text-sm text-white placeholder-white/30 outline-none transition-border focus:border-[#C8A97E]"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-[#C8A97E]"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </form>
          </div>
          
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} DK Furnitures. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-xs text-white/40 transition-colors hover:text-white">Terms of Service</Link>
            <Link href="#" className="text-xs text-white/40 transition-colors hover:text-white">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}