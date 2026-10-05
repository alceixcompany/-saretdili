import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowRight, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { getRequestSiteConfig } from '@/lib/server-seo';
import { getServiceArea, serviceAreas } from '@/lib/service-areas';
import { breadcrumbJsonLd, localBusinessJsonLd } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceAreas.map(({ slug }) => ({ slug }));
}

export default async function ServiceAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();
  const site = await getRequestSiteConfig();

  return (
    <main className="page-flow min-h-screen">
      <JsonLd data={[localBusinessJsonLd(site), breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: 'Hizmet Bölgeleri', path: '/hizmet-bolgelerimiz' }, { name: `${area.name} Tercüme`, path: `/hizmet-bolgelerimiz/${area.slug}` }], site)]} />
      <PageHero eyebrow="HİZMET BÖLGESİ" title={<>{area.name}<br />Tercüme Bürosu</>} description={`${area.name} ve çevresinde yeminli tercüme, noter onayı, apostil ve profesyonel çeviri desteği.`} image="/beyvip/hero.png" imageAlt={`${area.name} tercüme bürosu`} />
      <section className="lale-light-section py-20 sm:py-24">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-7 lg:grid-cols-[1fr_0.78fr] lg:px-10">
          <article>
            <div className="lale-kicker"><FiMapPin /> {area.name}</div>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--dream-dark)]">{area.name} yeminli ve noter onaylı tercüme hizmetleri</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[var(--dream-text)]">
              <p>YP Metropol Tercüme, Mecidiyeköy’deki ofisinden {area.name} ve çevresindeki bireysel ve kurumsal müşterilere profesyonel çeviri hizmetleri sunar.</p>
              <p>Pasaport, diploma, sözleşme, vekâletname, sağlık raporu, teknik doküman ve akademik metinler belgenin alanına uygun tercümanla çalışılır. Gereken projelerde noter onayı ve apostil süreci baştan planlanır.</p>
              <p>Belgenizi WhatsApp veya e-posta ile göndererek ofise gelmeden süre ve ücret bilgisi alabilirsiniz.</p>
            </div>
          </article>
          <aside className="rounded-[20px] border border-[rgba(195,149,58,0.18)] bg-white/88 p-7 shadow-[0_18px_50px_rgba(17,17,17,0.07)]">
            <h3 className="font-serif text-2xl text-[var(--dream-dark)]">Öne çıkan hizmetler</h3>
            <div className="mt-6 space-y-4">{['Yeminli tercüme', 'Noter onaylı tercüme', 'Apostil yönlendirmesi', 'Yazılı ve sözlü tercüme', 'Online belge gönderimi'].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-[var(--dream-text)]"><FiCheckCircle className="h-5 w-5 shrink-0 text-[var(--lale-gold)]" />{item}</div>)}</div>
            <Link href="/iletisim" className="lale-gold-button mt-8 gap-3">Teklif Al <FiArrowRight /></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
