import { Routes, Route } from "react-router-dom";
import MarketPlace from "./CustomerComponent/MarketPlace";
import DashboardHome from "./CustomerComponent/CustomerDashboard";
import SuppliersPage from "./Supplier/SupplierDashboard";
import MyRequests from "./Requests/Myrequests";
import OrdersTab from "./orders/ordersTab";

const CustomerNavigator = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route
            index
            element={
              <DashboardHome
                customerFirstName="Sarah"
                stats={[
                  { label: "Open Requests", value: 2 },
                  { label: "Active Orders", value: 1 },
                  { label: "Saved Products", value: 3 },
                  {
                    label: "Total Spent (YTD)",
                    value: "$6,650",
                    emphasize: true,
                  },
                ]}
                recommendedProducts={[
                  {
                    id: "P-832",
                    name: "Stainless Steel Bolts (M8x20mm)",
                    price: "$0.12",
                    unit: "/pc",
                  },
                  {
                    id: "P-833",
                    name: "LED Driver 24V DC 100W",
                    price: "$12.50",
                    unit: "/pc",
                  },
                ]}
                recentOrders={[
                  {
                    id: "ORD-5512",
                    product: "Industrial LED Panel Light",
                    status: "shipped",
                    statusLabel: "Shipped",
                  },
                  {
                    id: "ORD-5471",
                    product: "USB-C Fast Charging Hub",
                    status: "delivered",
                    statusLabel: "Delivered",
                  },
                ]}
              />
            }
          />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="suppliers" element={<SuppliersPage />} />
          <Route path="Myrequests" element={<MyRequests />} />
          <Route path="orders" element={<OrdersTab />} />
        </Routes>
      </main>
    </div>
  );
};

export default CustomerNavigator;
