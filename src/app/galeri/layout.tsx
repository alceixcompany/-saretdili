import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createSeoMetadata } from '@/lib/seo';
import { getRequestSiteConfig } from '@/lib/server-seo';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getRequestSiteConfig();

  return createSeoMetadata({
    title: `${site.locationName} Tercüme Galerisi`,
    description: `${site.name} tercüme ofisi çalışma örnekleri, resmi evrak ve belge tercümesi süreçlerinden görseller.`,
    path: '/galeri',
    image: '/beyvip/hero.png',
    keywords: [`${site.locationName.toLocaleLowerCase('tr-TR')} tercume galerisi`],
    site,
  });
}

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
