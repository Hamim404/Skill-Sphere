import Link from "next/link";
import { Star, Clock, BarChart2 } from "lucide-react";
import CourseCover from "./CourseCover";

export default function CourseCard({ course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-2 transition duration-300 hover:-translate-y-1.5 hover:border-orbit/60 hover:shadow-[0_20px_60px_-20px_rgba(123,92,255,0.55)]">
      <div className="relative">
        <CourseCover category={course.category} />
        <span className="absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {course.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber">
            <Star size={15} fill="currentColor" /> {course.rating.toFixed(1)}
          </span>
          <span className="text-xs text-mist">{course.level}</span>
        </div>

        <h3 className="text-lg font-semibold leading-snug">{course.title}</h3>
        <p className="mt-1 text-sm text-mist">by {course.instructor}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-mist">
          <span className="inline-flex items-center gap-1.5"><Clock size={14} />{course.duration}</span>
          <span className="inline-flex items-center gap-1.5"><BarChart2 size={14} />{course.level}</span>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-orbit/15 font-semibold text-orbit-soft transition hover:bg-orbit hover:text-white"
        >
          View details
        </Link>
      </div>
    </article>
  );
}