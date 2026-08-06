import { MapPin, Star, Check, Send, type LucideIcon } from "lucide-react";

export interface Supplier {
  id: string;
  name: string;
  industry: string;
  location: string;
  rating: number;
  reviews: number;
  verified: boolean;
  icon: LucideIcon;
}

export interface SupplierCardProps {
  supplier: Supplier;
  onViewProfile: (id: string) => void;
  onRequestQuote: (id: string) => void;
}

export default function SupplierCard({
  supplier,
  onViewProfile,
  onRequestQuote,
}: SupplierCardProps) {
  const {
    id,
    name,
    industry,
    location,
    rating,
    reviews,
    verified,
    icon: Icon,
  } = supplier;

  return (
    <div className="bg-white border border-ink-100 rounded-xl p-5 hover:border-amber-300 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-ink-900 text-amber-400 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink-900 text-sm leading-snug">
              {name}
            </h3>
            <p className="text-xs text-ink-400 mt-0.5">{industry}</p>
          </div>
        </div>

        {verified ? (
          <span className="bg-[#1F7A5C] text-white text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1 shrink-0">
            <Check className="w-3 h-3" /> Verified
          </span>
        ) : (
          <span className="bg-ink-100 text-ink-400 text-[10px] font-semibold px-2 py-1 rounded-full shrink-0">
            Unverified
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-ink-100 text-sm">
        <span className="text-ink-500 flex items-center gap-1.5 text-xs">
          <MapPin className="w-3.5 h-3.5 text-ink-300" />
          {location}
        </span>
        <span className="flex items-center gap-1 text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3"
              fill={i < Math.round(rating) ? "#D97B3F" : "none"}
              stroke={i < Math.round(rating) ? "#D97B3F" : "#C2CCD8"}
            />
          ))}
          <span className="font-mono text-ink-500 ml-1 text-[10px]">
            {rating} ({reviews})
          </span>
        </span>
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onViewProfile(id)}
          className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold border border-ink-200 text-ink-700 hover:bg-ink-900 hover:text-white hover:border-ink-900 transition-all"
        >
          View Profile
        </button>
        <button
          onClick={() => onRequestQuote(id)}
          className="flex-1 bg-[#D97B3F]  transition-colors px-3 py-2 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-1.5"
        >
          <Send className="w-3 h-3" /> Request Quote
        </button>
      </div>
    </div>
  );
}
