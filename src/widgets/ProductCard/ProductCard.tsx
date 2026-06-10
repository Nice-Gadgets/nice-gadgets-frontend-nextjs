import Image from 'next/image';
import Link from 'next/link';

import { ProductInterface } from '@/entities/types/ProductInterface';
import { Button } from '@/shared/ui/button';
import { HeartIcon } from '@/shared/ui/icons';
import { BodyText, H3, SmallText, UppercaseText } from '@/shared/ui/Typography';

interface ProductCardProps {
  product: ProductInterface;
}

const cardClassname =
  'relative box-border w-full h-full max-w-[288px] max-h-110 bg-brand-surface-1 p-8 flex flex-col justify-between select-none gap-2 min-[1200px]:max-w-68 min-[640px]:h-126.5 min-[640px]:max-h-126.5 transition-transform duration-300 ease-in-out hover:scale-102';
const imageContainer =
  'w-full h-49 flex items-center justify-center m-0 overflow-hidden';
const imageClassname = 'max-h-full object-contain';
const nameClassname =
  'text-brand-white mt-2 line-clamp-2 min-h-10.5 group-hover:text-brand-accent group-transition-colors duration-300 ease-in-out';
const priceContainer = 'flex items-center gap-2 mt-1';
const colorWhite = 'text-brand-white';
const colorSecondary = 'text-brand-secondary';
const oldPrice = 'text-brand-secondary line-through';
const divider = 'w-full h-px bg-brand-elements';
const descriptionContainer = 'flex flex-col gap-2';
const descriptionWrapper = 'flex justify-between';
const buttonsContainer = 'flex gap-2 h-12';

export const ProductCard = ({ product }: ProductCardProps) => {
  const { itemId, name, image, price, fullPrice, screen, capacity, ram } =
    product;
  return (
    <div className={cardClassname}>
      <Link
        className="group"
        href={`/products/${itemId}`}
        aria-label={`View details for ${name}`}
      >
        <div className={imageContainer}>
          <Image
            className={imageClassname}
            src={`/${image}`}
            alt={name}
            width={200}
            height={200}
          />
        </div>
        <BodyText className={nameClassname}>{name}</BodyText>
      </Link>

      <div className={priceContainer}>
        <H3 className={colorWhite}>{`${price}$`}</H3>
        {fullPrice > price && <H3 className={oldPrice}>{`${fullPrice}$`}</H3>}
      </div>

      <div className={divider} />

      <div className={descriptionContainer}>
        <div className={descriptionWrapper}>
          <SmallText className={colorSecondary}>Screen</SmallText>
          <UppercaseText className={colorWhite}>{screen}</UppercaseText>
        </div>
        <div className={descriptionWrapper}>
          <SmallText className={colorSecondary}>Capacity</SmallText>
          <UppercaseText className={colorWhite}>{capacity}</UppercaseText>
        </div>
        <div className={descriptionWrapper}>
          <SmallText className={colorSecondary}>RAM</SmallText>
          <UppercaseText className={colorWhite}>{ram}</UppercaseText>
        </div>
      </div>

      <div className={buttonsContainer}>
        <Button variant="primary" className="h-10 grow cursor-pointer">
          Add to cart
        </Button>
        <Button variant="favorite" className="cursor-pointer">
          <HeartIcon />
        </Button>
      </div>
    </div>
  );
};
