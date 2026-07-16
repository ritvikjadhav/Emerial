import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight, Shield, Package, Plane, Award, Gem } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";
import { collections, products, formatPrice, type Product } from "@/lib/products";
import { Reveal, Counter } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
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

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_75%)] z-10" />
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
        <div className="relative z-20 mx-auto max-w-[1440px] px-6 lg:px-10 w-full grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div className="animate-rise">
            <p className="eyebrow mb-6">Maison Emerial · Est. Genève</p>
            <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.95] tracking-tight">
              Crafted<br />
              <span className="italic text-emerald-gradient">Beyond</span> Time.
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed font-display italic">
              Luxury is measured in moments — and in the ten timepieces we release each decade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/timepieces" className="btn-luxury">
                Explore Collection <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/craftsmanship" className="btn-ghost-luxury">Discover More</Link>
            </div>
          </div>
          <div className="relative aspect-square animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-3xl" />
            <img
              src={heroWatch}
              alt="EMERIAL Carbon Legacy signature timepiece"
              width={1600}
              height={1600}
              className="relative h-full w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="eyebrow text-[9px]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary-glow to-transparent relative overflow-hidden">
            <span className="absolute top-0 left-0 right-0 h-2 bg-primary-glow animate-scroll-hint" />
          </div>
          <ChevronDown className="h-3 w-3 animate-scroll-hint" />
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-border/60 py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { n: 10, s: "", label: "Signature Timepieces" },
            { n: 3, s: "", label: "Distinct Collections" },
            { n: 5, s: "-YR", label: "International Warranty" },
            { n: 100, s: "%", label: "Swiss Automatic Movement" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center lg:text-left">
              <p className="font-display text-6xl md:text-7xl text-emerald-gradient">
                <Counter to={s.n} suffix={s.s} />
              </p>
              <p className="eyebrow mt-4">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-square bg-charcoal overflow-hidden group">
              <img src={featured.image} alt={featured.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              <div className="absolute top-6 left-6 eyebrow glass px-3 py-1.5">Flagship · Regalia</div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="eyebrow text-primary-glow mb-6">Featured Timepiece</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">{featured.name}</h2>
            <p className="font-display italic text-2xl text-muted-foreground mt-4">{featured.tagline}</p>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">{featured.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 max-w-lg">
              {featured.specs.map((s) => (
                <div key={s.label}>
                  <p className="eyebrow text-[10px] mb-1">{s.label}</p>
                  <p className="text-sm">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => setActive(featured)} className="btn-ghost-luxury">View Details</button>
              <button onClick={() => add(featured)} className="btn-luxury">Add to Bag · {formatPrice(featured.price)}</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-primary-glow mb-4">The Collections</p>
            <h2 className="font-display text-5xl md:text-7xl">Three languages,<br /><span className="italic">one voice.</span></h2>
          </Reveal>
          <div className="grid lg:grid-cols-6 gap-6">
            {collections.map((c, i) => (
              <Reveal key={c.name} delay={i * 120} className={c.name === "Regalia" ? "lg:col-span-6" : "lg:col-span-3"}>
                <Link to="/timepieces" search={{ c: c.name }} className="group relative block overflow-hidden bg-charcoal">
                  <div className={`relative overflow-hidden ${c.name === "Regalia" ? "aspect-[21/9]" : "aspect-[4/5]"}`}>
                    <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                    <p className="eyebrow text-primary-glow mb-2">{c.count} Timepieces</p>
                    <h3 className="font-display text-4xl lg:text-6xl">{c.name}</h3>
                    <p className="font-display italic text-lg lg:text-2xl text-muted-foreground mt-2">{c.tagline}</p>
                    <p className="text-sm text-muted-foreground mt-3 max-w-md">{c.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 eyebrow text-foreground group-hover:text-primary-glow transition-colors">
                      Discover <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className="relative py-32 bg-onyx">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={craftsmanshipImg} alt="Master watchmaker" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-primary-glow mb-6">The Craft</p>
            <h2 className="font-display text-5xl md:text-6xl">Ninety days.<br /><span className="italic">One watch.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              From the first sketch to the final regulation, every EMERIAL passes through five ateliers and the hands of eleven master craftspeople.
            </p>
            <ol className="mt-12 space-y-8">
              {[
                { n: "01", t: "Design", d: "Concept sketches and CAD architecture in Genève." },
                { n: "02", t: "Engineering", d: "Movement calibration and case prototyping." },
                { n: "03", t: "Assembly", d: "Hand-assembled in the La Chaux-de-Fonds atelier." },
                { n: "04", t: "Inspection", d: "1,200-hour COSC-grade certification and finishing." },
                { n: "05", t: "Delivery", d: "Presented in a hand-lacquered oak vitrine." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 80}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 items-baseline border-b border-border/40 pb-6">
                    <span className="font-display text-3xl text-primary-glow">{step.n}</span>
                    <div>
                      <p className="font-display text-2xl">{step.t}</p>
                      <p className="text-sm text-muted-foreground mt-1">{step.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* MATERIALS */}
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
                <div className="group relative p-8 hairline hover:border-primary-glow transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury bg-card/50 h-full">
                  <Gem className="h-6 w-6 text-primary-glow mb-8" />
                  <p className="font-display text-2xl mb-3">{m.t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EMERIAL */}
      <section className="relative py-32 bg-onyx">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-primary-glow mb-4">Why EMERIAL</p>
            <h2 className="font-display text-5xl md:text-6xl">Five promises,<br /><span className="italic">one signature.</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { i: Award, t: "Swiss Precision", d: "COSC-grade regulation." },
              { i: Gem, t: "Premium Materials", d: "Sapphire, gold, carbon." },
              { i: Package, t: "Luxury Packaging", d: "Hand-lacquered oak vitrine." },
              { i: Plane, t: "Worldwide Shipping", d: "Complimentary, insured." },
              { i: Shield, t: "5-Year Warranty", d: "International concierge." },
            ].map((w, i) => (
              <Reveal key={w.t} delay={i * 80}>
                <div className="p-8 hairline text-center h-full flex flex-col items-center bg-card/40">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center hairline mb-6 group-hover:border-primary-glow">
                    <w.i className="h-5 w-5 text-primary-glow" />
                  </div>
                  <p className="font-display text-xl mb-2">{w.t}</p>
                  <p className="text-xs text-muted-foreground">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC EXPERIENCE */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="font-display text-[24vw] leading-none text-primary/[0.04] whitespace-nowrap select-none">TIMELESS</p>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-8">The EMERIAL Experience</p>
            <p className="font-display text-4xl md:text-6xl leading-[1.1]">
              A watch does not tell time.<br />
              <span className="italic text-emerald-gradient">It composes it.</span>
            </p>
            <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
              Each EMERIAL is numbered, registered, and accompanied by a certificate signed by the master watchmaker who assembled it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="flex items-baseline justify-between mb-12">
            <div>
              <p className="eyebrow text-primary-glow mb-3">@emerial</p>
              <h2 className="font-display text-4xl md:text-5xl">From the atelier.</h2>
            </div>
            <a href="#" className="eyebrow hover:text-primary-glow hidden md:inline-flex">Follow on Instagram →</a>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {products.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <div className="aspect-square overflow-hidden bg-charcoal group cursor-pointer" onClick={() => setActive(p)}>
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 bg-onyx">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-8">In their words</p>
            <p className="font-display text-3xl md:text-5xl leading-tight italic">
              "The Emerald Torque is the first watch I've owned that feels like an heirloom the moment it leaves the vitrine."
            </p>
            <p className="eyebrow mt-10">Alessandro V. · Milano</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-20 text-left">
            {[
              { q: "A quiet obsession. The Carbon Legacy replaces my Royal Oak on most days.", a: "Marcus C., London" },
              { q: "Sapphire Muse arrived in a box that felt like a small piece of the atelier.", a: "Isabelle R., Paris" },
              { q: "The Aqua Diver survived a shipwreck. So did the certificate. I'm a customer forever.", a: "Kenji T., Tokyo" },
            ].map((t) => (
              <Reveal key={t.a}>
                <div className="p-8 hairline bg-card/40 h-full">
                  <p className="font-display text-xl italic leading-relaxed">"{t.q}"</p>
                  <p className="eyebrow mt-6 text-primary-glow">{t.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-4">The Concierge</p>
            <h2 className="font-display text-5xl md:text-6xl">A private<br /><span className="italic">appointment.</span></h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Our concierge team is available for private viewings, bespoke commissions, and after-sales care.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow">Paris</span><span>1 Place Vendôme, 75001</span></div>
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow">Genève</span><span>Rue du Rhône 62, 1204</span></div>
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow">Hours</span><span>Tue — Sat · 10:00 — 19:00</span></div>
              <div className="grid grid-cols-[100px_1fr] gap-4"><span className="eyebrow">Contact</span><span>concierge@emerial.watch</span></div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <form onSubmit={(e) => e.preventDefault()} className="glass p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First name" className="bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
                <input placeholder="Last name" className="bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
              </div>
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
              <input placeholder="Timepiece of interest" className="w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
              <textarea placeholder="Your message" rows={4} className="w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors resize-none" />
              <button className="btn-luxury w-full">Request Appointment</button>
            </form>
          </Reveal>
        </div>
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
