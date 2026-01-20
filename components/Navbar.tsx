"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { getCurrentUser, logoutUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);

    // Check current user
    getCurrentUser().then(setUser);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success('Logged out');
      setUser(null);
      router.push('/');
    } catch (err: any) {
      toast.error(err.message || 'Logout failed');
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white dark:bg-white dark:text-black text-center py-2 text-sm">
        <p>Welcome to Sinan - Premium Islamic Clothing | New Collection Available Now!</p>
      </div>
      
      {/* Main Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight">
              MONOCHROME
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/items" className="hover:opacity-70 transition-opacity">Products</Link>
              <Link href="/items" className="hover:opacity-70 transition-opacity">Collections</Link>
              {user && <Link href="/add-item" className="hover:opacity-70 transition-opacity">Add Item</Link>}
            </nav>
            
            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button 
                aria-label="Search" 
                className="hover:opacity-70 transition-opacity"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
              
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm hidden md:inline">{user.email}</span>
                  <button 
                    onClick={handleLogout} 
                    className="text-sm hover:opacity-70 transition-opacity"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity">
                  <UserIcon className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              )}
              
              <button 
                aria-label="Toggle theme" 
                onClick={toggle} 
                className="hover:opacity-70 transition-opacity"
              >
                {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
              
              <Link href="/items" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                <ShoppingCartIcon className="h-5 w-5" />
                <span className="text-sm">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
