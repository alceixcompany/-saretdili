import { createSeoMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
import { domainCopy } from "@/lib/domain-content";
export async function generateMetadata() {
  const site = await getRequestSiteConfig();
  return createSeoMetadata({
    title: "Haberler",
    description: site.profileId
      ? domainCopy.news
      : "TİD duyuruları, haberleri ve güncel gelişmeler.",
    path: "/haberler",
    site,
  });
}
export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
