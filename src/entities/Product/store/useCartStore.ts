import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';

interface CartItem {
  item: ProductInterface;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: ProductInterface) => void;
  removeItem: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  // clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
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
          return { items: [...state.items, { item, quantity: 1 }] };
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((elem) => elem.item.itemId !== itemId),
        })),
      increaseQuantity: (itemId) =>
        set((state) => ({
          items: state.items.map((elem) =>
            elem.item.itemId === itemId
              ? { ...elem, quantity: elem.quantity + 1 }
              : elem,
          ),
        })),
      decreaseQuantity: (itemId) =>
        set((state) => ({
          items: state.items.map((elem) =>
            elem.item.itemId === itemId && elem.quantity > 1
              ? { ...elem, quantity: elem.quantity - 1 }
              : elem,
          ),
        })),
    }),
    {
      name: 'cart-storage',
    },
  ),
);
