'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import React, { useCallback, useId, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';
import { Button } from '@/shared/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/ui/icons';
import { H2 } from '@/shared/ui/Typography/H2';
import { ProductCard } from '@/widgets/ProductCard';

type Props = {
  title: string;
  products: ProductInterface[];
};

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  const id = useId();

  const [navigation, setNavigation] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const updateNavigation = useCallback((swiper: SwiperType) => {
    setNavigation({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  }, []);

  return (
    <section className="w-full max-w-300 mx-auto px-4 md:px-8 relative">
      <div className="flex items-end justify-between mb-6">
        <H2 className="text-brand-white text-2xl font-bold">{title}</H2>

        <div className="flex gap-3 z-10">
          <Button
            variant="control"
            className={`w-8 h-8 flex items-center justify-center custom-prev-${id}`}
            disabled={navigation.isBeginning}
            aria-label="Previous products"
          >
            <ChevronLeftIcon />
          </Button>

          <Button
            variant="control"
            className={`w-8 h-8 flex items-center justify-center custom-next-${id}`}
            disabled={navigation.isEnd}
            aria-label="Next products"
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1.2}
        spaceBetween={16}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        loop={false}
        navigation={{
          prevEl: `.custom-prev-${id}`,
          nextEl: `.custom-next-${id}`,
        }}
        onSwiper={updateNavigation}
        onSlideChange={updateNavigation}
        className="w-full overflow-hidden"
      >
        {products.map((product) => (
          <SwiperSlide
            key={`${product.itemId}-${product.id}`}
            className="w-full"
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
