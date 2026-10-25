import { MetadataRoute } from 'next'
import { getRequestSiteConfig } from '@/lib/server-seo'

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteConfig = await getRequestSiteConfig()

  return {
    rules: {
      userAgent: '*',
      allow: siteConfig.domain !== 'localhost' ? '/' : undefined,
      disallow: [
        ...(siteConfig.domain !== 'localhost' ? [] : ['/']),
        '/admin/',
        '/api/',
      ],
    },
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/page-sitemap.xml`,
      `${siteConfig.url}/service-sitemap.xml`,
      `${siteConfig.url}/news-sitemap.xml`,
      `${siteConfig.url}/service-area-sitemap.xml`,
    ],
    host: siteConfig.url,
  }
}
