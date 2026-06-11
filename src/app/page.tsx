import { ProductGallery } from '@/shared/ui/ProductGallery'; // скоригуй шлях до компонента, якщо він інший

export default function ProductPage() {
  // 1. Фейкові дані для тестування (імітація того, що приходить з бази або API)
  const productData = {
    name: 'Apple iPhone 14 Pro 128GB Silver',
    images: [
      'images/iphone-silver-front.png', // файли мають лежати в public/images/...
      'images/iphone-silver-back.png',
      'images/iphone-silver-side.png',
    ],
  };

  return (
    <main className="min-h-screen bg-[#0F1115] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ЛІВА ЧАСТИНА: Наша галерея зображень */}
        <div className="w-full">
          <ProductGallery
            images={productData.images}
            name={productData.name}
          />
        </div>

        {/* ПРАВА ЧАСТИНА: Інформація про товар (для контексту сторінки) */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-brand-white">{productData.name}</h1>
          <p className="text-2xl font-semibold text-purple-500">$999</p>
          <div className="text-gray-400 text-sm flex flex-col gap-2 mt-4">
            <div><span className="font-medium text-white">Screen:</span> 6.1" OLED</div>
            <div><span className="font-medium text-white">Capacity:</span> 128 GB</div>
            <div><span className="font-medium text-white">RAM:</span> 6 GB</div>
          </div>
        </div>

      </div>
    </main>
  );
}
