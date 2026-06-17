import { Suspense } from 'react';

import { HomePageSkeleton } from '@/shared/ui/Skeleton';
import { HomePage } from '@/views/Home';

export default function Page() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePage />
    </Suspense>
  );
}
