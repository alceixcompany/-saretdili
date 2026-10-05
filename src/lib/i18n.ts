export const locales = ['tr', 'en', 'ar', 'ru', 'fa', 'fr', 'de'] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; nativeLabel: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  tr: { label: 'Türkçe', nativeLabel: 'Türkçe', dir: 'ltr', htmlLang: 'tr' },
  en: { label: 'İngilizce', nativeLabel: 'English', dir: 'ltr', htmlLang: 'en' },
  ar: { label: 'Arapça', nativeLabel: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  ru: { label: 'Rusça', nativeLabel: 'Русский', dir: 'ltr', htmlLang: 'ru' },
  fa: { label: 'Farsça', nativeLabel: 'فارسی', dir: 'rtl', htmlLang: 'fa' },
  fr: { label: 'Fransızca', nativeLabel: 'Français', dir: 'ltr', htmlLang: 'fr' },
  de: { label: 'Almanca', nativeLabel: 'Deutsch', dir: 'ltr', htmlLang: 'de' },
};

export const defaultLocale: Locale = 'tr';

type TranslationMap = Record<string, Partial<Record<Exclude<Locale, 'tr'>, string>>>;

export const translations: TranslationMap = {
  'Ana Sayfa': { en: 'Home', ar: 'الرئيسية', ru: 'Главная', fa: 'خانه', fr: 'Accueil', de: 'Startseite' },
  'Hakkımızda': { en: 'About', ar: 'من نحن', ru: 'О нас', fa: 'درباره ما', fr: 'À propos', de: 'Über uns' },
  'Hizmetlerimiz': { en: 'Services', ar: 'خدماتنا', ru: 'Услуги', fa: 'خدمات ما', fr: 'Services', de: 'Leistungen' },
  'Dillerimiz': { en: 'Languages', ar: 'اللغات', ru: 'Языки', fa: 'زبان‌ها', fr: 'Langues', de: 'Sprachen' },
  'Blog': { en: 'Blog', ar: 'المدونة', ru: 'Блог', fa: 'بلاگ', fr: 'Blog', de: 'Blog' },
  'İletişim': { en: 'Contact', ar: 'اتصل بنا', ru: 'Контакты', fa: 'تماس', fr: 'Contact', de: 'Kontakt' },
  'WhatsApp': { en: 'WhatsApp', ar: 'واتساب', ru: 'WhatsApp', fa: 'واتساپ', fr: 'WhatsApp', de: 'WhatsApp' },
  'Teklif Al': { en: 'Get a Quote', ar: 'احصل على عرض', ru: 'Получить расчет', fa: 'دریافت پیشنهاد', fr: 'Demander un devis', de: 'Angebot anfordern' },
  'Hizmetleri İncele': { en: 'View Services', ar: 'استعرض الخدمات', ru: 'Посмотреть услуги', fa: 'مشاهده خدمات', fr: 'Voir les services', de: 'Leistungen ansehen' },
  'Worldwide Accepted Translation': { en: 'Worldwide Accepted Translation', ar: 'ترجمة معتمدة عالمياً', ru: 'Переводы, принимаемые по всему миру', fa: 'ترجمه قابل قبول در سراسر جهان', fr: 'Traduction acceptée dans le monde entier', de: 'Weltweit akzeptierte Übersetzungen' },
  'YP Metropol Tercüme': { en: 'YP Metropol Tercüme', ar: 'مكتب YP Metropol للترجمة', ru: 'Бюро переводов YP Metropol', fa: 'دفتر ترجمه YP Metropol', fr: 'YP Metropol Tercüme', de: 'YP Metropol Tercüme' },
  'Pasaport, vize, ikamet ve resmi evrak süreçleri için hızlı,': { en: 'Fast, careful and approval-focused translation solutions for', ar: 'حلول ترجمة سريعة ودقيقة وموجهة للقبول من أجل', ru: 'Быстрые, внимательные и ориентированные на принятие переводы для', fa: 'راهکارهای ترجمه سریع، دقیق و قابل پذیرش برای', fr: 'Des solutions de traduction rapides, attentives et axées sur l’acceptation pour', de: 'Schnelle, sorgfältige und anerkennungsorientierte Übersetzungen für' },
  'dikkatli ve kabul odaklı tercüme çözümleri.': { en: 'passport, visa, residence and official document processes.', ar: 'إجراءات الجوازات والتأشيرات والإقامة والوثائق الرسمية.', ru: 'паспортов, виз, ВНЖ и официальных документов.', fa: 'فرایندهای پاسپورت، ویزا، اقامت و اسناد رسمی.', fr: 'les passeports, visas, titres de séjour et documents officiels.', de: 'Pass-, Visa-, Aufenthalts- und offizielle Dokumentenprozesse.' },
  'Yeminli Tercüme': { en: 'Sworn Translation', ar: 'ترجمة محلفة', ru: 'Присяжный перевод', fa: 'ترجمه رسمی', fr: 'Traduction assermentée', de: 'Beglaubigte Übersetzung' },
  'Noter Onayı': { en: 'Notary Approval', ar: 'تصديق كاتب العدل', ru: 'Нотариальное заверение', fa: 'تأیید دفتر اسناد رسمی', fr: 'Certification notariale', de: 'Notarielle Beglaubigung' },
  'Pasaport Çevirisi': { en: 'Passport Translation', ar: 'ترجمة جواز السفر', ru: 'Перевод паспорта', fa: 'ترجمه پاسپورت', fr: 'Traduction de passeport', de: 'Passübersetzung' },
  'Konum': { en: 'Location', ar: 'الموقع', ru: 'Локация', fa: 'موقعیت', fr: 'Localisation', de: 'Standort' },
  'Telefon': { en: 'Phone', ar: 'الهاتف', ru: 'Телефон', fa: 'تلفن', fr: 'Téléphone', de: 'Telefon' },
  'İstanbul / Türkiye': { en: 'Istanbul / Turkey', ar: 'إسطنبول / تركيا', ru: 'Стамбул / Турция', fa: 'استانبول / ترکیه', fr: 'Istanbul / Turquie', de: 'Istanbul / Türkei' },

  'Global Hizmet': { en: 'Global Service', ar: 'خدمة عالمية', ru: 'Глобальный сервис', fa: 'خدمات جهانی', fr: 'Service mondial', de: 'Globaler Service' },
  'Tüm ülkelere yönelik resmi evrak tercüme desteği': { en: 'Official document translation support for all countries', ar: 'دعم ترجمة الوثائق الرسمية لجميع الدول', ru: 'Перевод официальных документов для всех стран', fa: 'پشتیبانی ترجمه اسناد رسمی برای همه کشورها', fr: 'Traduction de documents officiels pour tous les pays', de: 'Übersetzung offizieller Dokumente für alle Länder' },
  'Başvuru, vize, eğitim, ikamet ve noter süreçleri için farklı ülkelerin belge formatlarına uygun çalışıyoruz.': { en: 'We work according to document formats required by different countries for applications, visas, education, residence and notary processes.', ar: 'نعمل وفق صيغ المستندات المطلوبة في مختلف الدول للطلبات والتأشيرات والتعليم والإقامة والتوثيق.', ru: 'Мы работаем с форматами документов разных стран для заявлений, виз, обучения, проживания и нотариальных процедур.', fa: 'برای درخواست، ویزا، آموزش، اقامت و امور دفتر اسناد رسمی مطابق فرمت مدارک کشورهای مختلف کار می‌کنیم.', fr: 'Nous travaillons selon les formats de documents requis par différents pays pour les demandes, visas, études, résidence et démarches notariales.', de: 'Wir arbeiten nach den Dokumentformaten verschiedener Länder für Anträge, Visa, Bildung, Aufenthalt und notarielle Verfahren.' },

  'Resmi evraklarda doğru terminoloji': { en: 'Correct terminology in official documents', ar: 'مصطلحات دقيقة في الوثائق الرسمية', ru: 'Точная терминология в официальных документах', fa: 'اصطلاحات دقیق در اسناد رسمی', fr: 'Terminologie correcte dans les documents officiels', de: 'Korrekte Terminologie in offiziellen Dokumenten' },
  'Vize ve ikamet dosyaları için hızlı akış': { en: 'Fast workflow for visa and residence files', ar: 'مسار سريع لملفات التأشيرة والإقامة', ru: 'Быстрый процесс для визовых и резидентских документов', fa: 'روند سریع برای پرونده‌های ویزا و اقامت', fr: 'Flux rapide pour les dossiers de visa et de résidence', de: 'Schneller Ablauf für Visa- und Aufenthaltsunterlagen' },
  'Noter onayı ve apostil süreçlerine uygun hazırlık': { en: 'Preparation suitable for notary and apostille processes', ar: 'تحضير مناسب لإجراءات التوثيق والأبوستيل', ru: 'Подготовка для нотариата и апостиля', fa: 'آماده‌سازی مناسب برای تأیید دفترخانه و آپوستیل', fr: 'Préparation adaptée aux démarches notariales et apostille', de: 'Vorbereitung für Notar- und Apostille-Verfahren' },
  'İngilizce, Arapça, Farsça, Fransızca ve Rusça destek': { en: 'Support in English, Arabic, Persian, French and Russian', ar: 'دعم بالإنجليزية والعربية والفارسية والفرنسية والروسية', ru: 'Поддержка на английском, арабском, персидском, французском и русском', fa: 'پشتیبانی انگلیسی، عربی، فارسی، فرانسوی و روسی', fr: 'Support en anglais, arabe, persan, français et russe', de: 'Unterstützung auf Englisch, Arabisch, Persisch, Französisch und Russisch' },
  '5+': { en: '5+', ar: '+5', ru: '5+', fa: '+5', fr: '5+', de: '5+' },
  'Dil desteği': { en: 'Language support', ar: 'دعم لغوي', ru: 'Языковая поддержка', fa: 'پشتیبانی زبان', fr: 'Langues prises en charge', de: 'Sprachunterstützung' },
  '1000+': { en: '1000+', ar: '+1000', ru: '1000+', fa: '+1000', fr: '1000+', de: '1000+' },
  'Tamamlanan evrak': { en: 'Completed documents', ar: 'وثائق مكتملة', ru: 'Завершенные документы', fa: 'اسناد تکمیل‌شده', fr: 'Documents finalisés', de: 'Abgeschlossene Dokumente' },
  'Hızlı': { en: 'Fast', ar: 'سريع', ru: 'Быстро', fa: 'سریع', fr: 'Rapide', de: 'Schnell' },
  'Teslim yaklaşımı': { en: 'Delivery approach', ar: 'نهج التسليم', ru: 'Подход к срокам', fa: 'رویکرد تحویل', fr: 'Approche de livraison', de: 'Lieferansatz' },
  'Resmi süreç odağı': { en: 'Official process focus', ar: 'تركيز على الإجراءات الرسمية', ru: 'Фокус на официальном процессе', fa: 'تمرکز بر روند رسمی', fr: 'Orientation démarches officielles', de: 'Fokus auf offizielle Verfahren' },
  'Belgeleriniz düzenli ve kontrollü ilerler': { en: 'Your documents move forward in an organized and controlled way', ar: 'تسير وثائقكم بشكل منظم وتحت المتابعة', ru: 'Ваши документы проходят организованно и под контролем', fa: 'اسناد شما منظم و کنترل‌شده پیش می‌رود', fr: 'Vos documents avancent de façon organisée et contrôlée', de: 'Ihre Dokumente werden strukturiert und kontrolliert bearbeitet' },
  "YP Metropol'te tercüme yalnızca metin çevirmek değil, resmi süreci doğru hazırlamaktır": { en: 'At YP Metropol, translation is not only converting text, but preparing the official process correctly', ar: 'في YP Metropol، الترجمة ليست مجرد نقل نص، بل إعداد الإجراء الرسمي بشكل صحيح', ru: 'В YP Metropol перевод — это не просто текст, а правильная подготовка официального процесса', fa: 'در YP Metropol ترجمه فقط تبدیل متن نیست، بلکه آماده‌سازی درست روند رسمی است', fr: 'Chez YP Metropol, traduire ne consiste pas seulement à convertir un texte, mais à préparer correctement la démarche officielle', de: 'Bei YP Metropol bedeutet Übersetzung nicht nur Textübertragung, sondern die korrekte Vorbereitung offizieller Verfahren' },
  'Pasaport, diploma, vekaletname, kimlik, sözleşme ve vize evraklarında': { en: 'For passports, diplomas, powers of attorney, IDs, contracts and visa documents,', ar: 'في الجوازات والشهادات والوكالات والهويات والعقود ووثائق التأشيرة،', ru: 'Для паспортов, дипломов, доверенностей, удостоверений, договоров и визовых документов', fa: 'برای پاسپورت، دیپلم، وکالت‌نامه، کارت شناسایی، قرارداد و مدارک ویزا،', fr: 'Pour les passeports, diplômes, procurations, pièces d’identité, contrats et documents de visa,', de: 'Für Pässe, Diplome, Vollmachten, Ausweise, Verträge und Visadokumente' },
  'belge türüne göre doğru format, terminoloji ve teslim planı oluşturuyoruz.': { en: 'we create the right format, terminology and delivery plan according to the document type.', ar: 'نحدد الصيغة والمصطلحات وخطة التسليم المناسبة حسب نوع الوثيقة.', ru: 'мы подбираем правильный формат, терминологию и план сдачи по типу документа.', fa: 'فرمت، اصطلاحات و برنامه تحویل مناسب را بر اساس نوع سند تنظیم می‌کنیم.', fr: 'nous préparons le format, la terminologie et le plan de livraison adaptés au type de document.', de: 'erstellen wir je nach Dokumenttyp das passende Format, die Terminologie und den Lieferplan.' },

  'Profesyonel Tercüme': { en: 'Professional Translation', ar: 'ترجمة احترافية', ru: 'Профессиональный перевод', fa: 'ترجمه حرفه‌ای', fr: 'Traduction professionnelle', de: 'Professionelle Übersetzung' },
  'Resmi belge': { en: 'Official document', ar: 'وثائق رسمية', ru: 'Официальные документы', fa: 'سند رسمی', fr: 'Document officiel', de: 'Offizielle Dokumente' },
  'çözümleri': { en: 'solutions', ar: 'حلول', ru: 'решения', fa: 'راهکارها', fr: 'solutions', de: 'Lösungen' },
  'Pasaport, diploma, vize, noter onaylı ve hukuki evrak tercümelerinde hızlı ve düzenli süreç.': { en: 'A fast and organized process for passport, diploma, visa, notarized and legal document translations.', ar: 'إجراء سريع ومنظم لترجمة الجوازات والشهادات والتأشيرات والوثائق الموثقة والقانونية.', ru: 'Быстрый и организованный процесс для переводов паспортов, дипломов, визовых, нотариальных и юридических документов.', fa: 'روندی سریع و منظم برای ترجمه پاسپورت، دیپلم، ویزا، اسناد محضری و حقوقی.', fr: 'Un processus rapide et organisé pour les traductions de passeports, diplômes, visas, documents notariés et juridiques.', de: 'Ein schneller und strukturierter Ablauf für Pass-, Diplom-, Visa-, notarielle und juristische Übersetzungen.' },
  'HİZMETLER': { en: 'SERVICES', ar: 'الخدمات', ru: 'УСЛУГИ', fa: 'خدمات', fr: 'SERVICES', de: 'LEISTUNGEN' },
  'Evrak türüne göre planlanan': { en: 'Planned according to document type', ar: 'مخططة حسب نوع الوثيقة', ru: 'Планируется по типу документа', fa: 'برنامه‌ریزی شده بر اساس نوع سند', fr: 'Planifiées selon le type de document', de: 'Nach Dokumenttyp geplant' },
  'tercüme hizmetleri': { en: 'translation services', ar: 'خدمات الترجمة', ru: 'переводческие услуги', fa: 'خدمات ترجمه', fr: 'services de traduction', de: 'Übersetzungsleistungen' },
  'Belgenizin kullanım amacını netleştirir, hedef dili ve onay ihtiyacını': { en: 'We clarify the purpose of your document, assess the target language and approval needs,', ar: 'نوضح غرض استخدام وثيقتكم ونقيّم اللغة المطلوبة والحاجة إلى التصديق،', ru: 'Мы уточняем цель использования документа, целевой язык и необходимость заверения,', fa: 'هدف استفاده از سند، زبان مقصد و نیاز به تأیید را مشخص می‌کنیم،', fr: 'Nous clarifions l’usage de votre document, la langue cible et les besoins de validation,', de: 'Wir klären den Verwendungszweck Ihres Dokuments, die Zielsprache und den Beglaubigungsbedarf,' },
  'değerlendirir, teslim planını baştan paylaşırız.': { en: 'and share the delivery plan from the start.', ar: 'ونشارك خطة التسليم منذ البداية.', ru: 'и заранее сообщаем план сдачи.', fa: 'و برنامه تحویل را از ابتدا اعلام می‌کنیم.', fr: 'puis nous partageons le plan de livraison dès le départ.', de: 'und teilen den Lieferplan von Anfang an mit.' },
  'Pasaport Tercümesi': { en: 'Passport Translation', ar: 'ترجمة جواز السفر', ru: 'Перевод паспорта', fa: 'ترجمه پاسپورت', fr: 'Traduction de passeport', de: 'Passübersetzung' },
  'Vize, ikamet, seyahat ve resmi başvuru süreçleri için pasaport çevirisi.': { en: 'Passport translation for visa, residence, travel and official application processes.', ar: 'ترجمة جواز السفر لإجراءات التأشيرة والإقامة والسفر والطلبات الرسمية.', ru: 'Перевод паспорта для виз, ВНЖ, поездок и официальных заявлений.', fa: 'ترجمه پاسپورت برای ویزا، اقامت، سفر و درخواست‌های رسمی.', fr: 'Traduction de passeport pour les visas, séjours, voyages et démarches officielles.', de: 'Passübersetzung für Visa-, Aufenthalts-, Reise- und offizielle Antragsverfahren.' },
  'Vize başvuruları': { en: 'Visa applications', ar: 'طلبات التأشيرة', ru: 'Визовые заявления', fa: 'درخواست‌های ویزا', fr: 'Demandes de visa', de: 'Visaanträge' },
  'İkamet işlemleri': { en: 'Residence procedures', ar: 'إجراءات الإقامة', ru: 'Процедуры ВНЖ', fa: 'امور اقامت', fr: 'Démarches de résidence', de: 'Aufenthaltsverfahren' },
  'Hızlı teslim': { en: 'Fast delivery', ar: 'تسليم سريع', ru: 'Быстрая сдача', fa: 'تحویل سریع', fr: 'Livraison rapide', de: 'Schnelle Lieferung' },
  'Noter Onaylı Tercüme': { en: 'Notarized Translation', ar: 'ترجمة موثقة', ru: 'Нотариально заверенный перевод', fa: 'ترجمه با تأیید دفترخانه', fr: 'Traduction notariée', de: 'Notariell beglaubigte Übersetzung' },
  'Diploma ve Transkript': { en: 'Diploma and Transcript', ar: 'الشهادة وكشف الدرجات', ru: 'Диплом и транскрипт', fa: 'دیپلم و ریزنمرات', fr: 'Diplôme et relevé de notes', de: 'Diplom und Zeugnis' },
  'Vize Evrakları': { en: 'Visa Documents', ar: 'وثائق التأشيرة', ru: 'Визовые документы', fa: 'مدارک ویزا', fr: 'Documents de visa', de: 'Visaunterlagen' },
  'Hukuki Tercüme': { en: 'Legal Translation', ar: 'ترجمة قانونية', ru: 'Юридический перевод', fa: 'ترجمه حقوقی', fr: 'Traduction juridique', de: 'Juristische Übersetzung' },
  'Accepted worldwide': { en: 'Accepted worldwide', ar: 'مقبول عالمياً', ru: 'Принимается по всему миру', fa: 'قابل پذیرش در سراسر جهان', fr: 'Accepté dans le monde entier', de: 'Weltweit akzeptiert' },
  'Accurate details': { en: 'Accurate details', ar: 'تفاصيل دقيقة', ru: 'Точные детали', fa: 'جزئیات دقیق', fr: 'Détails précis', de: 'Genaue Details' },
  'Fast turnaround': { en: 'Fast turnaround', ar: 'إنجاز سريع', ru: 'Быстрый срок', fa: 'انجام سریع', fr: 'Délai rapide', de: 'Schnelle Bearbeitung' },

  'Galeri': { en: 'Gallery', ar: 'المعرض', ru: 'Галерея', fa: 'گالری', fr: 'Galerie', de: 'Galerie' },
  'Galeri yükleniyor...': { en: 'Loading gallery...', ar: 'جارٍ تحميل المعرض...', ru: 'Галерея загружается...', fa: 'در حال بارگذاری گالری...', fr: 'Chargement de la galerie...', de: 'Galerie wird geladen...' },
  'Resmi evrak süreçlerinden': { en: 'Selected work areas from', ar: 'مساحات عمل مختارة من', ru: 'Избранные рабочие зоны из', fa: 'فضاهای کاری منتخب از', fr: 'Espaces de travail sélectionnés issus des', de: 'Ausgewählte Arbeitsbereiche aus' },
  'seçilen çalışma alanları': { en: 'official document processes', ar: 'إجراءات الوثائق الرسمية', ru: 'процессов официальных документов', fa: 'فرایندهای اسناد رسمی', fr: 'démarches de documents officiels', de: 'offiziellen Dokumentenprozessen' },
  'Pasaport, noter onayı ve resmi belge tercümesi için hazırlanan çalışma görselleri.': { en: 'Work visuals prepared for passport, notary approval and official document translation.', ar: 'صور عمل معدة لترجمة الجوازات والتوثيق والوثائق الرسمية.', ru: 'Рабочие материалы для перевода паспортов, нотариального заверения и официальных документов.', fa: 'تصاویر کاری آماده‌شده برای ترجمه پاسپورت، تأیید دفترخانه و اسناد رسمی.', fr: 'Visuels de travail préparés pour les passeports, validations notariales et documents officiels.', de: 'Arbeitsbilder für Pass-, Notar- und offizielle Dokumentenübersetzungen.' },
  'Detayları Görüntüle': { en: 'View Details', ar: 'عرض التفاصيل', ru: 'Посмотреть детали', fa: 'مشاهده جزئیات', fr: 'Voir les détails', de: 'Details ansehen' },
  'Tüm Galeriyi Keşfedin': { en: 'Explore Full Gallery', ar: 'استكشف المعرض الكامل', ru: 'Открыть всю галерею', fa: 'مشاهده کل گالری', fr: 'Explorer toute la galerie', de: 'Gesamte Galerie ansehen' },

  'SIK SORULAN SORULAR': { en: 'FREQUENTLY ASKED QUESTIONS', ar: 'الأسئلة الشائعة', ru: 'ЧАСТЫЕ ВОПРОСЫ', fa: 'پرسش‌های متداول', fr: 'QUESTIONS FRÉQUENTES', de: 'HÄUFIGE FRAGEN' },
  'Aklınıza takılan sorular için': { en: 'Short and clear answers', ar: 'إجابات قصيرة وواضحة', ru: 'Короткие и ясные ответы', fa: 'پاسخ‌های کوتاه و روشن', fr: 'Des réponses courtes et claires', de: 'Kurze und klare Antworten' },
  'kısa ve net yanıtlar': { en: 'to your questions', ar: 'لأسئلتكم', ru: 'на ваши вопросы', fa: 'به پرسش‌های شما', fr: 'à vos questions', de: 'auf Ihre Fragen' },
  'Evrak gönderimi, teslim süresi, noter onayı ve dil seçenekleriyle ilgili': { en: 'We have gathered the most common questions about sending documents, delivery times, notary approval and language options', ar: 'جمعنا أكثر الأسئلة شيوعاً حول إرسال الوثائق ومدة التسليم والتوثيق وخيارات اللغة', ru: 'Мы собрали самые частые вопросы об отправке документов, сроках, нотариате и языках', fa: 'پرسش‌های رایج درباره ارسال سند، زمان تحویل، تأیید دفترخانه و گزینه‌های زبان را گردآوری کرده‌ایم', fr: 'Nous avons rassemblé les questions les plus fréquentes sur l’envoi de documents, les délais, la notarisation et les langues', de: 'Wir haben die häufigsten Fragen zu Dokumentenversand, Lieferzeit, Notarbestätigung und Sprachen zusammengestellt' },
  'en çok merak edilen konuları sizin için bir araya getirdik.': { en: 'in one place for you.', ar: 'في مكان واحد لكم.', ru: 'в одном месте.', fa: 'در یک جا برای شما.', fr: 'au même endroit.', de: 'an einem Ort für Sie.' },
  'Tercüme için belgeyi nasıl gönderebilirim?': { en: 'How can I send my document for translation?', ar: 'كيف يمكنني إرسال وثيقتي للترجمة؟', ru: 'Как отправить документ на перевод?', fa: 'چگونه می‌توانم سندم را برای ترجمه ارسال کنم؟', fr: 'Comment envoyer mon document pour traduction ?', de: 'Wie kann ich mein Dokument zur Übersetzung senden?' },
  'Noter onaylı tercüme yapıyor musunuz?': { en: 'Do you provide notarized translation?', ar: 'هل تقدمون ترجمة موثقة؟', ru: 'Вы делаете нотариально заверенный перевод?', fa: 'آیا ترجمه با تأیید دفترخانه انجام می‌دهید؟', fr: 'Proposez-vous une traduction notariée ?', de: 'Bieten Sie notariell beglaubigte Übersetzungen an?' },
  'Fiyat nasıl belirlenir?': { en: 'How is the price determined?', ar: 'كيف يتم تحديد السعر؟', ru: 'Как определяется цена?', fa: 'قیمت چگونه تعیین می‌شود؟', fr: 'Comment le prix est-il déterminé ?', de: 'Wie wird der Preis bestimmt?' },

  'Bize kolayca': { en: 'You can easily', ar: 'يمكنكم بسهولة', ru: 'Вы можете легко', fa: 'به راحتی می‌توانید', fr: 'Vous pouvez facilement', de: 'Sie können uns einfach' },
  'ulaşabilirsiniz': { en: 'reach us', ar: 'التواصل معنا', ru: 'связаться с нами', fa: 'با ما تماس بگیرید', fr: 'nous joindre', de: 'erreichen' },
  'Belgenizi paylaşın; dil, onay ihtiyacı ve teslim süresine göre hızlıca teklif alabilirsiniz.': { en: 'Share your document and quickly receive a quote based on language, approval needs and delivery time.', ar: 'شاركوا وثيقتكم واحصلوا بسرعة على عرض حسب اللغة والحاجة إلى التصديق ومدة التسليم.', ru: 'Отправьте документ и быстро получите расчет по языку, заверению и срокам.', fa: 'سند خود را ارسال کنید و بر اساس زبان، نیاز به تأیید و زمان تحویل سریعاً پیشنهاد دریافت کنید.', fr: 'Partagez votre document et recevez rapidement un devis selon la langue, les validations et le délai.', de: 'Senden Sie Ihr Dokument und erhalten Sie schnell ein Angebot je nach Sprache, Beglaubigung und Lieferzeit.' },
  'TEKLİF VE BİLGİ': { en: 'QUOTE AND INFO', ar: 'عرض ومعلومات', ru: 'РАСЧЕТ И ИНФОРМАЦИЯ', fa: 'پیشنهاد و اطلاعات', fr: 'DEVIS ET INFO', de: 'ANGEBOT UND INFO' },
  'YP Metropol ile tercüme sürecinizi hızlıca planlayalım': { en: 'Let’s quickly plan your translation process with YP Metropol', ar: 'لنخطط بسرعة لعملية الترجمة مع YP Metropol', ru: 'Быстро спланируем ваш перевод с YP Metropol', fa: 'فرایند ترجمه شما را با YP Metropol سریع برنامه‌ریزی کنیم', fr: 'Planifions rapidement votre traduction avec YP Metropol', de: 'Planen wir Ihren Übersetzungsprozess schnell mit YP Metropol' },
  'E-posta': { en: 'Email', ar: 'البريد الإلكتروني', ru: 'Эл. почта', fa: 'ایمیل', fr: 'E-mail', de: 'E-Mail' },
  'Detaylı İletişim Formu': { en: 'Detailed Contact Form', ar: 'نموذج تواصل مفصل', ru: 'Подробная контактная форма', fa: 'فرم تماس تفصیلی', fr: 'Formulaire de contact détaillé', de: 'Detailliertes Kontaktformular' },
  'İletişim Sayfasına Git': { en: 'Go to Contact Page', ar: 'الانتقال إلى صفحة الاتصال', ru: 'Перейти к контактам', fa: 'رفتن به صفحه تماس', fr: 'Aller à la page contact', de: 'Zur Kontaktseite' },
  'Mesaj Gönderin': { en: 'Send a Message', ar: 'أرسل رسالة', ru: 'Отправьте сообщение', fa: 'پیام ارسال کنید', fr: 'Envoyer un message', de: 'Nachricht senden' },
  'MESAJ GÖNDER': { en: 'SEND MESSAGE', ar: 'إرسال الرسالة', ru: 'ОТПРАВИТЬ', fa: 'ارسال پیام', fr: 'ENVOYER', de: 'NACHRICHT SENDEN' },
  'Belge türü, hedef dil, teslim beklentisi...': { en: 'Document type, target language, delivery expectation...', ar: 'نوع الوثيقة، اللغة المطلوبة، توقعات التسليم...', ru: 'Тип документа, целевой язык, срок...', fa: 'نوع سند، زبان مقصد، انتظار تحویل...', fr: 'Type de document, langue cible, délai souhaité...', de: 'Dokumenttyp, Zielsprache, Lieferwunsch...' },
  'Hizmet seçiniz': { en: 'Select a service', ar: 'اختر خدمة', ru: 'Выберите услугу', fa: 'خدمت را انتخاب کنید', fr: 'Choisissez un service', de: 'Leistung auswählen' },
  'Ad Soyad': { en: 'Full Name', ar: 'الاسم الكامل', ru: 'Имя и фамилия', fa: 'نام و نام خانوادگی', fr: 'Nom complet', de: 'Vor- und Nachname' },
  'E-posta adresiniz': { en: 'Your email address', ar: 'بريدك الإلكتروني', ru: 'Ваш email', fa: 'آدرس ایمیل شما', fr: 'Votre adresse e-mail', de: 'Ihre E-Mail-Adresse' },
  'Çalışma Akışı': { en: 'Workflow', ar: 'سير العمل', ru: 'Процесс работы', fa: 'روند کار', fr: 'Déroulement', de: 'Arbeitsablauf' },

  'Bültenimize Abone Olun': { en: 'Subscribe to Our Newsletter', ar: 'اشترك في نشرتنا', ru: 'Подпишитесь на рассылку', fa: 'در خبرنامه ما عضو شوید', fr: 'Abonnez-vous à notre newsletter', de: 'Newsletter abonnieren' },
  'ŞİMDİ KAYDOL': { en: 'SUBSCRIBE NOW', ar: 'اشترك الآن', ru: 'ПОДПИСАТЬСЯ', fa: 'اکنون ثبت‌نام کنید', fr: 'S’INSCRIRE', de: 'JETZT ANMELDEN' },
  'KAYDEDİLİYOR...': { en: 'SAVING...', ar: 'جارٍ الحفظ...', ru: 'СОХРАНЕНИЕ...', fa: 'در حال ذخیره...', fr: 'ENREGISTREMENT...', de: 'WIRD GESPEICHERT...' },
  'Tercüme süreçleri, belge hazırlığı ve yeni hizmet notlarından ilk siz haberdar olun.': { en: 'Be the first to hear about translation processes, document preparation and new service notes.', ar: 'كونوا أول من يعرف عن إجراءات الترجمة وتحضير الوثائق وملاحظات الخدمات الجديدة.', ru: 'Первыми узнавайте о переводах, подготовке документов и новых услугах.', fa: 'اولین نفر باشید که از روندهای ترجمه، آماده‌سازی اسناد و خدمات جدید باخبر می‌شوید.', fr: 'Soyez informé en premier des démarches de traduction, de la préparation des documents et des nouvelles notes de service.', de: 'Erfahren Sie zuerst von Übersetzungsprozessen, Dokumentvorbereitung und neuen Services.' },
  'Devamını Oku': { en: 'Read More', ar: 'اقرأ المزيد', ru: 'Читать далее', fa: 'ادامه مطلب', fr: 'Lire la suite', de: 'Weiterlesen' },
  'Yazıyı Oku': { en: 'Read Article', ar: 'اقرأ المقال', ru: 'Читать статью', fa: 'خواندن مقاله', fr: 'Lire l’article', de: 'Artikel lesen' },
  'Tüm İçerikleri Gör': { en: 'View All Content', ar: 'عرض كل المحتوى', ru: 'Все материалы', fa: 'مشاهده همه محتواها', fr: 'Voir tous les contenus', de: 'Alle Inhalte ansehen' },
  'KURUMSAL YAKLAŞIM': { en: 'CORPORATE APPROACH', ar: 'النهج المؤسسي', ru: 'КОРПОРАТИВНЫЙ ПОДХОД', fa: 'رویکرد سازمانی', fr: 'APPROCHE INSTITUTIONNELLE', de: 'UNTERNEHMENSANSATZ' },
  'Tercümeyi belgenin kullanılacağı resmi sürecin parçası olarak ele alıyoruz': { en: 'We treat translation as part of the official process in which the document will be used', ar: 'نتعامل مع الترجمة كجزء من الإجراء الرسمي الذي ستُستخدم فيه الوثيقة', ru: 'Мы рассматриваем перевод как часть официального процесса, где будет использован документ', fa: 'ترجمه را بخشی از روند رسمی استفاده از سند می‌دانیم', fr: 'Nous considérons la traduction comme une partie de la démarche officielle où le document sera utilisé', de: 'Wir betrachten Übersetzung als Teil des offiziellen Verfahrens, in dem das Dokument verwendet wird' },
  'Belgenizi gönderdiğinizde hedef dil, noter onayı ihtiyacı, teslim süresi': { en: 'When you send your document, the target language, notary approval needs and delivery time', ar: 'عند إرسال وثيقتكم، يتم تقييم اللغة المطلوبة والحاجة إلى التوثيق ومدة التسليم', ru: 'Когда вы отправляете документ, мы оцениваем целевой язык, необходимость нотариата и срок', fa: 'وقتی سندتان را ارسال می‌کنید، زبان مقصد، نیاز به تأیید دفترخانه و زمان تحویل', fr: 'Lorsque vous envoyez votre document, la langue cible, le besoin de notarisation et le délai', de: 'Wenn Sie Ihr Dokument senden, werden Zielsprache, Notarbedarf und Lieferzeit' },
  've başvuru amacı birlikte değerlendirilir. Böylece yalnızca çeviri değil,': { en: 'and application purpose are evaluated together. This gives you not only a translation,', ar: 'وغرض الطلب معاً. وبذلك تحصلون ليس فقط على ترجمة،', ru: 'и цель подачи вместе. Так вы получаете не только перевод,', fa: 'و هدف درخواست با هم بررسی می‌شود. بنابراین فقط ترجمه دریافت نمی‌کنید،', fr: 'et l’objectif de la demande sont évalués ensemble. Vous recevez ainsi non seulement une traduction,', de: 'und der Antragszweck gemeinsam bewertet. So erhalten Sie nicht nur eine Übersetzung,' },
  'daha düzenli bir evrak süreci alırsınız.': { en: 'but a more organized document process.', ar: 'بل أيضاً مساراً أكثر تنظيماً للوثائق.', ru: 'а более организованный документооборот.', fa: 'بلکه روند اسنادی منظم‌تری خواهید داشت.', fr: 'mais aussi un processus documentaire plus organisé.', de: 'sondern einen strukturierteren Dokumentenprozess.' },
  'Güven': { en: 'Trust', ar: 'ثقة', ru: 'Доверие', fa: 'اعتماد', fr: 'Confiance', de: 'Vertrauen' },
  'Belgeleriniz gizlilik ve dikkatle ele alınır.': { en: 'Your documents are handled confidentially and carefully.', ar: 'تُعامل وثائقكم بسرية وعناية.', ru: 'Ваши документы обрабатываются конфиденциально и внимательно.', fa: 'اسناد شما محرمانه و با دقت بررسی می‌شود.', fr: 'Vos documents sont traités avec confidentialité et attention.', de: 'Ihre Dokumente werden vertraulich und sorgfältig behandelt.' },
  'Hız': { en: 'Speed', ar: 'سرعة', ru: 'Скорость', fa: 'سرعت', fr: 'Rapidité', de: 'Geschwindigkeit' },
  'Teslim süresi baştan netleştirilir.': { en: 'Delivery time is clarified from the start.', ar: 'يتم توضيح مدة التسليم من البداية.', ru: 'Сроки уточняются заранее.', fa: 'زمان تحویل از ابتدا مشخص می‌شود.', fr: 'Le délai est clarifié dès le départ.', de: 'Die Lieferzeit wird von Anfang an geklärt.' },
  'Düzen': { en: 'Order', ar: 'تنظيم', ru: 'Порядок', fa: 'نظم', fr: 'Organisation', de: 'Ordnung' },
  'Evrak formatı kullanım amacına göre hazırlanır.': { en: 'Document format is prepared according to its purpose.', ar: 'تُعد صيغة الوثيقة حسب غرض الاستخدام.', ru: 'Формат документа готовится по цели использования.', fa: 'فرمت سند بر اساس هدف استفاده آماده می‌شود.', fr: 'Le format du document est préparé selon son usage.', de: 'Das Dokumentformat wird nach Verwendungszweck vorbereitet.' },
  'Dil Desteği': { en: 'Language Support', ar: 'دعم لغوي', ru: 'Языковая поддержка', fa: 'پشتیبانی زبان', fr: 'Support linguistique', de: 'Sprachunterstützung' },
  'İngilizce, Arapça, Farsça, Fransızca ve Rusça.': { en: 'English, Arabic, Persian, French and Russian.', ar: 'الإنجليزية والعربية والفارسية والفرنسية والروسية.', ru: 'Английский, арабский, персидский, французский и русский.', fa: 'انگلیسی، عربی، فارسی، فرانسوی و روسی.', fr: 'Anglais, arabe, persan, français et russe.', de: 'Englisch, Arabisch, Persisch, Französisch und Russisch.' },
  'YP Metropol Hizmeti': { en: 'YP Metropol Service', ar: 'خدمة YP Metropol', ru: 'Услуга YP Metropol', fa: 'خدمت YP Metropol', fr: 'Service YP Metropol', de: 'YP Metropol Leistung' },
  'SÜREÇ': { en: 'PROCESS', ar: 'الإجراء', ru: 'ПРОЦЕСС', fa: 'روند', fr: 'PROCESSUS', de: 'PROZESS' },
  'Belgeniz için net, hızlı ve kontrollü tercüme akışı': { en: 'A clear, fast and controlled translation workflow for your document', ar: 'مسار ترجمة واضح وسريع ومنضبط لوثيقتكم', ru: 'Понятный, быстрый и контролируемый процесс перевода для вашего документа', fa: 'روند ترجمه روشن، سریع و کنترل‌شده برای سند شما', fr: 'Un flux de traduction clair, rapide et contrôlé pour votre document', de: 'Ein klarer, schneller und kontrollierter Übersetzungsablauf für Ihr Dokument' },
  'Belgenizi WhatsApp veya e-posta ile ilettiğinizde evrak türü, hedef dil,': { en: 'When you send your document via WhatsApp or email, document type, target language,', ar: 'عند إرسال الوثيقة عبر واتساب أو البريد الإلكتروني، يتم تقييم نوع الوثيقة واللغة المطلوبة،', ru: 'Когда вы отправляете документ через WhatsApp или email, тип документа, язык,', fa: 'وقتی سند را از طریق واتساپ یا ایمیل ارسال می‌کنید، نوع سند، زبان مقصد،', fr: 'Lorsque vous envoyez votre document par WhatsApp ou e-mail, le type de document, la langue cible,', de: 'Wenn Sie Ihr Dokument per WhatsApp oder E-Mail senden, werden Dokumenttyp, Zielsprache,' },
  'onay ihtiyacı ve teslim beklentisi birlikte değerlendirilir.': { en: 'approval needs and delivery expectations are evaluated together.', ar: 'والحاجة إلى التصديق وتوقعات التسليم معاً.', ru: 'необходимость заверения и ожидания по срокам оцениваются вместе.', fa: 'نیاز به تأیید و انتظار تحویل با هم بررسی می‌شود.', fr: 'le besoin de validation et les attentes de livraison sont évalués ensemble.', de: 'Beglaubigungsbedarf und Liefererwartung gemeinsam bewertet.' },
  'Blog Yazısı': { en: 'Blog Article', ar: 'مقالة مدونة', ru: 'Статья блога', fa: 'مقاله بلاگ', fr: 'Article de blog', de: 'Blogartikel' },
  'Haberler': { en: 'News', ar: 'الأخبار', ru: 'Новости', fa: 'اخبار', fr: 'Actualités', de: 'Nachrichten' },
  'Haber yükleniyor...': { en: 'Loading article...', ar: 'جارٍ تحميل الخبر...', ru: 'Новость загружается...', fa: 'در حال بارگذاری خبر...', fr: 'Chargement de l’article...', de: 'Artikel wird geladen...' },
  'Haber Bulunamadı': { en: 'Article Not Found', ar: 'لم يتم العثور على الخبر', ru: 'Новость не найдена', fa: 'خبر یافت نشد', fr: 'Article introuvable', de: 'Artikel nicht gefunden' },
  'Aradığınız haber mevcut değil.': { en: 'The article you are looking for does not exist.', ar: 'الخبر الذي تبحث عنه غير موجود.', ru: 'Запрошенная новость не существует.', fa: 'خبری که دنبال آن هستید وجود ندارد.', fr: 'L’article recherché n’existe pas.', de: 'Der gesuchte Artikel existiert nicht.' },
  'Haberlere Dön': { en: 'Back to News', ar: 'العودة إلى الأخبار', ru: 'Назад к новостям', fa: 'بازگشت به اخبار', fr: 'Retour aux actualités', de: 'Zurück zu Nachrichten' },
  'Öne Çıkan Haber': { en: 'Featured Article', ar: 'خبر مميز', ru: 'Рекомендуемая новость', fa: 'خبر ویژه', fr: 'Article à la une', de: 'Empfohlener Artikel' },
  'Paylaş:': { en: 'Share:', ar: 'مشاركة:', ru: 'Поделиться:', fa: 'اشتراک‌گذاری:', fr: 'Partager :', de: 'Teilen:' },
  'Etiketler:': { en: 'Tags:', ar: 'الوسوم:', ru: 'Теги:', fa: 'برچسب‌ها:', fr: 'Tags :', de: 'Tags:' },
  'Oluşturulma:': { en: 'Created:', ar: 'تاريخ الإنشاء:', ru: 'Создано:', fa: 'ایجاد شده:', fr: 'Créé :', de: 'Erstellt:' },
  'İlgili Haberler': { en: 'Related Articles', ar: 'أخبار ذات صلة', ru: 'Похожие новости', fa: 'اخبار مرتبط', fr: 'Articles liés', de: 'Ähnliche Artikel' },
  'Koleksiyonumuz': { en: 'Our Collection', ar: 'مجموعتنا', ru: 'Наша коллекция', fa: 'مجموعه ما', fr: 'Notre collection', de: 'Unsere Sammlung' },
  'YP Metropol': { en: 'YP Metropol', ar: 'YP Metropol', ru: 'YP Metropol', fa: 'YP Metropol', fr: 'YP Metropol', de: 'YP Metropol' },
  'galeri': { en: 'gallery', ar: 'المعرض', ru: 'галерея', fa: 'گالری', fr: 'galerie', de: 'Galerie' },
  'SECILI KOLEKSIYONLAR': { en: 'SELECTED COLLECTIONS', ar: 'مجموعات مختارة', ru: 'ИЗБРАННЫЕ КОЛЛЕКЦИИ', fa: 'مجموعه‌های منتخب', fr: 'COLLECTIONS SÉLECTIONNÉES', de: 'AUSGEWÄHLTE SAMMLUNGEN' },
  'Tum Kareler': { en: 'All Frames', ar: 'كل الصور', ru: 'Все кадры', fa: 'همه تصاویر', fr: 'Toutes les images', de: 'Alle Bilder' },
  'Detayli Incele': { en: 'Review Details', ar: 'تفاصيل أكثر', ru: 'Подробнее', fa: 'بررسی جزئیات', fr: 'Voir en détail', de: 'Details prüfen' },
  'Buyuterek Gor': { en: 'View Larger', ar: 'عرض مكبر', ru: 'Увеличить', fa: 'بزرگ‌نمایی', fr: 'Voir en grand', de: 'Vergrößert ansehen' },
  'Gorsel Arsiv': { en: 'Visual Archive', ar: 'أرشيف الصور', ru: 'Визуальный архив', fa: 'آرشیو تصویری', fr: 'Archive visuelle', de: 'Bildarchiv' },
  'gorsel bulundu': { en: 'visuals found', ar: 'صور موجودة', ru: 'изображений найдено', fa: 'تصویر یافت شد', fr: 'visuels trouvés', de: 'Bilder gefunden' },
  'Hizmet Alanlarımız': { en: 'Our Service Areas', ar: 'مناطق خدماتنا', ru: 'Зоны обслуживания', fa: 'مناطق خدمات ما', fr: 'Nos zones de service', de: 'Unsere Servicebereiche' },
  'Hizmet': { en: 'Service', ar: 'خدمة', ru: 'Услуга', fa: 'خدمت', fr: 'Service', de: 'Service' },
  'bölgelerimiz': { en: 'areas', ar: 'مناطقنا', ru: 'зоны', fa: 'مناطق ما', fr: 'zones', de: 'Bereiche' },
  'Yükleniyor...': { en: 'Loading...', ar: 'جارٍ التحميل...', ru: 'Загрузка...', fa: 'در حال بارگذاری...', fr: 'Chargement...', de: 'Wird geladen...' },
  'Hata Oluştu': { en: 'An Error Occurred', ar: 'حدث خطأ', ru: 'Произошла ошибка', fa: 'خطایی رخ داد', fr: 'Une erreur est survenue', de: 'Ein Fehler ist aufgetreten' },
  'Tekrar Dene': { en: 'Try Again', ar: 'حاول مرة أخرى', ru: 'Попробовать снова', fa: 'دوباره تلاش کنید', fr: 'Réessayer', de: 'Erneut versuchen' },
  'Hizmet Verdiğimiz Bölgeler': { en: 'Areas We Serve', ar: 'المناطق التي نخدمها', ru: 'Регионы обслуживания', fa: 'مناطقی که خدمات می‌دهیم', fr: 'Zones desservies', de: 'Regionen, die wir bedienen' },
  'Detayları Gör': { en: 'View Details', ar: 'عرض التفاصيل', ru: 'Посмотреть детали', fa: 'مشاهده جزئیات', fr: 'Voir les détails', de: 'Details ansehen' },
  'Çalışmalarımızdan Örnekler': { en: 'Examples from Our Work', ar: 'أمثلة من أعمالنا', ru: 'Примеры наших работ', fa: 'نمونه‌هایی از کارهای ما', fr: 'Exemples de nos travaux', de: 'Beispiele unserer Arbeit' },
  'Tüm Galeriyi Gör': { en: 'View Full Gallery', ar: 'عرض المعرض الكامل', ru: 'Посмотреть всю галерею', fa: 'مشاهده کل گالری', fr: 'Voir toute la galerie', de: 'Gesamte Galerie ansehen' },
  'Hemen Ara': { en: 'Call Now', ar: 'اتصل الآن', ru: 'Позвонить сейчас', fa: 'همین حالا تماس بگیرید', fr: 'Appeler maintenant', de: 'Jetzt anrufen' },
  'Hizmet Bölgesi': { en: 'Service Area', ar: 'منطقة الخدمة', ru: 'Зона обслуживания', fa: 'منطقه خدمات', fr: 'Zone de service', de: 'Servicebereich' },
  'Hizmet Bölgesi Bulunamadı': { en: 'Service Area Not Found', ar: 'لم يتم العثور على منطقة الخدمة', ru: 'Зона обслуживания не найдена', fa: 'منطقه خدمات یافت نشد', fr: 'Zone de service introuvable', de: 'Servicebereich nicht gefunden' },
  'Hemen arayın, en kısa sürede yanınızdayız!': { en: 'Call now, we will assist you as soon as possible!', ar: 'اتصلوا الآن، سنساعدكم في أقرب وقت!', ru: 'Позвоните сейчас, мы поможем вам как можно скорее!', fa: 'همین حالا تماس بگیرید، در کوتاه‌ترین زمان کنار شما هستیم!', fr: 'Appelez maintenant, nous vous assistons dès que possible !', de: 'Rufen Sie jetzt an, wir helfen Ihnen so schnell wie möglich!' },
  'Sayfalar': { en: 'Pages', ar: 'الصفحات', ru: 'Страницы', fa: 'صفحات', fr: 'Pages', de: 'Seiten' },
  'Hizmetler': { en: 'Services', ar: 'الخدمات', ru: 'Услуги', fa: 'خدمات', fr: 'Services', de: 'Leistungen' },
  'Tüm hakları saklıdır.': { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.', ru: 'Все права защищены.', fa: 'تمام حقوق محفوظ است.', fr: 'Tous droits réservés.', de: 'Alle Rechte vorbehalten.' },
  'Hakları Alceix tarafından saklıdır': { en: 'Rights reserved by Alceix', ar: 'الحقوق محفوظة بواسطة Alceix', ru: 'Права защищены Alceix', fa: 'حقوق توسط Alceix محفوظ است', fr: 'Droits réservés par Alceix', de: 'Rechte vorbehalten durch Alceix' },
  'Gizlilik Politikası': { en: 'Privacy Policy', ar: 'سياسة الخصوصية', ru: 'Политика конфиденциальности', fa: 'سیاست حفظ حریم خصوصی', fr: 'Politique de confidentialité', de: 'Datenschutzerklärung' },
  'Dünya genelinde kabul gören tercüme': { en: 'Worldwide Accepted Translation', ar: 'ترجمة معتمدة عالمياً', ru: 'Переводы, принимаемые по всему миру', fa: 'ترجمه قابل قبول در سراسر جهان', fr: 'Traduction acceptée dans le monde entier', de: 'Weltweit akzeptierte Übersetzungen' },
  'YP Metropol Tercüme Ofisi': { en: 'YP Metropol Tercüme', ar: 'مكتب YP Metropol للترجمة', ru: 'Бюро переводов YP Metropol', fa: 'دفتر ترجمه YP Metropol', fr: 'YP Metropol Tercüme', de: 'YP Metropol Übersetzungsbüro' },
  'Pasaport, vize, ikamet ve resmi evrak süreçleri için hızlı, dikkatli ve kabul odaklı tercüme çözümleri.': { en: 'Fast, careful and acceptance-focused translation solutions for passport, visa, residence and official document processes.', ar: 'حلول ترجمة سريعة ودقيقة وموجهة للقبول لإجراءات الجوازات والتأشيرات والإقامة والوثائق الرسمية.', ru: 'Быстрые, внимательные и ориентированные на принятие переводы для паспортов, виз, ВНЖ и официальных документов.', fa: 'راهکارهای ترجمه سریع، دقیق و قابل پذیرش برای پاسپورت، ویزا، اقامت و اسناد رسمی.', fr: 'Des solutions de traduction rapides, attentives et axées sur l’acceptation pour les passeports, visas, séjours et documents officiels.', de: 'Schnelle, sorgfältige und anerkennungsorientierte Übersetzungen für Pass-, Visa-, Aufenthalts- und offizielle Dokumente.' },
  'YP Metropol resmi ve özel belge tercüme hizmetleri': { en: 'YP Metropol official and private document translation services', ar: 'خدمات YP Metropol لترجمة الوثائق الرسمية والخاصة', ru: 'YP Metropol: переводы официальных и частных документов', fa: 'خدمات ترجمه اسناد رسمی و خصوصی YP Metropol', fr: 'Services YP Metropol de traduction de documents officiels et privés', de: 'YP Metropol Übersetzungen für offizielle und private Dokumente' },
  'Başvuru tipinize göre belgeyi inceliyor, tercüme formatını netleştiriyor ve teslim sürecini hızlıca planlıyoruz.': { en: 'We review the document according to your application type, clarify the translation format and quickly plan the delivery process.', ar: 'نراجع الوثيقة حسب نوع طلبكم، نوضح صيغة الترجمة ونخطط التسليم بسرعة.', ru: 'Мы изучаем документ по типу вашего заявления, уточняем формат перевода и быстро планируем сдачу.', fa: 'سند را بر اساس نوع درخواست شما بررسی می‌کنیم، فرمت ترجمه را مشخص کرده و روند تحویل را سریع برنامه‌ریزی می‌کنیم.', fr: 'Nous examinons le document selon votre type de demande, clarifions le format de traduction et planifions rapidement la livraison.', de: 'Wir prüfen das Dokument nach Ihrem Antragstyp, klären das Übersetzungsformat und planen die Lieferung schnell.' },
  'Vize, ikamet, seyahat ve resmi başvurular için kabul odaklı pasaport çevirisi.': { en: 'Acceptance-focused passport translation for visa, residence, travel and official applications.', ar: 'ترجمة جواز سفر موجهة للقبول للتأشيرة والإقامة والسفر والطلبات الرسمية.', ru: 'Перевод паспорта с фокусом на принятие для виз, ВНЖ, поездок и официальных заявлений.', fa: 'ترجمه پاسپورت با تمرکز بر پذیرش برای ویزا، اقامت، سفر و درخواست‌های رسمی.', fr: 'Traduction de passeport axée sur l’acceptation pour visas, séjour, voyage et démarches officielles.', de: 'Anerkennungsorientierte Passübersetzung für Visa, Aufenthalt, Reisen und offizielle Anträge.' },
  'Resmi belgeleriniz için yeminli tercüman kaşeli ve düzenli teslim süreci.': { en: 'A stamped sworn translator process and organized delivery for your official documents.', ar: 'ترجمة محلفة مختومة وتسليم منظم لوثائقكم الرسمية.', ru: 'Присяжный перевод с печатью и организованная сдача официальных документов.', fa: 'فرایند ترجمه رسمی مهرشده و تحویل منظم برای اسناد رسمی شما.', fr: 'Une traduction assermentée tamponnée et une livraison organisée pour vos documents officiels.', de: 'Gestempelte beglaubigte Übersetzung und strukturierte Lieferung für Ihre offiziellen Dokumente.' },
  'Noter işlemlerine uygun hazırlanan evrak çevirileri ve süreç yönlendirmesi.': { en: 'Document translations prepared for notary procedures with process guidance.', ar: 'ترجمة وثائق معدة لإجراءات التوثيق مع توجيه للعملية.', ru: 'Переводы документов для нотариальных процедур с сопровождением процесса.', fa: 'ترجمه اسناد آماده برای امور دفترخانه همراه با راهنمایی روند.', fr: 'Traductions préparées pour les procédures notariales avec accompagnement.', de: 'Für Notarverfahren vorbereitete Übersetzungen mit Prozessbegleitung.' },
  'Eğitim, denklik ve başvuru dosyaları için akademik belge tercümeleri.': { en: 'Academic document translations for education, equivalency and application files.', ar: 'ترجمة الوثائق الأكاديمية للتعليم والمعادلة وملفات التقديم.', ru: 'Переводы академических документов для обучения, нострификации и заявлений.', fa: 'ترجمه اسناد تحصیلی برای آموزش، معادل‌سازی و پرونده‌های درخواست.', fr: 'Traductions de documents académiques pour études, équivalence et dossiers de candidature.', de: 'Akademische Übersetzungen für Bildung, Anerkennung und Bewerbungsunterlagen.' },
  'Konsolosluk dosyaları için kimlik, nüfus kayıt, banka ve destek evrak çevirileri.': { en: 'ID, civil registry, bank and supporting document translations for consulate files.', ar: 'ترجمة الهوية والسجل المدني والبنوك والوثائق الداعمة لملفات القنصلية.', ru: 'Переводы удостоверений, ЗАГС, банковских и подтверждающих документов для консульства.', fa: 'ترجمه مدارک هویتی، ثبت احوال، بانکی و پشتیبان برای پرونده‌های کنسولگری.', fr: 'Traductions de pièces d’identité, état civil, banque et justificatifs pour dossiers consulaires.', de: 'Übersetzungen von Ausweis-, Personenstands-, Bank- und Nachweisdokumenten für Konsulatsakten.' },
  'Belgelerinizi yalnızca çevirmekle kalmıyor, başvuru amacına uygun düzen, onay ihtiyacı ve teslim süresiyle birlikte ele alıyoruz.': { en: 'We do not only translate your documents; we handle them with the right layout, approval needs and delivery time for the application purpose.', ar: 'لا نترجم وثائقكم فقط؛ بل نتعامل معها من حيث التنسيق المناسب والغرض من الطلب والحاجة إلى التصديق ومدة التسليم.', ru: 'Мы не просто переводим документы; мы учитываем формат, необходимость заверения и сроки согласно цели подачи.', fa: 'ما فقط اسناد شما را ترجمه نمی‌کنیم؛ آن‌ها را با چینش مناسب، نیاز به تأیید و زمان تحویل متناسب با هدف درخواست بررسی می‌کنیم.', fr: 'Nous ne traduisons pas seulement vos documents ; nous les traitons avec la mise en forme, les validations et le délai adaptés à l’objectif.', de: 'Wir übersetzen Ihre Dokumente nicht nur; wir berücksichtigen Format, Beglaubigungsbedarf und Lieferzeit passend zum Antragszweck.' },
  'Pasaport, kimlik, diploma, sözleşme ve konsolosluk evraklarında belgenin kullanım amacına göre kontrollü bir tercüme akışı sunuyoruz.': { en: 'For passports, IDs, diplomas, contracts and consulate documents, we provide a controlled translation flow based on the document’s purpose.', ar: 'نقدم مسار ترجمة منضبطاً للجوازات والهويات والشهادات والعقود ووثائق القنصلية حسب غرض استخدام الوثيقة.', ru: 'Для паспортов, удостоверений, дипломов, договоров и консульских документов мы предлагаем контролируемый процесс перевода по назначению документа.', fa: 'برای پاسپورت، کارت شناسایی، دیپلم، قرارداد و مدارک کنسولگری، بر اساس هدف استفاده از سند روند ترجمه کنترل‌شده ارائه می‌دهیم.', fr: 'Pour les passeports, pièces d’identité, diplômes, contrats et documents consulaires, nous proposons un flux de traduction contrôlé selon l’usage du document.', de: 'Für Pässe, Ausweise, Diplome, Verträge und Konsulatsunterlagen bieten wir einen kontrollierten Übersetzungsablauf je nach Verwendungszweck.' },
  'Belge türüne göre doğru teslim formatı': { en: 'Correct delivery format by document type', ar: 'صيغة تسليم صحيحة حسب نوع الوثيقة', ru: 'Правильный формат сдачи по типу документа', fa: 'فرمت تحویل درست بر اساس نوع سند', fr: 'Format de livraison adapté au type de document', de: 'Korrektes Lieferformat nach Dokumenttyp' },
  'Yeminli ve noter onaylı tercüme yönlendirmesi': { en: 'Guidance for sworn and notarized translation', ar: 'توجيه للترجمة المحلفة والموثقة', ru: 'Консультация по присяжному и нотариальному переводу', fa: 'راهنمایی برای ترجمه رسمی و تأیید دفترخانه', fr: 'Orientation pour traduction assermentée et notariée', de: 'Beratung zu beglaubigter und notarieller Übersetzung' },
  'WhatsApp üzerinden hızlı belge inceleme': { en: 'Fast document review via WhatsApp', ar: 'مراجعة سريعة للوثائق عبر واتساب', ru: 'Быстрая проверка документа через WhatsApp', fa: 'بررسی سریع سند از طریق واتساپ', fr: 'Examen rapide du document via WhatsApp', de: 'Schnelle Dokumentprüfung über WhatsApp' },
  'Olumlu geri dönüş': { en: 'Positive feedback', ar: 'تعليقات إيجابية', ru: 'Положительные отзывы', fa: 'بازخورد مثبت', fr: 'Retours positifs', de: 'Positive Rückmeldungen' },
  'Memnuniyet': { en: 'Satisfaction', ar: 'رضا العملاء', ru: 'Удовлетворенность', fa: 'رضایت', fr: 'Satisfaction', de: 'Zufriedenheit' },
  '2 hafta önce': { en: '2 weeks ago', ar: 'قبل أسبوعين', ru: '2 недели назад', fa: '۲ هفته پیش', fr: 'il y a 2 semaines', de: 'vor 2 Wochen' },
  '1 ay önce': { en: '1 month ago', ar: 'قبل شهر', ru: '1 месяц назад', fa: '۱ ماه پیش', fr: 'il y a 1 mois', de: 'vor 1 Monat' },
  '3 hafta önce': { en: '3 weeks ago', ar: 'قبل 3 أسابيع', ru: '3 недели назад', fa: '۳ هفته پیش', fr: 'il y a 3 semaines', de: 'vor 3 Wochen' },
  '5 gün önce': { en: '5 days ago', ar: 'قبل 5 أيام', ru: '5 дней назад', fa: '۵ روز پیش', fr: 'il y a 5 jours', de: 'vor 5 Tagen' },
  'İstanbul': { en: 'Istanbul', ar: 'إسطنبول', ru: 'Стамбул', fa: 'استانبول', fr: 'Istanbul', de: 'Istanbul' },
  'Bakü': { en: 'Baku', ar: 'باكو', ru: 'Баку', fa: 'باکو', fr: 'Bakou', de: 'Baku' },
  'Ankara': { en: 'Ankara', ar: 'أنقرة', ru: 'Анкара', fa: 'آنکارا', fr: 'Ankara', de: 'Ankara' },
  'Üsküdar': { en: 'Üsküdar', ar: 'أوسكودار', ru: 'Ускюдар', fa: 'اوسکودار', fr: 'Üsküdar', de: 'Üsküdar' },
  'Vize dosyam için pasaport ve nüfus kayıt tercümesi gerekti. Süreç hızlı ilerledi, evrak formatı konusunda da çok net yönlendirdiler.': { en: 'I needed passport and civil registry translations for my visa file. The process moved quickly and they gave very clear guidance on the document format.', ar: 'احتجت إلى ترجمة الجواز والسجل المدني لملف التأشيرة. سار العمل بسرعة وقدموا توجيهاً واضحاً حول صيغة الوثائق.', ru: 'Для визового дела мне понадобился перевод паспорта и выписки. Процесс прошел быстро, по формату документов дали очень четкие указания.', fa: 'برای پرونده ویزا به ترجمه پاسپورت و ثبت احوال نیاز داشتم. روند سریع پیش رفت و درباره فرمت مدارک خیلی شفاف راهنمایی کردند.', fr: 'J’avais besoin de traductions du passeport et de l’état civil pour mon dossier de visa. Le processus a été rapide et les consignes de format très claires.', de: 'Für mein Visum brauchte ich Pass- und Personenstandsübersetzungen. Der Ablauf war schnell und das Dokumentformat wurde sehr klar erklärt.' },
  'Vekaletname tercümesi için ulaştım. Hangi onayın gerektiğini baştan anlattılar ve belgeyi zamanında hazırladılar.': { en: 'I contacted them for a power of attorney translation. They explained the required approval from the start and prepared the document on time.', ar: 'تواصلت معهم لترجمة وكالة. شرحوا منذ البداية نوع التصديق المطلوب وأعدوا الوثيقة في الوقت المحدد.', ru: 'Я обратился за переводом доверенности. Сразу объяснили, какое заверение нужно, и подготовили документ вовремя.', fa: 'برای ترجمه وکالت‌نامه مراجعه کردم. از ابتدا نوع تأیید لازم را توضیح دادند و سند را به‌موقع آماده کردند.', fr: 'Je les ai contactés pour une traduction de procuration. Ils ont expliqué dès le départ la validation nécessaire et ont livré à temps.', de: 'Ich brauchte eine Vollmachtsübersetzung. Sie erklärten von Anfang an die nötige Beglaubigung und lieferten pünktlich.' },
  'Yurt dışı başvurum için diploma ve transkript çevirisi yaptırdım. Terminoloji ve teslim dosyası düzenliydi.': { en: 'I had my diploma and transcript translated for an overseas application. The terminology and delivery file were well organized.', ar: 'ترجمت شهادتي وكشف الدرجات لطلب خارج البلاد. كانت المصطلحات وملف التسليم منظمين.', ru: 'Я переводил диплом и транскрипт для зарубежной подачи. Терминология и финальный файл были аккуратными.', fa: 'برای درخواست خارج از کشور، دیپلم و ریزنمراتم را ترجمه کردم. اصطلاحات و فایل تحویل منظم بود.', fr: 'J’ai fait traduire mon diplôme et relevé pour une candidature à l’étranger. La terminologie et le dossier livré étaient soignés.', de: 'Für eine Auslandsbewerbung ließ ich Diplom und Transcript übersetzen. Terminologie und Lieferdatei waren sauber organisiert.' },
  'Arapça evraklarım için hızlı dönüş aldım. WhatsApp üzerinden belge gönderip aynı gün teklif almam çok pratik oldu.': { en: 'I received a quick response for my Arabic documents. Sending the document via WhatsApp and getting a quote the same day was very practical.', ar: 'حصلت على رد سريع لوثائقي العربية. كان إرسال الوثيقة عبر واتساب والحصول على عرض في نفس اليوم عملياً جداً.', ru: 'По арабским документам ответили быстро. Было удобно отправить документ через WhatsApp и получить расчет в тот же день.', fa: 'برای مدارک عربی‌ام سریع پاسخ گرفتم. ارسال سند از طریق واتساپ و دریافت پیشنهاد در همان روز بسیار کاربردی بود.', fr: 'J’ai reçu une réponse rapide pour mes documents arabes. Envoyer le document par WhatsApp et recevoir un devis le jour même était très pratique.', de: 'Für meine arabischen Unterlagen bekam ich schnell Antwort. Dokument per WhatsApp senden und am selben Tag ein Angebot erhalten war sehr praktisch.' },
  'Arapça Tercüme': { en: 'Arabic Translation', ar: 'ترجمة عربية', ru: 'Арабский перевод', fa: 'ترجمه عربی', fr: 'Traduction arabe', de: 'Arabische Übersetzung' },
  'Diploma Tercümesi': { en: 'Diploma Translation', ar: 'ترجمة الشهادة', ru: 'Перевод диплома', fa: 'ترجمه دیپلم', fr: 'Traduction de diplôme', de: 'Diplomübersetzung' },
  'YP Metropol müşteri yorumu': { en: 'YP Metropol customer review', ar: 'رأي عميل YP Metropol', ru: 'Отзыв клиента YP Metropol', fa: 'نظر مشتری YP Metropol', fr: 'Avis client YP Metropol', de: 'YP Metropol Kundenbewertung' },
  'Pasaport, vize, noter onayı ve resmi evrak hazırlığında sık sorulan konuları anlaşılır şekilde derliyoruz.': { en: 'We collect frequently asked topics about passports, visas, notary approval and official document preparation in a clear way.', ar: 'نجمع بوضوح أكثر المواضيع شيوعاً حول الجوازات والتأشيرات والتوثيق وتحضير الوثائق الرسمية.', ru: 'Мы понятно собираем частые вопросы о паспортах, визах, нотариате и подготовке официальных документов.', fa: 'موضوعات پرتکرار درباره پاسپورت، ویزا، تأیید دفترخانه و آماده‌سازی اسناد رسمی را روشن و ساده گردآوری می‌کنیم.', fr: 'Nous rassemblons clairement les sujets fréquents sur les passeports, visas, validations notariales et documents officiels.', de: 'Wir sammeln häufige Themen zu Pass, Visa, Notarbestätigung und offiziellen Dokumenten verständlich.' },
  'ÖNE ÇIKAN YAZI': { en: 'FEATURED ARTICLE', ar: 'مقال مميز', ru: 'ИЗБРАННАЯ СТАТЬЯ', fa: 'مقاله ویژه', fr: 'ARTICLE À LA UNE', de: 'EMPFOHLENER ARTIKEL' },
  'Teklif ve bilgi için hemen ulaşın': { en: 'Contact us now for a quote and information', ar: 'تواصلوا الآن للحصول على عرض ومعلومات', ru: 'Свяжитесь сейчас для расчета и информации', fa: 'برای پیشنهاد و اطلاعات همین حالا تماس بگیرید', fr: 'Contactez-nous pour un devis et des informations', de: 'Kontaktieren Sie uns für Angebot und Informationen' },
  'Belge gönderimi ve hızlı teklif': { en: 'Document sending and quick quote', ar: 'إرسال الوثائق وعرض سريع', ru: 'Отправка документа и быстрый расчет', fa: 'ارسال سند و پیشنهاد سریع', fr: 'Envoi de documents et devis rapide', de: 'Dokumentenversand und schnelles Angebot' },
  'PDF ve detaylı dosya paylaşımı': { en: 'PDF and detailed file sharing', ar: 'مشاركة PDF وملفات تفصيلية', ru: 'PDF и подробные файлы', fa: 'اشتراک PDF و فایل‌های کامل', fr: 'Partage de PDF et fichiers détaillés', de: 'PDF- und detaillierter Dateiaustausch' },
  'Tercüme edilecek belgeyi, hedef dili ve teslim beklentinizi paylaşın; size en uygun süreci birlikte oluşturalım.': { en: 'Share the document, target language and delivery expectation; let’s build the right process together.', ar: 'شاركوا الوثيقة واللغة المطلوبة وتوقعات التسليم؛ لننشئ معاً العملية الأنسب لكم.', ru: 'Отправьте документ, язык и желаемый срок; вместе подберем подходящий процесс.', fa: 'سند، زبان مقصد و انتظار تحویل را ارسال کنید؛ با هم بهترین روند را تنظیم کنیم.', fr: 'Partagez le document, la langue cible et le délai souhaité ; construisons ensemble le bon processus.', de: 'Teilen Sie Dokument, Zielsprache und Lieferwunsch; wir gestalten gemeinsam den passenden Ablauf.' },
  'WhatsApp, telefon, Instagram veya e-posta üzerinden bize ulaşıp belgenizin teslim süresini ve onay ihtiyacını birlikte netleştirebilirsiniz.': { en: 'You can reach us via WhatsApp, phone, Instagram or email and clarify the delivery time and approval needs for your document together.', ar: 'يمكنكم التواصل معنا عبر واتساب أو الهاتف أو إنستغرام أو البريد الإلكتروني لتحديد مدة التسليم والحاجة إلى التصديق معاً.', ru: 'Вы можете связаться с нами через WhatsApp, телефон, Instagram или email, чтобы вместе уточнить сроки и необходимость заверения.', fa: 'می‌توانید از طریق واتساپ، تلفن، اینستاگرام یا ایمیل با ما تماس بگیرید و زمان تحویل و نیاز به تأیید سند را با هم مشخص کنیم.', fr: 'Vous pouvez nous contacter par WhatsApp, téléphone, Instagram ou e-mail afin de clarifier ensemble le délai et les besoins de validation.', de: 'Sie können uns per WhatsApp, Telefon, Instagram oder E-Mail erreichen und gemeinsam Lieferzeit und Beglaubigungsbedarf klären.' },
  'GÜNCEL İÇERİKLER HAZIRLANIYOR': { en: 'LATEST CONTENT IS BEING PREPARED', ar: 'جارٍ إعداد المحتوى الجديد', ru: 'АКТУАЛЬНЫЕ МАТЕРИАЛЫ ГОТОВЯТСЯ', fa: 'محتوای جدید در حال آماده‌سازی است', fr: 'CONTENUS RÉCENTS EN PRÉPARATION', de: 'AKTUELLE INHALTE WERDEN VORBEREITET' },

  // References / Homepage Header
  'Neden YP Metropol?': { en: 'Why YP Metropol?', ar: 'لماذا YP Metropol؟', ru: 'Почему YP Metropol?', fa: 'چرا YP Metropol؟', fr: 'Pourquoi YP Metropol ?', de: 'Warum YP Metropol?' },
  'Hız, dikkat ve resmi süreç bilgisini': { en: 'We combine speed, care, and official process info', ar: 'نجمع بين السرعة والدقة ومعرفة الإجراءات الرسمية', ru: 'Мы объединяем скорость, точность и знание официальных процедур', fa: 'ما سرعت، دقت و اطلاعات روند resmi را', fr: 'Nous combinons rapidité, attention et connaissance des procédures officielles', de: 'Wir vereinen Schnelligkeit, Sorgfalt und Kenntnisse über offizielle Abläufe' },
  'aynı dosyada buluşturuyoruz': { en: 'in the same document', ar: 'في نفس المستند', ru: 'в одном документе', fa: 'در یک پرونده گردهم می‌آوریم', fr: 'dans le même dossier', de: 'im selben Dokument' },
  'YP Metropol AVANTAJLARI': { en: 'YP Metropol ADVANTAGES', ar: 'مزايا YP Metropol', ru: 'ПРЕИМУЩЕСТВА YP Metropol', fa: 'مزایای YP Metropol', fr: 'AVANTAGES YP Metropol', de: 'YP Metropol VORTEILE' },
  'Net teklif, doğru format, hızlı teslim': { en: 'Clear quote, correct format, fast delivery', ar: 'عرض واضح، صيغة صحيحة، تسليم سريع', ru: 'Четкий расчет, правильный формат, быстрая сдача', fa: 'پیشنهاد قیمت مشخص، فرمت صحیح، تحویل سریع', fr: 'Devis clair, format correct, livraison rapide', de: 'Klares Angebot, korrektes Format, schnelle Lieferung' },

  // FAQ Component
  'Belgenizi WhatsApp veya e-posta üzerinden net bir fotoğraf ya da PDF olarak iletebilirsiniz. Evrak türü incelendikten sonra süre ve ücret bilgisi paylaşılır.': {
    en: 'You can send your document via WhatsApp or email as a clear photo or PDF. After examining the document type, duration and price information will be shared.',
    ar: 'يمكنك إرسال مستندك عبر واتساب أو البريد الإلكتروني كصورة واضحة أو ملف PDF. بعد فحص نوع المستند، سيتم مشاركة معلومات المدة والسعر.',
    ru: 'Вы можете отправить документ через WhatsApp или электронную почту в виде четкой фотографии или PDF. После изучения типа документа будет предоставлена информация о сроках и стоимости.',
    fa: 'می‌توانید سند خود را از طریق واتساپ یا ایمیل به صورت یک عکس واضح یا فایل PDF ارسال کنید. پس از بررسی نوع مدرک، اطلاعات مربوط به زمان و هزینه اعلام می‌شود.',
    fr: 'Vous pouvez envoyer votre document par WhatsApp ou e-mail sous forme de photo claire ou de PDF. Après examen du type de document, les informations de délai et de tarif vous seront communiquées.',
    de: 'Sie können Ihr Dokument per WhatsApp oder E-Mail als klares Foto oder PDF senden. Nach Prüfung des Dokumententyps werden Dauer und Preis mitgeteilt.'
  },
  'Pasaport tercümesi ne kadar sürede hazırlanır?': {
    en: 'How long does passport translation take?',
    ar: 'كم من الوقت تستغرق ترجمة جواز السفر؟',
    ru: 'Сколько времени занимает перевод паспорта?',
    fa: 'ترجمه پاسپورت چقدر zaman می‌برد؟',
    fr: 'Combien de temps faut-il pour traduire un passeport ?',
    de: 'Wie lange dauert eine Passübersetzung?'
  },
  'Belgenin durumuna ve yoğunluğa göre değişir. Standart pasaport ve kimlik evraklarında mümkün olan en hızlı teslim planı sunulur.': {
    en: 'It depends on the condition of the document and workload. For standard passport and ID documents, the fastest possible delivery plan is offered.',
    ar: 'يختلف ذلك حسب حالة المستند وضغط العمل. بالنسبة لجوازات السفر ووثائق الهوية القياسية، يتم تقديم أسرع خطة تسليم ممكنة.',
    ru: 'Это зависит от состояния документа и загруженности. Для стандартных паспортов и удостоверений личности предлагаются максимально короткие сроки сдачи.',
    fa: 'بسته به وضعیت سند و حجم کاری متفاوت است. برای مدارک استاندارد پاسپورت و شناسایی، سریع‌ترین برنامه تحویل ممکن ارائه می‌شود.',
    fr: 'Cela dépend de l’état du document et de la charge de travail. Pour les documents de passeport et d’identité standard, le délai de livraison le plus rapide possible es proposé.',
    de: 'Es hängt vom Zustand des Dokuments und der Arbeitsbelastung ab. Für Standardpässe und Ausweisdokumente wird die schnellstmögliche Lieferung angeboten.'
  },
  'Evet. Noter onayı gerektiren belgelerde tercüme formatı ve onay süreci için size doğru yönlendirme yapılır.': {
    en: 'Yes. For documents requiring notary approval, you will be guided correctly regarding the translation format and approval process.',
    ar: 'نعم. بالنسبة للمستندات التي تتطلب تصديق كاتب العدل، سيتم توجيهك بشكل صحيح فيما يتعلق بصيغة الترجمة وعملية التصديق.',
    ru: 'Да. Для документов, требующих нотариального заверения, мы предоставим вам правильные инструкции касательно формата перевода и процесса заверения.',
    fa: 'بله. برای مدارکی که نیاز به تأیید دفترخانه دارند، راهنمایی‌های لازم درباره فرمت ترجمه و روند تأیید به شما ارائه می‌شود.',
    fr: 'Oui. Pour les documents nécessitant une certification notariale, vous serez guidé correctement concernant le format de traduction et le processus de validation.',
    de: 'Ja. Für Dokumente, die eine notarielle Beglaubigung erfordern, werden Sie bezüglich des Übersetzungsformats und des Beglaubigungsprozesses korrekt angeleitet.'
  },
  'Hangi dillerde tercüme hizmeti veriyorsunuz?': {
    en: 'In which languages do you provide translation services?',
    ar: 'ما هي اللغات التي تقدمون خدمات الترجمة بها؟',
    ru: 'На какие языки вы предоставляете услуги перевода?',
    fa: 'خدمات ترجمه را به چه زبان‌هایی ارائه می‌دهید؟',
    fr: 'Dans quelles langues proposez-vous des services de traduction ?',
    de: 'In welchen Sprachen bieten Sie Übersetzungsdienste an?'
  },
  'İngilizce, Arapça, Farsça, Fransızca ve Rusça başta olmak üzere farklı dillerde belge tercümesi için destek alabilirsiniz.': {
    en: 'You can get support for document translation in different languages, especially English, Arabic, Persian, French, and Russian.',
    ar: 'يمكنك الحصول على دعم لترجمة المستندات بلغات مختلفة، لا سيما الإنجليزية والعربية والعالمية والفرنسية والروسية.',
    ru: 'Вы можете получить поддержку по переводу документов на различные языки, в частности на английский, арабский, персидский, французский и русский.',
    fa: 'می‌توانید برای ترجمه اسناد به زبان‌های مختلف، به ویژه انگلیسی، عربی، فارسی، فرانسوی و روسی از ما پشتیبانی بگیرید.',
    fr: 'Vous pouvez obtenir de l’aide pour la traduction de documents dans différentes langues, notamment l’anglais, l’arabe, le persan, le français et le russe.',
    de: 'Sie kunnen Unterstützung für Dokumentenübersetzungen in verschiedenen Sprachen erhalten, insbesondere in Englisch, Arabisch, Persisch, Französisch und Russisch.'
  },
  'Vize başvurusu için hangi belgeler tercüme edilir?': {
    en: 'Which documents are translated for visa applications?',
    ar: 'ما هي المستندات التي تترجم لطلبات التأشيرة؟',
    ru: 'Какие документы переводятся для оформления визы?',
    fa: 'چه مدارکی برای درخواست ویزا ترجمه می‌شوند؟',
    fr: 'Quels documents sont traduits pour les demandes de visa ?',
    de: 'Welche Dokumente werden für Visumanträge übersetzt?'
  },
  'Pasaport, nüfus kayıt örneği, diploma, transkript, banka evrakı, iş evrakı ve konsolosluğun talep ettiği diğer resmi belgeler çevrilebilir.': {
    en: 'Passport, birth/civil registry record, diploma, transcript, bank documents, employment documents, and other official documents requested by the consulate can be translated.',
    ar: 'يمكن ترجمة جواز السفر، وبيان القيد المدني، والشهادة، وكشف الدرجات، والمستندات البنكية، ومستندات العمل، وغيرها من المستندات الرسمية التي تطلبها القنصلية.',
    ru: 'Могут быть переведены паспорт, выписка из ЗАГС, диплом, транскрипт, банковские документы, справки с работы и другие официальные документы, требуемые консульством.',
    fa: 'پاسپورت، شناسنامه، دیپلم، ریزنمرات، مدارک بانکی، مدارک شغلی و سایر اسناد resmi مورد نیاز کنسولگری قابل ترجمه هستند.',
    fr: 'Le passeport, l’extrait d’état civil, le diplôme, le relevé de notes, les documents bancaires, les documents professionnels et autres documents officiels demandés par le consulat peuvent être traduits.',
    de: 'Reisepass, Personenstandsregisterauszug, Diplom, Zeugnis, Bankunterlagen, Arbeitsunterlagen und andere vom Konsulat verlangte offizielle Dokumente können übersetzt werden.'
  },
  'Belgenin dili, sayfa sayısı, teslim süresi ve noter onayı gerekip gerekmediği fiyatı etkiler. En doğru teklif için belge örneği paylaşmanız yeterlidir.': {
    en: 'The document’s language, number of pages, delivery time, and whether notary approval is required affect the price. Just share a sample of the document for the most accurate quote.',
    ar: 'تؤثر لغة المستند وعدد الصفحات ومدة التسليم ومدى الحاجة إلى تصديق كاتب العدل على السعر. ما عليك سوى مشاركة عينة من المستند للحصول على العرض الأكثر دقة.',
    ru: 'На цену влияют язык документа, количество страниц, сроки сдачи и необходимость нотариального заверения. Для получения наиболее точного расчета достаточно отправить образец документа.',
    fa: 'زبان سند، تعداد صفحات، زمان تحویل و نیاز یا عدم نیاز به تأیید دفترخانه بر قیمت تأثیر می‌گذارد. برای دریافت دقیق‌ترین پیشنهاد قیمت، کافی است نمونه سند را ارسال کنید.',
    fr: 'La langue du document, le nombre de pages, le délai de livraison et la nécessité d’une certification notariale influent sur le tarif. Il vous suffit de partager un échantillon du document pour obtenir le devis le plus précis.',
    de: 'Die Sprache des Dokuments, die Seitenzahl, die Lieferzeit und ob eine notarielle Beglaubigung erforderlich ist, beeinflussen den Preis. Senden Sie einfach ein Muster des Dokuments für ein genaues Angebot.'
  },

  // News Component Title
  'Tercüme süreçlerinde işinizi kolaylaştıran': { en: 'Making your translation processes easier,', ar: 'لتسهيل عمليات الترجمة الخاصة بك،', ru: 'Короткие руководства и заметки,', fa: 'تسهیل‌کننده فرآیندهای ترجمه شما،', fr: 'Facilitant vos démarches de traduction,', de: 'Erleichterung Ihrer Übersetzungsprozesse,' },
  'kısa rehberler ve notlar': { en: 'short guides and notes', ar: 'أدلة قصيرة وملاحظات', ru: 'облегчающие ваши процессы перевода', fa: 'راهنماها ve یادداشت‌های کوتاه', fr: 'des guides courts et des notes', de: 'kurze Leitfäden und Notizen' },

  // Footer Component
  'Pasaport, vize, ikamet, diploma, sözleşme ve resmi evraklar için hızlı, dikkatli ve kabul odaklı tercüme hizmeti sunuyoruz.': {
    en: 'We offer fast, careful and acceptance-focused translation services for passport, visa, residence, diploma, contract and official documents.',
    ar: 'نقدم خدمات ترجمة سريعة ودقيقة وموجهة للقبول لجوازات السفر والتأشيرات والإقامة والشهادات والعقود والوثائق الرسمية.',
    ru: 'Мы предлагаем быстрые, внимательные и ориентированные на принятие услуги перевода паспортов, виз, ВНЖ, дипломов, договоров и официальных документов.',
    fa: 'ما خدمات ترجمه سریع، دقیق و با تمرکز بر پذیرش برای پاسپورت، ویزا، اقامت، دیپلم، قرارداد و اسناد رسمی ارائه می‌دهیم.',
    fr: 'Nous proposons des services de traduction rapides, attentifs et axés sur l\'acceptation pour les passeports, visas, titres de séjour, diplômes, contrats et documents officiels.',
    de: 'Wir bieten schnelle, sorgfältige und anerkennungsorientierte Übersetzungsdienste für Pässe, Visa, Aufenthaltsgenehmigungen, Diplome, Verträge und offizielle Dokumente.'
  },
  'İngilizce Tercüme': { en: 'English Translation', ar: 'ترجمة إنجليزية', ru: 'Английский перевод', fa: 'ترجمه انگلیسی', fr: 'Traduction anglaise', de: 'Englische Übersetzung' },
  'Rusça Tercüme': { en: 'Russian Translation', ar: 'ترجمة روسية', ru: 'Русский перевод', fa: 'ترجمه روسی', fr: 'Traduction russe', de: 'Russische Übersetzung' },
  'Farsça Tercüme': { en: 'Persian Translation', ar: 'ترجمة فارسية', ru: 'Персидский перевод', fa: 'ترجمه فارسی', fr: 'Traduction persane', de: 'Persische Übersetzung' },
  'Fransızca Tercüme': { en: 'French Translation', ar: 'ترجمة فرنسية', ru: 'Французский перевод', fa: 'ترجمه فرانسوی', fr: 'Traduction française', de: 'Französische Übersetzung' },
  'Apostil Süreci': { en: 'Apostille Process', ar: 'عملية الأبوستيل', ru: 'Апостилирование', fa: 'روند آپوستیل', fr: 'Procédure d’apostille', de: 'Apostille-Verfahren' },

  // About Us Page
  'Resmi evrak tercümelerinde hızlı, dikkatli ve süreç odaklı çalışma anlayışı.': {
    en: 'A fast, careful and process-oriented work approach in official document translations.',
    ar: 'نهج عمل سريع ودقيق وموجه نحو الإجراءات في ترجمة الوثائق الرسمية.',
    ru: 'Быстрый, внимательный и ориентированный на процесс подход к переводу официальных документов.',
    fa: 'رویکرد کاری سریع, دقیق و فرآیند محور در ترجمه اسناد resmi.',
    fr: 'Une approche de travail rapide, attentive et axée sur les processus dans les traductions de documents officiels.',
    de: 'Ein schneller, sorgfältiger und prozessorientierter Arbeitsansatz bei der Übersetzung offizieller Dokumente.'
  },
  'YP Metropol Tercüme; pasaport, kimlik, diploma, transkript, vekaletname, sözleşme, vize ve ikamet evraklarında doğru terminoloji, temiz format ve hızlı teslim odağıyla çalışır.': {
    en: 'YP Metropol Tercüme works with correct terminology, clean format and fast delivery focus on passport, ID, diploma, transcript, power of attorney, contract, visa and residence documents.',
    ar: 'يعمل مكتب YP Metropol للترجمة بتركيز على المصطلحات الصحيحة والتنسيق النظيف والتسليم السريع في وثائق جواز السفر والهوية والشهادة وكشف الدرجات والوكالة والعقد والتأشيرة والإقامة.',
    ru: 'Бюро переводов YP Metropol работает с правильной терминологией, четким форматом и фокусом на быструю сдачу для паспортов, удостоверений личности, дипломов, транскриптов, доверенностей, договоров, визовых и резидентских документов.',
    fa: 'دفتر ترجمه YP Metropol با تمرکز بر اصطلاحات دقیق، فرمت منظم و تحویل سریع برای مدارک پاسپورت، کارت شناسایی، دیپلم، ریزنمرات، وکالت‌نامه، قرارداد، ویزا و اقامت فعالیت می‌کند.',
    fr: 'Le bureau de traduction YP Metropol travaille avec une terminologie correcte, un format propre et un objectif de livraison rapide pour les passeports, pièces d\'identité, diplômes, relevés de notes, procurations, contrats, visas et documents de séjour.',
    de: 'Das YP Metropol Übersetzungsbüro arbeitet mit korrekter Terminologie, sauberem Format und Fokus auf schnelle Lieferung bei Pässen, Ausweisen, Diplomen, Transkripten, Vollmachten, Verträgen, Visa und Aufenthaltsdokumenten.'
  },
  'Belgenizi gönderdiğinizde hedef dil, noter onayı ihtiyacı, teslim süresi ve başvuru amacı birlikte değerlendirilir. Böylece yalnızca çeviri değil, daha düzenli bir evrak süreci alırsınız.': {
    en: 'When you send your document, the target language, notary approval needs, delivery time and application purpose are evaluated together. This gives you not only a translation, but a more organized document process.',
    ar: 'عند إرسال وثيقتكم، يتم تقييم اللغة المطلوبة والحاجة إلى التوثيق ومدة التسليم وغرض الطلب معاً. وبذلك تحصلون ليس فقط على ترجمة، بل أيضاً مساراً أكثر تنظيماً للوثائق.',
    ru: 'Когда вы отправляете документ, мы оцениваем целевой язык, необходимость нотариата, срок и цель подачи вместе. Так вы получаете не только перевод, а более организованный документооборот.',
    fa: 'وقتی سندتان را ارسال می‌کنید، زبان مقصد، نیاز به تأیید دفترخانه ve زمان تحویل و هدف درخواست با هم بررسی می‌شود. بنابراین فقط ترجمه دریافت نمی‌کنید، بلکه روند اسنادی منظم‌تری خواهید داشت.',
    fr: 'Lorsque vous envoyez votre document, la langue cible, le besoin de notarisation, le délai et l’objectif de la demande sont évalués ensemble. Vous recevez ainsi non seulement une traduction, mais aussi un processus documentaire plus organisé.',
    de: 'Wenn Sie Ihr Dokument senden, werden Zielsprache, Notarbedarf, Lieferzeit und der Antragszweck gemeinsam bewertet. So erhalten Sie nicht nur eine Übersetzung, sondern einen strukturierteren Dokumentenprozess.'
  },
  'Official document focus': {
    en: 'Official document focus',
    ar: 'التركيز على الوثائق الرسمية',
    ru: 'Фокус на официальных документах',
    fa: 'تمرکز بر اسناد رسمی',
    fr: 'Orientation documents officiels',
    de: 'Fokus auf offizielle Dokumente'
  },

  // Services Page descriptions and highlights
  'Resmi kurumlarda kullanılacak belgeler için yeminli tercüman kaşeli çeviri.': {
    en: 'Translation with a sworn translator stamp for documents to be used in official institutions.',
    ar: 'ترجمة مختومة بمترجم محلف للوثائق التي ستُستخدم في المؤسسات الرسمية.',
    ru: 'Перевод с печатью присяжного переводчика для документов, предназначенных для использования в официальных учреждениях.',
    fa: 'ترجمه با مهر مترجم رسمی для документов в официальных ведомствах.',
    fr: 'Traduction avec tampon de traducteur assermenté pour les documents à utiliser dans les institutions officielles.',
    de: 'Übersetzung mit Stempel eines vereidigten Übersetzers für Dokumente zur Verwendung in offiziellen Einrichtungen.'
  },
  'Resmi format': { en: 'Official format', ar: 'صيغة resmiye', ru: 'Официальный format', fa: 'فرمت resmi', fr: 'Format officiel', de: 'Offizielles Format' },
  'Kaşeli teslim': { en: 'Stamped delivery', ar: 'تسليم مختوم', ru: 'Сдача с печатью', fa: 'تحویل مهرشده', fr: 'Livraison tamponnée', de: 'Gestempelte Lieferung' },
  'Belge kontrolü': { en: 'Document control', ar: 'فحص المستندات', ru: 'Проверка документов', fa: 'کنترل مدارک', fr: 'Contrôle des documents', de: 'Dokumentenprüfung' },

  'Resmi kurumlarda kullanılacak evraklar için yeminli tercüman kaşeli çeviri.': {
    en: 'Translation with a sworn translator stamp for documents to be used in official institutions.',
    ar: 'ترجمة مختومة بمترجم محلف للوثائق التي ستُستخدم في المؤسسات الرسمية.',
    ru: 'Перевод с печатью присяжного переводчика для документов, предназначенных для использования в официальных учреждениях.',
    fa: 'Перевод с печатью присяжного переводчика для официальных документов.',
    fr: 'Traduction avec tampon de traducteur assermenté pour les documents à utiliser dans les institutions officielles.',
    de: 'Übersetzung mit Stempel eines vereidigten Übersetzers für Dokumente zur Verwendung in offiziellen Einrichtungen.'
  },
  'Kaşeli tercüme': { en: 'Stamped translation', ar: 'ترجمة مختومة', ru: 'Перевод с печатью', fa: 'ترجمه مهرشده', fr: 'Traduction tamponnée', de: 'Gestempelte Übersetzung' },
  'Belge türüne uygun format': { en: 'Format suitable for the document type', ar: 'تنسيق مناسب لنوع المستند', ru: 'Формат по типу документа', fa: 'فرمت متناسب با نوع سند', fr: 'Format adapté au type de document', de: 'Dokumenttypentsprechendes Format' },
  'Kontrollü teslim süreci': { en: 'Controlled delivery process', ar: 'عملية تسليم خاضعة للرقابة', ru: 'Контролируемый процесс сдачи', fa: 'روند تحویل بررسی‌شده', fr: 'Processus de livraison contrôlé', de: 'Kontrollierter Lieferprozess' },

  'Noter onayı gerektiren belgelerde doğru hazırlık ve süreç yönlendirmesi.': {
    en: 'Correct preparation and process guidance for documents requiring notary approval.',
    ar: 'تحضير صحيح وتوجيه للعملية بالنسبة للمستندات التي تتطلب تصديق كاتب العدل.',
    ru: 'Правильная подготовка и сопровождение процесса для документов, требующих нотариального заверения.',
    fa: 'آماده‌سازی درست و راهنمایی روند برای مدارکی که نیاز به تأیید دفترخانه دارند.',
    fr: 'Préparation correcte et orientation pour les documents nécessitant une validation notariale.',
    de: 'Korrekte Vorbereitung und Prozessbegleitung für Dokumente, die eine notarielle Beglaubigung erfordern.'
  },
  'Noter uygunluğu': { en: 'Notary compatibility', ar: 'ملاءمة كاتب العدل', ru: 'Нотариальное соответствие', fa: 'تطابق با قوانین دفترخانه', fr: 'Conformité notariale', de: 'Notarielle Eignung' },
  'Onay süreci': { en: 'Approval process', ar: 'عملية التصديق', ru: 'Процесс заверения', fa: 'روند تأیید', fr: 'Processus de validation', de: 'Beglaubigungsprozess' },
  'Eksiksiz dosya': { en: 'Complete file', ar: 'ملف كامل', ru: 'Полный комплект документов', fa: 'پرونده کامل', fr: 'Dossier complet', de: 'Vollständige Akte' },
  'Onay öncesi belge kontrolü': { en: 'Document control before approval', ar: 'فحص المستندات قبل التصديق', ru: 'Проверка документов перед заверением', fa: 'بررسی مدارک قبل از تأیید', fr: 'Contrôle des documents avant validation', de: 'Dokumentenprüfung vor der Beglaubigung' },
  'Resmi işlemler için yönlendirme': { en: 'Guidance for official procedures', ar: 'توجيه للإجراءات الرسمية', ru: 'Сопровождение официальных процедур', fa: 'راهنمایی برای امور resmi', fr: 'Orientation pour les démarches officielles', de: 'Anleitung für offizielle Verfahren' },

  'Diploma ve Transkript Tercümesi': {
    en: 'Diploma and Transcript Translation',
    ar: 'ترجمة الشهادة وكشف الدرجات',
    ru: 'Перевод диплома и транскрипта',
    fa: 'ترجمه دیپلم ve ریزنمرات',
    fr: 'Traduction de diplôme et relevé de notes',
    de: 'Übersetzung von Diplom und Transcript'
  },
  'Eğitim, denklik, iş ve yurt dışı başvuruları için akademik belge tercümeleri.': {
    en: 'Academic document translations for education, equivalency, job and abroad applications.',
    ar: 'ترجمات المستندات الأكاديمية للتعليم والمعادلة والعمل والطلبات في الخارج.',
    ru: 'Перевод академических документов для образования, нострификации, работы и зарубежных заявлений.',
    fa: 'ترجمه مدارک تحصیلی برای تحصیل، معادل‌سازی، کار و درخواست‌های خارج از کشور.',
    fr: 'Traductions de documents académiques pour les études, l\'équivalence, le travail et les candidatures à l\'étranger.',
    de: 'Übersetzungen akademischer Dokumente für Bildung, Anerkennung, Beruf und Auslandsbewerbungen.'
  },
  'Akademik belgeler': { en: 'Academic documents', ar: 'مستندات أكاديمية', ru: 'Академические документы', fa: 'مدارک تحصیلی', fr: 'Documents académiques', de: 'Akademische Dokumente' },
  'Denklik dosyası': { en: 'Equivalency file', ar: 'ملف المعادلة', ru: 'Документы на нострификацию', fa: 'پرونده معادل‌سازی', fr: 'Dossier d’équivalence', de: 'Anerkennungsakte' },
  'Başvuru formatı': { en: 'Application format', ar: 'صиغة الطلب', ru: 'Формат заявления', fa: 'فرمت درخواست', fr: 'Format de candidature', de: 'Antragsformat' },
  'Diploma ve transkript': { en: 'Diploma and transcript', ar: 'الشهادة وكشف الدرجات', ru: 'Диплом и транскрипт', fa: 'دیپلم ve ریزنمرات', fr: 'Diplôme et relevé de notes', de: 'Diplom und Zeugnis' },
  'Denklik dosyaları': { en: 'Equivalency files', ar: 'ملفات المعادلة', ru: 'Документы для нострификации', fa: 'پرونده‌های معادل‌سازی', fr: 'Dossiers d\'équivalence', de: 'Anerkennungsakten' },
  'Akademik terminoloji': { en: 'Academic terminology', ar: 'مصطلحات أكاديمية', ru: 'Академическая терминология', fa: 'اصطلاحات دانشگاهی', fr: 'Terminologie académique', de: 'Akademische Terminologie' },

  'Vize Evrakları Tercümesi': {
    en: 'Visa Documents Translation',
    ar: 'ترجمة وثائق التأشيرة',
    ru: 'Перевод визовых документов',
    fa: 'ترجمه مدارک ویزا',
    fr: 'Traduction de documents de visa',
    de: 'Übersetzung von Visaunterlagen'
  },
  'Konsolosluk dosyaları için nüfum, banka, iş ve destek evrakı tercümeleri.': {
    en: 'Translations of civil registry, bank, employment and supporting documents for consulate files.',
    ar: 'ترجمات مستندات القيد المدني والبنك والعمل والمستندات الداعمة لملفات القنصلية.',
    ru: 'Перевод документов гражданского состояния, банковских выписок, справок с работы и подтверждающих документов для консульских досье.',
    fa: 'ترجمه مدارک شناسایی، بانکی، شغلی ve پشتیبان для консульских файлов.',
    fr: 'Traductions de documents d\'état civil, bancaires, professionnels et justificatifs pour les dossiers consulaires.',
    de: 'Übersetzungen von Personenstands-, Bank-, Arbeits- und Nachweisdokumenten für Konsulatsakten.'
  },
  'Konsolosluk dosyası': { en: 'Consulate file', ar: 'ملف القنصلية', ru: 'Консульское досье', fa: 'پرونده کنسولگری', fr: 'Dossier consulaire', de: 'Konsulatsakte' },
  'Başvuru evrakları': { en: 'Application documents', ar: 'مستندات الطلب', ru: 'Документы для подачи', fa: 'Документы для подачи', fr: 'Documents de candidature', de: 'Bewerbungsunterlagen' },
  'Kontrollü teslim': { en: 'Controlled delivery', ar: 'تسليم خاضع للرقابة', ru: 'Контролируемая сдача', fa: 'تحویل بررسی‌شده', fr: 'Livraison contrôlée', de: 'Kontrollierte Lieferung' },
  'Kimlik ve nüfus evrakları': { en: 'ID and civil registry documents', ar: 'وثائق الهوية والقيد المدني', ru: 'Удостоверения личности и ЗАГС', fa: 'مدارک شناسایی و ثبت احوال', fr: 'Pièces d’identité et documents d’état civil', de: 'Ausweis- und Personenstandsdokumente' },
  'Başvuru amacına uygun hazırlık': { en: 'Preparation suitable for the application purpose', ar: 'تحضير مناسب لغرض الطلب', ru: 'Подготовка под цель подачи', fa: 'آماده‌سازی متناسب با هدف درخواست', fr: 'Preparation adaptée à l\'objectif de la demande', de: 'Dem Antragszweck entsprechende Vorbereitung' },

  'Sözleşme, vekaletname, mahkeme ve şirket evraklarında titiz terminoloji.': {
    en: 'Meticulous terminology in contracts, powers of attorney, court and company documents.',
    ar: 'مصطلحات دقيقة في العقود والوكالات والمستندات القضائية والشركات.',
    ru: 'Тщательная терминология в договорах, доверенностях, судебных и корпоративных документах.',
    fa: 'اصطلاحات دقیق در قراردادها، وکالت‌نامه‌ها، مدارک دادگاه ve şirket‌ها.',
    fr: 'Terminologie méticuleuse dans les contrats, procurations, documents judiciaires et d\'entreprise.',
    de: 'Sorgfältige Terminologie in Verträgen, Vollmachten, Gerichts- und Unternehmensdokumenten.'
  },
  'Sözleşmeler': { en: 'Contracts', ar: 'العقود', ru: 'Договоры', fa: 'قراردادها', fr: 'Contrats', de: 'Verträge' },
  'Vekaletnameler': { en: 'Powers of attorney', ar: 'الوكالات', ru: 'Доверенности', fa: 'وکالت‌نامه‌ها', fr: 'Procurations', de: 'Vollmachten' },
  'Şirket evrakları': { en: 'Company documents', ar: 'مستندات الشركة', ru: 'Корпоративные документы', fa: 'مدارک شرکت', fr: 'Documents d’entreprise', de: 'Unternehmensdokumente' },
  'Sözleşme ve vekaletname': { en: 'Contract and power of attorney', ar: 'العقد والوكالة', ru: 'العقد والوكالة', fa: 'قرارداد و وکالت‌نامه', fr: 'Contrat et procuration', de: 'Vertrag und Vollmacht' },
  'Hukuki terminoloji dikkati': { en: 'Attention to legal terminology', ar: 'الانتباه للمصطلحات القانونية', ru: 'Внимание к юридической терминологии', fa: 'توجه به اصطلاحات حقوقی', fr: 'Attention portée à la terminologie juridique', de: 'Sorgfalt bei der Rechtsterminologie' },

  // Detail Page extra points
  'Vize ve ikamet dosyaları': { en: 'Visa and residence files', ar: 'ملفات التأشيرة والإقامة', ru: 'Визовые и резидентские документы', fa: 'پرونده‌های ویزا ve اقامت', fr: 'Dossiers de visa et de séjour', de: 'Visa- und Aufenthaltsunterlagen' },
  'Hızlı belge inceleme': { en: 'Fast document review', ar: 'مراجعة سريعة للوثائق', ru: 'Быстрая проверка документов', fa: 'بررسی سریع مدرک', fr: 'Examen rapide des documents', de: 'Schnelle Dokumentenprüfung' },
  'Resmi başvuruya uygun teslim': { en: 'Delivery suitable for official applications', ar: 'تسليم مناسب للطلبات الرسمية', ru: 'Сдача в соответствии с официальными требованиями', fa: 'تحویل متناسب با درخواست resmi', fr: 'Livraison conforme aux démarches officielles', de: 'Offiziellen Anträgen entsprechende Lieferung' },

  // Page hero and gallery/card fallbacks
  'Tercüme Rehberi': { en: 'Translation Guide', ar: 'دليل الترجمة', ru: 'Руководство по переводу', fa: 'راهنمای ترجمه', fr: 'Guide de traduction', de: 'Übersetzungsleitfaden' },
  'Haberler & duyurular': { en: 'News & announcements', ar: 'الأخبار والإعلانات', ru: 'Новости и объявления', fa: 'اخبار و اطلاعیه‌ها', fr: 'Actualités et annonces', de: 'Nachrichten und Ankündigungen' },
  'duyurular': { en: 'announcements', ar: 'الإعلانات', ru: 'объявления', fa: 'اطلاعیه‌ها', fr: 'annonces', de: 'Ankündigungen' },
  'Resmi evrak, vize, pasaport ve noter onaylı tercüme süreçleriyle ilgili kısa rehberleri takip edin.': {
    en: 'Follow short guides about official documents, visas, passports and notarized translation processes.',
    ar: 'تابعوا أدلة قصيرة حول الوثائق الرسمية والتأشيرات والجوازات وإجراءات الترجمة الموثقة.',
    ru: 'Следите за краткими руководствами по официальным документам, визам, паспортам и нотариальным переводам.',
    fa: 'راهنماهای کوتاه درباره اسناد رسمی، ویزا، پاسپورت و روند ترجمه محضری را دنبال کنید.',
    fr: 'Suivez de courts guides sur les documents officiels, visas, passeports et traductions notariées.',
    de: 'Lesen Sie kurze Leitfäden zu offiziellen Dokumenten, Visa, Pässen und notariellen Übersetzungen.'
  },
  'Belgeniz için': { en: 'For your document', ar: 'لوثيقتكم', ru: 'Для вашего документа', fa: 'برای سند شما', fr: 'Pour votre document', de: 'Für Ihr Dokument' },
  'teklif alın': { en: 'get a quote', ar: 'احصلوا على عرض', ru: 'получите расчет', fa: 'پیشنهاد بگیرید', fr: 'demandez un devis', de: 'Angebot erhalten' },
  'Belge türünü, hedef dili ve teslim beklentinizi paylaşın; size hızlıca dönüş yapalım.': {
    en: 'Share the document type, target language and delivery expectation; we will get back to you quickly.',
    ar: 'شاركوا نوع الوثيقة واللغة المطلوبة وتوقع التسليم؛ سنعود إليكم بسرعة.',
    ru: 'Укажите тип документа, целевой язык и ожидаемый срок; мы быстро свяжемся с вами.',
    fa: 'نوع سند، زبان مقصد و انتظار تحویل را ارسال کنید؛ سریع با شما تماس می‌گیریم.',
    fr: 'Indiquez le type de document, la langue cible et le délai souhaité ; nous vous répondrons rapidement.',
    de: 'Teilen Sie Dokumenttyp, Zielsprache und Lieferwunsch mit; wir melden uns schnell bei Ihnen.'
  },
  'Belgenizin kullanım amacını netleştirir, hedef dili ve onay ihtiyacını değerlendirir, teslim planını baştan paylaşırız.': {
    en: 'We clarify the purpose of your document, assess the target language and approval needs, and share the delivery plan from the start.',
    ar: 'نوضح غرض استخدام وثيقتكم ونقيّم اللغة المطلوبة والحاجة إلى التصديق، ونشارك خطة التسليم منذ البداية.',
    ru: 'Мы уточняем цель использования документа, целевой язык и необходимость заверения, а также заранее сообщаем план сдачи.',
    fa: 'هدف استفاده از سند، زبان مقصد و نیاز به تأیید را مشخص می‌کنیم و برنامه تحویل را از ابتدا اعلام می‌کنیم.',
    fr: 'Nous clarifions l’usage de votre document, évaluons la langue cible et les besoins de validation, puis partageons le plan de livraison dès le départ.',
    de: 'Wir klären den Verwendungszweck, die Zielsprache und den Beglaubigungsbedarf und teilen den Lieferplan von Anfang an mit.'
  },
  'YP Metropol Çalışma Alanı': { en: 'YP Metropol Workspace', ar: 'مساحة عمل YP Metropol', ru: 'Рабочая зона YP Metropol', fa: 'فضای کاری YP Metropol', fr: 'Espace de travail YP Metropol', de: 'YP Metropol Arbeitsbereich' },
  'Vize & İkamet': { en: 'Visa & Residence', ar: 'التأشيرة والإقامة', ru: 'Виза и ВНЖ', fa: 'ویزا و اقامت', fr: 'Visa et séjour', de: 'Visa und Aufenthalt' },
  'Resmi Evrak': { en: 'Official Document', ar: 'وثيقة رسمية', ru: 'Официальный документ', fa: 'سند رسمی', fr: 'Document officiel', de: 'Offizielles Dokument' },
  'Vize, ikamet ve resmi başvurular için pasaport çevirisi hazırlığı.': {
    en: 'Passport translation preparation for visa, residence and official applications.',
    ar: 'تحضير ترجمة جواز السفر للتأشيرة والإقامة والطلبات الرسمية.',
    ru: 'Подготовка перевода паспорта для виз, ВНЖ и официальных заявлений.',
    fa: 'آماده‌سازی ترجمه پاسپورت برای ویزا، اقامت و درخواست‌های رسمی.',
    fr: 'Préparation de traduction de passeport pour les visas, séjours et démarches officielles.',
    de: 'Vorbereitung der Passübersetzung für Visa, Aufenthalt und offizielle Anträge.'
  },
  'Noter onayına uygun resmi belge tercümesi ve teslim süreci.': {
    en: 'Official document translation and delivery process suitable for notary approval.',
    ar: 'ترجمة وثائق رسمية وعملية تسليم مناسبة لتصديق كاتب العدل.',
    ru: 'Перевод официальных документов и процесс сдачи для нотариального заверения.',
    fa: 'ترجمه سند رسمی و روند تحویل مناسب برای تأیید دفترخانه.',
    fr: 'Traduction de document officiel et processus de livraison adaptés à la validation notariale.',
    de: 'Übersetzung offizieller Dokumente und Lieferung passend zur notariellen Beglaubigung.'
  },
  'Belgeleriniz düzenli ve kontrollü şekilde hazırlandığı profesyonel çalışma ortamı.': {
    en: 'A professional workspace where your documents are prepared in an organized and controlled way.',
    ar: 'بيئة عمل احترافية تُحضّر فيها وثائقكم بشكل منظم وتحت المتابعة.',
    ru: 'Профессиональная рабочая среда, где документы готовятся организованно и под контролем.',
    fa: 'فضای کاری حرفه‌ای که اسناد شما به‌صورت منظم و کنترل‌شده آماده می‌شود.',
    fr: 'Un environnement professionnel où vos documents sont préparés de façon organisée et contrôlée.',
    de: 'Ein professionelles Arbeitsumfeld, in dem Ihre Dokumente strukturiert und kontrolliert vorbereitet werden.'
  },
  'Kargo Teslim': { en: 'Courier Delivery', ar: 'تسليم بالشحن', ru: 'Доставка курьером', fa: 'تحویل با پیک', fr: 'Livraison par courrier', de: 'Kurierlieferung' },
  'Online Çeviri Hizmeti': { en: 'Online Translation Service', ar: 'خدمة ترجمة عبر الإنترنت', ru: 'Онлайн-услуга перевода', fa: 'خدمات ترجمه آنلاین', fr: 'Service de traduction en ligne', de: 'Online-Übersetzungsservice' },
  'Uygun Fiyat Garantisi': { en: 'Fair Price Guarantee', ar: 'ضمان السعر المناسب', ru: 'Гарантия выгодной цены', fa: 'تضمین قیمت مناسب', fr: 'Garantie de prix avantageux', de: 'Faire-Preis-Garantie' },
  'Menüyü aç/kapat': { en: 'Toggle menu', ar: 'فتح/إغلاق القائمة', ru: 'Открыть/закрыть меню', fa: 'باز/بستن منو', fr: 'Ouvrir/fermer le menu', de: 'Menü öffnen/schließen' },
  'Menüyü kapat': { en: 'Close menu', ar: 'إغلاق القائمة', ru: 'Закрыть меню', fa: 'بستن منو', fr: 'Fermer le menu', de: 'Menü schließen' },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && (locales as readonly string[]).includes(value));
}

const reverseTranslations = new Map<string, string>();

Object.entries(translations).forEach(([source, localeValues]) => {
  reverseTranslations.set(source, source);
  Object.values(localeValues).forEach((translated) => {
    if (translated) reverseTranslations.set(translated, source);
  });
});

export function getTranslationSource(value: string) {
  return reverseTranslations.get(value) || value;
}

export function translate(value: string, locale: Locale) {
  const source = getTranslationSource(value);
  if (locale === 'tr') return source;
  return translations[source]?.[locale] || source;
}
