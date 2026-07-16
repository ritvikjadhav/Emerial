import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import regalia from "@/assets/collection-regalia.jpg";
import abyss from "@/assets/collection-abyss.jpg";
import apex from "@/assets/collection-apex.jpg";
import craft from "@/assets/craftsmanship.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — EMERIAL" },
      { name: "description", content: "Notes from the atelier: essays on horology, materials, and the philosophy of time." },
      { property: "og:title", content: "Journal — EMERIAL" },
      { property: "og:description", content: "Essays and notes from the EMERIAL atelier." },
    ],
  }),
  component: JournalPage,
});

const posts = [
  { img: regalia, cat: "Horology", t: "The anatomy of a flying tourbillon", d: "Why the flying tourbillon is the most difficult complication to hand-finish — and why the Carbon Legacy took three years to release." },
  { img: craft, cat: "Atelier", t: "Inside the La Chaux-de-Fonds workshop", d: "A day with our master watchmaker, from case-back polishing to final regulation." },
  { img: abyss, cat: "Materials", t: "Why 300 meters is not a marketing number", d: "The Abyss line's water resistance is tested to failure — twice." },
  { img: apex, cat: "Design", t: "The color of speed", d: "Emerald has appeared on chronograph dials since 1963. Here's why we chose it as the Apex signature." },
];

function JournalPage() {
  return (
    <>
      <section className="pt-40 pb-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-4">The Journal</p>
            <h1 className="font-display text-6xl md:text-8xl">Notes<br /><span className="italic">from the atelier.</span></h1>
          </Reveal>
        </div>
      </section>
      <section className="pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid md:grid-cols-2 gap-12">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
                </div>
                <div className="pt-6">
                  <p className="eyebrow text-primary-glow mb-3">{p.cat}</p>
                  <h2 className="font-display text-3xl md:text-4xl group-hover:text-primary-glow transition-colors">{p.t}</h2>
                  <p className="mt-3 text-sm text-muted-foreground max-w-lg">{p.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}