import { notFound } from 'next/navigation';

import { getProduct, getProducts } from '@/entities/Product/api';
import { ItemCardPage } from '@/widgets/ItemCardPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getTabletProduct(id: string) {
  const tablets = await getProducts('tablets');
  return getProduct(tablets, id);
}

export default async function TabletDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getTabletProduct(id);

  if (!product) notFound();

  return <ItemCardPage product={product} />;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = await getTabletProduct(id);

  if (!product) return { title: 'Product not found' };

  return {
    title: product.name,
    description: product.description?.[0]?.text?.[0] || '',
  };
}
