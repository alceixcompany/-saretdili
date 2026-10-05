'use client';

import React from 'react';
import Link from 'next/link';
import { FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { siteConfig } from '@/lib/seo';
import { useLanguage } from '@/components/LanguageProvider';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="iletisim" className="lale-light-section py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="lale-kicker">{t('İletişim')}</div>

          <h2 className="mt-6 font-serif text-3xl text-[var(--dream-dark)] sm:text-4xl">
            {t('Bize kolayca')}
            <span className="block text-[var(--lale-gold)]">{t('ulaşabilirsiniz')}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--dream-text)] sm:text-base">
            {t('Belgenizi paylaşın; dil, onay ihtiyacı ve teslim süresine göre hızlıca teklif alabilirsiniz.')}
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-[34px] bg-[var(--brand-panel)] px-6 py-8 text-white shadow-[0_28px_90px_rgba(223,167,69,0.18)] sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm tracking-[0.14em] text-white/72">{t('TEKLİF VE BİLGİ')}</p>
              <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                {t('YP Metropol ile tercüme sürecinizi hızlıca planlayalım')}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/78 sm:text-base">
                {t('WhatsApp, telefon veya e-posta üzerinden bize ulaşıp belgenizin teslim süresini ve onay ihtiyacını birlikte netleştirebilirsiniz.')}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[24px] bg-white/88 px-5 py-5 text-[var(--dream-dark)] shadow-[0_16px_40px_rgba(95,89,108,0.12)] transition-transform duration-300 hover:-translate-y-1"
              >
                <FiMessageCircle className="h-5 w-5 text-[var(--lale-gold)]" />
                <p className="mt-4 text-xs tracking-[0.14em] text-[var(--lale-gold)]">WHATSAPP</p>
                <p className="mt-2 text-base font-medium">{siteConfig.whatsappDisplay}</p>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-[24px] bg-white/88 px-5 py-5 text-[var(--dream-dark)] shadow-[0_16px_40px_rgba(95,89,108,0.12)] transition-transform duration-300 hover:-translate-y-1"
              >
                <FiMail className="h-5 w-5 text-[var(--lale-gold)]" />
                <p className="mt-4 text-xs tracking-[0.14em] text-[var(--lale-gold)]">E-POSTA</p>
                <p className="mt-2 break-all text-base font-medium">{siteConfig.email}</p>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-[rgba(223,167,69,0.16)] bg-white/88 p-7 text-center shadow-[0_18px_50px_rgba(95,89,108,0.08)]">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(223,167,69,0.12)] text-[var(--lale-gold)] shadow-inner">
              <FiPhone className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-base font-semibold text-[var(--dream-dark)]">{t('Telefon')}</h3>
            <a href={`tel:${siteConfig.phone}`} className="text-lg font-medium text-[var(--lale-gold)] transition-colors hover:text-[var(--lale-gold-soft)]">
              {siteConfig.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-[var(--dream-text)]">{t('Teklif ve bilgi için hemen ulaşın')}</p>
          </div>

          <div className="rounded-[28px] border border-[rgba(223,167,69,0.16)] bg-white/88 p-7 text-center shadow-[0_18px_50px_rgba(95,89,108,0.08)]">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(223,167,69,0.12)] text-[var(--lale-gold)] shadow-inner">
              <FiMessageCircle className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-base font-semibold text-[var(--dream-dark)]">WhatsApp</h3>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-base font-medium text-[var(--lale-gold)] transition-colors hover:text-[var(--lale-gold-soft)]"
            >
              {siteConfig.whatsappDisplay}
            </a>
            <p className="mt-3 text-sm text-[var(--dream-text)]">{t('Belge gönderimi ve hızlı teklif')}</p>
          </div>

          <div className="rounded-[28px] border border-[rgba(223,167,69,0.16)] bg-white/88 p-7 text-center shadow-[0_18px_50px_rgba(95,89,108,0.08)]">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(223,167,69,0.12)] text-[var(--lale-gold)] shadow-inner">
              <FiMail className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-base font-semibold text-[var(--dream-dark)]">{t('E-posta')}</h3>
            <a href={`mailto:${siteConfig.email}`} className="break-all text-base font-medium text-[var(--lale-gold)]">
              {siteConfig.email}
            </a>
            <p className="mt-3 text-sm text-[var(--dream-text)]">{t('PDF ve detaylı dosya paylaşımı')}</p>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-[30px] border border-[rgba(223,167,69,0.16)] bg-white/88 p-8 shadow-[0_18px_50px_rgba(95,89,108,0.08)]">
            <h3 className="mb-4 text-xl font-serif text-[var(--dream-dark)]">{t('Detaylı İletişim Formu')}</h3>
            <p className="mx-auto mb-6 max-w-2xl leading-7 text-[var(--dream-text)]">
              {t('Tercüme edilecek belgeyi, hedef dili ve teslim beklentinizi paylaşın; size en uygun süreci birlikte oluşturalım.')}
            </p>
            <Link href="/iletisim" className="lale-gold-button">
              {t('İletişim Sayfasına Git')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
