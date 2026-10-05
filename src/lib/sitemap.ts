import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { articlePath, normalizeArticle } from "@/lib/editorial";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import type { SiteConfig } from "@/lib/domain-seo";
import { tidServices } from "@/lib/tid";
export type SitemapEntry = MetadataRoute.Sitemap[number];
export function getStaticPageEntries(
  site: SiteConfig = siteConfig,
): MetadataRoute.Sitemap {
  return [
    "/",
    "/hakkimizda",
    "/hizmetlerimiz",
    "/iletisim",
    "/haberler",
    "/blog",
  ].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
export const staticPageEntries = getStaticPageEntries();
export function getServiceEntries(
  site: SiteConfig = siteConfig,
): MetadataRoute.Sitemap {
  return tidServices.map((service) => ({
    url: `${site.url}/hizmetlerimiz/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}
export const serviceEntries = getServiceEntries();
// Keep historical language/area XML routes compatible; published content has its own entries.
export function getLandingPageEntries(
  _site: SiteConfig = siteConfig,
): MetadataRoute.Sitemap {
  void _site;
  return [];
}
export function getLanguageEntries(
  _site: SiteConfig = siteConfig,
): MetadataRoute.Sitemap {
  void _site;
  return [];
}
export async function getNewsEntries(
  site: SiteConfig = siteConfig,
): Promise<MetadataRoute.Sitemap> {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    const result = await Promise.race([
      getDocs(query(collection(db, "haberler"), where("isActive", "==", true))),
      new Promise<never>((_, reject) => {
        timeout = setTimeout(
          () => reject(new Error("Content read timeout")),
          5000,
        );
      }),
    ]);
    return result.docs
      .map((entry) => normalizeArticle(entry.id, entry.data()))
      .filter((article) => article.isActive)
      .map((article) => ({
        url: `${site.url}${articlePath(article)}`,
        ...(article.createdAt ? { lastModified: article.createdAt } : {}),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}
export async function getServiceAreaEntries(
  _site: SiteConfig = siteConfig,
): Promise<MetadataRoute.Sitemap> {
  void _site;
  return [];
}
export async function getAllSitemapEntries(
  site: SiteConfig = siteConfig,
): Promise<MetadataRoute.Sitemap> {
  return [
    ...getStaticPageEntries(site),
    ...getServiceEntries(site),
    ...(await getNewsEntries(site)),
  ];
}
function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
export function createUrlsetXml(entries: MetadataRoute.Sitemap): string {
  const urls = entries
    .map((entry) =>
      [
        "<url>",
        `<loc>${escapeXml(entry.url)}</loc>`,
        entry.lastModified
          ? `<lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>`
          : "",
        entry.changeFrequency
          ? `<changefreq>${entry.changeFrequency}</changefreq>`
          : "",
        typeof entry.priority === "number"
          ? `<priority>${entry.priority}</priority>`
          : "",
        "</url>",
      ]
        .filter(Boolean)
        .join(""),
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}
