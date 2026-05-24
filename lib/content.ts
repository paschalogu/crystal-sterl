// ─── Crystal Sterl Partners — Content Library ───────────────────────────────
// Structured as Sanity-ready schemas. When integrating Sanity, replace each
// exported constant with a GROQ query: `client.fetch(groq`*[_type=="..."]`)`.

export const firm = {
  name: "Crystal Sterl Partners",
  shortName: "Crystal Sterl",
  tagline: "Excellence · Clarity · Precision",
  description:
    "Crystal Sterl Partners is a leading law firm with a distinctly global outlook, delivering corporate, transactional, dispute and full-service legal advisory to businesses, investors, and institutions.",
  phone: "+234 806 331 4898",
  email: "info@crystalsterl.com",
  offices: ["Lagos", "Abuja"],
  founded: "Established in Nigeria",
};

export const philosophy = [
  {
    number: "01",
    name: "Excellence",
    description:
      "At Crystal Sterl, excellence is not an aspiration, it is our operating standard. Every mandate receives our highest commitment to quality and rigour.",
  },
  {
    number: "02",
    name: "Precision",
    description:
      "We deliver accurate, detail-driven advisory aligned with top-tier standards. Every clause, every structure handled with meticulous precision.",
  },
  {
    number: "03",
    name: "Clarity",
    description:
      "We simplify complex legal issues into structured, actionable advice, empowering confident, informed decision-making at every level.",
  },
  {
    number: "04",
    name: "Execution",
    description:
      "We focus on outcomes: closing transactions, resolving disputes, and delivering results. We structure and execute deals, not just advise on them.",
  },
];

export const differentiators = [
  {
    number: "01",
    title: "Transaction-Driven Approach",
    headline: "We Execute, Not Just Advise",
    description:
      "We structure and execute deals with commercial acumen and legal precision. Our lawyers engage deeply in transaction management and drive every engagement to a successful close.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Commercial Insight",
    headline: "Business Context Behind Every Issue",
    description:
      "Our advice is commercially grounded. We understand what drives business decisions and provide counsel designed to create value, not just manage legal risk.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Responsive Delivery",
    headline: "Speed, Precision & Discipline",
    description:
      "We operate with discipline aligned to client timelines. In fast-moving transactions, our responsiveness is a decisive competitive advantage for our clients.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop",
  },
];

export const practiceAreas = [
  {
    slug: "corporate-securities-finance-funds",
    number: "01",
    title: "Corporate Securities, Finance & Funds Structuring",
    shortTitle: "Corporate Securities & Finance",
    description:
      "We advise on equity and debt capital markets transactions, structured finance, fund formation, and securities regulation across African and international markets. Our team brings deep expertise in complex financial instruments and cross-border capital raising.",
    services: [
      "Equity & Debt Capital Markets",
      "Fund Formation & Structuring",
      "Structured Finance & Securitisation",
      "Securities Regulation & Compliance",
      "Private Equity & Venture Capital",
      "Mergers & Acquisitions",
    ],
  },
  {
    slug: "energy-oil-gas-natural-resources",
    number: "02",
    title: "Energy, Oil and Gas and Natural Resources",
    shortTitle: "Energy & Natural Resources",
    description:
      "Our energy practice covers the full lifecycle of oil and gas projects, power generation, renewable energy, and mining. We advise developers, investors, financiers, and governments on upstream, midstream, and downstream transactions.",
    services: [
      "Upstream Licensing & Exploration",
      "Project Finance & Development",
      "Renewable Energy Transactions",
      "Power Purchase Agreements",
      "Mining & Minerals Regulation",
      "Energy Regulatory Compliance",
    ],
  },
  {
    slug: "corporate-governance-regulatory-compliance",
    number: "03",
    title: "Corporate Governance and Regulatory Compliance",
    shortTitle: "Governance & Compliance",
    description:
      "We help businesses build robust governance frameworks and navigate the complex regulatory landscape across African jurisdictions. Our counsel supports boards, management, and investors in maintaining the highest standards of compliance.",
    services: [
      "Board Advisory & Governance Frameworks",
      "Regulatory Investigations & Enforcement",
      "Anti-Corruption & Compliance",
      "Company Secretarial Services",
      "Banking & Financial Regulation",
      "Competition Law & Antitrust",
    ],
  },
  {
    slug: "intellectual-property-data-protection",
    number: "04",
    title: "Intellectual Property, Data Protection & Privacy",
    shortTitle: "IP, Data & Privacy",
    description:
      "We protect our clients' most valuable assets: their intellectual property and data. From trademark registration and patent strategy to NDPR/GDPR compliance and data breach response, we provide comprehensive IP and privacy counsel.",
    services: [
      "Trademark Registration & Protection",
      "Copyright & Licensing",
      "Data Protection & NDPR Compliance",
      "Privacy Policy & GDPR Advisory",
      "Technology Licensing Agreements",
      "IP Portfolio Management",
    ],
  },
  {
    slug: "litigation-arbitration-adr",
    number: "05",
    title: "Litigation, Arbitration and ADR",
    shortTitle: "Litigation & Arbitration",
    description:
      "Our disputes practice combines courtroom excellence with strategic alternative dispute resolution. We represent clients in complex commercial litigation, international arbitration, and sophisticated mediation proceedings.",
    services: [
      "Commercial Litigation",
      "International Arbitration (ICC, LCIA, ICSID)",
      "Investment Treaty Disputes",
      "Mediation & Conciliation",
      "Enforcement of Foreign Judgments",
      "Insolvency & Restructuring Disputes",
    ],
  },
  {
    slug: "tax-real-estate-privatisation-procurement",
    number: "06",
    title: "Tax, Real Estate, Privatisation and Public Procurement",
    shortTitle: "Tax & Real Estate",
    description:
      "We advise on the full spectrum of tax planning, real estate transactions, privatisation programmes, and public procurement processes. Our team combines technical expertise with practical commercial insight.",
    services: [
      "Corporate Tax Planning & Advisory",
      "Transfer Pricing",
      "Real Estate Transactions & Due Diligence",
      "Privatisation & PPP Advisory",
      "Public Procurement & Contracting",
      "Tax Disputes & Litigation",
    ],
  },
  {
    slug: "technology-media-telecommunication",
    number: "07",
    title: "Technology, Media and Telecommunication",
    shortTitle: "Technology, Media & Telecoms",
    description:
      "We advise technology companies, telecom operators, media businesses, and digital platforms on the complex legal issues at the intersection of law and technology, from regulatory licensing to emerging AI governance.",
    services: [
      "Telecom Licensing & Regulation",
      "Technology Transactions & SaaS",
      "Media & Broadcasting Law",
      "Fintech & Digital Banking",
      "Artificial Intelligence Governance",
      "E-Commerce & Digital Commerce",
    ],
  },
];

