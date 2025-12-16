'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [orders] = useState([
    {
      id: 'AL-1001',
      total: 1548,
      status: 'Processing',
      items: 3,
      placed: '2 Feb 2025'
    }
  ]);

  useEffect(() => {
    // Placeholder for Firestore query once connected
  }, []);

  if (loading) return <p className="container-section">Loading...</p>;
  if (!user)
    return (
      <div className="container-section card-surface">
        <p className="text-slate-600">Please login to view your orders.</p>
      </div>
    );

  return (
    <div className="container-section space-y-4">
      <div>
        <p className="text-sm font-semibold text-primary-700">My account</p>
        <h1 className="text-3xl font-bold text-slate-900">Orders</h1>
      </div>
      <div className="space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="card-surface flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-900">Order {order.id}</p>
              <p className="text-sm text-slate-500">Placed on {order.placed}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>{order.items} items</span>
              <span className="font-semibold text-primary-700">₹{order.total}</span>
              <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">{order.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
