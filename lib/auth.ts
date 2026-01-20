import { User, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

// Mock credentials
const MOCK_CREDENTIALS = {
  email: 'user@example.com',
  password: 'password123'
};

export async function loginUser(email: string, password: string) {
  try {
    if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
      // Mock login - store in cookie
      const userData = { email, id: 'user-1' };
      document.cookie = `auth=${JSON.stringify(userData)}; path=/; max-age=86400`;
      return userData;
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (err: any) {
    throw new Error(err.message || 'Login failed');
  }
}

export async function logoutUser() {
  try {
    document.cookie = 'auth=; path=/; max-age=0';
  } catch (err: any) {
    throw new Error(err.message || 'Logout failed');
  }
}

export async function getCurrentUser(): Promise<any | null> {
  if (typeof window === 'undefined') return null;
  
  try {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('auth='));
    
    if (!cookie) return null;
    
    const userData = JSON.parse(cookie.split('=')[1]);
    return userData;
  } catch (err) {
    return null;
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return document.cookie.includes('auth=');
}

