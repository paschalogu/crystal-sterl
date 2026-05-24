import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Crystal Sterl Partners",
  description: "Get in touch with Crystal Sterl Partners. Speak directly with our partners about your legal needs.",
};

export default function ContactPage() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0c1a2b] pt-40 pb-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-5">
            <span className="block w-7 h-px bg-[#c6a84a]" />
            Get in Touch
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-800 leading-[1.08] text-white">
              Speak Directly with{" "}
              <span className="italic font-normal text-[#c6a84a]">Our Partners</span>
            </h1>
            <p className="font-elegant italic text-white/45 text-[1rem] leading-[1.85] pb-2">
              Whether you have a specific mandate or want to explore how we can support your business, our partners are available to discuss your requirements.
            </p>
          </div>
          <span className="block w-14 h-0.5 bg-[#c6a84a] mt-10" />
        </div>
      </section>

      <ContactForm />

    </main>
  );
}
