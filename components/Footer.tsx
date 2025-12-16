import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="container-section grid gap-8 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-primary-800">Arpit Library</p>
          <p className="text-sm text-slate-600">Where Knowledge Meets Books</p>
          <p className="mt-4 text-sm text-slate-500">Premium online bookstore delivering across India with secure checkout and curated picks.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-700">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
            <Link href="/books">Shop Books</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/dashboard">My Orders</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-700">Support</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
            <Link href="/policies/shipping">Shipping</Link>
            <Link href="/policies/refund">Returns & Refunds</Link>
            <Link href="/policies/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-slate-700">Need Help?</p>
          <p className="text-sm text-slate-500">Call us at <span className="font-semibold text-primary-700">+91 98765 43210</span></p>
          <p className="text-sm text-slate-500">Email: hello@arpitlibrary.com</p>
        </div>
      </div>
      <div className="container-section mt-10 flex flex-col justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 md:flex-row">
        <span>© {new Date().getFullYear()} Arpit Library. All rights reserved.</span>
        <span>Secure checkout powered by Razorpay • Hosted on Firebase</span>
      </div>
    </footer>
  );
}
