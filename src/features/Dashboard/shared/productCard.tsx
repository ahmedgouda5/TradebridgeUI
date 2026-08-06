import { Star, Heart, Building2 } from "lucide-react";

export type ProductBadge = "Featured" | "Top Rated" | "Best Seller" | string;

const BADGE_STYLES: Record<string, string> = {
  Featured: "bg-amber-500 text-white",
  "Top Rated": "bg-verdant-500 text-white",
  "Best Seller": "bg-ink-900 text-amber-400",
};
const DEFAULT_BADGE_STYLE = "bg-ink-100 text-ink-600";

export interface Product {
  id: string;
  name: string;
  category: string;
  supplier: string;
  rating: number;
  reviews: number;
  moq: string;
  price: string;
  unit: string;
  badge?: ProductBadge;
  icon: React.ElementType; // product image placeholder icon
  isWished: boolean;
}

export interface ProductCardProps {
  product: Product;
  onRequestQuote: (id: string) => void;
  onViewDetails: (id: string) => void;
  onToggleWishlist: (id: string) => void;
}

export default function ProductCard({
  product,
  onRequestQuote,
  onViewDetails,
  onToggleWishlist,
}: ProductCardProps) {
  const {
    id,
    name,
    category,
    supplier,
    rating,
    reviews,
    moq,
    price,
    unit,
    badge,
    icon: Icon,
    isWished,
  } = product;

  return (
    <div className="group bg-white border border-ink-100 rounded-xl overflow-hidden hover:border-amber-300 transition-colors flex flex-col">
      <div className="relative h-44 bg-paper-dim flex items-center justify-center overflow-hidden">
        <Icon className="w-14 h-14 text-ink-200 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-500" />

        {badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-md ${
              BADGE_STYLES[badge] ?? DEFAULT_BADGE_STYLE
            }`}
          >
            {badge}
          </span>
        )}

        <span className="absolute top-3 right-3 text-[11px] font-semibold bg-white/90 text-ink-700 px-2 py-1 rounded-md">
          {rating} ★
        </span>

        <button
          onClick={() => onToggleWishlist(id)}
          className={`absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center transition-colors ${
            isWished ? "text-red-500" : "text-ink-300 hover:text-red-400"
          }`}
          aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className="w-4 h-4"
            fill={isWished ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] font-semibold text-[#]uppercase tracking-wide">
          {category}
        </span>
        <h3 className="font-display font-semibold text-ink-900 text-sm mt-1 leading-snug">
          {name}
        </h3>
        <p className="text-xs text-ink-400 mt-1 flex items-center gap-1.5">
          <Building2 className="w-3 h-3 text-ink-300" />
          {supplier}
        </p>

        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3"
              fill={i < Math.round(rating) ? "#D97B3F" : "none"}
              stroke={i < Math.round(rating) ? "#D97B3F" : "#C2CCD8"}
            />
          ))}
          <span className="text-[10px] text-ink-400 ml-1">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-dashed border-ink-100 mt-3">
          <p className="font-mono text-[10px] text-ink-400">MOQ: {moq}</p>
          <p className="font-display text-base font-bold text-ink-900">
            {price}
            <span className="text-[10px] font-normal text-ink-400">{unit}</span>
          </p>
        </div>

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onRequestQuote(id)}
            className="flex-1 bg-amber-500 hover:bg-amber-600 transition-colors px-3 py-2 rounded-lg text-xs font-semibold text-white"
          >
            Request Quote
          </button>
          <button
            onClick={() => onViewDetails(id)}
            className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold border border-ink-200 text-ink-700 hover:border-ink-900 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
