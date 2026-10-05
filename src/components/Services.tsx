'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { useLanguage } from '@/components/LanguageProvider';

const services = [
  {
    title: 'Pasaport Tercümesi',
    description: 'Vize, ikamet, seyahat ve resmi başvurular için kabul odaklı pasaport çevirisi.',
    image: '/beyvip/passport.png',
  },
  {
    title: 'Yeminli Tercüme',
    description: 'Resmi belgeleriniz için yeminli tercüman kaşeli ve düzenli teslim süreci.',
    image: '/beyvip/legal.png',
  },
  {
    title: 'Noter Onaylı Tercüme',
    description: 'Noter işlemlerine uygun hazırlanan evrak çevirileri ve süreç yönlendirmesi.',
    image: '/beyvip/legal.png',
  },
  {
    title: 'Diploma ve Transkript',
    description: 'Eğitim, denklik ve başvuru dosyaları için akademik belge tercümeleri.',
    image: '/beyvip/about.png',
  },
  {
    title: 'Vize Evrakları',
    description: 'Konsolosluk dosyaları için kimlik, nüfus kayıt, banka ve destek evrak çevirileri.',
    image: '/beyvip/passport.png',
  },
  {
    title: 'Hukuki Tercüme',
    description: 'Sözleşme, vekaletname, mahkeme ve şirket evraklarında titiz terminoloji.',
    image: '/beyvip/legal.png',
  },
] as const;

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="hizmetler" className="relative overflow-hidden bg-[var(--lale-cream)] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(223,167,69,0.32),transparent)]" />
      <div className="pointer-events-none absolute right-10 top-20 h-60 w-60 rounded-full bg-white/70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <div className="lale-kicker">{t('Hizmetlerimiz')}</div>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight tracking-[-0.02em] text-[var(--lale-emerald-deep)] sm:text-4xl lg:text-5xl">
              {t('YP Metropol resmi ve özel belge tercüme hizmetleri')}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[var(--dream-text)] sm:text-base">
            {t('Başvuru tipinize göre belgeyi inceliyor, tercüme formatını netleştiriyor ve teslim sürecini hızlıca planlıyoruz.')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.62, delay: index * 0.06, ease: 'easeOut' }}
              className="group relative min-h-[430px] overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_22px_70px_rgba(95,89,108,0.10)]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(95,89,108,0.02)_24%,rgba(95,89,108,0.72)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/16 px-4 py-2 text-xs backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Link
                    href="/hizmetlerimiz"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/92 text-[var(--lale-emerald-deep)] shadow-[0_10px_28px_rgba(17,16,14,0.12)] transition-transform group-hover:rotate-45"
                    aria-label={`${service.title} detayları`}
                  >
                    <FiArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
                <h3 className="font-serif text-2xl font-normal">{t(service.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">{t(service.description)}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-[24px] border border-white/12 bg-[var(--lale-emerald-deep)] p-5 text-white shadow-[0_20px_60px_rgba(95,89,108,0.16)] md:grid-cols-[1fr_auto] md:items-center md:p-7">
          <div className="flex flex-wrap gap-3">
            {['Accepted worldwide', 'Accurate details', 'Fast turnaround'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <FiCheck className="h-4 w-4" />
                {t(item)}
              </span>
            ))}
          </div>
          <Link href="/iletisim" className="lale-gold-button gap-3 justify-self-start md:justify-self-end">
            {t('Teklif Al')}
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
