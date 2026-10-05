'use client';

import { useEffect, useMemo, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import type { CorporateReference } from '@/lib/corporate-references';

export default function CorporateReferences() {
  const [references, setReferences] = useState<CorporateReference[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadReferences = async () => {
      try {
        const contentSnapshot = await getDoc(doc(db, 'contact_info', 'corporate_references'));
        const items = (contentSnapshot.data()?.items ?? []) as CorporateReference[];

        if (isMounted) {
          setReferences(
            items
              .filter((item) => item.isActive)
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          );
        }
      } catch (error) {
        console.error('Referanslar yüklenirken hata oluştu:', error);
      }
    };

    void loadReferences();
    return () => {
      isMounted = false;
    };
  }, []);

  const marqueeItems = useMemo(
    () => (references.length > 5 ? [...references, ...references] : references),
    [references]
  );

  if (references.length === 0) return null;

  return (
    <section id="kurumsal-referanslar" className="overflow-hidden border-y border-[#171614]/8 bg-[#fcfaf5] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#a87522]">Kurumsal iş birlikleri</p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.035em] text-[#171614] sm:text-5xl">Referanslarımız</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#69635b] sm:text-base">
            Farklı sektörlerden kurumların tercüme süreçlerine profesyonel çözümler sunuyoruz.
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 max-w-[1600px] overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fcfaf5] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fcfaf5] to-transparent sm:w-28" />
        <div
          className={`flex items-center gap-12 px-8 py-3 sm:gap-16 ${references.length > 5 ? 'w-max animate-[yp-marquee_38s_linear_infinite] hover:[animation-play-state:paused]' : 'mx-auto max-w-7xl flex-wrap justify-center'}`}
        >
          {marqueeItems.map((reference, index) => (
            <a
              key={`${reference.id}-${index}`}
              href={reference.websiteUrl || undefined}
              target={reference.websiteUrl ? '_blank' : undefined}
              rel={reference.websiteUrl ? 'noopener noreferrer' : undefined}
              aria-label={`${reference.name} web sitesi`}
              className="group flex h-20 w-56 shrink-0 items-center justify-center px-2 transition duration-300 hover:-translate-y-1"
            >
              {/* Dış logo adreslerinde Next/Image optimizasyonu kaynak sunucuya bağlı kalmasın. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={reference.imageUrl}
                alt={`${reference.name} logosu`}
                loading="lazy"
                className="max-h-14 w-auto max-w-[200px] object-contain opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
