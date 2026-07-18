import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";
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

  // Accordion state management for mobile compressed footer directories
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-between items-center overflow-hidden pt-36 pb-24 bg-background">
        {/* Deep Background Matte Finish - Clean High-Contrast Base */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-background/10" />
        
        {/* Floating Watch Housing Backdrop & Ambient Particles (Preserved Exactly) */}
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
              <span className="italic text-emerald-gradient font-normal">Beyond</span> Time.
            </h1>
            <p className="mt-8 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground/90 leading-relaxed font-display italic tracking-wide">
              Luxury is measured in moments — and in the ten timepieces we release each decade.
            </p>
            {/* Fix Button Stacking: Side-by-Side Premium Layout */}
            <div className="mt-10 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-6">
              <Link to="/timepieces" className="btn-luxury">
                Explore Collection
              </Link>
              <Link to="/craftsmanship" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-primary-glow transition-colors font-medium">
                Discover More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          
          {/* Floating Watch Housing System (Preserved Exactly) */}
          <div className="relative aspect-square animate-float-slow max-w-[450px] mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-3xl" />
            <img
              src={heroWatch}
              alt="EMERIAL Carbon Legacy signature timepiece"
              className="relative h-full w-full object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>
        
        {/* Adjusted Scroll Element Spacing (Avoids Boundary Intersection Layout Issues) */}
        <div className="relative z-20 flex flex-col items-center gap-2 text-muted-foreground mt-12 cursor-pointer select-none">
          <span className="eyebrow text-[9px] tracking-[0.5em] opacity-80">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-muted/40 to-transparent relative overflow-hidden">
            <span className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-foreground/40 to-transparent animate-scroll-hint" />
          </div>
          <ChevronDown className="h-3 w-3 text-muted/60 animate-bounce [animation-duration:2.5s]" />
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="relative border-y border-border/40 py-20 bg-onyx">
        {/* Reorganized Grid: 2x2 Clean Balanced Mobile Configuration */}
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
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
              {/* Balanced Typography Label Scaling */}
              <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mt-3 font-medium">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. FEATURED UNIT */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            {/* Clickable Card Interface: Entire Image Frame Acts as Modal Trigger */}
            <div onClick={() => setActive(featured)} className="relative aspect-square bg-charcoal overflow-hidden group cursor-pointer border border-border/30">
              <img src={featured.image} alt={featured.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-103" />
              <div className="absolute top-6 left-6 eyebrow glass px-3 py-1.5">Flagship · Regalia</div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="eyebrow text-primary-glow mb-4">Featured Timepiece</p>
            <h2 className="font-display text-5xl md:text-6xl leading-none">{featured.name}</h2>
            <p className="font-display italic text-2xl text-muted-foreground mt-4">{featured.tagline}</p>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">{featured.description}</p>
            
            {/* Technical Specifications: Micro-grid separation via razor thin lines */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg border-t border-border/30 pt-6">
              {featured.specs.map((s, idx) => (
                <div key={s.label} className={`pb-4 ${idx < 2 ? 'border-b border-border/20' : ''}`}>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-medium">{s.label}</p>
                  <p className="text-sm font-display text-white">{s.value}</p>
                </div>
              ))}
            </div>
            
            {/* Consolidate Call-To-Actions: Lone Emerald Purchase System */}
            <div className="mt-10">
              <button onClick={() => add(featured)} className="btn-luxury w-full md:w-auto px-12">
                Add to Bag · {formatPrice(featured.price)}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. COLLECTIONS LINK GRID */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
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
                    {/* Elevated Mobile Scanning: Hidden descriptions on small mobile screen viewports */}
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
      <section className="relative py-32 bg-onyx">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-border/30">
              <img src={craftsmanshipImg} alt="Master watchmaker assembly details" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-primary-glow mb-6">The Craft</p>
            <h2 className="font-display text-5xl md:text-6xl">Ninety days.<br /><span className="italic">One watch.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              From the first sketch to the final regulation, every EMERIAL passes through five ateliers and the hands of eleven master craftspeople.
            </p>
            <ol className="mt-12 space-y-6">
              {[
                { n: "01", t: "Design", d: "Concept sketches and CAD architecture in Genève." },
                { n: "02", t: "Engineering", d: "Movement calibration and case prototyping." },
                { n: "03", t: "Assembly", d: "Hand-assembled in the La Chaux-de-Fonds atelier." },
                { n: "04", t: "Inspection", d: "1,200-hour COSC-grade certification and finishing." },
                { n: "05", t: "Delivery", d: "Presented in a hand-lacquered oak vitrine." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 80}>
                  {/* Dominant Typography Contrast: Step Titles dominant over layout digits */}
                  <div className="grid grid-cols-[36px_1fr] gap-4 items-baseline border-b border-border/20 pb-5">
                    <span className="font-sans text-xs tracking-wider text-primary-glow/60 font-medium">{step.n}</span>
                    <div>
                      <p className="font-display text-2xl text-foreground font-medium">{step.t}</p>
                      <p className="text-sm text-muted-foreground mt-1 max-w-md leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 6. METALLURGY METRICS */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-primary-glow mb-4">The Materials</p>
            <h2 className="font-display text-5xl md:text-6xl">Chosen for centuries,<br /><span className="italic">not seasons.</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Sapphire Crystal", d: "9 on the Mohs scale. Optical clarity that resists a lifetime." },
              { t: "Carbon Composite", d: "Forged in Switzerland — lighter than titanium, stronger than steel." },
              { t: "Titanium", d: "Aerospace-grade, hypoallergenic, warm to the skin." },
              { t: "316L Steel", d: "Marine-grade stainless, brushed and mirror-polished by hand." },
            ].map((m, i) => (
              <Reveal key={m.t} delay={i * 100}>
                {/* Structural Minimalism Cleanup: Placeholder icon systems removed completely */}
                <div className="group relative p-8 border border-border/30 bg-card/30 h-full transition-all duration-500 hover:border-foreground/30">
                  <p className="font-display text-2xl mb-3 text-white">{m.t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY EMERIAL PROMISES */}
      <section className="relative py-32 bg-onyx">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="eyebrow text-primary-glow mb-4">Why EMERIAL</p>
            <h2 className="font-display text-5xl md:text-6xl">Five promises,<br /><span className="italic">one signature.</span></h2>
          </Reveal>
          
          {/* Tightened Feed Layout: Modern alternating grid structure replacing distinct app card blocks */}
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { t: "Swiss Precision", d: "Every movement undergoes rigid COSC-grade regulation testing across 1,200 continuous hours." },
              { t: "Premium Materials", d: "Exclusively utilizing unblemished sapphire crystal, high-carat gold, and specialized carbon matrix configurations." },
              { t: "Luxury Packaging", d: "Each order arrives anchored within a customized, hand-lacquered solid oak presentation vitrine case." },
              { t: "Worldwide Shipping", d: "Fully complimentary, door-to-door courier logistics integrated with absolute comprehensive insurance." },
              { t: "5-Year Warranty", d: "Instant entry into our international concierge catalog network for continuous lifetime component upkeep." },
            ].map((w, i) => (
              <Reveal key={w.t} delay={i * 80}>
                <div className="grid md:grid-cols-[250px_1fr] gap-4 md:gap-12 pb-8 border-b border-border/20 last:border-b-0 items-start">
                  <p className="font-display text-xl text-white md:text-right font-medium">{w.t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EDITORIAL QUOTE CANVAS */}
      <section className="relative py-40 overflow-hidden bg-background">
        {/* Removed giant watermarks completely on mobile layout blocks */}
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

      {/* 9. APPOINTMENT CONCIERGE INTERFACE */}
      <section className="relative py-32 border-t border-border/20">
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
                {/* Inputs engineered with refined bottom padding (pb-3) to offset underline overlaps */}
                <input placeholder="First name" className="bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
                <input placeholder="Last name" className="bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
              <input placeholder="Timepiece of interest" className="w-full bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors" />
              <textarea placeholder="Your message" rows={3} className="w-full bg-transparent border-b border-border/40 pb-3 text-sm outline-none focus:border-primary-glow text-white transition-colors resize-none" />
              
              {/* Refined Luxury Interactive CTA Button: Monochrome styling shifting to emerald glow on interaction */}
              <button className="w-full py-4 text-xs font-medium uppercase tracking-widest text-black bg-white border border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:border-primary-glow hover:shadow-[0_0_30px_rgba(45,212,168,0.25)] cursor-pointer">
                Request Appointment
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 10. BRAND FOOTER */}
      <footer className="relative border-t border-border/30 bg-onyx py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-16">
            <div className="md:col-span-1">
              <p className="font-display text-2xl tracking-wider text-white">EMERIAL</p>
              <p className="text-[11px] text-muted-foreground mt-2 uppercase tracking-widest">Est. Genève</p>
            </div>

            {/* Compressed Mobile Directories via Custom Interactive Accordion Triggers */}
            {[
              { id: "explore", title: "Explore", links: ["Our Heritage", "The Manufacture", "News & Events", "Bespoke Services"] },
              { id: "collections", title: "Collections", links: ["Regalia Flagship", "Chronograph Edition", "Minimalist Automatic", "Limited Releases"] },
              { id: "support", title: "Support", links: ["Book Service", "Care & Maintenance", "Certificate Registry", "Private Concierge"] },
              { id: "legal", title: "Legal", links: ["Privacy Directive", "Terms of Use", "Cookie Settings", "Traceability Index"] }
            ].map((dir) => (
              <div key={dir.id} className="border-b border-border/20 md:border-b-0 pb-4 md:pb-0">
                <button 
                  onClick={() => toggleSection(dir.id)} 
                  className="w-full md:w-auto flex flex-row items-center justify-between text-left md:pointer-events-none cursor-pointer group"
                >
                  <span className="eyebrow text-white text-[10px] font-semibold">{dir.title}</span>
                  <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform duration-300 md:hidden ${expandedSection === dir.id ? 'rotate-180' : ''}`} />
                </button>
                
                <ul className={`mt-4 space-y-2.5 text-xs text-muted-foreground transition-all duration-300 overflow-hidden md:h-auto md:opacity-100 ${expandedSection === dir.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 md:max-h-none'}`}>
                  {dir.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-primary-glow transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] text-muted-foreground tracking-wide">&copy; 2026 Maison Emerial SA. All rights reserved.</p>
            
            {/* Minimalist Bare Social Handles (Boxed Layout Containers Stripped Entirely) */}
            <div className="flex flex-row items-center gap-8 text-muted-foreground text-xs font-sans tracking-widest">
              <a href="#" className="hover:text-white transition-colors uppercase text-[10px]">Instagram</a>
              <a href="#" className="hover:text-white transition-colors uppercase text-[10px]">YouTube</a>
              <a href="#" className="hover:text-white transition-colors uppercase text-[10px]">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors uppercase text-[10px]">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
