import DashboardSidebar from "../features/Dashboard/shared/DashboardSidebar";
import CustomerTopNavbar from "../features/Dashboard/shared/DashboardNav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = {
    name: "John Doe",
    initials: "JD",
    customerId: "123456789",
    company: "John Doe Inc",
    verified: true,
    online: true,
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <CustomerTopNavbar user={user} />
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-8 pt-[88px] pb-8 gap-6 lg:gap-8">
        <DashboardSidebar user={user} />
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
