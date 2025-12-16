# Arpit Library — Where Knowledge Meets Books

A premium, conversion-focused online bookstore built with Next.js 14, Tailwind CSS, Firebase (Auth/Firestore/Storage), and Razorpay checkout.

## Features
- Hero, featured books, category discovery, and trust badges
- Advanced book listing with search, filters, and sorting
- Detailed book pages with rich metadata and stock signals
- Cart with quantity management and Razorpay checkout hand-off
- Firebase Authentication flows and protected dashboard shell
- Admin panel stub ready for Firestore-powered CRUD
- SEO-ready metadata, SSR-friendly layout, and responsive design

## Getting started
1. Install dependencies
   ```bash
   npm install
   ```
2. Add environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key
   ```
3. Run the dev server
   ```bash
   npm run dev
   ```

## Firebase collections
- `users` — profile and role metadata (admin flag via custom claims)
- `books` — title, author, category, price, rating, stock, cover URL
- `categories` — curated category listing and sorting order
- `orders` — user reference, cart items, Razorpay payment info, status
- `reviews` — user reference, book reference, rating, comment, timestamps

## Deployment
- Deploy frontend with `npm run build` then Firebase Hosting.
- Secure Firestore with rules restricting writes to admins and scoping user data by UID.
- Configure Razorpay webhook for payment verification and order updates.
