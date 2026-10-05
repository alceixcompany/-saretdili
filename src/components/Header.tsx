"use client";
import {
  LanguageSelect,
  useLanguage,
  Text,
} from "@/components/LanguageProvider";
import { useEffect, useRef, useState } from "react";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import { usePathname } from "next/navigation";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import TidBrand from "./TidBrand";
const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/haberler", label: "Haberler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];
export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    navigation.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const elements = [
          toggle.current,
          ...Array.from(
            navigation.current?.querySelectorAll<HTMLElement>("a, select") ||
              [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = elements[0],
          last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const desktop = window.matchMedia("(min-width: 1201px)");
    const onResize = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  if (pathname.startsWith("/admin")) return null;
  return (
    <>
      <a className="tid-skip" href="#main-content">
        <Text>{"İçeriğe geç"}</Text>
      </a>
      <header className="tid-header">
        <div className="tid-container tid-header-inner">
          <TidBrand />
          <button
            ref={toggle}
            className="tid-menu-toggle"
            aria-label={t(open ? "Menüyü kapat" : "Menüyü aç")}
            aria-expanded={open}
            aria-controls="tid-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
          <nav
            ref={navigation}
            id="tid-navigation"
            className={`tid-nav ${open ? "is-open" : ""}`}
            aria-label={t("Ana menü")}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "is-active" : ""}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <Text>{link.label}</Text>
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="tid-button tid-button-small"
              onClick={() => setOpen(false)}
            >
              <Text>{"Randevu Oluştur "}</Text>
              <FiArrowUpRight />
            </Link>
            <LanguageSelect />
          </nav>
        </div>
      </header>
    </>
  );
}
