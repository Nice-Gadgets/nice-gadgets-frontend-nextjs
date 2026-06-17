'use client';

import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { createClient } from '@/shared/lib/supabase/client';
import { Button } from '@/shared/ui/Button';
import { RecentlyViewedSlider } from '@/widgets/RecentlyViewedSlider';

const supabase = createClient();

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();

    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-brand-elements)] border-t-[var(--color-brand-accent)]" />
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-[var(--color-brand-white)]">
          Мій профіль
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className=" border border-[var(--color-brand-elements)] bg-[var(--color-brand-surface-1)] p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-20 w-20 items-center justify-center bg-[var(--color-brand-elements)] text-2xl font-bold text-white shadow-md overflow-hidden">
                {user?.email?.[0].toUpperCase() || 'U'}
              </div>

              <h2 className="mt-4 text-xl font-semibold text-[var(--color-brand-white)]">
                {user?.user_metadata?.full_name || 'Користувач'}
              </h2>
              <p className="text-sm text-zinc-400 mt-1">{user?.email}</p>
            </div>

            <hr className="my-6 border-[var(--color-brand-elements)]" />

            <Button
              variant="primary"
              type="button"
              onClick={handleLogout}
              className="h-10 w-full border border-[var(--color-brand-elements)] bg-[var(--color-brand-red)] px-3 py-1.5 text-xs font-semibold text-[var(--color-brand-white)] transition-all hover:bg-[var(--color-brand-red)] hover:text-white"
            >
              Вийти
            </Button>
          </div>

          <div className="md:col-span-2 border border-[var(--color-brand-elements)] bg-[var(--color-brand-surface-1)] p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--color-brand-white)] mb-4">
              Історія замовлень
            </h3>

            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[var(--color-brand-elements)] py-12 text-center">
              <p className="text-zinc-400 text-sm">
                У вас ще немає оформлених замовлень.
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                Тут відображатимуться ваші покупки гаджетів.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 px-4">
        <RecentlyViewedSlider />
      </div>
    </>
  );
}
