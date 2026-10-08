"use client";
import { Text } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import { usePathname } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import TidBrand from "./TidBrand";
import { siteConfig } from "@/lib/seo";
import { tidServices } from "@/lib/tid";
export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="tid-footer">
      <div className="tid-container">
        <div className="tid-footer-grid">
          <div>
            <TidBrand light />
            <p>
              <Text>
                {
                  "İletişimin önündeki engelleri birlikte aşalım. Türk İşaret Dili ve tercümanlık hizmetleriyle yanınızdayız."
                }
              </Text>
            </p>
            <span className="tid-footer-tag">
              <Text>{"Anlaşılmak herkesin hakkı."}</Text>
            </span>
          </div>
          <div>
            <h2>
              <Text>{"Keşfedin"}</Text>
            </h2>
            <Link href="/hakkimizda">
              <Text>{"Hakkımızda"}</Text>
            </Link>
            <Link href="/hizmetlerimiz">
              <Text>{"Hizmetlerimiz"}</Text>
            </Link>
            <Link href="/#sik-sorulan-sorular">
              <Text>{"Sık sorulan sorular"}</Text>
            </Link>
            <Link href="/haberler">
              <Text>Haberler</Text>
            </Link>
            <Link href="/blog">
              <Text>Blog</Text>
            </Link>
            <Link href="/iletisim">
              <Text>{"İletişim"}</Text>
            </Link>
          </div>
          <div>
            <h2>
              <Text>{"Hizmetlerimiz"}</Text>
            </h2>
            {tidServices.map((service) => (
              <Link key={service.slug} href={`/hizmetlerimiz/${service.slug}`}>
                <Text>{service.title}</Text>
              </Link>
            ))}
          </div>
          <div>
            <h2>
              <Text>{"Birlikte planlayalım"}</Text>
            </h2>
            <p>
              <Text>{"TELEFON"}</Text>
            </p>
            <a className="tid-footer-phone" href={`tel:${siteConfig.phone}`} dir="ltr">
              {siteConfig.phoneDisplay} <FiArrowUpRight />
            </a>
            <p>
              WhatsApp
            </p>
            <a
              className="tid-footer-phone"
              href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
            >
              {siteConfig.whatsappDisplay} <FiArrowUpRight />
            </a>
            <Link href="/iletisim" className="tid-text-link">
              <Text>{"Yazılı talep oluşturun "}</Text>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="tid-footer-bottom">
          <span>
            <Text>{"© "}</Text>
            {new Date().getFullYear()}
            <Text>{" TİD. Tüm hakları saklıdır."}</Text>
          </span>
          <span>
            <Text>
              {"Türk İşaret Dili · Yeminli Tercüman · Noter İşlemleri"}
            </Text>
          </span>
        </div>
      </div>
    </footer>
  );
}
