import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/components/SiteTheme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set only after the deployment origin has been confirmed.
const siteOrigin = process.env.PILOT_ASTRA_SITE_URL
  ? new URL(process.env.PILOT_ASTRA_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: "Pilot Astra AI — Connected Growth Systems for Business",
  description: "Connect your website, WhatsApp, CRM, AI SDR outreach, content and SEO/GEO into one practical AI growth system for industrial, retail, ecommerce and B2B businesses.",
  openGraph: {
    title: "Pilot Astra AI — Connected Growth Systems",
    description: "AI websites, WhatsApp automation, outreach and content. One connected growth system built around your business.",
    type: "website",
    siteName: "Pilot Astra AI",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head><script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.siteTheme=localStorage.getItem("pilot-astra-theme")==="light"?"light":"dark"}catch{document.documentElement.dataset.siteTheme="dark"}` }} /></head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
