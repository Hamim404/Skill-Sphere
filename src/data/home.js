import {
  Code2,
  Palette,
  Megaphone,
  BarChart3,
  Timer,
  Brain,
  CalendarCheck,
  Hammer,
} from "lucide-react";
import courses from "@/data/courses.json";

export const headline = ["Upgrade", "your", "skills", "today."];

export const categories = courses.map((c) => c.category);

export const stats = [
  { value: "48k+", label: "Active learners" },
  { value: "320", label: "Expert-led lessons" },
  { value: "4.8", label: "Average rating" },
];

export const chips = [
  {
    icon: Code2,
    label: "Web Dev",
    angle: 0,
    ring: 1,
    color: "text-orbit-soft",
  },
  { icon: Palette, label: "Design", angle: 120, ring: 1, color: "text-coral" },
  {
    icon: Megaphone,
    label: "Marketing",
    angle: 240,
    ring: 1,
    color: "text-amber",
  },
  { icon: BarChart3, label: "Data", angle: 70, ring: 2, color: "text-mint" },
];

export const tips = [
  {
    icon: Timer,
    title: "Study in focused sprints",
    text: "25 minutes of deep work, 5 minutes away from the screen. Repeat four times, then take a longer break.",
  },
  {
    icon: Brain,
    title: "Teach it back",
    text: "Explain what you just learned in your own words. If you can't, rewatch that lesson once.",
  },
  {
    icon: CalendarCheck,
    title: "Block your learning time",
    text: "Put lessons on your calendar like meetings. Small daily slots beat weekend marathons.",
  },
  {
    icon: Hammer,
    title: "Build while you learn",
    text: "Ship a tiny project after every module. Real output makes the skill stick.",
  },
];

export const instructors = [
  {
    name: "Amelia Carter",
    role: "Product Designer, ex-Figma",
    students: "12.4k",
    courses: 6,
    color: "from-orbit to-coral",
  },
  {
    name: "Liam Walker",
    role: "Staff Engineer, Vercel alumni",
    students: "18.1k",
    courses: 9,
    color: "from-mint to-orbit",
  },
  {
    name: "Priya Nair",
    role: "Lead Data Scientist",
    students: "9.7k",
    courses: 5,
    color: "from-amber to-coral",
  },
  {
    name: "Rafiq Ahmed",
    role: "Growth Marketing Lead",
    students: "7.3k",
    courses: 4,
    color: "from-orbit-soft to-mint",
  },
];

export const popular = courses
  .toSorted((a, b) => b.rating - a.rating)
  .slice(0, 3);
export const trending = courses.slice(-3);
