import Link from "next/link";
import Image from "next/image";
import { practiceAreas, sectors } from "@/lib/content";

const navCols = [
  {
    heading: "The Firm",
    links: [
      { href: "/about",   label: "About Us" },
      { href: "/about#philosophy", label: "Our Philosophy" },
      { href: "/about#vision",     label: "Vision & Mission" },
      { href: "/about#differentiators", label: "What Sets Us Apart" },
      { href: "/esg",    label: "ESG Compliance" },
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
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#c6a84a] mb-3">Excellence · Clarity · Precision · Execution</p>
            <div className="flex gap-2.5 mt-6">
              {["in", "𝕏", "f"].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 text-[0.8rem] font-bold hover:border-[#c6a84a] hover:text-[#c6a84a] transition-colors duration-300">
                  {s}
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
          {[
            { icon: "📞", label: "+234 806 331 4898" },
            { icon: "✉", label: "info@crystalsterl.com" },
            { icon: "🌐", label: "www.crystalsterl.com" },
            { icon: "📍", label: "Lagos & Abuja, Nigeria" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-[0.8rem] text-white/35">
              <span className="text-[#c6a84a] text-xs">{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6">
          <p className="text-[0.72rem] text-white/22">
            © {new Date().getFullYear()} <span className="text-[#c6a84a]">Crystal Sterl Partners</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Disclaimer"].map(l => (
              <a key={l} href="#" className="text-[0.72rem] text-white/22 hover:text-[#c6a84a] transition-colors duration-300">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
