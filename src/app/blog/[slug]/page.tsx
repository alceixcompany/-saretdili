import { EditorialDetail } from "@/components/EditorialContent";
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <EditorialDetail kind="blog" slug={slug} />;
}
