import Image from "next/image";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
export default function TidBrand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`tid-brand ${light ? "tid-brand-light" : ""}`}
      aria-label="El Ele Tercümanlık"
    >
      <Image
        src="/tid/brand/elele-logo-horizontal.webp"
        alt="El Ele Tercümanlık — İşaret Dili & Tercümanlık"
        width={1710}
        height={768}
        className="tid-brand-image"
        sizes={light ? "252px" : "(max-width: 1200px) 176px, 220px"}
      />
    </Link>
  );
}
