import { notFound } from 'next/navigation';

import { getProduct, getProducts } from '@/entities/Product/api/Products';
import { ItemCardPage } from '@/pages/product-detail/ui/ItemCardPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

const accessorries = await getProducts('accessories');

export default async function AccessoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(accessorries, id);

  if (!product) notFound();

  return <ItemCardPage product={product} />;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(accessorries, id);

  if (!product) return { title: 'Product not found' };

  return {
    title: product.name,
    description: product.description[0]?.text[0],
  };
}
