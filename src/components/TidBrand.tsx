import { Text } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
export default function TidBrand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`tid-brand ${light ? "tid-brand-light" : ""}`}
      aria-label="TİD ana sayfa"
    >
      <span className="tid-brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="tid-brand-name">
        <Text>{"TİD"}</Text>
        <span>
          <Text>{"İŞARET DİLİ & TERCÜMANLIK"}</Text>
        </span>
      </span>
    </Link>
  );
}
