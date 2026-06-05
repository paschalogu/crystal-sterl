import type { Metadata } from "next";
import { Libre_Baskerville, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const baskerville = Libre_Baskerville({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://www.crystalsterl.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Crystal Sterl Partners | Nigerian Law Firm",
    template: "%s | Crystal Sterl Partners",
  },
  description:
    "Crystal Sterl Partners is a leading Nigerian law firm delivering corporate, transactional, dispute resolution and full-service legal advisory to businesses, investors, and institutions across Africa.",
  keywords: [
    "Crystal Sterl Partners",
    "Nigerian law firm",
    "Lagos law firm",
    "corporate law Nigeria",
    "litigation Nigeria",
    "legal advisory Africa",
    "energy law Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Crystal Sterl Partners",
    url: BASE_URL,
    title: "Crystal Sterl Partners | Nigerian Law Firm",
    description:
      "Crystal Sterl Partners is a leading Nigerian law firm delivering corporate, transactional, dispute resolution and full-service legal advisory to businesses, investors, and institutions across Africa.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Crystal Sterl Partners – Leading Nigerian Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Sterl Partners | Nigerian Law Firm",
    description:
      "Crystal Sterl Partners is a leading Nigerian law firm delivering corporate, transactional, dispute resolution and full-service legal advisory to businesses, investors, and institutions across Africa.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Organization"],
  name: "Crystal Sterl Partners",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpg`,
  description:
    "Crystal Sterl Partners is a leading Nigerian law firm delivering corporate, transactional, dispute resolution, and full-service legal advisory to businesses, investors, and institutions across Africa.",
  telephone: "+2348100922401",
  email: "info@crystalsterl.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  areaServed: ["Nigeria", "Africa"],
  knowsLanguage: "en",
  serviceType: [
    "Corporate Law",
    "Securities Law",
    "Energy Law",
    "Litigation",
    "Arbitration",
    "Intellectual Property Law",
    "Data Protection Law",
    "Tax Law",
    "Real Estate Law",
    "Technology Law",
    "Governance & Compliance",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${baskerville.variable} ${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-white" suppressHydrationWarning>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
