const OrderStatus = ({ statusLabel }: { statusLabel: string }) => {
  const status: Record<string, string> = {
    shipped: "text-amber-600 bg-amber-50",
    delivered: "text-green-600 bg-green-50",
    pending: "text-slate-600 bg-slate-50",
    cancelled: "text-red-600 bg-red-50",
    "": "",
  };
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold ${status[statusLabel.toLowerCase()]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${status[statusLabel.toLowerCase()]}`}
      />
      {statusLabel}
    </div>
  );
};

export default OrderStatus;
