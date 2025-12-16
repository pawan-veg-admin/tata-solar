'use client';

import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { Book } from '../data/books';

type CartItem = Book & { quantity: number };

type CartState = { items: CartItem[] };

type CartAction =
  | { type: 'ADD'; book: Book }
  | { type: 'REMOVE'; id: string }
  | { type: 'UPDATE_QTY'; id: string; quantity: number }
  | { type: 'CLEAR' };

const CartContext = createContext<{
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}>({
  items: [],
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  updateQuantity: () => undefined,
  clearCart: () => undefined
});

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((item) => item.id === action.book.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === action.book.id ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) } : item
          )
        };
      }
      return { items: [...state.items, { ...action.book, quantity: 1 }] };
    }
    case 'REMOVE':
      return { items: state.items.filter((item) => item.id !== action.id) };
    case 'UPDATE_QTY':
      return {
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: Math.max(1, Math.min(action.quantity, item.stock)) } : item
        )
      };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  useEffect(() => {
    const stored = localStorage.getItem('arpit-cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        dispatch({ type: 'CLEAR' });
        parsed.forEach((item) => dispatch({ type: 'ADD', book: item }));
      } catch (err) {
        console.warn('Failed to hydrate cart', err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('arpit-cart', JSON.stringify(state.items));
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      addToCart: (book: Book) => dispatch({ type: 'ADD', book }),
      removeFromCart: (id: string) => dispatch({ type: 'REMOVE', id }),
      updateQuantity: (id: string, quantity: number) => dispatch({ type: 'UPDATE_QTY', id, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR' })
    }),
    [state.items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
