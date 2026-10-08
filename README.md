# TİD — Türk İşaret Dili ve Tercümanlık

3 Ekim 2026 tarihinde incelenen mevcut YP Metropol projesi, TİD markası ve üç ana hizmet için yeniden tasarlandı. Bu dosya hem proje incelemesini hem de uygulanan uyarlamayı kaydeder.

## Çalıştırma

```bash
npm ci
npm run dev
```

Yerel önizleme: http://localhost:3000

```bash
npm run build
npx tsc --noEmit --incremental false
npm run lint
npm run test:content
```

`.env.local` içindeki mevcut Firebase bağlantısı korunur. `.env.example` değişken adlarını içerir. Üretim alan adı belirlendiğinde `NEXT_PUBLIC_SITE_URL` ayarlanmalıdır. Bu değişken verilmezse canonical URL yerel önizleme adresidir ve sayfalar `noindex` üretir.

## Ayrıntılı proje incelemesi

### Mimari

- Next.js 16.2.4 App Router, React 19.1 ve TypeScript kullanılıyor. Herkese açık sayfalar ve `/admin` aynı uygulamada bulunuyor.
- Redux Toolkit; kimlik doğrulama, haberler, galeri, hizmet bölgeleri ve iletişim verilerini yönetiyor. İlgili modüller `src/store/slices` altında.
- Firebase Authentication ve Firestore bağlantısı `src/lib/firebase.ts` üzerinden kuruluyor. Haber, galeri, referans, mesaj ve ayar ekranları mevcut yönetim panelinde bulunuyor.
- Ana yerleşim `src/app/layout.tsx`; gezinme, altbilgi ve iletişim kısayolu ortak bileşenler. Bu bileşenler yönetim ekranlarında görünmüyor.
- Önceki hizmet/dil/bölge ve SEO açılış sayfalarının içeriği `src/lib/translation-services.ts`, `translation-languages.ts`, `landing-pages.ts` ve `requested-landing-pages.ts` altında. Bunların önemli bölümü statik içerik; haberler ve galeri Firebase'e bağlı.

### Tasarım ve içerik bulguları

- YP Metropol yanında BeyVIP, Dreammoon, Lale ve güzellik merkezi varlıkları da `public` içinde bulunuyordu. Aynı projede farklı markalardan kalan görsel yolları ve renk isimleri vardı.
- Ana sayfa genel belge tercümesine odaklanıyordu. İşaret dili ve noter görüşmelerinde erişilebilir iletişim için ayrı bir bilgi yapısı yoktu.
- Genel CSS; global başlık/paragraf boyutları, eski renk değişkenleri ve bölüm boşluğunu sıfırlayan kurallar içeriyor. Yeni tasarım `tid.css` ve `tid-*` sınıflarıyla açıkça sınırlandı; eski yönetim stilleri korunuyor.
- Önceki ana sayfa Framer Motion, dinamik haberler ve kurumsal referansları aynı akışta kullanıyordu. Yeni ana sayfa sunucu bileşeni; ilk içerik animasyonun veya Firebase isteğinin tamamlanmasını beklemiyor.
- Eski çok dilli sağlayıcı, React'in ürettiği metin düğümlerini doğrudan değiştiriyor ve Türkçe modunda dahi kenar boşluklarını kırpıyordu. Bunun başlıkta “bir köprü” ifadesini birleştirdiği tarayıcıda görüldü. Sağlayıcı React bağlamı ve metin bileşenleriyle yeniden yazıldı; beş dil için DOM mutasyonu yapılmadan çeviri uygulanıyor.
- Önceki iletişim formu gönderimde yalnızca yerel başarı durumunu değiştiriyordu. Gerçek kayıt veya gönderim yapılmıyordu.
- Önceki alan adı yapılandırması farklı markalara ve İstanbul ilçelerine özel SEO verisi ile farklı iletişim bilgilerini bir araya getiriyordu. TİD için tek marka yapılandırması kullanılıyor.

