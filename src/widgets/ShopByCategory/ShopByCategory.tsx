import Image from 'next/image';
import Link from 'next/link';

import { BodyText, H2, H4 } from '@/shared/ui/Typography';

interface CategoryItem {
  title: string;
  href: string;
  imageSrc: string;
  modelsCount: number;
}

interface ShopByCategoryProps {
  categories: CategoryItem[];
}

export const ShopByCategory = ({ categories }: ShopByCategoryProps) => {
  return (
    <section className="w-full">
      <H2 className="mb-6">Shop by category</H2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
        {categories.map(({ title, href, imageSrc, modelsCount }) => (
          <Link key={href} href={href} className="group block">
            <div className="mb-6 flex aspect-square items-center justify-center overflow-hidden bg-brand-surface-2">
              <Image
                src={imageSrc}
                alt={title}
                width={368}
                height={368}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <H4 className="mb-1 text-brand-white transition-colors group-hover:text-brand-accent">
              {title}
            </H4>

            <BodyText className="text-brand-secondary">
              {modelsCount} models
            </BodyText>
          </Link>
        ))}
      </div>
    </section>
  );
};
