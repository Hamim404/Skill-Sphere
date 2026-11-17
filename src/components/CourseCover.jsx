import { Code2, Palette, Megaphone, BarChart3 } from "lucide-react";

const map = {
  Development: { icon: Code2, grad: "from-[#4b32d6] via-orbit to-[#2de2b0]" },
  Design: { icon: Palette, grad: "from-[#ff7a6b] via-[#c04dff] to-orbit" },
  Marketing: { icon: Megaphone, grad: "from-[#ffc24b] via-coral to-[#c04dff]" },
  Data: { icon: BarChart3, grad: "from-mint via-[#2a9df4] to-orbit" },
};

export default function CourseCover({ category, className = "h-44" }) {
  const { icon: Icon, grad } = map[category] ?? map.Development;
  return (
    <div className={`relative isolate overflow-hidden bg-gradient-to-br ${grad} ${className}`}>
      <div className="absolute -right-10 -top-10 size-44 rounded-full border border-white/25" />
      <div className="absolute -right-2 top-2 size-28 rounded-full border border-white/20" />
      <div className="absolute -bottom-12 -left-8 size-40 rounded-full bg-white/10 blur-xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid size-16 place-items-center rounded-2xl bg-ink/30 text-white backdrop-blur-md ring-1 ring-white/30 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
          <Icon size={30} />
        </div>
      </div>
    </div>
  );
}
