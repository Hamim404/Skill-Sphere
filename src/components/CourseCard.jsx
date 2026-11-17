"use client";
import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { Clock, BarChart2 } from "lucide-react";
import CourseCover from "./CourseCover";
import Stars from "./Stars";

export default function CourseCard({ course }) {
  console.log(course.category);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-2 transition duration-300 hover:-translate-y-1.5 hover:border-orbit/60 hover:shadow-[0_20px_60px_-20px_rgba(123,92,255,0.55)]">
      <div className="relative">
        <CourseCover category={course.category} />
        <Chip
          size="sm"
          className="absolute left-4 top-4 bg-ink/60 text-white backdrop-blur"
        >
          {course.category}
        </Chip>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <Stars rating={course.rating} />
          <span className="text-xs text-mist">{course.level}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">{course.title}</h3>
        <p className="mt-1 text-sm text-mist">by {course.instructor}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-mist">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BarChart2 size={14} />
            {course.level}
          </span>
        </div>
        <Button
          as={Link}
          href={`/courses/${course.id}`}
          color="primary"
          variant="flat"
          className="mt-5 w-full font-semibold"
        >
          View details
        </Button>
      </div>
    </div>
  );
}
