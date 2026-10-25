import { createSeoMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
import { domainCopy } from "@/lib/domain-content";
import { EditorialArchive } from "@/components/EditorialContent";
import { getPublishedArticles } from "@/lib/server-content";
export async function generateMetadata() {
  const site = await getRequestSiteConfig();
  return createSeoMetadata({
    title: "Blog",
    description: site.profileId
      ? domainCopy.editorial
      : "İşaret dili, tercümanlık ve erişilebilir iletişim üzerine TİD blog yazıları.",
    path: "/blog",
    site,
  });
}
export default async function BlogPage() {
  return (
    <EditorialArchive
      kind="blog"
      initialArticles={await getPublishedArticles()}
    />
  );
}
