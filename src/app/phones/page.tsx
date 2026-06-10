'use client';
import { useState } from 'react';

import { ProductInterface } from '@/entities/types/ProductInterface';
import { AppSelect } from '@/shared/ui/AppSelect';
import { ProductCard } from '@/widgets/ProductCard';

import productsData from '../../../public/api/products.json';

const sortOptions = [
  { value: 'popular', label: 'popular' },
  { value: 'price_asc', label: 'price_asc' },
  { value: 'price_desc', label: 'price_desc' },
  { value: 'newest', label: 'newest' },
];

const product1 = productsData[0] as ProductInterface;

export default function PhonesPage() {
  const [sortBy, setSortBy] = useState<string>('newest');
  return (
    <main className="bg-brand-secondary">
      Hello World
      <div className="p-4 bg-brand-green">
        <AppSelect
          label="filter by"
          options={sortOptions}
          value={sortBy}
          onChange={(newValue) => setSortBy(newValue)}
          className="w-44"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
      </div>
    </main>
  );
}
