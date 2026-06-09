import Image from 'next/image';
import Link from 'next/link';

import { ProductInterface } from '@/entities/types/ProductInterface';
import { Button } from '@/shared/ui/button';
import { HeartIcon } from '@/shared/ui/icons';
import { BodyText, H3, SmallText, UppercaseText } from '@/shared/ui/Typography';

interface ProductCardProps {
  product: ProductInterface;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="relative box-border w-full h-full max-w-[288px] max-h-110 bg-brand-surface-1 p-8 flex flex-col justify-between select-none gap-2 min-[1200px]:max-w-68 min-[1200px]:h-126.5 min-[1200px]:max-h-126.5 transition-transform duration-300 ease-in-out hover:scale-102">
      <Link
        href={`/products/${product.itemId}`}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`View details for ${product.name}`}
      />

      <div className="w-full h-49 flex items-center justify-center m-0 overflow-hidden">
        <Image
          className="max-h-full object-contain transition-transform duration-300 ease-in-out"
          src={`/${product.image}`}
          alt={product.name}
          width={200}
          height={200}
        />
      </div>

      <BodyText className="text-brand-white mt-2 line-clamp-2 min-h-10.5">
        {product.name}
      </BodyText>

      <div className="flex items-center gap-2 mt-1">
        <H3 className="text-brand-white">{`${product.price}$`}</H3>
        {product.fullPrice > product.price && (
          <H3 className="text-brand-secondary line-through">{`${product.fullPrice}$`}</H3>
        )}
      </div>

      <div className="w-full h-px bg-brand-elements" />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <SmallText className="text-brand-secondary">Screen</SmallText>
          <UppercaseText className="text-brand-white">
            {product.screen}
          </UppercaseText>
        </div>
        <div className="flex justify-between">
          <SmallText className="text-brand-secondary">Capacity</SmallText>
          <UppercaseText className="text-brand-white">
            {product.capacity}
          </UppercaseText>
        </div>
        <div className="flex justify-between">
          <SmallText className="text-brand-secondary">RAM</SmallText>
          <UppercaseText className="text-brand-white">
            {product.ram}
          </UppercaseText>
        </div>
      </div>

      <div className="flex gap-2 h-12 relative z-20">
        <Button
          variant="primary"
          className="h-10 grow cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Add to cart
        </Button>
        <Button
          variant="favorite"
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <HeartIcon />
        </Button>
      </div>
    </div>
  );
};
