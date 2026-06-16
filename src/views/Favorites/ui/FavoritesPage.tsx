'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { useFavoritesStore } from '@/entities/Favorite';
import { BASE_URL } from '@/shared/constants/constant';
import { Button } from '@/shared/ui/Button';
import { BodyText, H1 } from '@/shared/ui/Typography';
import { Catalog } from '@/widgets/Catalog';

export const FavoritesPage = () => {
  const itemsFavorites = useFavoritesStore((state) => state.items);
  const products = itemsFavorites.map((elem) => elem.item);

  return (
    <Suspense fallback={null}>
      {products.length === 0 ? (
        <main className="h-full flex flex-col items-center justify-center px-6 pb-8 text-center">
          <div>
            <Image
              src={`${BASE_URL}/img/empty-favorites.png`}
              alt="Favorites is empty"
              width={400}
              height={300}
              priority
              sizes="(max-width: 640px) 100vw, 400px"
              className="w-full h-auto object-contain max-w-xs mb-8"
            />
            <H1 className="text-brand-white mb-4">No favorites yet</H1>
            <BodyText className="text-brand-secondary max-w-xs mb-8">
              You haven&apos;t added anything to your favorites yet.
            </BodyText>
            <Link href="/phones">
              <Button variant="primary" className="h-12 min-w-50">
                Go to shop
              </Button>
            </Link>
          </div>
        </main>
      ) : (
        <Catalog
          products={products}
          categoryName="Favorites"
          withSort={false}
        />
      )}
    </Suspense>
  );
};
