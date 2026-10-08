import { EditorialArchive } from "@/components/EditorialContent";
import { getPublishedArticles } from "@/lib/server-content";
export default async function NewsPage() {
  return <EditorialArchive kind="news" initialArticles={await getPublishedArticles()} />;
}
