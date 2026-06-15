import { notFound } from 'next/navigation';

import { fullProductToProduct } from '@/entities/Product';
import { getProduct, getStaticProducts } from '@/entities/Product/api';
import { TrackView } from '@/entities/RecentlyViewed/ui';
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
  return;
}

export default async function PhoneDetailPage({ params }: PageProps) {
  const { id } = await params;
  const data = await getPhoneProduct(id);

  if (!data || !data.product) notFound();

  return (
    <>
      <TrackView product={data.product} />
      <ItemCardPage product={data.fullProduct} />
    </>
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
