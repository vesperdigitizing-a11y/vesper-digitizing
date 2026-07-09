"use client";

// Toast notification system.
//
// Usage in any client component:
//   import { useToast } from "@/lib/toast-context";
//   const { toast } = useToast();
//   toast({ title: "Added to cart!", description: "Item is now in your bag." });
//
// The <Toaster /> component is mounted once in app/layout.tsx and renders
// the active toasts in a fixed stack at top-right (mobile: top-center).

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ToastVariant = "success" | "error" | "info" | "cart";

export type Toast = {
  id: number;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number; // ms, default 3500
  image?: string; // optional thumbnail (used by cart toasts)
};

type ToastInput = Omit<Toast, "id">;

type ToastContextValue = {
  toast: (t: ToastInput) => void;
  dismiss: (id: number) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

let _toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timers = useRef<Record<number, number>>({});

  const dismiss = useCallback((id: number) => {
    setToasts((curr) => curr.filter((t) => t.id !== id));
    if (timers.current[id]) {
      window.clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
  }, []);

  const toast = useCallback(
    (input: ToastInput) => {
      const id = ++_toastId;
      const newToast: Toast = {
        id,
        duration: 3500,
        variant: "success",
        ...input,
      };
      setToasts((curr) => [...curr, newToast]);

      // Auto-dismiss after duration
      timers.current[id] = window.setTimeout(() => {
        dismiss(id);
      }, newToast.duration);
    },
    [dismiss]
  );

  // Cleanup all timers on unmount
  useEffect(() => {
    const t = timers.current;
    return () => {
      Object.values(t).forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <Toaster toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside a <ToastProvider>");
  }
  return ctx;
}

/* ─────────────────────────────────────────────────────────────────────────
   Toaster — renders the toast stack
   ───────────────────────────────────────────────────────────────────────── */

const VARIANT_ICON: Record<
  ToastVariant,
  { icon: ReactNode; ring: string; bar: string }
> = {
  success: {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    ring: "ring-[#16a34a]/30",
    bar: "bg-[#16a34a]",
  },
  error: {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    ring: "ring-[#c8102e]/30",
    bar: "bg-[#c8102e]",
  },
  info: {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    ring: "ring-[#3b82f6]/30",
    bar: "bg-[#3b82f6]",
  },
  cart: {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    ring: "ring-[#c8102e]/30",
    bar: "bg-[#c8102e]",
  },
};

function Toaster({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: number) => void;
}) {
  return (
    <div
      className="pointer-events-none fixed right-4 top-4 z-[300] flex w-full max-w-sm flex-col gap-3 sm:right-6 sm:top-6"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((t) => {
        const variant = t.variant ?? "success";
        const cfg = VARIANT_ICON[variant];
        return (
          <div
            key={t.id}
            role="status"
            className={`pointer-events-auto relative flex animate-slide-in-right items-start gap-3 overflow-hidden rounded-xl bg-white p-4 shadow-xl ring-1 ${cfg.ring}`}
          >
            {/* Color bar */}
            <div className={`absolute left-0 top-0 h-full w-1 ${cfg.bar}`} />

            {/* Optional image (cart thumbnail) */}
            {t.image && (
              <div
                className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-[#f5f5f5] ring-1 ring-[#e5e7eb]"
                style={{
                  backgroundImage: `url(${t.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}

            {/* Icon */}
            {!t.image && (
              <div className={`shrink-0 ${cfg.bar} text-white`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-current/10">
                  <span className="text-current">{cfg.icon}</span>
                </span>
              </div>
            )}

            {/* Text */}
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-sm font-bold text-[#1a1a1a]">{t.title}</p>
              {t.description && (
                <p className="mt-0.5 text-xs text-[#6b7280]">{t.description}</p>
              )}
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => onDismiss(t.id)}
              aria-label="Dismiss"
              className="shrink-0 text-[#9ca3af] transition-colors hover:text-[#1a1a1a]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}
