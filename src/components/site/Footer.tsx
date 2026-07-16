import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="font-display text-4xl tracking-[0.15em] mb-4">EMERIAL</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Crafted Beyond Time. Ten signature timepieces, hand-assembled in La Chaux-de-Fonds and delivered to a life measured in moments.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="h-9 w-9 flex items-center justify-center hairline hover:border-primary-glow hover:text-primary-glow transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/collections" className="hover:text-primary-glow transition-colors">Collections</Link></li>
              <li><Link to="/timepieces" className="hover:text-primary-glow transition-colors">Timepieces</Link></li>
              <li><Link to="/craftsmanship" className="hover:text-primary-glow transition-colors">Craftsmanship</Link></li>
              <li><Link to="/journal" className="hover:text-primary-glow transition-colors">Journal</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Collections</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/timepieces" search={{ c: "Regalia" }} className="hover:text-primary-glow transition-colors">Regalia</Link></li>
              <li><Link to="/timepieces" search={{ c: "Abyss" }} className="hover:text-primary-glow transition-colors">Abyss</Link></li>
              <li><Link to="/timepieces" search={{ c: "Apex" }} className="hover:text-primary-glow transition-colors">Apex</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Support</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Warranty</li>
              <li>Care Guide</li>
              <li>Shipping</li>
              <li>Contact Concierge</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Legal</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="eyebrow mb-3">The Atelier Newsletter</p>
            <form className="flex max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border-b border-border py-2 text-sm outline-none focus:border-primary-glow transition-colors"
              />
              <button className="ml-4 eyebrow hover:text-primary-glow transition-colors">Subscribe →</button>
            </form>
          </div>
          <p className="text-xs text-muted-foreground md:text-right">
            © {new Date().getFullYear()} EMERIAL SA · Crafted Beyond Time · Swiss Made
          </p>
        </div>
      </div>
    </footer>
  );
}