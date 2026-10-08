import { EditorialDetail } from "@/components/EditorialContent";
import { getPublishedArticles } from "@/lib/server-content";
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <EditorialDetail kind="blog" slug={slug} initialArticles={await getPublishedArticles()} />;
}
