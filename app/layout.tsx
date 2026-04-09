import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Providers } from "@/components/providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexusai.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NexusAI Technologies — AI-Powered Tools for Every Indian",
    template: "%s | NexusAI Technologies",
  },
  description:
    "NexusAI builds WhatsApp AI assistants that help Indians navigate government schemes, finance, legal and daily challenges — in their own language.",
  keywords: [
    "AI for India",
    "Indian AI startup",
    "WhatsApp AI assistant",
    "government scheme finder",
    "mandi prices",
    "KisanMitra",
    "NiyamMitra",
  ],
  authors: [{ name: "NexusAI Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "NexusAI Technologies",
    title: "NexusAI Technologies — AI-Powered Tools for Every Indian",
    description:
      "WhatsApp AI assistants for Indian farmers, MSMEs, students and citizens — in 10+ Indian languages.",
    images: ["/images/og/default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI Technologies — AI-Powered Tools for Every Indian",
    description:
      "WhatsApp AI assistants for Indian farmers, MSMEs, students and citizens.",
    images: ["/images/og/default.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
