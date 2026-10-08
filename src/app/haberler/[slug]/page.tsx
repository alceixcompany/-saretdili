import { EditorialDetail } from "@/components/EditorialContent";
import { getPublishedArticles } from "@/lib/server-content";
export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <EditorialDetail kind="news" slug={slug} initialArticles={await getPublishedArticles()} />;
}
