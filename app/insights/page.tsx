import Image from "next/image";
import Link from "next/link";
import { insights, type InsightCategory } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Insights | Crystal Sterl Partners",
  description: "Legal insights, news, thought leadership articles, and podcasts from Crystal Sterl Partners.",
};

const categoryConfig: Record<InsightCategory | "all", { label: string; colour: string }> = {
  all:     { label: "All",       colour: "bg-[#111217] text-white" },
  news:    { label: "News",      colour: "bg-[#B89D6C]/15 text-[#B89D6C]" },
  blog:    { label: "Blog",      colour: "bg-[#111217]/10 text-[#111217]" },
  podcast: { label: "Podcast",   colour: "bg-[#1B1E26]/15 text-[#1B1E26]" },
};

function CategoryBadge({ category }: { category: InsightCategory }) {
  const cfg = categoryConfig[category];
  return (
    <span className={`inline-block text-[0.58rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 ${cfg.colour}`}>
      {cfg.label}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function InsightsPage() {
  const news    = insights.filter(i => i.category === "news");
  const blogs   = insights.filter(i => i.category === "blog");
  const podcasts = insights.filter(i => i.category === "podcast");

  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#111217] overflow-hidden pt-36 pb-24">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=90&auto=format&fit=crop&sat=40"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="relative z-10 max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-6">
                <span className="block w-7 h-px bg-[#B89D6C]" />
                Knowledge & Commentary
              </div>
              <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.4rem)] font-bold leading-[1.06] text-white">
                Legal{" "}
                <span className="italic font-normal text-[#B89D6C]">Insights</span>
              </h1>
              <span className="block w-14 h-0.5 bg-[#B89D6C] mt-8" />
            </div>
            <div className="pb-1">
              <p className="text-[0.88rem] text-white/45 leading-[1.85] text-justify">
                Thought leadership, legal commentary, industry news, and podcast conversations from our lawyers on the issues shaping African business and law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── News ────────────────────────────────────────────────────────── */}
      <section id="news" className="bg-[#f6f3ee] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C]">
                <span className="block w-6 h-px bg-[#B89D6C]" />
                Latest News
              </div>
              <span className="text-[0.62rem] text-white/50 bg-[#111217] px-2.5 py-1 font-semibold tracking-[0.15em]">{news.length} Articles</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ede9e2]">
            {news.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.07}>
                <article className="bg-[#f6f3ee] group flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryBadge category={item.category} />
                      <span className="text-[0.65rem] text-[#4a5a6a]">{formatDate(item.date)}</span>
                    </div>
                    <h3 className="font-serif text-[1rem] font-bold text-[#111217] leading-[1.35] mb-3 group-hover:text-[#B89D6C] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[0.8rem] text-[#4a5a6a] leading-[1.72] text-justify flex-1 mb-5">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#ede9e2]">
                      <span className="text-[0.65rem] text-[#4a5a6a]">{item.readTime}</span>
                      <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#B89D6C]">Read More →</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ────────────────────────────────────────────────────────── */}
      <section id="blog" className="bg-white py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C]">
                <span className="block w-6 h-px bg-[#B89D6C]" />
                Thought Leadership
              </div>
              <span className="text-[0.62rem] text-white/50 bg-[#111217] px-2.5 py-1 font-semibold tracking-[0.15em]">{blogs.length} Articles</span>
            </div>
          </Reveal>

          {/* Featured first blog post */}
          {blogs[0] && (
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#ede9e2] mb-px">
                <div className="relative min-h-[360px] overflow-hidden">
                  <Image
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111217]/60 to-transparent" />
                </div>
                <div className="bg-[#111217] p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <CategoryBadge category={blogs[0].category} />
                    <span className="text-[0.65rem] text-white/40">{formatDate(blogs[0].date)}</span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.2rem,2vw,1.6rem)] font-bold text-white leading-[1.3] mb-4">
                    {blogs[0].title}
                  </h3>
                  <p className="text-[0.85rem] text-white/50 leading-[1.8] mb-6 text-justify">{blogs[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.65rem] text-white/35">{blogs[0].readTime} · {blogs[0].author}</span>
                    <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#B89D6C]">Read More →</span>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Remaining blog posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ede9e2]">
            {blogs.slice(1).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.07}>
                <article className="bg-white group flex flex-col h-full">
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryBadge category={item.category} />
                      <span className="text-[0.65rem] text-[#4a5a6a]">{formatDate(item.date)}</span>
                    </div>
                    <h3 className="font-serif text-[0.98rem] font-bold text-[#111217] leading-[1.35] mb-3 group-hover:text-[#B89D6C] transition-colors duration-300">{item.title}</h3>
                    <p className="text-[0.8rem] text-[#4a5a6a] leading-[1.72] flex-1 mb-4 text-justify">{item.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#f0ece5]">
                      <span className="text-[0.65rem] text-[#4a5a6a]">{item.readTime}</span>
                      <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#B89D6C]">Read More →</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Podcasts ────────────────────────────────────────────────────── */}
      <section id="podcast" className="bg-[#111217] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[#B89D6C]">
                <span className="block w-6 h-px bg-[#B89D6C]" />
                Podcast
              </div>
              <span className="text-[0.62rem] text-[#111217] bg-[#B89D6C] px-2.5 py-1 font-semibold tracking-[0.15em]">{podcasts.length} Episodes</span>
            </div>
          </Reveal>
          <div className="flex flex-col gap-px bg-white/[0.06]">
            {podcasts.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="group grid grid-cols-1 lg:grid-cols-[260px_1fr] bg-[#111217] hover:bg-white/[0.03] transition-colors duration-300">
                  <div className="relative h-52 lg:h-auto overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#B89D6C] rounded-full flex items-center justify-center">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                          <path d="M2 2l14 8-14 8V2z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryBadge category={item.category} />
                      <span className="text-[0.65rem] text-white/35">{formatDate(item.date)}</span>
                    </div>
                    <h3 className="font-serif text-[1.15rem] font-bold text-white leading-[1.35] mb-3 group-hover:text-[#B89D6C] transition-colors duration-300">{item.title}</h3>
                    <p className="text-[0.84rem] text-white/45 leading-[1.8] max-w-2xl mb-5 text-justify">{item.excerpt}</p>
                    <div className="flex items-center gap-5">
                      <span className="text-[0.65rem] text-white/35">{item.readTime} · {item.author}</span>
                      <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#B89D6C]">Listen Now →</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subscribe CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#B89D6C] py-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#111217] leading-[1.2]">
              Stay informed on African law and business.
            </h2>
            <p className="text-[0.88rem] text-[#111217]/65 mt-2">Subscribe to receive our latest insights directly.</p>
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
