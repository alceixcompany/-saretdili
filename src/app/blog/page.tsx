import type { Metadata } from "next";
import { EditorialArchive } from "@/components/EditorialContent";
export const metadata: Metadata = {
  title: "Blog",
  description:
    "İşaret dili, tercümanlık ve erişilebilir iletişim üzerine TİD blog yazıları.",
  alternates: { canonical: "/blog" },
};
export default function BlogPage() {
  return <EditorialArchive kind="blog" />;
}
