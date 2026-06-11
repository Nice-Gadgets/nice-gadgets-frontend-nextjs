import Link from 'next/link';

import { FullProduct } from '@/entities/Product/types/FullProduct';
import { Button } from '@/shared/ui/button';
import { ButtonColorPicker } from '@/shared/ui/ButtonColorPicker';
import { CapacityButton } from '@/shared/ui/CapacityButton';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
} from '@/shared/ui/icons';
import { ProductGallery } from '@/shared/ui/ProductGallery';
import { BodyText, H2, H3, H4, SmallText } from '@/shared/ui/Typography';

function buildProductUrl(
  category: string,
  namespaceId: string,
  capacity: string,
  color: string,
): string {
  const cap = capacity.toLowerCase().replace(/\s+/g, '');
  const col = color.toLowerCase().replace(/\s+/g, '-');
  return `/${category}/${namespaceId}-${cap}-${col}`;
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US')}`;
}

interface ItemCardPageProps {
  product: FullProduct;
}

export const ItemCardPage = ({ product }: ItemCardPageProps) => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    {
      label:
        product.category.charAt(0).toUpperCase() + product.category.slice(1),
      href: `/${product.category}`,
    },
    { label: product.name, href: '#' },
  ];

  const quickSpecs = [
    { label: 'Screen', value: product.screen },
    { label: 'Resolution', value: product.resolution },
    { label: 'Processor', value: product.processor },
    { label: 'RAM', value: product.ram },
  ];

  const allSpecs = [
    { label: 'Screen', value: product.screen },
    { label: 'Resolution', value: product.resolution },
    { label: 'Processor', value: product.processor },
    { label: 'RAM', value: product.ram },
    ...(product.camera ? [{ label: 'Camera', value: product.camera }] : []),
    ...(product.zoom ? [{ label: 'Zoom', value: product.zoom }] : []),
    { label: 'Cell', value: product.cell.join(', ') },
  ];

  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <main className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1">
                {i > 0 && (
                  <ChevronRightIcon className="size-3 text-brand-icons shrink-0" />
                )}
                {i === breadcrumbs.length - 1 ? (
                  <SmallText className="text-brand-secondary sm:whitespace-normal truncate max-w-30 sm:max-w-none">
                    {crumb.label}
                  </SmallText>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-brand-white hover:text-brand-accent transition-colors"
                  >
                    <SmallText>{crumb.label}</SmallText>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Back link */}
        <Link
          href={`/${product.category}`}
          className="inline-flex items-center gap-1 text-sm text-brand-white hover:text-brand-accent transition-colors mb-4 group"
        >
          <ChevronLeftIcon className="transition-transform" />
          Back
        </Link>

        {/* Product name */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-white mb-8 leading-tight">
          {product.name}
        </h1>

        {/* ── Top: gallery + configurator ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <ProductGallery images={product.images} name={product.name} />

          {/* Configurator */}
          <div className="flex flex-col gap-6 max-w-sm">
            <div>
              <div className="flex justify-between">
                {/* Colors */}
                <SmallText className="text-brand-secondary mb-3">
                  Available colors
                </SmallText>
                {/* Short ID */}
                <SmallText className="text-brand-icons text-right">
                  ID: {product.id.split('-').slice(-3).join('-').toUpperCase()}
                </SmallText>
              </div>
              <div className="flex items-center gap-3">
                {product.colorsAvailable.map((c) => (
                  <ButtonColorPicker
                    key={c}
                    color={c}
                    isSelected={c === product.color}
                    href={buildProductUrl(
                      product.category,
                      product.namespaceId,
                      product.capacity,
                      c,
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="h-px bg-brand-elements" />

            {/* Capacity */}
            <div>
              <SmallText className="text-brand-secondary block mb-3">
                Select capacity
              </SmallText>
              <div className="flex flex-wrap gap-2">
                {product.capacityAvailable.map((cap) => (
                  <CapacityButton
                    key={cap}
                    capacity={cap}
                    isSelected={cap === product.capacity}
                    href={buildProductUrl(
                      product.category,
                      product.namespaceId,
                      cap,
                      product.color,
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="h-px bg-brand-elements" />

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <H2 className="text-brand-white">
                {formatPrice(product.priceDiscount)}
              </H2>
              {product.priceRegular !== product.priceDiscount && (
                <H3 className="text-brand-secondary line-through">
                  {formatPrice(product.priceRegular)}
                </H3>
              )}
            </div>

            {/* Cart + Favorite */}
            <div className="flex gap-2">
              <Button
                variant="primary"
                type="button"
                className="cursor-pointer flex-1 h-12"
              >
                Add to cart
              </Button>
              <Button
                variant="favorite"
                type="button"
                aria-label="Add to favorites"
                className="cursor-pointer size-12 flex items-center justify-center border border-brand-icons bg-brand-surface-2 text-brand-secondary hover:border-brand-white hover:text-brand-white transition-colors duration-300"
              >
                <HeartIcon />
              </Button>
            </div>

            {/* Quick specs */}
            <div className="space-y-2">
              {quickSpecs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-baseline gap-4"
                >
                  <SmallText className="text-brand-secondary">
                    {label}
                  </SmallText>
                  <SmallText className="text-brand-white text-right">
                    {value}
                  </SmallText>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom: description + tech specs ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* About */}
          <section aria-label="About this product">
            <H3 className="text-brand-white mb-4">About</H3>
            <div className="h-px bg-brand-elements mb-8" />
            <div className="space-y-8">
              {product.description.map((section) => (
                <div key={section.title}>
                  <H4 className="text-brand-white mb-4">{section.title}</H4>
                  <div className="space-y-3">
                    {section.text.map((paragraph, i) => (
                      <BodyText key={i} className="text-brand-secondary">
                        {paragraph}
                      </BodyText>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech specs */}
          <section aria-label="Technical specifications">
            <H3 className="text-brand-white mb-4">Tech specs</H3>
            <div className="h-px bg-brand-elements mb-8" />
            <div className="space-y-3">
              {allSpecs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <BodyText className="text-brand-secondary">{label}</BodyText>
                  <BodyText className="text-brand-white text-right">
                    {value}
                  </BodyText>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
