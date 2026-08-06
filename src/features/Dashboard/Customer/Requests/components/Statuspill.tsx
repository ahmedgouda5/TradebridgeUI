export type StatusKind =
  | "pending"
  | "progress"
  | "confirmed"
  | "shipped"
  | "delivered";

const STATUS_STYLES: Record<StatusKind, string> = {
  pending: "bg-amber-50 text-amber-700", // .status-pending
  progress: "bg-verdant-50 text-verdant-600", // .status-progress
  confirmed: "bg-ink-100 text-ink-600", // .status-confirmed
  shipped: "bg-amber-50 text-amber-600", // .status-shipped
  delivered: "bg-verdant-50 text-verdant-500", // .status-delivered
};

export interface StatusPillProps {
  status: StatusKind;
  label: string;
}

export default function StatusPill({ status, label }: StatusPillProps) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide shrink-0 ${STATUS_STYLES[status]}`}
    >
      {label}
    </span>
  );
}
