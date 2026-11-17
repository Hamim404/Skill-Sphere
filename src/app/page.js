"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Avatar } from "@heroui/react";
import {
  ArrowRight,
  Timer,
  Brain,
  CalendarCheck,
  Hammer,
  Flame,
  Sparkles,
  Play,
} from "lucide-react";
import courses from "@/data/courses.json";
import { categories, stats, instructors, tips } from "@/data/site";
import CourseCard from "@/components/CourseCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import OrbitHero from "@/components/OrbitHero";

const tipIcons = {
  timer: Timer,
  brain: Brain,
  calendar: CalendarCheck,
  hammer: Hammer,
};
const headline = ["Upgrade", "your", "skills", "today."];

export default function Home() {
  const popular = courses.slice(0, 3);
  const trending = courses.slice(3, 6);

  return (
    <>
      {/* HERO */}
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
                  initial={{ opacity: 0, y: 40, rotateX: -50 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
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
                as={Link}
                href="/courses"
                color="primary"
                size="lg"
                endContent={<ArrowRight size={18} />}
                className="font-semibold shadow-[0_0_40px_rgba(123,92,255,0.55)]"
              >
                Explore courses
              </Button>
              <Button
                as={Link}
                href="/register"
                size="lg"
                variant="bordered"
                startContent={<Play size={16} />}
                className="border-white/20"
              >
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

      {/* MARQUEE */}
      <section
        aria-label="Categories"
        className="border-y border-white/10 bg-ink-2/50 py-5"
      >
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...categories, ...categories].map((c, i) => (
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

      {/* POPULAR */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <SectionHeading
          title="Popular courses"
          text="The highest-rated courses our learners keep coming back to."
          action={
            <Button
              as={Link}
              href="/courses"
              variant="light"
              endContent={<ArrowRight size={16} />}
            >
              See all courses
            </Button>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((course, i) => (
            <Reveal key={course.id} delay={i * 0.08}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEARNING TIPS */}
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
                const Icon = tipIcons[t.icon];
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

      {/* TRENDING */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <SectionHeading
          title={
            <span className="inline-flex items-center gap-3">
              <Flame className="text-coral" /> Trending courses
            </span>
          }
          text="Fresh releases and fast risers this month."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((course, i) => (
            <Reveal key={course.id} delay={i * 0.08}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <SectionHeading
          center
          title="Learn from people who do the work"
          text="Our instructors ship products, lead teams and teach what they use every day."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div className="group rounded-3xl border border-white/10 bg-ink-2 p-6 text-center transition hover:-translate-y-1.5 hover:border-orbit/60">
                <div
                  className={`mx-auto mb-4 grid size-24 place-items-center rounded-full bg-gradient-to-br ${p.color} p-[3px]`}
                >
                  <Avatar
                    name={p.name}
                    className="size-full bg-ink-3 text-2xl font-display font-bold text-white"
                  />
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pt-24">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2a1b8f] via-orbit to-[#1b8f7a] px-8 py-16 text-center sm:py-20">
            <div className="absolute -left-20 -top-20 -z-10 size-72 rounded-full border border-white/20 animate-spin-slow" />
            <div className="absolute -bottom-24 -right-16 -z-10 size-80 rounded-full border border-dashed border-white/25 animate-spin-rev" />
            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold sm:text-5xl">
              Your next skill is one lesson away
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Create a free account and start learning in minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                as={Link}
                href="/register"
                size="lg"
                className="bg-white font-semibold text-ink"
              >
                Create free account
              </Button>
              <Button
                as={Link}
                href="/faq"
                size="lg"
                variant="bordered"
                className="border-white/50 text-white"
              >
                Read the FAQ
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
