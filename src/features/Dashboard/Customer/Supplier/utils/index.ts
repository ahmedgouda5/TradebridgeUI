import {
  Cpu,
  Wheat,
  Factory,
  Shirt,
  Sofa,
  Coffee,
  Wifi,
  Wrench,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const SUPPLIER_ICON_MAP: Record<string, LucideIcon> = {
  cpu: Cpu,
  wheat: Wheat,
  factory: Factory,
  shirt: Shirt,
  sofa: Sofa,
  coffee: Coffee,
  wifi: Wifi,
  wrench: Wrench,
};

export function resolveSupplierIcon(iconKey: string): LucideIcon {
  return SUPPLIER_ICON_MAP[iconKey] ?? Building2;
}
