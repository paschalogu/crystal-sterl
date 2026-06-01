import Image from "next/image";
import Link from "next/link";
import { sectors, practiceAreas } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Sectors | Crystal Sterl Partners",
  description: "Crystal Sterl Partners advises clients across 11 key sectors in Nigeria and across the African continent.",
};

const sectorImages: Record<string, string> = {
  "financial-services":    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=90&auto=format&fit=crop&sat=40",
  "energy-infrastructure": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=90&auto=format&fit=crop&sat=40",
  "insurance-pensions":    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=90&auto=format&fit=crop&sat=40",
  "technology-ai":         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=90&auto=format&fit=crop&sat=40",
  "healthcare":            "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=90&auto=format&fit=crop&sat=40",
  "real-estate":           "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=90&auto=format&fit=crop&sat=40",
  "consumer-retail":       "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=90&auto=format&fit=crop&sat=40",
  "agriculture":           "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=90&auto=format&fit=crop&sat=40",
  "transportation":        "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?w=800&q=90&auto=format&fit=crop&sat=40",
  "sport-entertainment":   "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=90&auto=format&fit=crop&sat=40",
  "public-sector":         "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=90&auto=format&fit=crop&sat=40",
  "private-wealth":        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=90&auto=format&fit=crop&sat=40",
};

export default function SectorsPage() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#111217] overflow-hidden pt-32 pb-20">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=90&auto=format&fit=crop&sat=40"
          alt=""
          fill
          className="object-cover object-top opacity-10"
          priority
        />
        <div className="relative z-10 max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-6">
                <span className="block w-7 h-px bg-[#B89D6C]" />
                Industries We Serve
              </div>
              <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.4rem)] font-bold leading-[1.06] text-white">
                Deep Sector{" "}
                <span className="italic font-normal text-[#B89D6C]">Knowledge</span>
              </h1>
              <span className="block w-14 h-0.5 bg-[#B89D6C] mt-8" />
            </div>
            <div className="pb-1">
              <p className="text-[0.88rem] text-white/45 leading-[1.85] text-justify">
                Our lawyers combine legal expertise with genuine sector insight, understanding the commercial dynamics that shape your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Banner Strip ────────────────────────────────────────────────── */}
      <div className="bg-[#B89D6C]">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 py-4 flex items-center justify-between gap-6">
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[#111217]">
            Serving Clients Across 11 Key Sectors
          </p>
          <Link
            href="/expertise"
            className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-[#111217] hover:opacity-70 transition-opacity"
          >
            View Practice Areas
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Sector Grid ─────────────────────────────────────────────────── */}
      <section className="bg-[#111217] py-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]">
            {sectors.map((sector, i) => {
              const isLast = i === sectors.length - 1;
              const remainder = sectors.length % 3;
              const spanTwo = isLast && remainder === 2;
              return (
              <Reveal key={sector.id} delay={i * 0.05} className={`h-full${spanTwo ? " sm:col-span-1 lg:col-span-2" : ""}`}>
                <div className="group bg-[#111217] flex flex-col h-full">
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <Image
                      src={sectorImages[sector.id] ?? sectorImages["financial-services"]}
                      alt={sector.name}
                      fill
                      className="object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111217]/20 to-[#111217]/70" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-[0.58rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-serif text-[1.02rem] font-bold text-white leading-[1.3] mb-3">
                      {sector.name}
                    </h3>
                    <div className="w-6 h-0.5 bg-[#B89D6C] mb-4 group-hover:w-10 transition-all duration-500" />
                    <p className="text-[0.8rem] text-white/45 leading-[1.72] text-justify">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cross-Practice Integration ───────────────────────────────────── */}
      <section className="bg-[#f6f3ee] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">

              {/* Left */}
              <div>
                <div className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-6">
                  <span className="block w-6 h-px bg-[#B89D6C]" />
                  Cross-Practice Integration
                </div>
                <h2 className="font-serif text-[clamp(1.7rem,3vw,2.6rem)] font-bold text-[#111217] leading-[1.15] mb-7">
                  Integrated Legal Solutions Across Every Sector
                </h2>
                <p className="text-[0.92rem] text-[#4a5a6a] leading-[1.85] mb-5 text-justify">
                  In every sector we serve, we bring together lawyers from across our practice areas to deliver holistic, fully integrated legal advice that addresses every dimension of your business challenges.
                </p>
                <p className="text-[0.92rem] text-[#4a5a6a] leading-[1.85] text-justify">
                  Our cross-practice approach ensures that a technology company going through a capital markets transaction, for example, benefits simultaneously from our technology regulatory expertise, our securities law capability, and our corporate governance counsel.
                </p>
              </div>

              {/* Right: 2×2 practice area grid */}
              <div className="grid grid-cols-2 gap-px bg-[#111217]/10 mt-2">
                {practiceAreas.slice(0, 4).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/expertise/${p.slug}`}
                    className="group bg-[#111217] p-7 hover:bg-[#B89D6C]/[0.08] transition-colors duration-300"
                  >
                    <p className="text-[0.57rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-3">{p.number}</p>
                    <h4 className="font-serif text-[0.92rem] font-bold text-white leading-[1.3] group-hover:text-[#B89D6C] transition-colors duration-300">
                      {p.shortTitle}
                    </h4>
                  </Link>
                ))}
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#111217] py-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-white leading-[1.2]">
              Operating in one of these sectors?
            </h2>
            <p className="text-[0.85rem] text-white/45 mt-2">Let's discuss how we can support your legal needs.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 text-[0.7rem] font-bold tracking-[0.14em] uppercase bg-[#B89D6C] text-[#111217] hover:bg-[#7B633A] px-8 py-4 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
