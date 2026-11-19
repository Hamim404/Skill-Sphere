import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Clock,
  BarChart2,
  Award,
  Infinity as InfinityIcon,
  Smartphone,
  PlayCircle,
  Star,
  ChevronDown,
} from "lucide-react";
import courses from "@/data/courses.json";
import CourseCover from "@/components/CourseCover";
const curriculum = [
  {
    title: "Getting started",
    lessons: [
      "Welcome and course roadmap",
      "Setting up your workspace",
      "How to get the most from this course",
    ],
  },
  {
    title: "Core foundations",
    lessons: [
      "The big picture",
      "Essential building blocks",
      "Hands-on exercise: your first build",
    ],
  },
  {
    title: "Going deeper",
    lessons: [
      "Patterns the pros use",
      "Working with real-world data",
      "Debugging and troubleshooting",
    ],
  },
  {
    title: "Capstone project",
    lessons: [
      "Plan your project",
      "Build and iterate",
      "Launch and share your work",
    ],
  },
];
const learnPoints = [
  "Build real projects from day one",
  "Understand the why, not just the how",
  "Work with industry-standard tools",
  "Get feedback you can act on",
  "Earn a certificate to share",
  "Lifetime access to updates",
];
export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = courses.find((c) => String(c.id) === id);
  return {
    title: course ? `${course.title} | SkillSphere` : "Course not found",
  };
}

// TODO: protect this route (redirect to login when logged out, then back here)
export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = courses.find((c) => String(c.id) === id);
  if (!course) notFound();

  return (
    <>
      {/* Top section */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="absolute -right-20 top-0 -z-10 size-96 rounded-full bg-orbit/25 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-12">
          <Link
            href="/courses"
            className="mb-6 inline-flex items-center gap-2 text-sm text-mist hover:text-white"
          >
            <ArrowLeft size={16} /> All courses
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="rounded-full bg-orbit/20 px-3 py-1 text-sm font-medium text-orbit-soft">
                {course.category}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
                {course.title}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-mist">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist">
                <span className="inline-flex items-center gap-1 font-semibold text-amber">
                  <Star size={15} fill="currentColor" />{" "}
                  {course.rating.toFixed(1)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BarChart2 size={15} />
                  {course.level}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-mist">
                <span className="grid size-9 place-items-center rounded-full bg-ink-3 font-bold text-white">
                  {course.instructor[0]}
                </span>
                <span>
                  Taught by <b className="text-white">{course.instructor}</b>
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-30px_rgba(123,92,255,0.7)]">
              <CourseCover
                category={course.category}
                className="h-64 sm:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-14 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              What you&apos;ll learn
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {learnPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ink-2 p-4 text-sm"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint/20 text-mint">
                    <Check size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Course curriculum
            </h2>
            <div className="mt-5 space-y-3">
              {curriculum.map((m, i) => (
                <details
                  key={m.title}
                  open={i === 0}
                  className="group rounded-2xl border border-white/10 bg-ink-2"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold [&::-webkit-details-marker]:hidden">
                    <span>
                      Module {i + 1}: {m.title}
                      <span className="mt-0.5 block text-xs font-normal text-mist">
                        {m.lessons.length} lessons
                      </span>
                    </span>
                    <ChevronDown
                      size={18}
                      className="text-mist transition group-open:rotate-180"
                    />
                  </summary>
                  <ul className="space-y-2.5 px-5 pb-5">
                    {m.lessons.map((l) => (
                      <li
                        key={l}
                        className="flex items-center gap-3 text-sm text-mist"
                      >
                        <PlayCircle size={16} className="text-orbit-soft" /> {l}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky enroll card */}
        <aside>
          <div className="glass sticky top-24 rounded-3xl p-6">
            <h3 className="text-xl font-bold">Ready to start?</h3>
            <p className="mt-1 text-sm text-mist">
              Join thousands of learners on this course.
            </p>
            <button className="mt-5 h-12 w-full rounded-xl bg-orbit font-semibold text-white shadow-[0_0_30px_rgba(123,92,255,0.5)] transition hover:bg-orbit-soft">
              Enroll now
            </button>
            <ul className="mt-6 space-y-3 text-sm text-mist">
              <li className="flex items-center gap-3">
                <Clock size={17} className="text-mint" />
                {course.duration} of video lessons
              </li>
              <li className="flex items-center gap-3">
                <InfinityIcon size={17} className="text-mint" />
                Lifetime access
              </li>
              <li className="flex items-center gap-3">
                <Smartphone size={17} className="text-mint" />
                Learn on any device
              </li>
              <li className="flex items-center gap-3">
                <Award size={17} className="text-mint" />
                Certificate of completion
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
