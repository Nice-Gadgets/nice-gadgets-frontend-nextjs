import { NextResponse } from 'next/server';

import { createClient } from '@/shared/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  console.log('=== CALLBACK URL ВХІДНОГО ЗАПИТУ ===', request.url);
  console.log(
    'ЗНАЙДЕНІ ПАРАМЕТРИ:',
    Object.fromEntries(searchParams.entries()),
  );
  const code = searchParams.get('code');
  const next =
    searchParams.get('next') ?? searchParams.get('forwarded_next') ?? '/';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Створюємо безпечний URL об'єкт відносно нашого сайту
      // Якщо next — це "/profile", отримаємо http://localhost:3000/profile
      // Якщо next — це "https://evil.com/profile", об'єкт URL зорієнтується і візьме зовнішній сайт
      const safeRedirectUrl = new URL(next, origin);

      // Перевіряємо, чи хост збігається з нашим сайтом (захист від фішингу)
      if (safeRedirectUrl.origin === origin) {
        return NextResponse.redirect(safeRedirectUrl.href);
      }

      // Якщо хост чужий — примусово шлемо на головну
      return NextResponse.redirect(`${origin}/`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
