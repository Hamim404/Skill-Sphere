export default function PageHeader({ title, text, children }) {
  return (
    <header className="relative isolate overflow-hidden border-b border-white/10">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute -top-24 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-orbit/25 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:py-20">
        <h1 className="text-4xl font-extrabold sm:text-6xl">{title}</h1>
        {text && <p className="mx-auto mt-4 max-w-xl text-lg text-mist">{text}</p>}
        {children}
      </div>
    </header>
  );
}
