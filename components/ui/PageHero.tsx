interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, titleItalic, subtitle, dark = true }: PageHeroProps) {
  return (
    <section className={`pt-36 pb-20 ${dark ? "bg-[#0c1a2b]" : "bg-[#f6f3ee]"}`}>
      <div className="max-w-[1260px] mx-auto px-8 md:px-12">
        {eyebrow && (
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-5">
            <span className="block w-7 h-px bg-[#c6a84a]" />
            {eyebrow}
          </div>
        )}
        <h1 className={`font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-800 leading-[1.08] ${dark ? "text-white" : "text-[#0c1a2b]"}`}>
          {title}
          {titleItalic && (
            <> <span className="italic font-normal text-[#c6a84a]">{titleItalic}</span></>
          )}
        </h1>
        {subtitle && (
          <p className={`font-elegant italic text-[clamp(1rem,1.8vw,1.2rem)] leading-[1.8] mt-6 max-w-2xl ${dark ? "text-white/55" : "text-[#4a5a6a]"}`}>
            {subtitle}
          </p>
        )}
        <span className="block w-14 h-0.5 bg-[#c6a84a] mt-7" />
      </div>
    </section>
  );
}
