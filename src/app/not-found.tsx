'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0f1014] p-6 text-center">
      <Link
        href="/"
        aria-label="Go to homepage"
        className="mb-8 w-full max-w-[400px] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8a46ff]"
      >
        <Image
          src="/img/page-not-found.png"
          alt="Page Not Found illustration"
          width={400}
          height={300}
          priority
          sizes="(max-width: 640px) 100vw, 400px"
          className="w-full h-auto object-contain"
        />
      </Link>

      <h1 className="text-white text-[40px] md:text-[56px] font-extrabold leading-none tracking-tight mb-4">
        404
      </h1>

      <p className="text-[#898a8d] text-base md:text-lg max-w-[400px] mb-2 leading-relaxed">
        Page not found. The page you are looking for doesn&apos;t exist or has
        been moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-base font-medium text-white bg-[#8a46ff] hover:bg-[#a36eff] transition-colors duration-200"
        >
          Return to Home
        </Link>

        <button
          type="button"
          onClick={handleGoBack}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-base font-medium text-white border border-[#4a4b50] hover:border-[#8a46ff] hover:bg-[#8a46ff]/10 transition-all duration-200"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
