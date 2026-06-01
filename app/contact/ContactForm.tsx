"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { firm } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

// Initialize EmailJS (do this once)
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
      );
      setSent(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    }
  }

  return (
    <section className="bg-[#f6f3ee] py-24">
      <div className="max-w-[1260px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16">

        {/* ── Form ──────────────────────────────────────────────────── */}
        <Reveal direction="left">
          {sent ? (
            <div className="bg-[#111217] p-14 flex flex-col items-start justify-center min-h-[480px]">
              <div className="w-12 h-12 bg-[#B89D6C] flex items-center justify-center mb-7">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5L18 6" stroke="#111217" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-serif text-[1.6rem] font-bold text-white mb-4">Message Received</h2>
              <p className="text-white/50 text-[0.9rem] leading-[1.85] max-w-sm mb-8 text-justify">
                Thank you for reaching out. A member of our team will respond to your enquiry within one business day.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-[#B89D6C] border border-[#B89D6C]/40 px-6 py-3 hover:bg-[#B89D6C] hover:text-[#111217] transition-colors duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="font-serif text-[1.4rem] font-bold text-[#111217] mb-2">Send an Enquiry</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Full Name *" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="e.g. Adaobi Okonkwo" />
                <FormField label="Company / Organisation" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" />
                <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+234 000 000 0000" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#111217]">Subject *</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="bg-white border border-[#ede9e2] text-[0.87rem] text-[#111217] px-4 py-3.5 focus:outline-none focus:border-[#B89D6C] transition-colors duration-300"
                >
                  <option value="">Select a practice area</option>
                  <option>Corporate Securities, Finance & Funds</option>
                  <option>Energy, Oil and Gas & Natural Resources</option>
                  <option>Corporate Governance & Regulatory Compliance</option>
                  <option>Intellectual Property, Data Protection & Privacy</option>
                  <option>Litigation, Arbitration & ADR</option>
                  <option>Tax, Real Estate, Privatisation & Procurement</option>
                  <option>Technology, Media & Telecommunication</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#111217]">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please describe your legal needs..."
                  className="bg-white border border-[#ede9e2] text-[0.87rem] text-[#111217] px-4 py-3.5 resize-none focus:outline-none focus:border-[#B89D6C] transition-colors duration-300 leading-[1.7]"
                />
              </div>
              <p className="text-[0.72rem] text-[#4a5a6a] leading-[1.7] text-justify">
                By submitting this form, you agree that your information will be used to respond to your enquiry. We do not share your details with third parties.
              </p>
              <button
                type="submit"
                className="self-start text-[0.73rem] font-bold tracking-[0.14em] uppercase text-[#111217] bg-[#B89D6C] hover:bg-[#7B633A] px-8 py-4 transition-colors duration-300 mt-2"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </Reveal>

        {/* ── Sidebar ───────────────────────────────────────────────── */}
        <Reveal direction="right">
          <div className="flex flex-col gap-1">

            {/* Direct contact */}
            <div className="bg-[#111217] p-10">
              <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[#B89D6C] mb-7">Direct Contact</h3>
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 3h3l1.5 3.75-2 1.5C6.5 10.5 7.5 11.5 9.75 12.5l1.5-2L15 12v3c-6 0-12-6-12-12z" stroke="#B89D6C" strokeWidth="1.3" strokeLinejoin="round" />
                      </svg>
                    ),
                    label: "Telephone",
                    value: firm.phone,
                    href: `tel:${firm.phone.replace(/\s/g, "")}`,
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#B89D6C" strokeWidth="1.3" />
                        <path d="M2 6l7 5 7-5" stroke="#B89D6C" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    ),
                    label: "Email",
                    value: firm.email,
                    href: `mailto:${firm.email}`,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 border border-white/10 flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-white/30 mb-0.5">{label}</p>
                      <a href={href} className="text-[0.87rem] text-white/75 hover:text-[#B89D6C] transition-colors duration-300">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offices */}
            {[
              { city: "Lagos",  label: "Head Office",   address: ["Lagos, Nigeria"] },
              { city: "Abuja",  label: "Second Office",  address: ["Abuja, Nigeria"] },
            ].map(office => (
              <div key={office.city} className="bg-white border border-[#ede9e2] p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-serif font-bold text-[#111217] text-[1.05rem]">{office.city}</h4>
                    <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#B89D6C] mt-0.5">{office.label}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2C5.791 2 4 3.791 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.209-1.791-4-4-4z" stroke="#B89D6C" strokeWidth="1.3" />
                    <circle cx="8" cy="6" r="1.5" stroke="#B89D6C" strokeWidth="1.3" />
                  </svg>
                </div>
                {office.address.map(line => (
                  <p key={line} className="text-[0.84rem] text-[#4a5a6a]">{line}</p>
                ))}
              </div>
            ))}

            {/* Business hours */}
            <div className="bg-[#f6f3ee] border border-[#ede9e2] p-8">
              <h4 className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-[#B89D6C] mb-5">Business Hours</h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
                  { day: "Saturday",        hours: "By appointment" },
                  { day: "Sunday",          hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-[0.82rem]">
                    <span className="text-[#111217]">{day}</span>
                    <span className="text-[#4a5a6a]">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

function FormField({
  label, name, type, value, onChange, required, placeholder,
}: {
  label: string; name: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#111217]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-white border border-[#ede9e2] text-[0.87rem] text-[#111217] px-4 py-3.5 focus:outline-none focus:border-[#B89D6C] transition-colors duration-300 placeholder:text-[#b0b8c4]"
      />
    </div>
  );
}
