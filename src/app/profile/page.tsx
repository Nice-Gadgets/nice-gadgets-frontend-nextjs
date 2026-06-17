'use client';
import { useRouter } from 'next/navigation';

import { createClient } from '@/shared/lib/supabase/client';
import { Button } from '@/shared/ui/Button';

const supabase = createClient();

export default function ProfilePage() {
  const router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };
  return (
    <Button
      variant="primary"
      type="button"
      onClick={handleLogout}
      className="h-40 w-full border border-[var(--color-brand-elements)] bg-[var(--color-brand-surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--color-brand-white)] transition-all hover:bg-[var(--color-brand-red)] hover:text-white"
    >
      Вийти
    </Button>
  );
}
