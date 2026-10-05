import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createSeoMetadata } from '@/lib/seo';
import { getRequestSiteConfig } from '@/lib/server-seo';
import { getServiceArea } from '@/lib/service-areas';

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const [{ slug }, site] = await Promise.all([params, getRequestSiteConfig()]);
  const title = getServiceArea(slug)?.name || titleFromSlug(slug);

  return createSeoMetadata({
    title: `${title} Yeminli Tercüman`,
    description: `${title} bölgesinde yeminli tercüman, noter onaylı tercüme, pasaport, vize, diploma ve resmi evrak tercümesi hizmetleri.`,
    path: `/hizmet-bolgelerimiz/${slug}`,
    image: '/beyvip/hero.png',
    keywords: [`${title.toLocaleLowerCase('tr-TR')} yeminli tercuman`, `${title.toLocaleLowerCase('tr-TR')} noter onayli tercume`],
    site,
  });
}

export default function ServiceAreaDetailLayout({ children }: Props) {
  return children;
}
