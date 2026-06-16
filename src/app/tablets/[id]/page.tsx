import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { fullProductToProduct } from '@/entities/Product';
import { getProduct, getStaticProducts } from '@/entities/Product/api';
import { TrackView } from '@/entities/RecentlyViewed/ui';
import { ItemCardPageSkeleton } from '@/shared/ui/Skeleton';
import { ItemCardPage } from '@/widgets/ItemCardPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getTabletProduct(id: string) {
  const products = await getStaticProducts();

  const fullProduct = await getProduct(id);
  if (!fullProduct) return null;

  return {
    fullProduct,
    product: fullProductToProduct(fullProduct, products),
  };
}

async function TableProductsContent({ id }: { id: string }) {
  const data = await getTabletProduct(id);

  if (!data || !data.product) notFound();

  return (
    <>
      <TrackView product={data.product} />
      <ItemCardPage product={data.fullProduct} />
    </>
  );
}

export default async function TabletDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<ItemCardPageSkeleton />}>
      <TableProductsContent id={id} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const data = await getTabletProduct(id);

  if (!data || !data.product) notFound();

  return {
    title: data.fullProduct.name,
    description: data.fullProduct.description?.[0]?.text?.[0] || '',
  };
}
