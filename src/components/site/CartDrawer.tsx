import { useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { isOpen, close, items, updateQty, remove, subtotal } = useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <div className={`fixed inset-0 z-[70] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
      <div
        className={`absolute inset-0 bg-onyx/80 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={close}
      />
      <aside
        className={`absolute inset-y-0 right-0 w-full sm:w-[440px] bg-background border-l border-border flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <p className="eyebrow">Shopping Bag</p>
            <p className="font-display text-2xl mt-1">{items.length} {items.length === 1 ? "piece" : "pieces"}</p>
          </div>
          <button onClick={close} aria-label="Close cart" className="p-2 hover:text-primary-glow">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <p className="font-display text-3xl mb-2">Your bag is empty</p>
              <p className="text-sm text-muted-foreground">Every masterpiece begins with a single choice.</p>
            </div>
          ) : (
            <ul>
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 p-6 border-b border-border/60">
                  <div className="h-24 w-24 shrink-0 bg-charcoal overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="eyebrow text-primary-glow">{product.collection}</p>
                    <p className="font-display text-lg mt-1 truncate">{product.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{formatPrice(product.price)}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center hairline">
                        <button onClick={() => updateQty(product.id, quantity - 1)} className="p-1.5 hover:text-primary-glow"><Minus className="h-3 w-3" /></button>
                        <span className="w-8 text-center text-sm">{quantity}</span>
                        <button onClick={() => updateQty(product.id, quantity + 1)} className="p-1.5 hover:text-primary-glow"><Plus className="h-3 w-3" /></button>
                      </div>
                      <button onClick={() => remove(product.id)} className="text-xs text-muted-foreground hover:text-destructive uppercase tracking-widest">Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Worldwide shipping</span>
              <span className="text-primary-glow">Complimentary</span>
            </div>
            <div className="flex items-center justify-between border-t border-border/60 pt-4">
              <span className="eyebrow">Total</span>
              <span className="font-display text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <button className="btn-luxury w-full">Proceed to Checkout</button>
            <button onClick={close} className="w-full text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">Continue Browsing</button>
          </div>
        )}
      </aside>
    </div>
  );
}