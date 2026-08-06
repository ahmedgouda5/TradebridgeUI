import CusomerNavigator from "../Customer/CusomerNavigator";
import SupplierDashboard from "../Customer/Supplier/SupplierDashboard";
import { Navigate } from "react-router-dom";

const user = {
  role: "customer",
};

function DashboardRedirect() {
  const role = user.role;

  if (role === "customer") {
    return <CusomerNavigator />;
  }

  if (role === "supplier") {
    return <SupplierDashboard />;
  }

  return <Navigate to="/login" replace />;
}

export default DashboardRedirect;
