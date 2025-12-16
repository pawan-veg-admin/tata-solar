import Link from 'next/link';
import { ArrowRightIcon, ShieldCheckIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';
import BookCard from '../components/BookCard';
import { books, categories } from '../data/books';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="container-section grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
            <SparklesIcon className="h-5 w-5" /> Premium Online Bookstore
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Arpit Library — Where Knowledge Meets Books
          </h1>
          <p className="text-lg text-slate-600">
            Discover curated titles across fiction, non-fiction, academic, competitive exams, and kids categories with trusted fulfillment,
            secure Razorpay checkout, and pan-India delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/books" className="button-primary">
              Shop Books <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="#trust" className="button-secondary">
              Why Arpit Library?
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-500">
            <span className="flex items-center gap-2"><ShieldCheckIcon className="h-5 w-5 text-emerald-500" /> Secure Razorpay checkout</span>
            <span className="flex items-center gap-2"><ShieldCheckIcon className="h-5 w-5 text-emerald-500" /> Firebase-authenticated user accounts</span>
            <span className="flex items-center gap-2"><ShieldCheckIcon className="h-5 w-5 text-emerald-500" /> Reviews & trusted curation</span>
          </div>
        </div>
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
          <p className="text-sm font-semibold text-primary-700">Featured this week</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {books.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="container-section space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-primary-700">Browse</p>
            <h2 className="text-2xl font-bold text-slate-900">Shop by category</h2>
          </div>
          <Link href="/categories" className="button-secondary">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <div key={category} className="card-surface flex flex-col gap-3">
              <p className="text-lg font-semibold text-slate-800">{category}</p>
              <p className="text-sm text-slate-500">Top picks, fresh arrivals, and exam-ready handbooks curated for {category.toLowerCase()} readers.</p>
              <Link href={`/categories?selected=${encodeURIComponent(category)}`} className="text-sm font-semibold text-primary-700">
                Explore ↗
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="trust" className="container-section grid gap-6 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-100 md:grid-cols-3">
        {[
          { title: 'Verified reviews', detail: 'Readers rate us 4.8★ for delivery speed, packaging, and authentic titles.' },
          { title: 'Secure payments', detail: 'Razorpay-powered checkout with UPI, cards, and wallets. PCI-DSS compliant.' },
          { title: 'Fast dispatch', detail: 'Same-day processing from regional warehouses with shipment tracking.' }
        ].map((item) => (
          <div key={item.title} className="space-y-2">
            <StarIcon className="h-6 w-6 text-amber-500" />
            <p className="text-lg font-semibold text-slate-900">{item.title}</p>
            <p className="text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
