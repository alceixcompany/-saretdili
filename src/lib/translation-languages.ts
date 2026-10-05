export type TranslationLanguage = {
  slug: string;
  name: string;
  nativeName: string;
  flag: string;
};

export const translationLanguages: readonly TranslationLanguage[] = [
  { slug: 'ingilizce-tercume', name: 'İngilizce', nativeName: 'English', flag: '🇬🇧' },
  { slug: 'almanca-tercume', name: 'Almanca', nativeName: 'Deutsch', flag: '🇩🇪' },
  { slug: 'fransizca-tercume', name: 'Fransızca', nativeName: 'Français', flag: '🇫🇷' },
  { slug: 'arapca-tercume', name: 'Arapça', nativeName: 'العربية', flag: '🇸🇦' },
  { slug: 'cince-tercume', name: 'Çince', nativeName: '中文', flag: '🇨🇳' },
  { slug: 'hollandaca-tercume', name: 'Hollandaca', nativeName: 'Nederlands', flag: '🇳🇱' },
  { slug: 'ispanyolca-tercume', name: 'İspanyolca', nativeName: 'Español', flag: '🇪🇸' },
  { slug: 'italyanca-tercume', name: 'İtalyanca', nativeName: 'Italiano', flag: '🇮🇹' },
  { slug: 'hintce-tercume', name: 'Hintçe', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { slug: 'japonca-tercume', name: 'Japonca', nativeName: '日本語', flag: '🇯🇵' },
  { slug: 'ibranice-tercume', name: 'İbranice', nativeName: 'עברית', flag: '🇮🇱' },
  { slug: 'portekizce-tercume', name: 'Portekizce', nativeName: 'Português', flag: '🇵🇹' },
  { slug: 'rusca-tercume', name: 'Rusça', nativeName: 'Русский', flag: '🇷🇺' },
  { slug: 'korece-tercume', name: 'Korece', nativeName: '한국어', flag: '🇰🇷' },
  { slug: 'lehce-tercume', name: 'Lehçe', nativeName: 'Polski', flag: '🇵🇱' },
  { slug: 'ozbekce-tercume', name: 'Özbekçe', nativeName: "O‘zbekcha", flag: '🇺🇿' },
  { slug: 'sirpca-tercume', name: 'Sırpça', nativeName: 'Српски', flag: '🇷🇸' },
  { slug: 'yunanca-tercume', name: 'Yunanca', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  { slug: 'azerice-tercume', name: 'Azerice', nativeName: 'Azərbaycan dili', flag: '🇦🇿' },
  { slug: 'cekce-tercume', name: 'Çekçe', nativeName: 'Čeština', flag: '🇨🇿' },
];

export function getTranslationLanguage(slug: string) {
  return translationLanguages.find((language) => language.slug === slug);
}
