import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/ui/button';
import { CloseIcon, MinusIcon, PlusIcon } from '@/shared/ui/icons';
import { BodyText } from '@/shared/ui/Typography';

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onRemove?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export const CartItem = ({
  id,
  image,
  name,
  price,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
}: CartItemProps) => {
  return (
    <div className="min-w-[288px] p-4 sm:p-6 bg-brand-surface-1 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      {/* upper block */}
      <div className="flex items-center gap-4 sm:gap-6 sm:flex-1">
        <Button variant="close" onClick={onRemove}>
          <CloseIcon />
        </Button>
        <Link
          href={`/products/${id}`}
          className="flex items-center gap-4 sm:gap-6 group"
        >
          <div className="size-20 shrink-0">
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <BodyText className="text-brand-white group-hover:text-brand-accent">
            {name}
          </BodyText>
        </Link>
      </div>

      {/* lower block */}
      <div className="flex items-center justify-between sm:justify-end sm:gap-6">
        <div className="flex items-center gap-4">
          <Button
            variant="control"
            disabled={quantity <= 1}
            onClick={onDecrease}
          >
            <MinusIcon />
          </Button>
          <BodyText>{quantity}</BodyText>
          <Button variant="control" onClick={onIncrease}>
            <PlusIcon />
          </Button>
        </div>
        <p className="text-[22px] leading-[30.8px] font-extrabold shrink-0">
          ${price}
        </p>
      </div>
    </div>
  );
};
