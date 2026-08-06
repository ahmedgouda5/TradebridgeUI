import {
  Search,
  FileQuestion,
  Building2,
  TruckIcon,
  Box,
  Bell,
} from "lucide-react";
import type { DashboardHomeProps } from "../../types";

export type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

const STATUS_STYLES: Record<OrderStatus, string> = {
  pending: "bg-amber-50 text-amber-700",
  shipped: "bg-amber-50 text-amber-600",
  delivered: "bg-verdant-50 text-verdant-600",
  cancelled: "bg-red-100 text-red-600",
};

function StatusPill({ status, label }: { status: OrderStatus; label: string }) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide shrink-0 ${STATUS_STYLES[status]}`}
    >
      {label}
    </span>
  );
}

export default function DashboardHome({
  customerFirstName,
  stats,
  recommendedProducts,
  recentOrders,
}: DashboardHomeProps) {
  return (
    <section>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-ink-900">
          Welcome back, {customerFirstName} 👋
        </h1>
        <p className="text-ink-500 text-sm mt-1">
          Here's what's happening with your sourcing activity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-ink-100 rounded-xl p-4"
          >
            <p className="font-mono text-[10px] text-ink-400 uppercase">
              {s.label}
            </p>
            <p
              className={`font-display text-2xl font-bold mt-1 ${
                s.emphasize ? "text-verdant-500" : "text-ink-900"
              }`}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recommended products + Quick actions */}
      <div className="grid lg:grid-cols-3 gap-6 mb-7">
        <div className="lg:col-span-2 bg-white border border-ink-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-ink-900">
              Recommended Products
            </h3>
            <button className="text-xs font-semibold text-amber-600 hover:text-amber-700">
              Browse all
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {recommendedProducts.map((p) => (
              <button
                key={p.id}
                className="flex items-center gap-3 p-3 rounded-lg border border-ink-100 hover:border-amber-300 transition-colors text-left"
              >
                <div className="w-10 h-10 bg-paper-dim rounded-lg flex items-center justify-center text-ink-400 shrink-0">
                  <Box className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-ink-900 truncate">
                    {p.name}
                  </p>
                  <p className="text-xs text-amber-600">
                    {p.price}
                    {p.unit}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-ink-100 rounded-xl p-6">
          <h3 className="font-display font-semibold text-ink-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-2.5">
            <button className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium border border-ink-100 hover:border-amber-300 flex items-center gap-2.5">
              <Search className="w-4 h-4 text-ink-400" /> Browse Marketplace
            </button>
            <button className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium border border-ink-100 hover:border-amber-300 flex items-center gap-2.5">
              <FileQuestion className="w-4 h-4 text-ink-400" /> Request a Quote
            </button>
            <button className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium border border-ink-100 hover:border-amber-300 flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-ink-400" /> Find Suppliers
            </button>
            <button className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium border border-ink-100 hover:border-amber-300 flex items-center gap-2.5">
              <TruckIcon className="w-4 h-4 text-ink-400" /> Track an Order
            </button>
          </div>
        </div>
      </div>

      {/* Recent orders + notifications */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-ink-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-ink-900">
              Recent Orders
            </h3>
            <button className="text-xs font-semibold text-amber-600 hover:text-amber-700">
              View all
            </button>
          </div>
          <div className="space-y-3">
            {recentOrders.length === 0 ? (
              <p className="text-sm text-ink-400">No orders yet.</p>
            ) : (
              recentOrders.map((o) => (
                <div
                  key={o.id}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Box className="w-4 h-4 text-ink-300 shrink-0" />
                    <span className="text-ink-700 truncate">{o.product}</span>
                  </div>
                  <StatusPill status={o.status} label={o.statusLabel} />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white border border-ink-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-ink-900">
              Notifications
            </h3>
            <button className="text-xs font-semibold text-amber-600 hover:text-amber-700">
              View all
            </button>
          </div>
          <div className="space-y-3">
            {[].length === 0 ? (
              <p className="text-sm text-ink-400">You're all caught up.</p>
            ) : (
              [].map((n: any) => (
                <div key={n.id} className="flex items-start gap-2.5 text-sm">
                  <Bell className="w-4 h-4 text-ink-400 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-ink-700">{n.text}</p>
                    <p className="text-[10px] text-ink-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