### Mevcut altyapıda kalan teknik bulgular

Bu maddeler kaynak kodu incelemesine dayanır. Canlı Firebase projesinin yayımlanmış kuralları veya sunucu yapılandırması ayrıca doğrulanmadı.

| Öncelik | Bulgu                                                      | Kaynak / etkisi                                                                                                                                                                                              |
| ------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Yüksek  | Kimliksiz veri değiştirmeye izin veren Firestore kuralları | `firestore.rules` içinde haber, galeri, hizmet bölgesi, iletişim, mesaj ve yönetici koleksiyonlarında `request.auth == null` istisnası bulunuyor. Bu kurallar yayımlanmışsa yetkisiz değişiklik yapılabilir. |
| Yüksek  | Tarayıcı tarafında sabit yönetici bilgileri                | `src/store/slices/authSlice.ts` sabit yönetici girişini istemcide karşılaştırıyor ve oturumu localStorage içinde tutuyor. Bu, güvenilir sunucu yetkilendirmesi sağlamıyor.                                   |
| Orta    | İletişim kaydı doğrudan istemciden Firestore'a gidiyor     | Mevcut mesaj akışı korundu. Üretimde sunucu doğrulaması, istek sınırı ve sıkı Firestore koşulları eklenmeli. Yeni formun HTML doğrulaması sunucu doğrulamasının yerine geçmez.                               |
| Orta    | Eski modüllerde lint hataları                              | Tüm kaynak kontrolünde React Hooks kurallarını ihlal eden eski yönetim/galeri kodları bulunuyor. Yeni TİD bileşenleri ayrı lint kontrolünden geçiyor.                                                        |
| Düşük   | Uzaktan görsel kaynakları çok geniş                        | `next.config.ts` HTTP ve HTTPS için tüm sunucu adlarını kabul ediyor. Yönetim içeriği için gereken kaynaklar belirlenince kapsam daraltılabilir.                                                             |
| Düşük   | Eski seed betikleri eski markaya ait                       | `scripts` içindeki veri yükleme betikleri mevcut Firebase içeriklerini değiştirebilir. TİD uyarlaması sırasında çalıştırılmadı.                                                                              |

Firestore kuralları, mevcut yönetici giriş bilgileri ve canlı veriler bu tasarım çalışmasında değiştirilmedi. Üretime çıkmadan önce yetkilendirme akışının sunucu/Firebase Auth temelli düzenlenmesi gerekir.

## Uygulanan yeni tasarım

- Marka: **TİD**. El biçimli kod tabanlı marka işareti ve SVG tarayıcı simgesi.
- Görsel dil: kırık beyaz zemin, koyu lacivert metin, kiremit turuncusu ve açık adaçayı tonları; geniş başlıklar ve sakin bölüm düzeni.
- Ana mesaj: **Her işaret, bir köprü.**
- Üç ana hizmet: Türk İşaret Dili, Yeminli Tercüman, İşaret Dili Noter.
- Ana sayfa; giriş, hizmet kartları, yaklaşım, üç adımlı süreç, açılabilir sık sorulan sorular, haberler, blog ve iletişim çağrısı içeriyor.
- Hizmet listesi, üç hizmet ayrıntısı, hakkımızda ve iletişim sayfaları aynı tasarım diliyle hazırlandı.
- Yönetim panelinin görünen marka adı ve logosu TİD olarak güncellendi; mevcut modüller ve kimlik doğrulama akışı korundu.
- Telefon: **0534 642 04 76**; WhatsApp: **0545 189 26 65**. İletişim sayfası ve footer bu numaralara doğrudan arama ve WhatsApp bağlantıları sunuyor. Doğrulanmamış adres ve e-posta yayımlanmıyor.
- Yeni hizmet metinlerinde doğrulanmamış deneyim yılı, sertifika, müşteri sayısı veya kurum referansı kullanılmıyor. Noter işlemlerinin koşulları ilgili noterlik ile teyit edilmesi gereken bilgiler olarak sunuluyor.

