import { Star } from "lucide-react";

export default function Stars({ rating }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber">
      <Star size={15} fill="currentColor" /> {rating.toFixed(1)}
    </span>
  );
}
