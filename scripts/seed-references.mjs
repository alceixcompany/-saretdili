import { readFileSync } from 'node:fs';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc, terminate } from 'firebase/firestore';

const envText = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
const env = Object.fromEntries(
  envText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#') && line.includes('='))
    .map((line) => {
      const separator = line.indexOf('=');
      return [line.slice(0, separator), line.slice(separator + 1).replace(/^['"]|['"]$/g, '')];
    })
);

const requiredKeys = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

for (const key of requiredKeys) {
  if (!env[key]) throw new Error(`.env.local içinde ${key} eksik.`);
}

const app = initializeApp({
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const db = getFirestore(app);
const references = [
  ['turk-hava-yollari', 'Türk Hava Yolları', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Turkish_Airlines_logo_2019.svg', 'https://www.turkishairlines.com/', 'https://commons.wikimedia.org/wiki/File:Turkish_Airlines_logo_2019.svg'],
  ['koc-holding', 'Koç Holding', 'https://upload.wikimedia.org/wikipedia/commons/d/da/Ko%C3%A7_Holding_-_logo_%28Turkey%2C_1984%29.svg', 'https://www.koc.com.tr/', 'https://commons.wikimedia.org/wiki/File:Ko%C3%A7_Holding_-_logo_(Turkey,_1984).svg'],
  ['sabanci-holding', 'Sabancı Holding', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Sabanc%C4%B1_Holding_logo.svg', 'https://www.sabanci.com/', 'https://commons.wikimedia.org/wiki/File:Sabanc%C4%B1_Holding_logo.svg'],
  ['turk-telekom', 'Türk Telekom', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/T%C3%BCrk_Telekom_logo.svg', 'https://www.turktelekom.com.tr/', 'https://commons.wikimedia.org/wiki/File:T%C3%BCrk_Telekom_logo.svg'],
  ['arcelik', 'Arçelik', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Ar%C3%A7elik_logo.svg', 'https://www.arcelikglobal.com/', 'https://commons.wikimedia.org/wiki/File:Ar%C3%A7elik_logo.svg'],
  ['beko', 'Beko', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Beko_logo.svg', 'https://www.beko.com/', 'https://commons.wikimedia.org/wiki/File:Beko_logo.svg'],
  ['vestel', 'Vestel', 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Vestel_logo.svg', 'https://vestelinternational.com/', 'https://commons.wikimedia.org/wiki/File:Vestel_logo.svg'],
  ['tupras', 'Tüpraş', 'https://upload.wikimedia.org/wikipedia/commons/7/76/T%C3%BCpra%C5%9F_logo.svg', 'https://www.tupras.com.tr/', 'https://commons.wikimedia.org/wiki/File:T%C3%BCpra%C5%9F_logo.svg'],
  ['aselsan', 'ASELSAN', 'https://upload.wikimedia.org/wikipedia/commons/c/c4/ASELSAN_logo.svg', 'https://www.aselsan.com/', 'https://commons.wikimedia.org/wiki/File:ASELSAN_logo.svg'],
  ['ford-otosan', 'Ford Otosan', 'https://upload.wikimedia.org/wikipedia/commons/5/56/Ford_Otosan_logo.svg', 'https://www.fordotosan.com.tr/', 'https://commons.wikimedia.org/wiki/File:Ford_Otosan_logo.svg'],
  ['anadolu-efes', 'Anadolu Efes', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Anadolu_Efes_Logo.svg', 'https://www.anadoluefes.com/', 'https://commons.wikimedia.org/wiki/File:Anadolu_Efes_Logo.svg'],
  ['trendyol', 'Trendyol', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Trendyol_logo.svg', 'https://www.trendyol.com/', 'https://commons.wikimedia.org/wiki/File:Trendyol_logo.svg'],
  ['ulker', 'Ülker', 'https://upload.wikimedia.org/wikipedia/commons/5/5b/%C3%9Clker_logo_%282%29.svg', 'https://www.ulker.com.tr/', 'https://commons.wikimedia.org/wiki/File:%C3%9Clker_logo_(2).svg'],
  ['lc-waikiki', 'LC Waikiki', 'https://upload.wikimedia.org/wikipedia/commons/4/44/LC_Waikiki_logo.svg', 'https://corporate.lcwaikiki.com/', 'https://commons.wikimedia.org/wiki/File:LC_Waikiki_logo.svg'],
  ['togg', 'Togg', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/TOGG_logo.svg', 'https://www.togg.com.tr/', 'https://commons.wikimedia.org/wiki/File:TOGG_logo.svg'],
];

const now = new Date().toISOString();

const items = references.map(([id, name, imageUrl, websiteUrl, sourceUrl], index) => ({
      id,
      name,
      imageUrl,
      websiteUrl,
      sourceUrl,
      order: index + 1,
      isActive: true,
      createdAt: now,
      updatedAt: now,
}));

// Referanslar genel site içeriğiyle aynı, hâlihazırda kullanılan içerik koleksiyonunda tutulur.
await setDoc(
  doc(db, 'contact_info', 'corporate_references'),
  { contentType: 'corporate_references', items, updatedAt: now },
  { merge: true }
);
const savedSnapshot = await getDoc(doc(db, 'contact_info', 'corporate_references'));
const savedCount = savedSnapshot.data()?.items?.length ?? 0;
console.log(`${savedCount} kurumsal referans Firestore'a kaydedildi ve doğrulandı.`);
await terminate(db);
