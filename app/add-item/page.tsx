'use client';
import { useEffect, useState } from 'react';
import { isAuthenticated, getCurrentUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import AddItemForm from '@/components/AddItemForm';

export default function AddItemPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push('/login');
        return;
      }
      setUser(currentUser);
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div>
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link href="/items" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Items
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Add New Clothing</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Add a new Salat dress or Khimar product to Sinan collection.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
          <AddItemForm />
        </div>
      </section>
    </div>
  );
}
