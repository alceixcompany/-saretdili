'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiArrowUpRight, FiGlobe, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { siteConfig } from '@/lib/seo';
import { useLanguage } from '@/components/LanguageProvider';

const heroItems = ['Yeminli Tercüme', 'Noter Onayı', 'Pasaport Çevirisi'];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
};

const group: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f1e5] px-4 pb-8 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src="/beyvip/hero.png"
          alt="YP Metropol profesyonel tercüme hizmetleri"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,229,0.99)_0%,rgba(247,241,229,0.92)_43%,rgba(247,241,229,0.42)_76%,rgba(17,17,17,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,229,0.06)_0%,rgba(247,241,229,0.92)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid min-h-[640px] gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <motion.div
            variants={group}
            initial="hidden"
            animate="visible"
              className="relative z-20 max-w-[620px] py-12 lg:py-16"
          >
            <motion.div variants={reveal} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(195,149,58,0.28)] bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)] backdrop-blur">
              <FiGlobe className="h-4 w-4" />
              {t('Dünya genelinde kabul gören tercüme')}
            </motion.div>

            <motion.h1
              variants={reveal}
              className="max-w-[580px] font-serif text-[42px] font-normal leading-[1.04] text-[var(--dream-dark)] sm:text-[58px] lg:text-[66px]"
            >
              {t('YP Metropol Tercüme Bürosu')}
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-[540px] text-base leading-8 text-[var(--dream-text)] sm:text-lg"
            >
              {t('Mecidiyeköy’de yeminli, noter onaylı, yazılı ve sözlü tercüme hizmetleri. Belgeleriniz için hızlı, güvenilir ve doğru çözümler.')}
            </motion.p>

            <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/hizmetlerimiz" className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--dream-dark)] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_42px_rgba(95,89,108,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-panel-deep)]">
                {t('Hizmetleri İncele')}
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(95,89,108,0.18)] bg-white/72 px-6 py-3 text-sm font-medium text-[var(--dream-dark)] shadow-[0_14px_32px_rgba(95,89,108,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                {t('Teklif Al')}
                <FiPhone className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={reveal} className="mt-10 grid max-w-[560px] gap-3 sm:grid-cols-3">
              {heroItems.map((service) => (
                <span
                  key={service}
                  className="rounded-[14px] border border-[rgba(195,149,58,0.20)] bg-white/70 px-4 py-3 text-sm text-[var(--dream-dark)] shadow-[0_10px_24px_rgba(17,17,17,0.05)] backdrop-blur"
                >
                  {t(service)}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
            className="relative z-10 min-h-[420px] lg:min-h-[620px]"
          >
            <div className="absolute bottom-2 right-0 h-[430px] w-[min(84vw,540px)] lg:h-[580px] lg:w-[590px]">
              <Image
                src="/beyvip/passport.png"
                alt="Pasaport tercümesi ve resmi evrak hazırlığı"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_28px_48px_rgba(17,17,17,0.16)]"
                sizes="(max-width: 1024px) 88vw, 48vw"
              />
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 grid gap-3 rounded-[18px] border border-[rgba(195,149,58,0.16)] bg-white/74 px-3 py-3 shadow-[0_16px_44px_rgba(17,17,17,0.06)] backdrop-blur md:grid-cols-3 md:px-5">
            {[
            { icon: FiMail, title: t('E-posta'), value: siteConfig.email },
            { icon: FiMapPin, title: t('Konum'), value: 'Mecidiyeköy / İstanbul' },
            { icon: FiPhone, title: t('Telefon'), value: siteConfig.phoneDisplay },
          ].map((detail, index) => {
            const Icon = detail.icon;

            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                className="flex items-start gap-4 rounded-[14px] border border-[rgba(195,149,58,0.10)] bg-white/54 px-4 py-4 md:border-transparent md:bg-transparent"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--dream-dark)] text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-xl text-[var(--dream-dark)]">{detail.title}</p>
                  <p className="mt-1 text-sm text-[var(--dream-text)]">{detail.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
