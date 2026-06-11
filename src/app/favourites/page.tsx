'use client';

import { Suspense } from 'react';

import { useFavouritesStore } from '@/entities/Product/store/useFavouritesStore';
import { Catalog } from '@/widgets/Catalog';

export default function FavouritesPage() {
  const itemsFavourites = useFavouritesStore((state) => state.items);
  const products = itemsFavourites.map((elem) => elem.item);

  return (
    <Suspense>
      <Catalog products={products} categoryName="Favourites" withSort={false} />
    </Suspense>
  );
}
