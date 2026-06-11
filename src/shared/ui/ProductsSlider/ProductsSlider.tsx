'use client';
import 'swiper/css';
import 'swiper/css/navigation';

import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { ProductInterface } from '@/entities/Product/types/ProductInterface';
import { Button } from '@/shared/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/ui/icons';
import { ProductCard } from '@/widgets/ProductCard';

type Props = {
  title: string;
  products: ProductInterface[];
};

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative">
      {}
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-brand-white leading-none">
          {title}
        </h2>

        {}
        <div className="slider__navigation-buttons flex gap-3 z-10">
          <Button
            variant="control"
            className="custom-prev w-8 h-8 flex items-center justify-center"
            disabled={!!isBeginning}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="control"
            className="custom-next w-8 h-8 flex items-center justify-center"
            disabled={!!isEnd}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      {}
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={'auto'}
          spaceBetween={16}
          breakpoints={{
            768: {
              spaceBetween: 24,
            },
          }}
          loop={false}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="w-full !overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide
              key={`${product.itemId}-${product.id}`}
              className="w-full max-w-[272px]"
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