### Sayfalar

| Yol                                | İçerik                            |
| ---------------------------------- | --------------------------------- |
| `/`                                | Yeni ana sayfa                    |
| `/hakkimizda`                      | TİD yaklaşımı                     |
| `/hizmetlerimiz`                   | Üç hizmet                         |
| `/hizmetlerimiz/turk-isaret-dili`  | Türk İşaret Dili tercümanlığı     |
| `/hizmetlerimiz/yeminli-tercuman`  | Yeminli tercüman                  |
| `/hizmetlerimiz/isaret-dili-noter` | Noter görüşmesinde işaret dili    |
| `/iletisim`                        | Talep formu ve iletişim bilgileri |

Önceki dil/bölge yolları hizmetlere, galeri hakkımızdaya yönlendirilir. `/haberler` ve `/blog` yolları gerçek içerik listelerini açar. Eski genel SEO açılış sayfaları yeni hizmet listesine gider. Eski noter hizmeti bağlantıları yeni noter hizmetine; diğer eski tercüme hizmetleri yeminli tercüman sayfasına gider. Önizleme aşamasında yönlendirmeler geçicidir (307). Eski içerik dosyaları ve yönetim verileri silinmedi.

Site haritası dokuz ana TİD sayfasını ve aktif haber/blog kayıtlarını içerir. Haber XML ucu iki içerik türünü de kapsar; eski bölge uçları boş liste döndürür. Firestore okuması beş saniyeyle sınırlıdır; başarısız olursa ana sayfalar korunur.

### Yeni TİD fotoğrafları

51 yeni fotoğraf yerleşik image_gen ile üretildi ve `public/tid/photos` altında WebP olarak kaydedildi. Önceki TİD ana sayfa fotoğrafı sadece ana sayfa hero alanında kullanılır. Hero, sayfa içi fotoğraf, ana sayfa kartı, arşiv kartı ve içerik detayı ayrı görseller kullanır. Logo ve arayüz simgeleri ortak marka öğeleridir.

`src/lib/tid-images.ts` sabit alanların tekil görsel kaydıdır. `src/lib/tid-editorial-images.json` mevcut 15 haberin eski kapaklarını yeni kart ve hero fotoğraflarına eşler; Firestore metinleri ve kayıtları korunur. Yönetici daha sonra farklı bir kapak URL’si kaydederse bu kapak korunur. Eski fotoğraflar uyumluluk için diskte bırakılmıştır; yeni site bunları göstermez. Üretim istemleri, kaynak ve çıktı yolları `docs/tid-image-prompts.json` dosyasındadır.

Haber/blog düzenleyicisinde liste kartı, detay hero ve isteğe bağlı ana sayfa kartı için ayrı görsel alanları vardır. Ana sayfa kartı boşsa o alanın kendi fotoğrafı kullanılır. Tekrar eden ya da eski marka görsel URL’leri kaydetmeden önce reddedilir. Yayın katmanı da farklı yazılar, kapaklar ve içerik içi görseller arasındaki URL tekrarlarını engeller; görsel yoksa ortak fotoğrafı tekrar etmek yerine simge veya düz hero gösterilir. `npm run test:content` dosyaların varlığını ve tüm kayıtlı fotoğrafların farklı SHA-256 değerlerine sahip olduğunu da denetler.

### Beş dil ve yayın yönetimi

Yerel Firebase bağlantısı `isaretdili-c3f9a` projesine taşındı. Altı Firebase ortam değişkeni `.env.local` içinde tutulur; dosya Git'e eklenmez. Firebase istemcisi proje adına göre oluşturulduğu için ortam değişikliği önceki proje bağlantısını yeniden kullanmaz.

