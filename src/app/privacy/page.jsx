import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy | SkillSphere" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 2026"
      sections={[
        {
          h: "What we collect",
          p: "We collect your name, email, profile photo and learning activity so we can run your account and improve our courses.",
        },
        {
          h: "How we use it",
          p: "Your data is used to personalize your experience, send important account messages and keep SkillSphere secure.",
        },
        {
          h: "Sharing",
          p: "We never sell your personal data. We only share it with services that help us operate the platform.",
        },
        {
          h: "Your choices",
          p: "You can contact us at any time to request a copy or deletion of your data.",
        },
      ]}
    />
  );
}
