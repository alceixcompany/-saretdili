import { tidImages } from "@/lib/tid-images";
import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Blog Yazısı",
    description: "TİD blog: işaret dili, tercümanlık ve erişilebilir iletişim.",
    alternates: { canonical: `/blog/${encodeURIComponent(slug)}` },
    openGraph: {
      type: "article",
      url: `/blog/${encodeURIComponent(slug)}`,
      images: [tidImages.socialPreview],
    },
  };
}
export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
