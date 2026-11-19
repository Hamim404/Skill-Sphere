import { ChevronDown, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "FAQ | SkillSphere" };
const faqs = [
  {
    q: "Is SkillSphere free to join?",
    a: "Creating an account is free. You can explore the catalog and course previews before you decide what to learn.",
  },
  {
    q: "Do I need any experience to start?",
    a: "No. Every course is labeled Beginner, Intermediate or Advanced so you can pick the right starting point.",
  },
  {
    q: "How long do I have access to a course?",
    a: "Once you enroll, the course is yours for life, including every future update.",
  },
  {
    q: "Can I learn on my phone or tablet?",
    a: "Yes. SkillSphere is fully responsive, so lessons work on mobile, tablet and desktop.",
  },
  {
    q: "Will I get a certificate?",
    a: "You earn a shareable certificate when you complete a course and its capstone project.",
  },
  {
    q: "How do I contact support?",
    a: "Email hello@skillsphere.com or use the contact details in the footer. We reply within one working day.",
  },
];
export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        text="Quick answers about courses, access and your account."
      />

      <section className="mx-auto max-w-3xl px-5 pt-12">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border border-white/10 bg-ink-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-mist transition group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 text-mist">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="glass mt-10 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-mist">
            Our team replies within one working day.
          </p>
          <a
            href="mailto:hello@skillsphere.com"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-xl bg-orbit px-6 font-semibold text-white transition hover:bg-orbit-soft"
          >
            <Mail size={16} /> Email support
          </a>
        </div>
      </section>
    </>
  );
}
