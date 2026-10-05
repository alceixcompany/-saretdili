import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nextEnv from "@next/env";
import { initializeApp, deleteApp } from "firebase/app";
import { getFirestore, doc, getDoc, runTransaction, terminate } from "firebase/firestore";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
nextEnv.loadEnvConfig(root);
const seed = JSON.parse(await readFile(path.join(root, "docs/tid-launch-content.json"), "utf8"));
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
if (projectId !== seed.projectId) throw new Error(`Hedef Firebase projesi ${seed.projectId} olmalı.`);
const now = new Date().toISOString();
const records = [
  ...seed.news.map(({ id, imageKey, ...copy }, index) => ({
    collection: "haberler", id,
    data: {
      ...copy, kind: "news", isActive: true, order: index + 1,
      imageUrl: `/tid/photos/tid-news-${imageKey}-card.webp`,
      heroImageUrl: `/tid/photos/tid-news-${imageKey}-hero.webp`,
      homeImageUrl: `/tid/photos/tid-news-${imageKey}-home.webp`,
      createdAt: seed.publicationDate, updatedAt: now, imageType: "generated-editorial",
    },
  })),
  ...seed.galleryCategories.map(({ id, ...category }, index) => ({
    collection: "gallery_categories", id,
    data: { ...category, order: index + 1, isActive: true, createdAt: seed.publicationDate, updatedAt: now },
  })),
  ...seed.galleryItems.map(({ id, ...item }, index) => ({
    collection: "gallery_items", id,
    data: {
      ...item, imageUrl: `/tid/photos/${id}.webp`, thumbnailUrl: "",
      order: index + 1, isActive: true, isFeatured: index === 0,
      createdAt: seed.publicationDate, updatedAt: now, imageType: "generated-editorial",
    },
  })),
];
const imageUrls = records.flatMap(({ data }) => [data.imageUrl, data.heroImageUrl, data.homeImageUrl].filter(Boolean));
if (new Set(imageUrls).size !== imageUrls.length) throw new Error("Görseller farklı olmalı.");
await Promise.all(imageUrls.map((url) => access(path.join(root, "public", url))));
const summary = { projectId, news: seed.news.length, galleryCategories: seed.galleryCategories.length, galleryImages: seed.galleryItems.length, uniqueImages: imageUrls.length };
if (!process.argv.includes("--apply")) {
  console.log(JSON.stringify({ mode: "dry-run", ...summary, note: "Yazmak için --apply kullanın. Var olan kayıtlar korunur." }, null, 2));
} else {
  const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  }, "tid-content-seed");
  const db = getFirestore(app);
  try {
    const created = await runTransaction(db, async (transaction) => {
      const references = records.map((record) => doc(db, record.collection, record.id));
      const snapshots = await Promise.all(references.map((reference) => transaction.get(reference)));
      const added = [];
      records.forEach((record, index) => {
        if (!snapshots[index].exists()) {
          transaction.set(references[index], record.data);
          added.push(`${record.collection}/${record.id}`);
        }
      });
      return added;
    });
    for (const record of records) {
      const saved = await getDoc(doc(db, record.collection, record.id));
      if (!saved.exists()) throw new Error(`Kayıt doğrulanamadı: ${record.id}`);
      if (created.includes(`${record.collection}/${record.id}`)) {
        for (const field of ["title", "imageUrl", "heroImageUrl", "homeImageUrl", "isActive"])
          if (field in record.data && JSON.stringify(saved.data()[field]) !== JSON.stringify(record.data[field]))
            throw new Error(`Alan doğrulanamadı: ${record.id}/${field}`);
      }
    }
    console.log(JSON.stringify({ mode: "applied-and-verified", ...summary, created: created.length, preserved: records.length - created.length, documents: created }, null, 2));
  } finally {
    await terminate(db);
    await deleteApp(app);
  }
}
