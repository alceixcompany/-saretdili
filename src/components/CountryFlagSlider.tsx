import React from 'react';

const flagRows = [
  [
    { flag: '🇹🇷', name: 'Türkiye' },
    { flag: '🇦🇿', name: 'Azerbaycan' },
    { flag: '🇺🇸', name: 'Amerika' },
    { flag: '🇬🇧', name: 'İngiltere' },
    { flag: '🇩🇪', name: 'Almanya' },
    { flag: '🇫🇷', name: 'Fransa' },
    { flag: '🇮🇹', name: 'İtalya' },
    { flag: '🇪🇸', name: 'İspanya' },
    { flag: '🇵🇹', name: 'Portekiz' },
    { flag: '🇳🇱', name: 'Hollanda' },
    { flag: '🇧🇪', name: 'Belçika' },
    { flag: '🇨🇭', name: 'İsviçre' },
    { flag: '🇦🇹', name: 'Avusturya' },
    { flag: '🇸🇪', name: 'İsveç' },
    { flag: '🇳🇴', name: 'Norveç' },
    { flag: '🇩🇰', name: 'Danimarka' },
    { flag: '🇫🇮', name: 'Finlandiya' },
    { flag: '🇵🇱', name: 'Polonya' },
    { flag: '🇨🇿', name: 'Çekya' },
    { flag: '🇭🇺', name: 'Macaristan' },
    { flag: '🇷🇴', name: 'Romanya' },
    { flag: '🇧🇬', name: 'Bulgaristan' },
    { flag: '🇬🇷', name: 'Yunanistan' },
    { flag: '🇨🇾', name: 'Kıbrıs' },
  ],
  [
    { flag: '🇷🇺', name: 'Rusya' },
    { flag: '🇺🇦', name: 'Ukrayna' },
    { flag: '🇬🇪', name: 'Gürcistan' },
    { flag: '🇰🇿', name: 'Kazakistan' },
    { flag: '🇺🇿', name: 'Özbekistan' },
    { flag: '🇮🇷', name: 'İran' },
    { flag: '🇮🇶', name: 'Irak' },
    { flag: '🇸🇦', name: 'Suudi Arabistan' },
    { flag: '🇦🇪', name: 'BAE' },
    { flag: '🇶🇦', name: 'Katar' },
    { flag: '🇮🇱', name: 'İsrail' },
    { flag: '🇪🇬', name: 'Mısır' },
    { flag: '🇲🇦', name: 'Fas' },
    { flag: '🇨🇳', name: 'Çin' },
    { flag: '🇯🇵', name: 'Japonya' },
    { flag: '🇰🇷', name: 'Güney Kore' },
    { flag: '🇮🇳', name: 'Hindistan' },
    { flag: '🇵🇰', name: 'Pakistan' },
    { flag: '🇨🇦', name: 'Kanada' },
    { flag: '🇧🇷', name: 'Brezilya' },
    { flag: '🇦🇷', name: 'Arjantin' },
    { flag: '🇲🇽', name: 'Meksika' },
    { flag: '🇦🇺', name: 'Avustralya' },
    { flag: '🇿🇦', name: 'Güney Afrika' },
  ],
];

interface CountryFlagSliderProps {
  compact?: boolean;
}

const CountryFlagSlider = ({ compact = false }: CountryFlagSliderProps) => {
  return (
    <section className={`lale-light-section ${compact ? 'py-14 sm:py-16' : 'py-16 sm:py-20'}`}>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="lale-kicker">Global Hizmet</div>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-[var(--dream-dark)] sm:text-4xl">
              Tüm ülkelere yönelik resmi evrak tercüme desteği
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[var(--dream-text)] sm:text-base">
            Başvuru, vize, eğitim, ikamet ve noter süreçleri için farklı ülkelerin belge formatlarına uygun çalışıyoruz.
          </p>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[rgba(195,149,58,0.18)] bg-white/78 py-4 shadow-[0_18px_52px_rgba(17,17,17,0.06)] backdrop-blur">
          {flagRows.map((row, index) => {
            const repeatedRow = [...row, ...row];

            return (
              <div
                key={index}
                className={`country-flag-track flex w-max gap-3 py-2 ${index === 1 ? 'country-flag-track-reverse' : ''}`}
                aria-label={index === 0 ? 'Ülke bayrakları' : undefined}
              >
                {repeatedRow.map((country, countryIndex) => (
                  <span
                    key={`${country.name}-${countryIndex}`}
                    className="inline-flex min-w-[118px] items-center justify-center gap-2 rounded-full border border-[rgba(195,149,58,0.14)] bg-[rgba(255,250,240,0.92)] px-4 py-2 text-sm font-medium text-[var(--dream-dark)] shadow-[0_10px_24px_rgba(17,17,17,0.04)]"
                  >
                    <span className="text-xl leading-none" aria-hidden="true">{country.flag}</span>
                    <span>{country.name}</span>
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountryFlagSlider;
