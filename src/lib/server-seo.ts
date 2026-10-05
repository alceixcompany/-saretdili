import { headers } from "next/headers";
import { getSiteConfigByHost } from "@/lib/domain-seo";

export async function getRequestSiteConfig() {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") || headersList.get("host");

  return getSiteConfigByHost(host);
}
