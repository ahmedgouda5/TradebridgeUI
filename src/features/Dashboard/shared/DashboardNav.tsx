import { useState } from "react";
import {
  Box,
  Store,
  Truck,
  LayoutDashboard,
  Bell,
  ChevronDown,
  IdCard,
  Heart,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export type CustomerNavSection =
  | "marketplace"
  | "categories"
  | "suppliers"
  | "orders"
  | "messages"
  | "dashboard"
  | "profile"
  | "wishlist";

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NavItem {
  id: CustomerNavSection;
  label: string;
  icon?: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: "marketplace", label: "Marketplace", icon: Store },
  { id: "categories", label: "Categories" },
  { id: "suppliers", label: "Suppliers" },
  { id: "orders", label: "My Orders" },
  { id: "messages", label: "Messages" },
  { id: "dashboard", label: "Dashboard" },
];

export interface CustomerUser {
  name: string;
  initials: string;
  customerId: string;
  company: string;
  verified: boolean;
  online: boolean;
}

export interface DashboardNavbarProps {
  user?: CustomerUser | null;
}

export default function CustomerTopNavbar({ user }: DashboardNavbarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink-100">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button className="flex items-center gap-2.5 group shrink-0">
          <span className="w-9 h-9 rounded-lg bg-ink-900 flex items-center justify-center text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
            <Box className="w-4 h-4" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-ink-900">
            Trade<span className="text-amber-600">Bridge</span>
          </span>
        </button>

        {/* Desktop nav - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8 min-w-0">
          <div className="flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-colors flex items-center ${"text-ink-600 hover:text-ink-900 hover:bg-paper-dim"}`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 mr-1 text-amber-600" />}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right side items (bell + profile) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Notifications bell */}
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsProfileOpen(false);
              }}
              className="relative w-8 h-8 rounded-lg text-ink-500 hover:text-ink-900 hover:bg-paper-dim flex items-center justify-center transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] w-80 bg-white border border-ink-100 rounded-xl shadow-cardHover overflow-hidden z-50">
                <div className="flex items-center justify-between px-4 py-3 border-b border-ink-100">
                  <p className="font-display font-semibold text-sm text-ink-900">
                    Notifications
                  </p>
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-ink-100">
                  {[].length === 0 ? (
                    <p className="text-sm text-ink-400 text-center py-6">
                      No notifications yet
                    </p>
                  ) : (
                    [].map((n: any) => (
                      <div
                        key={n.id}
                        className={`px-4 py-3 ${!n.read ? "bg-amber-50/40" : ""}`}
                      >
                        <p className="text-sm font-medium text-ink-900">
                          {n.title}
                        </p>
                        <p className="text-xs text-ink-400 mt-0.5">
                          {n.message}
                        </p>
                        <p className="text-[10px] text-ink-300 mt-1">
                          {n.time}
                        </p>
                      </div>
                    ))
                  )}
                </div>
                <button className="w-full text-center py-2.5 text-xs font-semibold text-amber-600 hover:bg-paper-dim transition-colors border-t border-ink-100">
                  View all notifications
                </button>
              </div>
            )}
          </div>

          <div className="w-px h-4 bg-ink-200 mx-1 shrink-0" />

          {/* Profile dropdown */}
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsNotificationsOpen(false);
              }}
              className="flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-lg hover:bg-paper-dim transition-colors"
              title="My Profile"
            >
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-display font-semibold text-xs">
                {user?.initials || "JD"}
              </span>
              <ChevronDown className="w-3 h-3 text-ink-400" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] w-60 bg-white border border-ink-100 rounded-xl shadow-cardHover overflow-hidden z-50">
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-ink-100 bg-paper-dim/60">
                  <span className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-display font-semibold text-sm shrink-0">
                    {user?.initials || "JD"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-ink-900 text-sm truncate">
                      {user?.name || "John Doe"}
                    </p>
                    <p className="text-xs text-ink-400 truncate">
                      {user?.customerId
                        ? `ID: ${user.customerId}`
                        : "john.doe@example.com"}
                    </p>
                  </div>
                </div>
                <div className="py-1.5">
                  <button className="w-full text-left px-4 py-2.5 text-sm text-ink-700 hover:bg-paper-dim flex items-center gap-2.5">
                    <LayoutDashboard className="w-4 h-4 text-ink-400" />
                    Dashboard
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-sm text-ink-700 hover:bg-paper-dim flex items-center gap-2.5">
                    <IdCard className="w-4 h-4 text-ink-400" />
                    My Profile
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-sm text-ink-700 hover:bg-paper-dim flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-ink-400" />
                    My Orders
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-sm text-ink-700 hover:bg-paper-dim flex items-center gap-2.5">
                    <Heart className="w-4 h-4 text-ink-400" />
                    Saved Products
                  </button>
                </div>
                <div className="border-t border-ink-100 py-1.5">
                  <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 flex items-center gap-2.5">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 text-ink-700"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-ink-100 bg-paper px-5 pb-5 pt-2">
          <ul className="flex flex-col gap-1 font-medium text-ink-700">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button className="w-full text-left py-2.5 border-b border-ink-100 flex items-center justify-between">
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button className="w-full mt-4 px-4 py-2.5 rounded-lg border border-ink-200 text-sm font-semibold text-red-500 flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
}
