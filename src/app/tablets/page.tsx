import { Catalog } from '@/pages/Catalog';

import productsData from '../../../public/api/products.json';

export default function TabletsPage() {
  return <Catalog products={productsData} categoryName="Tablets" />;
}
