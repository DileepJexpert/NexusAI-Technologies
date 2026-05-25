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
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  "NuHUrL1W9FwnppFLfuPIiDEOtWhJJsunS0D5FBUv3sc";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: brand.metaTitle,
    template: `%s | ${brand.name}`,
  },
  description: brand.metaDescription,
  keywords: [
    "Katixo",
    "AI finance ERP India",
    "accounting software India",
    "GST accounting software",
    "bank reconciliation software",
    "finance dashboard",
    "business accounting automation",
    "AI accounting workspace",
  ],
  authors: [{ name: brand.legalName }],
  alternates: {
    canonical: siteUrl,
  },
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
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: brand.name,
                  legalName: brand.legalName,
                  url: siteUrl,
                  logo: `${siteUrl}/images/logo.svg`,
                  email: brand.supportEmail,
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "sales",
                      email: brand.supportEmail,
                      areaServed: "IN",
                      availableLanguage: ["en", "hi"],
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: brand.name,
                  description: brand.metaDescription,
                  publisher: { "@id": `${siteUrl}/#organization` },
                  inLanguage: "en-IN",
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": `${siteUrl}/#software`,
                  name: brand.name,
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  url: siteUrl,
                  description: brand.metaDescription,
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/PreOrder",
                    priceCurrency: "INR",
                  },
                  publisher: { "@id": `${siteUrl}/#organization` },
                },
              ],
            }),
          }}
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
          <PageTracker />
        </Providers>
      </body>
    </html>
  );
}
