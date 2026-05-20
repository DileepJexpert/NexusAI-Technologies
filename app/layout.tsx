import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageTracker } from "@/components/shared/PageTracker";
import { Providers } from "@/components/providers";
import { brand } from "@/lib/brand";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || brand.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: brand.metaTitle,
    template: `%s | ${brand.name}`,
  },
  description: brand.metaDescription,
  keywords: [
    "Katixo",
    "umbrella company",
    "venture studio",
    "digital products",
    "AI products",
    "software brands",
    "Indian startup",
  ],
  authors: [{ name: brand.legalName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: brand.name,
    title: brand.metaTitle,
    description: brand.metaDescription,
    images: ["/images/og/default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.metaTitle,
    description: brand.metaDescription,
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <PageTracker />
        </Providers>
      </body>
    </html>
  );
}
