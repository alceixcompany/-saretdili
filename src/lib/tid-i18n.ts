import { translate as legacyTranslate } from "./i18n";
export const locales = ["tr", "en", "de", "ar", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";
export const localeMeta = {
  tr: { nativeLabel: "Türkçe", dir: "ltr", htmlLang: "tr" },
  en: { nativeLabel: "English", dir: "ltr", htmlLang: "en" },
  de: { nativeLabel: "Deutsch", dir: "ltr", htmlLang: "de" },
  ar: { nativeLabel: "العربية", dir: "rtl", htmlLang: "ar" },
  ru: { nativeLabel: "Русский", dir: "ltr", htmlLang: "ru" },
} as const;
export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && locales.some((locale) => locale === value)
  );
}
// Each row contains English, German, Arabic and Russian; Turkish is the source.
export const tidTranslations: Record<
  string,
  readonly [string, string, string, string]
> = {
  "TİD Tercümanlığı": [
    "TİD Interpreting",
    "TİD Dolmetschen",
    "ترجمة TİD",
    "Перевод TİD",
  ],
  "Noter İşlemleri": [
    "Notarial Appointments",
    "Notartermine",
    "المعاملات لدى كاتب العدل",
    "Нотариальные процедуры",
  ],
  "İhtiyacınızı paylaşın": [
    "Share your needs",
    "Teilen Sie Ihren Bedarf mit",
    "أخبرونا باحتياجاتكم",
    "Расскажите о ваших потребностях",
  ],
  "Hizmet türünü, görüşme yerini ve tercih ettiğiniz tarihi bize yazın.": [
    "Tell us the service, meeting location and preferred date.",
    "Nennen Sie uns die Leistung, den Ort und Ihren Wunschtermin.",
    "اكتبوا لنا نوع الخدمة ومكان اللقاء والتاريخ المفضل.",
    "Укажите услугу, место встречи и желаемую дату.",
  ],
  "Birlikte planlayalım": [
    "Let’s plan together",
    "Planen wir gemeinsam",
    "لنخطط معاً",
    "Спланируем вместе",
  ],
  "Tercüman uygunluğu, görüşme koşulları ve ücret bilgisi netleşsin.": [
    "We confirm interpreter availability, meeting arrangements and fees.",
    "Wir klären Verfügbarkeit, Gesprächsbedingungen und Kosten.",
    "نوضح توفر المترجم وترتيبات اللقاء والتكلفة.",
    "Уточним доступность переводчика, условия встречи и стоимость.",
  ],
  "İletişime odaklanın": [
    "Focus on communication",
    "Konzentrieren Sie sich auf das Gespräch",
    "ركزوا على التواصل",
    "Сосредоточьтесь на общении",
  ],
  "Planlanan görüşmede işaret dili tercümanınız size eşlik etsin.": [
    "Your sign language interpreter accompanies you at the scheduled meeting.",
    "Ihr Gebärdensprachdolmetscher begleitet Sie zum geplanten Gespräch.",
    "يرافقكم مترجم لغة الإشارة في اللقاء المتفق عليه.",
    "Переводчик жестового языка сопровождает вас на запланированной встрече.",
  ],
  "İLETİŞİM HERKES İÇİN": [
    "COMMUNICATION FOR EVERYONE",
    "KOMMUNIKATION FÜR ALLE",
    "التواصل للجميع",
    "ОБЩЕНИЕ ДЛЯ КАЖДОГО",
  ],
  "Her işaret,": [
    "Every sign,",
    "Jedes Zeichen,",
    "كل إشارة،",
    "Каждый жест —",
  ],
  bir: ["a", "eine", "هي", "это"],
  "köprü.": ["bridge.", "Brücke.", "جسر.", "мост."],
  "Doğru anlaşılmakla başlar her şey. Türk İşaret Dili, yeminli tercümanlık ve noter işlemlerinde sizinle aynı dili konuşuyoruz.":
    [
      "It all starts with being understood. We support you with Turkish Sign Language, sworn interpreting and notarial appointments.",
      "Alles beginnt damit, verstanden zu werden. Wir unterstützen Sie mit türkischer Gebärdensprache, beeidigtem Dolmetschen und bei Notarterminen.",
      "كل شيء يبدأ بالتفاهم. ندعمكم بلغة الإشارة التركية والترجمة المحلفة وفي المعاملات لدى كاتب العدل.",
      "Всё начинается с понимания. Мы помогаем с турецким жестовым языком, присяжным переводом и нотариальными процедурами.",
    ],
  "Tercüman Talep Edin": [
    "Request an Interpreter",
    "Dolmetscher anfragen",
    "اطلبوا مترجماً",
    "Заказать переводчика",
  ],
  "Hizmetleri keşfedin": [
    "Explore services",
    "Leistungen entdecken",
    "اكتشفوا الخدمات",
    "Посмотреть услуги",
  ],
  "İnsan odaklı yaklaşım.": [
    "A people-first approach.",
    "Der Mensch im Mittelpunkt.",
    "نهج يركز على الإنسان.",
    "Человек в центре внимания.",
  ],
  "Engelsiz bir iletişim.": [
    "Communication without barriers.",
    "Kommunikation ohne Barrieren.",
    "تواصل بلا حواجز.",
    "Общение без барьеров.",
  ],
  "İşaret diliyle iletişim kuran iki kişi": [
    "Two people communicating in sign language",
    "Zwei Menschen im Gebärdensprachgespräch",
    "شخصان يتواصلان بلغة الإشارة",
    "Два человека общаются на жестовом языке",
  ],
  "Sözlerin ötesinde,": [
    "Beyond words,",
    "Über Worte hinaus,",
    "ما وراء الكلمات،",
    "За пределами слов,",
  ],
  "birbirimizi anlıyoruz.": [
    "we understand each other.",
    "verstehen wir einander.",
    "نفهم بعضنا البعض.",
    "мы понимаем друг друга.",
  ],
  "BAĞ KURAN İLETİŞİM": [
    "COMMUNICATION THAT CONNECTS",
    "KOMMUNIKATION, DIE VERBINDET",
    "تواصل يصنع الروابط",
    "ОБЩЕНИЕ, КОТОРОЕ ОБЪЕДИНЯЕТ",
  ],
  "Hizmet yaklaşımımız": [
    "Our approach",
    "Unser Ansatz",
    "نهجنا في الخدمة",
    "Наш подход",
  ],
  "Türk İşaret Dili": [
    "Turkish Sign Language",
    "Türkische Gebärdensprache",
    "لغة الإشارة التركية",
    "Турецкий жестовый язык",
  ],
  "Gizliliğe özen": [
    "Respect for privacy",
    "Vertraulichkeit",
    "الاهتمام بالخصوصية",
    "Забота о конфиденциальности",
  ],
  "Yüz yüze & çevrim içi": [
    "In person & online",
    "Vor Ort & online",
    "حضوري وعن بُعد",
    "Очно и онлайн",
  ],
  "Erişilebilir iletişim": [
    "Accessible communication",
    "Barrierefreie Kommunikation",
    "تواصل ميسّر",
    "Доступное общение",
  ],
  HİZMETLERİMİZ: [
    "OUR SERVICES",
    "UNSERE LEISTUNGEN",
    "خدماتنا",
    "НАШИ УСЛУГИ",
  ],
  "İhtiyacınıza uygun,": [
    "For your needs,",
    "Passend zu Ihrem Bedarf,",
    "حسب احتياجاتكم،",
    "Для ваших потребностей —",
  ],
  "yanınızda bir tercüman.": [
    "an interpreter by your side.",
    "ein Dolmetscher an Ihrer Seite.",
    "مترجم إلى جانبكم.",
    "переводчик рядом.",
  ],
  "Bir görüşme, bir imza, yeni bir başlangıç.": [
    "A meeting, a signature, a new beginning.",
    "Ein Gespräch, eine Unterschrift, ein neuer Anfang.",
    "لقاء وتوقيع وبداية جديدة.",
    "Встреча, подпись, новое начало.",
  ],
  "İletişime ihtiyaç duyduğunuz her adımı birlikte planlayalım.": [
    "Let’s plan every step where you need communication support.",
    "Planen wir gemeinsam jeden Schritt, bei dem Sie Kommunikationshilfe benötigen.",
    "لنخطط معاً لكل خطوة تحتاجون فيها إلى دعم التواصل.",
    "Спланируем каждый шаг, где вам нужна помощь в общении.",
  ],
  "Karşılıklı anlayışa dayanan işaret dili görüşmesi": [
    "A sign language conversation built on mutual understanding",
    "Ein Gebärdensprachgespräch auf Augenhöhe",
    "لقاء بلغة الإشارة يقوم على التفاهم المتبادل",
    "Беседа на жестовом языке с взаимным пониманием",
  ],
  İletişimde: [
    "In communication,",
    "In der Kommunikation:",
    "في التواصل،",
    "В общении —",
  ],
  "eşitlik.": ["equality.", "Gleichberechtigung.", "المساواة.", "равенство."],
  "BİZİM YAKLAŞIMIMIZ": ["OUR APPROACH", "UNSER ANSATZ", "نهجنا", "НАШ ПОДХОД"],
  "Sadece tercüme değil,": [
    "Beyond interpreting,",
    "Über das Dolmetschen hinaus:",
    "ما وراء الترجمة،",
    "Больше, чем перевод —",
  ],
  "karşılıklı anlayış.": [
    "mutual understanding.",
    "gegenseitiges Verständnis.",
    "تفاهم متبادل.",
    "взаимное понимание.",
  ],
  "İletişimin merkezinde insan var. TİD olarak, işaret dilini hayatın her alanında erişilebilir bir iletişim köprüsüne dönüştürmeyi önemsiyoruz.":
    [
      "People are at the heart of communication. At TİD, we value sign language as an accessible bridge in every area of life.",
      "Der Mensch steht im Mittelpunkt. Bei TİD betrachten wir Gebärdensprache als barrierefreie Brücke in allen Lebensbereichen.",
      "الإنسان هو محور التواصل. نحرص في TİD على جعل لغة الإشارة جسراً ميسّراً في جميع مجالات الحياة.",
      "В центре общения — человек. В TİD мы стремимся сделать жестовый язык доступным мостом во всех сферах жизни.",
    ],
  "İhtiyacınızı dinliyor, görüşmenizin koşullarını değerlendiriyor ve tüm süreci sizinle birlikte planlıyoruz.":
    [
      "We listen to your needs, assess the meeting arrangements and plan the whole process with you.",
      "Wir hören Ihnen zu, prüfen die Gesprächsbedingungen und planen den gesamten Ablauf gemeinsam.",
      "نستمع لاحتياجاتكم ونقيّم ظروف اللقاء ونخطط للعملية كاملة معكم.",
      "Мы выслушиваем ваши потребности, оцениваем условия встречи и планируем весь процесс вместе с вами.",
    ],
  "İhtiyacınıza göre planlanan tercümanlık": [
    "Interpreting planned around your needs",
    "Dolmetschen nach Ihrem Bedarf",
    "ترجمة مخططة حسب احتياجاتكم",
    "Перевод с учётом ваших потребностей",
  ],
  "Baştan netleşen kapsam ve randevu": [
    "Clear scope and appointments from the start",
    "Leistungsumfang und Termin von Anfang an klar",
    "نطاق خدمة وموعد واضحان منذ البداية",
    "Понятные условия и дата с самого начала",
  ],
  "Yazılı iletişimle kolay talep oluşturma": [
    "Easy requests through written communication",
    "Einfach schriftlich anfragen",
    "طلبات سهلة عبر التواصل الكتابي",
    "Удобная подача заявки письменно",
  ],
  "TİD’yi yakından tanıyın": [
    "Get to know TİD",
    "Lernen Sie TİD kennen",
    "تعرفوا على TİD",
    "Познакомьтесь с TİD",
  ],
  "NASIL ÇALIŞIYORUZ?": [
    "HOW DOES IT WORK?",
    "WIE FUNKTIONIERT ES?",
    "كيف نعمل؟",
    "КАК МЫ РАБОТАЕМ?",
  ],
  "Üç adımda,": [
    "In three steps,",
    "In drei Schritten,",
    "في ثلاث خطوات،",
    "Три шага —",
  ],
  "daha kolay iletişim.": [
    "easier communication.",
    "leichter kommunizieren.",
    "تواصل أسهل.",
    "к более простому общению.",
  ],
  "İlk adımı atın": [
    "Take the first step",
    "Machen Sie den ersten Schritt",
    "اتخذوا الخطوة الأولى",
    "Сделайте первый шаг",
  ],
  "AKLINIZDAKİ SORULAR": [
    "YOUR QUESTIONS",
    "IHRE FRAGEN",
    "أسئلتكم",
    "ВАШИ ВОПРОСЫ",
  ],
  "Biraz daha": ["Let’s make it", "Machen wir es", "لنجعل الأمور", "Добавим"],
  "netleştirelim.": [
    "a little clearer.",
    "noch klarer.",
    "أكثر وضوحاً.",
    "ясности.",
  ],
  "İlk kez tercümanlık hizmeti alıyor olabilirsiniz. Süreci birlikte anlaşılır hale getirelim.":
    [
      "This may be your first interpreting appointment. Let’s make the process clear together.",
      "Vielleicht nutzen Sie erstmals einen Dolmetschdienst. Klären wir den Ablauf gemeinsam.",
      "قد تكون هذه أول مرة تطلبون فيها مترجماً. لنجعل العملية مفهومة معاً.",
      "Возможно, вы впервые обращаетесь к переводчику. Давайте вместе разберёмся в процессе.",
    ],
  "Başka bir sorunuz mu var?": [
    "Have another question?",
    "Haben Sie weitere Fragen?",
    "لديكم سؤال آخر؟",
    "Есть другой вопрос?",
  ],
  "Hizmeti inceleyin": [
    "View service",
    "Leistung ansehen",
    "اطّلعوا على الخدمة",
    "Подробнее об услуге",
  ],
  "BİR İŞARETLE BAŞLAYALIM": [
    "LET’S START WITH A SIGN",
    "BEGINNEN WIR MIT EINEM ZEICHEN",
    "لنبدأ بإشارة",
    "НАЧНЁМ С ЖЕСТА",
  ],
  "Bir sonraki adımı": [
    "Let’s take the next step",
    "Gehen wir den nächsten Schritt",
    "لنتخذ الخطوة التالية",
    "Сделаем следующий шаг",
  ],
  "birlikte atalım.": ["together.", "gemeinsam.", "معاً.", "вместе."],
  "Tercümanlık ihtiyacınızı paylaşın, size uygun süreci planlayalım.": [
    "Share your interpreting needs and let’s plan a suitable process.",
    "Teilen Sie Ihren Bedarf mit und wir planen den passenden Ablauf.",
    "شاركونا احتياجات الترجمة لنخطط لما يناسبكم.",
    "Расскажите о нужном переводе, и мы спланируем подходящий процесс.",
  ],
  "Bizimle İletişime Geçin": [
    "Contact Us",
    "Kontakt aufnehmen",
    "تواصلوا معنا",
    "Связаться с нами",
  ],
  "Sizi dinliyoruz.": [
    "We’re listening.",
    "Wir hören Ihnen zu.",
    "نحن نستمع إليكم.",
    "Мы вас слушаем.",
  ],
  "Birlikte planlayalım.": [
    "Let’s plan together.",
    "Planen wir gemeinsam.",
    "لنخطط معاً.",
    "Спланируем вместе.",
  ],
  "Tercümanlık ihtiyacınızı bize yazın. Hizmet, tarih ve görüşme koşullarını birlikte netleştirelim.":
    [
      "Tell us about your interpreting needs. Let’s agree on the service, date and meeting arrangements.",
      "Schreiben Sie uns Ihren Bedarf. Wir klären Leistung, Termin und Gesprächsbedingungen gemeinsam.",
      "اكتبوا لنا احتياجاتكم. لنتفق على الخدمة والتاريخ وترتيبات اللقاء معاً.",
      "Напишите о нужном переводе. Вместе уточним услугу, дату и условия встречи.",
    ],
  "İLETİŞİM SEÇENEKLERİ": [
    "CONTACT OPTIONS",
    "KONTAKTMÖGLICHKEITEN",
    "طرق التواصل",
    "СПОСОБЫ СВЯЗИ",
  ],
  "Size uygun yoldan": [
    "Get in touch",
    "Kontaktieren Sie uns",
    "تواصلوا معنا",
    "Свяжитесь с нами",
  ],
  "bize ulaşın.": [
    "in the way that suits you.",
    "auf dem für Sie passenden Weg.",
    "بالطريقة التي تناسبكم.",
    "удобным для вас способом.",
  ],
  "Yazılı iletişimi tercih ediyorsanız talep formunu kullanabilir veya WhatsApp üzerinden bize yazabilirsiniz.":
    [
      "Prefer written communication? Use the request form or message us on WhatsApp.",
      "Für schriftlichen Kontakt nutzen Sie das Anfrageformular oder WhatsApp.",
      "إذا كنتم تفضلون التواصل الكتابي، استخدموا النموذج أو اكتبوا لنا عبر واتساب.",
      "Предпочитаете письменное общение? Используйте форму заявки или WhatsApp.",
    ],
  TELEFON: ["PHONE", "TELEFON", "الهاتف", "ТЕЛЕФОН"],
  "Yazılı iletişim için": [
    "For written communication",
    "Für schriftlichen Kontakt",
    "للتواصل الكتابي",
    "Для письменного общения",
  ],
  "Telefon ve WhatsApp numaraları şu anda geçici olarak gösterilmektedir. Randevu talebinizi form üzerinden iletebilirsiniz.":
    [
      "The phone and WhatsApp numbers are temporary placeholders. Please use the form to request an appointment.",
      "Telefon- und WhatsApp-Nummern sind derzeit Platzhalter. Bitte nutzen Sie das Formular für Ihre Terminanfrage.",
      "أرقام الهاتف وواتساب مؤقتة حالياً. يمكنكم طلب موعد عبر النموذج.",
      "Номера телефона и WhatsApp пока временные. Подайте заявку через форму.",
    ],
  "Tercümanlık talebiniz": [
    "Your interpreting request",
    "Ihre Dolmetschanfrage",
    "طلب الترجمة الخاص بكم",
    "Ваша заявка на перевод",
  ],
  "Yıldız (*) işaretli alanları doldurun. Talebiniz iletildikten sonra uygunluk ve hizmet kapsamı değerlendirilir.":
    [
      "Complete the fields marked with an asterisk (*). Availability and service scope are assessed after your request.",
      "Füllen Sie die mit * markierten Felder aus. Danach prüfen wir Verfügbarkeit und Leistungsumfang.",
      "املؤوا الحقول المميزة بنجمة (*). يتم تقييم التوفر ونطاق الخدمة بعد استلام الطلب.",
      "Заполните поля со звёздочкой (*). После получения заявки мы проверим доступность и объём услуги.",
    ],
  "Adınız soyadınız *": [
    "Full name *",
    "Vor- und Nachname *",
    "الاسم الكامل *",
    "Имя и фамилия *",
  ],
  "Adınız ve soyadınız": [
    "Your full name",
    "Ihr Vor- und Nachname",
    "اسمكم الكامل",
    "Ваше имя и фамилия",
  ],
  "E-posta adresiniz": [
    "Email address",
    "E-Mail-Adresse",
    "البريد الإلكتروني",
    "Электронная почта",
  ],
  "Telefon / WhatsApp": [
    "Phone / WhatsApp",
    "Telefon / WhatsApp",
    "الهاتف / واتساب",
    "Телефон / WhatsApp",
  ],
  "Size ulaşabileceğimiz numara": [
    "A number we can reach you on",
    "Ihre erreichbare Telefonnummer",
    "رقم يمكننا التواصل معكم عليه",
    "Номер для связи с вами",
  ],
  "İletişim tercihiniz *": [
    "Preferred contact method *",
    "Bevorzugter Kontaktweg *",
    "طريقة التواصل المفضلة *",
    "Предпочтительный способ связи *",
  ],
  "E-posta (yazılı)": [
    "Email (written)",
    "E-Mail (schriftlich)",
    "البريد الإلكتروني (كتابي)",
    "Электронная почта (письменно)",
  ],
  "WhatsApp (yazılı)": [
    "WhatsApp (written)",
    "WhatsApp (schriftlich)",
    "واتساب (كتابي)",
    "WhatsApp (письменно)",
  ],
  "İhtiyacınız olan hizmet *": [
    "Required service *",
    "Gewünschte Leistung *",
    "الخدمة المطلوبة *",
    "Нужная услуга *",
  ],
  "Tercih ettiğiniz tarih": [
    "Preferred date",
    "Wunschtermin",
    "التاريخ المفضل",
    "Желаемая дата",
  ],
  "Görüşme yeri veya biçimi": [
    "Meeting location or format",
    "Ort oder Format des Gesprächs",
    "مكان اللقاء أو شكله",
    "Место или формат встречи",
  ],
  "Şehir, kurum / noterlik ya da çevrim içi görüşme": [
    "City, institution / notary office or online meeting",
    "Stadt, Einrichtung / Notariat oder Online-Gespräch",
    "المدينة أو المؤسسة / كاتب العدل أو لقاء عن بُعد",
    "Город, учреждение / нотариальная контора или онлайн",
  ],
  "Talebinizin detayları *": [
    "Request details *",
    "Details Ihrer Anfrage *",
    "تفاصيل الطلب *",
    "Подробности заявки *",
  ],
  "Görüşmenin konusu, tahmini süresi ve ihtiyaçlarınız…": [
    "Meeting topic, estimated duration and your needs…",
    "Gesprächsthema, voraussichtliche Dauer und Ihr Bedarf…",
    "موضوع اللقاء ومدته المتوقعة واحتياجاتكم…",
    "Тема встречи, примерная длительность и ваши потребности…",
  ],
  "Web sitesi": ["Website", "Webseite", "الموقع الإلكتروني", "Веб-сайт"],
  "Paylaştığım iletişim bilgilerinin bu talebime dönüş yapılması amacıyla kullanılmasını kabul ediyorum. *":
    [
      "I agree that my contact details may be used to respond to this request. *",
      "Ich stimme zu, dass meine Kontaktdaten zur Beantwortung dieser Anfrage verwendet werden. *",
      "أوافق على استخدام بيانات التواصل الخاصة بي للرد على هذا الطلب. *",
      "Я согласен на использование моих контактных данных для ответа на эту заявку. *",
    ],
  "Talebiniz iletiliyor…": [
    "Sending your request…",
    "Ihre Anfrage wird gesendet…",
    "جارٍ إرسال طلبكم…",
    "Отправляем заявку…",
  ],
  "Talebimi Gönder": [
    "Send My Request",
    "Anfrage senden",
    "أرسلوا الطلب",
    "Отправить заявку",
  ],
  "Talebiniz alındı. Seçtiğiniz iletişim kanalı üzerinden dönüş yapılması için kaydedildi. Bu talep, kesinleşmiş bir randevu değildir.":
    [
      "Your request has been saved so we can respond through your preferred channel. This is not a confirmed appointment.",
      "Ihre Anfrage wurde gespeichert. Wir antworten über Ihren bevorzugten Kontaktweg. Dies ist noch keine Terminbestätigung.",
      "تم حفظ طلبكم للرد عبر طريقة التواصل المختارة. هذا الطلب ليس موعداً مؤكداً.",
      "Заявка сохранена для ответа выбранным способом. Это ещё не подтверждённая встреча.",
    ],
  "Talebiniz gönderilemedi. Lütfen bağlantınızı kontrol edip yeniden deneyin. Bilgileriniz formda korunuyor.":
    [
      "Your request could not be sent. Check your connection and try again. Your details remain in the form.",
      "Ihre Anfrage konnte nicht gesendet werden. Prüfen Sie die Verbindung und versuchen Sie es erneut. Ihre Angaben bleiben im Formular.",
      "تعذر إرسال الطلب. تحققوا من الاتصال وحاولوا مجدداً. بياناتكم محفوظة في النموذج.",
      "Не удалось отправить заявку. Проверьте соединение и повторите попытку. Данные остаются в форме.",
    ],
  "Sık Sorulan Sorular": [
    "FAQ",
    "Häufige Fragen",
    "الأسئلة الشائعة",
    "Частые вопросы",
  ],
  "İçeriğe geç": [
    "Skip to content",
    "Zum Inhalt springen",
    "انتقل إلى المحتوى",
    "Перейти к содержимому",
  ],
  "Menüyü aç": ["Open menu", "Menü öffnen", "افتح القائمة", "Открыть меню"],
  "Ana menü": [
    "Main navigation",
    "Hauptnavigation",
    "القائمة الرئيسية",
    "Главное меню",
  ],
  "Randevu Oluştur": [
    "Request Appointment",
    "Termin anfragen",
    "اطلبوا موعداً",
    "Запросить встречу",
  ],
  "İletişimin önündeki engelleri birlikte aşalım. Türk İşaret Dili ve tercümanlık hizmetleriyle yanınızdayız.":
    [
      "Let’s overcome communication barriers together. We support you with Turkish Sign Language and interpreting services.",
      "Überwinden wir Kommunikationsbarrieren gemeinsam. Wir unterstützen Sie mit türkischer Gebärdensprache und Dolmetschleistungen.",
      "لنتجاوز حواجز التواصل معاً. نحن معكم بخدمات لغة الإشارة التركية والترجمة.",
      "Преодолеем барьеры общения вместе. Мы рядом с услугами турецкого жестового языка и перевода.",
    ],
  "Anlaşılmak herkesin hakkı.": [
    "Everyone deserves to be understood.",
    "Jeder hat das Recht, verstanden zu werden.",
    "التفاهم حق للجميع.",
    "Каждый имеет право быть понятым.",
  ],
  Keşfedin: ["Explore", "Entdecken", "اكتشفوا", "Узнать больше"],
  "Sık sorulan sorular": [
    "Frequently asked questions",
    "Häufige Fragen",
    "الأسئلة الشائعة",
    "Частые вопросы",
  ],
  "Telefon & WhatsApp": [
    "Phone & WhatsApp",
    "Telefon & WhatsApp",
    "الهاتف وواتساب",
    "Телефон и WhatsApp",
  ],
  "Yazılı talep oluşturun": [
    "Send a written request",
    "Schriftlich anfragen",
    "قدموا طلباً كتابياً",
    "Подать письменную заявку",
  ],
  "TİD. Tüm hakları saklıdır.": [
    "TİD. All rights reserved.",
    "TİD. Alle Rechte vorbehalten.",
    "TİD. جميع الحقوق محفوظة.",
    "TİD. Все права защищены.",
  ],
  "Türk İşaret Dili · Yeminli Tercüman · Noter İşlemleri": [
    "Turkish Sign Language · Sworn Interpreter · Notarial Appointments",
    "Türkische Gebärdensprache · Beeidigter Dolmetscher · Notartermine",
    "لغة الإشارة التركية · مترجم محلف · معاملات كاتب العدل",
    "Турецкий жестовый язык · Присяжный переводчик · Нотариальные процедуры",
  ],
  "TİD ana sayfa": [
    "TİD home",
    "TİD Startseite",
    "صفحة TİD الرئيسية",
    "Главная TİD",
  ],
  "İŞARET DİLİ & TERCÜMANLIK": [
    "SIGN LANGUAGE & INTERPRETING",
    "GEBÄRDENSPRACHE & DOLMETSCHEN",
    "لغة الإشارة والترجمة",
    "ЖЕСТОВЫЙ ЯЗЫК И ПЕРЕВОД",
  ],
  "Yazılı iletişim ve randevu talebi": [
    "Written contact and appointment request",
    "Schriftlicher Kontakt und Terminanfrage",
    "تواصل كتابي وطلب موعد",
    "Письменная связь и заявка на встречу",
  ],
  "Bize yazın": [
    "Message us",
    "Schreiben Sie uns",
    "اكتبوا لنا",
    "Напишите нам",
  ],
  "İnsan odaklı": [
    "People first",
    "Menschen im Mittelpunkt",
    "الإنسان أولاً",
    "Человек на первом месте",
  ],
  "Her görüşmenin arkasında bir insan, bir ihtiyaç ve bir hikâye var. Süreci sizi dinleyerek başlatıyoruz.":
    [
      "Behind every meeting is a person, a need and a story. We begin by listening to you.",
      "Hinter jedem Gespräch stehen ein Mensch, ein Bedarf und eine Geschichte. Wir beginnen, indem wir Ihnen zuhören.",
      "وراء كل لقاء إنسان واحتياج وقصة. نبدأ بالاستماع إليكم.",
      "За каждой встречей — человек, потребность и история. Мы начинаем с того, что слушаем вас.",
    ],
  "Yazılı iletişim ve anlaşılır içerikle ihtiyaçlarınızı kolayca paylaşabileceğiniz bir alan sunuyoruz.":
    [
      "We make it easy to share your needs through written communication and clear information.",
      "Mit schriftlicher Kommunikation und verständlichen Informationen können Sie Ihren Bedarf einfach mitteilen.",
      "نسهّل مشاركة احتياجاتكم عبر التواصل الكتابي والمحتوى الواضح.",
      "Мы помогаем легко рассказать о потребностях с помощью письменного общения и понятной информации.",
    ],
  "Açık ve planlı": [
    "Clear and organised",
    "Klar und geplant",
    "وضوح وتنظيم",
    "Ясность и порядок",
  ],
  "Hizmet kapsamını, görüşme koşullarını ve randevu planını baştan birlikte netleştiriyoruz.":
    [
      "We agree on the service scope, meeting arrangements and appointment plan from the start.",
      "Leistungsumfang, Gesprächsbedingungen und Terminplan klären wir von Anfang an gemeinsam.",
      "نتفق معكم منذ البداية على نطاق الخدمة وترتيبات اللقاء والموعد.",
      "Мы заранее согласуем объём услуги, условия встречи и дату.",
    ],
  "TİD’Yİ TANIYIN": [
    "MEET TİD",
    "LERNEN SIE TİD KENNEN",
    "تعرفوا على TİD",
    "ЗНАКОМЬТЕСЬ С TİD",
  ],
  "Anlaşılmak,": [
    "Being understood,",
    "Verstanden zu werden,",
    "أن تكون مفهوماً،",
    "Быть понятым —",
  ],
  "herkesin hakkı.": [
    "is everyone’s right.",
    "ist das Recht eines jeden.",
    "حق للجميع.",
    "право каждого.",
  ],
  "İşaretlerin, sözcüklerin ve insanların arasında bağ kuruyoruz. Daha erişilebilir bir iletişim için yanınızdayız.":
    [
      "We connect signs, words and people. We are by your side for more accessible communication.",
      "Wir verbinden Zeichen, Worte und Menschen. Für barrierefreie Kommunikation sind wir an Ihrer Seite.",
      "نربط بين الإشارات والكلمات والناس. نحن إلى جانبكم من أجل تواصل أكثر إتاحة.",
      "Мы связываем жесты, слова и людей. Мы рядом, чтобы общение стало доступнее.",
    ],
  "İşaret diliyle karşılıklı iletişim": [
    "A conversation in sign language",
    "Gegenseitiger Austausch in Gebärdensprache",
    "تواصل متبادل بلغة الإشارة",
    "Общение на жестовом языке",
  ],
  "ORTAK BİR ANLAYIŞ": [
    "SHARED UNDERSTANDING",
    "GEMEINSAMES VERSTÄNDNIS",
    "تفاهم مشترك",
    "ВЗАИМНОЕ ПОНИМАНИЕ",
  ],
  "İletişimin merkezinde": [
    "At the heart of communication",
    "Im Mittelpunkt der Kommunikation",
    "في قلب التواصل،",
    "В центре общения",
  ],
  "insan var.": [
    "are people.",
    "steht der Mensch.",
    "الإنسان.",
    "стоит человек.",
  ],
  "TİD; Türk İşaret Dili tercümanlığı, yeminli tercüman ve noter işlemlerinde işaret dili desteğini aynı çatı altında buluşturan bir hizmet yaklaşımıdır.":
    [
      "TİD brings Turkish Sign Language interpreting, sworn interpreting and sign language support for notarial appointments together.",
      "TİD vereint türkische Gebärdensprache, beeidigtes Dolmetschen und Gebärdensprachunterstützung bei Notarterminen.",
      "تجمع TİD خدمات لغة الإشارة التركية والترجمة المحلفة ودعم لغة الإشارة في معاملات كاتب العدل.",
      "TİD объединяет перевод турецкого жестового языка, присяжный перевод и помощь на жестовом языке у нотариуса.",
    ],
  "Günlük görüşmelerden resmî işlemlere kadar her ihtiyacı kendi koşullarıyla değerlendiriyoruz. Amacımız, kendinizi ifade edebildiğiniz ve sürecin her adımını anlayabildiğiniz bir iletişim ortamı oluşturmak.":
    [
      "From everyday meetings to official procedures, we assess each need individually. Our aim is an environment where you can express yourself and understand every step.",
      "Vom Alltagsgespräch bis zu amtlichen Verfahren betrachten wir jeden Bedarf einzeln. Sie sollen sich ausdrücken und jeden Schritt verstehen können.",
      "نقيّم كل احتياج بحسب ظروفه، من اللقاءات اليومية إلى المعاملات الرسمية. هدفنا بيئة تعبّرون فيها عن أنفسكم وتفهمون كل خطوة.",
      "От повседневных встреч до официальных процедур мы учитываем каждую ситуацию. Наша цель — среда, где вы можете выразить себя и понять каждый шаг.",
    ],
  "SİZİ ANLAYAN ÇÖZÜMLER": [
    "SOLUTIONS THAT UNDERSTAND YOU",
    "LÖSUNGEN, DIE SIE VERSTEHEN",
    "حلول تفهمكم",
    "РЕШЕНИЯ, КОТОРЫЕ ВАС ПОНИМАЮТ",
  ],
  "İletişim kurduğunuz": [
    "Wherever you communicate,",
    "Wo immer Sie kommunizieren,",
    "أينما تتواصلون،",
    "Где бы вы ни общались,",
  ],
  "her yerde yanınızdayız.": [
    "we are by your side.",
    "sind wir an Ihrer Seite.",
    "نحن إلى جانبكم.",
    "мы рядом.",
  ],
  "Günlük hayatınızda, kurumsal görüşmelerinizde ve resmî işlemlerinizde ihtiyacınıza uygun tercümanlık desteği.":
    [
      "Interpreting support for your everyday life, business meetings and official procedures.",
      "Passende Dolmetschhilfe im Alltag, bei Geschäftsgesprächen und amtlichen Verfahren.",
      "دعم ترجمة يناسب حياتكم اليومية واجتماعاتكم ومعاملاتكم الرسمية.",
      "Помощь переводчика в повседневной жизни, деловых встречах и официальных процедурах.",
    ],
  "TİD TERCÜMANLIK": [
    "TİD INTERPRETING",
    "TİD DOLMETSCHEN",
    "TİD للترجمة",
    "ПЕРЕВОД TİD",
  ],
  "BİRLİKTE PLANLAYALIM": [
    "LET’S PLAN TOGETHER",
    "PLANEN WIR GEMEINSAM",
    "لنخطط معاً",
    "СПЛАНИРУЕМ ВМЕСТЕ",
  ],
  "Her adımı net,": [
    "Clear steps,",
    "Klare Schritte,",
    "خطوات واضحة،",
    "Понятные шаги,",
  ],
  "iletişimi kolay bir süreç.": [
    "easier communication.",
    "leichtere Kommunikation.",
    "وتواصل أسهل.",
    "более простое общение.",
  ],
  "Bu Hizmet İçin Talep Oluştur": [
    "Request This Service",
    "Diese Leistung anfragen",
    "اطلبوا هذه الخدمة",
    "Заказать эту услугу",
  ],
  "İLETİŞİME ALAN AÇIN": [
    "MAKE ROOM FOR COMMUNICATION",
    "RAUM FÜR KOMMUNIKATION",
    "افسحوا مجالاً للتواصل",
    "ОТКРОЙТЕ ПРОСТОР ОБЩЕНИЮ",
  ],
  "Günlük görüşmelerden kurumsal etkinliklere, Türk İşaret Dili ile anlaşılır ve erişilebilir iletişim.":
    [
      "Clear, accessible communication in Turkish Sign Language, from daily meetings to corporate events.",
      "Verständliche, barrierefreie Kommunikation in türkischer Gebärdensprache: vom Alltag bis zur Firmenveranstaltung.",
      "تواصل واضح وميسّر بلغة الإشارة التركية، من اللقاءات اليومية إلى الفعاليات المؤسسية.",
      "Понятное и доступное общение на турецком жестовом языке: от повседневных встреч до корпоративных мероприятий.",
    ],
  "Görüşmenizin konusu, yeri, tarihi ve süresine göre işaret dili tercümanlığı planlanır. Yüz yüze veya çevrim içi görüşmeler için ihtiyacınızı birlikte netleştiririz.":
    [
      "We plan interpreting around your meeting’s topic, location, date and duration. Together we clarify your needs for in-person or online meetings.",
      "Wir planen nach Thema, Ort, Datum und Dauer. Ihren Bedarf für persönliche oder Online-Gespräche klären wir gemeinsam.",
      "نخطط للترجمة بحسب موضوع اللقاء ومكانه وتاريخه ومدته. نوضح احتياجات اللقاءات الحضورية أو عبر الإنترنت معاً.",
      "Мы планируем перевод с учётом темы, места, даты и длительности. Вместе уточним потребности для очных или онлайн-встреч.",
    ],
  "Bireysel ve kurumsal görüşmeler": [
    "Personal and business meetings",
    "Private und geschäftliche Gespräche",
    "لقاءات فردية ومؤسسية",
    "Личные и деловые встречи",
  ],
  "Etkinlik ve toplantılar": [
    "Events and meetings",
    "Veranstaltungen und Besprechungen",
    "فعاليات واجتماعات",
    "Мероприятия и совещания",
  ],
  "Yüz yüze veya çevrim içi destek": [
    "In-person or online support",
    "Unterstützung vor Ort oder online",
    "دعم حضوري أو عن بُعد",
    "Очная или онлайн-помощь",
  ],
  "Yeminli Tercüman": [
    "Sworn Interpreter",
    "Beeidigter Dolmetscher",
    "مترجم محلف",
    "Присяжный переводчик",
  ],
  "ÖZENLİ, PLANLI DESTEK": [
    "CAREFUL, PLANNED SUPPORT",
    "SORGFÄLTIG GEPLANTE HILFE",
    "دعم مدروس ومنظم",
    "ВНИМАТЕЛЬНАЯ, ПЛАНОВАЯ ПОМОЩЬ",
  ],
  "Resmî görüşmelerinizde ihtiyaca uygun tercüman desteği ve baştan netleşen bir süreç.":
    [
      "Suitable interpreting support for official meetings, with a clear process from the start.",
      "Passende Dolmetschhilfe bei amtlichen Gesprächen mit einem von Anfang an klaren Ablauf.",
      "دعم ترجمة مناسب للقاءات الرسمية وعملية واضحة منذ البداية.",
      "Подходящая помощь переводчика на официальных встречах с понятным процессом с самого начала.",
    ],
  "İşlemin yapılacağı kurum, görüşmenin içeriği ve gerekli belgeler önceden değerlendirilir. Kurumun tercüman ve belge koşulları doğrultusunda uygun hizmet planı paylaşılır.":
    [
      "The institution, meeting content and documents are assessed beforehand. We plan the service according to the institution’s interpreter and document requirements.",
      "Einrichtung, Gesprächsinhalt und Dokumente werden vorab geprüft. Wir planen nach den Dolmetscher- und Dokumentenanforderungen der Einrichtung.",
      "نقيّم المؤسسة وموضوع اللقاء والوثائق مسبقاً. ونخطط للخدمة وفق متطلبات المؤسسة للمترجم والوثائق.",
      "Мы заранее оцениваем учреждение, содержание встречи и документы. Услуга планируется с учётом требований учреждения к переводчику и документам.",
    ],
  "İşlem öncesi ihtiyaç değerlendirmesi": [
    "Assessment before the appointment",
    "Bedarfsprüfung vor dem Termin",
    "تقييم الاحتياجات قبل المعاملة",
    "Оценка потребностей перед процедурой",
  ],
  "Kurum koşullarına göre planlama": [
    "Planning around institution requirements",
    "Planung nach den Anforderungen der Einrichtung",
    "تخطيط وفق متطلبات المؤسسة",
    "Планирование по требованиям учреждения",
  ],
  "Randevu ve belge koordinasyonu": [
    "Appointment and document coordination",
    "Termin- und Dokumentenkoordination",
    "تنسيق المواعيد والوثائق",
    "Координация встречи и документов",
  ],
  "İşaret Dili Noter": [
    "Sign Language at the Notary",
    "Gebärdensprache beim Notar",
    "لغة الإشارة لدى كاتب العدل",
    "Жестовый язык у нотариуса",
  ],
  "HER ADIMDA ANLAŞILIN": [
    "BE UNDERSTOOD AT EVERY STEP",
    "BEI JEDEM SCHRITT VERSTANDEN",
    "تفاهم في كل خطوة",
    "ПОНИМАНИЕ НА КАЖДОМ ШАГУ",
  ],
  "Noter görüşmelerinde işaret dili tercümanlığı; randevu öncesinden işlem gününe kadar koordinasyon.":
    [
      "Sign language interpreting for notarial meetings, coordinated from booking to the appointment.",
      "Gebärdensprachdolmetschen beim Notar, koordiniert von der Planung bis zum Termin.",
      "ترجمة بلغة الإشارة في لقاءات كاتب العدل، مع تنسيق من حجز الموعد حتى يوم المعاملة.",
      "Перевод жестового языка у нотариуса с координацией от записи до дня процедуры.",
    ],
  "Yapılacak işlemi, noterliği ve randevu tarihini paylaşın. İlgili noterliğin tercüman ve belge koşulları görüşme öncesinde teyit edilerek işaret dili tercümanlığı planlansın.":
    [
      "Tell us the procedure, notary office and appointment date. Interpreter and document requirements are confirmed with the office before planning the service.",
      "Nennen Sie Vorgang, Notariat und Termin. Dolmetscher- und Dokumentenanforderungen werden vorab mit dem Notariat bestätigt.",
      "أخبرونا بنوع المعاملة ومكتب كاتب العدل وتاريخ الموعد. تُؤكد شروط المترجم والوثائق مع المكتب قبل التخطيط للخدمة.",
      "Укажите процедуру, нотариальную контору и дату. Требования к переводчику и документам уточняются с конторой до планирования услуги.",
    ],
  "Noter randevusuna göre organizasyon": [
    "Coordination around the notary appointment",
    "Organisation nach dem Notartermin",
    "تنظيم بحسب موعد كاتب العدل",
    "Организация с учётом записи к нотариусу",
  ],
  "İşlem öncesi belge ve koşul kontrolü": [
    "Document and requirement checks beforehand",
    "Dokumente und Anforderungen vorab prüfen",
    "مراجعة الوثائق والشروط مسبقاً",
    "Проверка документов и условий заранее",
  ],
  "Görüşmede işaret dili tercümanlığı": [
    "Sign language interpreting at the meeting",
    "Gebärdensprachdolmetschen im Gespräch",
    "ترجمة بلغة الإشارة خلال اللقاء",
    "Перевод жестового языка на встрече",
  ],
  "Türk İşaret Dili tercümanı için nasıl randevu alırım?": [
    "How do I book a Turkish Sign Language interpreter?",
    "Wie buche ich einen Dolmetscher für türkische Gebärdensprache?",
    "كيف أحجز مترجماً للغة الإشارة التركية؟",
    "Как записаться к переводчику турецкого жестового языка?",
  ],
  "İletişim formundan hizmeti seçerek görüşmenizin tarihini, yerini ve konusunu paylaşabilirsiniz. Talebiniz değerlendirildikten sonra uygunluk ve ücret bilgisi sizinle netleştirilir.":
    [
      "Select the service in the form and share the date, location and topic. After review, we confirm availability and fees with you.",
      "Wählen Sie die Leistung im Formular und nennen Sie Datum, Ort und Thema. Danach klären wir Verfügbarkeit und Kosten.",
      "اختاروا الخدمة في النموذج وشاركوا تاريخ اللقاء ومكانه وموضوعه. بعد التقييم نوضح التوفر والتكلفة.",
      "Выберите услугу в форме и укажите дату, место и тему. После рассмотрения уточним доступность и стоимость.",
    ],
  "Noter işlemi öncesinde hangi bilgileri paylaşmalıyım?": [
    "What should I share before a notarial appointment?",
    "Welche Angaben benötigen Sie vor einem Notartermin?",
    "ما المعلومات التي أشاركها قبل المعاملة لدى كاتب العدل؟",
    "Какие данные нужны перед визитом к нотариусу?",
  ],
  "Yapılacak işlemi, tercih ettiğiniz noterliği ve randevu tarihini belirtin. Gerekli belgeler ve tercüman koşulları ilgili noterlikle işlem öncesinde teyit edilmelidir.":
    [
      "Specify the procedure, preferred notary office and date. Required documents and interpreter requirements must be confirmed with the office beforehand.",
      "Nennen Sie Vorgang, bevorzugtes Notariat und Datum. Dokumente und Dolmetscheranforderungen sind vorher mit dem Notariat zu bestätigen.",
      "حددوا المعاملة والمكتب المفضل وتاريخ الموعد. يجب تأكيد الوثائق وشروط المترجم مع المكتب مسبقاً.",
      "Укажите процедуру, выбранную контору и дату. Документы и требования к переводчику нужно заранее уточнить у нотариуса.",
    ],
  "Çevrim içi tercümanlık talep edebilir miyim?": [
    "Can I request online interpreting?",
    "Kann ich Online-Dolmetschen anfragen?",
    "هل يمكنني طلب ترجمة عن بُعد؟",
    "Можно ли заказать онлайн-перевод?",
  ],
  "Evet, çevrim içi görüşme için talep oluşturabilirsiniz. Platform, görüşme süresi, katılımcılar ve görüntü koşulları değerlendirilerek hizmetin uygunluğu belirlenir.":
    [
      "Yes. We assess the platform, duration, participants and video conditions to confirm whether the service is suitable.",
      "Ja. Plattform, Dauer, Teilnehmer und Bildbedingungen werden geprüft, um die Eignung zu klären.",
      "نعم. نقيّم المنصة والمدة والمشاركين وظروف الصورة لتحديد ملاءمة الخدمة.",
      "Да. Мы оцениваем платформу, длительность, участников и качество видео, чтобы подтвердить возможность услуги.",
    ],
  "Hizmet ücreti nasıl belirlenir?": [
    "How are fees calculated?",
    "Wie werden die Kosten berechnet?",
    "كيف تُحدد تكلفة الخدمة؟",
    "Как определяется стоимость?",
  ],
  "Ücret; hizmet türüne, görüşmenin süresine, konumuna ve ihtiyaç duyulan hazırlığa göre belirlenir. Randevu kesinleşmeden önce kapsam ve ücret paylaşılır.":
    [
      "Fees depend on service type, duration, location and preparation. The scope and fee are shared before the appointment is confirmed.",
      "Kosten richten sich nach Leistung, Dauer, Ort und Vorbereitung. Umfang und Preis werden vor der Terminbestätigung mitgeteilt.",
      "تعتمد التكلفة على نوع الخدمة والمدة والمكان والتحضير. يُوضح نطاق الخدمة والتكلفة قبل تأكيد الموعد.",
      "Стоимость зависит от услуги, длительности, места и подготовки. Объём и цена сообщаются до подтверждения встречи.",
    ],
  "Dil seçimi": [
    "Select language",
    "Sprache wählen",
    "اختر اللغة",
    "Выбрать язык",
  ],
  Haberler: ["News", "Nachrichten", "الأخبار", "Новости"],
  HABERLER: ["NEWS", "NACHRICHTEN", "الأخبار", "НОВОСТИ"],
  "Güncel haberler ve duyurular.": [
    "Latest news and announcements.",
    "Aktuelle Nachrichten und Mitteilungen.",
    "آخر الأخبار والإعلانات.",
    "Последние новости и объявления.",
  ],
  "TİD’den gelişmeleri ve yeni duyuruları takip edin.": [
    "Follow updates and announcements from TİD.",
    "Verfolgen Sie Neuigkeiten und Mitteilungen von TİD.",
    "تابعوا مستجدات وإعلانات TİD.",
    "Следите за новостями и объявлениями TİD.",
  ],
  "Tüm haberler": [
    "All news",
    "Alle Nachrichten",
    "جميع الأخبار",
    "Все новости",
  ],
  "BLOG & REHBERLER": [
    "BLOG & GUIDES",
    "BLOG & RATGEBER",
    "المدونة والأدلة",
    "БЛОГ И РУКОВОДСТВА",
  ],
  "Bilgiyle daha kolay bir süreç.": [
    "A clearer path with helpful information.",
    "Mit Wissen wird der Ablauf leichter.",
    "معلومات تجعل العملية أسهل.",
    "С информацией процесс становится проще.",
  ],
  "İşaret dili, tercümanlık ve noter süreçleri hakkında yazılarımızı keşfedin.":
    [
      "Explore articles on sign language, interpreting and notarial appointments.",
      "Entdecken Sie Beiträge über Gebärdensprache, Dolmetschen und Notartermine.",
      "اكتشفوا مقالات لغة الإشارة والترجمة ومعاملات كاتب العدل.",
      "Читайте статьи о жестовом языке, переводе и нотариальных процедурах.",
    ],
  "Tüm blog yazıları": [
    "All blog articles",
    "Alle Blogbeiträge",
    "جميع مقالات المدونة",
    "Все статьи блога",
  ],
  "Yazıyı okuyun": [
    "Read article",
    "Beitrag lesen",
    "اقرأ المقال",
    "Читать статью",
  ],
  "İçerikler yükleniyor…": [
    "Loading content…",
    "Inhalte werden geladen…",
    "جارٍ تحميل المحتوى…",
    "Загрузка материалов…",
  ],
  "Henüz haber bulunmuyor.": [
    "No news yet.",
    "Noch keine Nachrichten.",
    "لا توجد أخبار بعد.",
    "Новостей пока нет.",
  ],
  "Henüz blog yazısı bulunmuyor.": [
    "No blog articles yet.",
    "Noch keine Blogbeiträge.",
    "لا توجد مقالات بعد.",
    "Статей пока нет.",
  ],
  "Yeni içerikler yayınlandığında burada görebilirsiniz.": [
    "New publications will appear here.",
    "Neue Veröffentlichungen finden Sie hier.",
    "ستظهر المنشورات الجديدة هنا.",
    "Новые публикации появятся здесь.",
  ],
  "İçerikler şu anda yüklenemedi.": [
    "Content could not be loaded right now.",
    "Inhalte konnten nicht geladen werden.",
    "تعذر تحميل المحتوى حالياً.",
    "Не удалось загрузить материалы.",
  ],
  "Tekrar deneyin": [
    "Try again",
    "Erneut versuchen",
    "حاول مجدداً",
    "Повторить",
  ],
  "Bu içerik henüz seçilen dilde çevrilmemiştir. Özgün dilinde gösterilmektedir.":
    [
      "This article is not translated into your selected language yet. It is shown in its original language.",
      "Dieser Beitrag ist noch nicht in der gewählten Sprache verfügbar. Er wird in der Originalsprache angezeigt.",
      "لم تُترجم هذه المقالة إلى اللغة المختارة بعد. تُعرض بلغتها الأصلية.",
      "Эта статья пока не переведена на выбранный язык. Она показана на языке оригинала.",
    ],
  "İçerik bulunamadı.": [
    "Article not found.",
    "Beitrag nicht gefunden.",
    "المقالة غير موجودة.",
    "Материал не найден.",
  ],
  "İçerik listesine dön": [
    "Back to articles",
    "Zurück zur Übersicht",
    "العودة إلى المقالات",
    "Назад к материалам",
  ],
  "Öne çıkan": ["Featured", "Empfohlen", "مميز", "Избранное"],
  "Daha fazla göster": [
    "Show more",
    "Mehr anzeigen",
    "عرض المزيد",
    "Показать ещё",
  ],
};
export function translate(value: string, locale: Locale): string {
  if (locale === "tr") return value;
  const source = value.replace(/\s+/g, " ").trim();
  const row = tidTranslations[source];
  const translated = row
    ? row[locales.indexOf(locale) - 1]
    : legacyTranslate(source, locale);
  return (
    (value.match(/^\s*/)?.[0] || "") +
    translated +
    (value.match(/\s*$/)?.[0] || "")
  );
}
