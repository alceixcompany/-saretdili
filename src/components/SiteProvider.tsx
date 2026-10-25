"use client";
import { createContext, useContext, type ReactNode } from "react";
import { defaultSiteConfig, type SiteConfig } from "@/lib/domain-seo";
const SiteContext = createContext<SiteConfig>(defaultSiteConfig);
export function SiteProvider({
  site,
  children,
}: {
  site: SiteConfig;
  children: ReactNode;
}) {
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>;
}
export function useSiteConfig() {
  return useContext(SiteContext);
}
