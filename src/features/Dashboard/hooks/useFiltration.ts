import { useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { LucideIcon } from "lucide-react";
import { Box } from "lucide-react";
import { PRODUCTS, ICON_MAP } from "../../../utils/productData";
import type { Product as ProductCardProduct } from "../shared/productCard";

const PAGE_SIZE = 6;

const RATING_OPTIONS = ["Any rating", "4.5 & up", "4.0 & up"];

const SORT_OPTIONS = [
  { value: "newest", label: "Sort: Newest" },
  { value: "price_asc", label: "Sort: Price (Low to High)" },
  { value: "price_desc", label: "Sort: Price (High to Low)" },
  { value: "rating", label: "Sort: Rating" },
];

const RATING_THRESHOLD: Record<string, number> = {
  "Any rating": 0,
  "4.5 & up": 4.5,
  "4.0 & up": 4.0,
};

// price strings look like "$4.20" — strip everything but digits/dot
function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

// Derive the category list (name + icon) straight from the static data,
// so there's only one place to add/remove a category.
const CATEGORIES = Array.from(new Set(PRODUCTS.map((p) => p.category))).map(
  (name) => {
    const first = PRODUCTS.find((p) => p.category === name);
    return {
      id: name,
      name,
      icon: first ? ICON_MAP[first.icon] : undefined,
    };
  },
);

export interface UseFiltrationResult {
  categories: { id: string; name: string; icon: LucideIcon | undefined }[];
  ratingOptions: string[];
  sortOptions: { value: string; label: string }[];
  activeCategoryId: string | null;
  priceMax: number;
  minRating: string;
  searchValue: string;
  sortValue: string;
  currentPage: number;
  totalPages: number;
  filteredProducts: ProductCardProduct[];
  pageProducts: ProductCardProduct[];
  handleCategoryChange: (id: string | null) => void;
  handlePriceChange: (value: number) => void;
  handleRatingChange: (value: string) => void;
  handleSearchChange: (value: string) => void;
  handleSortChange: (value: string) => void;
  handleToggleWishlist: (id: string) => void;
  handleRequestQuote: (id: string) => void;
  handleViewDetails: (id: string) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function useFiltration(): UseFiltrationResult {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [priceMax, setPriceMax] = useState(1000);
  const [minRating, setMinRating] = useState(RATING_OPTIONS[0]);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState(SORT_OPTIONS[0].value);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const handleCategoryChange = (id: string | null) => {
    setActiveCategoryId((prev) => (prev === id ? null : id));
    setCurrentPage(1);
  };

  const handlePriceChange = (value: number) => {
    setPriceMax(value);
    setCurrentPage(1);
  };

  const handleRatingChange = (value: string) => {
    setMinRating(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortValue(value);
  };

  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleRequestQuote = (id: string) => {
    console.log("Request quote:", id); // hook up to a quote modal/redux action here
  };

  const handleViewDetails = (id: string) => {
    console.log("View details:", id); // hook up to routing/navigation here
  };

  // Filter -> sort -> paginate, all derived from static PRODUCTS + local UI state
  const filteredProducts: ProductCardProduct[] = useMemo(() => {
    const threshold = RATING_THRESHOLD[minRating] ?? 0;
    const query = searchValue.trim().toLowerCase();

    let result = PRODUCTS.filter((p) =>
      activeCategoryId ? p.category === activeCategoryId : true,
    )
      .filter((p) => parsePrice(p.price) <= priceMax)
      .filter((p) => p.rating >= threshold)
      .filter((p) =>
        query
          ? p.name.toLowerCase().includes(query) ||
            p.supplier.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
          : true,
      );

    switch (sortValue) {
      case "price_asc":
        result = [...result].sort(
          (a, b) => parsePrice(a.price) - parsePrice(b.price),
        );
        break;
      case "price_desc":
        result = [...result].sort(
          (a, b) => parsePrice(b.price) - parsePrice(a.price),
        );
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // "newest" = keep original data order
    }

    return result.map((p) => ({
      ...p,
      icon: ICON_MAP[p.icon] ?? Box,
      reviews: Math.round(p.rating * 45),
      isWished: wishlist.has(p.id),
    }));
  }, [activeCategoryId, priceMax, minRating, searchValue, sortValue, wishlist]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const pageProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return {
    categories: CATEGORIES,
    ratingOptions: RATING_OPTIONS,
    sortOptions: SORT_OPTIONS,
    activeCategoryId,
    priceMax,
    minRating,
    searchValue,
    sortValue,
    currentPage,
    totalPages,
    filteredProducts,
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
  };
}
