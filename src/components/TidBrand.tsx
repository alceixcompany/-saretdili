import Image from "next/image";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
export default function TidBrand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`tid-brand ${light ? "tid-brand-light" : ""}`}
      aria-label="Best Tercümanlık"
    >
      <Image
        src="/tid/brand/best-logo.webp"
        alt="Best Tercümanlık — İşaret Dili & Tercümanlık"
        width={1341}
        height={801}
        className="tid-brand-image"
        sizes={light ? "208px" : "(max-width: 1200px) 126px, 172px"}
      />
    </Link>
  );
}
