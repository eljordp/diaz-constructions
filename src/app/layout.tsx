import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Diaz Construction | Licensed General Contractor | Redwood City & Bay Area",
  description:
    "Licensed, bonded & insured general contractor serving Redwood City, Hayward & the Bay Area. Kitchen & bathroom remodels, ADUs, additions, new builds. CSLB #989528. Call (650) 454-9122.",
  keywords: [
    "general contractor Redwood City",
    "general contractor Hayward",
    "ADU builder Bay Area",
    "kitchen remodel Redwood City",
    "bathroom remodel Bay Area",
    "home additions Hayward",
    "licensed contractor Bay Area",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Diaz Construction | Licensed General Contractor | Bay Area",
    description: "Licensed, bonded & insured general contractor serving Redwood City, Hayward & the Bay Area. CSLB #989528.",
    images: ["/og-image.webp"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans bg-white text-navy-950`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
