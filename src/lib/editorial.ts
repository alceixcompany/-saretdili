import sanitizeHtml from "sanitize-html";
import type { Locale } from "./tid-i18n";
import legacyImages from "./tid-editorial-images.json";
import { homeEditorialImages, reservedImages } from "./tid-images";
export type ContentKind = "news" | "blog";
export type ArticleCopy = {
  title: string;
  subtitle: string;
  description: string;
  content: string;
};
export type ArticleTranslations = Partial<
  Record<Exclude<Locale, "tr">, Partial<ArticleCopy>>
>;
export type Article = ArticleCopy & {
  id: string;
  slug: string;
  kind: ContentKind;
  imageUrl: string;
  heroImageUrl: string;
  homeImageUrl: string;
  tags: string[];
  featured: boolean;
  isActive: boolean;
  order: number;
  createdAt: string;
  translations: ArticleTranslations;
};
export function createContentSlug(title: string) {
  return title
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
const string = (value: unknown) => (typeof value === "string" ? value : "");
export function contentKind(data: Record<string, unknown>): ContentKind {
  return data.kind === "blog" ? "blog" : "news";
}
export function safeImageUrl(value: unknown) {
  const url = string(value).trim();
  if (url.startsWith("/") && !url.startsWith("//")) return url;
  if (/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(url)) return url;
  try {
    return ["https:", "http:"].includes(new URL(url).protocol) ? url : "";
  } catch {
    return "";
  }
}
export function normalizeArticle(
  id: string,
  data: Record<string, unknown>,
): Article {
  const created = data.createdAt as
    { toDate?: () => Date } | string | undefined;
  let createdAt = "";
  if (typeof created === "string" && Number.isFinite(Date.parse(created)))
    createdAt = new Date(created).toISOString();
  else if (
    created &&
    typeof created === "object" &&
    typeof created.toDate === "function"
  )
    createdAt = created.toDate().toISOString();
  const translations: ArticleTranslations = {};
  const rawTranslations = data.translations as ArticleTranslations | undefined;
  for (const locale of ["en", "de", "ar", "ru"] as const) {
    const copy = rawTranslations?.[locale];
    if (copy)
      translations[locale] = {
        title: string(copy.title),
        subtitle: string(copy.subtitle),
        description: string(copy.description),
        content: string(copy.content),
      };
  }
  const title = string(data.title);
  const replacement = (legacyImages as Record<string, { source: string; card: string; hero: string }>)[id];
  const originalImage = safeImageUrl(data.imageUrl);
  return {
    id,
    title,
    subtitle: string(data.subtitle),
    description: string(data.description),
    content: string(data.content),
    slug: string(data.slug) || createContentSlug(title) || id,
    kind: contentKind(data),
    imageUrl: replacement && originalImage === replacement.source ? replacement.card : originalImage,
    heroImageUrl: safeImageUrl(data.heroImageUrl) || replacement?.hero || "",
    homeImageUrl: safeImageUrl(data.homeImageUrl),
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    featured: data.featured === true,
    isActive: data.isActive === true,
    order:
      typeof data.order === "number" && Number.isFinite(data.order)
        ? data.order
        : 0,
    createdAt,
    translations,
  };
}
export function articlePath(article: Article) {
  return `/${article.kind === "blog" ? "blog" : "haberler"}/${encodeURIComponent(article.slug)}`;
}
export function localizedArticle(article: Article, locale: Locale) {
  const copy = locale === "tr" ? undefined : article.translations[locale];
  // Keep an article in its source language until a complete translation is ready.
  const translated = Boolean(
    copy?.title?.trim() && copy?.description?.trim() && copy?.content?.trim(),
  );
  return {
    ...article,
    ...(translated
      ? {
          title: copy!.title!,
          subtitle: copy!.subtitle || "",
          description: copy!.description!,
          content: copy!.content!,
        }
      : {}),
    language: translated ? locale : ("tr" as Locale),
    translated,
  };
}
export function sortArticles(articles: Article[]) {
  return [...articles].sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) ||
      a.order - b.order ||
      b.createdAt.localeCompare(a.createdAt) ||
      a.id.localeCompare(b.id),
  );
}
export function safeArticleHtml(content: string, allowedImages?: readonly string[]) {
  const seen = new Set<string>();
  return sanitizeHtml(content, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "h1", "h2", "img"],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      "*": ["dir"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false,
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
    exclusiveFilter(frame) {
      if (frame.tag !== "img") return false;
      const src = safeImageUrl(frame.attribs.src);
      if (!src || seen.has(src) || (allowedImages && !allowedImages.includes(src))) return true;
      seen.add(src);
      return false;
    },
  });
}

const legacySources = new Set(Object.values(legacyImages).map((entry) => entry.source));
function imageIdentity(url: string) {
  // Cache-busting parameters must not turn one local file into multiple photos.
  return url.startsWith("/") ? url.split(/[?#]/)[0] : url.split("#")[0];
}
function retiredImage(url: string) {
  return /^\/(beyvip|yp-metropol)\//.test(url) || legacySources.has(url);
}
export function articleBodyImages(article: Pick<Article, "content" | "translations">) {
  const images = new Set<string>();
  for (const content of [article.content, ...Object.values(article.translations).map((copy) => copy?.content || "")]) {
    sanitizeHtml(content, {
      transformTags: {
        img(tagName, attribs) {
          const src = safeImageUrl(attribs.src);
          if (src) images.add(src);
          return { tagName, attribs };
        },
      },
    });
  }
  return [...images];
}
export type ArticleImages = { card?: string; hero?: string; home?: string; body: string[] };
// Stable ownership across routes prevents a custom URL from being rendered twice.
export function resolveEditorialImages(articles: Article[]): Record<string, ArticleImages> {
  const claimed = new Set(reservedImages.map(imageIdentity));
  const result: Record<string, ArticleImages> = {};
  const claim = (url: string) => {
    if (!url || retiredImage(url) || claimed.has(imageIdentity(url))) return undefined;
    claimed.add(imageIdentity(url));
    return url;
  };
  for (const article of [...articles].sort((a, b) => a.id.localeCompare(b.id))) {
    result[article.id] = {
      card: claim(article.imageUrl),
      hero: claim(article.heroImageUrl),
      home: claim(article.homeImageUrl),
      body: articleBodyImages(article).flatMap((url) => claim(url) ? [url] : []),
    };
  }
  for (const kind of ["news", "blog"] as const) {
    sortArticles(articles).filter((article) => article.kind === kind).slice(0, 3).forEach((article, index) => {
      result[article.id].home ||= homeEditorialImages[kind][index];
    });
  }
  return result;
}
export function validateArticleImages(article: Article, others: Article[]) {
  const used = new Set(reservedImages.map(imageIdentity));
  for (const other of others.filter((item) => item.id !== article.id)) {
    for (const url of [other.imageUrl, other.heroImageUrl, other.homeImageUrl, ...articleBodyImages(other)]) {
      if (url) used.add(imageIdentity(url));
    }
  }
  for (const raw of [article.imageUrl, article.heroImageUrl, article.homeImageUrl, ...articleBodyImages(article)]) {
    if (!raw.trim()) continue;
    const url = safeImageUrl(raw);
    if (!url) return "Geçerli bir görsel URL’si girin.";
    if (retiredImage(url)) return "Eski marka görseli yerine yeni bir fotoğraf seçin.";
    if (used.has(imageIdentity(url))) return "Bu görsel başka bir alanda kullanılıyor. Her alan için farklı bir görsel seçin.";
    used.add(imageIdentity(url));
  }
  return "";
}
