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

async function getPhoneProduct(id: string) {
  const products = await getStaticProducts();

  const fullProduct = await getProduct(id);
  if (!fullProduct) return null;

  return {
    fullProduct,
    product: fullProductToProduct(fullProduct, products),
  };
}

async function PhonesProductsContent({ id }: { id: string }) {
  const data = await getPhoneProduct(id);

  if (!data || !data.product) notFound();

  return (
    <>
      <TrackView product={data.product} />
      <ItemCardPage product={data.fullProduct} />
    </>
  );
}

export default async function PhoneDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<ItemCardPageSkeleton />}>
      <PhonesProductsContent id={id} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const data = await getPhoneProduct(id);

  if (!data) return { title: 'Product not found' };

  return {
    title: data.fullProduct.name,
    description: data.fullProduct.description?.[0]?.text?.[0] || '',
  };
}
