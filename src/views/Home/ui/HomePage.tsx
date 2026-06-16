import { getStaticProducts } from '@/entities/Product/api';
import { BASE_URL } from '@/shared/constants/constant';
import { PromoSlider } from '@/shared/ui/PromoSlider';
import { H1 } from '@/shared/ui/Typography';
import { ProductsSlider } from '@/widgets/ProductsSlider';
import { RecentlyViewedSlider } from '@/widgets/RecentlyViewedSlider';
import { ShopByCategory } from '@/widgets/ShopByCategory';

const promoSlides = [
  {
    src: `${BASE_URL}/img/BannerMain.png`,
    alt: 'Apple iPhone 14 Pro 1TB',
    href: '/phones/apple-iphone-14-pro-1tb-spaceblack',
  },
  {
    src: `${BASE_URL}/img/BannerTablet.png`,
    alt: 'Apple Watch Series 5 44mm',
    href: '/tablets/apple-ipad-pro-11-2021-2tb-spacegray',
  },
  {
    src: `${BASE_URL}/img/BannerAccessory.png`,
    alt: 'Apple Watch Series 5 44mm',
    href: '/accessories/apple-watch-series-5-44mm-space-gray',
  },
];

export const HomePage = async () => {
  const products = await getStaticProducts();

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
      imageSrc: `/img/category-phones.png`,
      modelsCount: phonesCount,
    },
    {
      title: 'Tablets',
      href: '/tablets',
      imageSrc: `/img/category-tablets.png`,
      modelsCount: tabletsCount,
    },
    {
      title: 'Accessories',
      href: '/accessories',
      imageSrc: `/img/category-accessories.png`,
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

        <RecentlyViewedSlider />
      </div>
    </main>
  );
};
