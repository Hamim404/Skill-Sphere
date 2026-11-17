import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="SkillSphere home">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="lg" x1="4" y1="4" x2="36" y2="36">
            <stop stopColor="#A995FF" />
            <stop offset="1" stopColor="#2DE2B0" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="11" fill="url(#lg)" />
        <ellipse cx="20" cy="20" rx="18" ry="6.5" transform="rotate(-24 20 20)" stroke="#EDEBFF" strokeOpacity=".75" strokeWidth="1.6" />
        <circle cx="34.2" cy="13.4" r="2.6" fill="#FFC24B" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight">
        Skill<span className="text-gradient">Sphere</span>
      </span>
    </Link>
  );
}
