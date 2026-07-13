"use client";

export function PhotoSourcePanel({ items }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-3 text-sm font-semibold text-interactive-500">Photo Source</h2>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between text-sm">
            <span className="text-ink">{item.label}</span>
            <span className="font-semibold text-ink">{item.count} ({item.percent}%)</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
