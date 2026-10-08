import { tidImages } from "./tid-images";
export type SiteAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  display: string;
};
export type SiteGeo = { latitude: number; longitude: number };
export type SiteConfig = {
  name: string;
  shortName: string;
  domain: string;
  url: string;
  locale: string;
  language: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  address: SiteAddress;
  geo: SiteGeo;
  defaultImage: string;
  logo: string;
  locationName: string;
  title: string;
  titleTemplate: string;
  description: string;
  ogDescription: string;
  keywords: readonly string[];
  areaServed: readonly string[];
};
// Set the confirmed production domain in NEXT_PUBLIC_SITE_URL before publishing.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
export const defaultSiteConfig: SiteConfig = {
  name: "TİD İşaret Dili ve Tercümanlık",
  shortName: "TİD",
  domain: new URL(siteUrl).hostname,
  url: siteUrl,
  locale: "tr_TR",
  language: "tr",
  phone: "99999999",
  phoneDisplay: "99999999",
  whatsapp: "99999999",
  whatsappDisplay: "99999999",
  email: "",
  instagram: "",
  instagramHandle: "",
  address: {
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "TR",
    display: "",
  },
  geo: { latitude: 0, longitude: 0 },
  defaultImage: tidImages.socialPreview,
  logo: "/tid/brand/best-logo.png",
  locationName: "Türkiye",
  title: "TİD | Türk İşaret Dili, Yeminli Tercüman ve Noter",
  titleTemplate: "%s | TİD",
  description:
    "Türk İşaret Dili tercümanlığı, yeminli tercüman ve noter işlemlerinde işaret dili desteği. Erişilebilir iletişim için TİD ile randevu talep edin.",
  ogDescription:
    "Her işaret, bir köprü. Türk İşaret Dili, yeminli tercüman ve noter işlemlerinde yanınızdayız.",
  keywords: [
    "türk işaret dili tercümanı",
    "TİD tercüman",
    "yeminli tercüman",
    "işaret dili noter",
    "işaret dili tercümanlığı",
  ],
  areaServed: ["Türkiye"],
};
export const domainSeoConfigs: Record<string, SiteConfig> = {
  [defaultSiteConfig.domain]: defaultSiteConfig,
};
export function normalizeHost(host?: string | null) {
  return (host || "")
    .split(":")[0]
    .toLowerCase()
    .replace(/^www\./, "");
}
export function getSiteConfigByHost(host?: string | null): SiteConfig {
  return domainSeoConfigs[normalizeHost(host)] || defaultSiteConfig;
}
export function getAllSiteConfigs() {
  return Object.values(domainSeoConfigs);
}