Yeni proje içerikleri `docs/tid-launch-content.json` içinde bulunur: beş dilde üç haber, üç galeri kategorisi ve altı galeri görseli. 15 ayrı WebP fotoğraf `public/tid/photos/tid-news-*` ve `tid-gallery-*` yollarındadır; görsel üretim istemleri `docs/tid-launch-image-prompts.json` dosyasındadır. Firestore kayıtları bu proje içindeki görsel yollarını kullanır; site kurulurken `public` dosyaları birlikte sunulur.

`npm run seed:tid` sadece yerel doğrulama ve kayıt özetini gösterir. `npm run seed:tid -- --apply` içerikleri yeni Firestore projesine ekler ve geri okuyarak doğrular. Komut başka Firebase projesine yazmayı reddeder; sabit belge kimlikleri ve transaction sayesinde tekrar çalıştırıldığında mevcut kayıtları korur. Admin galeri formu proje içindeki görsel yollarını da kabul eder. Mevcut statik admin girişi korunmuştur; bu giriş Firebase Authentication hesabı değildir ve Firestore yetkilendirmesi sağlamaz. Paylaşılan mevcut Firestore kuralları anonim yazmaya izin vermektedir.

- Diller: Türkçe (`tr`), İngilizce (`en`), Almanca (`de`), Arapça (`ar`), Rusça (`ru`). Üst menüde ve mobil menüde dil seçimi vardır.
- Seçim `tid-locale` çereziyle bir yıl korunur. Sunucu ilk HTML’i bu dilde üretir; Arapça için `dir="rtl"` uygulanır. Yönetim arayüzü Türkçe kalır.
- Çeviriler `src/lib/tid-i18n.ts`, sağlayıcı ve metin bileşenleri `src/components/LanguageProvider.tsx` içindedir. Menü, hizmetler, SSS, form, altbilgi ve yayın arayüzü çevrilir.
- `/admin/haberler` ve yeni `/admin/blog`, ortak `AdminNewsManager` bileşenini kullanır. Mevcut `haberler` Firestore koleksiyonu korunur; `kind: "news" | "blog"` ayrımı eklenir. Türü olmayan eski kayıtlar **haber** kabul edilir; panelden tür değiştirilebilir.
- `isActive === true` olan kayıtlar ana sayfada ve listelerde gerçek zamanlı görünür. Her ana sayfa bölümünde ilk üç yazı, arşivlerde dokuzar yazı gösterilir. Sıralama: öne çıkan → sıra numarası → yeni tarih.
- Yeni kayıtların kalıcı `slug` alanı oluşturulur; başlık düzenlendiğinde URL korunur. Eski kayıtlarda başlıktan türetilen slug veya belge kimliği çalışır.
- Çeviriler `translations.en/de/ar/ru` altında `title`, `subtitle`, `description`, `content` alanlarıyla saklanır. Başlık, açıklama ve içerik tamamlanmadan yazı özgün Türkçe olarak gösterilir; detay sayfası bunu bildirir. Otomatik içerik çevirisi yapılmaz.
- Zengin metin `sanitize-html` ile temizlenir. Yükleme, boş liste ve hata durumları için ayrı mesajlar vardır.
- Salt okunur bağlantı kontrolünde 15 aktif haber, 0 blog ve 0 içerik çevirisi bulundu. Canlı kayıt eklenmedi/değiştirilmedi; blog ve çeviriler panelden girilebilir.

### Talep formu

- Hizmet ayrıntısından gelindiğinde seçilen hizmet `hizmet` URL parametresiyle otomatik seçilir.
- Ad, hizmet, açıklama ve iletişim onayı zorunludur. Seçilen iletişim kanalına göre e-posta veya telefon zorunlu olur.
- Tarih, görüşme yeri/biçimi ve tercih edilen iletişim kanalı mesaj içeriğine eklenir.
- Mevcut `sendContactMessage` akışı üzerinden `contact_messages` koleksiyonuna kayıt oluşturur; yönetim panelinin mesaj yapısıyla uyumludur.
- Yalnızca başarılı Firestore kaydından sonra başarı mesajı gösterir. Hata durumunda alanlar korunur. Gönderim sırasında düğme devre dışıdır. Bağlantı çevrim dışıysa hata gösterir.
- Bildirim, kaydedilmiş talebin kesinleşmiş bir randevu olmadığını açıkça belirtir. E-posta veya WhatsApp bildirimi otomatik gönderilmez.

