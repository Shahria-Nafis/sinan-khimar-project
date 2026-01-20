export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SINAN</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Premium Islamic clothing for Salat and Khimar. Elegant, modest designs for every occasion.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/items" className="hover:text-black dark:hover:text-white">All Items</a></li>
              <li><a href="/items" className="hover:text-black dark:hover:text-white">New Arrivals</a></li>
              <li><a href="/items" className="hover:text-black dark:hover:text-white">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2026 Monochrome Shop. Built with Next.js and Express.</p>
        </div>
      </div>
    </footer>
  );
}
