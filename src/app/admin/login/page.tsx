'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { tidImages } from '@/lib/tid-images';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiLock, FiMail, FiEye, FiEyeOff, FiArrowRight, FiShield } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loginUser, loginWithStaticAdmin, clearError, checkDatabaseAdmins, STATIC_ADMIN_EMAIL } from '@/store/slices/authSlice';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const dispatch = useAppDispatch();
  const { user, isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    dispatch(checkDatabaseAdmins());
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && user) {
      router.push('/admin');
    }
  }, [isAuthenticated, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      if (email.trim().toLowerCase() === STATIC_ADMIN_EMAIL) {
        await dispatch(loginWithStaticAdmin({ email, password })).unwrap();
      } else {
        await dispatch(loginUser({ email, password })).unwrap();
      }
      
      router.push('/admin');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#1d1c19] lg:grid lg:grid-cols-[1.08fr_0.92fr]">
      <section className="relative hidden min-h-screen overflow-hidden bg-[#171512] text-white lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
        <Image
          src={tidImages.adminLogin}
          alt="TİD tercüme ofisi"
          fill
          priority
          className="object-cover object-[63%_center]"
          sizes="55vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,13,11,0.82)_0%,rgba(14,13,11,0.45)_55%,rgba(14,13,11,0.14)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-black/30" />

        <div className="relative flex items-center gap-3">
          <Image src="/tid/icon.svg" alt="TİD Tercüme" width={52} height={52} className="h-12 w-12 rounded-sm object-contain" />
          <div>
            <p className="text-sm font-semibold tracking-[0.1em]">TİD</p>
            <p className="mt-1 text-[10px] tracking-[0.2em] text-white/65">TERCÜME</p>
          </div>
        </div>

        <div className="relative max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e1bd78]">Yönetim alanı</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.08] tracking-[-0.03em] xl:text-6xl">İçerik ve hizmet yönetimi, tek ekranda.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/68">Haberleri, mesajları, galeriyi ve hizmet bölgelerini yönetim panelinden düzenleyin.</p>
        </div>

        <div className="relative flex items-center gap-2 text-xs text-white/58">
          <FiShield className="h-4 w-4 text-[#e1bd78]" />
          Yetkili kullanıcı erişimi
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <Image src="/tid/icon.svg" alt="TİD Tercüme" width={48} height={48} className="h-11 w-11 rounded-sm object-contain" priority />
            <div>
              <p className="text-sm font-semibold tracking-[0.1em]">TİD</p>
              <p className="mt-0.5 text-[10px] tracking-[0.2em] text-[#8d6a30]">TERCÜME</p>
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#171614]/10 bg-white text-[#8d6a30] shadow-sm">
            <FiLock className="h-5 w-5" />
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#1d1c19]">Yönetim paneline giriş</h1>
          <p className="mt-3 text-sm leading-7 text-[#706a61]">Devam etmek için yetkili hesap bilgilerinizi girin.</p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div>
              <label htmlFor="admin-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#504b44]">E-posta</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a732f]" />
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#171614]/12 bg-white py-4 pl-11 pr-4 text-sm text-[#1d1c19] outline-none transition placeholder:text-[#a29c92] focus:border-[#9a732f] focus:ring-4 focus:ring-[#9a732f]/8"
                  placeholder="E-posta adresiniz"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="admin-password" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#504b44]">Şifre</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a732f]" />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-[#171614]/12 bg-white py-4 pl-11 pr-12 text-sm text-[#1d1c19] outline-none transition placeholder:text-[#a29c92] focus:border-[#9a732f] focus:ring-4 focus:ring-[#9a732f]/8"
                  placeholder="Şifreniz"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777168] transition-colors hover:text-[#8d6a30]"
                  aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                >
                  {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#1d1c19] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8d6a30] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-[#aaa49a]"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Giriş yapılıyor...
                </>
              ) : (
                <>
                  Giriş yap
                  <FiArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-between border-t border-[#171614]/10 pt-5 text-[11px] text-[#817b72]">
            <span>İçerik yönetim erişimi</span>
            <span>© {new Date().getFullYear()} TİD</span>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AdminLogin;
