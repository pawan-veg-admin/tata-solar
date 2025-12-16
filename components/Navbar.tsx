'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Books' },
  { href: '/categories', label: 'Categories' },
  { href: '/dashboard', label: 'My Orders' }
];

export default function Navbar() {
  const pathname = usePathname();
  const { items } = useCart();
  const { user, signOutUser } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="container-section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white shadow-soft">
            AL
          </div>
          <div>
            <p className="text-lg font-extrabold text-primary-800">Arpit Library</p>
            <p className="text-xs text-slate-500">Where Knowledge Meets Books</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition ${pathname === link.href ? 'text-primary-700' : 'text-slate-600 hover:text-primary-600'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <button onClick={signOutUser} className="button-secondary hidden sm:inline-flex">Sign out</button>
          ) : (
            <Link href="/auth" className="button-secondary hidden sm:inline-flex">
              <UserCircleIcon className="h-5 w-5" />
              Login
            </Link>
          )}

          <Link href="/cart" className="relative inline-flex items-center rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-800 shadow-soft">
            <ShoppingBagIcon className="mr-2 h-5 w-5" />
            Cart
            {items.length > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-600 px-1 text-xs font-bold text-white">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
