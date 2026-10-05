const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
function loadTs(relative) {
  const filename = path.resolve(__dirname, "..", relative);
  const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  const requireOriginal = loaded.require.bind(loaded);
  loaded.require = (name) => {
    const relativeFile = path.resolve(path.dirname(filename), name + ".ts");
    return name.startsWith(".") && fs.existsSync(relativeFile)
      ? loadTs(path.relative(path.resolve(__dirname, ".."), relativeFile))
      : requireOriginal(name);
  };
  loaded._compile(code, filename);
  return loaded.exports;
}
const {
  normalizeArticle,
  createContentSlug,
  localizedArticle,
  sortArticles,
  safeArticleHtml,
  safeImageUrl,
  articlePath,
  resolveEditorialImages,
  validateArticleImages,
} = loadTs("src/lib/editorial.ts");
const { translate, locales, isLocale, localeMeta } = loadTs(
  "src/lib/tid-i18n.ts",
);
const source = {
  title: "Türk İşaret Dili",
  description: "Açıklama",
  content: "<p>İçerik</p>",
  isActive: true,
};
test("existing news keeps its type and Turkish slug; explicit slug is stable after editing", () => {
  const legacy = normalizeArticle("document", source);
  assert.equal(legacy.kind, "news");
  assert.equal(legacy.slug, "turk-isaret-dili");
  assert.equal(articlePath(legacy), "/haberler/turk-isaret-dili");
  const blog = normalizeArticle("blog-doc", {
    ...source,
    kind: "blog",
    title: "Yeni başlık",
    slug: "kalici-url",
  });
  assert.equal(articlePath(blog), "/blog/kalici-url");
  assert.equal(
    createContentSlug("İşaret, Çeviri & Öğrenme"),
    "isaret-ceviri-ogrenme",
  );
});
test("only explicitly active records qualify for public output; malformed optional fields normalize safely", () => {
  for (const active of [undefined, false, "true", 1, null])
    assert.equal(
      normalizeArticle("id", { ...source, isActive: active }).isActive,
      false,
    );
  const item = normalizeArticle("id", {
    ...source,
    tags: ["etiket", null, 2],
    order: NaN,
    imageUrl: "javascript:alert(1)",
    createdAt: "not a date",
  });
  assert.deepEqual(item.tags, ["etiket"]);
  assert.equal(item.order, 0);
  assert.equal(item.imageUrl, "");
  assert.equal(item.createdAt, "");
  assert.equal(
    normalizeArticle("id", {
      ...source,
      createdAt: { toDate: () => new Date("2026-10-03T12:00:00Z") },
    }).createdAt,
    "2026-10-03T12:00:00.000Z",
  );
});
test("partial translations use the entire source article; complete translations retain the canonical slug", () => {
  const item = normalizeArticle("id", {
    ...source,
    translations: {
      en: { title: "Translated title" },
      ar: { title: "عنوان", description: "وصف", content: "<p>نص</p>" },
    },
  });
  assert.equal(localizedArticle(item, "en").title, source.title);
  assert.equal(localizedArticle(item, "en").translated, false);
  assert.equal(localizedArticle(item, "en").language, "tr");
  assert.equal(localizedArticle(item, "ar").title, "عنوان");
  assert.equal(localizedArticle(item, "ar").language, "ar");
  assert.equal(localizedArticle(item, "ar").slug, item.slug);
});
test("featured first, then editorial order, then most recent article", () => {
  const records = [
    normalizeArticle("regular", { ...source, order: 2 }),
    normalizeArticle("new", { ...source, createdAt: "2026-10-03" }),
    normalizeArticle("old", { ...source, createdAt: "2026-01-01" }),
    normalizeArticle("featured", { ...source, featured: true, order: 99 }),
  ];
  assert.deepEqual(
    sortArticles(records).map((item) => item.id),
    ["featured", "new", "old", "regular"],
  );
  assert.equal(records[0].id, "regular");
});
test("rich text preserves formatting and removes executable markup and unsafe URLs", () => {
  const html = safeArticleHtml(
    '<h2>Başlık</h2><script>alert(1)</script><p onclick="alert(1)">Metin <strong>kalın</strong></p><a href="javascript:alert(1)" target="_blank">Bağlantı</a><iframe src="https://example.com"></iframe><img src="https://example.com/a.jpg" onerror="alert(1)" /><a href="https://example.com">Güvenli</a>',
  );
  assert.match(html, /<h2>Başlık<\/h2>/);
  assert.match(html, /<strong>kalın<\/strong>/);
  assert.doesNotMatch(html, /script|onclick|onerror|javascript:|iframe/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.equal(safeImageUrl("//example.com/a.png"), "");
  assert.equal(
    safeImageUrl("/tid/communication.webp"),
    "/tid/communication.webp",
  );
});
test("exactly five languages, Arabic RTL, whitespace retained and new content UI translated", () => {
  assert.deepEqual(locales, ["tr", "en", "de", "ar", "ru"]);
  assert.equal(isLocale("fr"), false);
  assert.equal(localeMeta.ar.dir, "rtl");
  assert.equal(translate(" Haberler ", "en"), " News ");
  for (const locale of locales.filter((value) => value !== "tr"))
    for (const label of [
      "Güncel haberler ve duyurular.",
      "Bilgiyle daha kolay bir süreç.",
      "İçerikler yükleniyor…",
      "Dil seçimi",
      "TİD Tercümanlığı",
      "Noter İşlemleri",
    ])
      assert.notEqual(translate(label, locale), label);
  assert.equal(translate("Türkçe özgün yazı", "en"), "Türkçe özgün yazı");
});

test("legacy news gets a new, separate card and hero while a later custom card survives", () => {
  const replacements = require("../src/lib/tid-editorial-images.json");
  for (const [id, image] of Object.entries(replacements)) {
    const article = normalizeArticle(id, { ...source, imageUrl: image.source });
    assert.equal(article.imageUrl, image.card);
    assert.equal(article.heroImageUrl, image.hero);
    assert.notEqual(article.imageUrl, article.heroImageUrl);
    assert.equal(normalizeArticle(id, { ...source, imageUrl: "/new-card.webp" }).imageUrl, "/new-card.webp");
  }
});
test("one image belongs to one placement across news, blog, homepage and rich text", () => {
  const first = normalizeArticle("a", {
    ...source, imageUrl: "/custom.webp", heroImageUrl: "/hero.webp",
    homeImageUrl: "/custom.webp", content: '<p>Text</p><img src="/hero.webp"><img src="/inline.webp"><img src="/inline.webp">',
  });
  const second = normalizeArticle("b", { ...source, kind: "blog", imageUrl: "/custom.webp", heroImageUrl: "/inline.webp" });
  const reserved = normalizeArticle("c", { ...source, imageUrl: "/tid/communication.webp" });
  const result = resolveEditorialImages([second, first, reserved]);
  assert.equal(result.a.card, "/custom.webp");
  assert.equal(result.a.hero, "/hero.webp");
  assert.equal(result.a.home, "/tid/photos/home-news-1.webp");
  assert.deepEqual(result.a.body, ["/inline.webp"]);
  assert.equal(result.b.card, undefined);
  assert.equal(result.b.hero, undefined);
  assert.equal(result.c.card, undefined);
  assert.deepEqual(result, resolveEditorialImages([reserved, first, second]));
  const html = safeArticleHtml(first.content, result.a.body);
  assert.equal((html.match(/<img/g) || []).length, 1);
  assert.doesNotMatch(html, /hero.webp/);
  assert.match(validateArticleImages(first, []), /farklı/);
  assert.match(validateArticleImages(second, [first]), /farklı/);
  assert.match(validateArticleImages(normalizeArticle("query", { ...source, imageUrl: "/tid/communication.webp?v=2" }), []), /farklı/);
  assert.equal(validateArticleImages(normalizeArticle("z", { ...source, imageUrl: "/unique.webp", heroImageUrl: "/unique-hero.webp" }), [first]), "");
});
test("all public photo placements reference present, unique image bytes", () => {
  const { reservedImages } = loadTs("src/lib/tid-images.ts");
  const replacements = require("../src/lib/tid-editorial-images.json");
  const urls = [...reservedImages, ...Object.values(replacements).flatMap(({ card, hero }) => [card, hero])];
  assert.equal(new Set(urls).size, urls.length);
  const { createHash } = require("node:crypto");
  const allPhotos = [...new Set([...urls, ...fs.readdirSync(path.resolve(__dirname, "../public/tid/photos")).filter(name => name.endsWith(".webp")).map(name => "/tid/photos/" + name)])];
  const hashes = allPhotos.map((url) => createHash("sha256").update(fs.readFileSync(path.resolve(__dirname, "../public" + url))).digest("hex"));
  assert.equal(new Set(hashes).size, hashes.length);
});

test("new Firebase content has complete translations, distinct media and valid gallery categories", () => {
  const seed = require("../docs/tid-launch-content.json");
  const articles = seed.news.map(({id, imageKey, ...copy}) => normalizeArticle(id, {
    ...copy, kind: "news", isActive: true,
    imageUrl: `/tid/photos/tid-news-${imageKey}-card.webp`,
    heroImageUrl: `/tid/photos/tid-news-${imageKey}-hero.webp`,
    homeImageUrl: `/tid/photos/tid-news-${imageKey}-home.webp`,
  }));
  const media = resolveEditorialImages(articles);
  for (const article of articles) {
    for (const locale of ["en", "de", "ar", "ru"])
      assert.equal(localizedArticle(article, locale).translated, true);
    assert.deepEqual([media[article.id].card, media[article.id].hero, media[article.id].home], [article.imageUrl, article.heroImageUrl, article.homeImageUrl]);
  }
  const urls = [...articles.flatMap(a => [a.imageUrl, a.heroImageUrl, a.homeImageUrl]), ...seed.galleryItems.map(i => `/tid/photos/${i.id}.webp`)];
  assert.equal(new Set(urls).size, urls.length);
  for (const url of urls) assert.ok(fs.existsSync(path.resolve(__dirname, "../public"+url)), url);
  for (const image of seed.galleryItems) assert.ok(seed.galleryCategories.some(category => category.id === image.categoryId));
});
