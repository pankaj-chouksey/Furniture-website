"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Only homepage and /about start with a full-dark hero behind the nav.
  // All other routes (/collection, /contact etc.) have a light or split background.
  const isDarkBg = pathname === "/" || pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav
          className={`flex items-center justify-between rounded-full border px-7 py-4 transition-all duration-300 ${
            scrolled
              ? "border-white/30 bg-white/70 shadow-xl backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            className={`font-serif text-2xl font-semibold transition-colors duration-300 ${
              scrolled || !isDarkBg ? "text-gray-900" : "text-white"
            }`}
          >
            Oak<span className="text-[#C8A97E]">&</span>Stone
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled || !isDarkBg
                    ? "text-gray-700 hover:text-[#8B5E3C]"
                    : "text-white/90 hover:text-[#C8A97E]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="rounded-full bg-[#8B5E3C] px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-[#6d472b]">
              Get Quote
            </button>
          </div>

          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled || !isDarkBg ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="mt-3 rounded-3xl border bg-white p-6 shadow-xl md:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700"
                >
                  {link.name}
                </Link>
              ))}

              <button className="mt-2 rounded-full bg-[#8B5E3C] py-3 text-white">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}