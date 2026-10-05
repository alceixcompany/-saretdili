import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createSeoMetadata } from '@/lib/seo';
import { getRequestSiteConfig } from '@/lib/server-seo';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getRequestSiteConfig();

  return createSeoMetadata({
    title: `${site.locationName} Tercüme Hizmet Bölgeleri`,
    description: `${site.name} İstanbul'da yeminli tercüme, noter onaylı tercüme ve resmi evrak çevirisi hizmet bölgeleri.`,
    path: '/hizmet-bolgelerimiz',
    image: '/beyvip/hero.png',
    keywords: [`${site.locationName.toLocaleLowerCase('tr-TR')} tercume hizmet bolgeleri`],
    site,
  });
}

export default function ServiceAreasLayout({ children }: { children: ReactNode }) {
  return children;
}
