import { MainComponent } from '@/pages/Catalog';

import productsData from '../../../public/api/products.json';

export default function TabletsPage() {
  return <MainComponent products={productsData} categoryName="Tablets" />;
}
