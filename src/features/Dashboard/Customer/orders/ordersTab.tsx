import { Truck } from "lucide-react";
import OrderStatus from "./components/OrderStatus";

const ordersTab = () => {
  const orders = [
    {
      id: "ORD-5512",
      product: "Industrial LED Panel Light",
      statusLabel: "Shipped",
      price: "$12.50",
    },
    {
      id: "ORD-5471",
      product: "USB-C Fast Charging Hub",
      statusLabel: "Delivered",
      price: "$12.50",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-ink-900">
          My Requests &amp; Quotes
        </h1>
        <p className="text-ink-500 text-sm mt-1">
          Track every quote request from submission to supplier response.
        </p>
      </div>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <p className="text-sm text-ink-400 text-center py-10">
            You haven't sent any quote requests yet.
          </p>
        ) : (
          orders.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-ink-100 rounded-xl p-5 flex flex-wrap items-center gap-4 hover:border-amber-300 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-paper-dim text-ink-500 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-[180px]">
                <p className="font-medium text-ink-900 text-sm">{r.product}</p>
              </div>

              <div className="text-sm font-mono text-ink-600">{r.price}</div>
              <div className="text-sm font-mono text-ink-600">
                <OrderStatus statusLabel={r.statusLabel} />
              </div>

              <button className="px-4 py-2 rounded-lg text-xs font-semibold border border-ink-200 text-ink-700 hover:border-ink-900 transition-colors">
                Track
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ordersTab;
