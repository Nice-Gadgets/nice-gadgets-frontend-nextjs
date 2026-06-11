'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';
import { paginateProducts, sortProducts } from '@/shared/lib/utils';
import { AppSelect } from '@/shared/ui/AppSelect';
import { Pagination } from '@/shared/ui/Pagination';
import { BodyText, H1 } from '@/shared/ui/Typography';
import { ProductCard } from '@/widgets/ProductCard';

const sortOptions = ['Name', 'Price_asc', 'Price_desc', 'Newest'];
const paginationOptions = ['20', '30', '40', '50', '60'];

interface CatalogProps {
  products: ProductInterface[];
  categoryName: string;
  withSort?: boolean;
}

export const Catalog = ({
  products,
  categoryName,
  withSort = true,
}: CatalogProps) => {
  const productsByCategory =
    categoryName.toLowerCase() === 'favourites'
      ? products
      : products.filter((item) => item.category === categoryName.toLowerCase());

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortBy = searchParams.get('sort') || 'Name';
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = Number(searchParams.get('limit')) || 20;

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    if (key !== 'page') {
      params.set('page', '1');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const sortedProducts = sortProducts(productsByCategory, sortBy);
  const paginatedProducts = paginateProducts(
    sortedProducts,
    currentPage,
    itemsPerPage,
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const isShowPagination = totalPages > 1;

  return (
    <main className="bg-brand-black pb-20 px-6 min-[508px]:px-6 lg:px-8 max-w-300 mx-auto">
      <div className="flex items-center pt-6">
        <H1>{categoryName}</H1>
      </div>
      <div className="flex items-center pt-2">
        <BodyText className="text-brand-secondary">{`${productsByCategory.length} models`}</BodyText>
      </div>
      {withSort && (
        <div className="flex pt-8 gap-4">
          <AppSelect
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={(newValue) => updateParams('sort', newValue)}
            className="min-w-34 flex-1 max-w-47"
          />
          <AppSelect
            label="Items on page"
            options={paginationOptions}
            value={String(itemsPerPage)}
            onChange={(newValue) => updateParams('limit', newValue)}
            className="min-w-34"
          />
        </div>
      )}
      <div className="grid grid-cols-1 pb-10 pt-6 min-[508px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4">
        {paginatedProducts.map((item) => (
          <ProductCard key={item.id} product={item as ProductInterface} />
        ))}
      </div>
      {isShowPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => updateParams('page', String(page))}
        />
      )}
    </main>
  );
};
