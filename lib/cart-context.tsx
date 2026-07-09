"use client";

// Cart state for the Vesper Digitizing store.
//
// Design notes:
//   • useReducer for predictable state transitions
//   • localStorage persistence (hydrated on mount, saved on every change)
//   • `hydrated` flag prevents SSR/CSR mismatch — count starts at 0 on the
//     server, then becomes the real value after the first effect runs
//   • `isOpen` lives in the same store so the AddToCartButton can open the
//     drawer directly via the ADD action
//   • Body scroll is locked while the drawer is open

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import { ALL_PRODUCTS, type Product } from "./products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  hydrated: boolean;
};

type CartAction =
  | { type: "ADD"; slug: string; quantity?: number }
  | { type: "REMOVE"; slug: string }
  | { type: "INCREMENT"; slug: string }
  | { type: "DECREMENT"; slug: string }
  | { type: "SET_QTY"; slug: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "HYDRATE"; items: CartItem[] };

const STORAGE_KEY = "vesper-cart-v1";

const initialState: CartState = {
  items: [],
  isOpen: false,
  hydrated: false,
};

function findProduct(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.items, hydrated: true };

    case "ADD": {
      const product = findProduct(action.slug);
      if (!product) return state;
      const qty = Math.max(1, action.quantity ?? 1);
      const existing = state.items.find((i) => i.slug === action.slug);
      const items = existing
        ? state.items.map((i) =>
            i.slug === action.slug
              ? { ...i, quantity: i.quantity + qty }
              : i
          )
        : [
            ...state.items,
            {
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: qty,
            },
          ];
      return { ...state, items, isOpen: true };
    }

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.slug !== action.slug),
      };

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.slug === action.slug ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };

    case "DECREMENT":
      // Drop the line if it would fall to 0 — that's what users expect from a
      // minus button at qty 1.
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.slug === action.slug ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      };

    case "SET_QTY":
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.slug !== action.slug),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.slug === action.slug
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };

    case "CLEAR":
      return { ...state, items: [] };

    case "OPEN":
      return { ...state, isOpen: true };

    case "CLOSE":
      return { ...state, isOpen: false };

    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  hydrated: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  increment: (slug: string) => void;
  decrement: (slug: string) => void;
  setQty: (slug: string, quantity: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // Sanity-check each item — drop anything that doesn't look right
          const items: CartItem[] = parsed
            .filter(
              (i) =>
                i &&
                typeof i.slug === "string" &&
                typeof i.name === "string" &&
                typeof i.price === "number" &&
                typeof i.image === "string" &&
                typeof i.quantity === "number" &&
                i.quantity > 0
            )
            .map((i) => ({
              slug: i.slug,
              name: i.name,
              price: i.price,
              image: i.image,
              quantity: Math.floor(i.quantity),
            }));
          dispatch({ type: "HYDRATE", items });
          return;
        }
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
    dispatch({ type: "HYDRATE", items: [] });
  }, []);

  // Persist items to localStorage whenever they change (after hydration)
  useEffect(() => {
    if (!state.hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [state.items, state.hydrated]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (state.isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [state.isOpen]);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const value: CartContextValue = {
    items: state.items,
    isOpen: state.isOpen,
    hydrated: state.hydrated,
    itemCount,
    subtotal,
    addItem: (slug, quantity) => dispatch({ type: "ADD", slug, quantity }),
    removeItem: (slug) => dispatch({ type: "REMOVE", slug }),
    increment: (slug) => dispatch({ type: "INCREMENT", slug }),
    decrement: (slug) => dispatch({ type: "DECREMENT", slug }),
    setQty: (slug, quantity) => dispatch({ type: "SET_QTY", slug, quantity }),
    clear: () => dispatch({ type: "CLEAR" }),
    openCart: () => dispatch({ type: "OPEN" }),
    closeCart: () => dispatch({ type: "CLOSE" }),
    toggleCart: () => dispatch({ type: "TOGGLE" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }
  return ctx;
}
