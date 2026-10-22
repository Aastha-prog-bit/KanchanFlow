import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "KanchanFlow | CRM for Manufacturers",
    template: "%s | KanchanFlow",
  },
  description:
    "KanchanFlow is a CRM built for manufacturers: quotes, work orders and your shop-floor sales pipeline in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}