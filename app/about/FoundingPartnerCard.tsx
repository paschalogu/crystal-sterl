"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { foundingPartner } from "@/lib/content";

export default function FoundingPartnerCard() {
  const [open, setOpen] = useState(false);

  return (
    <article className="mb-14 bg-white border border-[#ede9e2]">
      <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr]">
        {/* Photo — always visible */}
        <div className="relative flex items-center justify-center p-8 sm:p-10 lg:p-10">
          <figure className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-4 -left-4 hidden h-full w-full border border-[#B89D6C] sm:block"
            />
            <div className="relative aspect-[1045/1080] w-[280px] sm:w-[340px] lg:w-[380px] overflow-hidden bg-[#111217] shadow-[0_25px_60px_-25px_rgba(17,18,23,0.45)]">
              <Image
                src={foundingPartner.image}
                alt={foundingPartner.imageAlt}
                fill
                sizes="(max-width: 1024px) 80vw, 380px"
                className="object-cover object-center"
                priority
              />
            </div>
          </figure>
        </div>

        {/* Content */}
        <div className="p-8 md:p-11 flex flex-col lg:justify-center">
          {/* Always-visible header */}
          <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold text-[#111217] leading-[1.1] mb-2">
            <span className="whitespace-nowrap">{foundingPartner.name}</span>
          </h3>
          <div className="text-[0.95rem] font-bold tracking-[0.02em] text-[#B89D6C] mb-3">
            {foundingPartner.role}
          </div>
          <p className="text-[#4a5a6a] text-[0.95rem] font-medium mb-2">
            {foundingPartner.headline}
          </p>
          <a
            href={`mailto:${foundingPartner.email}`}
            className="inline-block self-start text-[0.8rem] font-medium text-[#B89D6C] hover:text-[#111217] transition-colors duration-200"
          >
            {foundingPartner.email}
          </a>

          {/* Always-visible actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.14em] uppercase border border-[#111217]/20 text-[#111217] hover:bg-[#111217] hover:text-white px-6 py-3 transition-colors duration-300"
            >
              {open ? "Hide Profile" : "View Profile"}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <a
              href={`mailto:${foundingPartner.email}`}
              className="inline-flex items-center text-[0.7rem] font-bold tracking-[0.14em] uppercase bg-[#111217] text-white hover:bg-[#1B1E26] px-6 py-3 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Collapsible profile */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="profile"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <span className="block w-12 h-0.5 bg-[#B89D6C] mt-8 mb-6" />
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

                <div className="mt-8 pb-1 flex flex-wrap gap-1.5">
                  {foundingPartner.practices.map((p) => (
                    <span key={p} className="text-[0.58rem] font-medium tracking-[0.06em] text-[#111217]/60 border border-[#111217]/15 px-2 py-0.5">{p}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}
