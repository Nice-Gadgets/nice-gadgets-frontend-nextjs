import { Suspense } from 'react';

import { H2 } from '@/shared/ui/Typography';
import { CatalogPage } from '@/views/Catalog';

const AccessoriesPage = () => {
  return (
    <Suspense
      fallback={
        <div className="pt-10">
          <H2>Завантаження Tymur Aura...</H2>
        </div>
      }
    >
      <CatalogPage categoryName="Accessories" />;
    </Suspense>
  );
};

export default AccessoriesPage;
