import { createSeoMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
import { domainCopy } from "@/lib/domain-content";
import { tidImages } from "@/lib/tid-images";
import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const site = await getRequestSiteConfig();
  return createSeoMetadata({
    title: "Blog Yazısı",
    description: site.profileId
      ? domainCopy.editorial
      : "TİD blog: işaret dili, tercümanlık ve erişilebilir iletişim.",
    path: `/blog/${encodeURIComponent(slug)}`,
    image: tidImages.socialPreview,
    type: "article",
    site,
  });
}
export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
