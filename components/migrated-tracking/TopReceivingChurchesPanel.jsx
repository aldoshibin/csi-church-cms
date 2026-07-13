"use client";

export function TopReceivingChurchesPanel({ items, onViewFullReport }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-3 text-sm font-semibold text-interactive-500">Top Receiving Churches</h2>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between text-sm">
            <span className="text-ink">{item.label}</span>
            <span className="font-semibold text-ink">{item.count}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onViewFullReport}
        className="mt-4 w-full rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-muted"
      >
        View Full Report
      </button>
    </section>
  );
}
