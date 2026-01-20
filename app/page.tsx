import Link from 'next/link';
import { 
  ShoppingBagIcon, 
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  FireIcon,
  HomeIcon,
  GiftIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Welcome to Sinan
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Discover premium Islamic clothing for Salat and Khimar. Elegant, modest designs that celebrate your faith and style.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/items" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                  Browse Collection
                </Link>
                <Link 
                  href="/login" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-semibold"
                >
                  Sign In
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center gap-8 flex-wrap">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                  <ShoppingBagIcon className="h-16 w-16 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                  <SparklesIcon className="h-12 w-12 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="w-28 h-28 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                  <GiftIcon className="h-14 w-14 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="w-36 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                  <StarIcon className="h-10 w-10 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="w-20 h-32 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                  <CameraIcon className="h-12 w-12 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="border-y border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Sinan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: SparklesIcon, title: "Premium Quality", desc: "Finest fabrics and craftsmanship for your Islamic wear." },
              { icon: CheckIcon, title: "Modest Design", desc: "Thoughtfully designed for comfort, modesty and elegance." },
              { icon: StarIcon, title: "Timeless Style", desc: "Classic designs that complement your faith and personality." },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Collections */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold mb-12">Featured Collections</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Featured Item */}
            <div className="md:row-span-2 bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <SparklesIcon className="h-32 w-32 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">New Collection</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Latest arrivals in Salat dresses and Khimar wear</p>
                <p className="text-3xl font-bold mb-4">from $29</p>
                <Link href="/items" className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity font-semibold">
                  Explore
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Small Collection Items */}
            {[
              { title: "Prayer Dresses", desc: "Beautiful Salat dresses for worship", icon: ComputerDesktopIcon },
              { title: "Khimar Collection", desc: "Premium Khimar headscarves and veils", icon: FireIcon },
              { title: "Accessories", desc: "Complete your modest wear collection", icon: HomeIcon },
            ].map((col, i) => (
              <Link 
                key={i}
                href="/items"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <col.icon className="h-16 w-16 text-gray-400 dark:text-gray-600" />
                </div>
                <h3 className="font-semibold text-lg">{col.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{col.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Product Showcase */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <GiftIcon className="h-20 w-20 text-gray-400 group-hover:scale-110 transition-transform" />
                {i === 2 && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-semibold rounded-full">
                    New
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Product {i}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Premium quality item</p>
                <p className="text-lg font-bold mt-2">${(25 + i * 5).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Special Offer */}
      <section className="bg-black dark:bg-white text-white dark:text-black py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Seasonal Collection</h2>
              <p className="text-xl opacity-90 mb-8">
                Discover our new collection of premium Islamic wear. Perfect for every season!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckIcon className="h-6 w-6" />
                  <span>Premium quality fabrics and craftsmanship</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="h-6 w-6" />
                  <span>Modest designs for all occasions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="h-6 w-6" />
                  <span>Fast and discreet shipping</span>
                </div>
              </div>
              <Link 
                href="/items"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white text-black dark:bg-black dark:text-white border-2 border-white dark:border-black rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Shop Now
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="text-center">
              <div className="text-8xl font-bold opacity-20 mb-4">40%</div>
              <p className="text-lg opacity-80">Limited to selected items while supplies last</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact/FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold mb-12">Any Questions?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="mb-6 flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <p className="text-sm text-gray-600 dark:text-gray-400">We respond within 24 hours</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-2">What is Monochrome?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A curated marketplace for premium black and white essentials designed for modern living.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-2">How do I add items?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sign in to your account and navigate to "Add Item" to contribute to our collection.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Is shipping free?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Free shipping is available on orders over $50. Check our shipping policy for details.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Can I return items?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yes, we offer a 30-day money-back guarantee on all purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Section */}
      <section className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our complete collection of premium monochrome essentials. Start shopping today and discover timeless pieces for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/items"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse Items
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link 
              href="/add-item"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-semibold"
            >
              Add Your Item
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
