'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const faqs = [
  {
    question: 'Tercüme için belgeyi nasıl gönderebilirim?',
    answer:
      'Belgenizi WhatsApp veya e-posta üzerinden net bir fotoğraf ya da PDF olarak iletebilirsiniz. Evrak türü incelendikten sonra süre ve ücret bilgisi paylaşılır.',
  },
  {
    question: 'Pasaport tercümesi ne kadar sürede hazırlanır?',
    answer:
      'Belgenin durumuna ve yoğunluğa göre değişir. Standart pasaport ve kimlik evraklarında mümkün olan en hızlı teslim planı sunulur.',
  },
  {
    question: 'Noter onaylı tercüme yapıyor musunuz?',
    answer:
      'Evet. Noter onayı gerektiren belgelerde tercüme formatı ve onay süreci için size doğru yönlendirme yapılır.',
  },
  {
    question: 'Hangi dillerde tercüme hizmeti veriyorsunuz?',
    answer:
      'İngilizce, Arapça, Farsça, Fransızca ve Rusça başta olmak üzere farklı dillerde belge tercümesi için destek alabilirsiniz.',
  },
  {
    question: 'Vize başvurusu için hangi belgeler tercüme edilir?',
    answer:
      'Pasaport, nüfus kayıt örneği, diploma, transkript, banka evrakı, iş evrakı ve konsolosluğun talep ettiği diğer resmi belgeler çevrilebilir.',
  },
  {
    question: 'Fiyat nasıl belirlenir?',
    answer:
      'Belgenin dili, sayfa sayısı, teslim süresi ve noter onayı gerekip gerekmediği fiyatı etkiler. En doğru teklif için belge örneği paylaşmanız yeterlidir.',
  },
] as const;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="lale-light-section py-24 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="lale-kicker">
            <FiHelpCircle className="h-4 w-4" />
            SIK SORULAN SORULAR
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-tight text-[var(--dream-dark)] sm:text-4xl">
            Aklınıza takılan sorular için
            <span className="block text-[var(--lale-gold)]">kısa ve net yanıtlar</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--dream-text)] sm:text-base">
            Evrak gönderimi, teslim süresi, noter onayı ve dil seçenekleriyle ilgili
            en çok merak edilen konuları sizin için bir araya getirdik.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[26px] border bg-white/88 shadow-[0_18px_50px_rgba(95,89,108,0.10)] transition-all duration-300 ${
                  isActive ? 'border-[rgba(223,167,69,0.48)]' : 'border-[rgba(223,167,69,0.18)]'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                >
                  <h3 className="text-sm font-medium leading-7 text-[var(--dream-dark)] sm:text-base">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[var(--lale-gold)] bg-[rgba(223,167,69,0.12)] text-[var(--lale-gold)]'
                        : 'border-[rgba(223,167,69,0.18)] bg-[rgba(247,240,242,0.72)] text-[var(--dream-text)]'
                    }`}
                  >
                    <FiChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <div className={`grid transition-all duration-300 ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-[rgba(223,167,69,0.12)] px-5 pb-5 pt-4 sm:px-7">
                      <p className="max-w-4xl text-sm leading-7 text-[var(--dream-text)]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
