'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { 
  FiImage, 
  FiFileText, 
  FiFolder, 
  FiMessageSquare, 
  FiRefreshCw,
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiArrowRight,
  FiPhone
} from 'react-icons/fi';
import CreateAdminModal from '@/components/CreateAdminModal';
import { useAppSelector } from '@/store/hooks';

interface DashboardStats {
  totalGalleryItems: number;
  totalCategories: number;
  totalNews: number;
  totalMessages: number;
  callCounter: number;
  activeNews: number;
  featuredNews: number;
  activeCategories: number;
  featuredGalleryItems: number;
}

interface RecentActivity {
  id: string;
  type: 'news' | 'gallery' | 'message' | 'category';
  title: string;
  description: string;
  timestamp: Timestamp;
  action: string;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Timestamp;
}

interface GalleryCategory {
  id: string;
  name: string;
  isActive: boolean;
}

interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isActive: boolean;
  featured: boolean;
  createdAt: Timestamp;
}

interface ContactMessage {
  id: string;
  name: string;
  message: string;
  status: string;
  createdAt: Timestamp;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalGalleryItems: 0,
    totalCategories: 0,
    totalNews: 0,
    totalMessages: 0,
    callCounter: 0,
    activeNews: 0,
    featuredNews: 0,
    activeCategories: 0,
    featuredGalleryItems: 0
  });
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateAdminModal, setShowCreateAdminModal] = useState(false);

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Call counter'ı Redux'tan al
  useEffect(() => {
    const fetchCallCounter = async () => {
      try {
        const counterSnapshot = await getDocs(collection(db, 'call_counter'));
        if (!counterSnapshot.empty) {
          const currentCount = counterSnapshot.docs[0].data().count || 0;
          setStats(prev => ({ ...prev, callCounter: currentCount }));
        }
      } catch (error) {
        console.error('Call counter fetch error:', error);
      }
    };

    fetchCallCounter();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all collections
      const [galleryItemsSnapshot, categoriesSnapshot, newsSnapshot, messagesSnapshot, callCounterSnapshot] = await Promise.all([
        getDocs(collection(db, 'gallery_items')),
        getDocs(collection(db, 'gallery_categories')),
        getDocs(collection(db, 'haberler')),
        getDocs(collection(db, 'contact_messages')),
        getDocs(collection(db, 'call_counter'))
      ]);

      // Process gallery items
      const galleryItems = galleryItemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryItem[];
      
      // Process categories
      const categories = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryCategory[];
      
      // Process news
      const news = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as NewsItem[];
      
      // Process messages
      const messages = messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ContactMessage[];
      
      // Process call counter
      const callCounter = callCounterSnapshot.empty ? 0 : callCounterSnapshot.docs[0].data().count || 0;

      // Calculate stats
      const newStats: DashboardStats = {
        totalGalleryItems: galleryItems.length,
        totalCategories: categories.length,
        totalNews: news.length,
        totalMessages: messages.length,
        callCounter: callCounter,
        activeNews: news.filter(item => item.isActive).length,
        featuredNews: news.filter(item => item.featured).length,
        activeCategories: categories.filter(item => item.isActive).length,
        featuredGalleryItems: galleryItems.filter(item => item.isFeatured).length
      };

      setStats(newStats);

      // Generate recent activities
      const activities: RecentActivity[] = [];
      
      // Helper function to safely get timestamp
      const getTimestamp = (timestamp: unknown): number => {
        if (!timestamp) return 0;
        if (typeof (timestamp as { toDate?: () => Date }).toDate === 'function') {
          return (timestamp as { toDate: () => Date }).toDate().getTime();
        }
        if (timestamp instanceof Date) {
          return timestamp.getTime();
        }
        if (typeof timestamp === 'string' || typeof timestamp === 'number') {
          return new Date(timestamp).getTime();
        }
        return 0;
      };
      
      // Add recent news
      const recentNews = news
        .filter(item => item.isActive && item.createdAt)
        .sort((a, b) => {
          const aTime = getTimestamp(a.createdAt);
          const bTime = getTimestamp(b.createdAt);
          return bTime - aTime;
        })
        .slice(0, 3);
      
      recentNews.forEach(item => {
        if (item.createdAt) {
          activities.push({
            id: item.id,
            type: 'news',
            title: item.title,
            description: item.subtitle || item.description,
            timestamp: item.createdAt,
            action: 'Yeni içerik eklendi'
          });
        }
      });

      // Add recent gallery items
      const recentGalleryItems = galleryItems
        .filter(item => item.isActive && item.createdAt)
        .sort((a, b) => {
          const aTime = getTimestamp(a.createdAt);
          const bTime = getTimestamp(b.createdAt);
          return bTime - aTime;
        })
        .slice(0, 2);
      
      recentGalleryItems.forEach(item => {
        if (item.createdAt) {
          activities.push({
            id: item.id,
            type: 'gallery',
            title: item.title,
            description: item.description,
            timestamp: item.createdAt,
            action: 'Yeni galeri resmi eklendi'
          });
        }
      });

      // Add recent messages
      const recentMessages = messages
        .filter(item => item.status === 'new' && item.createdAt)
        .sort((a, b) => {
          const aTime = getTimestamp(a.createdAt);
          const bTime = getTimestamp(b.createdAt);
          return bTime - aTime;
        })
        .slice(0, 2);
      
      recentMessages.forEach(item => {
        if (item.createdAt) {
          activities.push({
            id: item.id,
            type: 'message',
            title: item.name,
            description: item.message.substring(0, 50) + '...',
            timestamp: item.createdAt,
            action: 'Yeni mesaj'
          });
        }
      });

      // Sort activities by timestamp
      activities.sort((a, b) => getTimestamp(b.timestamp) - getTimestamp(a.timestamp));
      
      setRecentActivities(activities.slice(0, 5));

    } catch (error) {
      console.error('Dashboard verisi yüklenirken hata:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (timestamp: unknown) => {
    if (!timestamp) return 'Bilinmiyor';
    
    try {
      const now = new Date();
      let time: Date;
      
      if (typeof (timestamp as { toDate?: () => Date }).toDate === 'function') {
        time = (timestamp as { toDate: () => Date }).toDate();
      } else if (timestamp instanceof Date) {
        time = timestamp;
      } else {
        time = new Date(timestamp as string | number);
      }
      
      const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
      
      if (diffInHours < 1) return 'Az önce';
      if (diffInHours < 24) return `${diffInHours} saat önce`;
      
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) return `${diffInDays} gün önce`;
      
      return time.toLocaleDateString('tr-TR');
    } catch (error) {
      console.error('Timestamp format error:', error);
      return 'Bilinmiyor';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'news':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#171614]/8 bg-[#f0eadf] text-[#8d6829]">
            <FiFileText className="h-4 w-4" />
          </div>
        );
      case 'gallery':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#171614]/8 bg-[#f0eadf] text-[#8d6829]">
            <FiImage className="h-4 w-4" />
          </div>
        );
      case 'message':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#171614]/8 bg-[#f0eadf] text-[#8d6829]">
            <FiMessageSquare className="h-4 w-4" />
          </div>
        );
      default:
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#171614]/8 bg-[#f0eadf] text-[#8d6829]">
            <FiClock className="h-4 w-4" />
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-full items-center justify-center bg-[#f3f0e9] p-6">
        <div className="rounded-2xl border border-[#171614]/10 bg-[#fbfaf7] px-10 py-9 text-center shadow-[0_18px_45px_rgba(23,22,20,0.07)]">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-[#b58a42]/25 border-t-[#8d6829]" />
            <p className="text-sm text-[#6e685f]">Yönetim paneli hazırlanıyor...</p>
        </div>
      </div>
    );
  }

  const statCards = [
    { label: 'Haber & Blog', value: stats.totalNews, detail: `${stats.activeNews} aktif`, icon: FiFileText, href: '/admin/haberler' },
    { label: 'Galeri', value: stats.totalGalleryItems, detail: `${stats.featuredGalleryItems} öne çıkan`, icon: FiImage, href: '/admin/galeri' },
    { label: 'Kategoriler', value: stats.totalCategories, detail: `${stats.activeCategories} aktif`, icon: FiFolder, href: '/admin/galeri' },
    { label: 'Mesajlar', value: stats.totalMessages, detail: 'Toplam iletişim', icon: FiMessageSquare, href: '/admin/mesajlar' },
    { label: 'Telefon', value: stats.callCounter, detail: 'Toplam arama', icon: FiPhone, href: '/admin/mesajlar' },
  ];

  const quickLinks = [
    { title: 'Blog yazılarını yönetin', description: 'Blog içeriklerini ve beş dilde çevirilerini düzenleyin.', icon: FiFileText, href: '/admin/blog', action: 'Blog' },
    { title: 'Haberleri yönetin', description: 'Duyuruları oluşturun, yayın durumlarını ve sıralamayı düzenleyin.', icon: FiFileText, href: '/admin/haberler', action: 'Haberler' },
    { title: 'Galeriyi düzenleyin', description: 'Görselleri, kategorileri ve öne çıkan içerikleri tek alanda yönetin.', icon: FiImage, href: '/admin/galeri', action: 'Galeri' },
    { title: 'Mesajları inceleyin', description: 'İletişim taleplerini görüntüleyin, durum ve öncelik bilgilerini güncelleyin.', icon: FiMessageSquare, href: '/admin/mesajlar', action: 'Mesajlar' },
  ];

  return (
    <div className="min-h-full bg-[#f3f0e9] text-[#1d1c19]">
      <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-20 sm:px-7 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-6 border-b border-[#171614]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center">
            <p className="text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d6829]">TİD Yönetim</p>
            <h1 className="mt-3 text-left font-serif text-4xl tracking-[-0.025em] text-[#1d1c19] sm:text-5xl">Genel görünüm</h1>
            <p className="mt-3 text-left text-sm text-[#716b62]">İçerikleri ve iletişim verilerini tek ekrandan takip edin.</p>
          </div>

          {user?.isStaticAdmin && (
            <button
              onClick={() => setShowCreateAdminModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d1c19] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8d6829]"
            >
              <FiUsers className="h-4 w-4" />
              Yeni yönetici
            </button>
          )}
        </header>

        {user && (
          <section className="mt-8 overflow-hidden rounded-[20px] bg-[#1d1c19] p-6 text-white shadow-[0_22px_55px_rgba(23,22,20,0.15)] sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/8 text-[#dfb66c]">
                  <FiUsers className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/48">Oturum açık</p>
                  <h2 className="mt-1 text-lg font-semibold">Hoş geldiniz, {user.displayName || user.email}</h2>
                  <p className="mt-1 text-xs text-white/50">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {user.isStaticAdmin ? 'Ana yönetici' : 'Yetkili yönetici'}
              </div>
            </div>
          </section>
        )}

        <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.label} href={card.href} className="group rounded-[18px] border border-[#171614]/10 bg-[#fbfaf7] p-5 shadow-[0_12px_35px_rgba(23,22,20,0.045)] transition hover:-translate-y-0.5 hover:border-[#9a732f]/35 hover:shadow-[0_18px_42px_rgba(23,22,20,0.08)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eee6d8] text-[#8d6829]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <FiArrowRight className="h-4 w-4 text-[#aaa399] transition-transform group-hover:translate-x-1 group-hover:text-[#8d6829]" />
                </div>
                <p className="mt-5 font-serif text-3xl text-[#1d1c19]">{card.value}</p>
                <p className="mt-1 text-sm font-semibold text-[#3e3a34]">{card.label}</p>
                <p className="mt-1 text-[11px] text-[#898278]">{card.detail}</p>
              </Link>
            );
          })}
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d6829]">Hızlı erişim</p>
              <h2 className="mt-2 font-serif text-3xl text-[#1d1c19]">Yönetim araçları</h2>
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href} className="group flex min-h-[210px] flex-col rounded-[18px] border border-[#171614]/10 bg-[#fbfaf7] p-6 shadow-[0_12px_35px_rgba(23,22,20,0.045)] transition hover:border-[#9a732f]/35 hover:shadow-[0_18px_42px_rgba(23,22,20,0.08)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#171614]/8 bg-[#f0eadf] text-[#8d6829]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#26231f]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#756f66]">{item.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#8d6829]">{item.action}<FiArrowRight className="transition-transform group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-[18px] border border-[#171614]/10 bg-[#fbfaf7] shadow-[0_12px_35px_rgba(23,22,20,0.045)]">
            <div className="flex items-center justify-between border-b border-[#171614]/10 px-6 py-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8d6829]">Son hareketler</p>
                <h2 className="mt-1 text-lg font-semibold text-[#26231f]">Güncel aktiviteler</h2>
              </div>
              <button onClick={fetchDashboardData} className="inline-flex items-center gap-2 rounded-lg border border-[#171614]/10 px-3 py-2 text-xs font-semibold text-[#5f5951] transition hover:border-[#8d6829]/40 hover:text-[#8d6829]">
                <FiRefreshCw className="h-3.5 w-3.5" />
                Yenile
              </button>
            </div>
            <div className="p-3 sm:p-5">
            {recentActivities.length > 0 ? (
              <div>
                {recentActivities.map((activity) => (
                  <div key={`${activity.type}-${activity.id}`} className="flex items-center justify-between gap-4 border-b border-[#171614]/8 px-2 py-4 last:border-b-0">
                    <div className="flex min-w-0 items-center gap-3">
                      {getActivityIcon(activity.type)}
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#322f2a]">{activity.action}</p>
                        <p className="mt-1 truncate text-xs text-[#7d766d]">
                          {activity.type === 'message' ? `${activity.title}: ${activity.description}` : activity.title}
                        </p>
                      </div>
                    </div>
                    <p className="shrink-0 text-[11px] text-[#918a80]">{formatTimeAgo(activity.timestamp)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0eadf] text-[#8d6829]">
                  <FiTrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-[#322f2a]">Henüz aktivite yok</h3>
                <p className="mt-2 text-sm text-[#7d766d]">Yeni içerikler eklendiğinde burada listelenecek.</p>
              </div>
            )}
          </div>
          </div>

          <aside className="rounded-[18px] bg-[#1d1c19] p-6 text-white shadow-[0_18px_45px_rgba(23,22,20,0.13)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dfb66c]">Yayın durumu</p>
            <h2 className="mt-3 font-serif text-3xl">İçerik özeti</h2>
            <div className="mt-7 space-y-5">
              {[
                ['Aktif haber', stats.activeNews, stats.totalNews],
                ['Öne çıkan haber', stats.featuredNews, stats.totalNews],
                ['Aktif kategori', stats.activeCategories, stats.totalCategories],
                ['Öne çıkan görsel', stats.featuredGalleryItems, stats.totalGalleryItems],
              ].map(([label, value, total]) => {
                const numericValue = Number(value);
                const numericTotal = Number(total);
                const width = numericTotal > 0 ? Math.min(100, Math.round((numericValue / numericTotal) * 100)) : 0;
                return (
                  <div key={String(label)}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/62">{label}</span>
                      <span className="font-semibold text-white">{numericValue}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[#d8ad5d]" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <Link href="/admin/ayarlar" className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-white/80 transition hover:text-[#dfb66c]">
              Panel ayarları
              <FiArrowRight />
            </Link>
          </aside>
        </section>
      </div>

      <CreateAdminModal isOpen={showCreateAdminModal} onClose={() => setShowCreateAdminModal(false)} />
    </div>
  );
};

export default AdminDashboard;
