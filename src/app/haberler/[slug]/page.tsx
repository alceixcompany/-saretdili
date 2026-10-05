import { EditorialDetail } from "@/components/EditorialContent";
export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <EditorialDetail kind="news" slug={slug} />;
}
