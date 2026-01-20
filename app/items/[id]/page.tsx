import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ShoppingCartIcon, GiftIcon } from '@heroicons/react/24/outline';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://sinanserverside.vercel.app';

async function getItem(id: string) {
  try {
    const res = await fetch(`${API}/api/items/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Item Not Found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">The requested item does not exist.</p>
          <Link 
            href="/items"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Items
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link href="/items" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Items
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="sticky top-20 h-fit">
            <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              {item.image ? (
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <GiftIcon className="h-32 w-32 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold">{item.name}</h1>
            
            <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-black dark:text-white">${item.price.toFixed(2)}</div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                {item.description}
              </p>
            </div>

            {/* Product Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Added</p>
                <p className="mt-1 font-semibold">{new Date(item.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Product ID</p>
                <p className="mt-1 font-mono text-sm">{item._id.substring(0, 8)}...</p>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full mt-8 px-6 py-4 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <ShoppingCartIcon className="h-5 w-5" />
              Add to Cart
            </button>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Part of our premium monochrome collection. All items are carefully selected for quality and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Items Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
                <GiftIcon className="h-16 w-16 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Similar items</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
