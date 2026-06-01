import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Crystal Sterl Partners",
  description: "Crystal Sterl Partners' Privacy Policy: how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Crystal Sterl Partners is a commercial law firm registered and operating in Nigeria, with offices in Lagos and Abuja. This Privacy Policy governs the collection, use, and processing of personal data by Crystal Sterl Partners in connection with your use of our website (www.crystalsterl.com) and your engagement with our firm.

For questions about this policy or how we handle your data, contact us at info@crystalsterl.com.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect the following categories of personal information:

·Contact and identity data: name, email address, phone number, company or organisation name.
·Enquiry and correspondence data: the content of messages you send us via our contact form or by email.
·Technical data: IP address, browser type, device type, pages visited, and time spent on our website (collected via analytics tools).
·Usage data: how you interact with our website, including which pages you visit and what links you follow.

We do not collect sensitive personal data (such as health data, financial account details, or national identification numbers) through our website.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect for the following purposes:

·To respond to enquiries and provide legal services where instructed.
·To manage our relationship with you, including sending relevant communications.
·To improve our website and understand how visitors use it.
·To comply with our legal obligations and professional responsibilities as a law firm.
·To protect against fraud, abuse, or other legal risks.

We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process your personal data on the following legal bases:

·Consent: where you have expressly agreed to receive communications from us.
·Legitimate interests: to operate our website, respond to enquiries, and improve our services.
·Contractual necessity: to perform legal services under an engagement agreement.
·Legal obligation: where processing is required to comply with applicable law or regulatory requirements.`,
  },
  {
    title: "5. Data Sharing and Disclosure",
    body: `We may share your personal information with:

·Our personnel (lawyers, paralegals, and staff) who need access to perform their duties.
·Third-party service providers who support our operations (e.g., IT infrastructure, email delivery, analytics), subject to appropriate confidentiality and data protection obligations.
·Regulators, courts, or law enforcement where required by law or court order.
·Counterparties or their representatives where you have instructed us to share information in connection with a legal matter.

All third parties with whom we share data are required to handle it in accordance with applicable data protection laws.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain personal data only for as long as is necessary for the purposes for which it was collected, or as required by law or our professional obligations. Enquiry data submitted through our website is retained for up to 12 months unless it forms the basis of an ongoing matter.`,
  },
  {
    title: "7. Cookies",
    body: `Our website may use cookies and similar technologies to improve your experience and collect usage data. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain parts of our website.`,
  },
  {
    title: "8. Your Rights",
    body: `Subject to applicable law, including the Nigeria Data Protection Act (NDPA) and the Nigeria Data Protection Regulation (NDPR), you may have the right to:

·Access the personal data we hold about you.
·Request correction of inaccurate or incomplete data.
·Request erasure of your data in certain circumstances.
·Object to or restrict our processing of your data.
·Withdraw consent where processing is based on consent.

To exercise any of these rights, please contact us at info@crystalsterl.com. We will respond within the timeframe required by applicable law.`,
  },
  {
    title: "9. Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. The most current version will always be available on our website. Continued use of our website after any update constitutes acceptance of the revised policy.`,
  },
  {
    title: "11. Contact",
    body: `If you have questions, concerns, or requests relating to this Privacy Policy or our data processing practices, please contact:

Crystal Sterl Partners
Email: info@crystalsterl.com
Phone: +234 810 092 2401
Lagos & Abuja, Nigeria`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-[#111217] pt-40 pb-20">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12">
          <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-5">
            <span className="block w-7 h-px bg-[#B89D6C]" />
            Legal
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold leading-[1.1] text-white max-w-2xl">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-[0.85rem] mt-5">Last updated: January 2025</p>
          <span className="block w-14 h-0.5 bg-[#B89D6C] mt-7" />
        </div>
      </section>

      <section className="bg-[#f6f3ee] py-24">
        <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">

          {/* Sticky nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-[0.6rem] font-semibold tracking-[0.24em] uppercase text-[#B89D6C] mb-4">Contents</p>
              <nav className="flex flex-col gap-2.5">
                {sections.map(s => (
                  <a
                    key={s.title}
                    href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[0.78rem] text-[#4a5a6a] hover:text-[#B89D6C] transition-colors duration-300 leading-snug"
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
              This Privacy Policy describes how Crystal Sterl Partners collects, uses, and protects personal information submitted through this website or in connection with our legal services. We are committed to protecting your privacy and handling your information responsibly.
            </p>
            <div className="flex flex-col gap-12">
              {sections.map(s => (
                <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()}>
                  <h2 className="font-serif text-[1.1rem] font-bold text-[#111217] mb-4">{s.title}</h2>
                  <div className="text-[0.9rem] text-[#4a5a6a] leading-[1.9] whitespace-pre-line text-justify">{s.body}</div>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-10 border-t border-[#ede9e2] flex flex-wrap gap-6">
              <Link href="/terms-of-use" className="text-[0.78rem] font-semibold text-[#B89D6C] hover:underline">Terms of Use →</Link>
              <Link href="/disclaimer"   className="text-[0.78rem] font-semibold text-[#B89D6C] hover:underline">Disclaimer →</Link>
              <Link href="/contact"      className="text-[0.78rem] font-semibold text-[#B89D6C] hover:underline">Contact Us →</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