export const sectors = [
  {
    id: "financial-services",
    name: "Financial Services, Alternative Investment & Fund Formation",
    shortName: "Financial Services",
    description: "Banks, investment managers, alternative investment funds, and financial institutions.",
  },
  {
    id: "energy-infrastructure",
    name: "Energy, Infrastructure & Natural Resources",
    shortName: "Energy & Infrastructure",
    description: "Oil & gas companies, power developers, infrastructure funds, and utilities.",
  },
  {
    id: "insurance-pensions",
    name: "Insurance, Pensions & Asset Management",
    shortName: "Insurance & Pensions",
    description: "Insurers, reinsurers, pension fund administrators, and asset managers.",
  },
  {
    id: "technology-ai",
    name: "Technology, Telecommunications & Artificial Intelligence",
    shortName: "Technology & AI",
    description: "Technology companies, telecom operators, startups, and AI-driven businesses.",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Science",
    shortName: "Healthcare",
    description: "Hospitals, pharmaceutical companies, medical device manufacturers, and health systems.",
  },
  {
    id: "real-estate",
    name: "Real Estate, Manufacturing & Construction",
    shortName: "Real Estate",
    description: "Developers, REITs, contractors, manufacturers, and construction companies.",
  },
  {
    id: "consumer-retail",
    name: "Consumer & Retail",
    shortName: "Consumer & Retail",
    description: "Consumer goods companies, retail chains, FMCG businesses, and franchises.",
  },
  {
    id: "agriculture",
    name: "Agriculture & Commodities",
    shortName: "Agriculture",
    description: "Agribusinesses, commodity traders, export companies, and food processing groups.",
  },
  {
    id: "transportation",
    name: "Transportation & Mobility",
    shortName: "Transportation",
    description: "Airlines, logistics providers, maritime companies, and mobility platforms.",
  },
  {
    id: "sport-entertainment",
    name: "Sport & Entertainment",
    shortName: "Sport & Entertainment",
    description: "Sports clubs, athletes, entertainment companies, and media rights holders.",
  },
  {
    id: "public-sector",
    name: "Public Sector & Development Finance",
    shortName: "Public Sector",
    description: "Governments, development finance institutions, NGOs, and multilateral organisations.",
  },
];

export const stats = [
  { number: "11+", label: "Key Sectors Served" },
  { number: "7",   label: "Core Practice Areas" },
  { number: "2",   label: "Offices in Nigeria" },
  { number: "Pan-Africa", label: "Cross-Border Reach" },
];

export const esgPillars = [
  {
    letter: "E",
    title: "Environmental",
    description:
      "We advise clients on environmental compliance, climate risk governance, sustainability-linked financing, and green transaction structures that align with international standards including the UN SDGs and Paris Agreement commitments.",
    commitments: [
      "Environmental due diligence in transactions",
      "Sustainability-linked finance advisory",
      "Climate risk governance frameworks",
      "Green bond and carbon market counsel",
    ],
  },
  {
    letter: "S",
    title: "Social",
    description:
      "We support responsible business practices across our client base, advising on stakeholder engagement, labour standards, community impact assessments, and human rights due diligence in accordance with the UN Guiding Principles.",
    commitments: [
      "Human rights due diligence",
      "Community development agreements",
      "Labour law and employment standards",
      "Diversity, equity and inclusion frameworks",
    ],
  },
  {
    letter: "G",
    title: "Governance",
    description:
      "We embed strong governance frameworks into every corporate advisory engagement, structuring board accountability, anti-corruption protocols, regulatory compliance systems, and transparent reporting mechanisms for our clients.",
    commitments: [
      "Board governance and accountability",
      "Anti-bribery and corruption compliance",
      "Regulatory reporting frameworks",
      "Whistleblower and ethics policies",
    ],
  },
];
