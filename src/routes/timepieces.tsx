import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { collections, products, type Collection } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductModal } from "@/components/site/ProductModal";
import { Reveal } from "@/components/site/Reveal";

const searchSchema = z.object({
  c: z.enum(["Regalia", "Abyss", "Apex"]).optional(),
});

export const Route = createFileRoute("/timepieces")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Timepieces — EMERIAL" },
      { name: "description", content: "Ten signature Swiss automatic timepieces across the Regalia, Abyss, and Apex collections." },
      { property: "og:title", content: "Timepieces — EMERIAL" },
      { property: "og:description", content: "Ten signature Swiss automatic timepieces." },
    ],
  }),
  component: TimepiecesPage,
});

function TimepiecesPage() {
  const { c } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [filter, setFilter] = useState<Collection | "All">(c ?? "All");
  const [active, setActive] = useState<(typeof products)[number] | null>(null);

  const filtered = useMemo(() => filter === "All" ? products : products.filter((p) => p.collection === filter), [filter]);

  const setF = (f: Collection | "All") => {
    setFilter(f);
    navigate({ search: f === "All" ? {} : { c: f } });
  };

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-4">The Collection</p>
            <h1 className="font-display text-6xl md:text-8xl">Ten timepieces.<br /><span className="italic">One horizon.</span></h1>
          </Reveal>
          <div className="mt-16 flex flex-wrap gap-3">
            {(["All", ...collections.map((x) => x.name)] as const).map((f) => (
              <button
                key={f}
                onClick={() => setF(f)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.3em] transition-all ${filter === f ? "bg-primary text-primary-foreground" : "hairline hover:border-primary-glow hover:text-primary-glow"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProductCard product={p} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}