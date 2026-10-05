import type { Metadata } from "next";
import { defaultSiteConfig, type SiteConfig } from "@/lib/domain-seo";

export const siteConfig = defaultSiteConfig;

export const serviceKeywords = [
  "türk işaret dili",
  "TİD tercümanı",
  "işaret dili tercümanlığı",
  "yeminli tercüman",
  "işaret dili noter",
  "çevrim içi işaret dili tercümanı",
];

type SeoMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  site?: SiteConfig;
};

export function absoluteUrl(path = "/", site: SiteConfig = siteConfig) {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createSeoMetadata({
  title,
  description,
  path = "/",
  image,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  site = siteConfig,
}: SeoMetadataOptions): Metadata {
  const url = absoluteUrl(path, site);
  const imageUrl = absoluteUrl(image || site.defaultImage, site);

  return {
    title,
    description,
    robots: { index: Boolean(process.env.NEXT_PUBLIC_SITE_URL), follow: true },
    keywords: [
      site.name,
      site.shortName,
      ...serviceKeywords,
      ...site.keywords,
      ...keywords,
    ],
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function localBusinessJsonLd(site: SiteConfig = siteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    logo: absoluteUrl(site.logo, site),
    image: absoluteUrl(site.defaultImage, site),
    telephone: site.phone,
    email: site.email,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.areaServed,
    sameAs: site.instagram ? [site.instagram] : undefined,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "19:00",
      },
    ],
  };
}

export function websiteJsonLd(site: SiteConfig = siteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "tr-TR",
    publisher: {
      "@id": `${site.url}/#business`,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
  site: SiteConfig = siteConfig,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, site),
    })),
  };
}
