'use client';

import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AuthPage() {
  const { signInUser, signUpUser } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === 'login') {
        await signInUser(email, password);
        setMessage('Logged in successfully');
      } else {
        await signUpUser(email, password);
        setMessage('Account created. You are now logged in.');
      }
    } catch (err: any) {
      setMessage(err.message ?? 'Authentication failed');
    }
  };

  return (
    <div className="container-section grid gap-10 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm font-semibold text-primary-700">Welcome</p>
        <h1 className="text-3xl font-bold text-slate-900">Login or create account</h1>
        <p className="text-slate-600">
          Secure Firebase Authentication protects your profile and order history. Use a strong password and keep your inbox handy for sign-in links.
        </p>
        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
          <p className="text-sm font-semibold text-slate-700">Admin note</p>
          <p className="text-sm text-slate-500">Add admin roles via Firebase Custom Claims to protect the admin panel.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="card-surface space-y-4">
        <div className="flex gap-2 rounded-full bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${mode === 'login' ? 'bg-white text-primary-700 shadow' : 'text-slate-500'}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${mode === 'signup' ? 'bg-white text-primary-700 shadow' : 'text-slate-500'}`}
          >
            Create account
          </button>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-400 focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-400 focus:outline-none"
          />
        </div>
        <button type="submit" className="button-primary w-full justify-center">
          {mode === 'login' ? 'Login securely' : 'Create account'}
        </button>
        {message && <p className="text-sm text-primary-700">{message}</p>}
      </form>
    </div>
  );
}
