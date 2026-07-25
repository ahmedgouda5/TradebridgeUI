import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "../utils/productData";
import type { CatalogTab } from "../types";

const TRENDING_MIN_RATING = 4.7;

export function useCatalogFilter() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<CatalogTab>("all");

  const categoryNameById = useMemo(
    () => new Map(CATEGORIES.map((c) => [c.id, c.name])),
    [],
  );

  const liveCategoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of PRODUCTS) {
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    }
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    const categoryName = selectedCategoryId
      ? categoryNameById.get(selectedCategoryId)
      : null;

    return PRODUCTS.filter((p) => {
      const matchesCategory = !categoryName || p.category === categoryName;
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "trending" && p.rating >= TRENDING_MIN_RATING) ||
        (activeTab === "new" && p.isNew === true);

      return matchesCategory && matchesTab;
    });
  }, [selectedCategoryId, activeTab, categoryNameById]);

  const selectedCategoryName = selectedCategoryId
    ? (categoryNameById.get(selectedCategoryId) ?? null)
    : null;

  const selectCategory = (categoryId: string) => {
    setSelectedCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };

  const clearFilters = () => {
    setSelectedCategoryId(null);
    setActiveTab("all");
  };

  return {
    categories: CATEGORIES,
    liveCategoryCounts,
    products: filteredProducts,
    totalProductCount: PRODUCTS.length,
    selectedCategoryId,
    selectedCategoryName,
    activeTab,
    setActiveTab,
    selectCategory,
    clearFilters,
  };
}
