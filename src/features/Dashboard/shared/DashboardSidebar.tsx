import {
  Home,
  Store,
  Building2,
  FileQuestion,
  Truck,
  Heart,
  Bell,
  IdCard,
  Settings,
  ArrowLeft,
  Plus,
  CheckCircle2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export type CustomerTab =
  | "home"
  | "marketplace"
  | "suppliers"
  | "requests"
  | "orders"
  | "saved"
  | "notifications"
  | "profile"
  | "settings";

interface TabItem {
  id: CustomerTab;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  path: string;
}

const TABS: TabItem[] = [
  {
    id: "home",
    path: "/dashboard",
    label: "Dashboard",
    icon: Home,
    isActive: true,
  },
  {
    id: "marketplace",
    path: "/dashboard/marketplace",
    label: "Marketplace",
    icon: Store,
    isActive: false,
  },
  {
    id: "suppliers",
    path: "/dashboard/suppliers",
    label: "Supplier Directory",
    icon: Building2,
    isActive: false,
  },
  {
    id: "requests",
    path: "/dashboard/Myrequests",
    label: "My Requests",
    icon: FileQuestion,
    isActive: false,
  },
  {
    id: "orders",
    path: "/dashboard/orders",
    label: "My Orders",
    icon: Truck,
    isActive: false,
  },
  {
    id: "saved",
    path: "/dashboard/saved",
    label: "Saved Products",
    icon: Heart,
    isActive: false,
  },
  {
    id: "notifications",
    path: "/dashboard/notifications",
    label: "Notifications",
    icon: Bell,
    isActive: false,
  },
  {
    id: "profile",
    path: "/dashboard/profile",
    label: "Profile",
    icon: IdCard,
    isActive: false,
  },
  {
    id: "settings",
    path: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
    isActive: false,
  },
];

export interface CustomerUser {
  name: string;
  initials: string;
  customerId: string;
  company: string;
  verified: boolean;
  online: boolean;
}

export interface DashboardSidebarProps {
  user: CustomerUser;
}

export default function DashboardSidebar({ user }: DashboardSidebarProps) {
  const [selectedTab, setSelectedTab] = useState<CustomerTab>("home");

  // Handle tab change
  const handleTabChange = (tab: CustomerTab) => {
    setSelectedTab(tab);
  };

  // Memoize tabs
  const tabs = useMemo(() => {
    return TABS.map((tab) => {
      return {
        ...tab,
        isActive: tab.id === selectedTab,
      };
    });
  }, [selectedTab]);

  return (
    <aside className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-[88px] lg:self-start">
      <div className="bg-white border border-ink-100 rounded-xl p-5 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-display font-semibold text-base">
              {user.initials}
            </div>
            {user.online && (
              <span
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-verdant-500 border-2 border-white"
                title="Online"
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="font-display font-semibold text-ink-900 text-sm truncate">
              {user.name}
            </p>
            <p className="font-mono text-[10px] text-ink-400">
              {user.customerId}
            </p>
          </div>
        </div>

        <p className="text-xs text-ink-400 mt-3">{user.company}</p>

        {user.verified && (
          <span className="inline-flex items-center gap-1.5 mt-2.5 text-[10px] font-semibold text-verdant-600 bg-verdant-50 px-2 py-1 rounded-full">
            <CheckCircle2 className="w-3 h-3" />
            Verified Buyer
          </span>
        )}
      </div>

      <button className="w-full mb-4 bg-[#E2935C] hover:bg-[#C56E36] transition-colors px-3.5 py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2">
        <Plus className="w-4 h-4" />
        New Quote Request
      </button>

      <nav className="bg-white border border-gray-200 rounded-xl w-full p-3 sm:p-4 lg:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-1">
        {tabs.map(({ id, path, label, icon: Icon, isActive }) => {
          return (
            <Link
              to={path}
              key={id}
              onClick={() => handleTabChange(id)}
              data-tab={id}
              className={`flex items-center justify-start gap-2.5 px-2.5 py-2.5 rounded-lg text-sm font-medium text-left min-w-0 transition-colors ${
                isActive
                  ? "bg-[#13202F] text-[#E4E9EE]"
                  : "text-[#2A3A4D] hover:bg-[#F2EFE8]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </nav>
      <button className="w-full mt-4 px-3.5 py-2.5 rounded-lg text-sm font-medium text-ink-500 hover:text-ink-900 border border-gray-200 bg-white flex items-center gap-2.5">
        <ArrowLeft className="w-4 h-4" />
        Back to site
      </button>
    </aside>
  );
}
