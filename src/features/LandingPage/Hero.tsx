import { useEffect, useRef, useState } from "react";
import { FileText, Search, ArrowRight, Store, ShieldCheck } from "lucide-react";

const STATS = [
  { key: "products", label: "Products", target: 8400, suffix: "+" },
  { key: "suppliers", label: "Suppliers", target: 1240, suffix: "+" },
  { key: "customers", label: "Customers", target: 5600, suffix: "+" },
  { key: "orders", label: "Orders Closed", target: 9200, suffix: "+" },
] as const;

function useCountUpOnVisible(targets: readonly number[], duration = 1400) {
  const ref = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<number[]>(targets.map(() => 0));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValues(targets.map((t) => Math.round(t * eased)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.3 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return { ref, values };
}

export default function Hero({ id }: { id: string }) {
  const { ref: ledgerRef, values } = useCountUpOnVisible(
    STATS.map((s) => s.target),
  );
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("search:", query);
  };

  return (
    <section
      id={id}
      className="relative z-10 pt-[px] ledger-bg overflow-hidden scroll-mt-24"
    >
      <div className="absolute -top-24 z-0 -right-24 w-[480px] h-[480px] bg-[#e0ab8c] rounded-full blur-3xl opacity-60 " />
      <div className="absolute top-40 -left-32 w-[380px] h-[380px] bg-verdant-50 rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <span className="tag-stamp inline-flex items-center gap-2 text-xs font-semibold text-[#D97B3F] bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
              <FileText className="w-3.5 h-3.5" />
              MANIFEST&nbsp;NO. TB-2026-001 &middot; LIVE MARKETPLACE
            </span>

            <h1 className="font-display font-bold text-[2.5rem] sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink-900 mt-6">
              Connect Businesses with
              <br className="hidden sm:block" />{" "}
              <span className="text-[#D97B3F]">Trusted Suppliers</span>
            </h1>

            <p className="text-ink-500 text-lg leading-relaxed mt-6 max-w-xl">
              We sit between vetted sellers and serious buyers — sourcing
              products, managing every quote, and handling the transaction
              end&#8209;to&#8209;end so your business gets what it needs, on
              time, at a fair price.
            </p>

            <div className="mt-8 bg-white rounded-xl shadow-card border border-ink-100 p-2 flex items-center gap-2 max-w-xl">
              <Search className="w-4 h-4 text-ink-300 pl-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search products, categories, or suppliers..."
                className="input-focus flex-1 bg-transparent py-2.5 text-sm text-ink-700 placeholder:text-ink-300 rounded-lg outline-none"
              />
              <button
                onClick={handleSearch}
                className="btn-amber px-5 py-2.5 rounded-lg text-sm font-semibold text-white whitespace-nowrap"
              >
                Search
              </button>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-md bg-[#D97B3F] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600"
              >
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-md border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-amber-500 hover:shadow-md"
              >
                <Store className="h-5 w-5" />
                Become a Supplier
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5 reveal bg-[#0F1B2E] rounded-2xl p-3 text-white"
            style={{ transitionDelay: ".1s" }}
          >
            <div
              ref={ledgerRef}
              className="relative bg-ink-900 rounded-2xl p-7 sm:p-8 shadow-[0_24px_70px_rgba(15,27,46,0.38)] ring-1 ring-white/10 text-paper overflow-hidden"
            >
              <div className="absolute inset-0 grid-dots opacity-[0.06]" />

              <div className="relative flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-widest text-[#D97B3F]">
                  PLATFORM LEDGER
                </span>
                <span className="font-mono text-[11px] tracking-widest text-ink-300">
                  UPDATED TODAY
                </span>
              </div>

              <div className="relative grid grid-cols-2 gap-6">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.key}
                    className={i % 2 === 1 ? "stat-divider pl-6" : undefined}
                  >
                    <p className="font-display text-3xl font-bold">
                      {values[i].toLocaleString()}
                      {stat.suffix}
                    </p>
                    <p className="text-ink-300 text-xs mt-1 tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-7 pt-5 border-t border-dashed border-ink-700 flex items-center gap-2 text-xs text-ink-300">
                <ShieldCheck className="w-4 h-4 text-[#D97B3F] shrink-0" />
                Every supplier verified before listing &middot;{" "}
                <span className="text-[#D97B3F] font-mono">99.2%</span> on-time
                fulfillment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <div className="marquee-pause border-t border-ink-100 bg-white/70 py-4 overflow-hidden">
        <div className="ticker-track flex items-center gap-14 whitespace-nowrap font-mono text-xs tracking-widest text-ink-400 uppercase">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i}>★ {item}</span>
          ))}
        </div>
      </div> */}
    </section>
  );
}
