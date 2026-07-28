import {
  CloudUpload,
  FileQuestion,
  MessagesSquare,
  Truck,
  CircleCheck,
  Lock,
  Zap,
  Layers,
  FileSpreadsheet,
  Route,
  type LucideIcon,
} from "lucide-react";
import HeaderAdv from "../../shared/Components/HeaderAdv";

interface ProcessStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    icon: CloudUpload,
    title: "Seller Uploads Products",
    description:
      "Suppliers list specs, MOQ, and pricing tiers — we verify the listing before it goes live.",
  },
  {
    step: "02",
    icon: FileQuestion,
    title: "Customer Submits Inquiry",
    description:
      "Buyers send a quote request with quantity, specs, and delivery timeline.",
  },
  {
    step: "03",
    icon: MessagesSquare,
    title: "We Manage Communication",
    description:
      "Our team negotiates terms, confirms specs, and keeps both sides aligned.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Order & Delivery",
    description:
      "Order is confirmed, payment is secured, and delivery is tracked to your door.",
  },
];

// ── Why Choose Us — advantages ──────────────────────────────
interface Advantage {
  icon: LucideIcon;
  accent: "verdant" | "amber";
  title: string;
  description: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: CircleCheck,
    accent: "verdant",
    title: "Verified Suppliers",
    description:
      "Document checks, sample review, and audited fulfillment history before any listing goes live.",
  },
  {
    icon: Lock,
    accent: "amber",
    title: "Secure Transactions",
    description:
      "Funds are held and released against confirmed milestones, not promises.",
  },
  {
    icon: Zap,
    accent: "verdant",
    title: "Fast Communication",
    description:
      "A dedicated broker on every deal means replies in hours, not days.",
  },
  {
    icon: Layers,
    accent: "amber",
    title: "Multiple Categories",
    description:
      "From raw materials to finished goods, across six core industry sectors.",
  },
  {
    icon: FileSpreadsheet,
    accent: "verdant",
    title: "Easy Quotation System",
    description:
      "Submit a request once — we route it, negotiate it, and return a clear quote.",
  },
  {
    icon: Route,
    accent: "amber",
    title: "Order Tracking",
    description:
      "Live status on every order, from confirmation through to delivery.",
  },
];

const ACCENT_CLASSES: Record<Advantage["accent"], string> = {
  verdant: "bg-verdant-50 text-verdant-500",
  amber: "bg-amber-50 text-amber-600",
};

export default function About({ id }: { id: string }) {
  return (
    <>
      <section
        id={id}
        className="py-10 sm:py-10 mx-auto px-5 sm:px-8 bg-[#0F1B2E] text-paper relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 grid-dots opacity-[0.04]" />

        <HeaderAdv
          title="How It Works"
          subtitle="PROCESS / FOUR STAGES"
          description="A request moves through the same four stages every time — so both sides always know exactly where things stand."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-ink-700" />

          {PROCESS_STEPS.map(({ step, icon: Icon, title, description }, i) => (
            <div
              key={step}
              className="reveal relative bg-[#13202F] border border-ink-700 rounded-xl p-6 lift hover:border-amber-500/40"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#D97B3F] text-ink-900 flex items-center justify-center font-display font-bold text-lg mb-5 relative z-10">
                {step}
              </div>
              <Icon className="text-[#D97B3F] w-5 h-5 mb-3 block" />
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {title}
              </h3>
              <p className="text-[#5C6F85] text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="tag-stamp text-xs font-semibold text-amber-700">
              ADVANTAGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 mt-2">
              Why Businesses Choose TradeBridge
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map(({ icon: Icon, accent, title, description }, i) => (
              <div
                key={title}
                className="reveal bg-[#F2EFE8] border border-ink-100 rounded-xl p-7 lift hover:border-amber-300"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center text-lg mb-5 ${ACCENT_CLASSES[accent]}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink-900 mb-2">
                  {title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
