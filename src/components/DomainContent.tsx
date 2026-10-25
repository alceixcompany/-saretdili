import { Text, LocalizedLink as Link } from "@/components/LanguageProvider";
import TidHero from "@/components/TidHero";
import { TidCta } from "@/components/TidSections";
import { EditorialHome } from "@/components/EditorialContent";
import { FiArrowUpRight, FiFileText, FiCheck } from "react-icons/fi";
import {
  domainCopy,
  documentServices,
  getDocumentService,
  getDomainProfile,
  type DocumentService,
} from "@/lib/domain-content";
import type { SiteConfig } from "@/lib/domain-seo";
import type { Article } from "@/lib/editorial";
import { tidImages } from "@/lib/tid-images";
import JsonLd from "@/components/JsonLd";

export function DomainServiceCards({
  services = documentServices,
}: {
  services?: readonly DocumentService[];
}) {
  return (
    <div className="tid-service-grid">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={`/hizmetlerimiz/${service.slug}`}
          className={`tid-service-card tid-service-${index % 3}`}
        >
          <div className="tid-service-top">
            <span className="tid-service-icon">
              <FiFileText />
            </span>
            <span className="tid-service-number">
              / {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3>
            <Text>{service.title}</Text>
          </h3>
          <p>
            <Text>{service.description}</Text>
          </p>
          <span className="tid-card-link">
            <Text>Hizmeti inceleyin </Text>
            <FiArrowUpRight />
          </span>
        </Link>
      ))}
    </div>
  );
}
export function DomainPreparation() {
  return (
    <section className="tid-section tid-about-section">
      <div className="tid-container tid-detail-grid">
        <div>
          <span className="tid-eyebrow">
            <Text>{domainCopy.preparation}</Text>
          </span>
          <h2>
            <Text>{domainCopy.intro}</Text>
          </h2>
          <p>
            <Text>{domainCopy.subtitle}</Text>
          </p>
        </div>
        <ul className="tid-check-list">
          {domainCopy.requirements.map((item) => (
            <li key={item}>
              <FiCheck />
              <Text>{item}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function DomainHome({
  site,
  initialArticles,
}: {
  site: SiteConfig;
  initialArticles?: Article[];
}) {
  const profile = getDomainProfile(site.profileId)!;
  const services = profile.related.map((slug) => getDocumentService(slug)!);
  return (
    <main id="main-content" className="tid-site tid-document-site">
      <TidHero image={profile.image} variant="home">
        <div className="tid-container tid-hero-content">
          <div className="tid-hero-copy">
            <span className="tid-eyebrow">Best Tercümanlık</span>
            <h1>
              <Text>{profile.title}</Text>
            </h1>
            <p>
              <Text>{profile.description}</Text>
            </p>
            <div className="tid-hero-actions">
              <Link
                className="tid-button"
                href={`/iletisim?hizmet=${profile.service}`}
              >
                <Text>{domainCopy.quote}</Text>
                <FiArrowUpRight />
              </Link>
              <Link className="tid-text-link" href="/hizmetlerimiz">
                <Text>Hizmetleri keşfedin </Text>
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container">
          <div className="tid-section-heading">
            <div>
              <span className="tid-eyebrow">
                <Text>HİZMETLERİMİZ</Text>
              </span>
              <h2>
                <Text>{domainCopy.intro}</Text>
              </h2>
            </div>
            <p>
              <Text>{profile.detail}</Text>
            </p>
          </div>
          <DomainServiceCards services={services} />
        </div>
      </section>
      <section className="tid-section">
        <div className="tid-container">
          <div className="tid-section-heading">
            <h2>
              <Text>NASIL ÇALIŞIYORUZ?</Text>
            </h2>
            <p>
              <Text>{domainCopy.subtitle}</Text>
            </p>
          </div>
          <div className="tid-process-grid">
            {domainCopy.steps.map(([title, text], index) => (
              <article key={title}>
                <div className="tid-step-top">
                  <span>0{index + 1}</span>
                  <FiFileText />
                </div>
                <h3>
                  <Text>{title}</Text>
                </h3>
                <p>
                  <Text>{text}</Text>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <DomainPreparation />
      <section className="tid-faq-section" id="sik-sorulan-sorular">
        <div className="tid-container tid-faq-grid">
          <div>
            <span className="tid-eyebrow">
              <Text>AKLINIZDAKİ SORULAR</Text>
            </span>
            <h2>
              <Text>{domainCopy.faqTitle}</Text>
            </h2>
          </div>
          <div className="tid-faq-list">
            {domainCopy.faqs.map(([q, a], index) => (
              <details key={q} open={index === 0}>
                <summary>
                  <Text>{q}</Text>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  <Text>{a}</Text>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <EditorialHome initialArticles={initialArticles} />
      <TidCta />
    </main>
  );
}
export function DomainServicesPage({ site }: { site: SiteConfig }) {
  const profile = getDomainProfile(site.profileId)!;
  const services = [...documentServices].sort(
    (a, b) =>
      Number(b.slug === profile.service) - Number(a.slug === profile.service),
  );
  return (
    <main id="main-content" className="tid-site tid-document-site">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: domainCopy.services,
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `${site.url}/hizmetlerimiz/${service.slug}`,
            },
          })),
        }}
      />
      <TidHero image={tidImages.servicesHero}>
        <div className="tid-container">
          <span className="tid-eyebrow">
            <Text>{profile.title}</Text>
          </span>
          <h1>
            <Text>{domainCopy.services}</Text>
          </h1>
          <p>
            <Text>{domainCopy.subtitle}</Text>
          </p>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container">
          <DomainServiceCards services={services} />
        </div>
      </section>
      <DomainPreparation />
      <TidCta />
    </main>
  );
}
export function DomainServiceDetail({
  site,
  service,
}: {
  site: SiteConfig;
  service: DocumentService;
}) {
  return (
    <main id="main-content" className="tid-site tid-document-site">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${site.url}/hizmetlerimiz/${service.slug}`,
          provider: {
            "@type": "Organization",
            name: "Best Tercümanlık",
            url: site.url,
          },
        }}
      />
      <TidHero image={service.image}>
        <div className="tid-container">
          <div className="tid-breadcrumb">
            <Link href="/hizmetlerimiz">
              <Text>Hizmetlerimiz</Text>
            </Link>
            <span>/</span>
            <span>
              <Text>{service.title}</Text>
            </span>
          </div>
          <span className="tid-eyebrow">Best Tercümanlık</span>
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
          <div>
            <h2>
              <Text>{domainCopy.intro}</Text>
            </h2>
            <p>
              <Text>{service.detail}</Text>
            </p>
            <p>
              <Text>{domainCopy.approach}</Text>
            </p>
          </div>
          <div>
            <h2>
              <Text>{domainCopy.preparation}</Text>
            </h2>
            <ul className="tid-check-list">
              {domainCopy.requirements.map((item) => (
                <li key={item}>
                  <FiCheck />
                  <Text>{item}</Text>
                </li>
              ))}
            </ul>
            <Link
              href={`/iletisim?hizmet=${service.slug}`}
              className="tid-button"
            >
              <Text>{domainCopy.quote}</Text>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <TidCta />
    </main>
  );
}
export function DomainAboutPage({ site }: { site: SiteConfig }) {
  const profile = getDomainProfile(site.profileId)!;
  return (
    <main id="main-content" className="tid-site tid-document-site">
      <TidHero image={tidImages.aboutHero}>
        <div className="tid-container">
          <span className="tid-eyebrow">Best Tercümanlık</span>
          <h1>
            <Text>{domainCopy.about}</Text>
          </h1>
          <p>
            <Text>{profile.description}</Text>
          </p>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container tid-detail-grid">
          <div>
            <h2>
              <Text>{profile.title}</Text>
            </h2>
            <p>
              <Text>{domainCopy.aboutBody}</Text>
            </p>
          </div>
          <div>
            <h2>
              <Text>{domainCopy.intro}</Text>
            </h2>
            <p>
              <Text>{profile.detail}</Text>
            </p>
            <p>
              <Text>{domainCopy.approach}</Text>
            </p>
          </div>
        </div>
      </section>
      <DomainPreparation />
      <TidCta />
    </main>
  );
}
