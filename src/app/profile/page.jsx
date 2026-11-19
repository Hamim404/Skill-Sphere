import { Mail, BookOpen, Award, Flame } from "lucide-react";

export const metadata = { title: "My Profile | SkillSphere" };

// Placeholder data for layout only. Replace with your logged-in user.
const user = { name: "Your Name", email: "you@example.com", photo: "" };

const items = [
  { icon: BookOpen, label: "Courses enrolled", value: "4" },
  { icon: Award, label: "Certificates", value: "1" },
  { icon: Flame, label: "Day streak", value: "12" },
];

export default function MyProfilePage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2">
        {/* Banner */}
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#2a1b8f] via-orbit to-[#1b8f7a]">
          <div className="absolute -right-12 -top-16 size-64 animate-spin-slow rounded-full border border-white/25" />
          <div className="absolute right-20 top-6 size-24 animate-spin-rev rounded-full border border-dashed border-white/30" />
        </div>

        <div className="px-6 pb-8 sm:px-10">
          {/* Avatar */}
          <div className="-mt-14 grid size-28 place-items-center overflow-hidden rounded-full bg-ink-3 text-4xl font-bold ring-4 ring-ink-2">
            {user.photo ? (
              <img src={user.photo} alt={user.name} className="size-full object-cover" />
            ) : (
              user.name[0]
            )}
          </div>

          <h1 className="mt-5 text-3xl font-bold">{user.name}</h1>
          <p className="mt-1 inline-flex items-center gap-2 text-mist">
            <Mail size={16} /> {user.email}
          </p>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-ink/60 p-5">
                <Icon size={20} className="text-mint" />
                <p className="mt-3 font-display text-3xl font-bold">{value}</p>
                <p className="text-sm text-mist">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}