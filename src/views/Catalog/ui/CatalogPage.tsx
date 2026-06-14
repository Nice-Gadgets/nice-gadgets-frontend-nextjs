import { Suspense } from 'react';

import productsData from '@/../public/api/products.json';
import { Catalog } from '@/widgets/Catalog';

interface CatalogPageProps {
  categoryName: string;
}

export const CatalogPage = ({ categoryName }: CatalogPageProps) => {
  return (
    <Suspense>
      <Catalog products={productsData} categoryName={categoryName} />
    </Suspense>
  );
};
