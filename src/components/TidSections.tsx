import { Text } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import { FiArrowUpRight } from "react-icons/fi";
import { PiHandWaving, PiSealCheck, PiScales } from "react-icons/pi";
import { tidServices } from "@/lib/tid";
export function ServiceCards() {
  const icons = [PiHandWaving, PiSealCheck, PiScales];
  return (
    <div className="tid-service-grid">
      {tidServices.map((service, index) => {
        const Icon = icons[index];
        return (
          <Link
            href={`/hizmetlerimiz/${service.slug}`}
            key={service.slug}
            className={`tid-service-card tid-service-${index}`}
          >
            <div className="tid-service-top">
              <span className="tid-service-icon">
                <Icon />
              </span>
              <span className="tid-service-number">
                <Text>{"/ "}</Text>
                {service.number}
              </span>
            </div>
            <span className="tid-service-label">
              <Text>{service.label}</Text>
            </span>
            <h3>
              <Text>{service.title}</Text>
            </h3>
            <p>
              <Text>{service.description}</Text>
            </p>
            <span className="tid-card-link">
              <Text>{"Hizmeti inceleyin "}</Text>
              <FiArrowUpRight />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function TidCta() {
  return (
    <section className="tid-cta">
      <div className="tid-container">
        <div>
          <span className="tid-eyebrow">
            <Text>{"BİR İŞARETLE BAŞLAYALIM"}</Text>
          </span>
          <h2>
            <Text>{"Bir sonraki adımı"}</Text>
            <br />
            <Text>{"birlikte atalım."}</Text>
          </h2>
          <p>
            <Text>
              {
                "Tercümanlık ihtiyacınızı paylaşın, size uygun süreci planlayalım."
              }
            </Text>
          </p>
        </div>
        <Link href="/iletisim" className="tid-button tid-button-light">
          <Text>{"Bizimle İletişime Geçin "}</Text>
          <FiArrowUpRight />
        </Link>
        <span className="tid-cta-spark" aria-hidden="true">
          <Text>{"✳"}</Text>
        </span>
      </div>
    </section>
  );
}
