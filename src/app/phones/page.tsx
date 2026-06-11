import { Suspense } from 'react';

import { Catalog } from '@/widgets/Catalog';

import productsData from '../../../public/api/products.json';

export default function PhonesPage() {
  return (
    <Suspense>
      <Catalog products={productsData} categoryName="Phones" />
    </Suspense>
  );
}
