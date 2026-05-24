import Link from "next/link";
import Image from "next/image";
import { practiceAreas, sectors } from "@/lib/content";

const navCols = [
  {
    heading: "The Firm",
    links: [
      { href: "/about",                    label: "About Us" },
      { href: "/about#philosophy",         label: "Our Philosophy" },
      { href: "/about#vision",             label: "Vision & Mission" },
      { href: "/about#differentiators",    label: "What Sets Us Apart" },
      { href: "/esg",                      label: "ESG Compliance" },
    ],
  },
  {
    heading: "Practice Areas",
    links: practiceAreas.map(p => ({ href: `/expertise/${p.slug}`, label: p.shortTitle })),
  },
  {
    heading: "Key Sectors",
    links: sectors.slice(0, 6).map(s => ({ href: `/sectors#${s.id}`, label: s.shortName })),
  },
];

const contactItems = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <path d="M2 2.5h3l1.25 3.125-1.667 1.25C5.5 8.875 6.125 9.5 8.125 10.417L9.375 8.75 12.5 10v2.5C7 12.5 2 7.5 2 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    label: "+234 806 331 4898",
    href: "tel:+2348063314898",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <rect x="1.5" y="3.5" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M1.5 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: "info@crystalsterl.com",
    href: "mailto:info@crystalsterl.com",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <path d="M7.5 2C5.015 2 3 5.5 3 7.5S5.015 13 7.5 13 12 10.5 12 7.5 9.985 2 7.5 2z" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M3 7.5h9M7.5 2C6 4 5.5 5.8 5.5 7.5S6 11 7.5 13M7.5 2C9 4 9.5 5.8 9.5 7.5S9 11 7.5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Lagos & Abuja, Nigeria",
    href: "/contact",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 6v4M4 4.5v.01M6.5 10V7.5C6.5 6.7 7.1 6 8 6s1.5.7 1.5 1.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 2.5l4 4.5L2 12h1.5l3-3.5 2.5 3.5H12L7.8 6.8 11.5 2.5H10L7.2 5.7 5 2.5H2z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M8 5H6.5C6.224 5 6 5.224 6 5.5V7H8L7.5 9H6v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use",   label: "Terms of Use" },
  { href: "/disclaimer",     label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1a2b] border-t border-[#c6a84a]/15">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-20 border-b border-white/[0.06]">

          {/* Brand col — spans 2 on lg */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#c6a84a]/30">
                <Image src="/logo.jpg" alt="Crystal Sterl Partners" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[1.05rem] font-bold text-white">Crystal Sterl</span>
                <span className="text-[0.56rem] font-medium tracking-[0.26em] uppercase text-[#c6a84a] mt-[3px]">Partners</span>
              </div>
            </Link>
            <p className="font-elegant italic text-white/40 text-[0.92rem] leading-[1.75] max-w-xs mb-7">
              A leading African law firm delivering world-class legal advisory with a distinctly global outlook.
            </p>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#c6a84a] mb-5">Excellence · Clarity · Precision</p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c6a84a] hover:text-[#c6a84a] transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map(col => (
            <div key={col.heading}>
              <h4 className="text-[0.62rem] font-bold tracking-[0.26em] uppercase text-[#c6a84a] mb-5">{col.heading}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.82rem] text-white/40 hover:text-[#c6a84a] transition-colors duration-300 leading-snug">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap gap-8 py-8 border-b border-white/[0.06]">
          {contactItems.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2.5 text-[0.8rem] text-white/35 hover:text-[#c6a84a] transition-colors duration-300 group"
            >
              <span className="text-[#c6a84a] group-hover:text-[#dfc07a] transition-colors duration-300">{icon}</span>
              {label}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6">
          <p className="text-[0.72rem] text-white/22">
            © {new Date().getFullYear()} <span className="text-[#c6a84a]">Crystal Sterl Partners</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-[0.72rem] text-white/22 hover:text-[#c6a84a] transition-colors duration-300">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
