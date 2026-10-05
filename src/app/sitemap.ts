import type { MetadataRoute } from 'next'
import { getAllSitemapEntries } from '@/lib/sitemap'
import { getRequestSiteConfig } from '@/lib/server-seo'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getAllSitemapEntries(await getRequestSiteConfig())
}
