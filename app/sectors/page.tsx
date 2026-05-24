import Link from "next/link";
import Image from "next/image";
import { sectors, practiceAreas } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Key Sectors | Crystal Sterl Partners",
  description: "Crystal Sterl Partners serves 11 key sectors across Africa — from financial services to healthcare, technology, energy, and beyond.",
};

const sectorImages: Record<string, string> = {
  "financial-services": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format&fit=crop",
  "energy-infrastructure": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80&auto=format&fit=crop",
  "insurance-pensions": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
  "technology-ai": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
  "healthcare": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop",
  "real-estate": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop",
  "consumer-retail": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80&auto=format&fit=crop",
  "agriculture": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80&auto=format&fit=crop",
  "transportation": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80&auto=format&fit=crop",
  "sport-entertainment": "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=900&q=80&auto=format&fit=crop",
  "public-sector": "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=900&q=80&auto=format&fit=crop",
};

export default function SectorsPage() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-[62vh] min-h-[460px] flex items-end bg-[#0c1a2b] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&auto=format&fit=crop"
          alt="Sectors"
          fill
          className="object-cover object-top opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2b] via-[#0c1a2b]/50 to-transparent" />
        <div className="relative z-10 max-w-[1260px] mx-auto px-8 md:px-12 pb-20 w-full">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-5">
            <span className="block w-7 h-px bg-[#c6a84a]" />
            Industries We Serve
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-end">
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-800 leading-[1.08] text-white">
              Deep Sector{" "}
              <span className="italic font-normal text-[#c6a84a]">Knowledge</span>
            </h1>
            <p className="font-elegant italic text-white/40 text-[1rem] leading-[1.85] pb-1">
              Our lawyers combine legal expertise with genuine sector insight — understanding the commercial dynamics that shape your industry.
            </p>
          </div>
          <span className="block w-14 h-0.5 bg-[#c6a84a] mt-10" />
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────────────────── */}
      <section className="bg-[#c6a84a]">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 py-7 flex flex-wrap gap-8 items-center justify-between">
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#0c1a2b]/70">
            Serving clients across 11 key sectors
          </p>
          <Link href="/expertise" className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-[#0c1a2b] flex items-center gap-2 hover:gap-3 transition-all duration-300">
            View Practice Areas
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      {/* ── Sector Cards ────────────────────────────────────────────────── */}
      <section className="bg-[#0c1a2b] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {sectors.map((sector, i) => (
              <Reveal key={sector.id} delay={Math.min((i % 3) * 0.08, 0.2)}>
                <div
                  id={sector.id}
                  className="group relative overflow-hidden bg-[#111f30] border border-white/[0.06] hover:border-[#c6a84a]/30 transition-all duration-500 min-h-[300px] flex flex-col justify-end"
                >
                  <Image
                    src={sectorImages[sector.id] ?? sectorImages["financial-services"]}
                    alt={sector.name}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2b]/90 via-[#0c1a2b]/40 to-transparent" />
                  <div className="relative z-10 p-8">
                    <span className="block text-[0.58rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-[1.15rem] font-bold text-white leading-[1.3] mb-3">
                      {sector.name}
                    </h3>
                    <div className="w-6 h-0.5 bg-[#c6a84a] mb-4 group-hover:w-10 transition-all duration-400" />
                    <p className="text-[0.82rem] text-white/45 leading-[1.75]">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-Sector Expertise ──────────────────────────────────────── */}
      <section className="bg-[#f6f3ee] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#c6a84a] mb-6">
                  <span className="block w-6 h-px bg-[#c6a84a]" />
                  Cross-Practice Integration
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold text-[#0c1a2b] leading-[1.18] mb-7">
                  Integrated Legal Solutions Across Every Sector
                </h2>
                <p className="text-[0.9rem] text-[#4a5a6a] leading-[1.85] mb-5">
                  In every sector we serve, we bring together lawyers from across our practice areas to deliver holistic, fully integrated legal advice that addresses every dimension of your business challenges.
                </p>
                <p className="text-[0.9rem] text-[#4a5a6a] leading-[1.85]">
                  Our cross-practice approach ensures that a technology company going through a capital markets transaction, for example, benefits simultaneously from our technology regulatory expertise, our securities law capability, and our corporate governance counsel.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {practiceAreas.slice(0, 4).map(area => (
                  <Link
                    key={area.slug}
                    href={`/expertise/${area.slug}`}
                    className="group bg-[#0c1a2b] p-7 hover:bg-[#162d47] transition-colors duration-300"
                  >
                    <span className="block text-[0.58rem] font-semibold tracking-[0.26em] uppercase text-[#c6a84a] mb-3">{area.number}</span>
                    <h4 className="font-serif text-[0.9rem] font-bold text-white leading-[1.3] mb-2 group-hover:text-[#c6a84a] transition-colors duration-300">
                      {area.shortTitle}
                    </h4>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#c6a84a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0c1a2b] py-20 border-t border-[#c6a84a]/10">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold text-white leading-[1.2]">
              Operating in one of these sectors?
            </h2>
            <p className="text-white/35 text-[0.88rem] mt-2">Let's discuss how we can support your legal needs.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 text-[0.73rem] font-bold tracking-[0.14em] uppercase text-[#0c1a2b] bg-[#c6a84a] hover:bg-[#dfc07a] px-8 py-4 transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
