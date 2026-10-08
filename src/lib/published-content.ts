import type { Article } from "./editorial";

export type PublishedSnapshot = {
  articles: Article[];
  loading: boolean;
  error: boolean;
  received: boolean;
};

// Keep the server-rendered cards while the browser establishes its connection.
// An authoritative empty response must still remove unpublished/deleted posts.
export function resolvePublishedSnapshot(
  live: PublishedSnapshot,
  initialArticles?: Article[],
): PublishedSnapshot {
  return !live.received && initialArticles !== undefined
    ? { ...live, articles: initialArticles, loading: false }
    : live;
}

export type FirestoreValue = {
  stringValue?: string;
  timestampValue?: string;
  booleanValue?: boolean;
  integerValue?: string;
  doubleValue?: number;
  nullValue?: null;
  arrayValue?: { values?: FirestoreValue[] };
  mapValue?: { fields?: Record<string, FirestoreValue> };
};

export function decodeFirestoreFields(fields: Record<string, FirestoreValue>) {
  const decode = (value: FirestoreValue): unknown => {
    if ("stringValue" in value) return value.stringValue;
    if ("timestampValue" in value) return value.timestampValue;
    if ("booleanValue" in value) return value.booleanValue;
    if ("integerValue" in value) return Number(value.integerValue);
    if ("doubleValue" in value) return value.doubleValue;
    if (value.arrayValue) return (value.arrayValue.values || []).map(decode);
    if (value.mapValue) return decodeFirestoreFields(value.mapValue.fields || {});
    return null;
  };
  return Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, decode(value)]));
}
