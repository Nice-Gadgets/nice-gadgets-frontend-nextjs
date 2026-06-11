'use client';

import { useState } from 'react';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';
import { AppSelect } from '@/shared/ui/AppSelect';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import { BodyText, H1 } from '@/shared/ui/Typography';
import { ProductCard } from '@/widgets/ProductCard';

const sortOptions = ['Newest', 'Popular', 'Price_asc', 'Price_desc'];
const pagination = ['20', '30', '40', '50', '60'];

interface CatalogProps {
  products: ProductInterface[];
  categoryName: string;
  withSort?: boolean;
}

export const Catalog = ({
  products,
  categoryName,
  withSort = true,
}: CatalogProps) => {
  const [sortBy, setSortBy] = useState<string>('Newest');
  const [itemsOnPage, setItemsOnPage] = useState<string>('20');

  const productsByCategory =
    categoryName.toLowerCase() === 'favourites'
      ? products
      : products.filter((item) => item.category === categoryName.toLowerCase());

  return (
    <main className="mx-auto max-w-300 bg-brand-black px-6 min-[508px]:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: categoryName }]} />

      <div className="flex items-center">
        <H1>{categoryName}</H1>
      </div>

      <div className="flex items-center pt-2">
        <BodyText className="text-brand-secondary">
          {`${productsByCategory.length} models`}
        </BodyText>
      </div>

      {withSort && (
        <div className="flex gap-4 pt-8">
          <AppSelect
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={(newValue) => setSortBy(newValue)}
            className="min-w-34 flex-1 max-w-47"
          />

          <AppSelect
            label="Items on page"
            options={pagination}
            value={itemsOnPage}
            onChange={(newValue) => setItemsOnPage(newValue)}
            className="min-w-34"
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-x-4 gap-y-10 pt-6 min-[508px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsByCategory.map((item) => (
          <ProductCard key={item.id} product={item as ProductInterface} />
        ))}
      </div>
    </main>
  );
};
