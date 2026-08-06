import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../../shared/productCard";
import useFiltration from "../../hooks/useFiltration";

export default function MarketPlace() {
  const {
    categories,
    ratingOptions,
    sortOptions,
    activeCategoryId,
    priceMax,
    minRating,
    searchValue,
    sortValue,
    currentPage,
    totalPages,
    pageProducts,
    handleCategoryChange,
    handlePriceChange,
    handleRatingChange,
    handleSearchChange,
    handleSortChange,
    handleToggleWishlist,
    handleRequestQuote,
    handleViewDetails,
    setCurrentPage,
  } = useFiltration();

  return (
    <section>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-ink-900">
          Marketplace
        </h1>
        <p className="text-ink-500 text-sm mt-1">
          Browse listings across every category, filtered to your needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-6">
        {/* Filters sidebar */}
        <aside className="bg-white border border-ink-100 rounded-xl p-5 h-fit">
          <p className="text-xs font-semibold text-ink-600 uppercase tracking-wide mb-3">
            Categories
          </p>
          <div className="space-y-1 text-sm">
            {categories.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleCategoryChange(id.toString())}
                className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                  activeCategoryId === id
                    ? "bg-amber-50 text-amber-700 font-medium"
                    : "text-ink-600 hover:bg-paper-dim hover:text-ink-900"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-ink-400" />}
                {name}
              </button>
            ))}
          </div>

          <div className="border-t border-dashed border-ink-100 mt-4 pt-4">
            <p className="text-xs font-semibold text-ink-600 uppercase tracking-wide mb-3">
              Price Range
            </p>
            <input
              type="range"
              min={0}
              max={1000}
              value={priceMax}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-ink-400 mt-1">
              <span>$0</span>
              <span>${priceMax >= 1000 ? "1,000+" : priceMax}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-ink-100 mt-4 pt-4">
            <p className="text-xs font-semibold text-ink-600 uppercase tracking-wide mb-3">
              Min. Rating
            </p>
            <select
              value={minRating}
              onChange={(e) => handleRatingChange(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              {ratingOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search products, SKUs, suppliers…"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ink-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <select
              value={sortValue}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3.5 py-2.5 rounded-lg border border-ink-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {pageProducts.length === 0 ? (
              <p className="text-sm text-ink-400 col-span-full text-center py-10">
                No products match your filters.
              </p>
            ) : (
              pageProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onRequestQuote={handleRequestQuote}
                  onViewDetails={handleViewDetails}
                  onToggleWishlist={handleToggleWishlist}
                />
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-lg border border-ink-200 text-ink-500 hover:border-ink-900 disabled:opacity-40 disabled:hover:border-ink-200 flex items-center justify-center"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                      page === currentPage
                        ? "bg-ink-900 text-white"
                        : "border border-ink-200 text-ink-600 hover:border-ink-900"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="w-9 h-9 rounded-lg border border-ink-200 text-ink-500 hover:border-ink-900 disabled:opacity-40 disabled:hover:border-ink-200 flex items-center justify-center"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
