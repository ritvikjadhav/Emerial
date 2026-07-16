import { Heart, Eye, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product, onOpen }: { product: Product; onOpen: (p: Product) => void }) {
  const { add, toggleWishlist, wishlist } = useCart();
  const wished = wishlist.includes(product.id);
  return (
    <div className="group relative flex flex-col">
      <div
        className="relative aspect-[3/4] overflow-hidden bg-charcoal cursor-pointer"
        onClick={() => onOpen(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="eyebrow px-2 py-1 glass text-[10px]">{product.collection}</span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          aria-label="Wishlist"
          className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center glass hover:text-primary-glow transition-colors"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-primary-glow text-primary-glow" : ""}`} />
        </button>
        <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(product); }}
            className="flex-1 glass-strong text-xs uppercase tracking-[0.25em] py-3 flex items-center justify-center gap-2 hover:text-primary-glow"
          >
            <Eye className="h-3.5 w-3.5" /> Quick View
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); add(product); }}
            aria-label="Add to cart"
            className="h-11 w-11 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary-glow transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="pt-5">
        <p className="font-display text-2xl">{product.name}</p>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{product.tagline}</p>
        <p className="mt-3 text-sm tracking-widest">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}