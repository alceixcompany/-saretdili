import { domainCopy } from "@/lib/domain-content";
import type { ReactNode } from "react";
import { createSeoMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
export async function generateMetadata() {
  const site = await getRequestSiteConfig();
  return createSeoMetadata({
    title: site.profileId
      ? domainCopy.contactHeading
      : "İletişim ve Tercüman Talebi",
    description: site.profileId
      ? domainCopy.contactIntro
      : "Türk İşaret Dili, yeminli tercüman ve noter işlemleri için TİD’ye yazın. Görüşme koşullarını paylaşın ve randevu talebi oluşturun.",
    path: "/iletisim",
    site,
  });
}
export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
