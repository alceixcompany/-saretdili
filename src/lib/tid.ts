import { tidImages } from "./tid-images";
export const tidServices = [
  {
    slug: "turk-isaret-dili",
    number: "01",
    title: "Türk İşaret Dili",
    shortTitle: "TİD Tercümanlığı",
    label: "İLETİŞİME ALAN AÇIN",
    description:
      "Günlük görüşmelerden kurumsal etkinliklere, Türk İşaret Dili ile anlaşılır ve erişilebilir iletişim.",
    detail:
      "Görüşmenizin konusu, yeri, tarihi ve süresine göre işaret dili tercümanlığı planlanır. Yüz yüze veya çevrim içi görüşmeler için ihtiyacınızı birlikte netleştiririz.",
    highlights: [
      "Bireysel ve kurumsal görüşmeler",
      "Etkinlik ve toplantılar",
      "Yüz yüze veya çevrim içi destek",
    ],
    image: tidImages.signDetail,
    heroImage: tidImages.signHero,
  },
  {
    slug: "yeminli-tercuman",
    number: "02",
    title: "Yeminli Tercüman",
    shortTitle: "Yeminli Tercüman",
    label: "ÖZENLİ, PLANLI DESTEK",
    description:
      "Resmî görüşmelerinizde ihtiyaca uygun tercüman desteği ve baştan netleşen bir süreç.",
    detail:
      "İşlemin yapılacağı kurum, görüşmenin içeriği ve gerekli belgeler önceden değerlendirilir. Kurumun tercüman ve belge koşulları doğrultusunda uygun hizmet planı paylaşılır.",
    highlights: [
      "İşlem öncesi ihtiyaç değerlendirmesi",
      "Kurum koşullarına göre planlama",
      "Randevu ve belge koordinasyonu",
    ],
    image: tidImages.swornDetail,
    heroImage: tidImages.swornHero,
  },
  {
    slug: "isaret-dili-noter",
    number: "03",
    title: "İşaret Dili Noter",
    shortTitle: "Noter İşlemleri",
    label: "HER ADIMDA ANLAŞILIN",
    description:
      "Noter görüşmelerinde işaret dili tercümanlığı; randevu öncesinden işlem gününe kadar koordinasyon.",
    detail:
      "Yapılacak işlemi, noterliği ve randevu tarihini paylaşın. İlgili noterliğin tercüman ve belge koşulları görüşme öncesinde teyit edilerek işaret dili tercümanlığı planlansın.",
    highlights: [
      "Noter randevusuna göre organizasyon",
      "İşlem öncesi belge ve koşul kontrolü",
      "Görüşmede işaret dili tercümanlığı",
    ],
    image: tidImages.notaryDetail,
    heroImage: tidImages.notaryHero,
  },
] as const;
export const tidFaqs = [
  [
    "Türk İşaret Dili tercümanı için nasıl randevu alırım?",
    "İletişim formundan hizmeti seçerek görüşmenizin tarihini, yerini ve konusunu paylaşabilirsiniz. Talebiniz değerlendirildikten sonra uygunluk ve ücret bilgisi sizinle netleştirilir.",
  ],
  [
    "Noter işlemi öncesinde hangi bilgileri paylaşmalıyım?",
    "Yapılacak işlemi, tercih ettiğiniz noterliği ve randevu tarihini belirtin. Gerekli belgeler ve tercüman koşulları ilgili noterlikle işlem öncesinde teyit edilmelidir.",
  ],
  [
    "Çevrim içi tercümanlık talep edebilir miyim?",
    "Evet, çevrim içi görüşme için talep oluşturabilirsiniz. Platform, görüşme süresi, katılımcılar ve görüntü koşulları değerlendirilerek hizmetin uygunluğu belirlenir.",
  ],
  [
    "Hizmet ücreti nasıl belirlenir?",
    "Ücret; hizmet türüne, görüşmenin süresine, konumuna ve ihtiyaç duyulan hazırlığa göre belirlenir. Randevu kesinleşmeden önce kapsam ve ücret paylaşılır.",
  ],
] as const;
