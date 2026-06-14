import Link from 'next/link';

import productsData from '@/../public/api/products.json';
import { FullProduct, fullProductToProduct } from '@/entities/Product';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import { ButtonColorPicker } from '@/shared/ui/ButtonColorPicker';
import { CapacityButton } from '@/shared/ui/CapacityButton';
import { ChevronLeftIcon } from '@/shared/ui/Icons';
import { ProductGallery } from '@/shared/ui/ProductGallery';
import { BodyText, H1, H2, H3, H4, SmallText } from '@/shared/ui/Typography';
import { ProductActions } from '@/widgets/ItemCardPage/ProductActions';
import { ProductsSlider } from '@/widgets/ProductsSlider';

const buildProductUrl = (
  category: string,
  namespaceId: string,
  capacity: string,
  color: string,
): string => {
  const cap = capacity.toLowerCase().replace(/\s+/g, '');
  const col = color.toLowerCase().replace(/\s+/g, '-');

  return `/${category}/${namespaceId}-${cap}-${col}`;
};

const formatPrice = (price: number): string => {
  return `$${price.toLocaleString('en-US')}`;
};

const getCategoryLabel = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

interface ItemCardPageProps {
  product: FullProduct;
}

export const ItemCardPage = ({ product }: ItemCardPageProps) => {
  const products = productsData.filter((p) => p.category === product.category);

  const categoryLabel = getCategoryLabel(product.category);

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

  const productForCart = fullProductToProduct(product);

  return (
    <main className="w-full pt-6">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: categoryLabel, href: `/${product.category}` },
            { label: product.name },
          ]}
          className="mb-10 py-0"
        />

        <Link
          href={`/${product.category}`}
          className="group mb-4 inline-flex items-center gap-1 text-sm text-brand-white transition-colors hover:text-brand-accent"
        >
          <ChevronLeftIcon className="transition-transform" />
          Back
        </Link>

        <H1 className="text-brand-white mb-8">{product.name}</H1>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div className="flex max-w-sm flex-col gap-6">
            <div>
              <div className="flex justify-between">
                <SmallText className="mb-3 text-brand-secondary">
                  Available colors
                </SmallText>

                <SmallText className="text-right text-brand-icons">
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

            <div>
              <SmallText className="mb-3 block text-brand-secondary">
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

            <ProductActions product={productForCart} />

            <div className="space-y-2">
              {quickSpecs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <SmallText className="text-brand-secondary">
                    {label}
                  </SmallText>

                  <SmallText className="text-right text-brand-white">
                    {value}
                  </SmallText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <section aria-label="About this product">
            <H3 className="mb-4 text-brand-white">About</H3>

            <div className="mb-8 h-px bg-brand-elements" />

            <div className="space-y-8">
              {product.description.map((section) => (
                <div key={section.title}>
                  <H4 className="mb-4 text-brand-white">{section.title}</H4>

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

          <section aria-label="Technical specifications">
            <H3 className="mb-4 text-brand-white">Tech specs</H3>

            <div className="mb-8 h-px bg-brand-elements" />

            <div className="space-y-3">
              {allSpecs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <BodyText className="text-brand-secondary">{label}</BodyText>

                  <BodyText className="text-right text-brand-white">
                    {value}
                  </BodyText>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="my-20 w-full overflow-hidden">
        <ProductsSlider products={products} title="You may also like" />
      </div>
    </main>
  );
};
