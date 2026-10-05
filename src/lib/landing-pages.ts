import { requestedLandingPages } from '@/lib/requested-landing-pages';

export type LandingSection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingPage = {
  slug: string;
  kind: 'service' | 'language' | 'guide' | 'location';
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: readonly string[];
  sections: readonly LandingSection[];
  faqs: readonly LandingFaq[];
  keywords: readonly string[];
  publishedAt?: string;
};

const standardLanguageFaqs = (language: string): readonly LandingFaq[] => [
  {
    question: `${language} tercüme ücreti nasıl belirlenir?`,
    answer: 'Ücret; metnin uzunluğu, uzmanlık alanı, dosya biçimi, teslim süresi ve yemin/noter onayı ihtiyacına göre belge incelendikten sonra belirlenir.',
  },
  {
    question: 'Belgeyi ofise gelmeden gönderebilir miyim?',
    answer: 'Evet. Okunaklı tarama veya fotoğrafı WhatsApp ya da e-posta ile göndererek ön inceleme, süre ve fiyat bilgisi alabilirsiniz. Asıl belge gereken işlemler ayrıca bildirilir.',
  },
  {
    question: 'Noter onayı veya apostil gerekir mi?',
    answer: 'Bu şart belgeyi kabul edecek kuruma ve kullanılacağı ülkeye göre değişir. İşleme başlamadan önce ilgili kurumun güncel talebini teyit etmeniz önerilir; gerekli akış buna göre planlanır.',
  },
];

const languageSections = (
  language: string,
  country: string,
  specialistNote: string,
): readonly LandingSection[] => [
  {
    title: `Mecidiyeköy’de profesyonel ${language} tercüme`,
    paragraphs: [
      `YP Metropol Tercüme, ${language}-Türkçe ve Türkçe-${language} yönlerinde bireysel ve kurumsal çeviri desteği sunar. Dosya, konusu ve kullanılacağı kurum dikkate alınarak uygun tercümana yönlendirilir.`,
      'Belgelerinizi Mecidiyeköy’deki ofisimize elden bırakabilir veya ön inceleme için WhatsApp ve e-posta üzerinden iletebilirsiniz.',
    ],
    bullets: ['Yazılı ve yeminli tercüme', 'Noter onayı ve apostil süreç desteği', 'Online belge gönderimi', 'Teslim öncesi redaksiyon ve kontrol'],
  },
  {
    title: `${language} tercüme neden uzmanlık gerektirir?`,
    paragraphs: [
      specialistNote,
      'Kelime karşılığının bulunması tek başına yeterli değildir. Metnin amacı, hedef kitlesi, terminolojisi ve resmî biçimi bir arada korunmalıdır.',
    ],
  },
  {
    title: 'Hukuki, akademik ve teknik belgeler',
    paragraphs: [
      `Sözleşme, vekâletname, mahkeme evrakı, diploma, transkript, makale, kullanım kılavuzu ve teknik rapor gibi belgeler ${language} terminolojisine ve ilgili uzmanlık alanına hâkim tercümanlarla hazırlanır.`,
      'Tarih, isim, sayı, mühür, tablo ve belge düzeni teslimden önce ayrıca kontrol edilir. Hassas dosyalar gizlilik esasına göre işlenir.',
    ],
    bullets: ['Sözleşme ve şirket evrakları', 'Diploma, transkript ve akademik metinler', 'Teknik doküman ve kullanım kılavuzları', 'Sağlık raporu ve tıbbi belgeler'],
  },
  {
    title: `Yeminli ${language} tercüme ve resmî kullanım`,
    paragraphs: [
      `Pasaport, nüfus kayıt örneği, diploma, sabıka kaydı, doğum veya evlilik belgesi gibi evraklar Türkiye’de ya da ${country}’da resmî bir kuruma sunulacaksa yeminli tercüman imzası, noter tasdiki veya apostil istenebilir.`,
      'Gerekli onay türü, belgeyi kabul edecek makamdan teyit edildikten sonra tercüme ve onay sırası birlikte planlanır.',
    ],
  },
  {
    title: 'Sözlü ve kurumsal tercüme',
    paragraphs: [
      `İş görüşmesi, noter işlemi, fuar, toplantı ve saha ziyareti için ${language} ardıl veya sözlü tercüman desteği sağlanabilir. Kurumsal projelerde marka dili ve terim birliği korunur.`,
      'Web sitesi, katalog, sunum ve dijital içeriklerde hedef kitlenin kültürü dikkate alınarak lokalizasyon yapılır.',
    ],
  },
];

