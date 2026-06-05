import Link from "next/link";
import { practiceAreas } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Practice Areas",
  description: "Crystal Sterl Partners' seven practice areas span corporate law, energy, litigation, IP, data protection, tax, real estate, and technology — delivered with precision.",
  openGraph: {
    url: "https://crystalsterl.com/expertise/",
    title: "Practice Areas | Crystal Sterl Partners",
    description: "Crystal Sterl Partners' seven practice areas span corporate law, energy, litigation, IP, data protection, tax, real estate, and technology — delivered with precision.",
  },
  twitter: {
    title: "Practice Areas | Crystal Sterl Partners",
    description: "Crystal Sterl Partners' seven practice areas span corporate law, energy, litigation, IP, data protection, tax, real estate, and technology — delivered with precision.",
  },
};

const practiceImages: Record<string, string> = {
  "corporate-securities-finance-funds": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=90&auto=format&fit=crop&sat=40",
  "energy-oil-gas-natural-resources": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=90&auto=format&fit=crop&sat=40",
  "corporate-governance-regulatory-compliance": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=90&auto=format&fit=crop&sat=40",
  "intellectual-property-data-protection": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=90&auto=format&fit=crop&sat=40",
  "litigation-arbitration-adr": "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=900&q=90&auto=format&fit=crop&sat=40",
  "tax-real-estate-privatisation-procurement": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=90&auto=format&fit=crop&sat=40",
  "technology-media-telecommunication": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=90&auto=format&fit=crop&sat=40",
};

export default function ExpertisePage() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-[#111217] pt-40 pb-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-5">
            <span className="block w-7 h-px bg-[#B89D6C]" />
            Practice Areas
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.08] text-white">
              Our Areas of{" "}
              <span className="italic font-normal text-[#B89D6C]">Expertise</span>
            </h1>
            <p className="font-elegant italic text-white/45 text-[1.05rem] leading-[1.85] pb-2 text-justify">
              Seven integrated practice areas designed to serve the full spectrum of complex legal needs across Africa and international markets.
            </p>
          </div>
          <span className="block w-14 h-0.5 bg-[#B89D6C] mt-10" />
        </div>
      </section>

      {/* ── Practice Area Grid ──────────────────────────────────────────── */}
      <section className="bg-[#f6f3ee] py-4">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex flex-col gap-1 mt-0">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={Math.min(i * 0.06, 0.3)}>
                <Link
                  href={`/expertise/${area.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_200px] gap-6 lg:gap-12 items-center bg-white border border-[#ede9e2] px-10 py-10 hover:border-[#B89D6C]/40 hover:shadow-[0_4px_32px_rgba(198,168,74,0.08)] transition-all duration-400"
                >
                  <span className="text-[0.62rem] font-semibold tracking-[0.3em] text-[#B89D6C]">{area.number}</span>
                  <div>
                    <h2 className="font-serif text-[1.18rem] font-bold text-[#111217] leading-[1.3] mb-3 group-hover:text-[#B89D6C] transition-colors duration-300">
                      {area.title}
                    </h2>
                    <p className="text-[0.84rem] text-[#4a5a6a] leading-[1.75] max-w-2xl text-justify">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {area.services.slice(0, 3).map(s => (
                        <span key={s} className="text-[0.65rem] font-medium tracking-[0.08em] text-[#B89D6C] border border-[#B89D6C]/30 px-3 py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-end gap-3 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#111217] group-hover:text-[#B89D6C] transition-colors duration-300">
                    <span>View Area</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────────────────── */}
      <section className="bg-[#111217] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white leading-[1.2] mb-6">
              Need specialist counsel?{" "}
              <span className="italic font-normal text-[#B89D6C]">Talk to our team.</span>
            </h2>
            <p className="text-white/40 text-[0.9rem] max-w-lg mx-auto mb-10 leading-[1.8] text-justify">
              Our partners have deep expertise in each practice area and are available to discuss your specific legal needs.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[0.73rem] font-bold tracking-[0.14em] uppercase text-[#111217] bg-[#B89D6C] hover:bg-[#7B633A] px-8 py-4 transition-colors duration-300"
            >
              Contact a Partner
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
