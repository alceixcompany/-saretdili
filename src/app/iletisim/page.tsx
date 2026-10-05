import TidContact from "@/components/TidContact";
import { tidServices } from "@/lib/tid";
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ hizmet?: string }>;
}) {
  const { hizmet } = await searchParams;
  const selected =
    tidServices.find((service) => service.slug === hizmet)?.slug ||
    tidServices[0].slug;
  return <TidContact key={selected} initialService={selected} />;
}
