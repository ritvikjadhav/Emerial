import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="relative bg-black pt-16 pb-12 overflow-hidden select-none w-full mt-auto">
      {/* Subtle Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border/20" />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Main Structural Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-3 md:gap-x-8 lg:gap-x-12 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col items-start mb-8 md:mb-0">
            <Link to="/" className="font-display text-2xl tracking-[0.25em] text-white hover:text-primary-glow transition-colors duration-300">
              EMERIAL
            </Link>
            <p className="text-[9px] text-muted-foreground/50 mt-2 uppercase tracking-[0.4em] font-medium">Maison de Haute Horlogerie</p>
          </div>

          {/* Navigation Matrices */}
          {[
            { id: "explore", title: "Explore", links: [{ label: "Our Heritage", to: "/craftsmanship" }, { label: "The Manufacture", to: "/craftsmanship" }, { label: "Bespoke Services", to: "/timepieces" }] },
            { id: "collections", title: "Collections", links: [{ label: "Regalia Flagship", to: "/timepieces" }, { label: "Chronograph Edition", to: "/timepieces" }, { label: "Minimalist Automatic", to: "/timepieces" }] },
            { id: "support", title: "Support", links: [{ label: "Book Service", to: "/timepieces" }, { label: "Care & Maintenance", to: "/craftsmanship" }, { label: "Private Concierge", to: "/timepieces" }] },
            { id: "legal", title: "Legal", links: [{ label: "Privacy Directive", to: "/" }, { label: "Terms of Use", to: "/" }, { label: "Traceability Index", to: "/" }] }
          ].map((dir) => (
            <div key={dir.id} className="border-b border-border/10 md:border-b-0 py-3 md:py-0">
              <button 
                onClick={() => toggleSection(dir.id)} 
                className="w-full flex flex-row items-center justify-between text-left md:pointer-events-none cursor-pointer group focus:outline-none"
              >
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-white group-hover:text-primary-glow transition-colors duration-300">
                  {dir.title}
                </span>
                <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ease-out md:hidden ${expandedSection === dir.id ? 'rotate-180 text-primary-glow' : ''}`} />
              </button>
              
              <ul className={`mt-0 md:mt-5 space-y-3.5 text-xs text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden md:h-auto md:max-h-none md:opacity-100 ${expandedSection === dir.id ? 'max-h-48 pt-3 pb-2 opacity-100' : 'max-h-0 opacity-0 md:opacity-100'}`}>
                {dir.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="inline-block relative font-sans text-[11px] tracking-wide text-muted-foreground hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lower Base Floor — Perfectly Balanced and Clean */}
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-muted-foreground/40 tracking-wider font-sans text-center md:text-left">
            &copy; {new Date().getFullYear()} Maison Emerial SA. Swiss Made. All rights reserved.
          </p>
          
          {/* Minimal Social Row */}
          <div className="flex flex-row items-center gap-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-white transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-white transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-white transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
        }
                                                                                                                  
