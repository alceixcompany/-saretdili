import Link from 'next/link';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import { serviceAreas } from '@/lib/service-areas';

export default function ServiceAreasPage() {
  return (
    <main className="page-flow min-h-screen">
      <PageHero eyebrow="HİZMET BÖLGELERİ" title={<>İstanbul’da<br />yakın tercüme desteği</>} description="Mecidiyeköy merkezli ofisimizden yakın bölgelere ve online belge gönderimiyle Türkiye geneline hizmet veriyoruz." image="/beyvip/hero.png" imageAlt="YP Metropol Tercüme hizmet bölgeleri" />
      <section className="lale-light-section py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/hizmet-bolgelerimiz/${area.slug}`} className="group rounded-[18px] border border-[rgba(195,149,58,0.16)] bg-white/88 p-6 shadow-[0_16px_45px_rgba(17,17,17,0.06)] transition hover:-translate-y-1 hover:border-[rgba(195,149,58,0.36)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(195,149,58,0.12)] text-[var(--lale-gold)]"><FiMapPin className="h-6 w-6" /></div>
                <h2 className="mt-5 font-serif text-2xl text-[var(--dream-dark)]">{area.name} Tercüme</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--dream-text)]">{area.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--lale-gold)]">Bölge detayları <FiArrowRight className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
