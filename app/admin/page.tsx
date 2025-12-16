'use client';

import { useState } from 'react';
import { books } from '../../data/books';
import { useAuth } from '../../context/AuthContext';

export default function AdminPage() {
  const { user } = useAuth();
  const [localBooks] = useState(books);

  if (!user) {
    return (
      <div className="container-section card-surface">
        <p className="text-slate-600">Admin login required. Assign admin custom claims to your Firebase user.</p>
      </div>
    );
  }

  return (
    <div className="container-section space-y-6">
      <div>
        <p className="text-sm font-semibold text-primary-700">Admin panel</p>
        <h1 className="text-3xl font-bold text-slate-900">Manage catalog</h1>
        <p className="text-sm text-slate-600">Add, edit, or remove titles. Hook this view to Firestore using server actions.</p>
      </div>
      <div className="card-surface space-y-3">
        <div className="grid grid-cols-4 text-xs font-semibold uppercase text-slate-500">
          <span>Title</span>
          <span>Category</span>
          <span>Price</span>
          <span>Stock</span>
        </div>
        {localBooks.map((book) => (
          <div key={book.id} className="grid grid-cols-4 items-center text-sm text-slate-700">
            <span className="font-semibold text-slate-900">{book.title}</span>
            <span>{book.category}</span>
            <span>₹{book.price}</span>
            <span>{book.stock}</span>
          </div>
        ))}
        <p className="text-sm text-slate-500">
          To enable full CRUD, connect this page to Firestore collections (books, categories, orders) and restrict access using Firebase Security Rules.
        </p>
      </div>
    </div>
  );
}
