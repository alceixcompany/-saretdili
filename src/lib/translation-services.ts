import { tidServices } from './tid';

export type TranslationService = {
  slug: string;
  title: string;
  description: string;
  highlights: readonly string[];
  image: string;
};

const legacySlugs = ["acil-tercume", "ardil-tercume", "akademik-tercume", "desifre", "ekonomi-ve-finans-tercume", "hukuki-tercume", "noter-onayli-tercume", "redaksiyon", "simultane-tercume", "sozlu-tercume", "teknik-tercume", "tibbi-tercume", "yazili-tercume", "yeminli-tercume", "kurumsal-tercume", "web-site-tercume", "apostil-onayi", "patent-tercume", "pasaport-tercumesi", "diploma-transkript-tercumesi", "vize-evraklari-tercumesi"] as const;

export const translationServices: readonly TranslationService[] = tidServices;

export function getTranslationService(slug: string) {
  return translationServices.find((service) => service.slug === slug) || (legacySlugs.some((value) => value === slug)
    ? { ...tidServices[slug.includes("noter") ? 2 : 1], slug }
    : undefined);
}
