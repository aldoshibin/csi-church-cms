"use client";

export function RehearsalsUpcomingCard({ items = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Rehearsals</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {items.map((r, i) => (
          <div key={i}>
            <p className="text-sm font-medium text-ink">{r.title}</p>
            <p className="text-xs text-ink-subtle">{r.day}, {r.timeRange}</p>
            <p className="text-xs text-ink-subtle">{r.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
