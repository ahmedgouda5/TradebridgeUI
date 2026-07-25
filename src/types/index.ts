export interface Product {
  id: string;
  name: string;
  category: string;
  moq: string;
  price: string;
  unit: string;
  supplier: string;
  icon: string;
  rating: number;
  isNew?: boolean;
}

export type CatalogTab = "all" | "trending" | "new";

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Supplier {
  id: string;
  name: string;
  industry: string;
  location: string;
  rating: number;
  reviews: number;
  verified: boolean;
  icon: string; // key into ICON_MAP
}
