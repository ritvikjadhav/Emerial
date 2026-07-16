import aquaDiver from "@/assets/watch-aqua-diver.jpg";
import silverTide from "@/assets/watch-silver-tide.jpg";
import roseCurrent from "@/assets/watch-rose-current.jpg";
import onyxEmerald from "@/assets/watch-onyx-emerald.jpg";
import emeraldFury from "@/assets/watch-emerald-fury.jpg";
import ceruleanEmerald from "@/assets/watch-cerulean-emerald.jpg";
import carbonLegacy from "@/assets/watch-carbon-legacy.jpg";
import emeraldTorque from "@/assets/watch-emerald-torque.jpg";
import pearlAura from "@/assets/watch-pearl-aura.jpg";
import sapphireMuse from "@/assets/watch-sapphire-muse.jpg";
import regaliaImg from "@/assets/collection-regalia.jpg";
import abyssImg from "@/assets/collection-abyss.jpg";
import apexImg from "@/assets/collection-apex.jpg";

export type Collection = "Regalia" | "Abyss" | "Apex";

export interface Product {
  id: string;
  name: string;
  collection: Collection;
  price: number;
  image: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  gender?: "Men" | "Women" | "Unisex";
}

export const products: Product[] = [
  {
    id: "aqua-diver",
    name: "Aqua Diver",
    collection: "Abyss",
    price: 8450,
    image: aquaDiver,
    tagline: "Depths untamed.",
    description:
      "Engineered for the professional diver, the Aqua Diver descends 300 meters with the composure of a still ocean floor. Cerachrom bezel, luminous applied indices.",
    specs: [
      { label: "Movement", value: "Swiss Automatic" },
      { label: "Case", value: "316L Stainless Steel — 42mm" },
      { label: "Water Resistance", value: "300M" },
      { label: "Crystal", value: "Domed Sapphire" },
      { label: "Power Reserve", value: "72 Hours" },
    ],
    features: ["Screw-down crown", "Unidirectional bezel", "Luminescent indices"],
    gender: "Men",
  },
  {
    id: "silver-tide",
    name: "Silver Tide",
    collection: "Abyss",
    price: 9200,
    image: silverTide,
    tagline: "A quiet current.",
    description:
      "Mother-of-pearl silver dial framed by a brushed steel bezel — the Silver Tide is a dive companion refined for evening ateliers alike.",
    specs: [
      { label: "Movement", value: "Swiss Automatic" },
      { label: "Case", value: "316L Stainless Steel — 40mm" },
      { label: "Water Resistance", value: "300M" },
      { label: "Crystal", value: "Sapphire, AR-coated" },
      { label: "Power Reserve", value: "72 Hours" },
    ],
    features: ["Mother-of-pearl dial", "Ceramic bezel", "Anti-reflective"],
    gender: "Unisex",
  },
  {
    id: "rose-current",
    name: "Rose Current",
    collection: "Abyss",
    price: 10800,
    image: roseCurrent,
    tagline: "Warmth beneath the surface.",
    description:
      "A rose gold case cradles a pink pearl dial — the Rose Current translates dive engineering into unmistakable femininity.",
    specs: [
      { label: "Movement", value: "Swiss Automatic" },
      { label: "Case", value: "18K Rose Gold — 38mm" },
      { label: "Water Resistance", value: "300M" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Power Reserve", value: "72 Hours" },
    ],
    features: ["18K rose gold", "Pearl dial", "Diamond markers"],
    gender: "Women",
  },
  {
    id: "onyx-emerald",
    name: "Onyx Emerald",
    collection: "Apex",
    price: 12400,
    image: onyxEmerald,
    tagline: "Precision at velocity.",
    description:
      "The Onyx Emerald chronograph — carbon bezel, three subdials, tachymeter scale. Built for the finish line, tuned for the boulevard.",
    specs: [
      { label: "Movement", value: "Swiss Automatic Chronograph" },
      { label: "Case", value: "Carbon Composite — 44mm" },
      { label: "Water Resistance", value: "100M" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Power Reserve", value: "68 Hours" },
    ],
    features: ["Column-wheel chronograph", "Tachymeter", "Carbon fiber dial"],
    gender: "Men",
  },
  {
    id: "emerald-fury",
    name: "Emerald Fury",
    collection: "Apex",
    price: 13600,
    image: emeraldFury,
    tagline: "Green light. Full throttle.",
    description:
      "An emerald sunburst dial glows across three lacquered subdials. Engineered for pilots and drivers who measure life in fractions.",
    specs: [
      { label: "Movement", value: "Swiss Automatic Chronograph" },
      { label: "Case", value: "Titanium — 43mm" },
      { label: "Water Resistance", value: "100M" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Power Reserve", value: "70 Hours" },
    ],
    features: ["Sunburst dial", "Titanium case", "Sapphire caseback"],
    gender: "Men",
  },
  {
    id: "cerulean-emerald",
    name: "Cerulean Emerald",
    collection: "Apex",
    price: 14200,
    image: ceruleanEmerald,
    tagline: "Sky rendered mechanical.",
    description:
      "A cerulean lacquered dial punctuated by emerald indices. The Apex line's most cinematic chronograph.",
    specs: [
      { label: "Movement", value: "Swiss Automatic Chronograph" },
      { label: "Case", value: "Steel & Ceramic — 42mm" },
      { label: "Water Resistance", value: "100M" },
      { label: "Crystal", value: "Sapphire, double AR" },
      { label: "Power Reserve", value: "72 Hours" },
    ],
    features: ["Ceramic bezel", "Applied indices", "Screw-down pushers"],
    gender: "Men",
  },
  {
    id: "carbon-legacy",
    name: "Carbon Legacy",
    collection: "Regalia",
    price: 24800,
    image: carbonLegacy,
    tagline: "The exposed masterpiece.",
    description:
      "A skeleton tourbillon revealed behind sapphire — the Carbon Legacy is the flagship of the Regalia line, hand-finished over 90 days.",
    specs: [
      { label: "Movement", value: "Swiss Manual Tourbillon" },
      { label: "Case", value: "Forged Carbon — 44mm" },
      { label: "Water Resistance", value: "50M" },
      { label: "Crystal", value: "Sapphire, dome + caseback" },
      { label: "Power Reserve", value: "96 Hours" },
    ],
    features: ["Flying tourbillon", "Skeletonized bridges", "Hand-finished"],
    gender: "Men",
  },
  {
    id: "emerald-torque",
    name: "Emerald Torque",
    collection: "Regalia",
    price: 32500,
    image: emeraldTorque,
    tagline: "Green fire, gold frame.",
    description:
      "Emerald skeleton dial suspended within an 18K gold case. Every bevel polished by hand over six weeks.",
    specs: [
      { label: "Movement", value: "Swiss Automatic Tourbillon" },
      { label: "Case", value: "18K Yellow Gold — 42mm" },
      { label: "Water Resistance", value: "50M" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Power Reserve", value: "100 Hours" },
    ],
    features: ["Skeleton architecture", "18K gold", "Hand-polished bevels"],
    gender: "Men",
  },
  {
    id: "pearl-aura",
    name: "Pearl Aura",
    collection: "Regalia",
    price: 18900,
    image: pearlAura,
    tagline: "Softness rendered eternal.",
    description:
      "A slim rose gold case, a mother-of-pearl dial, twelve diamond hour markers. Pearl Aura is the Regalia line's most quietly luminous piece.",
    specs: [
      { label: "Movement", value: "Swiss Automatic" },
      { label: "Case", value: "18K Rose Gold — 34mm" },
      { label: "Water Resistance", value: "50M" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Power Reserve", value: "72 Hours" },
    ],
    features: ["Diamond markers", "Mother-of-pearl", "18K rose gold"],
    gender: "Women",
  },
  {
    id: "sapphire-muse",
    name: "Sapphire Muse",
    collection: "Regalia",
    price: 16400,
    image: sapphireMuse,
    tagline: "A note held infinitely.",
    description:
      "Sunburst sapphire dial, slim steel case, Roman numeral indices. Sapphire Muse is engineered to disappear into an evening and reappear at dawn.",
    specs: [
      { label: "Movement", value: "Swiss Automatic" },
      { label: "Case", value: "Polished Steel — 32mm" },
      { label: "Water Resistance", value: "50M" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Power Reserve", value: "72 Hours" },
    ],
    features: ["Sunburst dial", "Roman numerals", "Slim profile"],
    gender: "Women",
  },
];

export const collections: {
  name: Collection;
  tagline: string;
  description: string;
  image: string;
  count: number;
}[] = [
  {
    name: "Regalia",
    tagline: "The flagship. The heirloom.",
    description:
      "Four hand-finished pieces built over months, not weeks. Tourbillons, skeleton architecture, precious metals.",
    image: regaliaImg,
    count: 4,
  },
  {
    name: "Abyss",
    tagline: "Depth, engineered.",
    description: "Professional dive instruments certified to 300 meters. Legibility, luminescence, discipline.",
    image: abyssImg,
    count: 3,
  },
  {
    name: "Apex",
    tagline: "Chronographs for the finish line.",
    description: "Column-wheel chronographs with motorsport DNA — carbon, ceramic, and titanium finishings.",
    image: apexImg,
    count: 3,
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);