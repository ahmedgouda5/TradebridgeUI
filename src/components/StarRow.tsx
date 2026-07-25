import { Star, StarHalf } from "lucide-react";

function StarRow({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <span className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: full }).map((_, i) => (
        <Star
          key={`f-${i}`}
          className="w-3 h-3 fill-amber-500 text-amber-500"
        />
      ))}
      {half && <StarHalf className="w-3 h-3 fill-amber-500 text-amber-500" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="w-3 h-3 text-amber-300" />
      ))}
    </span>
  );
}

export default StarRow;
