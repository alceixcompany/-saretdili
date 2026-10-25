import { DomainHome } from "@/components/DomainContent";
import JsonLd from "@/components/JsonLd";
import ModernHome from "@/components/ModernHome";
import { websiteJsonLd } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
import { getPublishedArticles } from "@/lib/server-content";

export default async function Home() {
  const [site, articles] = await Promise.all([
    getRequestSiteConfig(),
    getPublishedArticles(),
  ]);

  return (
    <>
      <JsonLd data={websiteJsonLd(site)} />
      {site.profileId ? (
        <DomainHome site={site} initialArticles={articles} />
      ) : (
        <ModernHome initialArticles={articles} />
      )}
    </>
  );
}
