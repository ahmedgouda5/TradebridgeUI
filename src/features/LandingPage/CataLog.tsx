import {
  Cpu,
  Wheat,
  HardHat,
  Shirt,
  Sofa,
  Coffee,
  Lightbulb,
  Construction,
  Table2,
  Droplet,
  Wifi,
  Wrench,
  ArrowRight,
  X,
  type LucideIcon,
} from "lucide-react";
import { useCatalogFilter } from "../../hooks/Usecatalogfilter";
import { ProductCard } from "../../components/ProductCard";
import Header from "../../shared/Components/Header";

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

const TABS: { key: "all" | "trending" | "new"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "trending", label: "Trending" },
  { key: "new", label: "New" },
];

export default function Catalog({ id }: { id: string }) {
  const {
    categories,
    liveCategoryCounts,
    products,
    totalProductCount,
    selectedCategoryId,
    selectedCategoryName,
    activeTab,
    setActiveTab,
    selectCategory,
    clearFilters,
  } = useCatalogFilter();

  const hasActiveFilters = selectedCategoryId !== null || activeTab !== "all";

  return (
    <>
      <section id={id} className="py-20 sm:py-24 bg-paper scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Header
            title="Browse by Category"
            subtitle="CATALOG / 06 SECTORS"
            description="Six core sectors, thousands of SKUs each — every listing routed through a verified supplier before it reaches you."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {categories.map((c, i) => {
              const Icon = ICON_MAP[c.icon] ?? Cpu;
              const isActive = selectedCategoryId === c.id;
              const liveCount = liveCategoryCounts.get(c.name) ?? c.count;

              return (
                <button
                  key={c.id}
                  onClick={() => selectCategory(c.id)}
                  aria-pressed={isActive}
                  className={`cat-card reveal group bg-white border rounded-xl p-5 flex flex-col items-center text-center gap-3 lift transition-colors duration-300 ${
                    isActive
                      ? "border-[#E2935C] ring-1 ring-[#E2935C]"
                      : "border-ink-100 hover:border-[#E2935C]"
                  }`}
                  style={{ transitionDelay: `${i * 0.04}s` }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl transition-colors duration-300 ${
                      isActive
                        ? "text-white bg-[#E2935C]"
                        : "bg-[#FBF1E8] text-[#1B2A3D] group-hover:bg-[#E2935C] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-ink-900">
                      {c.name}
                    </p>
                    <p className="font-mono text-[11px] text-ink-400 mt-0.5">
                      {liveCount.toLocaleString()} listings
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 ">
          <div className="flex items-center justify-between">
            <Header
              title="Featured Products"
              subtitle="CATALOG / FEATURED LISTINGS"
            />

            <div className="flex items-center gap-2">
              {selectedCategoryName && (
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-ink-500">
                  in{" "}
                  <span className="text-ink-900 font-semibold">
                    {selectedCategoryName}
                  </span>
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  aria-pressed={activeTab === tab.key}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? "bg-ink-900 text-white border-ink-900 bg-amber-600"
                      : "border-ink-200 text-ink-600 hover:border-ink-900 hover:text-ink-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-ink-400 text-sm">
              No products match the current filters.
            </div>
          )}

          <div className="flex flex-col items-center gap-3 mt-12">
            <p className="text-xs text-ink-400 font-mono">
              Showing {products.length} of {totalProductCount} products
            </p>
            <button className="px-7 py-3.5 rounded-lg border border-[#13202F] text-sm font-semibold hover:text-white  hover:bg-[#13202F] hover:border-ink-900 transition-all duration-300 inline-flex items-center gap-2">
              View Full Catalog <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
