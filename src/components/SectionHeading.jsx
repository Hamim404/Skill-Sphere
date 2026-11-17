export default function SectionHeading({ title, text, action, center = false }) {
  return (
    <div className={`mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${center ? "items-center text-center md:flex-col md:items-center" : ""}`}>
      <div className={center ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
        {text && <p className="mt-3 text-mist">{text}</p>}
      </div>
      {action}
    </div>
  );
}
