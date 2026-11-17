export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center" role="status" aria-label="Loading">
      <div className="relative size-24">
        <div className="absolute inset-0 rounded-full border border-white/15" />
        <div className="absolute inset-0 animate-spin rounded-full" style={{ animationDuration: "1.6s" }}>
          <span className="absolute left-1/2 top-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint shadow-[0_0_18px_#2de2b0]" />
        </div>
        <div className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#d8ceff,#7b5cff_60%,#2a1b8f)] shadow-[0_0_40px_rgba(123,92,255,0.7)]" />
      </div>
    </div>
  );
}
