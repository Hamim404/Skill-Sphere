"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Megaphone, BarChart3, PlayCircle, Users } from "lucide-react";

const chips = [
  { icon: Code2, label: "Web Dev", angle: 0, ring: 1, color: "text-orbit-soft" },
  { icon: Palette, label: "Design", angle: 120, ring: 1, color: "text-coral" },
  { icon: Megaphone, label: "Marketing", angle: 240, ring: 1, color: "text-amber" },
  { icon: BarChart3, label: "Data", angle: 70, ring: 2, color: "text-mint" },
];

export default function OrbitHero() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[18%] rounded-full bg-orbit/40 blur-3xl animate-pulse-glow" />

      {/* rings */}
      <div className="absolute inset-[6%] rounded-full border border-dashed border-white/15 animate-spin-slower" />
      <div className="absolute inset-[20%] rounded-full border border-white/15 animate-spin-slow">
        {chips.filter((c) => c.ring === 1).map((c) => <Chip key={c.label} c={c} counter="animate-spin-rev" />)}
      </div>
      <div className="absolute inset-[6%] rounded-full animate-spin-slower">
        {chips.filter((c) => c.ring === 2).map((c) => <Chip key={c.label} c={c} counter="animate-spin-rev-slower" />)}
      </div>

      {/* core sphere */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[36%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#d8ceff,#7b5cff_45%,#2a1b8f_80%)] shadow-[0_0_80px_rgba(123,92,255,0.7),inset_-18px_-20px_40px_rgba(15,12,36,0.55)]"
      />

      {/* floating cards */}
      <div className="absolute -left-2 top-[14%] animate-float">
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
          <span className="grid size-9 place-items-center rounded-xl bg-mint/20 text-mint"><PlayCircle size={18} /></span>
          <div><p className="text-xs text-mist">Now playing</p><p className="text-sm font-semibold">React &amp; Next.js Pro</p></div>
        </div>
      </div>
      <div className="absolute -right-2 bottom-[12%] animate-float [animation-delay:-3s]">
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
          <span className="grid size-9 place-items-center rounded-xl bg-amber/20 text-amber"><Users size={18} /></span>
          <div><p className="text-xs text-mist">Learners this week</p><p className="text-sm font-semibold">+2,480</p></div>
        </div>
      </div>
    </div>
  );
}

function Chip({ c, counter }) {
  const Icon = c.icon;
  return (
    <div className="absolute inset-0" style={{ transform: `rotate(${c.angle}deg)` }}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div style={{ transform: `rotate(${-c.angle}deg)` }}>
          <div className={counter}>
            <div className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold shadow-lg">
              <Icon size={15} className={c.color} />{c.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
