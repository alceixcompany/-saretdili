import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { absoluteUrl, createSeoMetadata } from '@/lib/seo';
import { getRequestSiteConfig } from '@/lib/server-seo';
import { translationLanguages } from '@/lib/translation-languages';

export async function generateMetadata() {
  const site = await getRequestSiteConfig();
  return createSeoMetadata({
    title: `${site.locationName} Tercüme Dilleri`,
    description: `${site.name}, İngilizce, Almanca, Arapça, Fransızca, Rusça ve diğer dillerde profesyonel tercüme hizmetleri sunar.`,
    path: '/dillerimiz',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp',
    keywords: ['tercume dilleri', 'ingilizce tercume', 'almanca tercume', 'arapca tercume', 'rusca tercume'],
    site,
  });
}

export default async function LanguagesPage() {
  const site = await getRequestSiteConfig();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} tercüme dilleri`,
    itemListElement: translationLanguages.map((language, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${language.name} Tercüme`,
      url: absoluteUrl(`/dillerimiz/${language.slug}`, site),
    })),
  };

  return (
    <main className="page-flow min-h-screen">
      <JsonLd data={jsonLd} />
      <PageHero eyebrow="TERCÜME DİLLERİ" title={<>Her dilde<br />uzman destek</>} description="Belgenin dili ve uzmanlık alanına göre doğru tercümanla eşleştirilen profesyonel çeviri çözümleri." image="/yp-metropol/home/interpreting-meeting-v2.webp" imageAlt="YP Metropol çok dilli sözlü ve yazılı tercüme desteği" />
      <section className="lale-light-section py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {translationLanguages.map((language) => (
              <Link key={language.slug} href={`/dillerimiz/${language.slug}`} className="group rounded-[18px] border border-[rgba(195,149,58,0.16)] bg-white/88 p-6 shadow-[0_16px_45px_rgba(17,17,17,0.06)] transition hover:-translate-y-1 hover:border-[rgba(195,149,58,0.36)]">
                <span className="text-4xl" aria-hidden="true">{language.flag}</span>
                <h2 className="mt-5 font-serif text-2xl text-[var(--dream-dark)]">{language.name} Tercüme</h2>
                <p className="mt-2 text-sm text-[var(--dream-text)]">{language.nativeName}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--lale-gold)]">Detayları incele <FiArrowRight className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex items-start gap-4 rounded-[18px] border border-[rgba(195,149,58,0.18)] bg-white/78 p-6 text-sm leading-7 text-[var(--dream-text)]">
            <FiCheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--lale-gold)]" />
            <p>Listede görünmeyen bir dil çifti için de belgeyi ileterek uygun tercüman ve teslim süresi hakkında bilgi alabilirsiniz.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
