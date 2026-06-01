"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about",     label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/sectors",   label: "Sectors" },
  { href: "/esg",       label: "ESG" },
  { href: "/insights",  label: "Insights" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navBg = scrolled || !isHome
    ? "bg-[#002233]/97 backdrop-blur-xl shadow-[0_1px_0_rgba(198,168,74,0.15)]"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-12 py-5 transition-[padding] duration-400">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[#ce5e00]/30 group-hover:ring-[#ce5e00]/60 transition-all duration-300">
              <Image
                src="/logo.jpg"
                alt="Crystal Sterl Partners"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[1.1rem] font-bold text-white tracking-[0.03em]">Crystal Sterl</span>
              <span className="text-[0.58rem] font-medium tracking-[0.26em] uppercase text-[#ce5e00] mt-[3px]">Partners</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-[0.76rem] font-medium tracking-[0.1em] uppercase transition-colors duration-300 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:bg-[#ce5e00] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname.startsWith(href)
                    ? "text-[#ce5e00] after:scale-x-100"
                    : "text-white/80 hover:text-[#ce5e00]"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[0.73rem] font-bold tracking-[0.12em] uppercase text-[#002233] bg-[#ce5e00] hover:bg-[#e8740f] px-5 py-2.5 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Burger */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-[5px] p-1"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#002233] flex flex-col justify-center px-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-0">
          {[...links, { href: "/contact", label: "Contact Us" }].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-serif text-[2rem] font-bold text-white/85 py-4 border-b border-white/[0.07] hover:text-[#ce5e00] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-12 flex items-center gap-6 text-[0.72rem] text-white/30 tracking-widest uppercase">
          <span>+234 810 092 2401</span>
          <span>·</span>
          <span>info@crystalsterl.com</span>
        </div>
      </div>
    </>
  );
}
