import "server-only";
import { cache } from "react";
import { unstable_rethrow } from "next/navigation";
import { normalizeArticle, sortArticles, type Article } from "./editorial";
import { decodeFirestoreFields, type FirestoreValue } from "./published-content";

type QueryRow = {
  document?: { name: string; fields?: Record<string, FirestoreValue> };
  error?: { message?: string };
};

// Public query: observes Firestore rules, with no admin credentials or privileges.
// Request-scoped deduplication; never cache an old publication state across requests.
export const getPublishedArticles = cache(async (): Promise<Article[] | undefined> => {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!projectId || !apiKey) return undefined;
  try {
    const url = new URL(
      `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents:runQuery`,
    );
    url.searchParams.set("key", apiKey);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: "haberler" }],
          where: { fieldFilter: { field: { fieldPath: "isActive" }, op: "EQUAL", value: { booleanValue: true } } },
        },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw new Error(`Firestore read status ${response.status}`);
    const rows: QueryRow[] = await response.json();
    if (!Array.isArray(rows) || rows.some((row) => row.error))
      throw new Error("Invalid Firestore content response");
    return sortArticles(rows.flatMap(({ document }) => {
      if (!document) return [];
      const article = normalizeArticle(
        document.name.split("/").pop()!,
        decodeFirestoreFields(document.fields || {}),
      );
      return article.isActive ? [article] : [];
    }));
  } catch (error) {
    unstable_rethrow(error);
    // Preserve the existing client loading/retry flow when the server read fails.
    console.warn("Published content could not be loaded on the server.");
    return undefined;
  }
});
