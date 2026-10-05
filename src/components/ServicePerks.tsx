'use client';

import { motion } from 'framer-motion';
import { FaGem, FaLanguage, FaTruck } from 'react-icons/fa';
import { useLanguage } from '@/components/LanguageProvider';

const perks = [
  {
    icon: FaTruck,
    title: 'Kargo Teslim',
  },
  {
    icon: FaLanguage,
    title: 'Online Çeviri Hizmeti',
  },
  {
    icon: FaGem,
    title: 'Uygun Fiyat Garantisi',
  },
] as const;

const ServicePerks = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[var(--lale-cream)] py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(223,167,69,0.26),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(223,167,69,0.18),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid overflow-hidden rounded-[18px] border border-[rgba(195,149,58,0.16)] bg-white/72 shadow-[0_18px_50px_rgba(95,89,108,0.06)] backdrop-blur md:grid-cols-3">
          {perks.map((perk, index) => {
            const Icon = perk.icon;

            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.58, delay: index * 0.08, ease: 'easeOut' }}
                className="group relative flex items-center gap-5 px-5 py-6 text-left sm:px-7 sm:py-7 md:justify-center md:px-6"
              >
                {index > 0 && (
                  <span className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[rgba(195,149,58,0.18)] md:block" />
                )}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(195,149,58,0.13)] text-[var(--lale-gold)] ring-1 ring-[rgba(195,149,58,0.18)] transition-all duration-300 group-hover:bg-[var(--lale-gold)] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-medium leading-snug text-[var(--dream-dark)] sm:text-xl">
                  {t(perk.title)}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePerks;
