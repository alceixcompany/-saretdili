import type { Metadata } from "next";
import { EditorialArchive } from "@/components/EditorialContent";
import { getPublishedArticles } from "@/lib/server-content";
export const metadata: Metadata = {
  title: "Blog",
  description:
    "İşaret dili, tercümanlık ve erişilebilir iletişim üzerine TİD blog yazıları.",
  alternates: { canonical: "/blog" },
};
export default async function BlogPage() {
  return <EditorialArchive kind="blog" initialArticles={await getPublishedArticles()} />;
}
