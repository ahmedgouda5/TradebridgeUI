const Header = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 reveal">
      <div>
        <span className="tag-stamp text-xs font-semibold text-amber-700">
          {subtitle}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 mt-2">
          {title}
        </h2>
      </div>
      <p className="text-ink-500 max-w-md text-[15px]">{description}</p>
    </div>
  );
};

export default Header;
