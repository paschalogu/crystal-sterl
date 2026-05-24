import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Reveal from "@/components/ui/Reveal";
import { philosophy, practiceAreas, sectors, stats, differentiators } from "@/lib/content";

/* ─── Sector icons (inline SVG map) ─────────────────────────── */
const SectorIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactNode> = {
    "financial-services": <path d="M10 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 16s1-3 6-3 6 3 6 3" strokeLinecap="round"/>,
    "energy-infrastructure": <><path d="M13 2 8 9h4l-5 9" strokeLinecap="round" strokeLinejoin="round"/></>,
    "insurance-pensions": <><rect x="3" y="11" width="14" height="8" rx="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round"/></>,
    "technology-ai": <><rect x="2" y="3" width="16" height="11" rx="1"/><path d="M6 20h8M10 14v6" strokeLinecap="round"/></>,
    "healthcare": <><path d="M8 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M2 18s1.5-4 6-4 6 4 6 4"/><line x1="16" y1="6" x2="20" y2="6"/><line x1="18" y1="4" x2="18" y2="8"/></>,
    "real-estate": <><path d="M3 18V8l6-4 6 4v10"/><rect x="7" y="13" width="4" height="5"/></>,
    "consumer-retail": <><path d="M6 2 4 6H1l2.5 7a2 2 0 0 0 1.9 1.4h9.2a2 2 0 0 0 1.9-1.4L19 6h-3l-2-4H6z"/><circle cx="9" cy="20" r="1"/><circle cx="15" cy="20" r="1"/></>,
    "agriculture": <><path d="M12 2C8 2 4 6 4 10s4 8 8 8M12 2c4 0 8 4 8 8s-4 8-8 8M12 2v16M4 10h16"/></>,
    "transportation": <><rect x="1" y="11" width="11" height="7" rx="1"/><path d="M12 14h3l3-4v7h-6"/><circle cx="5" cy="18" r="1.5"/><circle cx="14" cy="18" r="1.5"/></>,
    "sport-entertainment": <><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" strokeLinejoin="round"/></>,
    "public-sector": <><path d="M3 18V8l9-6 9 6v10"/><path d="M9 18v-6h6v6"/></>,
  };
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 flex-shrink-0">
      {icons[id] ?? <circle cx="10" cy="10" r="7"/>}
    </svg>
  );
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col overflow-hidden bg-[#0c1a2b]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=85&auto=format&fit=crop"
            alt="Scales of Justice"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2b]/90 via-[#0c1a2b]/65 to-[#0c1a2b]/25" />
        </div>

        {/* Geometric accents */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
          <div className="absolute right-[-80px] top-[-80px] w-[500px] h-[500px] border border-[#c6a84a]/10 rotate-45" />
          <div className="absolute right-[60px] top-[60px] w-[320px] h-[320px] border border-[#c6a84a]/06 rotate-45" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-[1400px] mx-auto px-8 md:px-12 w-full py-32">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 text-[0.66rem] font-semibold tracking-[0.32em] uppercase text-[#c6a84a] mb-7 animate-[fadeUp_0.9s_ease_0.1s_both]">
                <span className="w-1 h-1 rounded-full bg-[#c6a84a]" />
                Leading African Law Firm
                <span className="w-1 h-1 rounded-full bg-[#c6a84a]" />
              </div>
              <h1 className="font-serif text-[clamp(3rem,6.8vw,6rem)] font-800 leading-[1.02] text-white mb-7 animate-[fadeUp_0.9s_ease_0.25s_both]">
                Where Precision<br />
                Meets{" "}
                <em className="text-[#c6a84a] font-normal not-italic font-serif italic">
                  Strategic Clarity
                </em>
              </h1>
              <p className="font-elegant text-[clamp(1rem,1.7vw,1.22rem)] font-light leading-[1.8] text-white/60 max-w-[540px] mb-11 animate-[fadeUp_0.9s_ease_0.4s_both]">
                Delivering corporate, transactional, dispute and full-service legal advisory to businesses, investors, and institutions.
              </p>
              <div className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-white/40 mb-12 animate-[fadeUp_0.9s_ease_0.5s_both]">
                {["Excellence", "Clarity", "Precision"].map((p, i) => (
                  <Fragment key={p}>
                    <span>{p}</span>
                    {i < 2 && <span className="text-[#c6a84a]">·</span>}
                  </Fragment>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap animate-[fadeUp_0.9s_ease_0.6s_both]">
                <Link href="/about" className="inline-flex items-center gap-2.5 text-[0.76rem] font-bold tracking-[0.12em] uppercase text-[#0c1a2b] bg-[#c6a84a] hover:bg-[#dfc07a] px-8 py-4 transition-colors duration-300">
                  Discover Our Firm
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2.5 text-[0.76rem] font-bold tracking-[0.12em] uppercase text-white border border-white/25 hover:border-[#c6a84a] hover:text-[#c6a84a] px-8 py-4 transition-colors duration-300">
                  Get In Touch →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="relative z-10 bg-[#152336]/80 backdrop-blur-md border-t border-[#c6a84a]/18">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="py-5 px-8 text-center border-r border-[#c6a84a]/10 last:border-r-0">
                <div className="font-serif text-[1.7rem] font-700 text-[#c6a84a] leading-none">{s.number}</div>
                <div className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-white/35 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <Reveal direction="left" className="relative overflow-hidden min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=85&auto=format&fit=crop"
                alt="Crystal Sterl Partners"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2b]/55 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <blockquote className="font-elegant italic text-[1.1rem] text-white/90 leading-[1.68] border-l-2 border-[#c6a84a] pl-4">
                  "Legal advice should be clear, commercially grounded, and relentlessly execution focused."
                </blockquote>
              </div>
            </Reveal>

            <Reveal direction="right" className="bg-[#f6f3ee] p-12 lg:p-16 flex flex-col justify-center">
              <div className="eyebrow flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-4 before:block before:w-7 before:h-px before:bg-[#c6a84a]">
                About the Firm
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.8rem)] font-700 leading-[1.18] text-[#0c1a2b] mb-1">
                A Distinctly Global
              </h2>
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.8rem)] font-700 leading-[1.18] text-[#0c1a2b] mb-6">
                African Law Firm
              </h2>
              <span className="block w-14 h-0.5 bg-[#c6a84a] mb-7" />
              <p className="text-[0.93rem] text-[#4a5a6a] leading-[1.88] mb-5">
                Crystal Sterl Partners is a leading law firm delivering corporate, transactional, dispute and full-service legal advisory to businesses, investors, and institutions. Beyond interpreting the law, we position our clients to move forward with confidence, speed, and strategic clarity.
              </p>
              <p className="text-[0.93rem] text-[#4a5a6a] leading-[1.88] mb-10">
                Our work extends across Africa and beyond, collaborating with foreign law and financial advisory firms on complex cross-border transactions and bringing a truly international perspective to every mandate.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[0.76rem] font-bold tracking-[0.1em] uppercase text-[#c6a84a] hover:gap-3 transition-all duration-300">
                Learn More About Us →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ──────────────────────────── */}
      <section className="py-28 bg-[#0c1a2b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #c6a84a 0, #c6a84a 1px, transparent 0, transparent 50%)", backgroundSize: "60px 60px" }}
        />
        <div className="relative z-10 max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-[0.66rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-4">
              <span className="block w-7 h-px bg-[#c6a84a]" />Our Foundation<span className="block w-7 h-px bg-[#c6a84a]" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-700 text-white">Our Philosophy</h2>
            <span className="block w-14 h-0.5 bg-[#c6a84a] mt-5 mx-auto" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#c6a84a]/08">
            {philosophy.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07} className="group bg-[#0c1a2b] p-10 relative overflow-hidden hover:bg-[#c6a84a]/[0.04] transition-colors duration-400 cursor-default">
                <span className="absolute top-4 right-5 font-serif text-[4.5rem] font-800 text-[#c6a84a]/05 leading-none pointer-events-none">{p.number}</span>
                <h3 className="font-serif text-[1.3rem] font-700 text-[#c6a84a] mb-3">{p.name}</h3>
                <p className="text-[0.86rem] leading-[1.8] text-white/50">{p.description}</p>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c6a84a] group-hover:w-full transition-[width] duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTORS PREVIEW ──────────────────────── */}
      <section className="py-28 bg-[#152336]">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <Reveal>
              <div className="flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-3 before:block before:w-7 before:h-px before:bg-[#c6a84a]">
                Our Reach
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-700 text-white">Key Sectors</h2>
            </Reveal>
            <Reveal>
              <Link href="/sectors" className="text-[0.74rem] font-semibold tracking-[0.1em] uppercase text-[#c6a84a] hover:text-[#dfc07a] border-b border-[#c6a84a]/40 pb-0.5 transition-colors">
                View All Sectors →
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c6a84a]/08">
            {sectors.slice(0, 6).map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05} className="group bg-[#152336] p-7 flex items-start gap-4 hover:bg-[#c6a84a]/[0.05] transition-colors duration-300 cursor-default">
                <span className="text-[#c6a84a] mt-0.5 group-hover:text-[#dfc07a] transition-colors duration-300">
                  <SectorIcon id={s.id} />
                </span>
                <div>
                  <h3 className="text-[0.88rem] font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-snug mb-1">{s.name}</h3>
                  <p className="text-[0.76rem] text-white/38 leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE PREVIEW ─────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">
            <Reveal direction="left" className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-4 before:block before:w-7 before:h-px before:bg-[#c6a84a]">
                Practice Areas
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-700 text-[#0c1a2b] leading-[1.15] mb-5">
                Our<br/>Expertise
              </h2>
              <span className="block w-14 h-0.5 bg-[#c6a84a] mb-7" />
              <p className="text-[0.92rem] text-[#4a5a6a] leading-[1.88] mb-8">
                Seven core practice areas covering the full spectrum of corporate and commercial legal services, from capital markets and energy to disputes and technology.
              </p>
              <Link href="/expertise" className="inline-flex items-center gap-2 text-[0.76rem] font-bold tracking-[0.1em] uppercase text-[#c6a84a] hover:gap-3 transition-all duration-300">
                All Practice Areas →
              </Link>
            </Reveal>

            <Reveal direction="right" className="flex flex-col gap-0 border-t border-[#ede9e2]">
              {practiceAreas.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/expertise/${p.slug}`}
                  className="group grid grid-cols-[52px_1fr_24px] items-center gap-4 py-5 border-b border-[#ede9e2] hover:pl-4 transition-all duration-300 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0 before:bg-[#c6a84a] before:transition-[width] before:duration-300 hover:before:w-[3px]"
                >
                  <span className="font-serif text-[0.9rem] font-700 text-[#c6a84a]/50 group-hover:text-[#c6a84a] transition-colors duration-300">{p.number}</span>
                  <span className="text-[0.9rem] font-semibold text-[#4a5a6a] group-hover:text-[#0c1a2b] transition-colors duration-300 leading-snug">{p.title}</span>
                  <svg className="w-4 h-4 text-[#c6a84a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </Link>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── ESG STRIP ─────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop"
          alt="ESG"
          width={1600}
          height={600}
          className="w-full h-[380px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2b]/95 via-[#0c1a2b]/75 to-[#0c1a2b]/30 flex items-center">
          <div className="max-w-[1260px] mx-auto px-8 md:px-12 w-full">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-4 before:block before:w-7 before:h-px before:bg-[#c6a84a]">
                Sustainability
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.8rem)] font-700 text-white leading-[1.15] mb-5">
                ESG Compliance &<br/>Responsible Advisory
              </h2>
              <p className="text-[0.9rem] text-white/55 leading-[1.85] mb-8">
                We embed Environmental, Social, and Governance principles into every engagement, ensuring our clients build resilient, future-ready enterprises.
              </p>
              <Link href="/esg" className="inline-flex items-center gap-2.5 text-[0.76rem] font-bold tracking-[0.12em] uppercase text-[#0c1a2b] bg-[#c6a84a] hover:bg-[#dfc07a] px-7 py-3.5 transition-colors duration-300">
                Our ESG Commitment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────── */}
      <section className="py-28 bg-[#f6f3ee]">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-[0.66rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-5">
              <span className="block w-7 h-px bg-[#c6a84a]" />Get In Touch<span className="block w-7 h-px bg-[#c6a84a]" />
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-700 text-[#0c1a2b] leading-[1.12] mb-5">
              Ready to Discuss<br/>
              <span className="italic font-normal text-[#c6a84a]">Your Legal Needs?</span>
            </h2>
            <p className="font-elegant italic text-[1.1rem] text-[#4a5a6a] leading-[1.78] max-w-xl mx-auto mb-10">
              Our team delivers clear, commercially intelligent counsel aligned with your business timeline.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2.5 text-[0.76rem] font-bold tracking-[0.12em] uppercase text-[#0c1a2b] bg-[#c6a84a] hover:bg-[#dfc07a] px-10 py-4 transition-colors duration-300">
                Contact Us →
              </Link>
              <a href="mailto:info@crystalsterl.com" className="inline-flex items-center gap-2.5 text-[0.76rem] font-bold tracking-[0.12em] uppercase text-[#0c1a2b] border border-[#0c1a2b]/25 hover:border-[#c6a84a] px-10 py-4 transition-colors duration-300">
                info@crystalsterl.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
      `}</style>
    </>
  );
}
