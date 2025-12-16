'use client';

import { useMemo, useState } from 'react';
import BookCard from '../../components/BookCard';
import { books, categories } from '../../data/books';

export default function BooksPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [sort, setSort] = useState<string>('featured');

  const filtered = useMemo(() => {
    let result = books.filter((book) =>
      `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(query.toLowerCase())
    );
    if (category !== 'All') {
      result = result.filter((book) => book.category === category);
    }
    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [query, category, sort]);

  return (
    <div className="container-section space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary-700">Bookstore</p>
          <h1 className="text-3xl font-bold text-slate-900">Explore all books</h1>
          <p className="text-sm text-slate-600">Search, filter by category, or sort by price and rating.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, author..."
            className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-400 focus:outline-none md:w-64"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-400 focus:outline-none"
          >
            <option>All</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-400 focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        {filtered.length === 0 && <p className="text-sm text-slate-500">No books found.</p>}
      </div>
    </div>
  );
}
