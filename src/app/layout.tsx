import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";
import {
  graph,
  organizationSchema,
  plannerSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Bespoke luxury honeymoons in Greece, designed island by island by Angeliki — a licensed premium tour guide with more than twenty years' experience.",
  openGraph: {
    siteName: SITE.name,
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: SITE.icon,
    apple: SITE.icon,
  },
};

const SITEWIDE_SCHEMA = graph(
  organizationSchema(),
  plannerSchema(),
  websiteSchema(),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link
          rel="preload"
          href="/fonts/1484Broadsheet.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/4854AddingtonCF-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen pb-14 antialiased md:pb-0">
        <JsonLd data={SITEWIDE_SCHEMA} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
