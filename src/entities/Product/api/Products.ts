import fs from 'fs/promises';
import path from 'path';

import { FullProduct } from '@/entities/Product/types/FullProduct';

export async function getProducts(category: string): Promise<FullProduct[]> {
  const filePath = path.join(
    process.cwd(),
    'public',
    'api',
    `${category}.json`,
  );
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw);
}

export async function getProduct(products: FullProduct[], id: string) {
  return products.find((p) => p.id === id) ?? null;
}

export async function generateStaticParams(products: FullProduct[]) {
  return products.map((p) => ({ id: p.id }));
}
