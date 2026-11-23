"use client";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Code2,
  Palette,
  Megaphone,
  BarChart3,
  PlayCircle,
  Users,
  Timer,
  Brain,
  CalendarCheck,
  Hammer,
  Flame,
} from "lucide-react";

import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import Reveal from "@/components/Reveal";
import {
  categories,
  chips,
  headline,
  instructors,
  popular,
  stats,
  tips,
  trending,
} from "@/data/home";

function Chip({ c, counter }) {
  const Icon = c.icon;
  return (
    <div
      className="absolute inset-0"
      style={{ transform: `rotate(${c.angle}deg)` }}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div style={{ transform: `rotate(${-c.angle}deg)` }}>
          <div className={counter}>
            <div className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold shadow-lg">
              <Icon size={15} className={c.color} />
              {c.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitHero() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[18%] animate-pulse-glow rounded-full bg-orbit/40 blur-3xl" />
      <div className="absolute inset-[6%] animate-spin-slower rounded-full border border-dashed border-white/15" />

      <div className="absolute inset-[20%] animate-spin-slow rounded-full border border-white/15">
        {chips
          .filter((c) => c.ring === 1)
          .map((c) => (
            <Chip key={c.label} c={c} counter="animate-spin-rev" />
          ))}
      </div>

      <div className="absolute inset-[6%] animate-spin-slower rounded-full">
        {chips
          .filter((c) => c.ring === 2)
          .map((c) => (
            <Chip key={c.label} c={c} counter="animate-spin-rev-slower" />
          ))}
      </div>

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[36%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#d8ceff,#7b5cff_45%,#2a1b8f_80%)] shadow-[0_0_80px_rgba(123,92,255,0.7),inset_-18px_-20px_40px_rgba(15,12,36,0.55)]"
      />

      <div className="absolute -left-2 top-[14%] animate-float">
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
          <span className="grid size-9 place-items-center rounded-xl bg-mint/20 text-mint">
            <PlayCircle size={18} />
          </span>
          <div>
            <p className="text-xs text-mist">Now playing</p>
            <p className="text-sm font-semibold">React &amp; Next.js Pro</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 bottom-[12%] animate-float [animation-delay:-3s]">
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
          <span className="grid size-9 place-items-center rounded-xl bg-amber/20 text-amber">
            <Users size={18} />
          </span>
          <div>
            <p className="text-xs text-mist">Learners this week</p>
            <p className="text-sm font-semibold">+2,480</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="absolute -left-40 top-20 -z-10 size-[420px] rounded-full bg-orbit/25 blur-3xl" />
        <div className="absolute -right-32 bottom-0 -z-10 size-[380px] rounded-full bg-mint/15 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-mist"
            >
              <Sparkles size={15} className="text-amber" /> New: Next.js Pro
              Track is live
            </motion.span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] sm:text-7xl">
              {headline.map((w, i) => (
                <motion.span
                  key={w}
                  className="mr-[0.25em] inline-block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Learn from industry experts.
              </motion.span>
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-lg text-mist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Hands-on courses in web development, design, marketing and data.
              Pick a skill, follow the path, and build work you can show.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 }}
            >
              <Button
                size="lg"
                className="bg-orbit font-semibold text-white shadow-[0_0_40px_rgba(123,92,255,0.55)]"
              >
                Explore courses
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white"
              >
                <Play size={16} />
                Join for free
              </Button>
            </motion.div>

            <motion.dl
              className="mt-12 flex gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold">{s.value}</dt>
                  <dd className="text-sm text-mist">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <OrbitHero />
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section
        aria-label="Categories"
        className="border-y border-white/10 bg-ink-2/50 py-5"
      >
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...categories, ...categories, ...categories].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-mist"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR COURSES ===== */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Popular courses
            </h2>
            <p className="mt-3 text-mist">
              The highest-rated courses our learners keep coming back to.
            </p>
          </div>
          <Link
            href="/courses"
            className="text-sm font-semibold text-orbit-soft hover:text-white"
          >
            See all courses
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== LEARNING TIPS ===== */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 p-8 sm:p-12">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-orbit/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Learning tips that actually work
              </h2>
              <p className="mt-3 text-mist">
                Study smarter with simple habits from our top instructors.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {tips.map((t, i) => {
                const Icon = t.icon;
                return (
                  <Reveal key={t.title} delay={i * 0.07}>
                    <div className="h-full rounded-2xl border border-white/10 bg-ink/60 p-5 transition hover:border-mint/50">
                      <span className="mb-3 grid size-10 place-items-center rounded-xl bg-mint/15 text-mint">
                        <Icon size={20} />
                      </span>
                      <h3 className="font-semibold">{t.title}</h3>
                      <p className="mt-1.5 text-sm text-mist">{t.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRENDING COURSES ===== */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold leading-tight sm:text-4xl">
            <Flame className="text-coral" /> Trending courses
          </h2>
          <p className="mt-3 text-mist">
            Fresh releases and fast risers this month.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== TOP INSTRUCTORS ===== */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Learn from people who do the work
          </h2>
          <p className="mt-3 text-mist">
            Our instructors ship products, lead teams and teach what they use
            every day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div className="rounded-3xl border border-white/10 bg-ink-2 p-6 text-center transition hover:-translate-y-1.5 hover:border-orbit/60">
                <div
                  className={`mx-auto mb-4 size-24 rounded-full bg-gradient-to-br ${p.color} p-[3px]`}
                >
                  <div className="grid size-full place-items-center rounded-full bg-ink-2 font-display text-2xl font-bold">
                    {p.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-mist">{p.role}</p>

                <div className="mt-4 flex justify-center gap-6 border-t border-white/10 pt-4 text-sm">
                  <span>
                    <b className="block text-white">{p.students}</b>
                    <span className="text-mist">Students</span>
                  </span>
                  <span>
                    <b className="block text-white">{p.courses}</b>
                    <span className="text-mist">Courses</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2a1b8f] via-orbit to-[#1b8f7a] px-8 py-16 text-center sm:py-20">
            <div className="absolute -left-20 -top-20 -z-10 size-72 animate-spin-slow rounded-full border border-white/20" />
            <div className="absolute -bottom-24 -right-16 -z-10 size-80 animate-spin-rev rounded-full border border-dashed border-white/25" />

            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold sm:text-5xl">
              Your next skill is one lesson away
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Create a free account and start learning in minutes.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/auth/register"
                className="inline-flex h-12 items-center rounded-xl bg-white px-6 font-semibold text-ink transition hover:bg-white/90"
              >
                Create free account
              </Link>
              <Link
                href="/faq"
                className="inline-flex h-12 items-center rounded-xl border border-white/50 px-6 font-semibold text-white transition hover:bg-white/10"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
