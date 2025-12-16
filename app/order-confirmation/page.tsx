import Link from 'next/link';

export default function OrderConfirmation() {
  return (
    <div className="container-section card-surface space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Order confirmed ✅</h1>
      <p className="text-slate-600">Thank you for purchasing from Arpit Library. We have emailed you the order details.</p>
      <Link href="/dashboard" className="button-primary inline-flex">
        Go to my orders
      </Link>
    </div>
  );
}
