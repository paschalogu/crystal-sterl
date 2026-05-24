import Image from "next/image";
import Link from "next/link";
import { esgPillars } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "ESG Compliance | Crystal Sterl Partners",
  description: "Crystal Sterl Partners is committed to environmental, social, and governance (ESG) principles — integrating responsible practices into everything we do.",
};

const pillarColors: Record<string, { bg: string; border: string }> = {
  E: { bg: "from-[#1a3a2b]", border: "border-[#2d7a4a]/30" },
  S: { bg: "from-[#0c1a2b]", border: "border-[#c6a84a]/20" },
  G: { bg: "from-[#2b1a0c]", border: "border-[#c6a84a]/20" },
};

export default function ESGPage() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end bg-[#0c1a2b] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=85&auto=format&fit=crop"
          alt="ESG Compliance"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2b] via-[#0c1a2b]/55 to-transparent" />
        <div className="relative z-10 max-w-[1260px] mx-auto px-8 md:px-12 pb-20 w-full">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-5">
            <span className="block w-7 h-px bg-[#c6a84a]" />
            Responsible Practice
          </div>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-800 leading-[1.08] text-white max-w-2xl">
            ESG at the{" "}
            <span className="italic font-normal text-[#c6a84a]">Heart of Our Practice</span>
          </h1>
          <p className="font-elegant italic text-white/45 text-[1.05rem] leading-[1.85] mt-7 max-w-xl">
            We embed environmental, social, and governance principles into our counsel, our operations, and our client relationships.
          </p>
          <span className="block w-14 h-0.5 bg-[#c6a84a] mt-8" />
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────────────────────── */}
      <section className="bg-[#f6f3ee] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-20 items-start">
          <Reveal direction="left">
            <div>
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#c6a84a] mb-6">
                <span className="block w-6 h-px bg-[#c6a84a]" />
                Our Commitment
              </div>
              <h2 className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold text-[#0c1a2b] leading-[1.18] mb-7">
                Responsible Counsel for a Sustainable Future
              </h2>
              <div className="space-y-5 text-[0.92rem] text-[#4a5a6a] leading-[1.9]">
                <p>
                  At Crystal Sterl Partners, ESG is not a compliance checkbox — it is a fundamental lens through which we approach every client mandate and every internal decision.
                </p>
                <p>
                  We believe that legal counsel has a role to play in shaping a more sustainable, equitable, and well-governed business landscape. When we advise on transactions, we raise ESG questions. When we structure governance frameworks, we embed accountability. When we counsel on disputes, we consider stakeholder impact.
                </p>
                <p>
                  This commitment reflects our belief that the most durable business outcomes are built on responsible foundations.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="bg-[#0c1a2b] p-10">
              <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-8">Our ESG Framework</h3>
              <div className="flex flex-col gap-6">
                {esgPillars.map(p => (
                  <div key={p.letter} className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#c6a84a] flex items-center justify-center">
                      <span className="font-serif font-bold text-[#0c1a2b] text-[1rem]">{p.letter}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-[0.9rem] mb-1">{p.title}</h4>
                      <p className="text-[0.8rem] text-white/40 leading-[1.7]">{p.commitments[0]} and more.</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/[0.07]">
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[#c6a84a]">
                  Aligned with UN SDGs · Paris Agreement · UN Guiding Principles
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Three Pillars ───────────────────────────────────────────────── */}
      <section className="bg-[#0c1a2b] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#c6a84a] mb-5">
                <span className="block w-6 h-px bg-[#c6a84a]" />
                The Three Pillars
                <span className="block w-6 h-px bg-[#c6a84a]" />
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white leading-[1.15]">
                E · S · G
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-1">
            {esgPillars.map((pillar, i) => (
              <Reveal key={pillar.letter} delay={i * 0.12}>
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr] gap-0 border border-white/[0.07] hover:border-[#c6a84a]/20 transition-colors duration-400 group">
                  <div className="flex flex-col justify-center items-center p-10 bg-white/[0.03] border-b lg:border-b-0 lg:border-r border-white/[0.07]">
                    <span className="font-serif text-[4rem] font-bold text-[#c6a84a] leading-none mb-2">{pillar.letter}</span>
                    <span className="text-[0.68rem] font-semibold tracking-[0.24em] uppercase text-white/40">{pillar.title}</span>
                  </div>
                  <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
                    <h3 className="font-serif text-[1.2rem] font-bold text-white mb-5">{pillar.title} Commitment</h3>
                    <p className="text-[0.87rem] text-white/50 leading-[1.85]">{pillar.description}</p>
                  </div>
                  <div className="p-10">
                    <h4 className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-[#c6a84a] mb-5">Key Areas</h4>
                    <ul className="flex flex-col gap-3">
                      {pillar.commitments.map(c => (
                        <li key={c} className="flex items-start gap-3 text-[0.84rem] text-white/50 leading-[1.6]">
                          <span className="flex-shrink-0 w-4 h-px bg-[#c6a84a]/50 mt-[10px]" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESG in Practice ─────────────────────────────────────────────── */}
      <section className="bg-[#f6f3ee] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="mb-14">
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#c6a84a] mb-5">
                <span className="block w-6 h-px bg-[#c6a84a]" />
                ESG in Practice
              </div>
              <h2 className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold text-[#0c1a2b] leading-[1.18] max-w-xl">
                How We Embed ESG Into Our Client Work
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              {
                title: "Transaction Due Diligence",
                body: "We integrate ESG due diligence into every M&A, finance, and investment transaction — identifying risks and opportunities that create long-term value.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="4" y="4" width="20" height="20" rx="2" stroke="#c6a84a" strokeWidth="1.5" />
                    <path d="M9 14l3.5 3.5 6-7" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Governance Frameworks",
                body: "We design and implement governance frameworks for boards, management teams, and regulators — establishing accountability and transparency at every level.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="10" r="4" stroke="#c6a84a" strokeWidth="1.5" />
                    <path d="M6 23c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Sustainability Finance",
                body: "We advise on green bonds, sustainability-linked loans, carbon markets, and other ESG-aligned financial instruments — structuring them to meet international standards.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 4v8m0 0c-3 0-6 1.5-6 5s3 5 6 5 6-1.5 6-5-3-5-6-5z" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 22v2" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Regulatory Compliance",
                body: "We monitor evolving ESG regulatory requirements across Nigerian and international jurisdictions, helping clients stay ahead of compliance obligations.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 4l10 4v8c0 5-5 8-10 10C9 24 4 21 4 16V8l10-4z" stroke="#c6a84a" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Stakeholder Engagement",
                body: "We advise on community impact assessments, stakeholder engagement processes, and social licence obligations — particularly for infrastructure and energy projects.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="9" cy="11" r="3.5" stroke="#c6a84a" strokeWidth="1.5" />
                    <circle cx="19" cy="11" r="3.5" stroke="#c6a84a" strokeWidth="1.5" />
                    <path d="M2 23c0-3.314 3.134-6 7-6M19 17c3.866 0 7 2.686 7 6" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 17c-2.5 0-5 1.5-5 4" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Reporting & Disclosure",
                body: "We support clients in developing ESG reporting frameworks aligned with GRI, SASB, TCFD, and other international disclosure standards.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 4h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#c6a84a" strokeWidth="1.5" />
                    <path d="M9 12h10M9 16h6" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9 8h3" stroke="#c6a84a" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map(({ title, body, icon }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <div className="bg-white border border-[#ede9e2] p-9 hover:border-[#c6a84a]/30 hover:shadow-[0_4px_32px_rgba(198,168,74,0.07)] transition-all duration-400 h-full">
                  <div className="mb-6">{icon}</div>
                  <h3 className="font-serif text-[1rem] font-bold text-[#0c1a2b] mb-3">{title}</h3>
                  <p className="text-[0.83rem] text-[#4a5a6a] leading-[1.8]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards Banner ────────────────────────────────────────────── */}
      <section className="bg-[#0c1a2b] py-16 border-t border-[#c6a84a]/10">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex flex-wrap items-center gap-12 justify-between">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-white/30">
              Aligned with International Standards
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              {["UN SDGs", "Paris Agreement", "UN Guiding Principles", "GRI Standards", "TCFD Framework"].map(s => (
                <span key={s} className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-white/40 border border-white/10 px-4 py-2 hover:border-[#c6a84a]/30 hover:text-[#c6a84a] transition-colors duration-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#c6a84a] py-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#0c1a2b] leading-[1.2]">
              Need ESG legal advisory?
            </h2>
            <p className="text-[0.88rem] text-[#0c1a2b]/65 mt-2">
              Our team can help you build a robust ESG framework for your business.
            </p>
          </div>
          <Link href="/contact" className="flex-shrink-0 text-[0.73rem] font-bold tracking-[0.14em] uppercase bg-[#0c1a2b] text-white hover:bg-[#162d47] px-8 py-4 transition-colors duration-300">
            Talk to Our Team
          </Link>
        </div>
      </section>

    </main>
  );
}
