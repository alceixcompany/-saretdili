import { NextResponse } from 'next/server'
import { createUrlsetXml, getLandingPageEntries, getStaticPageEntries } from '@/lib/sitemap'
import { getSiteConfigByHost } from '@/lib/domain-seo'

export const revalidate = 3600

export function GET(request: Request) {
  const site = getSiteConfigByHost(request.headers.get('x-forwarded-host') || request.headers.get('host'))

  return new NextResponse(createUrlsetXml([
    ...getStaticPageEntries(site),
    ...getLandingPageEntries(site),
  ]), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
