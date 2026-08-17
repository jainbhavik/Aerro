import type { Metadata } from "next";
import { Manrope, Syne, Oxanium } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "AERRO EV",
    "electric vehicles India",
    "electric scooter",
    "electric bike",
    "cargo EV",
    "Made in India EV",
  ],
  authors: [{ name: "AERRO EV" }],
  creator: "AERRO EV",
  icons: {
    icon: [{ url: SITE.favicon, type: "image/jpeg" }],
    shortcut: SITE.favicon,
    apple: [{ url: SITE.favicon, type: "image/jpeg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "AERRO EV — Electrify the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${syne.variable} ${oxanium.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
