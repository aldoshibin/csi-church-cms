"use client";

export function BookingLegendCard({ legend }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Booking Legend</h3>
      <div className="mt-3 flex flex-col gap-2">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-ink-muted">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
