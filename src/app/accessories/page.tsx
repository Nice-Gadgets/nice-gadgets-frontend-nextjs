import { ProductInterface } from '@/entities/types/ProductInterface';
import { MainComponent } from '@/pages/Catalog';

import productsData from '../../../public/api/products.json';

export default function AccessoriesPage() {
  return (
    <MainComponent
      products={productsData as ProductInterface[]}
      categoryName="Accessories"
    />
  );
}
