"use client";


export function TopCategoriesPanel({ categories = [] }) {
  const maxCount = Math.max(...categories.map((c) => c.count));

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-ink">Requests by Category (Top 5)</h3>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.label} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-sm text-ink">{category.label}</span>
            <div className="h-2.5 flex-1 rounded-full bg-surface-muted">
              <div
                className="h-2.5 rounded-full"
                style={{ width: `${(category.count / maxCount) * 100}%`, backgroundColor: category.color }}
              />
            </div>
            <span className="w-20 shrink-0 text-right text-sm text-ink-subtle">
              {category.count} ({category.percent}%)
            </span>
          </li>
        ))}
      </ul>
      <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        View all categories →
      </a>
    </div>
  );
}
