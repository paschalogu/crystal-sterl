import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Crystal Sterl Partners",
  description: "Terms and conditions governing use of the Crystal Sterl Partners website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Crystal Sterl Partners website (www.crystalsterl.com), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use this website.

We reserve the right to update these terms at any time. Continued use of the website following any update constitutes your acceptance of the revised terms.`,
  },
  {
    title: "2. Nature of Website Content",
    body: `The content published on this website is provided for general informational purposes only. It does not constitute legal advice and should not be relied upon as such. The information on this website reflects the law as at the date of publication and may not be current.

Accessing this website or reading its content does not create a lawyer-client relationship between you and Crystal Sterl Partners. You should seek independent legal advice tailored to your specific circumstances before acting on any information found on this website.`,
  },
  {
    title: "3. No Solicitation",
    body: `Nothing on this website constitutes a solicitation or offer to provide legal services. Crystal Sterl Partners does not seek to represent anyone in any jurisdiction where this website does not comply with local laws or bar rules.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content on this website, including text, graphics, logos, images, icons, and the overall design, is the property of Crystal Sterl Partners or its licensors and is protected by applicable intellectual property laws.

You may not reproduce, distribute, modify, publish, or create derivative works from any content on this website without prior written consent from Crystal Sterl Partners. Limited personal, non-commercial use is permitted provided attribution is maintained.`,
  },
  {
    title: "5. Links to Third-Party Websites",
    body: `This website may contain links to third-party websites for your convenience. Crystal Sterl Partners does not endorse, control, or take responsibility for the content, practices, or privacy policies of any linked websites. Your use of third-party websites is at your own risk.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `To the fullest extent permitted by law, Crystal Sterl Partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this website or any content contained herein.

We make no warranties, express or implied, regarding the accuracy, completeness, reliability, or availability of the website or its content.`,
  },
  {
    title: "7. Confidentiality of Communications",
    body: `Any information you submit to Crystal Sterl Partners through this website (including via the contact form) will be treated with professional confidentiality. However, communication via the internet is not inherently secure. Please do not send highly sensitive or confidential information through our website contact form without first engaging with us directly.`,
  },
  {
    title: "8. Governing Law",
    body: `These Terms of Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.`,
  },
  {
    title: "9. Contact",
    body: `For questions about these Terms of Use, contact us at:

Crystal Sterl Partners
Email: info@crystalsterl.com
Phone: +234 810 092 2401
Lagos & Abuja, Nigeria`,
  },
];

export default function TermsOfUsePage() {
  return (
    <main>
      <section className="bg-[#002233] pt-40 pb-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#ce5e00] mb-5">
            <span className="block w-7 h-px bg-[#ce5e00]" />
            Legal
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold leading-[1.1] text-white max-w-2xl">
            Terms of Use
          </h1>
          <p className="text-white/40 text-[0.85rem] mt-5">Last updated: January 2025</p>
          <span className="block w-14 h-0.5 bg-[#ce5e00] mt-7" />
        </div>
      </section>

      <section className="bg-[#f6f3ee] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">

          {/* Sticky nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-[0.6rem] font-semibold tracking-[0.24em] uppercase text-[#ce5e00] mb-4">Contents</p>
              <nav className="flex flex-col gap-2.5">
                {sections.map(s => (
                  <a
                    key={s.title}
                    href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[0.78rem] text-[#4a5a6a] hover:text-[#ce5e00] transition-colors duration-300 leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="max-w-3xl">
            <p className="text-[0.95rem] text-[#4a5a6a] leading-[1.9] mb-12 pb-12 border-b border-[#ede9e2] text-justify">
              These Terms of Use govern your access to and use of the Crystal Sterl Partners website. Please read them carefully before using this site.
            </p>
            <div className="flex flex-col gap-12">
              {sections.map(s => (
                <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()}>
                  <h2 className="font-serif text-[1.1rem] font-bold text-[#002233] mb-4">{s.title}</h2>
                  <div className="text-[0.9rem] text-[#4a5a6a] leading-[1.9] whitespace-pre-line text-justify">{s.body}</div>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-10 border-t border-[#ede9e2] flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="text-[0.78rem] font-semibold text-[#ce5e00] hover:underline">Privacy Policy →</Link>
              <Link href="/disclaimer"     className="text-[0.78rem] font-semibold text-[#ce5e00] hover:underline">Disclaimer →</Link>
              <Link href="/contact"        className="text-[0.78rem] font-semibold text-[#ce5e00] hover:underline">Contact Us →</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
