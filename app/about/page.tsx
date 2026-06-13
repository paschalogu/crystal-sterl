import Image from "next/image";
import Link from "next/link";
import { philosophy, differentiators, firm, team, foundingPartner } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const aboutDescription =
  "Learn about Crystal Sterl Partners — our history, legal philosophy, vision, and the people behind one of Africa's premier law firms, led by Founding Partner Noble Obasi.";

export const metadata = {
  title: "About Us",
  description: aboutDescription,
  alternates: {
    canonical: "https://www.crystalsterl.com/about/",
  },
  openGraph: {
    url: "https://www.crystalsterl.com/about/",
    title: "About Us | Crystal Sterl Partners",
    description: aboutDescription,
    images: [
      {
        url: `https://www.crystalsterl.com${foundingPartner.image}`,
        alt: foundingPartner.imageAlt,
      },
    ],
  },
  twitter: {
    title: "About Us | Crystal Sterl Partners",
    description: aboutDescription,
    images: [`https://www.crystalsterl.com${foundingPartner.image}`],
  },
};

// Person structured data (schema.org) for the Founding Partner — improves SEO/rich results.
const foundingPartnerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: foundingPartner.name,
  jobTitle: foundingPartner.role,
  email: foundingPartner.email,
  image: `https://www.crystalsterl.com${foundingPartner.image}`,
  description: foundingPartner.bio.join(" "),
  url: "https://www.crystalsterl.com/about/",
  worksFor: {
    "@type": "LegalService",
    name: "Crystal Sterl Partners",
    url: "https://www.crystalsterl.com/",
  },
  knowsAbout: foundingPartner.practices,
  alumniOf: foundingPartner.alumniOf.map((name) => ({
    "@type": "CollegeOrUniversity",
    name,
  })),
  memberOf: foundingPartner.memberOf.map((name) => ({
    "@type": "Organization",
    name,
  })),
};

export default function AboutPage() {
  const partners = team.filter((m) => m.tier === "partner");

  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foundingPartnerJsonLd) }}
      />

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
                Partners
              </h2>
            </div>
          </Reveal>

          {/* Founding Partner — featured spotlight */}
          <Reveal>
            <article className="mb-14 bg-white border border-[#ede9e2]">
              <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr]">
                <div className="relative aspect-[1045/1080] lg:aspect-auto overflow-hidden bg-white">
                  <Image
                    src={foundingPartner.image}
                    alt={foundingPartner.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center"
                    priority
                  />
                </div>
                <div className="p-8 md:p-11 flex flex-col">
                  <div className="text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#B89D6C] mb-4">
                    {foundingPartner.role}
                  </div>
                  <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold text-[#111217] leading-[1.1] mb-2">
                    <span className="whitespace-nowrap">{foundingPartner.name}</span>
                  </h3>
                  <p className="font-elegant text-[#4a5a6a] text-[1rem] mb-2">
                    {foundingPartner.headline}
                  </p>
                  <a
                    href={`mailto:${foundingPartner.email}`}
                    className="inline-block self-start text-[0.8rem] font-medium text-[#B89D6C] hover:text-[#111217] transition-colors duration-200 mb-5"
                  >
                    {foundingPartner.email}
                  </a>
                  <span className="block w-12 h-0.5 bg-[#B89D6C] mb-6" />
                  <div className="space-y-3.5 text-[0.86rem] text-[#4a5a6a] leading-[1.75] text-justify">
                    {foundingPartner.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                    {foundingPartner.credentials.map(({ title, items }) => (
                      <div key={title}>
                        <h4 className="text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#B89D6C] mb-4">
                          {title}
                        </h4>
                        <ul className="space-y-3.5">
                          {items.map(({ qualification, institution }) => (
                            <li key={qualification + institution}>
                              <p className="font-serif text-[#111217] text-[0.82rem] font-semibold leading-snug">{qualification}</p>
                              <p className="text-[0.7rem] text-[#4a5a6a]/80 leading-snug mt-0.5">{institution}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-1.5">
                    {foundingPartner.practices.map((p) => (
                      <span key={p} className="text-[0.58rem] font-medium tracking-[0.06em] text-[#111217]/60 border border-[#111217]/15 px-2 py-0.5">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Other Partners — appear automatically when added to `team` in lib/content.ts */}
          {partners.length > 0 && (
            <div>
              <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-8 flex items-center gap-3">
                <span className="block w-5 h-px bg-[#B89D6C]" /> The Partnership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ede9e2]">
                {partners.map((member, i) => (
                  <Reveal key={member.initials + i} delay={i * 0.08}>
                    <div className="group bg-[#f6f3ee] hover:bg-white transition-colors duration-300 h-full flex flex-col">
                      {member.image ? (
                        <div className="relative aspect-[4/5] overflow-hidden bg-[#111217]">
                          <Image
                            src={member.image}
                            alt={member.imageAlt ?? `${member.name}, ${member.role} at Crystal Sterl Partners`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[4/5] bg-[#111217] flex items-center justify-center group-hover:bg-[#1B1E26] transition-colors duration-300">
                          <span className="font-serif text-[1.5rem] font-bold text-[#B89D6C]">{member.initials}</span>
                        </div>
                      )}
                      <div className="p-7 flex flex-col flex-1">
                        <h4 className="font-serif text-[1.05rem] font-bold text-[#111217] mb-1">{member.name}</h4>
                        <p className="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[#B89D6C] mb-4">{member.role}</p>
                        <div className="w-6 h-0.5 bg-[#B89D6C] mb-4 group-hover:w-10 transition-all duration-500" />
                        <p className="text-[0.8rem] text-[#4a5a6a] leading-[1.7] flex-1 text-justify">{member.bio}</p>
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {member.practices.map(p => (
                            <span key={p} className="text-[0.58rem] font-medium tracking-[0.06em] text-[#111217]/60 border border-[#111217]/15 px-2 py-0.5">{p}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
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
