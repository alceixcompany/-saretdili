'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiFileText, FiMapPin, FiStar } from 'react-icons/fi';
import { useLanguage } from '@/components/LanguageProvider';

const reviews = [
  {
    name: 'Aylin K.',
    service: 'Pasaport Tercümesi',
    location: 'İstanbul',
    rating: 5,
    time: '2 hafta önce',
    comment:
      'Vize dosyam için pasaport ve nüfus kayıt tercümesi gerekti. Süreç hızlı ilerledi, evrak formatı konusunda da çok net yönlendirdiler.',
    image: '/img/ayşe.avif',
  },
  {
    name: 'Murad A.',
    service: 'Noter Onaylı Tercüme',
    location: 'Bakü',
    rating: 5,
    time: '1 ay önce',
    comment:
      'Vekaletname tercümesi için ulaştım. Hangi onayın gerektiğini baştan anlattılar ve belgeyi zamanında hazırladılar.',
    image: '/img/banu.avif',
  },
  {
    name: 'Seda T.',
    service: 'Diploma Tercümesi',
    location: 'Ankara',
    rating: 5,
    time: '3 hafta önce',
    comment:
      'Yurt dışı başvurum için diploma ve transkript çevirisi yaptırdım. Terminoloji ve teslim dosyası düzenliydi.',
    image: '/img/ahmet.avif',
  },
  {
    name: 'Farid M.',
    service: 'Arapça Tercüme',
    location: 'Üsküdar',
    rating: 5,
    time: '5 gün önce',
    comment:
      'Arapça evraklarım için hızlı dönüş aldım. WhatsApp üzerinden belge gönderip aynı gün teklif almam çok pratik oldu.',
    image: '/img/ali.avif',
  },
] as const;

const References = () => {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({
    reviews: 0,
    customers: 0,
    years: 0,
    satisfaction: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = { reviews: 186, customers: 1000, years: 5, satisfaction: 99 };

    const animateCount = (
      start: number,
      end: number,
      duration: number,
      callback: (value: number) => void
    ) => {
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(start + (end - start) * easeOutQuart);

        callback(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount(0, targets.reviews, 1800, (value) =>
              setCounts((prev) => ({ ...prev, reviews: value }))
            );
            animateCount(0, targets.customers, 1800, (value) =>
              setCounts((prev) => ({ ...prev, customers: value }))
            );
            animateCount(0, targets.years, 1800, (value) =>
              setCounts((prev) => ({ ...prev, years: value }))
            );
            animateCount(0, targets.satisfaction, 1800, (value) =>
              setCounts((prev) => ({ ...prev, satisfaction: value }))
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="referanslar" className="lale-light-section py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="lale-kicker">{t('Neden YP Metropol?')}</div>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-[var(--dream-dark)] sm:text-4xl">
            {t('Hız, dikkat ve resmi süreç bilgisini')}
            <span className="block text-[var(--lale-gold)]">{t('aynı dosyada buluşturuyoruz')}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--dream-text)] sm:text-base">
            {t('Belgelerinizi yalnızca çevirmekle kalmıyor, başvuru amacına uygun düzen, onay ihtiyacı ve teslim süresiyle birlikte ele alıyoruz.')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[18px] border border-[rgba(223,167,69,0.16)] bg-white/88 p-6 shadow-[0_22px_58px_rgba(95,89,108,0.08)] sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(223,167,69,0.14)] text-[var(--lale-gold)]">
                <FiFileText className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--lale-gold)]">{t('YP Metropol AVANTAJLARI')}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-[var(--dream-dark)]">{t('Net teklif, doğru format, hızlı teslim')}</h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--dream-text)]">
              {t('Pasaport, kimlik, diploma, sözleşme ve konsolosluk evraklarında belgenin kullanım amacına göre kontrollü bir tercüme akışı sunuyoruz.')}
            </p>

            <div className="mt-7 grid gap-3">
              {[
                'Belge türüne göre doğru teslim formatı',
                'Yeminli ve noter onaylı tercüme yönlendirmesi',
                'WhatsApp üzerinden hızlı belge inceleme',
                'İngilizce, Arapça, Farsça, Fransızca ve Rusça destek',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[14px] border border-[rgba(223,167,69,0.14)] bg-[rgba(247,241,229,0.54)] px-4 py-3"
                >
                  <FiCheckCircle className="h-5 w-5 shrink-0 text-[var(--lale-gold)]" />
                  <span className="text-sm text-[var(--dream-dark)]">{t(item)}</span>
                </div>
              ))}
            </div>

            <div
              ref={statsRef}
              className="mt-8 grid gap-3 border-t border-[rgba(223,167,69,0.14)] pt-6 sm:grid-cols-2"
            >
              <div className="rounded-[14px] border border-[rgba(223,167,69,0.12)] bg-white px-5 py-5 text-center">
                <div className="text-2xl font-semibold text-[var(--lale-gold)]">{counts.reviews}+</div>
                <p className="mt-2 text-sm text-[var(--dream-text)]">{t('Olumlu geri dönüş')}</p>
              </div>
              <div className="rounded-[14px] border border-[rgba(223,167,69,0.12)] bg-white px-5 py-5 text-center">
                <div className="text-2xl font-semibold text-[var(--lale-gold)]">%{counts.satisfaction}</div>
                <p className="mt-2 text-sm text-[var(--dream-text)]">{t('Memnuniyet')}</p>
              </div>
              <div className="rounded-[14px] border border-[rgba(223,167,69,0.12)] bg-white px-5 py-5 text-center">
                <div className="text-2xl font-semibold text-[var(--lale-gold)]">{counts.customers}+</div>
                <p className="mt-2 text-sm text-[var(--dream-text)]">{t('Tamamlanan evrak')}</p>
              </div>
              <div className="rounded-[14px] border border-[rgba(223,167,69,0.12)] bg-white px-5 py-5 text-center">
                <div className="text-2xl font-semibold text-[var(--lale-gold)]">{counts.years}+</div>
                <p className="mt-2 text-sm text-[var(--dream-text)]">{t('Dil desteği')}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((review, index) => (
              <motion.article
                key={`${review.name}-${review.service}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.58, delay: index * 0.04, ease: 'easeOut' }}
                className="flex min-h-[320px] flex-col rounded-[18px] border border-[rgba(223,167,69,0.18)] bg-white/80 p-6 shadow-[0_16px_42px_rgba(95,89,108,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={52}
                      height={52}
                      className="h-[52px] w-[52px] rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-[var(--dream-dark)]">{review.name}</h4>
                      <div className="mt-1 flex items-center gap-2 text-xs text-[var(--dream-text)]">
                        <FiMapPin className="h-3.5 w-3.5" />
                        <span>{t(review.location)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[var(--dream-text)]">{t(review.time)}</div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-[var(--lale-gold)]">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <FiStar key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-[var(--dream-text)]">{t(review.comment)}</p>

                <div className="mt-5 flex items-center justify-between border-t border-[rgba(223,167,69,0.12)] pt-4">
                  <span className="rounded-full border border-[rgba(223,167,69,0.18)] bg-[rgba(223,167,69,0.08)] px-3 py-1 text-xs text-[var(--lale-gold)]">
                    {t(review.service)}
                  </span>
                  <span className="text-xs text-[var(--dream-text)]">{t('YP Metropol müşteri yorumu')}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