### Erişilebilirlik ve mobil düzen

İçeriğe geç bağlantısı, görünür klavye odağı, form etiketleri, doğal `details/summary` SSS bileşenleri, durum/hata duyuruları ve azaltılmış hareket tercihi bulunur. Mobil menü Escape ile kapanır, odağı geri verir ve açıkken sekme dolaşımını menüde tutar. Masaüstü genişliğine geçilince menü kapanarak kaydırma kilidi kaldırılır. Hizmet kartları mobilde tek sütuna iner.

### Görsel üretimi

Ana görsel yerleşik **imagegen** aracıyla üretildi; özgün çıktı korunarak WebP kopyası projeye eklendi:

- `public/tid/communication.webp` — 1536 × 1024, yaklaşık 166 KB.
- `public/tid/brand/best-logo.png` ve `.webp` — kullanıcının Best Tercümanlık logosunun şeffaf sürümü; başlık, alt bilgi ve yönetim girişinde kullanılır. Aynı simgeden favicon ve Apple ikonları türetilmiştir. Düzenleme talimatı ve kaynak kaydı: `docs/best-logo-assets.json`.

Üretim promptu: “Use case: photorealistic-natural. Create one high quality editorial photograph for the website of TİD, a Turkish sign language interpretation service. Landscape 3:2 composition. Two adult Turkish women sitting facing one another at a light oak table in a bright welcoming contemporary studio, conversing using expressive hand gestures in the context of sign language interpretation. Woman on right wears a soft terracotta orange sweater and shoulder-length dark wavy hair, woman on left in a pale cream blouse seen in three quarter profile. Both full hands clearly visible anatomically natural, relaxed sincere engaged expressions. Medium shot from waist up, natural window light, warm neutral plaster walls, subtly blurred olive plant in background, tasteful analog photographic texture, gentle shadows, calm premium editorial aesthetic, daylight. Fill frame with the two people, no text, no logos, no watermark, no illustrations, no inset graphics. This is a general depiction of communication, not an educational demonstration of a particular sign. Save the generated asset and return the local saved file path for website use.”

Yeminli tercüman ve noter sayfalarında projede bulunan, üzerinde eski marka yazısı bulunmayan belge inceleme görselleri yeniden kullanılıyor.

## Doğrulama

### Haber ve blog yayın akışı

- Aktif haber ve blog kayıtları `haberler` koleksiyonundadır; `kind: news` / `kind: blog` ayrımı kullanılır. `isActive: true` olmayan kayıtlar yayınlanmaz.
- Ana sayfa, arşivler ve yazı ayrıntıları ilk yanıtında Firestore'dan okunan içerikleri gösterir. Sunucu yalnızca herkese açık aktif içerik sorgusunu kullanır; yönetici yetkisi kullanmaz. Okuma 5 saniyeyle sınırlıdır ve yayın durumu istekler arasında önbelleğe alınmaz.
- Tarayıcıdaki canlı abonelik yönetim paneli değişikliklerini yansıtmaya devam eder. İlk bağlantı gecikir veya başarısız olursa sunucudan gelen kartlar korunur; sunucunun doğruladığı boş sonuç, yayından kaldırılan kayıtları gizler.
- `docs/tid-editorial-content.json`: beş dilde 3 haber ve 3 blog. Bu Firebase projesinde daha önce kullanılmayan 12 özgün TİD fotoğrafı kapak/hero alanlarına atanmıştır; ana sayfa için ayrılmış farklı fotoğraflar otomatik seçilir.
- Ön kontrol: `npm run seed:tid -- --file docs/tid-editorial-content.json`.
- Veritabanına ekleme: `npm run seed:tid -- --file docs/tid-editorial-content.json --apply`. Yalnızca eksik belge kimliklerini oluşturur; mevcut kayıtları değiştirmez. Dosya belirtilmezse önceki haber/galeri başlangıç seti kullanılır.

