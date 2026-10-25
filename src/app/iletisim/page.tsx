import { getRequestSiteConfig } from "@/lib/server-seo";
import { documentServices, getDomainProfile } from "@/lib/domain-content";
import TidContact from "@/components/TidContact";
import { tidServices } from "@/lib/tid";
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ hizmet?: string }>;
}) {
  const [{ hizmet }, site] = await Promise.all([
    searchParams,
    getRequestSiteConfig(),
  ]);
  const profile = getDomainProfile(site.profileId);
  const services = profile ? documentServices : tidServices;
  const selected =
    services.find((service) => service.slug === hizmet)?.slug ||
    profile?.service ||
    services[0].slug;
  return <TidContact key={selected} initialService={selected} />;
}
