import { tidImages } from "./tid-images";
import {
  domainProfiles,
  getDomainProfile,
  type DomainProfileId,
} from "./domain-content";
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
  profileId?: DomainProfileId;
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
// The primary site and every registered domain have explicit, trusted origins.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://isaretdili.vercel.app"
).replace(/\/$/, "");
export const defaultSiteConfig: SiteConfig = {
  name: "TİD İşaret Dili ve Tercümanlık",
  shortName: "TİD",
  domain: new URL(siteUrl).hostname,
  url: siteUrl,
  locale: "tr_TR",
  language: "tr",
  phone: "+905346420476",
  phoneDisplay: "0534 642 04 76",
  whatsapp: "+905451892665",
  whatsappDisplay: "0545 189 26 65",
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
export function normalizeHost(host?: string | null) {
  return (host || "")
    .split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase()
    .replace(/^www\./, "");
}
export const domainSeoConfigs: Record<string, SiteConfig> = {
  [normalizeHost(defaultSiteConfig.domain)]: defaultSiteConfig,
  "isaretdili.vercel.app": defaultSiteConfig,
  ...Object.fromEntries(
    Object.entries(domainProfiles).map(([id, profile]) => {
      const content = getDomainProfile(id as DomainProfileId)!;
      return [
        profile.host,
        {
          ...defaultSiteConfig,
          profileId: id as DomainProfileId,
          name: `Best Tercümanlık | ${content.title}`,
          shortName: "Best Tercümanlık",
          domain: profile.host,
          url: profile.url,
          title: `${content.title} | Best Tercümanlık`,
          titleTemplate: "%s | Best Tercümanlık",
          description: content.description,
          ogDescription: content.description,
          keywords: [
            content.title.toLocaleLowerCase("tr-TR"),
            "belge tercümesi",
            "tercüme hizmetleri",
          ],
        } satisfies SiteConfig,
      ];
    }),
  ),
};
export function getSiteConfigByHost(host?: string | null): SiteConfig {
  const key = normalizeHost(host);
  return Object.prototype.hasOwnProperty.call(domainSeoConfigs, key)
    ? domainSeoConfigs[key]
    : defaultSiteConfig;
}
export function getAllSiteConfigs() {
  return [
    ...new Map(
      Object.values(domainSeoConfigs).map((site) => [site.url, site]),
    ).values(),
  ];
}
