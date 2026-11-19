import Link from "next/link";
import { Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center overflow-hidden px-5 text-center">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orbit/25 blur-3xl" />

      <div>
        <div className="mx-auto mb-6 flex w-fit items-center font-display text-[9rem] font-extrabold leading-none sm:text-[13rem]">
          <span className="text-gradient">4</span>
          <span className="relative mx-2 grid size-24 place-items-center sm:size-36">
            <span className="size-full rounded-full bg-[radial-gradient(circle_at_30%_25%,#d8ceff,#7b5cff_50%,#2a1b8f)] shadow-[0_0_70px_rgba(123,92,255,0.8)]" />
            <span className="absolute -inset-[14%] animate-spin-slow rounded-full border border-dashed border-white/30">
              <span className="absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint shadow-[0_0_16px_#2de2b0]" />
            </span>
          </span>
          <span className="text-gradient">4</span>
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl">This page drifted out of orbit</h1>
        <p className="mx-auto mt-3 max-w-md text-mist">
          The link may be broken or the page may have moved. Head back home or keep exploring courses.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex h-12 items-center gap-2 rounded-xl bg-orbit px-6 font-semibold text-white shadow-[0_0_30px_rgba(123,92,255,0.5)]">
            <Home size={18} /> Back to home
          </Link>
          <Link href="/courses" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6 font-semibold transition hover:bg-white/5">
            <BookOpen size={18} /> Browse courses
          </Link>
        </div>
      </div>
    </section>
  );
}