import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-navy-950`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
