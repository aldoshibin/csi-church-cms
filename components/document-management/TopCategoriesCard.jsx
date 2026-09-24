"use client";

export function TopCategoriesCard({ categories }) {
  if (!categories?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Top Categories by Documents</h3>
      <div className="mt-4 flex flex-col gap-3.5">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-muted">{cat.label}</span>
              <span className="font-medium text-ink">{cat.value} ({cat.pct}%)</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, backgroundColor: cat.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
