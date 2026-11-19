import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms & Conditions | SkillSphere" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="November 2026"
      sections={[
        {
          h: "Using SkillSphere",
          p: "By creating an account you agree to use SkillSphere for personal learning and to keep your login details private.",
        },
        {
          h: "Course content",
          p: "Course videos, materials and projects are owned by their instructors. You may not copy, resell or redistribute them.",
        },
        {
          h: "Your account",
          p: "You are responsible for activity on your account. Tell us right away if you think someone else has accessed it.",
        },
        {
          h: "Changes to these terms",
          p: "We may update these terms from time to time. Continued use of SkillSphere means you accept the latest version.",
        },
      ]}
    />
  );
}
