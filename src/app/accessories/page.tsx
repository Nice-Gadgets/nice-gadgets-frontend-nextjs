import { Catalog } from '@/widgets/Catalog';

import productsData from '../../../public/api/products.json';

export default function AccessoriesPage() {
  return <Catalog products={productsData} categoryName="Accessories" />;
}
