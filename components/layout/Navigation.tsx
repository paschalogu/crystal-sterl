"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavChild = { href: string; label: string };
type NavItem  = { href: string; label: string; children?: NavChild[] };

const links: NavItem[] = [
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about",              label: "About Us" },
      { href: "/about#people",       label: "Our Team" },
      { href: "/about#philosophy",   label: "Our Philosophy" },
      { href: "/about#vision",       label: "Vision & Mission" },
      { href: "/about#differentiators", label: "What Sets Us Apart" },
      { href: "/esg",                label: "ESG Compliance" },
    ],
  },
  { href: "/expertise", label: "Expertise" },
  { href: "/sectors",   label: "Sectors" },
  {
    href: "/insights",
    label: "Insights",
    children: [
      { href: "/insights",           label: "All Insights" },
      { href: "/insights#news",      label: "News" },
      { href: "/insights#blog",      label: "Articles" },
      { href: "/insights#podcast",   label: "Podcasts" },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname  = usePathname();
  const isHome    = pathname === "/";
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close dropdown when navigating
  useEffect(() => { setActiveDropdown(null); setOpen(false); }, [pathname]);

  function openDropdown(href: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(href);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  const navBg = scrolled || !isHome
    ? "bg-[#002233]/97 backdrop-blur-xl shadow-[0_1px_0_rgba(198,168,74,0.15)]"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-12 py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[#ce5e00]/30 group-hover:ring-[#ce5e00]/60 transition-all duration-300">
              <Image src="/logo.jpg" alt="Crystal Sterl Partners" width={44} height={44} className="w-full h-full object-cover" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[1.1rem] font-bold text-white tracking-[0.03em]">Crystal Sterl</span>
              <span className="text-[0.58rem] font-medium tracking-[0.26em] uppercase text-[#ce5e00] mt-[3px]">Partners</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && openDropdown(item.href)}
                onMouseLeave={() => item.children && scheduleClose()}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1 text-[0.76rem] font-medium tracking-[0.1em] uppercase transition-colors duration-300 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:bg-[#ce5e00] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    pathname.startsWith(item.href)
                      ? "text-[#ce5e00] after:scale-x-100"
                      : "text-white/80 hover:text-[#ce5e00]"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      className={`transition-transform duration-300 opacity-60 ${activeDropdown === item.href ? "rotate-180" : ""}`}
                    >
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown panel */}
                {item.children && (
                  <div
                    onMouseEnter={() => openDropdown(item.href)}
                    onMouseLeave={scheduleClose}
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      activeDropdown === item.href ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
                    }`}
                  >
                    <div className="bg-[#002233] border-t-2 border-[#ce5e00] shadow-[0_20px_60px_rgba(0,0,0,0.4)] min-w-[220px] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-6 py-3 text-[0.74rem] text-white/60 hover:text-[#ce5e00] hover:bg-white/[0.04] transition-colors duration-200 tracking-[0.06em]"
                        >
                          <span className="w-4 h-px bg-[#ce5e00]/40 flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
      <div className={`fixed inset-0 z-40 bg-[#002233] flex flex-col px-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col gap-0 pt-28 pb-10">
          {[...links, { href: "/contact", label: "Contact Us", children: undefined }].map((item) => (
            <div key={item.href} className="border-b border-white/[0.07]">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => !item.children && setOpen(false)}
                  className="font-serif text-[1.8rem] font-bold text-white/85 py-4 hover:text-[#ce5e00] transition-colors flex-1"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                    className="p-4 text-white/40 hover:text-[#ce5e00] transition-colors"
                    aria-label="Expand"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-300 ${mobileExpanded === item.href ? "rotate-180" : ""}`}>
                      <path d="M3 5.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.href && (
                <div className="pb-3 pl-4 flex flex-col gap-0">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2.5 text-[0.85rem] text-white/45 hover:text-[#ce5e00] transition-colors"
                    >
                      <span className="w-4 h-px bg-[#ce5e00]/40 flex-shrink-0" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="py-10 flex items-center gap-6 text-[0.72rem] text-white/30 tracking-widest uppercase">
          <span>+234 810 092 2401</span>
          <span>·</span>
          <span>info@crystalsterl.com</span>
        </div>
      </div>
    </>
  );
}
