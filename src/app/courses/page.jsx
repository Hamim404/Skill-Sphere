import { Search } from "lucide-react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = { title: "All Courses | SkillSphere" };

const filters = ["All", "Development", "Design", "Marketing", "Data"];

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="All courses"
        text="Find the skill you want to build next and start learning today."
      >
        {/* TODO: wire up search by title (challenge) */}
        <div className="mx-auto mt-8 max-w-xl">
          <label className="glass flex h-14 items-center gap-3 rounded-full px-5 focus-within:border-orbit">
            <Search size={18} className="text-mist" />
            <input
              type="search"
              placeholder="Search courses by title"
              className="h-full w-full bg-transparent outline-none placeholder:text-mist"
            />
          </label>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {filters.map((f, i) => (
            <span
              key={f}
              className={`rounded-full px-4 py-1.5 text-sm ${
                i === 0
                  ? "bg-orbit font-semibold text-white"
                  : "border border-white/20 text-mist"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 pt-14">
        <p className="mb-6 text-sm text-mist">
          {courses.length} courses available
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.07}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
