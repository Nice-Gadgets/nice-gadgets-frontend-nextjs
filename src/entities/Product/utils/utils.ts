import { FullProduct, Product } from '@/entities/Product';

export const sortProducts = (
  products: Product[],
  sortBy: string,
): Product[] => {
  switch (sortBy) {
    case 'Name':
      return products.toSorted((a, b) => a.name.localeCompare(b.name));
    case 'Price_asc':
      return products.toSorted((a, b) => a.price - b.price);
    case 'Price_desc':
      return products.toSorted((a, b) => b.price - a.price);
    case 'Newest':
      return products.toSorted((a, b) => b.year - a.year);
    default:
      return products;
  }
};

export const paginateProducts = (
  products: Product[],
  page: number,
  limit: number,
): Product[] => {
  const startIndex = (page - 1) * limit;
  return products.slice(startIndex, startIndex + limit);
};

export const fullProductToProduct = (product: FullProduct): Product => {
  return {
    id: Number(product.id),
    category: product.category,
    itemId: product.id,
    name: product.name,
    fullPrice: product.priceRegular,
    price: product.priceDiscount,
    screen: product.screen,
    capacity: product.capacity,
    color: product.color,
    ram: product.ram,
    year: 0,
    image: product.images[0],
  };
};
