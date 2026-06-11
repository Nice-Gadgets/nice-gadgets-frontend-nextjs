import { Suspense } from 'react';

import { Catalog } from '@/widgets/Catalog';

import productsData from '../../../public/api/products.json';

export default function TabletsPage() {
  return (
    <Suspense>
      <Catalog products={productsData} categoryName="Tablets" />
    </Suspense>
  );
}
