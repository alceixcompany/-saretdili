import { cookies } from "next/headers";
import { LanguageProvider } from "@/components/LanguageProvider";
import { isLocale, localeMeta } from "@/lib/tid-i18n";
import type { Metadata } from "next";
import { DM_Sans, Marcellus, Dancing_Script } from "next/font/google";
import "./globals.css";
import "./tid.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";
import { absoluteUrl, serviceKeywords } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
});

const marcellus = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-marcellus",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dancing",
});

export async function generateMetadata(): Promise<Metadata> {
  const activeSite = await getRequestSiteConfig();

  return {
    metadataBase: new URL(activeSite.url),
    title: {
      default: activeSite.title,
      template: activeSite.titleTemplate,
    },
    description: activeSite.description,
    keywords: [
      activeSite.name,
      activeSite.shortName,
      ...serviceKeywords,
      ...activeSite.keywords,
    ],
    authors: [{ name: activeSite.name }],
    creator: activeSite.name,
    publisher: activeSite.name,
    robots: {
      index: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
      follow: true,
      googleBot: {
        index: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: activeSite.url,
      languages: {
        "tr-TR": activeSite.url,
      },
    },
    category: "translation",
    classification: "Business",
    other: activeSite.address.streetAddress
      ? {
          "geo.region": "TR-34",
          "geo.placename": `${activeSite.locationName}, İstanbul, Türkiye`,
          "geo.position": `${activeSite.geo.latitude};${activeSite.geo.longitude}`,
          ICBM: `${activeSite.geo.latitude}, ${activeSite.geo.longitude}`,
        }
      : undefined,
    icons: {
      icon: [
        { url: "/tid/brand/best-icon.png", type: "image/png", sizes: "64x64" },
        { url: "/tid/brand/best-app-icon.png", type: "image/png", sizes: "192x192" },
      ],
      shortcut: "/tid/brand/best-icon.png",
      apple: [{ url: "/tid/brand/best-apple-icon.png", type: "image/png", sizes: "180x180" }],
    },
    openGraph: {
      title: activeSite.title,
      description: activeSite.ogDescription,
      type: "website",
      locale: activeSite.locale,
      siteName: activeSite.name,
      url: activeSite.url,
      images: [
        {
          url: absoluteUrl(activeSite.defaultImage, activeSite),
          width: 1200,
          height: 630,
          alt: activeSite.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: activeSite.name,
      description: activeSite.ogDescription,
      images: [absoluteUrl(activeSite.defaultImage, activeSite)],
    },
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const saved = (await cookies()).get("tid-locale")?.value;
  const locale = isLocale(saved) ? saved : "tr";
  return (
    <html lang={locale} dir={localeMeta[locale].dir}>
      <body
        className={`${dmSans.variable} ${marcellus.variable} ${dancingScript.variable} font-sans`}
      >
        <ReduxProvider>
          <LanguageProvider initialLocale={locale}>
            <RootLayoutContent>{children}</RootLayoutContent>
          </LanguageProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
