import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./products";

export interface CartItem { product: Product; quantity: number; }

interface CartContext {
  items: CartItem[];
  wishlist: string[];
  isOpen: boolean;
  add: (product: Product, quantity?: number) => void;
  remove: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  toggleWishlist: (id: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  subtotal: number;
  count: number;
}

const Ctx = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isOpen, setOpen] = useState(false);

  const add = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i);
      return [...prev, { product, quantity }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => setItems((p) => p.filter((i) => i.product.id !== id)), []);
  const updateQty = useCallback((id: string, q: number) => setItems((p) => p.map((i) => i.product.id === id ? { ...i, quantity: Math.max(1, q) } : i)), []);
  const toggleWishlist = useCallback((id: string) => setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContext>(() => ({
    items, wishlist, isOpen,
    add, remove, updateQty, toggleWishlist, clear,
    open: () => setOpen(true),
    close: () => setOpen(false),
    subtotal: items.reduce((s, i) => s + i.product.price * i.quantity, 0),
    count: items.reduce((s, i) => s + i.quantity, 0),
  }), [items, wishlist, isOpen, add, remove, updateQty, toggleWishlist, clear]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}