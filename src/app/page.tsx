import JsonLd from '@/components/JsonLd';
import ModernHome from '@/components/ModernHome';
import { websiteJsonLd } from '@/lib/seo';
import { getRequestSiteConfig } from '@/lib/server-seo';

export default async function Home() {
  const site = await getRequestSiteConfig();

  return (
    <>
      <JsonLd data={websiteJsonLd(site)} />
      <ModernHome />
    </>
  );
}
