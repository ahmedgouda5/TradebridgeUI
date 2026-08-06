import { FileQuestion } from "lucide-react";
import StatusPill, { type StatusKind } from "./components/Statuspill";
import requestsData from "./Requests.json";

interface QuoteRequest {
  id: string;
  product: string;
  supplier: string;
  qty: string;
  date: string;
  status: StatusKind;
  statusLabel: string;
}

const requests: QuoteRequest[] = requestsData as QuoteRequest[];

export default function MyRequests() {
  const handleView = (id: string) => {
    console.log("View request:", id); // hook up to a request detail modal/route here
  };

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
        {requests.length === 0 ? (
          <p className="text-sm text-ink-400 text-center py-10">
            You haven't sent any quote requests yet.
          </p>
        ) : (
          requests.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-ink-100 rounded-xl p-5 flex flex-wrap items-center gap-4 hover:border-amber-300 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-paper-dim text-ink-500 flex items-center justify-center shrink-0">
                <FileQuestion className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-[180px]">
                <p className="font-medium text-ink-900 text-sm">{r.product}</p>
                <p className="text-xs text-ink-400 mt-0.5">
                  To <span className="text-ink-600">{r.supplier}</span> ·{" "}
                  {r.date}
                </p>
              </div>

              <div className="text-sm font-mono text-ink-600">{r.qty}</div>

              <StatusPill status={r.status} label={r.statusLabel} />

              <button
                onClick={() => handleView(r.id)}
                className="px-4 py-2 rounded-lg text-xs font-semibold border border-ink-200 text-ink-700 hover:border-ink-900 transition-colors"
              >
                View
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
