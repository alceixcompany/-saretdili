import { notFound, redirect } from "next/navigation";
import { getLandingPage, landingPages } from "@/lib/landing-pages";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return landingPages.map(({ slug }) => ({ slug }));
}
// Legacy landing content stays in src/lib for a deliberate migration later.
// It is not presented as confirmed TİD services or locations.
export default async function LegacyLandingPage({ params }: Props) {
  const { slug } = await params;
  if (!getLandingPage(slug)) notFound();
  redirect("/hizmetlerimiz");
}
