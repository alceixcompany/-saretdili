"use client";
import TidHero from "@/components/TidHero";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiFileText,
} from "react-icons/fi";
import { Text, useLanguage } from "./LanguageProvider";
import { TidCta } from "./TidSections";
import { usePublishedContent } from "@/hooks/usePublishedContent";
import {
  articlePath,
  localizedArticle,
  safeArticleHtml,
  resolveEditorialImages,
  type Article,
  type ContentKind,
} from "@/lib/editorial";
import { tidImages } from "@/lib/tid-images";
const labels = {
  news: {
    title: "Haberler",
    eyebrow: "HABERLER",
    heading: "Güncel haberler ve duyurular.",
    description: "TİD’den gelişmeleri ve yeni duyuruları takip edin.",
    all: "Tüm haberler",
    empty: "Henüz haber bulunmuyor.",
  },
  blog: {
    title: "Blog",
    eyebrow: "BLOG & REHBERLER",
    heading: "Bilgiyle daha kolay bir süreç.",
    description:
      "İşaret dili, tercümanlık ve noter süreçleri hakkında yazılarımızı keşfedin.",
    all: "Tüm blog yazıları",
    empty: "Henüz blog yazısı bulunmuyor.",
  },
};
function DateLabel({ value }: { value: string }) {
  const { locale } = useLanguage();
  return value ? (
    <time dateTime={value}>
      {new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeZone: "Europe/Istanbul",
      }).format(new Date(value))}
    </time>
  ) : null;
}
function ArticleCard({ article, image }: { article: Article; image?: string }) {
  const { locale, t } = useLanguage();
  const copy = localizedArticle(article, locale);
  return (
    <article className="tid-editorial-card">
      <Link
        href={articlePath(article)}
        className="tid-editorial-image"
        aria-label={copy.title}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            unoptimized={!image.startsWith("/")}
            sizes="(max-width: 700px) 90vw, (max-width: 1200px) 45vw, 30vw"
          />
        ) : (
          <span
            className={`tid-editorial-art ${article.kind}`}
            aria-hidden="true"
          >
            {article.kind === "blog" ? <FiBookOpen /> : <FiFileText />}
            <i>✳</i>
          </span>
        )}
        {article.featured && (
          <span className="tid-editorial-featured">{t("Öne çıkan")}</span>
        )}
      </Link>
      <div className="tid-editorial-copy">
        <div className="tid-editorial-meta">
          <span>{t(labels[article.kind].title)}</span>
          <DateLabel value={article.createdAt} />
        </div>
        <h3 lang={copy.language} dir={copy.language === "ar" ? "rtl" : "ltr"}>
          <Link href={articlePath(article)}>{copy.title}</Link>
        </h3>
        <p lang={copy.language} dir={copy.language === "ar" ? "rtl" : "ltr"}>
          {copy.description}
        </p>
        <Link className="tid-text-link" href={articlePath(article)}>
          {t("Yazıyı okuyun")} <FiArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
