'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFoundPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown === 0) {
      router.push('/');
      return;
    }

    const timerInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [countdown, router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0f1014] p-6 text-center">
      <div className="mb-8 w-full max-w-[400px] hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
        <Image
          src="/img/page-not-found.png"
          alt="Page Not Found"
          width={400}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      <h1 className="text-white text-[40px] md:text-[56px] font-extrabold leading-none tracking-tight mb-4">
        404
      </h1>

      <p className="text-[#898a8d] text-base md:text-lg max-w-[400px] mb-2 leading-relaxed">
        Page not found. The page you are looking for doesn&apos;t exist or has
        been moved.
      </p>

      <p className="text-[#898a8d] text-sm mb-8">
        Redirecting to home in{' '}
        <span className="text-[#8a46ff] font-bold">{countdown}</span> seconds...
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-base font-medium text-white bg-[#8a46ff] hover:bg-[#a36eff] transition-colors duration-200"
        >
          Return to Home
        </Link>

        <button
          onClick={() => router.back()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-base font-medium text-white border border-[#4a4b50] hover:border-[#8a46ff] hover:bg-[#8a46ff]/10 transition-all duration-200"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
