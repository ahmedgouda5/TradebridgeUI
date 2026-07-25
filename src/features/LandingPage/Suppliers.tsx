import { MapPin, BadgeCheck, Send, Factory } from "lucide-react";
import { ICON_MAP, SUPPLIERS } from "../../utils/productData";
import type { Supplier } from "../../types";
import StarRow from "../../components/StarRow";
import Header from "../../shared/Components/Header";

function SupplierCard({
  supplier,
  index,
}: {
  supplier: Supplier;
  index: number;
}) {
  const Icon = ICON_MAP[supplier.icon] ?? Factory;

  return (
    <div
      className="reveal bg-white border border-ink-100 rounded-xl p-6 lift hover:border-amber-300"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-xl bg-ink-900 text-[#E2935C] bg-[#13202F] flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink-900 leading-snug">
              {supplier.name}
            </h3>
            <p className="text-xs text-ink-400 mt-1">{supplier.industry}</p>
          </div>
        </div>

        {supplier.verified ? (
          <span className="badge-verified text-white bg-[#1F7A5C] text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1 shrink-0">
            <BadgeCheck className="w-3 h-3" /> Verified
          </span>
        ) : (
          <span className="bg-[#E9F5F0] text-[#1F7A5C] text-[10px] font-semibold px-2 py-1 rounded-full shrink-0">
            Pending
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-dashed border-ink-100 text-sm">
        <span className="text-ink-500 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-ink-300" /> {supplier.location}
        </span>
        <span className="flex items-center gap-1 text-xs">
          <StarRow rating={supplier.rating} />
          <span className="font-mono text-ink-500 ml-1">
            {supplier.rating} ({supplier.reviews})
          </span>
        </span>
      </div>

      <button className="w-full mt-5 px-4 py-2.5 rounded-lg text-sm font-semibold border border-ink-200 text-ink-700 hover:bg-ink-900 hover:text-white hover:border-ink-900 transition-all duration-300 inline-flex items-center justify-center gap-1.5">
        <Send className="w-3.5 h-3.5" /> Contact Supplier
      </button>
    </div>
  );
}

export default function Suppliers() {
  return (
    <section id="suppliers" className="py-20 sm:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Header
          title="Top Suppliers"
          subtitle="DIRECTORY / VETTED PARTNERS"
          description="Every company on this list has passed document checks, sample review, and a fulfillment-history audit."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPLIERS.map((s, i) => (
            <SupplierCard key={s.id} supplier={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
