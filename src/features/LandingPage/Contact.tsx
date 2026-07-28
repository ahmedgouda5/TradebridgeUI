export default function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="relative py-20 sm:py-24 bg-[#0F1B2E] scroll-mt-24">
      <div className="absolute inset-0 grid-dots opacity-[0.05]" />
      <div className="absolute -top-20 left-1/4 w-[420px] h-[420px] bg-amber-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center reveal">
        <span className="tag-stamp text-xs font-semibold text-[#D97B3F]">
          JOIN THE LEDGER
        </span>
        <h2 className="font-display text-3xl sm:text-[2.6rem] font-bold text-white mt-3 leading-tight">
          Ready to Grow Your Business with Trusted Trade Partners?
        </h2>
        <p className="text-[#5C6F85] mt-5 text-lg max-w-2xl mx-auto">
          Whether you're sourcing products or looking to sell to verified buyers
          — register today and let us handle the rest
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <button className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#D97B3F]">
            Register as Buyer
          </button>
          <button className="px-7 py-3.5 rounded-lg text-sm font-semibold bg-white text-[#13202F]">
            Register as Supplier
          </button>
        </div>
      </div>
    </section>
  );
}
