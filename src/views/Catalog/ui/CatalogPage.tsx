import { Suspense } from 'react';

import { getStaticProducts } from '@/entities/Product/api';
import { Catalog } from '@/widgets/Catalog';

interface CatalogPageProps {
  categoryName: string;
}

export const CatalogPage = async ({ categoryName }: CatalogPageProps) => {
  const products = await getStaticProducts();

  return (
    <Suspense>
      <Catalog products={products} categoryName={categoryName} />
    </Suspense>
  );
};
