'use client';

import { useCartStore } from '@/entities/Cart';
import { useFavoritesStore } from '@/entities/Favorite';
import { Product } from '@/entities/Product';
import { Button } from '@/shared/ui/Button';
import { HeartIcon, HeartIconSelected } from '@/shared/ui/Icons';

interface ProductActionsProps {
  product: Product;
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const items = useCartStore((state) => state.items);
  const isInCart = items.some((elem) => elem.item.itemId === product.itemId);

  const addFavourite = useFavoritesStore((state) => state.addFavorite);
  const removeFavourite = useFavoritesStore((state) => state.removeFavorite);
  const favourites = useFavoritesStore((state) => state.items);
  const isFavourite = favourites.some(
    (elem) => elem.item.itemId === product.itemId,
  );

  return (
    <div className="flex gap-2">
      <Button
        variant="primary"
        type="button"
        className="h-12 flex-1 cursor-pointer"
        aria-pressed={isInCart}
        onClick={() =>
          isInCart ? removeItem(product.itemId) : addItem(product)
        }
      >
        {isInCart ? 'Added' : 'Add to cart'}
      </Button>

      <Button
        variant="favorite"
        type="button"
        aria-pressed={isFavourite}
        aria-label="Add to favorites"
        className="flex size-12 cursor-pointer items-center justify-center border border-brand-icons bg-brand-surface-2 text-brand-secondary transition-colors duration-300 hover:border-brand-white hover:text-brand-white"
        onClick={() =>
          isFavourite ? removeFavourite(product.itemId) : addFavourite(product)
        }
      >
        {isFavourite ? <HeartIconSelected /> : <HeartIcon />}
      </Button>
    </div>
  );
};
