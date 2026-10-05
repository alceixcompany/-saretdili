'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FiEdit2, FiExternalLink, FiPlus, FiTrash2, FiX } from 'react-icons/fi';
import { db } from '@/lib/firebase';
import type { CorporateReference } from '@/lib/corporate-references';

type ReferenceForm = Omit<CorporateReference, 'id' | 'createdAt' | 'updatedAt'>;

const emptyForm: ReferenceForm = {
  name: '',
  imageUrl: '',
  websiteUrl: '',
  sourceUrl: '',
  order: 0,
  isActive: true,
};

export default function AdminReferencesPage() {
  const [references, setReferences] = useState<CorporateReference[]>([]);
  const [form, setForm] = useState<ReferenceForm>(emptyForm);
  const [editingReference, setEditingReference] = useState<CorporateReference | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const fetchReferences = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const contentSnapshot = await getDoc(doc(db, 'contact_info', 'corporate_references'));
      const items = (contentSnapshot.data()?.items ?? []) as CorporateReference[];
      setReferences(items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)));
    } catch (fetchError) {
      console.error(fetchError);
      setError('Referanslar yüklenemedi. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchReferences();
  }, [fetchReferences]);

  const openCreateModal = () => {
    const nextOrder = references.length
      ? Math.max(...references.map((reference) => reference.order ?? 0)) + 1
      : 1;
    setEditingReference(null);
    setForm({ ...emptyForm, order: nextOrder });
    setIsModalOpen(true);
  };

  const openEditModal = (reference: CorporateReference) => {
    setEditingReference(reference);
    setForm({
      name: reference.name,
      imageUrl: reference.imageUrl,
      websiteUrl: reference.websiteUrl ?? '',
      sourceUrl: reference.sourceUrl ?? '',
      order: reference.order ?? 0,
      isActive: reference.isActive,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingReference(null);
    setForm(emptyForm);
    setError('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setSaving(true);
      setError('');
      const now = new Date().toISOString();
      const payload = {
        ...form,
        name: form.name.trim(),
        imageUrl: form.imageUrl.trim(),
        websiteUrl: form.websiteUrl.trim(),
        sourceUrl: form.sourceUrl?.trim() ?? '',
        order: Number(form.order),
        updatedAt: now,
      };

      const itemId = editingReference?.id ?? `reference-${Date.now()}`;
      const nextItem: CorporateReference = {
        id: itemId,
        ...payload,
        createdAt: editingReference?.createdAt ?? now,
      };
      const nextItems = editingReference
        ? references.map((item) => (item.id === editingReference.id ? nextItem : item))
        : [...references, nextItem];
      await setDoc(
        doc(db, 'contact_info', 'corporate_references'),
        { contentType: 'corporate_references', items: nextItems, updatedAt: now },
        { merge: true }
      );

      closeModal();
      await fetchReferences();
    } catch (saveError) {
      console.error(saveError);
      setError('Referans kaydedilemedi. URL ve form alanlarını kontrol edin.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (reference: CorporateReference) => {
    if (!window.confirm(`“${reference.name}” referansını silmek istediğinizden emin misiniz?`)) return;
    try {
      await setDoc(
        doc(db, 'contact_info', 'corporate_references'),
        { items: references.filter((item) => item.id !== reference.id), updatedAt: new Date().toISOString() },
        { merge: true }
      );
      await fetchReferences();
    } catch (deleteError) {
      console.error(deleteError);
      setError('Referans silinemedi. Lütfen tekrar deneyin.');
    }
  };

  const toggleActive = async (reference: CorporateReference) => {
    try {
      const now = new Date().toISOString();
      await setDoc(
        doc(db, 'contact_info', 'corporate_references'),
        {
          items: references.map((item) => item.id === reference.id ? { ...item, isActive: !item.isActive, updatedAt: now } : item),
          updatedAt: now,
        },
        { merge: true }
      );
      await fetchReferences();
    } catch (updateError) {
      console.error(updateError);
      setError('Referans durumu güncellenemedi.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">İçerik yönetimi</p>
            <h1 className="mt-2 text-2xl font-bold text-gray-900">Kurumsal Referanslar</h1>
            <p className="mt-1 text-sm text-gray-600">Ana sayfadaki kurum logolarını ve bağlantılarını yönetin.</p>
          </div>
          <button onClick={openCreateModal} className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700">
            <FiPlus /> Yeni referans
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5"><p className="text-sm text-gray-500">Toplam</p><p className="mt-1 text-3xl font-bold text-gray-900">{references.length}</p></div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5"><p className="text-sm text-gray-500">Yayında</p><p className="mt-1 text-3xl font-bold text-emerald-600">{references.filter((item) => item.isActive).length}</p></div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5"><p className="text-sm text-gray-500">Gizli</p><p className="mt-1 text-3xl font-bold text-gray-500">{references.filter((item) => !item.isActive).length}</p></div>
        </div>

        {error && !isModalOpen && <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

        <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {loading ? (
            <div className="flex min-h-64 items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-600 border-t-transparent" /></div>
          ) : references.length === 0 ? (
            <div className="px-6 py-20 text-center text-gray-500">Henüz referans eklenmedi.</div>
          ) : (
            <div className="divide-y divide-gray-100">
              {references.map((reference) => (
                <div key={reference.id} className="grid gap-4 px-5 py-4 sm:grid-cols-[80px_1fr_auto] sm:items-center">
                  <div className="flex h-16 w-20 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={reference.imageUrl} alt={`${reference.name} logosu`} className="max-h-11 max-w-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold text-gray-900">{reference.name}</h2>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${reference.isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>{reference.isActive ? 'Yayında' : 'Gizli'}</span>
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">Sıra: {reference.order}</span>
                    </div>
                    <a href={reference.websiteUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex max-w-full items-center gap-1 truncate text-sm text-amber-700 hover:underline"><FiExternalLink className="shrink-0" /> {reference.websiteUrl}</a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => void toggleActive(reference)} className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">{reference.isActive ? 'Gizle' : 'Yayınla'}</button>
                    <button onClick={() => openEditModal(reference)} aria-label={`${reference.name} düzenle`} className="rounded-lg border border-gray-200 p-2.5 text-gray-700 hover:bg-gray-50"><FiEdit2 /></button>
                    <button onClick={() => void handleDelete(reference)} aria-label={`${reference.name} sil`} className="rounded-lg border border-red-200 p-2.5 text-red-600 hover:bg-red-50"><FiTrash2 /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <div><h2 className="text-xl font-bold text-gray-900">{editingReference ? 'Referansı düzenle' : 'Yeni referans'}</h2><p className="mt-1 text-sm text-gray-500">Logo dosyası yerine doğrudan resim URL’si girin.</p></div>
              <button onClick={closeModal} className="rounded-lg p-2 text-gray-500 hover:bg-gray-100" aria-label="Pencereyi kapat"><FiX className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              {error && <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
              <label className="block"><span className="mb-2 block text-sm font-medium text-gray-700">Kurum adı *</span><input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
              <label className="block"><span className="mb-2 block text-sm font-medium text-gray-700">Logo resim URL’si *</span><input required type="url" value={form.imageUrl} onChange={(event) => setForm({ ...form, imageUrl: event.target.value })} placeholder="https://.../logo.png" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
              {form.imageUrl && <div className="flex h-28 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={form.imageUrl} alt="Logo önizleme" className="max-h-20 max-w-[240px] object-contain" /></div>}
              <label className="block"><span className="mb-2 block text-sm font-medium text-gray-700">Kurum web sitesi *</span><input required type="url" value={form.websiteUrl} onChange={(event) => setForm({ ...form, websiteUrl: event.target.value })} placeholder="https://kurum.com" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
              <label className="block"><span className="mb-2 block text-sm font-medium text-gray-700">Referans kaynak URL’si</span><input type="url" value={form.sourceUrl} onChange={(event) => setForm({ ...form, sourceUrl: event.target.value })} placeholder="https://..." className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="mb-2 block text-sm font-medium text-gray-700">Sıra</span><input type="number" min="0" value={form.order} onChange={(event) => setForm({ ...form, order: Number(event.target.value) })} className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
                <label className="flex items-center gap-3 self-end rounded-xl border border-gray-200 px-4 py-3"><input type="checkbox" checked={form.isActive} onChange={(event) => setForm({ ...form, isActive: event.target.checked })} className="h-5 w-5 rounded border-gray-300 text-amber-600" /><span className="text-sm font-medium text-gray-700">Ana sayfada yayınla</span></label>
              </div>
              <div className="flex justify-end gap-3 border-t border-gray-100 pt-5"><button type="button" onClick={closeModal} className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">Vazgeç</button><button disabled={saving} type="submit" className="rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60">{saving ? 'Kaydediliyor...' : 'Kaydet'}</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
