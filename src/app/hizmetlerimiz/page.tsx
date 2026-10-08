import { tidImages } from "@/lib/tid-images";
import TidHero from "@/components/TidHero";
import { Text } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import { ServiceCards, TidCta } from "@/components/TidSections";
import { TidServicesIntroduction, TidServiceScope, TidRequestPreparation } from "@/components/TidInformation";
import JsonLd from "@/components/JsonLd";
import { tidServices } from "@/lib/tid";
import { absoluteUrl, createSeoMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
export async function generateMetadata() {
  const site = await getRequestSiteConfig();
  return createSeoMetadata({
    title: "Türk İşaret Dili ve Tercümanlık Hizmetleri",
    description:
      "TİD: Türk İşaret Dili tercümanlığı, yeminli tercüman ve noter işlemlerinde işaret dili desteği. Hizmetleri keşfedin ve randevu talep edin.",
    path: "/hizmetlerimiz",
    site,
  });
}
export default async function ServicesPage() {
  const site = await getRequestSiteConfig();
  return (
    <main id="main-content" className="tid-site">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "TİD Hizmetleri",
          itemListElement: tidServices.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: absoluteUrl(`/hizmetlerimiz/${service.slug}`, site),
            },
          })),
        }}
      />
      <TidHero
        image={tidImages.servicesHero}
        imagePosition="center 36%"
      >
        <div className="tid-container">
          <div className="tid-breadcrumb">
            <Link href="/">
              <Text>{"Ana Sayfa"}</Text>
            </Link>
            <span>
              <Text>{"/"}</Text>
            </span>
            <span>
              <Text>{"Hizmetlerimiz"}</Text>
            </span>
          </div>
          <span className="tid-eyebrow">
            <Text>{"SİZİ ANLAYAN ÇÖZÜMLER"}</Text>
          </span>
          <h1>
            <Text>{"İletişim kurduğunuz"}</Text>
            <br />
            <Text>{"her yerde yanınızdayız."}</Text>
          </h1>
          <p>
            <Text>
              {
                "Günlük hayatınızda, kurumsal görüşmelerinizde ve resmî işlemlerinizde ihtiyacınıza uygun tercümanlık desteği."
              }
            </Text>
          </p>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container">
          <TidServicesIntroduction />
          <ServiceCards />
        </div>
      </section>
      <TidServiceScope />
      <TidRequestPreparation />
      <TidCta />
    </main>
  );
}
