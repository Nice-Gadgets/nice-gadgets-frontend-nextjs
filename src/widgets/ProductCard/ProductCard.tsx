import './ProductCard.css';

import Image from 'next/image';

import { Button } from '@/shared/ui/button';
import { HeartIcon } from '@/shared/ui/icons';
import { BodyText, H3, SmallText, UppercaseText } from '@/shared/ui/Typography';

export function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <Image
          className="product-card__image"
          src="/img/phones/apple-iphone-11/white/00.webp"
          alt={'Apple iPhone Xs 64GB Silver'}
          width={300}
          height={300}
        />
      </div>

      <h3 className="product-card__title">
        <BodyText>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</BodyText>
      </h3>

      <div className="product-card__price-block">
        <span className="product-card__price-actual">
          <H3>$799</H3>
        </span>
        <span className="product-card__price-old">
          <H3>$899</H3>
        </span>
      </div>

      <div className="product-card__divider" />

      <div className="product-card__specs">
        <div className="product-card__spec-row">
          <span className="product-card__spec-label">
            <SmallText>Screen</SmallText>
          </span>
          <span className="product-card__spec-value">
            <UppercaseText>{'5.8" OLED'}</UppercaseText>
          </span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-label">
            <SmallText>Capacity</SmallText>
          </span>
          <span className="product-card__spec-value">
            <UppercaseText>64 GB</UppercaseText>
          </span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-label">
            <SmallText>RAM</SmallText>
          </span>
          <span className="product-card__spec-value">
            <UppercaseText>4 GB</UppercaseText>
          </span>
        </div>
      </div>

      <div className="product-card__actions">
        <Button variant="primary" className="h-10 grow cursor-pointer">
          Add to cart
        </Button>
        <Button variant="favorite" className="cursor-pointer">
          <HeartIcon />
        </Button>
      </div>
    </div>
  );
}
