import Image from "next/image";
import Link from "next/link";
import { philosophy, differentiators, firm, team } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "About Us | Crystal Sterl Partners",
  description: "Learn about Crystal Sterl Partners: our history, philosophy, vision, and what sets us apart as a leading African law firm.",
};

export default function AboutPage() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end bg-[#111217] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=90&auto=format&fit=crop&sat=40"
          alt="Crystal Sterl Partners"
          fill
          className="object-cover object-center opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/60 to-transparent" />
        <div className="relative z-10 max-w-[1260px] mx-auto px-8 md:px-12 pb-20 w-full">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-5">
            <span className="block w-7 h-px bg-[#B89D6C]" />
            The Firm
          </div>
          <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.6rem)] font-bold leading-[1.06] text-white max-w-3xl">
            Rooted in Africa,{" "}
            <span className="italic font-normal text-[#B89D6C]">Built for the World</span>
          </h1>
          <span className="block w-14 h-0.5 bg-[#B89D6C] mt-8" />
        </div>
      </section>

      {/* ── Firm Overview ───────────────────────────────────────────────── */}
      <section className="bg-[#f6f3ee] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=90&auto=format&fit=crop&sat=40"
                  alt="Crystal Sterl Partners Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#111217] p-8 max-w-[260px]">
                <p className="font-elegant italic text-white/70 text-[0.92rem] leading-[1.75] text-justify">
                  "A world-class firm with a distinctly African perspective."
                </p>
                <span className="block w-8 h-px bg-[#B89D6C] mt-4" />
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-6">
                <span className="block w-6 h-px bg-[#B89D6C]" />
                About Crystal Sterl
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.15] text-[#111217] mb-7">
                A Leading African Law Firm with a Global Outlook
              </h2>
              <div className="space-y-5 text-[0.95rem] text-[#4a5a6a] leading-[1.85] text-justify">
                <p>
                  Crystal Sterl Partners is a full-service commercial law firm delivering sophisticated legal advisory to businesses, investors, institutions, and governments operating in and across Africa.
                </p>
                <p>
                  With offices in Lagos and Abuja, we combine deep local knowledge with international-standard practice to serve clients at the intersection of law, business, and policy across Nigeria and the African continent.
                </p>
                <p>
                  Our lawyers bring broad multidisciplinary expertise spanning corporate transactions, capital markets, energy, disputes, technology, and regulatory compliance, providing integrated legal solutions that align with our clients' strategic and commercial objectives.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { label: "Headquarters", value: "Lagos, Nigeria" },
                  { label: "Second Office",  value: "Abuja, Nigeria" },
                  { label: "Founded",        value: "Crystal Sterl Partners" },
                  { label: "Reach",          value: "Pan-Africa & Global" },
                ].map(({ label, value }) => (
                  <div key={label} className="border-l-2 border-[#B89D6C] pl-4">
                    <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#B89D6C] mb-0.5">{label}</p>
                    <p className="font-serif text-[#111217] font-semibold text-[0.88rem]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Philosophy ──────────────────────────────────────────────────── */}
      <section id="philosophy" className="bg-[#111217] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-5">
                <span className="block w-6 h-px bg-[#B89D6C]" />
                Our Guiding Principles
                <span className="block w-6 h-px bg-[#B89D6C]" />
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-white leading-[1.15]">
                The Philosophy Behind Our Practice
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.07]">
            {philosophy.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.1}>
                <div className="group p-10 border-b sm:border-b-0 border-white/[0.07] sm:[&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 lg:border-r last:border-r-0 border-white/[0.07] hover:bg-white/[0.03] transition-colors duration-300">
                  <span className="block text-[0.62rem] font-semibold tracking-[0.3em] text-[#B89D6C] mb-8">{p.number}</span>
                  <h3 className="font-serif text-[1.35rem] font-bold text-white mb-1">{p.name}</h3>
                  <div className="w-8 h-0.5 bg-[#B89D6C] mb-5 group-hover:w-14 transition-all duration-500" />
                  <p className="text-[0.85rem] text-white/50 leading-[1.8] text-justify">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ────────────────────────────────────────────── */}
      <section id="vision" className="bg-[#f6f3ee] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <Reveal direction="left">
              <div className="bg-[#111217] p-14 lg:p-16">
                <div className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-7">
                  <span className="block w-5 h-px bg-[#B89D6C]" />
                  Our Vision
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-bold text-white leading-[1.2] mb-6">
                  To be Africa's most trusted and impactful commercial law firm
                </h2>
                <span className="block w-10 h-0.5 bg-[#B89D6C] mb-7" />
                <p className="text-[0.9rem] text-white/55 leading-[1.85] text-justify">
                  We aspire to set the standard for legal excellence across the African continent, combining world-class expertise with deep local insight to build a firm that institutions, businesses, and governments trust at their most critical moments.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="bg-white p-14 lg:p-16 border border-[#ede9e2]">
                <div className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-7">
                  <span className="block w-5 h-px bg-[#B89D6C]" />
                  Our Mission
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-bold text-[#111217] leading-[1.2] mb-6">
                  To deliver outcomes-focused legal solutions that advance our clients' objectives
                </h2>
                <span className="block w-10 h-0.5 bg-[#B89D6C] mb-7" />
                <p className="text-[0.9rem] text-[#4a5a6a] leading-[1.85] text-justify">
                  We exist to serve, bringing intelligence, precision, and relentless commitment to every mandate. We close deals, win disputes, and solve complex legal challenges with the same commercial urgency our clients bring to their businesses.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Differentiators ─────────────────────────────────────────────── */}
      <section id="differentiators" className="bg-[#111217] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="mb-16">
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-5">
                <span className="block w-6 h-px bg-[#B89D6C]" />
                What Sets Us Apart
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-white leading-[1.15] max-w-xl">
                Why Clients Choose Crystal Sterl
              </h2>
            </div>
          </Reveal>
          <div className="flex flex-col gap-0 border-t border-white/[0.08]">
            {differentiators.map((d, i) => (
              <Reveal key={d.number} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 border-b border-white/[0.08] group">
                  <div className="py-14 pr-0 lg:pr-16 flex gap-10 items-start">
                    <span className="text-[0.62rem] font-semibold tracking-[0.3em] text-[#B89D6C] pt-1 flex-shrink-0">{d.number}</span>
                    <div>
                      <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-white/30 mb-3">{d.title}</p>
                      <h3 className="font-serif text-[1.45rem] font-bold text-white mb-5">{d.headline}</h3>
                      <p className="text-[0.88rem] text-white/50 leading-[1.85] max-w-lg text-justify">{d.description}</p>
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.headline}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our People ──────────────────────────────────────────────────── */}
      <section id="people" className="bg-[#f6f3ee] py-28">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="mb-16">
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C] mb-5">
                <span className="block w-6 h-px bg-[#B89D6C]" />
                The Team
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#111217] leading-[1.15] max-w-xl">
                Partners & Counsel
              </h2>
            </div>
          </Reveal>

          {/* Partners */}
          <div className="mb-16">
            <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-8 flex items-center gap-3">
              <span className="block w-5 h-px bg-[#B89D6C]" /> Partners
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ede9e2]">
              {team.filter(m => m.tier === "partner").map((member, i) => (
                <Reveal key={member.initials + i} delay={i * 0.08}>
                  <div className="group bg-[#f6f3ee] p-8 hover:bg-white transition-colors duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-[#111217] flex items-center justify-center mb-6 group-hover:bg-[#B89D6C] transition-colors duration-300">
                      <span className="font-serif text-[1.1rem] font-bold text-[#B89D6C] group-hover:text-[#111217] transition-colors duration-300">{member.initials}</span>
                    </div>
                    <h4 className="font-serif text-[1rem] font-bold text-[#111217] mb-1">{member.name}</h4>
                    <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#B89D6C] mb-4">{member.role}</p>
                    <div className="w-6 h-0.5 bg-[#B89D6C] mb-4 group-hover:w-10 transition-all duration-500" />
                    <p className="text-[0.8rem] text-[#4a5a6a] leading-[1.72] flex-1 text-justify">{member.bio}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {member.practices.map(p => (
                        <span key={p} className="text-[0.58rem] font-medium tracking-[0.06em] text-[#111217]/60 border border-[#111217]/15 px-2 py-0.5">{p}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Counsel */}
          <div>
            <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-8 flex items-center gap-3">
              <span className="block w-5 h-px bg-[#B89D6C]" /> Counsel
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ede9e2]">
              {team.filter(m => m.tier === "counsel").map((member, i) => (
                <Reveal key={member.initials + i} delay={i * 0.08}>
                  <div className="group bg-[#f6f3ee] p-8 hover:bg-white transition-colors duration-300 h-full flex flex-col">
                    <div className="w-14 h-14 bg-[#111217] flex items-center justify-center mb-5 group-hover:bg-[#B89D6C] transition-colors duration-300">
                      <span className="font-serif text-[0.95rem] font-bold text-[#B89D6C] group-hover:text-[#111217] transition-colors duration-300">{member.initials}</span>
                    </div>
                    <h4 className="font-serif text-[1rem] font-bold text-[#111217] mb-1">{member.name}</h4>
                    <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#B89D6C] mb-4">{member.role}</p>
                    <div className="w-6 h-0.5 bg-[#B89D6C] mb-4 group-hover:w-10 transition-all duration-500" />
                    <p className="text-[0.8rem] text-[#4a5a6a] leading-[1.72] flex-1 text-justify">{member.bio}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {member.practices.map(p => (
                        <span key={p} className="text-[0.58rem] font-medium tracking-[0.06em] text-[#111217]/60 border border-[#111217]/15 px-2 py-0.5">{p}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#B89D6C] py-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#111217] leading-[1.2]">
              Ready to work with us?
            </h2>
            <p className="text-[0.88rem] text-[#111217]/65 mt-2">Speak directly with our partners.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 text-[0.73rem] font-bold tracking-[0.14em] uppercase bg-[#111217] text-white hover:bg-[#1B1E26] px-8 py-4 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}
