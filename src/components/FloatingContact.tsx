"use client";
import { Text } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import { usePathname } from "next/navigation";
import { FiMessageCircle } from "react-icons/fi";
export default function FloatingContact() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname === "/iletisim") return null;
  return (
    <Link
      href="/iletisim"
      className="tid-floating"
      aria-label="Yazılı iletişim ve randevu talebi"
    >
      <FiMessageCircle />
      <span>
        <Text>{"Bize yazın"}</Text>
      </span>
    </Link>
  );
}
