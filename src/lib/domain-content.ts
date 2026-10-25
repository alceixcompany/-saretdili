// Turkish source copy and its English, German, Arabic and Russian equivalents.
export const domainTranslations: Record<
  string,
  readonly [string, string, string, string]
> = {};
function copy(tr: string, en: string, de: string, ar: string, ru: string) {
  domainTranslations[tr] = [en, de, ar, ru];
  return tr;
}
export const domainCopy = {
  brand: "Best Tercümanlık",
  quote: copy(
    "Teklif Alın",
    "Request a quote",
    "Angebot anfordern",
    "اطلب عرض سعر",
    "Запросить расчёт",
  ),
  intro: copy(
    "Belgenize ve kullanım amacınıza uygun destek.",
    "Support tailored to your document and its purpose.",
    "Unterstützung passend zu Ihrem Dokument und Verwendungszweck.",
    "دعم يناسب وثيقتكم والغرض من استخدامها.",
    "Поддержка с учётом документа и цели его использования.",
  ),
  services: copy(
    "Belge ve tercüme hizmetleri",
    "Document and translation services",
    "Dokumenten- und Übersetzungsleistungen",
    "خدمات الوثائق والترجمة",
    "Услуги по документам и переводу",
  ),
  subtitle: copy(
    "Belgenizi, hedef dili ve kullanacağınız ülkeyi paylaşın. Gerekli hazırlığı, hizmet kapsamını ve teslim planını birlikte netleştirelim.",
    "Tell us about your document, target language and destination country. We will clarify preparation, service scope and delivery together.",
    "Nennen Sie Dokument, Zielsprache und Zielland. Gemeinsam klären wir Vorbereitung, Leistungsumfang und Lieferung.",
    "شاركوا نوع الوثيقة واللغة المطلوبة وبلد الاستخدام. نوضح معاً التحضير ونطاق الخدمة وخطة التسليم.",
    "Укажите документ, язык перевода и страну использования. Вместе уточним подготовку, объём услуг и план передачи.",
  ),
  about: copy(
    "Belgenizin her adımında, açık iletişim.",
    "Clear communication at every step of your document journey.",
    "Klare Kommunikation bei jedem Schritt rund um Ihr Dokument.",
    "تواصل واضح في كل خطوة تخص وثيقتكم.",
    "Понятное общение на каждом этапе работы с документом.",
  ),
  aboutBody: copy(
    "Best Tercümanlık olarak belge tercümesi ve onay süreçlerine ilişkin talepleri kullanım amacına göre değerlendiriyoruz. Ön incelemede belge türü, hedef dil, teslim tarihi ve alıcı kurumun bildirdiği koşullar birlikte ele alınır.",
    "At Best Tercümanlık, we assess document translation and certification requests according to their intended use. Our initial review considers document type, target language, deadline and the receiving institution's stated requirements.",
    "Bei Best Tercümanlık prüfen wir Übersetzungs- und Beglaubigungsanfragen nach ihrem Verwendungszweck. Dokumentart, Zielsprache, Termin und die Vorgaben der empfangenden Stelle werden gemeinsam betrachtet.",
    "في Best Tercümanlık نقيّم طلبات ترجمة الوثائق والتصديق بحسب الغرض من الاستخدام. تشمل المراجعة الأولية نوع الوثيقة واللغة والموعد والشروط المعلنة من الجهة المستلمة.",
    "В Best Tercümanlık мы рассматриваем запросы на перевод и заверение с учётом цели использования. При первичной оценке учитываются вид документа, язык, срок и требования принимающего учреждения.",
  ),
  approach: copy(
    "Kapsam ve ücret baştan netleşir; ek onay ya da belge gereksinimleri değerlendirme sırasında paylaşılır. Süre ve uygunluk, talebiniz incelendikten sonra teyit edilir.",
    "Scope and pricing are clarified in advance; any additional certification or document needs are discussed during review. Timing and availability are confirmed after assessing your request.",
    "Umfang und Preis werden vorab geklärt; zusätzlicher Beglaubigungs- oder Dokumentenbedarf wird bei der Prüfung besprochen. Dauer und Verfügbarkeit werden nach der Prüfung bestätigt.",
    "نوضح نطاق الخدمة والتكلفة مسبقاً، ونناقش أي تصديقات أو مستندات إضافية أثناء المراجعة. يُؤكد الوقت والتوفر بعد تقييم الطلب.",
    "Объём и стоимость согласуются заранее; дополнительные заверения и документы обсуждаются при оценке. Сроки и возможность выполнения подтверждаются после рассмотрения запроса.",
  ),
  preparation: copy(
    "Talebinizi hazırlarken",
    "Preparing your request",
    "Ihre Anfrage vorbereiten",
    "عند تحضير طلبكم",
    "Подготовка запроса",
  ),
  requirements: [
    copy(
      "Belge türünü ve sayfa sayısını belirtin.",
      "Specify the document type and page count.",
      "Geben Sie Dokumentart und Seitenzahl an.",
      "حددوا نوع الوثيقة وعدد الصفحات.",
      "Укажите вид документа и число страниц.",
    ),
    copy(
      "Kaynak dili, hedef dili ve kullanım ülkesini paylaşın.",
      "Share the source language, target language and destination country.",
      "Nennen Sie Ausgangssprache, Zielsprache und Zielland.",
      "اذكروا اللغة الأصلية ولغة الترجمة وبلد الاستخدام.",
      "Укажите исходный язык, язык перевода и страну использования.",
    ),
    copy(
      "Alıcı kurumun belge koşullarını ve teslim tarihinizi iletin.",
      "Provide the receiving institution's requirements and your deadline.",
      "Teilen Sie die Vorgaben der empfangenden Stelle und Ihren Termin mit.",
      "شاركوا شروط الجهة المستلمة والموعد المطلوب للتسليم.",
      "Сообщите требования принимающего учреждения и срок передачи.",
    ),
  ],
  steps: [
    [
      copy(
        "Talebinizi paylaşın",
        "Share your request",
        "Anfrage senden",
        "شاركوا طلبكم",
        "Отправьте запрос",
      ),
      copy(
        "Belge türünü, dili, kullanım yerini ve teslim beklentinizi yazın.",
        "Describe the document, language, destination and expected delivery.",
        "Beschreiben Sie Dokument, Sprache, Verwendungsort und gewünschten Termin.",
        "اذكروا نوع الوثيقة واللغة وجهة الاستخدام وموعد التسليم المطلوب.",
        "Опишите документ, язык, место использования и желаемый срок.",
      ),
    ],
    [
      copy(
        "Planı netleştirelim",
        "Clarify the plan",
        "Plan abstimmen",
        "لنوضح الخطة",
        "Согласуем план",
      ),
      copy(
        "Ön inceleme sonrasında kapsam, ücret ve gerekli hazırlık paylaşılır.",
        "After initial review, we share the scope, price and preparation needed.",
        "Nach der Vorprüfung nennen wir Umfang, Preis und nötige Vorbereitung.",
        "بعد المراجعة الأولية نوضح نطاق الخدمة والتكلفة والتحضيرات المطلوبة.",
        "После первичной оценки сообщим объём, стоимость и необходимые приготовления.",
      ),
    ],
    [
      copy(
        "Teslimi birlikte planlayın",
        "Plan delivery together",
        "Lieferung gemeinsam planen",
        "لنخطط التسليم معاً",
        "Спланируем передачу",
      ),
      copy(
        "Belge ve kurum koşullarına göre teslim biçimi ve zamanı teyit edilir.",
        "Delivery method and timing are confirmed according to document and institution requirements.",
        "Lieferweg und Termin werden nach Dokument- und Institutionsvorgaben bestätigt.",
        "تُؤكد طريقة التسليم ووقته وفق شروط الوثيقة والجهة المعنية.",
        "Способ и срок передачи подтверждаются с учётом документа и требований учреждения.",
      ),
    ],
  ],
  faqTitle: copy(
    "Belge sürecinizi netleştirelim.",
    "Let's clarify your document process.",
    "Klären wir Ihren Dokumentenablauf.",
    "لنوضح إجراءات وثيقتكم.",
    "Уточним порядок работы с документами.",
  ),
  faqs: [
    [
      copy(
        "Ücret ve teslim süresi nasıl belirlenir?",
        "How are price and turnaround determined?",
        "Wie werden Preis und Bearbeitungszeit bestimmt?",
        "كيف تُحدد التكلفة ومدة التسليم؟",
        "Как определяются стоимость и срок?",
      ),
      copy(
        "Dil çifti, belge uzunluğu, onay ihtiyacı ve teslim tarihi değerlendirilir. Size özel kapsam ve ücret, incelemenin ardından paylaşılır.",
        "We assess the language pair, document length, certification needs and deadline. Scope and pricing are provided after review.",
        "Sprachpaar, Umfang, Beglaubigungsbedarf und Termin werden geprüft. Danach erhalten Sie Leistungsumfang und Preis.",
        "نقيّم اللغات وطول الوثيقة والحاجة إلى التصديق والموعد المطلوب. نشارك نطاق الخدمة والتكلفة بعد المراجعة.",
        "Учитываются языковая пара, объём, необходимость заверения и срок. Объём услуг и стоимость сообщаются после оценки.",
      ),
    ],
    [
      copy(
        "Her belge için aynı onay süreci mi uygulanır?",
        "Does every document follow the same certification process?",
        "Gilt für jedes Dokument derselbe Beglaubigungsablauf?",
        "هل تتبع كل الوثائق إجراءات التصديق نفسها؟",
        "Одинаков ли порядок заверения для всех документов?",
      ),
      copy(
        "Hayır. Belgenin türü, düzenlendiği ülke, kullanılacağı ülke ve alıcı kurumun koşulları birlikte değerlendirilmelidir. İşlem sırası ve gerekli onaylar ilgili kurumlarla teyit edilir.",
        "No. Document type, country of issue, destination country and receiving institution requirements must be considered together. The sequence and required certifications are confirmed with the relevant institutions.",
        "Nein. Dokumentart, Ausstellungsland, Zielland und Vorgaben der empfangenden Stelle werden gemeinsam berücksichtigt. Reihenfolge und nötige Beglaubigungen werden mit den zuständigen Stellen abgestimmt.",
        "لا. يجب النظر إلى نوع الوثيقة وبلد إصدارها وبلد استخدامها وشروط الجهة المستلمة معاً. يُتحقق من ترتيب الإجراءات والتصديقات المطلوبة لدى الجهات المعنية.",
        "Нет. Учитываются вид документа, страна выдачи, страна использования и требования принимающей стороны. Порядок действий и необходимые заверения уточняются в соответствующих учреждениях.",
      ),
    ],
  ],
  footer: copy(
    "Belge tercümesi ve onay hazırlığında ihtiyacınıza göre planlanan destek.",
    "Support tailored to your document translation and certification preparation needs.",
    "Passende Unterstützung bei Dokumentenübersetzung und Beglaubigungsvorbereitung.",
    "دعم مخطط وفق احتياجات ترجمة وثائقكم والتحضير لتصديقها.",
    "Поддержка в переводе документов и подготовке к заверению с учётом ваших потребностей.",
  ),
  rights: copy(
    "Best Tercümanlık. Tüm hakları saklıdır.",
    "Best Tercümanlık. All rights reserved.",
    "Best Tercümanlık. Alle Rechte vorbehalten.",
    "Best Tercümanlık. جميع الحقوق محفوظة.",
    "Best Tercümanlık. Все права защищены.",
  ),
  contactHeading: copy(
    "Belge ve tercüme talebiniz",
    "Your document and translation request",
    "Ihre Dokumenten- und Übersetzungsanfrage",
    "طلبكم للوثائق والترجمة",
    "Ваш запрос по документам и переводу",
  ),
  contactIntro: copy(
    "Belgenizle ilgili ihtiyacınızı bize yazın. Dil, kullanım ülkesi ve teslim planını birlikte değerlendirelim.",
    "Tell us what you need for your document. We will review the language, destination country and delivery plan together.",
    "Schreiben Sie uns Ihren Dokumentenbedarf. Gemeinsam prüfen wir Sprache, Zielland und Lieferplan.",
    "اكتبوا لنا ما تحتاجونه بشأن وثيقتكم. نقيّم معاً اللغة وبلد الاستخدام وخطة التسليم.",
    "Расскажите о вашем документе. Вместе рассмотрим язык, страну использования и план передачи.",
  ),
  location: copy(
    "Kullanım ülkesi ve alıcı kurum",
    "Destination country and receiving institution",
    "Zielland und empfangende Stelle",
    "بلد الاستخدام والجهة المستلمة",
    "Страна использования и принимающее учреждение",
  ),
  locationHint: copy(
    "Örn. Almanya / üniversite başvurusu",
    "E.g. Germany / university application",
    "Z. B. Deutschland / Hochschulbewerbung",
    "مثلاً ألمانيا / طلب جامعي",
    "Например, Германия / поступление в университет",
  ),
  editorial: copy(
    "Tercüme ve belge süreçleri hakkında yazılarımızı keşfedin.",
    "Explore our articles on translation and document processes.",
    "Entdecken Sie unsere Beiträge zu Übersetzungen und Dokumentenabläufen.",
    "اكتشفوا مقالاتنا حول الترجمة وإجراءات الوثائق.",
    "Читайте наши материалы о переводе и работе с документами.",
  ),
  news: copy(
    "Haberlerimizi ve güncel duyurularımızı takip edin.",
    "Follow our news and latest announcements.",
    "Verfolgen Sie unsere Neuigkeiten und Mitteilungen.",
    "تابعوا أخبارنا وإعلاناتنا الجديدة.",
    "Следите за нашими новостями и объявлениями.",
  ),
};
export const documentServices = [
  {
    slug: "konsolosluk-onayi",
    title: copy(
      "Konsolosluk Onayları",
      "Consular Legalisation",
      "Konsularische Legalisation",
      "التصديقات القنصلية",
      "Консульская легализация",
    ),
    description: copy(
      "Konsolosluk işlemleri için belge tercümesi, ön inceleme ve onay hazırlığını birlikte planlayın.",
      "Plan document translation, initial review and certification preparation for consular procedures.",
      "Planen Sie Übersetzung, Vorprüfung und Beglaubigungsvorbereitung für konsularische Verfahren.",
      "خططوا لترجمة الوثائق والمراجعة الأولية والتحضير للتصديق في الإجراءات القنصلية.",
      "Спланируйте перевод, первичную оценку и подготовку документов для консульских процедур.",
    ),
    detail: copy(
      "Belgenin düzenlendiği ülkeyi, kullanılacağı ülkeyi ve ilgili temsilciliğin talep ettiği koşulları paylaşın. Tercüme ve onay hazırlığı, belge özelinde değerlendirilir; işlem sırası ilgili temsilcilikle teyit edilir.",
      "Share the country of issue, destination country and the relevant mission's requirements. Translation and certification preparation are assessed for your document; the sequence is confirmed with the mission.",
      "Nennen Sie Ausstellungsland, Zielland und Vorgaben der zuständigen Vertretung. Übersetzung und Vorbereitung werden dokumentbezogen geprüft; die Reihenfolge wird mit der Vertretung abgestimmt.",
      "اذكروا بلد الإصدار وبلد الاستخدام وشروط البعثة المعنية. تُقيّم الترجمة والتحضيرات بحسب الوثيقة، ويُتحقق من ترتيب الإجراءات لدى البعثة.",
      "Укажите страну выдачи, страну использования и требования представительства. Подготовка перевода и заверения оценивается для вашего документа; порядок уточняется в представительстве.",
    ),
    image: "/tid/photos/editorial-05-hero.webp",
  },
  {
    slug: "apostil-onayi",
    title: copy(
      "Apostil İşlemleri",
      "Apostille Procedures",
      "Apostille-Verfahren",
      "إجراءات الأبوستيل",
      "Оформление апостиля",
    ),
    description: copy(
      "Yurt dışında kullanılacak belgeleriniz için tercüme ve apostil hazırlığına uygun bir yol haritası oluşturun.",
      "Build a plan for translation and apostille preparation for documents to be used abroad.",
      "Erstellen Sie einen Plan für Übersetzung und Apostille-Vorbereitung Ihrer Auslandsdokumente.",
      "ضعوا خطة للترجمة والتحضير للأبوستيل لوثائق ستُستخدم خارج البلاد.",
      "Составьте план перевода и подготовки к апостилированию документов для использования за рубежом.",
    ),
    detail: copy(
      "Belgenin türü ve kullanılacağı ülke üzerinden tercüme ihtiyacını ve apostil hazırlığını birlikte değerlendirelim. Apostil, yetkili makam tarafından düzenlenir; gerekli belge ve işlem sırası ilgili makam ve alıcı kurumla teyit edilir.",
      "We review translation needs and apostille preparation based on document type and destination country. Apostilles are issued by a competent authority; documents and sequence are confirmed with that authority and the receiving institution.",
      "Wir prüfen Übersetzungsbedarf und Apostille-Vorbereitung nach Dokumentart und Zielland. Apostillen werden von einer zuständigen Behörde ausgestellt; Unterlagen und Reihenfolge werden dort und mit der empfangenden Stelle bestätigt.",
      "نقيّم احتياجات الترجمة والتحضير للأبوستيل بحسب نوع الوثيقة وبلد الاستخدام. تُصدره الجهة المختصة، وتُؤكد الوثائق وترتيب الإجراءات معها ومع الجهة المستلمة.",
      "Оценим необходимость перевода и подготовку к апостилю по виду документа и стране использования. Апостиль выдаёт компетентный орган; документы и порядок уточняются в нём и в принимающем учреждении.",
    ),
    image: "/tid/photos/editorial-07-hero.webp",
  },
  {
    slug: "noter-onayli-tercume",
    title: copy(
      "Noter Onaylı Tercüme",
      "Notarised Translation",
      "Notariell beglaubigte Übersetzung",
      "الترجمة المصدقة من الكاتب بالعدل",
      "Нотариально заверенный перевод",
    ),
    description: copy(
      "Noter onayı istenen belgelerde tercüme, belge hazırlığı ve teslim aşamalarını netleştirin.",
      "Clarify translation, document preparation and delivery when notarisation is requested.",
      "Klären Sie Übersetzung, Dokumentenvorbereitung und Lieferung bei geforderter notarieller Beglaubigung.",
      "وضحوا الترجمة وتحضير الوثائق وتسليمها عند طلب تصديق الكاتب بالعدل.",
      "Уточните перевод, подготовку документов и передачу при необходимости нотариального заверения.",
    ),
    detail: copy(
      "Alıcı kurumun noter onaylı tercüme talebini ve belgenizi birlikte inceleyelim. Tercüme dili, belge aslı veya örneği ihtiyacı, noterliğin koşulları ve teslim biçimi işlem öncesinde değerlendirilir.",
      "We review your document and the receiving institution's notarised translation request together. Target language, original or copy requirements, notary conditions and delivery are assessed before processing.",
      "Wir prüfen Ihr Dokument und die Forderung nach beglaubigter Übersetzung. Zielsprache, Original- oder Kopiebedarf, Notariatsvorgaben und Lieferung werden vorab geklärt.",
      "نراجع وثيقتكم وطلب الجهة المستلمة للترجمة المصدقة. تُقيّم اللغة والحاجة إلى الأصل أو النسخة وشروط الكاتب بالعدل وطريقة التسليم قبل الإجراء.",
      "Вместе рассмотрим документ и требование принимающей стороны о нотариальном переводе. Заранее уточним язык, необходимость оригинала или копии, условия нотариуса и способ передачи.",
    ),
    image: "/tid/photos/editorial-11-hero.webp",
  },
  {
    slug: "belge-tercumesi",
    title: copy(
      "Belge Tercümesi",
      "Document Translation",
      "Dokumentenübersetzung",
      "ترجمة الوثائق",
      "Перевод документов",
    ),
    description: copy(
      "Bireysel ve kurumsal belgeleriniz için dil, terminoloji ve teslim beklentisine göre tercüme planlayın.",
      "Plan translation for personal and business documents according to language, terminology and delivery needs.",
      "Planen Sie Übersetzungen privater und geschäftlicher Dokumente nach Sprache, Terminologie und Termin.",
      "خططوا لترجمة الوثائق الشخصية والمؤسسية وفق اللغة والمصطلحات ومتطلبات التسليم.",
      "Спланируйте перевод личных и деловых документов с учётом языка, терминологии и срока.",
    ),
    detail: copy(
      "Kaynak dosya, hedef dil ve kullanım amacını paylaşın. Kimlik, eğitim, ticari veya teknik belge talebiniz; içerik, sayfa sayısı, özel terminoloji ve biçim beklentisi açısından değerlendirilir.",
      "Share the source file, target language and purpose. Requests for identity, educational, business or technical documents are reviewed for content, length, terminology and format.",
      "Teilen Sie Ausgangsdatei, Zielsprache und Verwendungszweck. Identitäts-, Bildungs-, Geschäfts- und technische Dokumente werden nach Inhalt, Umfang, Terminologie und Format geprüft.",
      "شاركوا الملف الأصلي واللغة والغرض. تُراجع وثائق الهوية والتعليم والتجارة والتقنية من حيث المحتوى والحجم والمصطلحات والتنسيق.",
      "Передайте исходный файл, язык и цель. Запросы по личным, учебным, деловым и техническим документам оцениваются по содержанию, объёму, терминологии и формату.",
    ),
    image: "/tid/photos/editorial-10-hero.webp",
  },
  {
    slug: "yeminli-tercume",
    title: copy(
      "Yeminli Tercüme",
      "Sworn Translation",
      "Beeidigte Übersetzung",
      "الترجمة المحلفة",
      "Присяжный перевод",
    ),
    description: copy(
      "Yeminli tercüme istenen belgelerde hedef dil, kurum koşulları ve teslim planını birlikte değerlendirin.",
      "Review target language, institutional requirements and delivery for documents requiring sworn translation.",
      "Prüfen Sie Zielsprache, Institutionsvorgaben und Lieferplan für geforderte beeidigte Übersetzungen.",
      "قيّموا اللغة وشروط الجهة وخطة التسليم للوثائق التي تتطلب ترجمة محلفة.",
      "Оцените язык, требования учреждения и план передачи документов, требующих присяжного перевода.",
    ),
    detail: copy(
      "Alıcı kurumun istediği tercüme biçimini ve varsa ek onay talebini paylaşın. Belge türü ve dil çifti incelenir; noter, apostil veya başka bir onay ihtiyacı ayrıca değerlendirilir.",
      "Share the translation format and any additional certification requested by the receiving institution. We review document type and language pair; notarisation, apostille or other certification needs are assessed separately.",
      "Nennen Sie das verlangte Übersetzungsformat und zusätzliche Beglaubigungen. Wir prüfen Dokumentart und Sprachpaar; Notar-, Apostille- und sonstiger Beglaubigungsbedarf wird gesondert betrachtet.",
      "شاركوا شكل الترجمة المطلوب وأي تصديقات إضافية. نراجع نوع الوثيقة واللغات، ونقيّم الحاجة إلى الكاتب بالعدل أو الأبوستيل أو غيرهما بشكل منفصل.",
      "Сообщите формат перевода и дополнительные заверения, требуемые учреждением. Проверим вид документа и языковую пару; нотариальное заверение, апостиль и другие подтверждения оцениваются отдельно.",
    ),
    image: "/tid/photos/editorial-01-card.webp",
  },
] as const;
export type DocumentService = (typeof documentServices)[number];
export const domainProfiles = {
  consulate: {
    host: "konsoloslukonaylari.com",
    url: "https://www.konsoloslukonaylari.com",
    service: "konsolosluk-onayi",
    image: "/tid/photos/editorial-01-hero.webp",
    related: ["konsolosluk-onayi", "belge-tercumesi", "yeminli-tercume"],
  },
  apostille: {
    host: "apostilislemleri.net",
    url: "https://www.apostilislemleri.net",
    service: "apostil-onayi",
    image: "/tid/photos/editorial-03-hero.webp",
    related: ["apostil-onayi", "yeminli-tercume", "noter-onayli-tercume"],
  },
  notary: {
    host: "noteronaylitercume.net",
    url: "https://www.noteronaylitercume.net",
    service: "noter-onayli-tercume",
    image: "/tid/photos/editorial-04-hero.webp",
    related: ["noter-onayli-tercume", "yeminli-tercume", "belge-tercumesi"],
  },
  office: {
    host: "tercumeofisi.net.tr",
    url: "https://tercumeofisi.net.tr",
    service: "belge-tercumesi",
    image: "/tid/photos/editorial-08-hero.webp",
    related: ["belge-tercumesi", "yeminli-tercume", "noter-onayli-tercume"],
  },
  sworn: {
    host: "yeminlitercume.net.tr",
    url: "https://yeminlitercume.net.tr",
    service: "yeminli-tercume",
    image: "/tid/photos/editorial-06-hero.webp",
    related: ["yeminli-tercume", "noter-onayli-tercume", "apostil-onayi"],
  },
} as const;
export type DomainProfileId = keyof typeof domainProfiles;
export function getDocumentService(slug: string) {
  return documentServices.find((service) => service.slug === slug);
}
export function getDomainProfile(id?: DomainProfileId) {
  if (!id) return undefined;
  const profile = domainProfiles[id];
  const service = getDocumentService(profile.service)!;
  return {
    ...profile,
    title: id === "office" ? copyOfficeTitle : service.title,
    description: service.description,
    detail: service.detail,
  };
}
const copyOfficeTitle = copy(
  "Tercüme Ofisi",
  "Translation Office",
  "Übersetzungsbüro",
  "مكتب الترجمة",
  "Бюро переводов",
);
