import TidHero from "@/components/TidHero";
import { Text } from "@/components/LanguageProvider";
import { notFound, redirect } from "next/navigation";
import { LocalizedImage as Image } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { TidCta } from "@/components/TidSections";
import { createSeoMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
import {
  getTranslationService,
  translationServices,
} from "@/lib/translation-services";
import { tidServices } from "@/lib/tid";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return translationServices.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getTranslationService(slug);
  const site = await getRequestSiteConfig();
  if (!service) return {};
  return createSeoMetadata({
    title: service.title,
    description: service.description,
    path: `/hizmetlerimiz/${slug}`,
    image: service.image,
    site,
  });
}
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getTranslationService(slug);
  if (!service) notFound();
  const primaryService = tidServices.find((item) => item.slug === slug);
  if (!primaryService) {
    redirect(
      `/hizmetlerimiz/${slug.includes("noter") ? "isaret-dili-noter" : "yeminli-tercuman"}`,
    );
  }
  return (
    <main id="main-content" className="tid-site">
      <TidHero image={primaryService.heroImage}>
        <div className="tid-container">
          <div className="tid-breadcrumb">
            <Link href="/">
              <Text>{"Ana Sayfa"}</Text>
            </Link>
            <span>
              <Text>{"/"}</Text>
            </span>
            <Link href="/hizmetlerimiz">
              <Text>{"Hizmetlerimiz"}</Text>
            </Link>
            <span>
              <Text>{"/"}</Text>
            </span>
            <span>
              <Text>{service.title}</Text>
            </span>
          </div>
          <span className="tid-eyebrow">
            <Text>{"TİD TERCÜMANLIK"}</Text>
          </span>
          <h1>
            <Text>{service.title}</Text>
          </h1>
          <p>
            <Text>{service.description}</Text>
          </p>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container tid-detail-grid">
          <div className="tid-detail-photo">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 680px) 90vw, 45vw"
            />
          </div>
          <div>
            <span className="tid-eyebrow">
              <Text>{"BİRLİKTE PLANLAYALIM"}</Text>
            </span>
            <h2>
              <Text>{"Her adımı net,"}</Text>
              <br />
              <span>
                <Text>{"iletişimi kolay bir süreç."}</Text>
              </span>
            </h2>
            <p>
              <Text>
                {primaryService?.detail ||
                  "İhtiyacınızı ve görüşme koşullarını paylaşın. Uygun hizmet kapsamını, gerekli hazırlığı ve randevu planını birlikte değerlendirelim."}
              </Text>
            </p>
            <ul className="tid-check-list">
              {service.highlights.map((point) => (
                <li key={point}>
                  <FiCheck />
                  <Text>{point}</Text>
                </li>
              ))}
            </ul>
            <Link
              href={`/iletisim?hizmet=${primaryService?.slug || "yeminli-tercuman"}`}
              className="tid-button"
            >
              <Text>{"Bu Hizmet İçin Talep Oluştur "}</Text>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <TidCta />
    </main>
  );
}
