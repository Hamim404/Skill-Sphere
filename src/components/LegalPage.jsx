import PageHeader from "./PageHeader";

export default function LegalPage({ title, updated, sections }) {
  return (
    <>
      <PageHeader title={title} text={`Last updated ${updated}`} />
      <article className="mx-auto max-w-3xl space-y-8 px-5 pt-12">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-bold">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-mist">{s.p}</p>
          </section>
        ))}
      </article>
    </>
  );
}