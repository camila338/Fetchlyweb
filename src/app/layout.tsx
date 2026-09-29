import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/content/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marjorie = localFont({
  variable: "--font-marjorie",
  display: "swap",
  fallback: ["Times New Roman", "Georgia", "serif"],
  src: [
    { path: "../fonts/Marjorie_Regular.woff", weight: "400", style: "normal" },
    { path: "../fonts/Marjorie_SemiBold.woff", weight: "600", style: "normal" },
    { path: "../fonts/Marjorie_ExtraBold.woff", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The Team Behind Best-Selling Brands | Fetchly",
    template: "%s | Fetchly",
  },
  description:
    "Engineering, design, QA and PM on one flat monthly plan. The team behind Casper, Oats Overnight, Lowe's and Winc.",
  openGraph: {
    type: "website",
    siteName: "Fetchly",
    locale: "en_US",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Fetchly" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Fetchly" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${marjorie.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          className="sr-only rounded-md bg-primary px-4 py-2 text-body-sm text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
