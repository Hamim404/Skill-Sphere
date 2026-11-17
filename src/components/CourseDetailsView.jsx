"use client";
import Link from "next/link";
import { Accordion, AccordionItem, Button, Chip, Avatar } from "@heroui/react";
import { ArrowLeft, Check, Clock, BarChart2, Award, Infinity as Inf, Smartphone, PlayCircle } from "lucide-react";
import { curriculum, learnPoints } from "@/data/site";
import CourseCover from "./CourseCover";
import Stars from "./Stars";
import Reveal from "./Reveal";

export default function CourseDetailsView({ course }) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="absolute -right-20 top-0 -z-10 size-96 rounded-full bg-orbit/25 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 py-12">
          <Button as={Link} href="/courses" variant="light" size="sm" startContent={<ArrowLeft size={16} />} className="mb-6 text-mist">All courses</Button>
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Chip color="primary" variant="flat">{course.category}</Chip>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">{course.title}</h1>
              <p className="mt-4 max-w-xl text-lg text-mist">{course.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist">
                <Stars rating={course.rating} />
                <span className="inline-flex items-center gap-1.5"><Clock size={15} />{course.duration}</span>
                <span className="inline-flex items-center gap-1.5"><BarChart2 size={15} />{course.level}</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={course.instructor} size="sm" className="bg-ink-3" />
                <span className="text-sm text-mist">Taught by <b className="text-white">{course.instructor}</b></span>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-30px_rgba(123,92,255,0.7)]">
              <CourseCover category={course.category} className="h-64 sm:h-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-14 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-12">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">What you&apos;ll learn</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {learnPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ink-2 p-4 text-sm">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint/20 text-mint"><Check size={13} /></span>{p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Course curriculum</h2>
            <Accordion variant="splitted" selectionMode="multiple" defaultExpandedKeys={["0"]} className="mt-5 px-0" itemClasses={{ base: "!bg-ink-2 border border-white/10 !shadow-none", title: "font-semibold", trigger: "py-4" }}>
              {curriculum.map((m, i) => (
                <AccordionItem key={String(i)} aria-label={m.title} title={`Module ${i + 1}: ${m.title}`} subtitle={`${m.lessons.length} lessons`}>
                  <ul className="space-y-2.5 pb-3">
                    {m.lessons.map((l) => (
                      <li key={l} className="flex items-center gap-3 text-sm text-mist"><PlayCircle size={16} className="text-orbit-soft" />{l}</li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>

        <aside>
          <div className="glass sticky top-24 rounded-3xl p-6">
            <h3 className="text-xl font-bold">Ready to start?</h3>
            <p className="mt-1 text-sm text-mist">Join thousands of learners on this course.</p>
            <Button color="primary" size="lg" className="mt-5 w-full font-semibold shadow-[0_0_30px_rgba(123,92,255,0.5)]">Enroll now</Button>
            <ul className="mt-6 space-y-3 text-sm text-mist">
              <li className="flex items-center gap-3"><Clock size={17} className="text-mint" />{course.duration} of video lessons</li>
              <li className="flex items-center gap-3"><Inf size={17} className="text-mint" />Lifetime access</li>
              <li className="flex items-center gap-3"><Smartphone size={17} className="text-mint" />Learn on any device</li>
              <li className="flex items-center gap-3"><Award size={17} className="text-mint" />Certificate of completion</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
