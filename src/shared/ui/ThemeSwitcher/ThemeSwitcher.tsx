'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="hidden h-full w-16 items-center justify-center border-l border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1 md:flex lg:w-22" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hidden h-full w-16 items-center justify-center border-l border-brand-elements text-brand-white transition-colors hover:bg-brand-surface-1 md:flex lg:w-22"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="size-5 shrink-0" />
      ) : (
        <Moon className="size-5 shrink-0" />
      )}
    </button>
  );
};
