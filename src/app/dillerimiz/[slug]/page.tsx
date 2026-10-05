import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { absoluteUrl, breadcrumbJsonLd, createSeoMetadata } from '@/lib/seo';
import { getRequestSiteConfig } from '@/lib/server-seo';
import { getTranslationLanguage, translationLanguages } from '@/lib/translation-languages';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return translationLanguages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const language = getTranslationLanguage(slug);
  const site = await getRequestSiteConfig();
  if (!language) return {};
  return createSeoMetadata({
    title: `${site.locationName} ${language.name} Tercüme`,
    description: `${site.name} ${language.name}-Türkçe ve Türkçe-${language.name} yazılı, yeminli, noter onaylı ve sözlü tercüme hizmetleri.`,
    path: `/dillerimiz/${language.slug}`,
    image: '/yp-metropol/home/interpreting-meeting-v2.webp',
    keywords: [`${language.name.toLocaleLowerCase('tr-TR')} tercume`, `${site.locationName.toLocaleLowerCase('tr-TR')} ${language.name.toLocaleLowerCase('tr-TR')} tercume`],
    site,
  });
}

export default async function LanguageDetailPage({ params }: Props) {
  const { slug } = await params;
  const language = getTranslationLanguage(slug);
  if (!language) notFound();
  const site = await getRequestSiteConfig();
  const title = `${language.name} Tercüme`;
  const jsonLd = [
    breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: 'Tercüme Dilleri', path: '/dillerimiz' }, { name: title, path: `/dillerimiz/${language.slug}` }], site),
    { '@context': 'https://schema.org', '@type': 'Service', name: title, description: `${language.name}-Türkçe ve Türkçe-${language.name} profesyonel tercüme hizmeti.`, url: absoluteUrl(`/dillerimiz/${language.slug}`, site), provider: { '@type': 'ProfessionalService', name: site.name, url: site.url }, areaServed: site.areaServed },
  ];

  return (
    <main className="page-flow min-h-screen">
      <JsonLd data={jsonLd} />
      <PageHero eyebrow="TERCÜME DİLİ" title={<>{language.flag} {language.name}<br />Tercüme</>} description={`${language.name}-Türkçe ve Türkçe-${language.name} yönlerinde, belgenin uzmanlık alanına uygun profesyonel tercüme desteği.`} image="/yp-metropol/home/interpreting-meeting-v2.webp" imageAlt={`${language.name} profesyonel tercüme hizmeti`} />
      <section className="lale-light-section py-20 sm:py-24">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-7 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <div className="lale-kicker">{language.nativeName}</div>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--dream-dark)]">Mecidiyeköy’de profesyonel {language.name} tercüme</h2>
            <p className="mt-6 text-base leading-8 text-[var(--dream-text)]">Akademik, hukuki, teknik, tıbbi ve kurumsal belgeleriniz içerik alanına uygun tercümana yönlendirilir. Resmî belgelerde yeminli tercüme, noter onayı ve gerektiğinde apostil süreci birlikte planlanır.</p>
            <p className="mt-4 text-base leading-8 text-[var(--dream-text)]">Teslim süresi ve ücret; belgenin uzunluğu, biçimi, uzmanlık alanı ve onay ihtiyacı incelendikten sonra net olarak paylaşılır.</p>
          </div>
          <aside className="rounded-[20px] border border-[rgba(195,149,58,0.18)] bg-white/88 p-7 shadow-[0_18px_50px_rgba(17,17,17,0.07)]">
            <h3 className="font-serif text-2xl text-[var(--dream-dark)]">Hizmet kapsamı</h3>
            <div className="mt-6 space-y-4">
              {['Yazılı ve yeminli tercüme', 'Noter onaylı belge tercümesi', 'Akademik, teknik ve hukuki metinler', 'Sözlü, ardıl ve simultane tercüme', 'Redaksiyon ve kalite kontrol'].map((item) => <div key={item} className="flex items-start gap-3 text-sm text-[var(--dream-text)]"><FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--lale-gold)]" /><span>{item}</span></div>)}
            </div>
            <Link href="/iletisim" className="lale-gold-button mt-8 gap-3">Ücretsiz Teklif Al <FiArrowRight /></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
