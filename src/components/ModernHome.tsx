import { tidImages } from "@/lib/tid-images";
import TidHero from "@/components/TidHero";
import { EditorialHome } from "@/components/EditorialContent";
import { Text } from "@/components/LanguageProvider";
import { LocalizedImage as Image } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiGlobe,
  FiMessageCircle,
  FiShield,
  FiVideo,
} from "react-icons/fi";
import { PiHandsClapping, PiHandWaving, PiSealCheck } from "react-icons/pi";
import { tidFaqs } from "@/lib/tid";
import { ServiceCards, TidCta } from "./TidSections";
import { TidSituations, TidMeetingFormats } from "./TidInformation";
const steps = [
  {
    number: "01",
    title: "İhtiyacınızı paylaşın",
    text: "Hizmet türünü, görüşme yerini ve tercih ettiğiniz tarihi bize yazın.",
    icon: FiMessageCircle,
  },
  {
    number: "02",
    title: "Birlikte planlayalım",
    text: "Tercüman uygunluğu, görüşme koşulları ve ücret bilgisi netleşsin.",
    icon: FiGlobe,
  },
  {
    number: "03",
    title: "İletişime odaklanın",
    text: "Planlanan görüşmede işaret dili tercümanınız size eşlik etsin.",
    icon: PiSealCheck,
  },
];
export default function ModernHome() {
  return (
    <main id="main-content" className="tid-site">
      <TidHero variant="home" image={tidImages.homeHero} imagePosition="center 45%">
        <div className="tid-container tid-hero-content">
          <div className="tid-hero-copy">
            <span className="tid-eyebrow">
              <span className="tid-status-dot" />
              <Text>{"İLETİŞİM HERKES İÇİN"}</Text>
            </span>
            <h1>
              <Text>{"Her işaret,"}</Text>
              <br />
              <Text>{"bir "}</Text>
              <span>
                <Text>{"köprü."}</Text>
              </span>
            </h1>
            <p>
              <Text>
                {
                  "Doğru anlaşılmakla başlar her şey. Türk İşaret Dili, yeminli tercümanlık ve noter işlemlerinde sizinle aynı dili konuşuyoruz."
                }
              </Text>
            </p>
            <div className="tid-hero-actions">
              <Link href="/iletisim" className="tid-button">
                <Text>{"Tercüman Talep Edin "}</Text>
                <FiArrowUpRight />
              </Link>
              <Link href="/hizmetlerimiz" className="tid-text-link">
                <Text>{"Hizmetleri keşfedin "}</Text>
                <FiArrowRight />
              </Link>
            </div>
            <div className="tid-hero-note">
              <span className="tid-note-icon">
                <PiHandsClapping />
              </span>
              <span>
                <Text>{"İnsan odaklı yaklaşım."}</Text>
                <br />
                <strong>
                  <Text>{"Engelsiz bir iletişim."}</Text>
                </strong>
              </span>
            </div>
          </div>
        </div>
      </TidHero>
      <section className="tid-trust-strip" aria-label="Hizmet yaklaşımımız">
        <div className="tid-container">
          <span>
            <PiHandWaving />
            <Text>{"Türk İşaret Dili"}</Text>
          </span>
          <span>
            <FiShield />
            <Text>{"Gizliliğe özen"}</Text>
          </span>
          <span>
            <FiVideo />
            <Text>{"Yüz yüze & çevrim içi"}</Text>
          </span>
          <span>
            <FiMessageCircle />
            <Text>{"Erişilebilir iletişim"}</Text>
          </span>
        </div>
      </section>
      <section className="tid-section" id="hizmetler">
        <div className="tid-container">
          <div className="tid-section-heading">
            <div>
              <span className="tid-eyebrow">
                <Text>{"HİZMETLERİMİZ"}</Text>
              </span>
              <h2>
                <Text>{"İhtiyacınıza uygun,"}</Text>
                <br />
                <span>
                  <Text>{"yanınızda bir tercüman."}</Text>
                </span>
              </h2>
            </div>
            <p>
              <Text>{"Bir görüşme, bir imza, yeni bir başlangıç."}</Text>
              <br />
              <Text>
                {"İletişime ihtiyaç duyduğunuz her adımı birlikte planlayalım."}
              </Text>
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>
      <TidSituations />
      <section className="tid-about-section">
        <div className="tid-container tid-about-grid">
          <div className="tid-about-art">
            <div className="tid-about-photo">
              <Image
                src={tidImages.homeAbout}
                alt="Karşılıklı anlayışa dayanan işaret dili görüşmesi"
                fill
                sizes="(max-width: 900px) 90vw, 40vw"
              />
            </div>
            <div className="tid-about-stamp">
              <PiHandsClapping />
              <span>
                <Text>{"İletişimde"}</Text>
                <br />
                <strong>
                  <Text>{"eşitlik."}</Text>
                </strong>
              </span>
            </div>
          </div>
          <div>
            <span className="tid-eyebrow">
              <Text>{"BİZİM YAKLAŞIMIMIZ"}</Text>
            </span>
            <h2>
              <Text>{"Sadece tercüme değil,"}</Text>
              <br />
              <span>
                <Text>{"karşılıklı anlayış."}</Text>
              </span>
            </h2>
            <p>
              <Text>
                {
                  "İletişimin merkezinde insan var. TİD olarak, işaret dilini hayatın her alanında erişilebilir bir iletişim köprüsüne dönüştürmeyi önemsiyoruz."
                }
              </Text>
            </p>
            <p>
              <Text>
                {
                  "İhtiyacınızı dinliyor, görüşmenizin koşullarını değerlendiriyor ve tüm süreci sizinle birlikte planlıyoruz."
                }
              </Text>
            </p>
            <ul className="tid-check-list">
              <li>
                <FiCheck />
                <Text>{"İhtiyacınıza göre planlanan tercümanlık"}</Text>
              </li>
              <li>
                <FiCheck />
                <Text>{"Baştan netleşen kapsam ve randevu"}</Text>
              </li>
              <li>
                <FiCheck />
                <Text>{"Yazılı iletişimle kolay talep oluşturma"}</Text>
              </li>
            </ul>
            <Link href="/hakkimizda" className="tid-text-link">
              <Text>{"TİD’yi yakından tanıyın "}</Text>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="tid-section">
        <div className="tid-container">
          <div className="tid-section-heading">
            <div>
              <span className="tid-eyebrow">
                <Text>{"NASIL ÇALIŞIYORUZ?"}</Text>
              </span>
              <h2>
                <Text>{"Üç adımda,"}</Text>
                <br />
                <span>
                  <Text>{"daha kolay iletişim."}</Text>
                </span>
              </h2>
            </div>
            <Link className="tid-text-link" href="/iletisim">
              <Text>{"İlk adımı atın "}</Text>
              <FiArrowUpRight />
            </Link>
          </div>
          <div className="tid-process-grid">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <article key={number}>
                <div className="tid-step-top">
                  <span>{number}</span>
                  <Icon />
                </div>
                <h3>
                  <Text>{title}</Text>
                </h3>
                <p>
                  <Text>{text}</Text>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TidMeetingFormats />
      <section className="tid-faq-section" id="sik-sorulan-sorular">
        <div className="tid-container tid-faq-grid">
          <div>
            <span className="tid-eyebrow">
              <Text>{"AKLINIZDAKİ SORULAR"}</Text>
            </span>
            <h2>
              <Text>{"Biraz daha"}</Text>
              <br />
              <span>
                <Text>{"netleştirelim."}</Text>
              </span>
            </h2>
            <p>
              <Text>
                {
                  "İlk kez tercümanlık hizmeti alıyor olabilirsiniz. Süreci birlikte anlaşılır hale getirelim."
                }
              </Text>
            </p>
            <Link href="/iletisim" className="tid-text-link">
              <Text>{"Başka bir sorunuz mu var? "}</Text>
              <FiArrowUpRight />
            </Link>
          </div>
          <div className="tid-faq-list">
            {tidFaqs.map(([q, a], index) => (
              <details key={q} open={index === 0}>
                <summary>
                  <Text>{q}</Text>
                  <span aria-hidden="true">
                    <Text>{"+"}</Text>
                  </span>
                </summary>
                <p>
                  <Text>{a}</Text>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <EditorialHome />
      <TidCta />
    </main>
  );
}
