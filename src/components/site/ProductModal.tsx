import { useEffect, useState } from "react";
import { Heart, Minus, Plus, Share2, X, ShoppingBag, Zap } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const { add, toggleWishlist, wishlist } = useCart();

  useEffect(() => {
    setQty(1); setZoom(false);
    if (!product) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [product, onClose]);

  if (!product) return null;
  const wished = wishlist.includes(product.id);

  return (
    <div className="fixed inset-0 z-[80] animate-fade">
      <div className="absolute inset-0 bg-onyx/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative h-full w-full flex items-stretch justify-center overflow-y-auto">
        <div className="relative w-full max-w-[1400px] my-4 md:my-10 mx-4 bg-background border border-border shadow-luxury animate-rise">
          <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center glass hover:text-primary-glow">
            <X className="h-5 w-5" />
          </button>
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-square lg:aspect-auto lg:min-h-[720px] bg-charcoal overflow-hidden cursor-zoom-in" onClick={() => setZoom((z) => !z)}>
              <img
                src={product.image}
                alt={product.name}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${zoom ? "scale-150" : "scale-100"}`}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-onyx/40 via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-14 flex flex-col">
              <p className="eyebrow text-primary-glow">{product.collection}</p>
              <h2 className="font-display text-5xl md:text-6xl mt-3">{product.name}</h2>
              <p className="text-muted-foreground mt-3 italic font-display text-xl">{product.tagline}</p>
              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">{product.description}</p>

              <div className="mt-8 grid grid-cols-1 gap-3">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between border-b border-border/60 pb-2">
                    <span className="eyebrow">{s.label}</span>
                    <span className="text-sm">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.features.map((f) => (
                  <span key={f} className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 hairline">{f}</span>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl">{formatPrice(product.price)}</span>
                  <div className="flex items-center hairline">
                    <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-2.5 hover:text-primary-glow"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-10 text-center text-sm">{qty}</span>
                    <button onClick={() => setQty((q) => q + 1)} className="p-2.5 hover:text-primary-glow"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => add(product, qty)} className="btn-ghost-luxury">
                    <ShoppingBag className="h-3.5 w-3.5" /> Add to Bag
                  </button>
                  <button onClick={() => { add(product, qty); onClose(); }} className="btn-luxury">
                    <Zap className="h-3.5 w-3.5" /> Buy Now
                  </button>
                </div>
                <div className="flex items-center justify-between mt-6 text-xs text-muted-foreground">
                  <button onClick={() => toggleWishlist(product.id)} className="flex items-center gap-2 hover:text-primary-glow uppercase tracking-[0.25em]">
                    <Heart className={`h-4 w-4 ${wished ? "fill-primary-glow text-primary-glow" : ""}`} /> Wishlist
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary-glow uppercase tracking-[0.25em]">
                    <Share2 className="h-4 w-4" /> Share
                  </button>
                  <span className="uppercase tracking-[0.25em]">Reviews · 4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}