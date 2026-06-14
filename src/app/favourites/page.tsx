'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { useFavouritesStore } from '@/entities/Product/store/useFavouritesStore';
import { Button } from '@/shared/ui/button';
import { BodyText, H1 } from '@/shared/ui/Typography';
import { Catalog } from '@/widgets/Catalog';

export default function FavouritesPage() {
  const itemsFavourites = useFavouritesStore((state) => state.items);
  const products = itemsFavourites.map((elem) => elem.item);

  return (
    <Suspense>
      {products.length === 0 ? (
        <main className="h-full flex flex-col items-center justify-center px-6 pb-8 text-center">
          <div>
            <Image
              src="/img/empty-favorites.png"
              alt="Favorites is empty"
              width={400}
              height={300}
              priority
              sizes="(max-width: 640px) 100vw, 400px"
              className="w-full h-auto object-contain max-w-[400px] mb-8"
            />
            <H1 className="text-brand-white mb-4">No favorites yet</H1>
            <BodyText className="text-brand-secondary max-w-[400px] mb-8">
              You haven&apos;t added anything to your favorites yet.
            </BodyText>
            <Link href="/phones">
              <Button variant="primary" className="h-12 min-w-[200px]">
                Go to shop
              </Button>
            </Link>
          </div>
        </main>
      ) : (
        <Catalog
          products={products}
          categoryName="Favourites"
          withSort={false}
        />
      )}
    </Suspense>
  );
}
