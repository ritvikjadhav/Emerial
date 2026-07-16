import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/craftsmanship", label: "Craftsmanship" },
  { to: "/timepieces", label: "Timepieces" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, open: openCart, wishlist } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display text-2xl tracking-[0.2em] text-foreground group-hover:text-primary-glow transition-colors">
                EMERIAL
              </span>
            </Link>
            <nav className="hidden lg:flex items-center justify-center gap-10">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="eyebrow hover:text-primary-glow transition-colors relative"
                  activeProps={{ className: "eyebrow text-primary-glow" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 lg:gap-4 justify-end">
              <button aria-label="Search" className="p-2 hover:text-primary-glow transition-colors">
                <Search className="h-[18px] w-[18px]" />
              </button>
              <button aria-label="Wishlist" className="p-2 hover:text-primary-glow transition-colors relative">
                <Heart className="h-[18px] w-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 text-[9px] bg-primary text-primary-foreground rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button aria-label="Cart" onClick={openCart} className="p-2 hover:text-primary-glow transition-colors relative">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 text-[9px] bg-primary text-primary-foreground rounded-full h-4 w-4 flex items-center justify-center animate-pulse-glow">
                    {count}
                  </span>
                )}
              </button>
              <button
                aria-label="Menu"
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 hover:text-primary-glow transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className={`h-px w-full transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"} bg-gradient-to-r from-transparent via-primary/40 to-transparent`} />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-onyx" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-y-0 right-0 w-full sm:w-[420px] bg-background border-l border-border p-8 flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-16">
            <span className="font-display text-xl tracking-[0.2em]">EMERIAL</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-foreground hover:text-primary-glow transition-colors"
                style={{ animation: open ? `rise 0.6s ${i * 60}ms cubic-bezier(0.19,1,0.22,1) both` : "none" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-border">
            <p className="eyebrow mb-2">Contact</p>
            <p className="text-sm text-muted-foreground">1 Place Vendôme, Paris</p>
            <p className="text-sm text-muted-foreground">concierge@emerial.watch</p>
          </div>
        </div>
      </div>
    </>
  );
}