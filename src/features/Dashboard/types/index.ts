import type { OrderStatus } from "../Customer/CustomerComponent/CustomerDashboard";

export interface RecommendedProduct {
  id: string;
  name: string;
  price: string;
  unit: string;
}

export interface RecentOrder {
  id: string;
  product: string;
  status: OrderStatus;
  statusLabel: string;
}

export interface NotificationPreview {
  id: string;
  text: string;
  time: string;
}

export interface DashboardHomeProps {
  customerFirstName: string;
  stats: StatCard[];
  recommendedProducts: RecommendedProduct[];
  recentOrders: RecentOrder[];
}

export interface StatCard {
  label: string;
  value: string | number;
  emphasize?: boolean; // true → verdant value color (e.g. Total Spent)
}
