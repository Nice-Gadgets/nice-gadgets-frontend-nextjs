import { Suspense } from 'react';

import { H2 } from '@/shared/ui/Typography';
import { SearchPage } from '@/views/Search/ui/SearchPage';

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="pt-10">
          <H2>Loading search results...</H2>
        </div>
      }
    >
      <SearchPage />
    </Suspense>
  );
};

export default Page;
