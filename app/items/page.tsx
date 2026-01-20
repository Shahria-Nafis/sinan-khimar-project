import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, PlusIcon, GiftIcon } from '@heroicons/react/24/outline';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function getItems() {
  try {
    const res = await fetch(`${API}/api/items`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">Sinan Collection</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Browse our premium Salat dresses, Khimar headscarves, and Islamic clothing
              </p>
            </div>
            <Link 
              href="/add-item"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add Item</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">No items available yet.</p>
            <Link href="/add-item" className="mt-4 inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity">
              Be the first to add an item!
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item: any) => (
              <Link 
                key={item._id || item.id} 
                href={`/items/${item._id || item.id}`}
                className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all"
              >
                <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  {item.image ? (
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <GiftIcon className="h-20 w-20 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-black dark:group-hover:text-white">{item.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
