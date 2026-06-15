import { FullProduct, Product } from '@/entities/Product';
import { supabase } from '@/shared/lib/supabase/client';

export const getStaticProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Помилка Supabase (getStaticProducts):', error.message);
    return [];
  }

  return data;
};

export const getProducts = async (category: string): Promise<FullProduct[]> => {
  const { data, error } = await supabase
    .from('product_details')
    .select('*')
    .eq('category', category);

  if (error) {
    console.error(
      `Помилка Supabase (getProducts для ${category}):`,
      error.message,
    );
    return [];
  }

  return data;
};

export const getProduct = async (id: string): Promise<FullProduct | null> => {
  const { data, error } = await supabase
    .from('product_details')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Товар не знайдено:', error.message);
    return null;
  }

  return data;
};

export const generateStaticParams = async (products: FullProduct[]) => {
  return products.map((p) => ({ id: p.id }));
};
