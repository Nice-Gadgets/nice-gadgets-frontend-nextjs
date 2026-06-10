import { MainComponent } from '@/entities/components/MainComponent';
import { ProductInterface } from '@/entities/types/ProductInterface';

import productsData from '../../../public/api/products.json';

export default function AccessoriesPage() {
  return (
    <MainComponent
      products={productsData as ProductInterface[]}
      categoryName="Accessories"
    />
  );
}
