'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import type { Product } from '@/entities/Product';
import { Button } from '@/shared/ui/Button';
import { ChevronRightIcon } from '@/shared/ui/Icons';
import { BodyText, H1 } from '@/shared/ui/Typography';
import { Catalog } from '@/widgets/Catalog';

interface SearchResultsProps {
  products: Product[];
}

export const SearchResults = ({ products }: SearchResultsProps) => {
  const searchParams = useSearchParams();
  const query = searchParams?.get('query') || '';
  const category = searchParams?.get('category');

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (category) {
    const categoryProducts = filtered.filter((p) => p.category === category);
    return (
      <Catalog
        products={categoryProducts}
        categoryName={category}
        withSort={false}
      />
    );
  }

  const categories = ['phones', 'tablets', 'accessories'];
  const counts = categories
    .map((cat) => ({
      name: cat,
      count: filtered.filter((p) => p.category === cat).length,
    }))
    .filter((c) => c.count > 0);

  if (counts.length === 0) {
    return (
      <main className="pt-20 px-6 max-w-300 mx-auto text-center">
        <H1>No results for &quot;{query}&quot;</H1>
        <BodyText className="text-brand-secondary mt-4">
          Try checking your spelling or use more general terms.
        </BodyText>
        <Link href="/" className="inline-block mt-8">
          <Button variant="primary" className="h-12 min-w-50">
            Back to home
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-20 px-6 max-w-300 mx-auto">
      <H1>Search results for &quot;{query}&quot;</H1>
      <div className="flex flex-col gap-4 mt-8">
        {counts.map((cat) => (
          <Link
            key={cat.name}
            href={`/search?query=${encodeURIComponent(query)}&category=${cat.name}`}
            className="flex justify-between p-4 max-w-200 bg-brand-surface-1 hover:bg-brand-elements transition-colors group"
            title="Click to view all"
          >
            <BodyText className="capitalize">{cat.name}</BodyText>
            <div className="flex items-center gap-2">
              <BodyText className="text-brand-secondary">
                {cat.count} items
              </BodyText>
              <ChevronRightIcon className="size-4 text-brand-secondary group-hover:text-brand-white transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
