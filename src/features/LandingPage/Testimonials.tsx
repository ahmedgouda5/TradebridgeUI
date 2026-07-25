import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatarColor: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Procurement Lead, Carlton Retail Group",
    quote:
      "TradeBridge cut our sourcing time in half. Quotes that used to take two weeks now land in 48 hours, fully verified.",
    avatarColor: "bg-amber-100 text-amber-700",
    initials: "SM",
  },
  {
    name: "Daniel Osei",
    role: "Owner, Osei Furnishings",
    quote:
      "As a supplier, the broker model means I focus on production while TradeBridge handles negotiation and follow-up.",
    avatarColor: "bg-verdant-50 text-verdant-500",
    initials: "DO",
  },
  {
    name: "Priya Nair",
    role: "Operations Manager, GreenLeaf Foods",
    quote:
      "Order tracking gave our team full visibility from quote to delivery — no more chasing suppliers for updates.",
    avatarColor: "bg-ink-100 text-ink-600",
    initials: "PN",
  },
];

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <div
      className="reveal bg-white border border-gray-300 rounded-xl p-6 lift hover:border-amber-300"
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className="flex text-amber-500 text-sm gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-[#D97B3F]" />
        ))}
      </div>

      <p className="text-[#5C6F85] text-[15px] leading-relaxed">"{t.quote}"</p>

      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-dashed border-gray-300">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-sm ${t.avatarColor}`}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-sm text-ink-900">{t.name}</p>
          <p className="text-xs text-[#5C6F85]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="tag-stamp text-xs font-semibold text-amber-700">
            RECORD / TESTIMONIALS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 mt-2">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
