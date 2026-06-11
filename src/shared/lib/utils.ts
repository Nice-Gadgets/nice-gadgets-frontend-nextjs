import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortProducts(
  products: ProductInterface[],
  sortBy: string,
): ProductInterface[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'Name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'Price_asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'Price_desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'Newest':
      return sorted.sort((a, b) => b.year - a.year);
    default:
      return sorted;
  }
}

export function paginateProducts(
  products: ProductInterface[],
  page: number,
  limit: number,
): ProductInterface[] {
  const startIndex = (page - 1) * limit;
  return products.slice(startIndex, startIndex + limit);
}
