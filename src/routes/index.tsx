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

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 bg-[#080808]">
        <div className="absolute inset-0">
          {/* Deep onyx gradient overlay — no muddy digital glow drops */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080808_80%)] z-10" />
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="absolute h-[2px] w-[2px] rounded-full bg-primary-glow/30"
              style={{
                top: `${p.t}%`,
                left: `${p.l}%`,
                animation: `float-slow ${p.d}s ease-in-out ${p.a}s infinite`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-20 mx-auto max-w-[1440px] px-6 lg:px-10 w-full grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div className="animate-rise">
            <p className="eyebrow tracking-[0.25em] text-xs font-semibold text-primary-glow mb-6">Maison Emerial · Est. Genève</p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-tight text-white">
              Crafted<br />
              <span className="italic font-normal text-white">Beyond</span> Time.
            </h1>
            <p className="mt-8 max-w-md text-base text-gray-400 leading-relaxed font-light">
              Luxury is measured in moments — and in the ten signature timepieces hand-assembled each decade.
            </p>
            {/* Cleaner layout actions */}
            <div className="mt-10 flex items-center gap-8">
              <Link to="/timepieces" className="btn-luxury px-8 py-4 bg-primary text-black font-medium tracking-widest text-xs uppercase transition-colors hover:bg-primary/90">
                Explore Collection
              </Link>
              <Link to="/craftsmanship" className="text-xs font-medium tracking-widest uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                Discover More
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square">
            <img
              src={heroWatch}
              alt="EMERIAL Carbon Legacy signature timepiece"
              className="relative h-full w-full object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>
        
        {/* Adjusted bottom layout bounds */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.3em] uppercase font-light text-gray-400">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary-glow to-transparent" />
        </div>
      </section>

      {/* STATS GRID - Rebalanced 2x2 spacing on mobile screens */}
      <section className="relative border-t border-b border-white/5 py-20 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {[
            { n: 10, s: "", label: "Signature Timepieces" },
            { n: 3, s: "", label: "Distinct Collections" },
            { n: 5, s: "-YR", label: "International Warranty" },
            { n: 100, s: "%", label: "Swiss Assembled" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="space-y-1">
              <p className="font-display text-4xl md:text-6xl font-light text-white">
                <Counter to={s.n} suffix={s.s} />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium pt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCT - Removed transactional layout conflicts */}
      <section className="relative py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div 
              onClick={() => setActive(featured)} 
              className="group cursor-pointer relative aspect-[3/4] bg-[#111] overflow-hidden"
            >
              <img src={featured.image} alt={featured.name} loading="lazy" className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute top-6 left-6 text-[10px] tracking-widest uppercase border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1.5">Flagship · Regalia</div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-primary-glow tracking-[0.25em] text-[10px] font-semibold uppercase mb-3">Featured Masterpiece</p>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white">{featured.name}</h2>
            <p className="font-display italic text-xl text-gray-400 mt-2">{featured.tagline}</p>
            <p className="mt-8 text-gray-400 font-light text-sm leading-relaxed max-w-md">{featured.description}</p>
            
            {/* Micro-grid spec sheet styling updates */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-b border-white/10 py-6 max-w-md text-xs font-light">
              {featured.specs.map((s) => (
                <div key={s.label}>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">{s.label}</p>
                  <p className="text-gray-200">{s.value}</p>
                </div>
              ))}
            </div>
            
            {/* Consolidated interaction element */}
            <div className="mt-10 max-w-md space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-light">Investment Value</span>
                <span className="font-display text-xl font-light tracking-wide text-white">{formatPrice(featured.price)} USD</span>
              </div>
              <button 
                onClick={() => setActive(featured)} 
                className="w-full bg-primary text-black text-xs font-medium tracking-[0.15em] uppercase py-4 transition-colors hover:bg-primary/90"
              >
                Request Consultation
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CURATED COLLECTIONS - Hidden deep clutter text on primary feed */}
      <section className="relative py-32 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mb-16">
            <p className="text-primary-glow tracking-[0.25em] text-[10px] font-semibold uppercase block mb-2">Curated Lineup</p>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white">Three Concepts, One Voice.</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <Link to="/timepieces" search={{ c: c.name }} className="group block space-y-4">
                  <div className="relative overflow-hidden aspect-square bg-[#141414]">
                    <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                  </div>
                  
                  <div className="flex items-end justify-between pt-2">
                    <div>
                      <h3 className="font-display text-2xl font-light tracking-wide text-white">{c.name}</h3>
                      <p className="text-xs text-gray-500 font-light mt-0.5">{c.tagline}</p>
                    </div>
                    <span className="text-xs font-medium tracking-widest uppercase text-primary-glow pb-0.5 border-b border-transparent group-hover:border-primary-glow transition-all">
                      View →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP ASSEMBLY FEED */}
      <section className="relative py-32 bg-[#080808]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
              <img src={craftsmanshipImg} alt="Master watchmaker assembly details" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-primary-glow tracking-[0.25em] text-[10px] font-semibold uppercase mb-4">The Atelier Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">Ninety Days. One Watch.</h2>
            <p className="mt-6 text-gray-400 font-light text-sm leading-relaxed max-w-md">
              From the initial calibration blueprints to structural testing, every single component passes strictly through custom finishing routines.
            </p>
            {/* Restyled layout hierarchy contrast keys */}
            <ol className="mt-12 space-y-8">
              {[
                { n: "01", t: "Design Architecture", d: "Concept drafting and micro-CAD component spacing in Genève." },
                { n: "02", t: "Caliber Calibration", d: "Movement customization limits paired with weight prototypes." },
                { n: "03", t: "Hand Assembly", d: "Intricate parts assembled individually under intense optical zoom rules." },
                { n: "04", t: "Chronograph Inspection", d: "1,200-hour strict internal validation matrix cycles." },
                { n: "05", t: "Presentation Vault", d: "Delivered secured inside an integrated matte oak vitrine shell." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 80}>
                  <div className="flex gap-6 items-start border-b border-white/5 pb-6">
                    <span className="font-mono text-xs text-primary-glow font-semibold tracking-wider pt-1">{step.n}</span>
                    <div className="space-y-1">
                      <p className="text-base font-medium tracking-wide text-white">{step.t}</p>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* METALLURGY METRICS - Stripped all vector shape placeholders */}
      <section className="relative py-32 border-t border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mb-16">
            <p className="text-primary-glow tracking-[0.25em] text-[10px] font-semibold uppercase block mb-2">Material Science</p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">Chosen for Generations.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Sapphire Crystal", d: "Grade 9 mineral ratings. Unparalleled optical clarity that naturally deflects surface friction." },
              { t: "Carbon Composites", d: "Forged under high-pressure parameters — lighter than titanium shell matrices." },
              { t: "Aerospace Titanium", d: "High biocompatibility indexes with structurally low weight footprints." },
              { t: "316L Marine Alloys", d: "Anti-corrosive stainless structural integrity polished clean via diamond wheels." },
            ].map((m, i) => (
              <Reveal key={m.t} delay={i * 100}>
                <div className="space-y-3 border-t border-white/10 pt-6">
                  <p className="font-display text-xl font-light text-white tracking-wide">{m.t}</p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EMERIAL PROMISES - Stripped circular button icon structures entirely */}
      <section className="relative py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mb-16">
            <p className="text-primary-glow tracking-[0.25em] text-[10px] font-semibold uppercase block mb-2">The Framework</p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">Five Assurances. One Signature.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { t: "Swiss Precision", d: "COSC-grade regulation checks." },
              { t: "Premium Materials", d: "Gold, platinum, and forged carbon." },
              { t: "Luxury Packaging", d: "Hand-lacquered oak vitrines." },
              { t: "Secure Logistics", d: "Fully insured white-glove delivery." },
              { t: "5-Year Protection", d: "Direct access to internal concierge teams." },
            ].map((w, i) => (
              <Reveal key={w.t} delay={i * 80} className="space-y-2 border-l border-white/5 pl-6">
                <p className="font-display text-lg text-white font-light tracking-wide">{w.t}</p>
                <p className="text-xs text-gray-500 font-light leading-normal">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL QUOTE CANVAS - Stripped screen background fonts completely */}
      <section className="relative py-36 bg-[#050505] border-t border-white/5">
        <div className="relative mx-auto max-w-2xl px-6 text-center space-y-4">
          <Reveal>
            <p className="text-primary-glow tracking-[0.25em] text-[10px] font-semibold uppercase mb-6">Maison Philosophy</p>
            <p className="font-display text-3xl md:text-5xl italic font-light text-white leading-relaxed">
              "A watch does not tell time. It composes it."
            </p>
            <p className="mt-8 text-xs text-gray-500 font-light max-w-md mx-auto leading-relaxed">
              Each physical unit is individually numbered, logged, and permanently paired with signature credentials matching its master watchmaker assembly guide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* APPOINTMENT CONCIERGE INTERFACE */}
      <section className="relative py-32 border-t border-white/5 bg-[#080808]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal className="space-y-6">
            <div>
              <p className="text-primary-glow tracking-[0.25em] text-[10px] font-semibold uppercase mb-3">The Concierge</p>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">Private Viewings</h2>
            </div>
            <p className="text-gray-400 font-light text-xs leading-relaxed max-w-xs">
              Our direct concierge desk allocates global room schedules for custom ordering processes and collector reviews.
            </p>
            <div className="pt-6 space-y-4 text-xs font-light">
              <div className="grid grid-cols-[80px_1fr] gap-4"><span className="text-gray-500 uppercase tracking-widest text-[10px]">Paris</span><span className="text-gray-300">1 Place Vendôme, 75001</span></div>
              <div className="grid grid-cols-[80px_1fr] gap-4"><span className="text-gray-500 uppercase tracking-widest text-[10px]">Genève</span><span className="text-gray-300">Rue du Rhône 62, 1204</span></div>
              <div className="grid grid-cols-[80px_1fr] gap-4"><span className="text-gray-500 uppercase tracking-widest text-[10px]">Hours</span><span className="text-gray-300">Tue — Sat · 10:00 — 19:00</span></div>
              <div className="grid grid-cols-[80px_1fr] gap-4"><span className="text-gray-500 uppercase tracking-widest text-[10px]">Contact</span><span className="text-primary-glow">concierge@emerial.watch</span></div>
            </div>
          </Reveal>
          
          {/* Form input elements space metrics corrections */}
          <Reveal delay={150} className="w-full">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input placeholder="First name" className="bg-transparent border-b border-white/20 pb-3 pt-1 text-sm font-light text-white outline-none focus:border-primary-glow transition-colors placeholder:text-gray-600" />
                <input placeholder="Last name" className="bg-transparent border-b border-white/20 pb-3 pt-1 text-sm font-light text-white outline-none focus:border-primary-glow transition-colors placeholder:text-gray-600" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 pb-3 pt-1 text-sm font-light text-white outline-none focus:border-primary-glow transition-colors placeholder:text-gray-600" />
              <input placeholder="Timepiece of Interest" className="w-full bg-transparent border-b border-white/20 pb-3 pt-1 text-sm font-light text-white outline-none focus:border-primary-glow transition-colors placeholder:text-gray-600" />
              
              <button className="w-full bg-transparent border border-primary text-primary text-xs font-medium tracking-[0.15em] uppercase py-4 transition-all hover:bg-primary hover:text-black">
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
