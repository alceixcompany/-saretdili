import { NextResponse } from 'next/server'
import { createUrlsetXml, getNewsEntries } from '@/lib/sitemap'
import { getSiteConfigByHost } from '@/lib/domain-seo'

export const revalidate = 3600

export async function GET(request: Request) {
  const site = getSiteConfigByHost(request.headers.get('x-forwarded-host') || request.headers.get('host'))

  try {
    return new NextResponse(createUrlsetXml(await getNewsEntries(site)), {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (error) {
    console.error('News sitemap oluşturulurken hata:', error)
    return new NextResponse(createUrlsetXml([]), {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  }
}
