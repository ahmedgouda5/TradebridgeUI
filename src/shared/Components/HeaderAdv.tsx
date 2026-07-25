interface HeaderAdvProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const HeaderAdv = ({ title, subtitle, description }: HeaderAdvProps) => {
  return (
    <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <span className="tag-stamp text-xs font-semibold text-[#E2935C]">
          {subtitle}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
          {title}
        </h2>
        {description && (
          <p className="text-[#5C6F85] mt-4 text-[15px]">{description}</p>
        )}
      </div>
    </div>
  );
};

export default HeaderAdv;
