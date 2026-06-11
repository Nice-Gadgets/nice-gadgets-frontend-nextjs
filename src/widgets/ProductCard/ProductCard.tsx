'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useCartStore } from '@/entities/Product/store/useCartStore';
import { useFavouritesStore } from '@/entities/Product/store/useFavouritesStore';
import { ProductInterface } from '@/entities/Product/types/ProductInterface';
import { Button } from '@/shared/ui/button';
import { HeartIcon, HeartIconSelected } from '@/shared/ui/icons';
import { BodyText, H3, SmallText, UppercaseText } from '@/shared/ui/Typography';

interface ProductCardProps {
  product: ProductInterface;
}

const cardClassname =
  'relative box-border w-full min-h-126.5 flex flex-col justify-between p-8 bg-brand-surface-1 gap-1 transition-transform duration-300 ease-in-out hover:scale-102 h-full min-[508px]:h-126.5 min-[1200px]:w-68';
const imageContainer =
  'w-full h-50 flex items-center justify-center m-0 overflow-hidden';
const imageClassname = 'h-50 object-contain w-full';
const nameClassname =
  'text-brand-white line-clamp-2 pt-4 h-14 group-hover:text-brand-accent transition-colors duration-300 ease-in-out';
const priceContainer = 'flex items-center gap-2 mt-1';
const colorWhite = 'text-brand-white';
const colorSecondary = 'text-brand-secondary';
const oldPrice = 'text-brand-secondary line-through';
const divider = 'w-full h-px bg-brand-elements';
const descriptionContainer = 'flex flex-col gap-2';
const descriptionWrapper = 'flex justify-between';
const buttonsContainer = 'flex gap-2 h-12';

export const ProductCard = ({ product }: ProductCardProps) => {
  const {
    itemId,
    name,
    category,
    image,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = product;

  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const isInCart = items.some((elem) => elem.item.itemId === product.itemId);

  const addFavourite = useFavouritesStore((state) => state.addItem);
  const removeFavourite = useFavouritesStore((state) => state.removeItem);
  const favourites = useFavouritesStore((state) => state.items);
  const isFavourite = favourites.some(
    (elem) => elem.item.itemId === product.itemId,
  );

  return (
    <div className={cardClassname}>
      <Link
        className="group"
        href={`/${category}/${itemId}`}
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
        <Button
          variant="primary"
          className="h-10 grow cursor-pointer"
          aria-pressed={isInCart}
          onClick={() => addItem(product)}
        >
          {isInCart ? 'Added' : 'Add to cart'}
        </Button>
        <Button
          variant="favorite"
          className="cursor-pointer"
          aria-pressed={isFavourite}
          onClick={() =>
            isFavourite
              ? removeFavourite(product.itemId)
              : addFavourite(product)
          }
        >
          {isFavourite ? <HeartIconSelected /> : <HeartIcon />}
        </Button>
      </div>
    </div>
  );
};
