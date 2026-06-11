import { Catalog } from '@/widgets/Catalog';

import productsData from '../../../public/api/products.json';

export default function TabletsPage() {
  return <Catalog products={productsData} categoryName="Tablets" />;
}
