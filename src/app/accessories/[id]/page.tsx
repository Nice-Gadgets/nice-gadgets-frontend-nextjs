import { notFound } from 'next/navigation';

import { getProduct } from '@/entities/Product/api';
import { ItemCardPage } from '@/widgets/ItemCardPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getAccessoryProduct(id: string) {
  return getProduct(id);
}

export default async function AccessoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getAccessoryProduct(id);

  if (!product) notFound();

  return <ItemCardPage product={product} />;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = await getAccessoryProduct(id);

  if (!product) return { title: 'Product not found' };

  return {
    title: product.name,
    description: product.description?.[0]?.text?.[0] || '',
  };
}
