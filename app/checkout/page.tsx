'use client';

import { useState } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const amount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePay = async () => {
    setLoading(true);
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: 'INR',
      name: 'Arpit Library',
      description: 'Book purchase',
      handler: () => {
        clearCart();
        router.push('/order-confirmation');
      },
      prefill: {
        email: 'customer@example.com'
      }
    } as any;
    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
    setLoading(false);
  };

  if (items.length === 0) {
    return (
      <div className="container-section card-surface">
        <p className="text-slate-600">Your cart is empty. Add books to proceed.</p>
      </div>
    );
  }

  return (
    <div className="container-section space-y-6">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div>
        <p className="text-sm font-semibold text-primary-700">Checkout</p>
        <h1 className="text-3xl font-bold text-slate-900">Secure payment</h1>
        <p className="text-sm text-slate-600">Payments are processed via Razorpay with UPI, cards, and wallets.</p>
      </div>
      <div className="card-surface space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between text-sm text-slate-700">
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex items-center justify-between border-t pt-4 text-lg font-bold text-primary-700">
          <span>Total</span>
          <span>₹{amount.toFixed(2)}</span>
        </div>
        <button onClick={handlePay} className="button-primary w-full justify-center" disabled={loading}>
          {loading ? 'Processing...' : 'Pay with Razorpay'}
        </button>
      </div>
    </div>
  );
}
