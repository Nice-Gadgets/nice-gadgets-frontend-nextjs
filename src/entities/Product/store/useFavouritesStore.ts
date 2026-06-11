import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';

interface FavoriteItem {
  item: ProductInterface;
}

export interface FavouritesStore {
  items: FavoriteItem[];
  addItem: (item: ProductInterface) => void;
  removeItem: (itemId: string) => void;
}

export const useFavouritesStore = create<FavouritesStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const exists = state.items.find(
            (elem) => elem.item.itemId === item.itemId,
          );
          if (exists) {
            return state;
          }
          return { items: [...state.items, { item }] };
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((elem) => elem.item.itemId !== itemId),
        })),
    }),
    {
      name: 'favourites-storage',
    },
  ),
);
