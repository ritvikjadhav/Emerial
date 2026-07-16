import { createFileRoute } from "@tanstack/react-router";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/craftsmanship")({
  head: () => ({
    meta: [
      { title: "Craftsmanship — EMERIAL" },
      { name: "description", content: "From sketch to certification — the ninety-day EMERIAL craftsmanship journey." },
      { property: "og:title", content: "Craftsmanship — EMERIAL" },
      { property: "og:description", content: "Hand-assembled in La Chaux-de-Fonds by eleven master craftspeople." },
    ],
  }),
  component: CraftPage,
});

const steps = [
  { n: "01", t: "Design", d: "Every EMERIAL begins with a hand-drawn sketch in the Genève design atelier. The proportions, indices, and case geometry are resolved before a single machine is engaged." },
  { n: "02", t: "Engineering", d: "CAD architects and movement engineers translate the sketch into millimetre-precise blueprints. Prototypes are milled from the same materials as the final piece." },
  { n: "03", t: "Assembly", d: "In La Chaux-de-Fonds, a single master watchmaker assembles the movement — 214 components placed and regulated over three weeks." },
  { n: "04", t: "Inspection", d: "Each watch runs for 1,200 hours through six positions. COSC-grade regulation. Every hairline is inspected under 40× magnification." },
  { n: "05", t: "Delivery", d: "The completed timepiece is presented in a hand-lacquered oak vitrine, accompanied by a certificate signed by its watchmaker." },
];

function CraftPage() {
  return (
    <>
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-end">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-4">The Craft</p>
            <h1 className="font-display text-6xl md:text-8xl leading-none">Ninety<br /><span className="italic">days.</span></h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              From the first sketch to the final regulation, every EMERIAL passes through five ateliers and the hands of eleven master craftspeople. Nothing is expedited.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="aspect-[21/9] overflow-hidden bg-charcoal">
            <img src={craftsmanshipImg} alt="Watchmaker at work" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-40">
        <div className="mx-auto max-w-4xl px-6">
          <ol className="space-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-16 border-b border-border/40 pb-16 last:border-0">
                  <span className="font-display text-5xl md:text-7xl text-primary-glow">{s.n}</span>
                  <div>
                    <p className="font-display text-4xl mb-4">{s.t}</p>
                    <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}