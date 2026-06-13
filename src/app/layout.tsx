import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "property verification India",
    "title verification",
    "registry verification",
    "RERA verification",
    "property fraud protection",
    "land verification Lucknow",
    "encumbrance check",
    "property due diligence",
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  founder: { "@type": "Person", name: site.founder },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  email: site.email,
  areaServed: "IN",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
      </head>
      <body className="flex min-h-full flex-col bg-base text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
