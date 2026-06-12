import { FullProduct } from '../types/FullProduct';
import { ProductInterface } from '../types/ProductInterface';

export function fullProductToProductInterface(
  product: FullProduct,
): ProductInterface {
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
}
