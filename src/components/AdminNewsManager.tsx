"use client";
import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  writeBatch,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import dynamic from "next/dynamic";
const CKEditorComponent = dynamic(() => import("./CKEditorComponent"), {
  ssr: false,
  loading: () => <p role="status">Editör yükleniyor…</p>,
});
import { locales, localeMeta, type Locale } from "@/lib/tid-i18n";
import {
  articlePath,
  createContentSlug,
  normalizeArticle,
  validateArticleImages,
  type Article,
  type ArticleCopy,
  type ArticleTranslations,
  type ContentKind,
} from "@/lib/editorial";
type Form = ArticleCopy & {
  kind: ContentKind;
  imageUrl: string;
  heroImageUrl: string;
  homeImageUrl: string;
  tags: string;
  featured: boolean;
  isActive: boolean;
  order: number;
  translations: ArticleTranslations;
};
const blankCopy = { title: "", subtitle: "", description: "", content: "" };
const newForm = (kind: ContentKind): Form => ({
  ...blankCopy,
  kind,
  imageUrl: "",
  heroImageUrl: "",
  homeImageUrl: "",
  tags: "",
  featured: false,
  isActive: true,
  order: 0,
  translations: {},
});
export default function AdminNewsManager({ kind }: { kind: ContentKind }) {
  const [all, setAll] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Article | null>(null);
  const [form, setForm] = useState(() => newForm(kind));
  const [language, setLanguage] = useState<Locale>("tr");
  const [saving, setSaving] = useState(false);
  const label = kind === "blog" ? "Blog" : "Haber";
  const articles = all.filter((article) => article.kind === kind);
  const [refresh, setRefresh] = useState(0);
  function fetchContent() {
    setLoading(true);
    setError("");
    setRefresh((count) => count + 1);
  }
  useEffect(() => {
    return onSnapshot(
      collection(db, "haberler"),
      (result) => {
        setAll(
          result.docs
            .map((entry) => normalizeArticle(entry.id, entry.data()))
            .sort(
              (a, b) =>
                a.order - b.order || b.createdAt.localeCompare(a.createdAt),
            ),
        );
        setLoading(false);
      },
      () => {
        setError(
          "İçerikler yüklenemedi. Bağlantınızı ve erişim yetkinizi kontrol edin.",
        );
        setLoading(false);
      },
    );
  }, [refresh]);
  function close() {
    if (saving) return;
    setOpen(false);
    setEditing(null);
    setForm(newForm(kind));
    setLanguage("tr");
  }
  function edit(article: Article) {
    setEditing(article);
    setForm({
      title: article.title,
      subtitle: article.subtitle,
      description: article.description,
      content: article.content,
      kind: article.kind,
      imageUrl: article.imageUrl,
      heroImageUrl: article.heroImageUrl,
      homeImageUrl: article.homeImageUrl,
      tags: article.tags.join(", "),
      featured: article.featured,
      isActive: article.isActive,
      order: article.order,
      translations: article.translations,
    });
    setLanguage("tr");
    setError("");
    setOpen(true);
  }
  const copy: ArticleCopy =
    language === "tr" ? form : { ...blankCopy, ...form.translations[language] };
  function updateCopy(field: keyof ArticleCopy, value: string) {
    setForm((previous) =>
      language === "tr"
        ? { ...previous, [field]: value }
        : {
            ...previous,
            translations: {
              ...previous.translations,
              [language]: {
                ...previous.translations[language],
                [field]: value,
              },
            },
          },
    );
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.content.trim()
    ) {
      setLanguage("tr");
      setError("Türkçe başlık, açıklama ve içerik alanlarını doldurun.");
      return;
    }
    const imageError = validateArticleImages({
      ...normalizeArticle(editing?.id || "new-article", form),
      imageUrl: form.imageUrl,
      heroImageUrl: form.heroImageUrl,
      homeImageUrl: form.homeImageUrl,
    }, all);
    if (imageError) {
      setError(imageError);
      return;
    }
    setSaving(true);
    setError("");
    try {
      const reference = editing
        ? doc(db, "haberler", editing.id)
        : doc(collection(db, "haberler"));
      const baseSlug = createContentSlug(form.title) || reference.id;
      const slug =
        editing?.slug ||
        (all.some((article) => article.slug === baseSlug)
          ? `${baseSlug}-${reference.id.slice(0, 8)}`
          : baseSlug);
      const payload = {
        ...form,
        title: form.title.trim(),
        tags: [
          ...new Set(
            form.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
          ),
        ],
        slug,
        updatedAt: new Date().toISOString(),
      };
      const batch = writeBatch(db);
      // Only one highlighted article per content type; keep existing document fields on edits.
      if (form.featured)
        all
          .filter(
            (article) =>
              article.id !== reference.id &&
              article.kind === form.kind &&
              article.featured,
          )
          .slice(0, 450)
          .forEach((article) =>
            batch.update(doc(db, "haberler", article.id), { featured: false }),
          );
      if (editing) batch.update(reference, payload);
      else
        batch.set(reference, {
          ...payload,
          createdAt: new Date().toISOString(),
        });
      await batch.commit();
      setOpen(false);
      setEditing(null);
      setForm(newForm(kind));
      setLanguage("tr");
      await fetchContent();
    } catch {
      setError(
        "İçerik kaydedilemedi. Formunuz korunuyor; lütfen yeniden deneyin.",
      );
    } finally {
      setSaving(false);
    }
  }
  async function remove(article: Article) {
    if (!window.confirm(`“${article.title}” içeriğini silmek istiyor musunuz?`))
      return;
    try {
      await deleteDoc(doc(db, "haberler", article.id));
      await fetchContent();
    } catch {
      setError("İçerik silinemedi. Lütfen yeniden deneyin.");
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">{label} Yönetimi</h1>
            <p className="text-gray-600 mt-2">
              Aktif içerikler ana sayfada ve{" "}
              {kind === "blog" ? "blog" : "haberler"} sayfasında otomatik
              görünür.
            </p>
          </div>
          <button
            className="bg-amber-700 text-white rounded-lg px-5 py-3"
            onClick={() => {
              setForm(newForm(kind));
              setEditing(null);
              setLanguage("tr");
              setError("");
              setOpen(true);
            }}
          >
            + Yeni {label}
          </button>
        </div>
        <div className="flex gap-3 mb-6">
          <Link
            className={`px-4 py-2 rounded-lg ${kind === "news" ? "bg-gray-900 text-white" : "bg-white border"}`}
            href="/admin/haberler"
          >
            Haberler
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg ${kind === "blog" ? "bg-gray-900 text-white" : "bg-white border"}`}
            href="/admin/blog"
          >
            Blog
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            ["Toplam", articles.length],
            ["Aktif", articles.filter((item) => item.isActive).length],
            ["Öne çıkan", articles.filter((item) => item.featured).length],
          ].map(([title, count]) => (
            <div key={title} className="bg-white border rounded-xl p-4">
              <p className="text-gray-500 text-sm">{title}</p>
              <strong className="text-2xl">{count}</strong>
            </div>
          ))}
        </div>
        {error && !open && (
          <p
            role="alert"
            className="p-4 mb-4 bg-red-50 text-red-800 rounded-lg"
          >
            {error}{" "}
            <button className="underline" onClick={fetchContent}>
              Yeniden dene
            </button>
          </p>
        )}
        {loading ? (
          <p role="status">İçerikler yükleniyor…</p>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border rounded-xl p-5 flex flex-wrap gap-5"
              >
                {article.imageUrl && (
                  <Image
                    src={article.imageUrl}
                    width={100}
                    height={90}
                    alt=""
                    unoptimized
                    className="rounded-lg object-cover w-24 h-24"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-lg">{article.title}</h2>
                  <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs mt-3">
                    <span
                      className={
                        article.isActive ? "text-green-800" : "text-gray-500"
                      }
                    >
                      {article.isActive ? "Aktif" : "Pasif"}
                    </span>
                    {article.featured && <span>★ Öne çıkan</span>}
                    <span>Sıra: {article.order}</span>
                    {locales
                      .filter(
                        (locale) =>
                          locale !== "tr" &&
                          article.translations[locale]?.title?.trim() &&
                          article.translations[locale]?.description?.trim() &&
                          article.translations[locale]?.content?.trim(),
                      )
                      .map((locale) => (
                        <span
                          key={locale}
                          className="bg-blue-50 text-blue-800 px-2 rounded"
                        >
                          {localeMeta[locale].nativeLabel}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-start">
                  <Link
                    href={articlePath(article)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-lg px-3 py-2 text-sm"
                  >
                    Görüntüle
                  </Link>
                  <button
                    onClick={() => edit(article)}
                    className="bg-blue-700 text-white rounded-lg px-3 py-2 text-sm"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => remove(article)}
                    className="border border-red-200 text-red-700 rounded-lg px-3 py-2 text-sm"
                  >
                    Sil
                  </button>
                </div>
              </article>
            ))}
            {!articles.length && !error && (
              <p className="bg-white border border-dashed rounded-xl p-12 text-center text-gray-500">
                Henüz {label.toLocaleLowerCase("tr")} eklenmemiş. Yeni içerik
                ekleyerek başlayın.
              </p>
            )}
          </div>
        )}
      </div>
      {open && (
        <div className="admin-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3">
          <div
            className="admin-modal-panel max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="editorial-modal-title"
          >
            <div className="admin-modal-header p-5 flex items-center justify-between">
              <h2 id="editorial-modal-title" className="font-bold text-lg">
                {editing ? "İçeriği Düzenle" : `Yeni ${label} Ekle`}
              </h2>
              <button
                onClick={close}
                disabled={saving}
                aria-label="Pencereyi kapat"
                className="text-xl p-2"
              >
                ×
              </button>
            </div>
            <form onSubmit={submit} className="p-5 space-y-5">
              {error && (
                <p
                  role="alert"
                  className="bg-red-50 text-red-800 p-3 rounded-lg"
                >
                  {error}
                </p>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <label className="admin-content-field">
                  İçerik türü
                  <select
                    value={form.kind}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        kind: event.target.value as ContentKind,
                      })
                    }
                  >
                    <option value="news">Haber</option>
                    <option value="blog">Blog</option>
                  </select>
                </label>
                <label className="admin-content-field">
                  Görüntülenme sırası
                  <input
                    type="number"
                    min={0}
                    max={10000}
                    value={form.order}
                    onChange={(event) =>
                      setForm({ ...form, order: Number(event.target.value) })
                    }
                  />
                </label>
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="İçerik dili"
              >
                {locales.map((locale) => (
                  <button
                    key={locale}
                    type="button"
                    aria-pressed={language === locale}
                    onClick={() => setLanguage(locale)}
                    className={`px-4 py-2 rounded-lg border ${locale === language ? "bg-gray-900 text-white" : "bg-white"}`}
                  >
                    {localeMeta[locale].nativeLabel}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Türkçe ana içeriktir. Diğer dillerde başlık, açıklama ve içerik
                tamamlandığında çeviri yayınlanır; eksik çevirilerde Türkçe
                gösterilir.
              </p>
              <div
                dir={localeMeta[language].dir}
                lang={language}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="admin-content-field">
                    Başlık {language === "tr" ? "*" : ""}
                    <input
                      value={copy.title}
                      onChange={(event) =>
                        updateCopy("title", event.target.value)
                      }
                      required={language === "tr"}
                      maxLength={240}
                    />
                  </label>
                  <label className="admin-content-field">
                    Alt başlık
                    <input
                      value={copy.subtitle}
                      onChange={(event) =>
                        updateCopy("subtitle", event.target.value)
                      }
                      maxLength={300}
                    />
                  </label>
                </div>
                <label className="admin-content-field">
                  Açıklama {language === "tr" ? "*" : ""}
                  <textarea
                    rows={3}
                    value={copy.description}
                    onChange={(event) =>
                      updateCopy("description", event.target.value)
                    }
                    required={language === "tr"}
                    maxLength={2000}
                  />
                </label>
                <div>
                  <p className="font-medium text-sm mb-2">
                    İçerik {language === "tr" ? "*" : ""}
                  </p>
                  <div className="admin-editor-shell">
                    <CKEditorComponent
                      key={language}
                      value={copy.content}
                      onChange={(value) => updateCopy("content", value)}
                      placeholder="Yazı içeriği…"
                      height="280px"
                      label=""
                    />
                  </div>
                </div>
              </div>
              <label className="admin-content-field">
                Liste kartı görseli URL’si
                <input
                  value={form.imageUrl}
                  onChange={(event) =>
                    setForm({ ...form, imageUrl: event.target.value })
                  }
                  placeholder="https://... veya /gorsel.webp"
                />
                <small className="text-gray-500">
                  Boş bırakılırsa haber veya blog simgesi gösterilir.
                </small>
              </label>
              <label className="admin-content-field">
                Detay sayfası hero görseli URL’si
                <input
                  value={form.heroImageUrl}
                  onChange={(event) => setForm({ ...form, heroImageUrl: event.target.value })}
                  placeholder="https://... veya /gorsel.webp"
                />
                <small className="text-gray-500">Liste kartından farklı bir fotoğraf seçin.</small>
              </label>
              <label className="admin-content-field">
                Ana sayfa kartı görseli URL’si
                <input
                  value={form.homeImageUrl}
                  onChange={(event) => setForm({ ...form, homeImageUrl: event.target.value })}
                  placeholder="İsteğe bağlı"
                />
                <small className="text-gray-500">Boşsa ana sayfadaki bu alan için ayrılan TİD görseli kullanılır. Aynı fotoğraf başka bir alanda kullanılamaz.</small>
              </label>
              <label className="admin-content-field">
                Etiketler (virgülle ayırın)
                <input
                  value={form.tags}
                  onChange={(event) =>
                    setForm({ ...form, tags: event.target.value })
                  }
                />
              </label>
              <div className="flex flex-wrap gap-6">
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(event) =>
                      setForm({ ...form, featured: event.target.checked })
                    }
                  />
                  Öne çıkan
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(event) =>
                      setForm({ ...form, isActive: event.target.checked })
                    }
                  />
                  Aktif / yayında
                </label>
              </div>
              <div className="admin-modal-footer flex gap-3 pt-5">
                <button
                  disabled={saving}
                  type="button"
                  className="border rounded-lg px-5 py-3"
                  onClick={close}
                >
                  İptal
                </button>
                <button
                  disabled={saving}
                  className="bg-amber-700 text-white rounded-lg px-6 py-3 disabled:opacity-60"
                  type="submit"
                >
                  {saving ? "Kaydediliyor…" : "Kaydet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