function ContentStatus({
  loading,
  error,
  empty,
  retry,
}: {
  loading: boolean;
  error: boolean;
  empty: string;
  retry: () => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="tid-content-status" role={error ? "alert" : "status"}>
      <FiBookOpen aria-hidden="true" />
      <p>
        {t(
          loading
            ? "İçerikler yükleniyor…"
            : error
              ? "İçerikler şu anda yüklenemedi."
              : empty,
        )}
      </p>
      {error && (
        <button className="tid-text-link" onClick={retry}>
          {t("Tekrar deneyin")} <FiArrowRight />
        </button>
      )}
    </div>
  );
}
export function EditorialHome({ initialArticles }: { initialArticles?: Article[] }) {
  const { articles, loading, error, retry } = usePublishedContent(initialArticles);
  const images = resolveEditorialImages(articles);
  return (
    <>
      {(["news", "blog"] as const).map((kind) => {
        const data = articles.filter((item) => item.kind === kind).slice(0, 3),
          label = labels[kind];
        return (
          <section
            className={`tid-section tid-editorial-section ${kind}`}
            id={kind === "news" ? "haberler" : "blog"}
            key={kind}
          >
            <div className="tid-container">
              <div className="tid-section-heading">
                <div>
                  <span className="tid-eyebrow">
                    <Text>{label.eyebrow}</Text>
                  </span>
                  <h2>
                    <Text>{label.heading}</Text>
                  </h2>
                </div>
                <Link
                  href={kind === "news" ? "/haberler" : "/blog"}
                  className="tid-text-link"
                >
                  <Text>{label.all}</Text> <FiArrowUpRight />
                </Link>
              </div>
              <p className="tid-editorial-intro">
                <Text>{label.description}</Text>
              </p>
              {data.length ? (
                <div className="tid-editorial-grid">
                  {data.map((article) => (
                    <ArticleCard key={article.id} article={article} image={images[article.id]?.home} />
                  ))}
                </div>
              ) : (
                <ContentStatus
                  loading={loading}
                  error={error}
                  empty={label.empty}
                  retry={retry}
                />
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
export function EditorialArchive({ kind, initialArticles }: { kind: ContentKind; initialArticles?: Article[] }) {
  const { articles, loading, error, retry } = usePublishedContent(initialArticles);
  const images = resolveEditorialImages(articles);
  const [visible, setVisible] = useState(9);
  const data = articles.filter((article) => article.kind === kind),
    label = labels[kind];
  return (
    <main id="main-content" className="tid-site">
      <TidHero
        image={
          kind === "blog"
            ? tidImages.blogHero
            : tidImages.newsHero
        }
      >
        <div className="tid-container">
          <div className="tid-breadcrumb">
            <Link href="/">
              <Text>Ana Sayfa</Text>
            </Link>
            <span>/</span>
            <span>
              <Text>{label.title}</Text>
            </span>
          </div>
          <span className="tid-eyebrow">
            <Text>{label.eyebrow}</Text>
          </span>
          <h1>
            <Text>{label.heading}</Text>
          </h1>
          <p>
            <Text>{label.description}</Text>
          </p>
          <div className="tid-editorial-tabs">
            <Link
              href="/haberler"
              aria-current={kind === "news" ? "page" : undefined}
            >
              <Text>Haberler</Text>
            </Link>
            <Link
              href="/blog"
              aria-current={kind === "blog" ? "page" : undefined}
            >
              <Text>Blog</Text>
            </Link>
          </div>
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container">
          {data.length ? (
            <>
              <div className="tid-editorial-grid">
                {data.slice(0, visible).map((article) => (
                  <ArticleCard key={article.id} article={article} image={images[article.id]?.card} />
                ))}
              </div>
              {data.length > visible && (
                <button
                  className="tid-button tid-load-more"
                  onClick={() => setVisible((count) => count + 9)}
                >
                  <Text>Daha fazla göster</Text>
                  <FiArrowRight />
                </button>
              )}
            </>
          ) : (
            <ContentStatus
              loading={loading}
              error={error}
              empty={label.empty}
              retry={retry}
            />
          )}
        </div>
      </section>
      <TidCta />
    </main>
  );
}
export function EditorialDetail({
  slug,
  kind,
  initialArticles,
}: {
  slug: string;
  kind: ContentKind;
  initialArticles?: Article[];
}) {
  const { articles, loading, error, retry } = usePublishedContent(initialArticles);
  const { locale, t } = useLanguage();
  // Document IDs also resolve old records that were created before slugs existed.
  const article = articles.find(
    (item) => item.slug === slug || item.id === slug,
  );
  const copy = article ? localizedArticle(article, locale) : undefined;
  const images = resolveEditorialImages(articles);
  const basePath =
    article?.kind === "blog" || (!article && kind === "blog")
      ? "/blog"
      : "/haberler";
  return (
    <main id="main-content" className="tid-site">
      <TidHero image={article ? images[article.id]?.hero : undefined}>
        <div className="tid-container">
          <div className="tid-breadcrumb">
            <Link href="/">
              <Text>Ana Sayfa</Text>
            </Link>
            <span>/</span>
            <Link href={basePath}>
              {t(basePath === "/blog" ? "Blog" : "Haberler")}
            </Link>
          </div>
          {copy ? (
            <>
              <div className="tid-editorial-meta">
                <span>{t(labels[copy.kind].title)}</span>
                <DateLabel value={copy.createdAt} />
              </div>
              <h1
                lang={copy.language}
                dir={copy.language === "ar" ? "rtl" : "ltr"}
              >
                {copy.title}
              </h1>
              {copy.subtitle && (
                <p
                  lang={copy.language}
                  dir={copy.language === "ar" ? "rtl" : "ltr"}
                >
                  {copy.subtitle}
                </p>
              )}
            </>
          ) : (
            <h1>
              {t(
                loading
                  ? "İçerikler yükleniyor…"
                  : error
                    ? "İçerikler şu anda yüklenemedi."
                    : "İçerik bulunamadı.",
              )}
            </h1>
          )}
        </div>
      </TidHero>
      <section className="tid-section">
        <div className="tid-container tid-article-container">
          {copy ? (
            <>
              {locale !== "tr" && !copy.translated && (
                <p className="tid-translation-notice" role="status">
                  {t(
                    "Bu içerik henüz seçilen dilde çevrilmemiştir. Özgün dilinde gösterilmektedir.",
                  )}
                </p>
              )}
              <div
                className="tid-article-body"
                lang={copy.language}
                dir={copy.language === "ar" ? "rtl" : "ltr"}
                dangerouslySetInnerHTML={{
                  __html: safeArticleHtml(
                    copy.content ||
                      `<p>${copy.description.replace(/</g, "&lt;")}</p>`,
                    article ? images[article.id]?.body : [],
                  ),
                }}
              />
              {copy.tags.length > 0 && (
                <div className="tid-article-tags">
                  {copy.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              )}
              <div className="tid-article-end">
                <Link className="tid-text-link" href={basePath}>
                  {t("İçerik listesine dön")} <FiArrowRight />
                </Link>
                <Link className="tid-text-link" href="/iletisim">
                  {t("Bizimle İletişime Geçin")} <FiArrowUpRight />
                </Link>
              </div>
            </>
          ) : (
            <>
              {error && (
                <ContentStatus loading={false} error empty="" retry={retry} />
              )}
              <Link className="tid-text-link" href={basePath}>
                {t("İçerik listesine dön")} <FiArrowRight />
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
