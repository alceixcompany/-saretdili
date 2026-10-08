"use client";
import { tidImages } from "@/lib/tid-images";
import TidHero from "@/components/TidHero";
import { useLanguage, Text } from "@/components/LanguageProvider";
import { useState } from "react";
import { LocalizedLink as Link } from "@/components/LanguageProvider";
import {
  FiArrowUpRight,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { siteConfig } from "@/lib/seo";
import { tidServices } from "@/lib/tid";
import { useAppDispatch } from "@/store/hooks";
import { sendContactMessage } from "@/store/slices/contactSlice";

export default function TidContact({
  initialService,
}: {
  initialService: string;
}) {
  const dispatch = useAppDispatch();
  const { t } = useLanguage();
  const [service, setService] = useState(initialService);
  const [channel, setChannel] = useState("E-posta");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    const selected = tidServices.find((item) => item.slug === service)!;
    setState("sending");
    try {
      if (!navigator.onLine) throw new Error("Offline");
      await dispatch(
        sendContactMessage({
          name: String(data.get("name")).trim(),
          email: String(data.get("email")).trim(),
          phone: String(data.get("phone") || "").trim(),
          subject: `TİD — ${selected.title} talebi`,
          priority: "medium",
          message: [
            `Hizmet: ${selected.title}`,
            `Tercih edilen tarih: ${data.get("date") || "Belirtilmedi"}`,
            `Görüşme yeri / biçimi: ${data.get("location") || "Belirtilmedi"}`,
            `İletişim tercihi: ${data.get("channel")}`,
            "",
            String(data.get("message")).trim(),
            "",
            "İletişim bilgilerini bu talebe dönüş yapılması amacıyla paylaşma onayı alındı.",
          ].join("\n"),
        }),
      ).unwrap();
      setState("success");
      form.reset();
      setChannel("E-posta");
    } catch {
      setState("error");
    }
  }
  return (
    <main id="main-content" className="tid-site">
      <TidHero
        image={tidImages.contactHero}
        imagePosition="center 36%"
      >
        <div className="tid-container">
          <div className="tid-breadcrumb">
            <Link href="/">
              <Text>{"Ana Sayfa"}</Text>
            </Link>
            <span>
              <Text>{"/"}</Text>
            </span>
            <span>
              <Text>{"İletişim"}</Text>
            </span>
          </div>
          <span className="tid-eyebrow">
            <Text>{"BİR İŞARETLE BAŞLAYALIM"}</Text>
          </span>
          <h1>
            <Text>{"Sizi dinliyoruz."}</Text>
            <br />
            <Text>{"Birlikte planlayalım."}</Text>
          </h1>
          <p>
            <Text>
              {
                "Tercümanlık ihtiyacınızı bize yazın. Hizmet, tarih ve görüşme koşullarını birlikte netleştirelim."
              }
            </Text>
          </p>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container tid-contact-grid">
          <aside className="tid-contact-aside">
            <span className="tid-eyebrow">
              <Text>{"İLETİŞİM SEÇENEKLERİ"}</Text>
            </span>
            <h2>
              <Text>{"Size uygun yoldan"}</Text>
              <br />
              <Text>{"bize ulaşın."}</Text>
            </h2>
            <p>
              <Text>
                {
                  "Yazılı iletişimi tercih ediyorsanız talep formunu kullanabilir veya WhatsApp üzerinden bize yazabilirsiniz."
                }
              </Text>
            </p>
            <a className="tid-contact-method" href={`tel:${siteConfig.phone}`}>
              <FiPhone />
              <div>
                <span>
                  <Text>{"TELEFON"}</Text>
                </span>
                <strong dir="ltr">{siteConfig.phoneDisplay}</strong>
              </div>
            </a>
            <a
              className="tid-contact-method"
              href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMessageCircle />
              <div>
                <span>
                  <Text>{"WHATSAPP"}</Text>
                </span>
                <strong dir="ltr">{siteConfig.whatsappDisplay}</strong>
                <small>
                  <Text>{"Yazılı iletişim için"}</Text>
                </small>
              </div>
              <FiArrowUpRight />
            </a>
          </aside>
          <form
            className="tid-form"
            onSubmit={handleSubmit}
            aria-busy={state === "sending"}
          >
            <h2>
              <Text>{"Tercümanlık talebiniz"}</Text>
            </h2>
            <p>
              <Text>
                {
                  "Yıldız (*) işaretli alanları doldurun. Talebiniz iletildikten sonra uygunluk ve hizmet kapsamı değerlendirilir."
                }
              </Text>
            </p>
            <div className="tid-form-fields">
              <label>
                <Text>{"Adınız soyadınız *"}</Text>
                <input
                  name="name"
                  required
                  minLength={2}
                  maxLength={120}
                  autoComplete="name"
                  placeholder={t("Adınız ve soyadınız")}
                />
              </label>
              <label>
                <Text>{"E-posta adresiniz "}</Text>
                {channel === "E-posta" ? "*" : ""}
                <input
                  type="email"
                  name="email"
                  required={channel === "E-posta"}
                  maxLength={180}
                  autoComplete="email"
                  placeholder={t("ornek@eposta.com")}
                />
              </label>
              <label>
                <Text>{"Telefon / WhatsApp "}</Text>
                {channel !== "E-posta" ? "*" : ""}
                <input
                  type="tel"
                  name="phone"
                  required={channel !== "E-posta"}
                  minLength={7}
                  autoComplete="tel"
                  maxLength={30}
                  placeholder={t("Size ulaşabileceğimiz numara")}
                />
              </label>
              <label>
                <Text>{"İletişim tercihiniz *"}</Text>
                <select
                  name="channel"
                  required
                  value={channel}
                  onChange={(event) => setChannel(event.target.value)}
                >
                  <option value="E-posta">
                    <Text>{"E-posta (yazılı)"}</Text>
                  </option>
                  <option value="WhatsApp">
                    <Text>{"WhatsApp (yazılı)"}</Text>
                  </option>
                  <option value="Telefon">
                    <Text>{"Telefon"}</Text>
                  </option>
                </select>
              </label>
              <label>
                <Text>{"İhtiyacınız olan hizmet *"}</Text>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {tidServices.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      <Text>{item.title}</Text>
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <Text>{"Tercih ettiğiniz tarih"}</Text>
                <input type="date" name="date" />
              </label>
              <label className="tid-form-wide">
                <Text>{"Görüşme yeri veya biçimi"}</Text>
                <input
                  name="location"
                  maxLength={200}
                  placeholder={t(
                    "Şehir, kurum / noterlik ya da çevrim içi görüşme",
                  )}
                />
              </label>
              <label className="tid-form-wide">
                <Text>{"Talebinizin detayları *"}</Text>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={4}
                  placeholder={t(
                    "Görüşmenin konusu, tahmini süresi ve ihtiyaçlarınız…",
                  )}
                />
              </label>
              <div hidden aria-hidden="true">
                <label>
                  <Text>{"Web sitesi"}</Text>
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <label className="tid-consent tid-form-wide">
                <input type="checkbox" name="consent" required />
                <span>
                  <Text>
                    {
                      "Paylaştığım iletişim bilgilerinin bu talebime dönüş yapılması amacıyla kullanılmasını kabul ediyorum. *"
                    }
                  </Text>
                </span>
              </label>
              <button
                type="submit"
                className="tid-button tid-form-wide"
                disabled={state === "sending"}
              >
                <Text>
                  {state === "sending"
                    ? "Talebiniz iletiliyor…"
                    : "Talebimi Gönder"}
                </Text>
                <FiSend />
              </button>
            </div>
            {state === "success" && (
              <div className="tid-form-status success" role="status">
                <Text>
                  {
                    "Talebiniz alındı. Seçtiğiniz iletişim kanalı üzerinden dönüş yapılması için kaydedildi. Bu talep, kesinleşmiş bir randevu değildir."
                  }
                </Text>
              </div>
            )}
            {state === "error" && (
              <div className="tid-form-status error" role="alert">
                <Text>
                  {
                    "Talebiniz gönderilemedi. Lütfen bağlantınızı kontrol edip yeniden deneyin. Bilgileriniz formda korunuyor."
                  }
                </Text>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
