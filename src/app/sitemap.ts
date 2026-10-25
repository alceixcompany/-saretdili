import type { MetadataRoute } from 'next'
import { getAllSitemapEntries } from '@/lib/sitemap'
import { getRequestSiteConfig } from '@/lib/server-seo'

export const dynamic = "force-dynamic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getAllSitemapEntries(await getRequestSiteConfig())
}
