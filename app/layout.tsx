import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SweetRain } from "@/components/SweetRain";

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Five Slices Cheesecake Co. | Handcrafted Cambodian Cheesecake",
  description: "Five Slices Cheesecake Co. is Cambodia's premier artisanal cheesecake boutique crafting luxury whole cakes, mini cheesecakes, and signature Khmer Palm Sugar creations.",
  keywords: ["Five Slices Cheesecake", "Cambodia Cheesecake", "Khmer Palm Sugar Cheesecake", "Phnom Penh Bakery", "Siem Reap Dessert", "Sihanoukville Cheesecake"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fff8fa] text-slate-800 selection:bg-pink-200 selection:text-pink-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <SweetRain />
        <Footer />
      </body>
    </html>
  );
}
