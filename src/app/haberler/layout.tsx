import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Haberler",
  description: "TİD duyuruları, haberleri ve güncel gelişmeler.",
  alternates: { canonical: "/haberler" },
};
export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