- Üretim derlemesi (`npm run build`) başarılı.
- TypeScript (`npx tsc --noEmit --incremental false`) başarılı.
- Yeni TİD bileşenleri, yeni sayfalar, mesaj kayıt akışı, SEO/site haritası ve yapılandırma dosyaları için ESLint kontrolü başarılı. Tüm proje kontrolünde eski modüllerden gelen 6 hata ve 2 uyarı kalıyor.
- Mobil menü açma, Escape ile kapatma ve hizmet sayfasına geçiş tarayıcıda doğrulandı.
- Noter hizmetinden form geçişinde hizmetin otomatik seçilmesi doğrulandı.
- Boş formun gönderimi engellemesi ve WhatsApp seçildiğinde telefonun zorunlu hale gelmesi doğrulandı. Gerçek veritabanına test talebi gönderilmedi; kayıt akışı bağlantısının üretim Firebase projesinde ayrıca teyidi gerekiyor.
- Yedi yeni sayfa için HTTP 200, eski bağlantılar için HTTP 307 ve site haritasında yedi URL kontrol edildi. Tarayıcı konsolunda son ana sayfa kontrolünde hata bulunmadı.
- Ana sayfanın masaüstü ve mobil görüntüsü incelendi. 320 ve 390 piksel mobil görünümlerinde yatay taşma kontrol edildi.

Üretim için gerçek iletişim bilgileri, alan adı ve uygun Firebase projesi belirlenmeli; kaynakta tespit edilen yetkilendirme sorunları giderilmeli. Mevcut çalışma yerel ve incelemeye hazırdır.

### Dil ve içerik güncellemesinin doğrulaması

- `npm run test:content`: 6 test geçti. Eski kayıt uyumu, aktif kayıt kontrolü, kalıcı slug, çeviri geri dönüşü, sıralama, HTML temizleme ve beş dil sözlüğü kontrol edildi.
- Beş dilin sunucu HTML’inde başlık, `lang/dir` ve beş seçenek doğrulandı. Haber/blog, temel sayfalar ve iki yönetim sayfası HTTP 200 döndürdü.
- Firebase aktif içerik sorgusu salt okunur olarak başarılı oldu.
- Bu güncellemede etkileşimli tarayıcı doğrulaması tamamlanamadı: mevcut önizleme sekmesi bağlantı hata sayfasındaydı; tarayıcı kontrolü `data:` protokolünü güvenlik politikası nedeniyle reddetti. Önceki tasarımın mobil kontrolleri yukarıda tarihsel doğrulama olarak tutulmuştur.

### Görsel hero güncellemesi

Ana sayfa, hakkımızda, hizmet listesi/ayrıntıları, iletişim ve haber/blog sayfaları ortak `TidHero` bileşenini kullanır. Fotoğraf sayfa genişliğini kaplar; siyah geçişli katman metin tarafında yoğunlaşır ve açık renk başlıklarla okunaklı bir giriş oluşturur. Hizmetlerde ilgili görsel, yazı detaylarında yönetim panelindeki kapak görseli kullanılır. Mobilde başlık boyutu ve fotoğraf odağı ayarlanır; Arapçada geçiş yönü tersine çevrilir. Arka plan görselleri dekoratif olduğu için ekran okuyucudan gizlenir.

Bu güncellemenin ana sayfa masaüstü/mobil ve Arapça görünümü tarayıcıda doğrulandı; yatay taşma bulunmadı. Önceki turdaki önizleme bağlantı sorunu mevcut hizmetler sekmesinde görülmedi.
