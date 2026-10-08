"use client";
import { useMemo, useSyncExternalStore } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { normalizeArticle, sortArticles, type Article } from "@/lib/editorial";
import { resolvePublishedSnapshot, type PublishedSnapshot as Snapshot } from "@/lib/published-content";
const initial: Snapshot = { articles: [], loading: true, error: false, received: false };
let snapshot = initial;
let disconnect: (() => void) | undefined;
let timeout: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();
function emit(next: Snapshot) {
  snapshot = next;
  listeners.forEach((listener) => listener());
}
function connect() {
  clearTimeout(timeout);
  disconnect?.();
  emit({ ...snapshot, loading: true, error: false });
  timeout = setTimeout(
    () => emit({ ...snapshot, loading: false, error: true }),
    15000,
  );
  disconnect = onSnapshot(
    query(collection(db, "haberler"), where("isActive", "==", true)),
    { includeMetadataChanges: true },
    (result) => {
      const articles = sortArticles(
        result.docs
          .map((entry) => normalizeArticle(entry.id, entry.data()))
          .filter((article) => article.isActive),
      );
      if (result.metadata.fromCache && !articles.length) return;
      clearTimeout(timeout);
      emit({ articles, loading: false, error: false, received: snapshot.received || !result.metadata.fromCache });
    },
    () => {
      clearTimeout(timeout);
      emit({ ...snapshot, loading: false, error: true });
    },
  );
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) connect();
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {
      disconnect?.();
      disconnect = undefined;
      clearTimeout(timeout);
    }
  };
}
export function usePublishedContent(initialArticles?: Article[]) {
  const bootstrap = useMemo<Snapshot>(() => ({
    articles: initialArticles || [],
    loading: initialArticles === undefined,
    error: false,
    received: false,
  }), [initialArticles]);
  const value = useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => bootstrap,
  );
  return { ...resolvePublishedSnapshot(value, initialArticles), retry: connect };
}
