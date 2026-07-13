"use client";

export function FollowUpOverviewPanel({ items = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Follow-up Overview</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-ink">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
            <span className="font-semibold text-ink">{item.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
