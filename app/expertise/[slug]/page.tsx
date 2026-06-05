import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const practiceImages: Record<string, string> = {
  "corporate-securities-finance-funds": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=90&auto=format&fit=crop&sat=40",
  "energy-oil-gas-natural-resources": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=90&auto=format&fit=crop&sat=40",
  "corporate-governance-regulatory-compliance": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=90&auto=format&fit=crop&sat=40",
  "intellectual-property-data-protection": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90&auto=format&fit=crop&sat=40",
  "litigation-arbitration-adr": "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=1600&q=90&auto=format&fit=crop&sat=40",
  "tax-real-estate-privatisation-procurement": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=90&auto=format&fit=crop&sat=40",
  "technology-media-telecommunication": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=90&auto=format&fit=crop&sat=40",
};

export async function generateStaticParams() {
  return practiceAreas.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = practiceAreas.find(p => p.slug === slug);
  if (!area) return {};
  return {
    title: area.shortTitle,
    description: area.description,
    openGraph: {
      url: `https://www.crystalsterl.com/expertise/${slug}/`,
      title: `${area.shortTitle} | Crystal Sterl Partners`,
      description: area.description,
    },
    twitter: {
      title: `${area.shortTitle} | Crystal Sterl Partners`,
      description: area.description,
    },
  };
}

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = practiceAreas.find(p => p.slug === slug);
  if (!area) notFound();

  const currentIndex = practiceAreas.findIndex(p => p.slug === slug);
  const prev = currentIndex > 0 ? practiceAreas[currentIndex - 1] : null;
  const next = currentIndex < practiceAreas.length - 1 ? practiceAreas[currentIndex + 1] : null;

  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end bg-[#111217] overflow-hidden">
        <Image
          src={practiceImages[area.slug] ?? practiceImages["corporate-securities-finance-funds"]}
          alt={area.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/50 to-transparent" />
        <div className="relative z-10 max-w-[1260px] mx-auto px-8 md:px-12 pb-20 w-full">
          <Link href="/expertise" className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#B89D6C] hover:text-[#7B633A] transition-colors mb-6">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M7 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Practice Areas
          </Link>
          <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-white/30 mb-4">
            <span>{area.number}</span>
            <span className="block w-5 h-px bg-white/20" />
            <span>Practice Area</span>
          </div>
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.1] text-white max-w-3xl">
            {area.title}
          </h1>
          <span className="block w-14 h-0.5 bg-[#B89D6C] mt-8" />
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <section className="bg-[#f6f3ee] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">

          {/* Left: main content */}
          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(1.4rem,2.2vw,1.8rem)] font-bold text-[#111217] leading-[1.3] mb-7">
                Overview
              </h2>
              <p className="text-[0.95rem] text-[#4a5a6a] leading-[1.9] mb-8 text-justify">
                {area.description}
              </p>
              <p className="text-[0.95rem] text-[#4a5a6a] leading-[1.9] text-justify">
                {area.overview}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-14 pt-14 border-t border-[#ede9e2]">
                <h2 className="font-serif text-[clamp(1.3rem,2vw,1.65rem)] font-bold text-[#111217] leading-[1.3] mb-8">
                  Our Approach
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {area.approach.map(({ title, body }) => (
                    <div key={title} className="flex gap-4">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#B89D6C] mt-[7px]" />
                      <div>
                        <h4 className="font-semibold text-[#111217] text-[0.88rem] mb-1">{title}</h4>
                        <p className="text-[0.84rem] text-[#4a5a6a] leading-[1.75] text-justify">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: services sidebar */}
          <Reveal direction="right">
            <div className="sticky top-32">
              <div className="bg-[#111217] p-10">
                <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-6">Services</h3>
                <ul className="flex flex-col gap-0">
                  {area.services.map((s, i) => (
                    <li key={s} className={`py-4 flex items-start gap-4 text-[0.85rem] text-white/65 leading-[1.6] ${i > 0 ? "border-t border-white/[0.06]" : ""}`}>
                      <span className="flex-shrink-0 w-5 h-px bg-[#B89D6C]/50 mt-[10px]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-1 bg-[#B89D6C] p-8">
                <h3 className="font-serif text-[#111217] font-bold text-[1.05rem] mb-3">Speak with a Partner</h3>
                <p className="text-[0.82rem] text-[#111217]/65 mb-6 leading-[1.7] text-justify">
                  Our specialist lawyers are available to discuss your requirements in confidence.
                </p>
                <Link
                  href="/contact"
                  className="block text-center text-[0.7rem] font-bold tracking-[0.14em] uppercase bg-[#111217] text-white hover:bg-[#1B1E26] px-6 py-3.5 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Prev / Next ─────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#ede9e2]">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-2">
          {prev ? (
            <Link href={`/expertise/${prev.slug}`} className="group flex flex-col gap-1 py-10 pr-12 border-r border-[#ede9e2] hover:bg-[#f6f3ee] transition-colors duration-300">
              <span className="text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-[#B89D6C] flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 6H3M5 2L1 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Previous
              </span>
              <span className="font-serif text-[0.95rem] font-bold text-[#111217] leading-[1.3] group-hover:text-[#B89D6C] transition-colors duration-300">{prev.shortTitle}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/expertise/${next.slug}`} className="group flex flex-col gap-1 py-10 pl-12 text-right hover:bg-[#f6f3ee] transition-colors duration-300">
              <span className="text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-[#B89D6C] flex items-center justify-end gap-2">
                Next
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6h6M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span className="font-serif text-[0.95rem] font-bold text-[#111217] leading-[1.3] group-hover:text-[#B89D6C] transition-colors duration-300">{next.shortTitle}</span>
            </Link>
          ) : <div />}
        </div>
      </section>

    </main>
  );
}
