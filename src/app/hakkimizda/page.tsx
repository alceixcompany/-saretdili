import { tidImages } from "@/lib/tid-images";
import TidHero from "@/components/TidHero";
import { Text } from "@/components/LanguageProvider";
import { LocalizedImage as Image } from "@/components/LanguageProvider";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import { FiHeart, FiMessageCircle, FiCheckCircle } from "react-icons/fi";
import { TidCta } from "@/components/TidSections";
import { createSeoMetadata } from "@/lib/seo";
import { getRequestSiteConfig } from "@/lib/server-seo";
export async function generateMetadata() {
  const site = await getRequestSiteConfig();
  return createSeoMetadata({
    title: "Hakkımızda",
    description:
      "TİD’nin insan odaklı Türk İşaret Dili ve tercümanlık yaklaşımını tanıyın. Anlaşılır ve erişilebilir iletişim için birlikte planlayalım.",
    path: "/hakkimizda",
    site,
  });
}
const values = [
  {
    icon: FiHeart,
    title: "İnsan odaklı",
    text: "Her görüşmenin arkasında bir insan, bir ihtiyaç ve bir hikâye var. Süreci sizi dinleyerek başlatıyoruz.",
  },
  {
    icon: FiMessageCircle,
    title: "Erişilebilir iletişim",
    text: "Yazılı iletişim ve anlaşılır içerikle ihtiyaçlarınızı kolayca paylaşabileceğiniz bir alan sunuyoruz.",
  },
  {
    icon: FiCheckCircle,
    title: "Açık ve planlı",
    text: "Hizmet kapsamını, görüşme koşullarını ve randevu planını baştan birlikte netleştiriyoruz.",
  },
];
export default function AboutPage() {
  return (
    <main id="main-content" className="tid-site">
      <TidHero image={tidImages.aboutHero}>
        <div className="tid-container">
          <div className="tid-breadcrumb">
            <Link href="/">
              <Text>{"Ana Sayfa"}</Text>
            </Link>
            <span>
              <Text>{"/"}</Text>
            </span>
            <span>
              <Text>{"Hakkımızda"}</Text>
            </span>
          </div>
          <span className="tid-eyebrow">
            <Text>{"TİD’Yİ TANIYIN"}</Text>
          </span>
          <h1>
            <Text>{"Anlaşılmak,"}</Text>
            <br />
            <Text>{"herkesin hakkı."}</Text>
          </h1>
          <p>
            <Text>
              {
                "İşaretlerin, sözcüklerin ve insanların arasında bağ kuruyoruz. Daha erişilebilir bir iletişim için yanınızdayız."
              }
            </Text>
          </p>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container tid-detail-grid">
          <div className="tid-detail-photo">
            <Image
              src={tidImages.aboutStory}
              alt="İşaret diliyle karşılıklı iletişim"
              fill
              sizes="(max-width: 680px) 90vw, 45vw"
            />
          </div>
          <div>
            <span className="tid-eyebrow">
              <Text>{"ORTAK BİR ANLAYIŞ"}</Text>
            </span>
            <h2>
              <Text>{"İletişimin merkezinde"}</Text>
              <br />
              <span>
                <Text>{"insan var."}</Text>
              </span>
            </h2>
            <p>
              <Text>
                {
                  "TİD; Türk İşaret Dili tercümanlığı, yeminli tercüman ve noter işlemlerinde işaret dili desteğini aynı çatı altında buluşturan bir hizmet yaklaşımıdır."
                }
              </Text>
            </p>
            <p>
              <Text>
                {
                  "Günlük görüşmelerden resmî işlemlere kadar her ihtiyacı kendi koşullarıyla değerlendiriyoruz. Amacımız, kendinizi ifade edebildiğiniz ve sürecin her adımını anlayabildiğiniz bir iletişim ortamı oluşturmak."
                }
              </Text>
            </p>
          </div>
        </div>
      </section>
      <section className="tid-section tid-about-section">
        <div className="tid-container tid-value-grid">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon />
              <h3>
                <Text>{title}</Text>
              </h3>
              <p>
                <Text>{text}</Text>
              </p>
            </article>
          ))}
        </div>
      </section>
      <TidCta />
    </main>
  );
}
