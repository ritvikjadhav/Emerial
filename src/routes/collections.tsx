import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — EMERIAL" },
      { name: "description", content: "Three EMERIAL collections: Regalia flagship, Abyss dive, Apex racing chronographs." },
      { property: "og:title", content: "Collections — EMERIAL" },
      { property: "og:description", content: "Regalia, Abyss, Apex — three distinct languages of Swiss watchmaking." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-4">The Collections</p>
            <h1 className="font-display text-6xl md:text-8xl">Three languages,<br /><span className="italic">one voice.</span></h1>
            <p className="mt-8 text-muted-foreground max-w-xl mx-auto">Ten timepieces across three collections — each with a distinct point of view on Swiss watchmaking.</p>
          </Reveal>
        </div>
      </section>
      <section className="pb-32 space-y-24">
        {collections.map((c, i) => (
          <Reveal key={c.name}>
            <div className={`mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-charcoal group">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              </div>
              <div>
                <p className="eyebrow text-primary-glow mb-4">{c.count} Timepieces</p>
                <h2 className="font-display text-6xl md:text-7xl">{c.name}</h2>
                <p className="font-display italic text-2xl text-muted-foreground mt-4">{c.tagline}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{c.description}</p>
                <Link to="/timepieces" search={{ c: c.name }} className="btn-ghost-luxury mt-10">
                  Discover {c.name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}