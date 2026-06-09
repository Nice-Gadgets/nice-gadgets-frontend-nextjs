import Image from 'next/image';

import { Button } from '@/shared/ui/button';
import { HeartIcon } from '@/shared/ui/icons';
import { BodyText, H3, SmallText, UppercaseText } from '@/shared/ui/Typography';

export function ProductCard() {
  return (
    <div className="box-border w-full h-full max-w-[288px] max-h-110 bg-brand-surface-1 p-8 flex flex-col justify-between select-none gap-2 min-[1200px]:max-w-68 min-[1200px]:h-126.5 min-[1200px]:max-h-126.5">
      <div className="w-full h-49 flex items-center justify-center m-0 overflow-hidden">
        <Image
          className="max-h-full object-contain transition-transform duration-300 ease-in-out"
          src="/img/phones/apple-iphone-11/white/00.webp"
          alt={'Apple iPhone Xs 64GB Silver'}
          width={250}
          height={250}
        />
      </div>

      <BodyText className="text-brand-white mt-2 line-clamp-2 min-h-10.5">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </BodyText>

      <div className="flex items-center gap-2 mt-1">
        <H3 className="text-brand-white">$799</H3>
        <H3 className="text-brand-secondary line-through">$899</H3>
      </div>

      <div className="w-full h-px bg-brand-elements" />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <SmallText className="text-brand-secondary">Screen</SmallText>
          <UppercaseText className="text-brand-white">
            {'5.8" OLED'}
          </UppercaseText>
        </div>
        <div className="flex justify-between">
          <SmallText className="text-brand-secondary">Capacity</SmallText>
          <UppercaseText className="text-brand-white">64 GB</UppercaseText>
        </div>
        <div className="flex justify-between">
          <SmallText className="text-brand-secondary">RAM</SmallText>
          <UppercaseText className="text-brand-white">4 GB</UppercaseText>
        </div>
      </div>

      <div className="flex gap-2 h-12">
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
