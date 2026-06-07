import { Button } from '@/shared/ui/button';
import { ButtonColorPicker } from '@/shared/ui/ButtonColorPicker';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  HeartIcon,
  HeartIconSelected,
  MinusIcon,
  PlusIcon,
} from '@/shared/ui/icons';

export default function ButtonsDemo() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h2 className="text-white mb-4">Buttons Pagination</h2>
        <div className="flex gap-2">
          <Button variant="pagination" aria-current="page">
            1
          </Button>
          <Button variant="pagination">2</Button>
          <Button variant="pagination">3</Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Chevron</h2>
        <div className="flex gap-2">
          <Button variant="control">
            <ChevronLeftIcon />
          </Button>
          <Button variant="control">
            <ChevronRightIcon />
          </Button>
          <Button variant="control">
            <ChevronUpIcon />
          </Button>
          <Button variant="control">
            <ChevronDownIcon />
          </Button>
          <Button variant="control" disabled>
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Favorite</h2>
        <div className="flex gap-2">
          <Button variant="favorite" aria-pressed={true}>
            <HeartIconSelected />
          </Button>
          <Button variant="favorite" aria-pressed={false}>
            <HeartIcon />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Plus/Minus</h2>
        <div className="flex gap-2">
          <Button variant="control">
            <MinusIcon />
          </Button>
          <Button variant="control">
            <PlusIcon />
          </Button>
          <Button variant="control" disabled>
            <MinusIcon />
          </Button>
          <Button variant="control" disabled>
            <PlusIcon />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Color Picker</h2>
        <div className="flex gap-3">
          <ButtonColorPicker color="var(--color-product-space-gray)" />
          <ButtonColorPicker color="var(--color-product-silver)" />
          <ButtonColorPicker color="var(--color-product-gold)" />
          <ButtonColorPicker color="var(--color-product-blue)" />
          <ButtonColorPicker color="var(--color-product-red)" />
          <ButtonColorPicker color="var(--color-product-black)" />
          <ButtonColorPicker color="var(--color-product-green)" />
          <ButtonColorPicker color="var(--color-product-yellow)" />
          <ButtonColorPicker color="var(--color-product-white)" />
          <ButtonColorPicker color="var(--color-product-purple)" />
          <ButtonColorPicker color="var(--color-product-gold)" isSelected />
        </div>
      </div>
    </div>
  );
}
