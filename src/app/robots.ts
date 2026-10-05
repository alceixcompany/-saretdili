import { MetadataRoute } from 'next'
import { getRequestSiteConfig } from '@/lib/server-seo'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteConfig = await getRequestSiteConfig()

  return {
    rules: {
      userAgent: '*',
      allow: process.env.NEXT_PUBLIC_SITE_URL ? '/' : undefined,
      disallow: [
        ...(process.env.NEXT_PUBLIC_SITE_URL ? [] : ['/']),
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
