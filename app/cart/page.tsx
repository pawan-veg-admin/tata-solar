'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  return (
    <div className="container-section space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary-700">Cart</p>
          <h1 className="text-3xl font-bold text-slate-900">Review your selection</h1>
        </div>
        {items.length > 0 && (
          <button onClick={clearCart} className="text-sm font-semibold text-primary-700">
            Clear cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="card-surface">
          <p className="text-slate-600">Your cart is empty.</p>
          <Link href="/books" className="button-primary mt-4 inline-flex">
            Browse books
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card-surface flex items-center gap-4">
                <div className="h-20 w-16 rounded-lg bg-slate-100" />
                <div className="flex-1">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">by {item.author}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <input
                      type="number"
                      min={1}
                      max={item.stock}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="w-20 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary-400 focus:outline-none"
                    />
                    <button className="text-sm text-red-500" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-lg font-bold text-primary-700">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="card-surface space-y-4">
            <p className="text-lg font-bold text-slate-900">Order summary</p>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex items-center justify-between border-t pt-3 text-lg font-bold text-primary-700">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="button-primary w-full justify-center">
              Proceed to checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
