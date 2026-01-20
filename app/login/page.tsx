'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/auth';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { EnvelopeIcon, LockClosedIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(email, password);
      toast.success('Logged in successfully!');
      router.push('/items');
    } catch (err: any) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to Sinan</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to manage your Islamic clothing collection</p>
        </div>

        {/* Demo Credentials Info */}
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">Demo Credentials:</p>
          <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
            <strong>Email:</strong> user@example.com<br />
            <strong>Password:</strong> password123
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                required 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                required 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
            {!loading && <ArrowRightIcon className="h-4 w-4" />}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link href="/" className="font-medium text-black dark:text-white hover:underline">
            Return Home
          </Link>
        </p>
      </div>
    </div>
  );
}
