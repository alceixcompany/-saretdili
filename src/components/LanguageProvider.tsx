"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import {
  defaultLocale,
  isLocale,
  localeMeta,
  locales,
  translate,
  type Locale,
} from "@/lib/tid-i18n";

const LanguageContext = createContext({
  locale: defaultLocale as Locale,
  setLocale,
  t: (value: string) => value,
});
const eventName = "tid-language-change";
function readLocale(): Locale {
  const value = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith("tid-locale="))
    ?.split("=")[1];
  return isLocale(value) ? value : defaultLocale;
}
function subscribe(callback: () => void) {
  window.addEventListener(eventName, callback);
  return () => window.removeEventListener(eventName, callback);
}
function setLocale(locale: Locale) {
  document.cookie = `tid-locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  window.dispatchEvent(new Event(eventName));
}
export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const pathname = usePathname();
  const selected = useSyncExternalStore(
    subscribe,
    readLocale,
    () => initialLocale,
  );
  const locale = pathname.startsWith("/admin") ? defaultLocale : selected;
  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
    document.documentElement.dir = localeMeta[locale].dir;
  }, [locale]);
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (value: string) => translate(value, locale),
    }),
    [locale],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
export function Text({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return <>{typeof children === "string" ? t(children) : children}</>;
}
export function LocalizedImage(props: ComponentProps<typeof Image>) {
  const { t } = useLanguage();
  return <Image {...props} alt={t(props.alt)} />;
}
export function LocalizedLink(props: ComponentProps<typeof Link>) {
  const { t } = useLanguage();
  return (
    <Link
      {...props}
      aria-label={props["aria-label"] ? t(props["aria-label"]) : undefined}
      title={props.title ? t(props.title) : undefined}
    />
  );
}
export function LanguageSelect({
  compact = false,
  inverse = false,
}: {
  compact?: boolean;
  inverse?: boolean;
}) {
  const { locale, setLocale, t } = useLanguage();
  return (
    <label
      className={`tid-language ${compact ? "is-compact" : ""} ${inverse ? "is-inverse" : ""}`}
    >
      <span aria-hidden="true">◎</span>
      <select
        aria-label={t("Dil seçimi")}
        value={locale}
        onChange={(event) => {
          if (isLocale(event.target.value)) setLocale(event.target.value);
        }}
      >
        {locales.map((value) => (
          <option lang={value} key={value} value={value}>
            {localeMeta[value].nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
