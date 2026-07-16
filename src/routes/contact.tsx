import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EMERIAL" },
      { name: "description", content: "Book a private appointment at our Paris or Genève ateliers, or reach the EMERIAL concierge team." },
      { property: "og:title", content: "Contact — EMERIAL" },
      { property: "og:description", content: "Private appointments in Paris and Genève. Worldwide concierge." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="eyebrow text-primary-glow mb-4">The Concierge</p>
            <h1 className="font-display text-6xl md:text-8xl">A private<br /><span className="italic">appointment.</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <Reveal>
            <div className="space-y-10">
              {[
                { i: MapPin, t: "Paris", d: "1 Place Vendôme, 75001" },
                { i: MapPin, t: "Genève", d: "Rue du Rhône 62, 1204" },
                { i: Clock, t: "Hours", d: "Tuesday — Saturday · 10:00 — 19:00" },
                { i: Mail, t: "Email", d: "concierge@emerial.watch" },
                { i: Phone, t: "Phone", d: "+41 22 800 90 00" },
              ].map((s) => (
                <div key={s.t} className="grid grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="h-11 w-11 flex items-center justify-center hairline">
                    <s.i className="h-4 w-4 text-primary-glow" />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">{s.t}</p>
                    <p className="text-sm">{s.d}</p>
                  </div>
                </div>
              ))}
              <div className="mt-8 aspect-[4/3] hairline bg-gradient-to-br from-charcoal to-onyx flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49%,rgba(45,212,168,0.15)_50%,transparent_51%),linear-gradient(to_bottom,transparent_49%,rgba(45,212,168,0.15)_50%,transparent_51%)] bg-[size:40px_40px]" />
                <p className="relative eyebrow text-muted-foreground">Interactive Map · Place Vendôme, Paris</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={(e) => e.preventDefault()} className="glass p-8 md:p-12 space-y-8">
              <div>
                <p className="eyebrow text-primary-glow">Enquiry</p>
                <p className="font-display text-3xl mt-2">Request an appointment</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input placeholder="First name" className="bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
                <input placeholder="Last name" className="bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
              </div>
              <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
              <input placeholder="Phone (optional)" className="w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors" />
              <select className="w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors">
                <option className="bg-background">Timepiece of interest</option>
                <option className="bg-background">Regalia — Carbon Legacy</option>
                <option className="bg-background">Regalia — Emerald Torque</option>
                <option className="bg-background">Abyss — Aqua Diver</option>
                <option className="bg-background">Apex — Emerald Fury</option>
              </select>
              <textarea placeholder="Your message" rows={5} className="w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-primary-glow transition-colors resize-none" />
              <button className="btn-luxury w-full">Request Appointment</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}