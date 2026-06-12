import { ShopByCategory } from '@/widgets/ShopByCategory';

import productsData from '../../public/api/products.json';

export default function HomePage() {
  const phonesCount = productsData.filter(
    (product) => product.category === 'phones',
  ).length;

  const tabletsCount = productsData.filter(
    (product) => product.category === 'tablets',
  ).length;

  const accessoriesCount = productsData.filter(
    (product) => product.category === 'accessories',
  ).length;

  const categories = [
    {
      title: 'Mobile phones',
      href: '/phones',
      imageSrc: '/img/category-phones.png',
      modelsCount: phonesCount,
    },
    {
      title: 'Tablets',
      href: '/tablets',
      imageSrc: '/img/category-tablets.png',
      modelsCount: tabletsCount,
    },
    {
      title: 'Accessories',
      href: '/accessories',
      imageSrc: '/img/category-accessories.png',
      modelsCount: accessoriesCount,
    },
  ];

  return (
    <main className="mx-auto max-w-300 bg-brand-black px-4 py-6 sm:px-6 lg:px-8">
      <ShopByCategory categories={categories} />
    </main>
  );
}
