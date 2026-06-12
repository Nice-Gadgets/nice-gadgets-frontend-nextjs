import { ProductInterface } from '@/entities/Product/types/ProductInterface';
import { ProductsSlider } from '@/shared/ui/ProductsSlider';
import { PromoSlider } from '@/shared/ui/PromoSlider';
import { H1 } from '@/shared/ui/Typography';
import { ShopByCategory } from '@/widgets/ShopByCategory';

import productsData from '../../public/api/products.json';

const products = productsData as ProductInterface[];

const promoSlides = [
  {
    src: '/img/BannerMain.png',
    alt: 'iPhone 14 Pro',
    href: '/phones',
  },
  {
    src: '/img/banner-tablets.png',
    alt: 'Tablets',
    href: '/tablets',
  },
  {
    src: '/img/banner-accessories.png',
    alt: 'Accessories',
    href: '/accessories',
  },
];

export default function HomePage() {
  const phonesCount = products.filter(
    (product) => product.category === 'phones',
  ).length;

  const tabletsCount = products.filter(
    (product) => product.category === 'tablets',
  ).length;

  const accessoriesCount = products.filter(
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

  const brandNewProducts = [...products]
    .sort((a, b) => b.year - a.year)
    .slice(0, 20);

  const hotPriceProducts = [...products]
    .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
    .slice(0, 20);

  return (
    <main className="bg-brand-black py-6">
      <div className="flex flex-col gap-14">
        <section className="mx-auto w-full max-w-300 px-4 md:px-8">
          <H1 className="mb-6">Welcome to Nice Gadgets store!</H1>

          <div className="flex justify-center">
            <PromoSlider slides={promoSlides} />
          </div>
        </section>
        <ProductsSlider title="Brand new models" products={brandNewProducts} />

        <div className="mx-auto w-full max-w-300 px-4 md:px-8">
          <ShopByCategory categories={categories} />
        </div>

        <ProductsSlider title="Hot prices" products={hotPriceProducts} />
      </div>
    </main>
  );
}
