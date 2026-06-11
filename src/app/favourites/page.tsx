import { Suspense } from 'react';

import { Catalog } from '@/widgets/Catalog';

const favourites = [
  {
    id: 184,
    category: 'tablets',
    itemId: 'apple-ipad-10-2-2020-32gb-spacegray',
    name: 'Apple iPad 10.2 (2020) 32GB Space Gray',
    capacity: '32GB',
    fullPrice: 329,
    price: 299,
    color: 'spacegray',
    image: 'img/tablets/apple-ipad-10-2-2020/spacegray/00.webp',
    screen: "10.2' Retina",
    ram: '3GB',
    year: 2020,
  },
  {
    id: 185,
    category: 'tablets',
    itemId: 'apple-ipad-mini-5th-gen-256gb-silver',
    name: 'Apple iPad Mini (5th Gen) 256GB Silver',
    capacity: '256GB',
    fullPrice: 549,
    price: 499,
    color: 'silver',
    image: 'img/tablets/apple-ipad-mini-5th-gen/silver/00.webp',
    screen: "7.9' Retina",
    ram: '3GB',
    year: 2019,
  },
  {
    id: 186,
    category: 'tablets',
    itemId: 'apple-ipad-mini-5th-gen-64gb-silver',
    name: 'Apple iPad Mini (5th Gen) 64GB Silver',
    capacity: '64GB',
    fullPrice: 549,
    price: 499,
    color: 'silver',
    image: 'img/tablets/apple-ipad-mini-5th-gen/silver/00.webp',
    screen: "7.9' Retina",
    ram: '3GB',
    year: 2019,
  },
  {
    id: 187,
    category: 'tablets',
    itemId: 'apple-ipad-mini-5th-gen-256gb-spacegray',
    name: 'Apple iPad Mini (5th Gen) 256GB Space Gray',
    capacity: '256GB',
    fullPrice: 549,
    price: 499,
    color: 'spacegray',
    image: 'img/tablets/apple-ipad-mini-5th-gen/spacegray/00.webp',
    screen: "7.9' Retina",
    ram: '3GB',
    year: 2019,
  },
  {
    id: 188,
    category: 'tablets',
    itemId: 'apple-ipad-mini-5th-gen-64gb-spacegray',
    name: 'Apple iPad Mini (5th Gen) 64GB Space Gray',
    capacity: '64GB',
    fullPrice: 549,
    price: 499,
    color: 'spacegray',
    image: 'img/tablets/apple-ipad-mini-5th-gen/spacegray/00.webp',
    screen: "7.9' Retina",
    ram: '3GB',
    year: 2019,
  },
  {
    id: 189,
    category: 'tablets',
    itemId: 'apple-ipad-mini-5th-gen-256gb-gold',
    name: 'Apple iPad Mini (5th Gen) 256GB Gold',
    capacity: '256GB',
    fullPrice: 549,
    price: 499,
    color: 'gold',
    image: 'img/tablets/apple-ipad-mini-5th-gen/gold/00.webp',
    screen: "7.9' Retina",
    ram: '3GB',
    year: 2019,
  },
  {
    id: 190,
    category: 'tablets',
    itemId: 'apple-ipad-mini-5th-gen-64gb-gold',
    name: 'Apple iPad Mini (5th Gen) 64GB Gold',
    capacity: '64GB',
    fullPrice: 549,
    price: 499,
    color: 'gold',
    image: 'img/tablets/apple-ipad-mini-5th-gen/gold/00.webp',
    screen: "7.9' Retina",
    ram: '3GB',
    year: 2019,
  },
];

export default function FavouritesPage() {
  return (
    <Suspense>
      <Catalog
        products={favourites}
        categoryName="Favourites"
        withSort={false}
      />
    </Suspense>
  );
}
