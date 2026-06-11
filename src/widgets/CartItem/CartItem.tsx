import Image from 'next/image';
import Link from 'next/link';

import { ProductInterface } from '@/entities/types/ProductInterface';
import { Button } from '@/shared/ui/button';
import { CloseIcon, MinusIcon, PlusIcon } from '@/shared/ui/icons';
import { BodyText, H3 } from '@/shared/ui/Typography';

interface CartItemProps {
  item: ProductInterface;
  quantity: number;
  onRemove?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export const CartItem = ({
  item,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
}: CartItemProps) => {
  return (
    <div className="min-w-[288px] p-4 sm:p-6 bg-brand-surface-1 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-4 sm:gap-6 sm:flex-1">
        <Button variant="close" onClick={onRemove}>
          <CloseIcon />
        </Button>
        <Link
          href={`/${item.category}/${item.itemId}`}
          className="flex items-center gap-4 sm:gap-6 group"
        >
          <div className="size-20 shrink-0 flex items-center justify-center">
            <Image
              src={`/${item.image}`}
              alt={item.name}
              width={66}
              height={66}
              loading="eager"
              className="object-contain w-[66px] h-[66px]"
            />
          </div>
          <BodyText className="text-brand-white group-hover:text-brand-accent transition-colors duration-400">
            {item.name}
          </BodyText>
        </Link>
      </div>
      <div className="flex items-center justify-between sm:justify-end sm:gap-6">
        <div className="flex items-center">
          <Button
            variant="control"
            disabled={quantity <= 1}
            onClick={onDecrease}
          >
            <MinusIcon />
          </Button>
          <BodyText className="w-8 text-center">{quantity}</BodyText>
          <Button variant="control" onClick={onIncrease}>
            <PlusIcon />
          </Button>
        </div>
        <H3 className="font-extrabold shrink-0 w-20 text-right">
          ${(item.price * quantity).toFixed()}
        </H3>
      </div>
    </div>
  );
};
