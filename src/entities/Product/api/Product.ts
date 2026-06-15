import fs from 'fs/promises';
import path from 'path';

import { FullProduct, Product } from '@/entities/Product';

export const getStaticProducts = async (): Promise<Product[]> => {
  const filePath = path.join(process.cwd(), 'public', 'api', 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData) as Product[];
};

export const getProducts = async (category: string): Promise<FullProduct[]> => {
  const filePath = path.join(
    process.cwd(),
    'public',
    'api',
    `${category}.json`,
  );
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw);
};

export const getProduct = (
  products: FullProduct[],
  id: string,
): FullProduct | null => {
  return products.find((p) => p.id === id) ?? null;
};

export const generateStaticParams = async (products: FullProduct[]) => {
  return products.map((p) => ({ id: p.id }));
};
