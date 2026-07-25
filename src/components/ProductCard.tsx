import type { Product } from "../types";

import {
  Cpu,
  Wheat,
  HardHat,
  Shirt,
  Sofa,
  Coffee,
  Lightbulb,
  Table2,
  Droplet,
  Wifi,
  Wrench,
  Building2,
  type LucideIcon,
  Star,
  Construction,
} from "lucide-react";
const ICON_MAP: Record<string, LucideIcon> = {
  cpu: Cpu,
  wheat: Wheat,
  hardHat: HardHat,
  shirt: Shirt,
  sofa: Sofa,
  coffee: Coffee,
  lightbulb: Lightbulb,
  roadBarrier: Construction,
  table: Table2,
  droplet: Droplet,
  wifi: Wifi,
  wrench: Wrench,
};

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-[10px]">
      <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
      {rating}
    </span>
  );
}
export const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const CategoryIcon = ICON_MAP[product.icon ?? ""] ?? Cpu;

  return (
    <div
      className="reveal group bg-white border border-ink-100 rounded-xl overflow-hidden lift hover:border-amber-300 flex flex-col"
      style={{ transitionDelay: `${index * 0.04}s` }}
    >
      <div className="relative bg-[#FBF1E8] h-44 bg-paper-dim flex items-center justify-center overflow-hidden">
        <CategoryIcon className="w-12 h-12 text-ink-200 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-500" />
        <span className="absolute bg-[#1B2A3D] top-3 left-3 tag-stamp text-[10px] font-semibold bg-ink-900/85 text-amber-300 px-2 py-1 rounded-md">
          {product.id}
        </span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold bg-white/90 text-ink-700 px-2 py-1 rounded-md flex items-center gap-1">
          <StarRow rating={product.rating} />
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="font-display font-semibold text-ink-900 mt-1.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-ink-400 mt-1.5 flex items-center gap-1.5">
          <Building2 className="w-3 h-3 text-ink-300" /> {product.supplier}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-dashed border-ink-100">
          <div>
            <p className="font-mono text-[10px] text-ink-400 uppercase">MOQ</p>
            <p className="font-mono text-sm font-medium text-ink-700">
              {product.moq}
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-ink-400 uppercase">From</p>
            <p className="font-display text-lg font-bold text-ink-900">
              {product.price}
              <span className="text-xs font-normal text-ink-400">
                {product.unit}
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <button className="flex-1 btn-amber px-3 py-2.5 rounded-lg text-xs font-semibold text-white">
            Request Quote
          </button>
          <button className="flex-1 px-3 py-2.5 rounded-lg text-xs font-semibold border border-ink-200 text-ink-700 hover:border-ink-900 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
