"use client";
import { useSyncExternalStore } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { normalizeArticle, sortArticles, type Article } from "@/lib/editorial";
type Snapshot = { articles: Article[]; loading: boolean; error: boolean };
const initial: Snapshot = { articles: [], loading: true, error: false };
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
      emit({ articles, loading: false, error: false });
    },
    () => {
      clearTimeout(timeout);
      emit({ articles: [], loading: false, error: true });
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
export function usePublishedContent() {
  const value = useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => initial,
  );
  return { ...value, retry: connect };
}
