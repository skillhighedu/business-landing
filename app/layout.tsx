import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { getSEO } from "@/lib/seo";
import { Instrument_Serif,Bricolage_Grotesque } from "next/font/google";

// ✅ Correct way to load font with subsets
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"], // or "700" if you need bold
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"], // or "700" if you need bold
});


export const metadata: Metadata = getSEO({
  title: "Convert More Customers",
  description: "Grow your SaaS with our high-converting Next.js template.",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* ✅ Apply font class here */}
      <body className={`${instrumentSerif.className} ${bricolageGrotesque.className} antialiased text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
