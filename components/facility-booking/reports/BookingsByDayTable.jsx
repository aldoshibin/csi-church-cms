"use client";

export function BookingsByDayTable({ data }) {
  if (!data?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Bookings by Day of Week</h3>
      <div className="flex flex-col gap-3">
        {data.map((row) => (
          <div key={row.day} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-sm text-ink-muted">{row.day}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-interactive-500" style={{ width: `${row.pct}%` }} />
            </div>
            <span className="w-16 shrink-0 text-right text-xs text-ink-subtle">{row.bookings} ({row.pct}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
