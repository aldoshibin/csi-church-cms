"use client";

export function TripHighlightsCard({ highlights = [] }) {
  if (highlights.length === 0) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Highlights</h3>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.key} className="rounded-md bg-surface-canvas px-4 py-3 text-center">
            <p className="text-xl font-bold text-ink">{item.value}</p>
            <p className="mt-1 text-xs text-ink-subtle">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
