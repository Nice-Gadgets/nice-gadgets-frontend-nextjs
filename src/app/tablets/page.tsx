import { Suspense } from 'react';

import { H2 } from '@/shared/ui/Typography';
import { CatalogPage } from '@/views/Catalog';

const TabletsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="pt-10">
          <H2>Завантаження Tymur Aura...</H2>
        </div>
      }
    >
      <CatalogPage categoryName="Tablets" />;
    </Suspense>
  );
};

export default TabletsPage;
