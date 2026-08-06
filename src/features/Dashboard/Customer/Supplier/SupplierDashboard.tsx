import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SupplierCard, { type Supplier } from "./Supplierscomponent/Suppliercard";
import suppliersData from "./supplier.json";
import { resolveSupplierIcon } from "./utils";

export default function SuppliersPage() {
  const [searchValue, setSearchValue] = useState("");

  const suppliers: Supplier[] = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return suppliersData
      .filter((s) =>
        query
          ? s.name.toLowerCase().includes(query) ||
            s.industry.toLowerCase().includes(query) ||
            s.location.toLowerCase().includes(query)
          : true,
      )
      .map((s) => ({ ...s, icon: resolveSupplierIcon(s.iconKey) }));
  }, [searchValue]);

  return (
    <section>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-ink-900">
          Supplier Directory
        </h1>
        <p className="text-ink-500 text-sm mt-1">
          Verified suppliers ready to quote your next order.
        </p>
      </div>

      <div className="relative max-w-sm mb-5">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search suppliers, industry, location…"
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ink-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {suppliers.length === 0 ? (
          <p className="text-sm text-ink-400 col-span-full text-center py-10">
            No suppliers match your search.
          </p>
        ) : (
          suppliers.map((s) => (
            <SupplierCard
              key={s.id}
              supplier={s}
              onViewProfile={() => {}}
              onRequestQuote={() => {}}
            />
          ))
        )}
      </div>
    </section>
  );
}
