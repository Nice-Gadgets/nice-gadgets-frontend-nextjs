import { Catalog } from '@/pages/Catalog';

import productsData from '../../../public/api/products.json';

export default function PhonesPage() {
  return <Catalog products={productsData} categoryName="Phones" />;
}
