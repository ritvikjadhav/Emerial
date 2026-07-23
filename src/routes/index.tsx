import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroWatch from "@/assets/hero-watch.png";
import craftsmanshipImg from "@/assets/craftsmanship.png";
import { collections, products, formatPrice, type Product } from "@/lib/products";
import { Reveal, Counter } from "@/components/site/Reveal";
import { ProductModal } from "@/components/site/ProductModal";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/")({
  component: Index,
});

const PARTICLES = [
  { t: 12, l: 8, d: 7.5, a: 0.2 },
  { t: 23, l: 74, d: 9, a: 1.4 },
  { t: 38, l: 32, d: 6, a: 2.1 },
  { t: 49, l: 88, d: 10, a: 0.6 },
  { t: 61, l: 15, d: 8, a: 3.1 },
  { t: 72, l: 55, d: 7, a: 1.8 },
  { t: 84, l: 26, d: 11, a: 0.9 },
  { t: 18, l: 46, d: 8.5, a: 2.4 },
  { t: 55, l: 68, d: 6.5, a: 1.2 },
  { t: 30, l: 90, d: 9.5, a: 0.4 },
  { t: 66, l: 40, d: 7.2, a: 2.7 },
  { t: 44, l: 12, d: 10.5, a: 1.6 },
  { t: 78, l: 78, d: 8.2, a: 0.3 },
  { t: 90, l: 58, d: 6.8, a: 2.9 },
];

