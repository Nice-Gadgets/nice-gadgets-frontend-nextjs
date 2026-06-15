import { notFound } from 'next/navigation';

import { fullProductToProduct } from '@/entities/Product';
import {
  getProduct,
  getProducts,
  getStaticProducts,
} from '@/entities/Product/api';
import { TrackView } from '@/entities/RecentlyViewed/ui';
import { ItemCardPage } from '@/widgets/ItemCardPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getTabletProduct(id: string) {
  const [tablets, products] = await Promise.all([
    getProducts('tablets'),
    getStaticProducts(),
  ]);

  const fullProduct = getProduct(tablets, id);
  if (!fullProduct) return null;

  return {
    fullProduct,
    product: fullProductToProduct(fullProduct, products),
  };
}

export default async function TabletDetailPage({ params }: PageProps) {
  const { id } = await params;
  const data = await getTabletProduct(id);

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
  const data = await getTabletProduct(id);

  if (!data || !data.product) notFound();

  return {
    title: data.fullProduct.name,
    description: data.fullProduct.description?.[0]?.text?.[0] || '',
  };
}
