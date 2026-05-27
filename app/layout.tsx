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

export const metadata: Metadata = {
  title: {
    default: "Crystal Sterl Partners | Excellence · Clarity · Precision · Execution",
    template: "%s | Crystal Sterl Partners",
  },
  description:
    "Crystal Sterl Partners is a leading law firm with a distinctly global outlook, delivering corporate, transactional, dispute and full-service legal advisory to businesses, investors, and institutions across Africa and beyond.",
  keywords: ["law firm", "Nigeria", "Lagos", "Abuja", "corporate law", "litigation", "Africa", "legal advisory"],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Crystal Sterl Partners",
  },
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
      </body>
    </html>
  );
}