function Index() {
  const [active, setActive] = useState<Product | null>(null);
  const featured = products.find((p) => p.id === "carbon-legacy")!;
  const { add } = useCart();

  // Unified State Management for Mobile Accordions
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-between items-center overflow-hidden pt-36 pb-20 bg-background">
        <div className="absolute inset-0 pointer-events-none z-10 bg-background/10" />
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_80%)] z-10" />
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-glow/10 blur-[120px]" />
          
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary-glow/40"
              style={{
                top: `${p.t}%`,
                left: `${p.l}%`,
                animation: `float-slow ${p.d}s ease-in-out ${p.a}s infinite`,
                boxShadow: "0 0 12px rgba(45,212,168,0.6)",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-20 mx-auto max-w-[1440px] px-6 lg:px-10 w-full grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center flex-grow">
          <div className="animate-rise text-center lg:text-left">
            <p className="eyebrow mb-6 tracking-[0.4em] text-xs">Maison Emerial · Est. Genève</p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-tight text-white">
              Crafted<br />
              <span className="italic text-emerald-gradient font-normal pe-4 inline-block">Beyond</span> Time.
            </h1>
            <p className="mt-8 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground/90 leading-relaxed font-display italic tracking-wide">
              Luxury is measured in moments — and in the ten timepieces we release each decade.
            </p>
            <div className="mt-10 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-6">
              <Link to="/timepieces" className="btn-luxury">
                Explore Collection
              </Link>
              <Link to="/craftsmanship" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-primary-glow transition-colors font-medium">
                Discover More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square animate-float-slow max-w-[450px] mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-3xl" />
            <img
              src={heroWatch}
              alt="EMERIAL Carbon Legacy signature timepiece"
              className="relative h-full w-full object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>
        
        {/* EDIT: CLEAN SCROLL INDICATOR WITH DOWNWARD GLOW */}
        <div className="relative z-20 flex flex-col items-center gap-2 mt-8 cursor-pointer select-none">
          <span className="eyebrow text-[9px] tracking-[0.5em] text-primary-glow font-bold uppercase">
            Scroll
          </span>

          <div className="relative flex flex-col items-center">
            {/* Line with animated gradient ray */}
            <div className="h-10 w-px bg-gradient-to-b from-primary-glow via-primary-glow/50 to-transparent relative overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white via-primary-glow to-transparent animate-scroll-hint" />
            </div>

            {/* Fading glow aura pointing downwards */}
            <div className="absolute top-4 w-12 h-16 bg-gradient-to-b from-primary-glow/30 via-primary-glow/10 to-transparent blur-md pointer-events-none rounded-full" />

            {/* Arrow with rich drop-shadow glow (No box outline) */}
            <ChevronDown className="h-5 w-5 text-primary-glow relative z-10 animate-bounce [animation-duration:2.2s] drop-shadow-[0_4px_14px_rgba(45,212,168,0.9)]" />
          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="relative border-y border-border/40 py-16 bg-onyx">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {[
            { n: 10, s: "", label: "Signature Timepieces" },
            { n: 3, s: "", label: "Distinct Collections" },
            { n: 5, s: "-YR", label: "International Warranty" },
            { n: 100, s: "%", label: "Swiss Automatic Movement" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center lg:text-left">
              <p className="font-display text-5xl md:text-7xl text-emerald-gradient">
                <Counter to={s.n} suffix={s.s} />
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mt-3 font-medium">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. FEATURED UNIT */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div onClick={() => setActive(featured)} className="relative aspect-square bg-charcoal overflow-hidden group cursor-pointer border border-border/30">
              <img src={featured.image} alt={featured.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-103" />
              <div className="absolute top-6 left-6 eyebrow glass px-3 py-1.5">Flagship · Regalia</div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="eyebrow text-primary-glow mb-4">Featured Timepiece</p>
            <h2 className="font-display text-5xl md:text-6xl leading-none">{featured.name}</h2>
            <p className="font-display italic text-2xl text-muted-foreground mt-4">{featured.tagline}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">{featured.description}</p>
            
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg border-t border-border/30 pt-6">
              {featured.specs.map((s, idx) => (
                <div key={s.label} className={`pb-2 ${idx < 2 ? 'border-b border-border/20' : ''}`}>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-medium">{s.label}</p>
                  <p className="text-sm font-display text-white">{s.value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button onClick={() => add(featured)} className="btn-luxury w-full md:w-auto px-12">
                Add to Bag · {formatPrice(featured.price)}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. COLLECTIONS LINK GRID */}
      <section className="relative py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-primary-glow mb-4">The Collections</p>
            <h2 className="font-display text-5xl md:text-6xl">Three languages,<br /><span className="italic">one voice.</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <Link to="/timepieces" search={{ c: c.name }} className="group relative block overflow-hidden bg-charcoal border border-border/30">
                  <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                    <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-2000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                    <p className="eyebrow text-primary-glow mb-2">{c.count} Timepieces</p>
                    <h3 className="font-display text-3xl md:text-4xl">{c.name}</h3>
                    <p className="font-display italic text-base md:text-lg text-muted-foreground mt-1">{c.tagline}</p>
                    <p className="hidden md:block text-xs text-muted-foreground/80 mt-3 max-w-md leading-relaxed">{c.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 eyebrow text-foreground group-hover:text-primary-glow transition-colors">
                      Discover <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP ASSEMBLY FEED */}
      <section className="relative py-24 bg-onyx">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] max-h-[500px] overflow-hidden border border-border/30">
              <img src={craftsmanshipImg} alt="Master watchmaker assembly details" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-primary-glow mb-6">The Craft</p>
            <h2 className="font-display text-5xl md:text-6xl">Ninety days.<br /><span className="italic">One watch.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              From the initial architecture to the final regulation, every EMERIAL passes through five specialized Swiss ateliers and the hands of eleven master craftspeople. Our legacy is defined by rigorous manual precision.
            </p>
            <div className="mt-10">
              <Link to="/craftsmanship" className="btn-luxury inline-block text-center w-full md:w-auto px-10">
                Discover Craftsmanship
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. EDITORIAL QUOTE CANVAS */}
      <section className="relative py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-10">
          <p className="font-display text-[22vw] leading-none text-foreground/[0.02] tracking-widest whitespace-nowrap select-none">TIMELESS</p>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center z-20">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-8">The EMERIAL Experience</p>
            <p className="font-display text-4xl md:text-6xl leading-[1.1] text-white">
              A watch does not tell time.<br />
              <span className="italic text-emerald-gradient">It composes it.</span>
            </p>
            <p className="mt-8 text-muted-foreground/90 max-w-xl mx-auto leading-relaxed text-sm md:text-base font-display italic">
              Each EMERIAL is numbered, registered, and accompanied by a certificate signed by the master watchmaker who assembled it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. APPOINTMENT CONCIERGE INTERFACE */}
      <section className="relative py-24 border-t border-border/20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-4">The Concierge</p>
            <h2 className="font-display text-5xl md:text-6xl">A private<br /><span className="italic">appointment.</span></h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Our concierge team is available for private viewings, bespoke commissions, and after-sales care.
            </p>
            <div className="mt-12 space-y-5 text-sm">
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow text-[9px]">Paris</span><span className="text-muted-foreground">1 Place Vendôme, 75001</span></div>
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow text-[9px]">Genève</span><span className="text-muted-foreground">Rue du Rhône 62, 1204</span></div>
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow text-[9px]">Hours</span><span className="text-muted-foreground">Tue — Sat · 10:00 — 19:00</span></div>
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow text-[9px]">Contact</span><span className="text-muted-foreground border-b border-border/40 pb-0.5 inline-block w-fit">concierge@emerial.watch</span></div>
            </div>
          </Reveal>
          
          <Reveal delay={150}>
            <form onSubmit={(e) => e.preventDefault()} className="glass p-8 md:p-12 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input placeholder="First name" className="bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
                <input placeholder="Last name" className="bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
              <input placeholder="Timepiece of interest" className="w-full bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
              <textarea placeholder="Your message" rows={3} className="w-full bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors resize-none" />
              
              <button className="w-full py-4 text-xs font-medium uppercase tracking-widest text-black bg-white border border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:border-primary-glow hover:shadow-[0_0_30px_rgba(45,212,168,0.25)] cursor-pointer">
                Request Appointment
              </button>
            </form>
          </Reveal>
        </div>
      </section>
      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
