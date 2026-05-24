import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Supalika Stone Works LLP | Premium Aggregate Solutions | Odisha, India",
  description:
    "Supalika Stone Works LLP delivers premium quality stone aggregates, railway ballast, and infrastructure-grade crushed stone across Eastern India. 250 TPH integrated plant capacity with 30+ years of operational excellence.",
  keywords: [
    "stone aggregates",
    "railway ballast",
    "crushed stone",
    "quarry materials",
    "infrastructure aggregate",
    "Odisha",
    "Eastern India",
    "mining",
    "construction materials",
    "Supalika Stone Works",
  ],
  openGraph: {
    title: "Supalika Stone Works LLP | Building Strong Foundations for India",
    description:
      "Premium aggregate solutions for infrastructure, railway, and construction projects across Eastern India.",
    url: "https://supalikastone.com",
    siteName: "Supalika Stone Works LLP",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supalika Stone Works LLP",
    description:
      "Premium aggregate solutions for infrastructure, railway, and construction projects across Eastern India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-inter bg-navy-800 text-white antialiased overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
