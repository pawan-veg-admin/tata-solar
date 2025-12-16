'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { books } from '../../../data/books';
import { useCart } from '../../../context/CartContext';

export default function BookDetail({ params }: { params: { id: string } }) {
  const book = books.find((item) => item.id === params.id);
  const { addToCart } = useCart();

  if (!book) return notFound();

  return (
    <div className="container-section grid gap-10 md:grid-cols-2">
      <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-100">
        <Image src={book.cover} alt={book.title} fill className="object-cover" />
      </div>
      <div className="space-y-4">
        <p className="text-sm font-semibold text-primary-700">{book.category}</p>
        <h1 className="text-3xl font-bold text-slate-900">{book.title}</h1>
        <p className="text-slate-600">by {book.author}</p>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="flex items-center gap-1 text-amber-500"><StarIcon className="h-5 w-5" /> {book.rating} rating</span>
          <span>Language: {book.language}</span>
          <span>Pages: {book.pages}</span>
        </div>
        <p className="text-lg text-slate-700">ISBN: {book.isbn}</p>
        <p className="text-base leading-relaxed text-slate-600">{book.description}</p>
        <div className="rounded-2xl bg-primary-50 p-4 text-primary-800">
          <p className="text-sm font-semibold">In stock: {book.stock} copies</p>
          <p className="text-3xl font-bold">₹{book.price}</p>
        </div>
        <div className="flex gap-3">
          <button className="button-primary" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
          <a href="#reviews" className="button-secondary">
            Read reviews
          </a>
        </div>
      </div>
    </div>
  );
}