export const landingPages: readonly LandingPage[] = [
  {
    slug: 'noter-onayli-tercume-surecinde-izlenmesi-gereken-5-adim',
    kind: 'guide',
    eyebrow: 'REHBER',
    title: 'Noter Onaylı Tercümede İzlenecek 5 Adım',
    description: 'Resmî belgenin incelenmesinden yeminli tercüme, noter tasdiki ve gerekiyorsa apostile uzanan süreci adım adım öğrenin.',
    intro: 'Noter onaylı tercüme, yeminli tercüman tarafından hazırlanan çevirideki imzanın yetkili noter tarafından tasdik edildiği resmî süreçtir. Doğru sıra izlendiğinde gereksiz zaman ve masrafın önüne geçilir.',
    image: '/yp-metropol/document.webp',
    imageAlt: 'Noter onaylı tercüme için incelenen resmî belgeler',
    highlights: ['Belge ve kurum şartını teyit edin', 'Uygun yeminli tercümanla çalışın', 'Noter ve apostil sırasını planlayın'],
    publishedAt: '2025-10-18',
    keywords: ['noter onayli tercume sureci', 'noter tercume 5 adim', 'apostil onayi', 'yeminli tercuman'],
    sections: [
      {
        title: '1. Belgeyi ve kabul makamının şartlarını kontrol edin',
        paragraphs: ['Önce belgenin aslı, eksiksiz sayfaları, mühürleri ve okunabilirliği kontrol edilir. Ardından belgeyi kabul edecek kurumdan tercüme dili, noter tasdiki, asıl belge ve apostil şartları teyit edilir. Her kurum her evrak için aynı onayı istemez.'],
        bullets: ['Diploma ve transkript', 'Doğum, evlilik ve ölüm kayıtları', 'Pasaport, kimlik ve ehliyet', 'Sözleşme, vekâletname ve mahkeme evrakları', 'Şirket kuruluş ve ticaret belgeleri'],
      },
      {
        title: '2. Belge alanına uygun yeminli tercüman belirleyin',
        paragraphs: ['Noter tasdiki yapılacak çeviri, ilgili noterde yemin kaydı bulunan bir tercüman tarafından imzalanmalıdır. Hukuki, akademik veya teknik belgelerde dil yeterliliğinin yanında alan terminolojisi de önem taşır.'],
      },
      {
        title: '3. Çeviri, biçim ve son kontrolü tamamlayın',
        paragraphs: ['İsimler, tarihler, numaralar, unvanlar, kaşe ve açıklamalar kaynak belgeyle karşılaştırılır. Çeviri metninin sayfa düzeni ve tercüman beyanı noter işlemine uygun şekilde hazırlanır.'],
        bullets: ['Kaynak ve hedef metin karşılaştırması', 'İsim, tarih ve rakam kontrolü', 'Eksik sayfa ve mühür kontrolü', 'Terminoloji ve yazım denetimi'],
      },
      {
        title: '4. Noter tasdikini yaptırın',
        paragraphs: ['Yeminli tercüman çeviriyi imzalar; noter, kendi nezdindeki yemin kaydını ve imzayı kontrol ederek tasdik işlemini gerçekleştirir. Noter tasdiki, noterin kaynak metni yeniden çevirdiği anlamına gelmez; bu nedenle çeviri kontrolü tasdikten önce tamamlanmalıdır.'],
      },
      {
        title: '5. Yurt dışı kullanım için apostil veya konsolosluk şartını teyit edin',
        paragraphs: ['Belge yurt dışında kullanılacaksa noter tasdikinden sonra apostil veya ilgili ülkenin konsolosluk tasdiki gerekebilir. Ülke, belge türü ve kabul makamına göre sıra değişebileceğinden güncel gereklilik işlem öncesinde doğrulanmalıdır.'],
      },
      {
        title: 'En sık karşılaşılan sorunlar',
        paragraphs: ['Eksik sayfa, okunmayan mühür, yanlış isim yazımı, uygun noterde yemin kaydı bulunmaması veya yanlış onay sırası belgenin iadesine yol açabilir. Dosyanın baştan sona tek akış içinde kontrol edilmesi riski azaltır.'],
      },
    ],
    faqs: [
      { question: 'Her yeminli tercüme noter onaylı mıdır?', answer: 'Hayır. Yeminli tercüme, yeminli tercümanın imza ve kaşesini taşır; noter onaylı tercümede bu imza ayrıca noter tarafından tasdik edilir.' },
      { question: 'Her belgeye apostil gerekir mi?', answer: 'Hayır. Apostil ihtiyacı belgenin sunulacağı ülke, kurum ve belgenin türüne göre değişir. Kabul makamından teyit alınmalıdır.' },
      { question: 'Sadece fotoğraf göndererek fiyat alabilir miyim?', answer: 'Evet. Okunaklı ve tüm sayfaları görünen fotoğraf veya PDF ön inceleme için yeterlidir. İşlemde asıl belgenin gerekip gerekmediği ayrıca bildirilir.' },
    ],
  },
  {
    slug: 'noter-onayli-tercume',
    kind: 'service',
    eyebrow: 'RESMÎ BELGE TERCÜMESİ',
    title: 'Noter Onaylı Tercüme',
    description: 'Resmî kurumlara sunulacak belgeler için yeminli tercüme, noter tasdiki ve gerektiğinde apostil sürecini doğru sırayla planlayın.',
    intro: 'YP Metropol Tercüme; belge inceleme, uygun yeminli tercümanın belirlenmesi, çeviri kontrolü ve noter işleminin koordinasyonunda tek noktadan destek sağlar.',
    image: '/yp-metropol/document.webp',
    imageAlt: 'Mecidiyeköy noter onaylı tercüme hizmeti',
    highlights: ['Yeminli tercüman imzalı çeviri', 'Noter işlemine uygun dosya', 'Apostil için süreç yönlendirmesi'],
    keywords: ['noter onayli tercume', 'mecidiyekoy noter tercume', 'noter tasdikli ceviri', 'resmi belge tercumesi'],
    sections: [
      { title: 'Noter onaylı tercüme nedir?', paragraphs: ['Yeminli tercüman tarafından çevrilip imzalanan belgenin, tercümanın yemin kaydının bulunduğu noter tarafından tasdik edilmesidir. Hangi onayın gerektiği belgeyi talep eden kurumun kurallarına göre belirlenir.'] },
      { title: 'Hangi belgeler için talep edilir?', paragraphs: ['Resmî ve hukuki sonuç doğuran evraklarda noter tasdiki sıklıkla istenir. Başvuru öncesinde kabul makamının güncel belge listesini kontrol etmek gerekir.'], bullets: ['Pasaport, kimlik ve ehliyet', 'Diploma, transkript ve öğrenci belgesi', 'Doğum, evlilik ve nüfus kayıtları', 'Vekâletname, sözleşme ve mahkeme evrakı', 'Şirket ve ticaret sicili belgeleri'] },
      { title: 'Süreç nasıl ilerler?', paragraphs: ['Belgenin dili, alanı ve kullanılacağı kurum incelenir. Çeviri alan uzmanı yeminli tercümana atanır; isim, tarih, sayı ve biçim kontrolünün ardından noter tasdikine hazırlanır. Yurt dışı kullanım varsa apostil veya konsolosluk adımı ayrıca planlanır.'], bullets: ['Belge ve kabul şartı analizi', 'Tercüme ve redaksiyon', 'Yeminli tercüman imzası', 'Noter tasdiki', 'Gerekiyorsa apostil yönlendirmesi'] },
      { title: 'Teslim süresi ve fiyatlandırma', paragraphs: ['Süre ve ücret; dil çifti, sayfa/karakter yoğunluğu, belgenin uzmanlık alanı, noter masrafı ve teslim beklentisine göre belirlenir. Belge görüntüsünü gönderdiğinizde kalemler ayrı şekilde açıklanır.'] },
    ],
    faqs: [
      { question: 'Noter ücretine tercüme ücreti dahil mi?', answer: 'Tercüme ve noter masrafları farklı kalemlerdir. Teklif sırasında kapsam ve tahmini onay giderleri ayrı olarak açıklanır.' },
      { question: 'Noter onayı aynı gün tamamlanabilir mi?', answer: 'Belgenin uzunluğu, dil, tercüman ve noter müsaitliğine göre mümkün olabilir. Kesin süre belge incelendikten sonra bildirilir.' },
      { question: 'Noter onayından sonra apostil zorunlu mu?', answer: 'Her zaman değil. Yurt dışındaki kabul makamının talebine ve ülkeye göre apostil veya başka bir tasdik gerekebilir.' },
    ],
  },
  {
    slug: 'azerice-tercume', kind: 'language', eyebrow: 'TERCÜME DİLİ', title: 'Azerice Tercüme',
    description: 'Azerice-Türkçe ve Türkçe-Azerice resmî belge, hukuki, ticari, akademik ve yeminli tercüme hizmetleri.',
    intro: 'Türkçe ve Azerice birbirine yakın diller olsa da resmî terminoloji, yazım kuralları ve anlam farklılıkları profesyonel çeviri sürecinde dikkatle ele alınmalıdır.',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp', imageAlt: 'Azerice Türkçe profesyonel tercüme',
    highlights: ['Azerice-Türkçe çift yönlü tercüme', 'Resmî ve ticari belge uzmanlığı', 'Yeminli ve noter onaylı tercüme'],
    keywords: ['azerice tercume', 'azerice yeminli tercuman', 'azerice noter onayli tercume', 'azerbaycan turkcesi tercume'],
    sections: languageSections('Azerice', 'Azerbaycan', 'Türkçe ile Azerice arasındaki benzerlikler yanıltıcı olabilir. Aynı görünen kelimelerin farklı anlamları, alfabe kullanımı ve resmî kurumlardaki yerleşik ifadeler özellikle hukuki ve ticari belgelerde uzmanlık gerektirir.'),
    faqs: standardLanguageFaqs('Azerice'),
  },
  {
    slug: 'cince-tercume', kind: 'language', eyebrow: 'TERCÜME DİLİ', title: 'Çince Tercüme',
    description: 'Çince-Türkçe ve Türkçe-Çince teknik, ticari, hukuki, akademik, yeminli ve sözlü tercüme hizmetleri.',
    intro: 'Çince çeviride hedef bölge, yazı sistemi ve metnin kullanım amacı baştan belirlenir; terminoloji ve özel adlar belge boyunca tutarlı şekilde aktarılır.',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp', imageAlt: 'Çince Türkçe profesyonel tercüme',
    highlights: ['Basitleştirilmiş ve geleneksel Çince', 'Teknik ve ticari terminoloji', 'Yeminli, noter onaylı ve sözlü tercüme'],
    keywords: ['cince tercume', 'cince yeminli tercuman', 'cince noter onayli tercume', 'turkce cince ceviri'],
    sections: languageSections('Çince', 'Çin', 'Çince; bölgesel kullanım, karakter sistemi ve bağlama dayalı anlam farklılıkları nedeniyle dikkatli bir uzmanlık çalışması gerektirir. Çin ana karası için basitleştirilmiş, Tayvan ve Hong Kong gibi hedefler için geleneksel karakter ihtiyacı proje başında belirlenmelidir.'),
    faqs: standardLanguageFaqs('Çince'),
  },
  {
    slug: 'ispanyolca-tercume', kind: 'language', eyebrow: 'TERCÜME DİLİ', title: 'İspanyolca Tercüme',
    description: 'İspanyolca-Türkçe ve Türkçe-İspanyolca yazılı, yeminli, noter onaylı, sözlü ve kurumsal tercüme hizmetleri.',
    intro: 'İspanya ve Latin Amerika için hazırlanan metinlerde yalnızca dil doğruluğu değil, hedef ülkeye uygun sözcük seçimi ve kültürel ton da önemlidir.',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp', imageAlt: 'İspanyolca Türkçe profesyonel tercüme',
    highlights: ['İspanya ve Latin Amerika varyantları', 'Hukuki, akademik ve teknik uzmanlık', 'Yeminli ve noter onaylı tercüme'],
    keywords: ['ispanyolca tercume', 'ispanyolca yeminli tercuman', 'ispanyolca noter onayli tercume'],
    sections: languageSections('İspanyolca', 'İspanyolca konuşulan ülkelerde', 'İspanya İspanyolcası ile Latin Amerika’daki kullanım arasında kelime, deyim ve resmiyet düzeyi farklılıkları bulunur. Hedef ülke ve kitle belirlenmeden yapılan çeviri doğal görünmeyebilir.'),
    faqs: standardLanguageFaqs('İspanyolca'),
  },
  {
    slug: 'hollandaca-tercume', kind: 'language', eyebrow: 'TERCÜME DİLİ', title: 'Hollandaca Tercüme',
    description: 'Hollandaca-Türkçe ve Türkçe-Hollandaca belgeler için uzman, yeminli ve noter onaylı tercüme desteği.',
    intro: 'Hollanda, Belçika’nın Flandre bölgesi, Surinam ve Karayipler’de kullanılan Hollandaca için hedef bölgeye uygun terminoloji ve anlatım seçilir.',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp', imageAlt: 'Hollandaca Türkçe profesyonel tercüme',
    highlights: ['Hollanda ve Flandre kullanımına uygun dil', 'Resmî ve kurumsal belge çevirisi', 'Redaksiyon ve terminoloji kontrolü'],
    keywords: ['hollandaca tercume', 'hollandaca yeminli tercuman', 'felemenkce tercume'],
    sections: languageSections('Hollandaca', 'Hollanda veya Belçika’da', 'Hollandaca ve Felemenkçe günlük kullanımda aynı dil için anılsa da Hollanda ile Belçika’daki kullanım, resmiyet ve terminolojide farklılıklar gösterebilir. Metin hedef bölgeye göre uyarlanmalıdır.'),
    faqs: standardLanguageFaqs('Hollandaca'),
  },
  {
    slug: 'italyanca-tercume', kind: 'language', eyebrow: 'TERCÜME DİLİ', title: 'İtalyanca Tercüme',
    description: 'İtalyanca-Türkçe ve Türkçe-İtalyanca akademik, hukuki, teknik, ticari ve yeminli belge tercümesi.',
    intro: 'Eğitim, vatandaşlık, ticaret ve hukuk dosyalarında İtalyanca terminoloji, belge biçimi ve resmî kullanım amacı birlikte değerlendirilir.',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp', imageAlt: 'İtalyanca Türkçe profesyonel tercüme',
    highlights: ['Eğitim ve vatandaşlık belgeleri', 'Hukuki ve ticari tercüme', 'Noter ve apostil süreç desteği'],
    keywords: ['italyanca tercume', 'italyanca yeminli tercuman', 'italyanca noter onayli tercume'],
    sections: languageSections('İtalyanca', 'İtalya’da', 'İtalyanca resmî, hukuki ve akademik metinlerde günlük dilden ayrılan kalıplara sahiptir. Özellikle vatandaşlık ve eğitim dosyalarında unvanların, kurum adlarının ve kayıt bilgilerinin tutarlı aktarılması gerekir.'),
    faqs: standardLanguageFaqs('İtalyanca'),
  },
  {
    slug: 'arapca-tercume', kind: 'language', eyebrow: 'TERCÜME DİLİ', title: 'Arapça Tercüme',
    description: 'Arapça-Türkçe ve Türkçe-Arapça resmî belge, hukuk, ticaret, sağlık ve sözlü tercüme hizmetleri.',
    intro: 'Arapça metinlerde ülke, lehçe ve kullanım alanı baştan belirlenir; resmî yazışmalarda Modern Standart Arapça ve kurumsal terminoloji esas alınır.',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp', imageAlt: 'Arapça Türkçe profesyonel tercüme',
    highlights: ['Modern Standart Arapça', 'Sağdan sola belge düzeni', 'Yeminli, noter onaylı ve sözlü tercüme'],
    keywords: ['arapca tercume', 'arapca yeminli tercuman', 'arapca noter onayli tercume'],
    sections: languageSections('Arapça', 'Arapça konuşulan ülkelerde', 'Arapça geniş bir coğrafyada farklı lehçelerle kullanılır. Resmî belge dili ile günlük konuşma arasında önemli farklar vardır; sözlü projelerde ülke ve lehçe, yazılı projelerde ise hedef kurumun terminolojisi dikkate alınır.'),
    faqs: standardLanguageFaqs('Arapça'),
  },
  {
    slug: 'japonca-tercume', kind: 'language', eyebrow: 'TERCÜME DİLİ', title: 'Japonca Tercüme',
    description: 'Japonca-Türkçe ve Türkçe-Japonca teknik, akademik, hukuki, yeminli ve kurumsal tercüme hizmetleri.',
    intro: 'Japonca çeviride yazı sistemleri, bağlama bağlı anlam, hitap ve resmiyet düzeyi birlikte ele alınır; metin Japon iş ve iletişim kültürüne uygun hazırlanır.',
    image: '/yp-metropol/home/interpreting-meeting-v2.webp', imageAlt: 'Japonca Türkçe profesyonel tercüme',
    highlights: ['Kanji, Hiragana ve Katakana hâkimiyeti', 'Teknik ve akademik terminoloji', 'Kültürel lokalizasyon'],
    keywords: ['japonca tercume', 'japonca yeminli tercuman', 'japonca teknik tercume'],
    sections: languageSections('Japonca', 'Japonya’da', 'Japonca; Kanji, Hiragana ve Katakana yazı sistemleri ile bağlama ve ilişki düzeyine göre değişen ifade biçimleri kullanır. Doğru anlam kadar uygun hitap ve resmiyet seviyesi de korunmalıdır.'),
    faqs: standardLanguageFaqs('Japonca'),
  },
  {
    slug: 'yeminli-tercume',
    kind: 'service', eyebrow: 'RESMÎ TERCÜME', title: 'Yeminli Tercüme',
    description: 'Resmî başvurularınız için yeminli tercüman tarafından imzalanıp kaşelenen, kontrollü belge tercümesi.',
    intro: 'Yeminli tercüme, noter huzurunda yemin etmiş tercümanın kaynak metne uygunluğunu imzası ve kaşesiyle beyan ettiği çeviridir. Kurum ayrıca noter tasdiki isteyebilir.',
    image: '/yp-metropol/document.webp', imageAlt: 'Yeminli tercüman imzalı resmî belge tercümesi',
    highlights: ['Yeminli tercüman imza ve kaşesi', 'Resmî belge formatı', 'Teslim öncesi çift kontrol'],
    keywords: ['yeminli tercume', 'mecidiyekoy yeminli tercuman', 'yeminli ceviri'],
    sections: [
      { title: 'Yeminli tercüme hangi işlemlerde kullanılır?', paragraphs: ['Kamu kurumu, üniversite, konsolosluk, banka, noter veya mahkemeye sunulacak belgelerde yeminli tercüme talep edilebilir. Kabul şartı ilgili kurumdan teyit edilmelidir.'], bullets: ['Pasaport ve kimlik belgeleri', 'Diploma, transkript ve denklik dosyaları', 'Nüfus kayıtları ve medeni durum belgeleri', 'Sözleşme, vekâletname ve mahkeme evrakı', 'Şirket, banka ve çalışma belgeleri'] },
      { title: 'Yeminli ve noter onaylı tercüme arasındaki fark', paragraphs: ['Yeminli tercüme tercümanın imza ve kaşesini taşır. Noter onaylı tercümede ise yeminli tercümanın imzası, yemin kaydının bulunduğu noter tarafından ayrıca tasdik edilir. Her kurum noter onayı istemediğinden gereksiz işlem yapmamak için şartları önceden öğrenmek önemlidir.'] },
      { title: 'Kalite ve gizlilik süreci', paragraphs: ['Belge; isim, tarih, sayı, mühür, terminoloji ve biçim yönünden kaynak metinle karşılaştırılır. Kişisel ve kurumsal bilgiler yalnızca proje için yetkilendirilen kişilerce işlenir.'] },
      { title: 'Nasıl teklif alabilirsiniz?', paragraphs: ['Belgenin tüm sayfalarını okunaklı fotoğraf veya PDF olarak gönderin; hedef dili, teslim tarihini ve sunulacağı kurumu belirtin. İncelemeden sonra süre, tercüme bedeli ve varsa onay masrafları açıklanır.'] },
    ],
    faqs: [
      { question: 'Yeminli tercüme noter onayı olmadan geçerli midir?', answer: 'Bazı kurumlar yeminli tercüman imza ve kaşesini yeterli görür, bazıları noter tasdiki ister. Kararı belgeyi kabul edecek kurum verir.' },
      { question: 'Yeminli tercüme elektronik olarak teslim edilir mi?', answer: 'Ön kopya dijital gönderilebilir. Islak imzalı asıl veya noter tasdikli nüsha gerekip gerekmediği başvuru kurumunun şartına bağlıdır.' },
      { question: 'Hangi dillerde hizmet veriliyor?', answer: 'Yaygın dillerin yanında farklı dil çiftlerinde de tercüman uygunluğu kontrol edilir. Belge ve hedef dili ileterek güncel bilgi alabilirsiniz.' },
    ],
  },
  {
    slug: 'hukuki-tercume',
    kind: 'service', eyebrow: 'UZMANLIK ALANI', title: 'Hukuki Tercüme',
    description: 'Sözleşme, vekâletname, dava dosyası ve şirket belgelerinde terminolojiye, bağlama ve gizliliğe odaklanan profesyonel çeviri.',
    intro: 'Hukuki metinlerde bir terimin yanlış veya tutarsız kullanımı tarafların hak ve yükümlülüklerini etkileyebilir. Bu nedenle metin, ilgili hukuk alanı ve kullanım amacı birlikte değerlendirilir.',
    image: '/yp-metropol/home/legal-review-v2.webp', imageAlt: 'Hukuki belge ve sözleşme tercümesi incelemesi',
    highlights: ['Hukuk terminolojisine uygunluk', 'Gizli ve kontrollü iş akışı', 'Yeminli ve noter onaylı seçenekler'],
    keywords: ['hukuki tercume', 'sozlesme tercumesi', 'vekaletname tercumesi', 'mahkeme evraki tercumesi'],
    sections: [
      { title: 'Hukuki tercüme kapsamı', paragraphs: ['Bireysel başvurulardan çok taraflı ticari işlemlere kadar her dosya, belge türüne uygun terminolojiyle ele alınır. Kaynak hukuk sistemindeki kavramlar hedef dilde yanıltıcı eşdeğerler kullanılmadan aktarılır.'], bullets: ['Sözleşme ve protokoller', 'Vekâletname ve muvafakatname', 'Dava dilekçesi ve mahkeme kararları', 'Şirket ana sözleşmesi ve ticaret sicili belgeleri', 'Patent, lisans ve uyum metinleri'] },
      { title: 'Çeviri ve kontrol yaklaşımı', paragraphs: ['Ön incelemede belge türü, ülke, kurum ve teslim formatı belirlenir. Alan deneyimi bulunan tercümanın çalışması; taraf isimleri, tanımlar, atıflar, madde numaraları, tarihler ve parasal değerler açısından gözden geçirilir.'] },
      { title: 'Yemin, noter ve apostil gereksinimi', paragraphs: ['Belge resmî makama sunulacaksa yeminli tercüman imzası, noter tasdiki veya apostil istenebilir. Gereklilikler dosyanın kullanılacağı ülke ve makamdan doğrulanarak uygun işlem sırası oluşturulur.'] },
      { title: 'Gizlilik ve dosya bütünlüğü', paragraphs: ['Kişisel veriler, ticari sırlar ve dava bilgileri gizlilik içinde işlenir. Çok sayfalı projelerde terim listesi oluşturularak tanımların ve taraf unvanlarının belge boyunca tutarlı kalması sağlanır.'] },
    ],
    faqs: [
      { question: 'Hukuki tercümeyi her tercüman yapabilir mi?', answer: 'Dil bilgisi tek başına yeterli değildir. Belgenin hukuk alanını, bağlamını ve yerleşik terminolojisini bilen bir tercümanla çalışılması gerekir.' },
      { question: 'Sözleşme tercümesi noter onaylı olmak zorunda mı?', answer: 'Her sözleşme için zorunlu değildir. Kullanım amacı ve talep eden kurumun şartları belirleyicidir.' },
      { question: 'Gizli dosyalar nasıl iletilir?', answer: 'Dosya kapsamı ve güvenlik ihtiyacı görüşülerek uygun aktarım yöntemi belirlenir; erişim yalnızca proje ekibiyle sınırlandırılır.' },
    ],
  },
  {
    slug: 'yabanci-evlilik',
    kind: 'guide', eyebrow: 'EVLİLİK İŞLEMLERİ REHBERİ', title: 'Türkiye’de Yabancı Evlilik İşlemleri',
    description: 'Yabancı uyruklu eşlerin Türkiye’de evlilik başvurusunda ihtiyaç duyabileceği belge, tercüme, apostil ve nikâh tercümanı adımları.',
    intro: 'Taraflardan biri yabancı uyrukluysa istenen belgeler vatandaşlığa, medeni duruma ve başvuru yapılacak belediyeye göre değişebilir. Dosya hazırlanmadan önce evlendirme dairesinin güncel listesi alınmalıdır.',
    image: '/beyvip/passport.png', imageAlt: 'Yabancı evlilik işlemleri için pasaport ve belgeler',
    highlights: ['Belge listesi ön kontrolü', 'Yeminli ve noter onaylı tercüme', 'Nikâh günü sözlü tercüman desteği'],
    keywords: ['yabanci evlilik', 'yabanci evlilik belgeleri', 'nikah tercumani', 'evlenme ehliyet belgesi tercumesi'],
    sections: [
      { title: 'Başvuruda istenebilen temel belgeler', paragraphs: ['Kesin liste belediye ve kişinin durumuna göre değişmekle birlikte yabancı eşten kimlik, medeni hâl ve doğum bilgilerini gösteren belgeler istenir. Belgelerin geçerlilik süresi ve düzenlenme şekli başvuru öncesinde kontrol edilmelidir.'], bullets: ['Pasaport ve gerektiğinde noter onaylı tercümesi', 'Evlenme ehliyet veya bekârlık belgesi', 'Doğum belgesi', 'Fotoğraf ve sağlık raporu', 'Türkiye’deki yasal durum veya adresle ilgili ek belgeler'] },
      { title: 'Apostil ve konsolosluk tasdiki', paragraphs: ['Yurt dışında düzenlenen belgenin Türkiye’de kabulü için apostil veya diplomatik tasdik gerekebilir. Belgenin düzenlendiği ülkenin taraf olduğu anlaşmalar ve belgenin temin edildiği makam, uygulanacak yöntemi belirler.'] },
      { title: 'Tercüme ve noter onayı', paragraphs: ['Yabancı dildeki pasaport, doğum belgesi ve medeni hâl evrakı Türkçeye çevrilir. Belediyenin şartına göre yeminli tercüman imzası ve noter tasdiki hazırlanır; ad-soyad yazımları bütün belgelerde aynı tutulur.'] },
      { title: 'Nikâh tercümanı ne zaman gerekir?', paragraphs: ['Eşlerden biri Türkçe bilmiyorsa nikâh memurunun beyanları ve tarafların cevaplarının doğru anlaşılması için tören sırasında sözlü tercüman istenebilir. Tercümanın niteliği ve sunacağı belgeler nikâh dairesinden önceden teyit edilmelidir.'] },
      { title: 'Dosyanızı hazırlarken dikkat edin', paragraphs: ['Belge tarihlerini, apostil/tasdik zincirini, pasaporttaki isim yazımını ve tercüme nüshalarını birlikte kontrol edin. Randevu almadan önce dosyanın evlendirme dairesine ön kontrolden geçirilmesi eksik işlem riskini azaltır.'] },
    ],
    faqs: [
      { question: 'Yabancı biri Türkiye’de evlenebilir mi?', answer: 'Genel olarak gerekli medeni hâl ve kimlik belgeleri sağlandığında başvuru yapılabilir. Kişinin vatandaşlığına ve durumuna özgü şartlar için yetkili evlendirme dairesinden bilgi alınmalıdır.' },
      { question: 'Her yabancı belgeye apostil gerekir mi?', answer: 'Hayır. Belgenin düzenlendiği ülke, belge türü ve uluslararası anlaşmalar uygulanacak tasdik yöntemini değiştirir.' },
      { question: 'Nikâhta tercüman zorunlu mu?', answer: 'Taraflardan biri nikâh işlemini yürütecek düzeyde Türkçe bilmiyorsa tercüman talep edilebilir. Kesin şart belediyeden doğrulanmalıdır.' },
    ],
  },
  {
    slug: 'besiktas-tercume',
    kind: 'location', eyebrow: 'HİZMET BÖLGESİ', title: 'Beşiktaş Tercüme Bürosu',
    description: 'Beşiktaş ve çevresinde yeminli, noter onaylı, hukuki, akademik, teknik ve sözlü tercüme desteği.',
    intro: 'Mecidiyeköy merkezli YP Metropol Tercüme, Beşiktaş’taki bireysel ve kurumsal müşterilere ofiste ve online belge kabulüyle profesyonel çeviri hizmeti sunar.',
    image: '/yp-metropol/home/hero-office-v2.webp', imageAlt: 'Beşiktaş tercüme bürosu hizmeti',
    highlights: ['Beşiktaş’a yakın merkezi ofis', 'Online ön inceleme ve teklif', 'Bireysel ve kurumsal çözümler'],
    keywords: ['besiktas tercume', 'besiktas tercume burosu', 'besiktas yeminli tercuman', 'besiktas noter tercume'],
    sections: [
      { title: 'Beşiktaş’ta yeminli ve noter onaylı tercüme', paragraphs: ['Pasaport, diploma, nüfus kaydı, vekâletname ve diğer resmî belgeler alanına uygun yeminli tercümanla hazırlanır. Kurumun talebine göre noter tasdiki ve apostil süreci planlanır.'] },
      { title: 'Kurumsal ve uzmanlık gerektiren projeler', paragraphs: ['Beşiktaş, Levent, Etiler ve çevresindeki şirket, hukuk bürosu, eğitim kurumu ve sağlık kuruluşları için süreklilik gerektiren çeviri desteği sunulur.'], bullets: ['Hukuki ve finansal tercüme', 'Teknik doküman ve kataloglar', 'Akademik metin ve başvuru belgeleri', 'Web sitesi ve kurumsal iletişim', 'Toplantı ve noter işlemlerinde sözlü tercüme'] },
      { title: 'Ofise gelmeden teklif alın', paragraphs: ['Belgenizi okunaklı fotoğraf veya PDF olarak WhatsApp ya da e-posta üzerinden gönderin. Dil, alan, teslim tarihi ve onay ihtiyacı incelendikten sonra kapsam ve fiyat bilgisi paylaşılır.'] },
      { title: 'Kontrollü teslim', paragraphs: ['Her proje isim, sayı, tarih, biçim ve terminoloji bakımından son kontrolden geçirilir. Basılı veya dijital teslim seçeneği, belgenin kullanılacağı kuruma göre belirlenir.'] },
    ],
    faqs: [
      { question: 'Beşiktaş’tan ofisinize nasıl belge gönderebilirim?', answer: 'Belgenizi WhatsApp veya e-posta ile ön incelemeye gönderebilir, gerektiğinde Mecidiyeköy’deki ofise aslını teslim edebilirsiniz.' },
      { question: 'Acil belge tercümesi yapılıyor mu?', answer: 'Belgenin dili, uzunluğu, uzmanlık alanı ve onay ihtiyacı incelendikten sonra mümkün olan en hızlı teslim planı bildirilir.' },
      { question: 'Kurumsal projelerde düzenli destek sağlıyor musunuz?', answer: 'Evet. Tekrarlayan projelerde terminoloji birliği, dosya planı ve teslim takvimi oluşturulabilir.' },
    ],
  },
  ...requestedLandingPages,
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
