'use client';

import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { Book } from '../data/books';
import { useCart } from '../context/CartContext';

export default function BookCard({ book }: { book: Book }) {
  const { addToCart } = useCart();

  return (
    <div className="card-surface flex flex-col">
      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-slate-50">
        <Image src={book.cover} alt={book.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="flex-1 space-y-2">
        <Link href={`/books/${book.id}`} className="text-lg font-semibold text-slate-900 hover:text-primary-700">
          {book.title}
        </Link>
        <p className="text-sm text-slate-500">by {book.author}</p>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="flex items-center gap-1 text-amber-500">
            <StarIcon className="h-4 w-4" /> {book.rating}
          </span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{book.category}</span>
        </div>
        <p className="text-xl font-bold text-primary-700">₹{book.price}</p>
      </div>
      <button
        onClick={() => addToCart(book)}
        className="button-primary mt-4 w-full justify-center"
        aria-label={`Add ${book.title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
}
