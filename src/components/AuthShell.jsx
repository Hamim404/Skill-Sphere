import Link from "next/link";
import { Quote } from "lucide-react";
import Logo from "./Logo";

export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-2">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-mist">{subtitle}</p>
        <div className="mt-8">{children}</div>
        <p className="mt-6 text-center text-sm text-mist">{footer}</p>
      </div>

      <aside className="relative hidden min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2a1b8f] via-orbit to-[#1b8f7a] p-10 lg:block">
        <div className="absolute -right-24 -top-24 size-80 rounded-full border border-white/20 animate-spin-slow" />
        <div className="absolute -right-10 -top-10 size-52 rounded-full border border-dashed border-white/25 animate-spin-rev" />
        <div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex h-full flex-col justify-between">
          <Logo />
          <div>
            <Quote className="mb-4 text-white/60" size={36} />
            <p className="font-display text-3xl font-semibold leading-snug">I went from watching tutorials to shipping my first client project in six weeks.</p>
            <p className="mt-5 text-sm text-white/75">Nadia Rahman, Front-end developer</p>
          </div>
        </div>
      </aside>
    </section>
  );
}
