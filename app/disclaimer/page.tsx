import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Crystal Sterl Partners",
  description: "Legal disclaimer for the Crystal Sterl Partners website.",
};

const sections = [
  {
    title: "1. No Legal Advice",
    body: `The content on this website is published for general informational and educational purposes only. It does not constitute legal advice and must not be treated as a substitute for specific legal advice relevant to your particular circumstances.

Crystal Sterl Partners expressly disclaims any liability in respect of anything done or omitted to be done by any person in reliance upon the contents of this website.`,
  },
  {
    title: "2. No Lawyer-Client Relationship",
    body: `Visiting this website, submitting an enquiry, or communicating with Crystal Sterl Partners through this website does not establish a lawyer-client relationship. A lawyer-client relationship is only formed when Crystal Sterl Partners expressly agrees in writing to represent you.

Until such a relationship is formally established, you should not disclose information to us that you wish to be kept confidential.`,
  },
  {
    title: "3. Accuracy of Information",
    body: `While Crystal Sterl Partners endeavours to ensure the accuracy and currency of the information on this website, we make no representations or warranties — express or implied — as to the accuracy, completeness, timeliness, or suitability of any information contained herein.

Laws and regulations change frequently. Information on this website reflects the law as at the time of publication and may be out of date. You should always verify current law before relying on any information provided here.`,
  },
  {
    title: "4. Jurisdiction",
    body: `The legal information on this website is primarily relevant to Nigerian law and the laws of jurisdictions in which Crystal Sterl Partners operates. It may not be applicable to your jurisdiction. If you are outside Nigeria or are dealing with a matter involving foreign law, you should seek advice from a qualified lawyer in the relevant jurisdiction.`,
  },
  {
    title: "5. Past Results",
    body: `Any references to past transactions, matters, or outcomes on this website are provided for illustrative purposes only. Past results are not a guarantee of future outcomes. Each legal matter is unique and results depend on the specific facts and circumstances involved.`,
  },
  {
    title: "6. External Links",
    body: `This website may link to external websites operated by third parties. Crystal Sterl Partners does not control those websites and accepts no responsibility or liability for their content, privacy practices, or accuracy. The inclusion of any link does not imply endorsement by Crystal Sterl Partners.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, Crystal Sterl Partners, its partners, associates, and employees shall not be liable for any loss or damage — whether direct, indirect, consequential, or otherwise — arising from your use of or reliance on this website or its content.`,
  },
  {
    title: "8. Professional Responsibility",
    body: `Crystal Sterl Partners is a law firm regulated under applicable Nigerian legal and professional standards. Nothing in this disclaimer limits our professional obligations or liability as legal practitioners where such obligations are imposed by law or the rules of professional conduct.`,
  },
  {
    title: "9. Contact",
    body: `If you have any questions about this disclaimer or require legal advice, please contact us directly:

Crystal Sterl Partners
Email: info@crystalsterl.com
Phone: +234 806 331 4898
Lagos & Abuja, Nigeria`,
  },
];

export default function DisclaimerPage() {
  return (
    <main>
      <section className="bg-[#0c1a2b] pt-40 pb-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#c6a84a] mb-5">
            <span className="block w-7 h-px bg-[#c6a84a]" />
            Legal
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-800 leading-[1.1] text-white max-w-2xl">
            Disclaimer
          </h1>
          <p className="text-white/40 text-[0.85rem] mt-5">Last updated: January 2025</p>
          <span className="block w-14 h-0.5 bg-[#c6a84a] mt-7" />
        </div>
      </section>

      <section className="bg-[#f6f3ee] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">

          {/* Sticky nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-[0.6rem] font-semibold tracking-[0.24em] uppercase text-[#c6a84a] mb-4">Contents</p>
              <nav className="flex flex-col gap-2.5">
                {sections.map(s => (
                  <a
                    key={s.title}
                    href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[0.78rem] text-[#4a5a6a] hover:text-[#c6a84a] transition-colors duration-300 leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="max-w-3xl">
            <p className="text-[0.95rem] text-[#4a5a6a] leading-[1.9] mb-12 pb-12 border-b border-[#ede9e2]">
              Please read this disclaimer carefully before using the Crystal Sterl Partners website. By using this website, you acknowledge that you have read and understood this disclaimer.
            </p>
            <div className="flex flex-col gap-12">
              {sections.map(s => (
                <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()}>
                  <h2 className="font-serif text-[1.1rem] font-bold text-[#0c1a2b] mb-4">{s.title}</h2>
                  <div className="text-[0.9rem] text-[#4a5a6a] leading-[1.9] whitespace-pre-line">{s.body}</div>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-10 border-t border-[#ede9e2] flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="text-[0.78rem] font-semibold text-[#c6a84a] hover:underline">Privacy Policy →</Link>
              <Link href="/terms-of-use"   className="text-[0.78rem] font-semibold text-[#c6a84a] hover:underline">Terms of Use →</Link>
              <Link href="/contact"        className="text-[0.78rem] font-semibold text-[#c6a84a] hover:underline">Contact Us →</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
