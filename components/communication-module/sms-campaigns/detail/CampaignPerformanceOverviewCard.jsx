"use client";

export function CampaignPerformanceOverviewCard({ performance }) {
  if (!performance) return null;
  const tiles = [
    { key: "delivered", label: "Delivered", value: performance.delivered, pct: performance.deliveredPct, color: "text-success-600" },
    { key: "replies", label: "Replies", value: performance.replies, pct: performance.repliesPct, color: "text-interactive-600" },
    { key: "failed", label: "Failed", value: performance.failed, pct: performance.failedPct, color: "text-warning-600" },
    { key: "pending", label: "Pending", value: performance.pending, pct: performance.pendingPct, color: "text-ink-subtle" },
  ];
  const bars = [
    { key: "delivered", label: "Delivered", value: performance.delivered, pct: performance.deliveredPct, color: "#16A34A" },
    { key: "replies", label: "Replies", value: performance.replies, pct: performance.repliesPct, color: "#2563EB" },
    { key: "failed", label: "Failed", value: performance.failed, pct: performance.failedPct, color: "#F59E0B" },
    { key: "pending", label: "Pending", value: performance.pending, pct: performance.pendingPct, color: "#94A3B8" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Performance Overview</h3>
      <div className="grid grid-cols-4 gap-2">
        {tiles.map((t) => (
          <div key={t.key} className="text-center">
            <p className={`font-display text-xl font-bold ${t.color}`}>{t.value.toLocaleString()}</p>
            <p className="text-[11px] text-ink-subtle">{t.label}</p>
            <p className="text-[11px] text-ink-subtle">{t.pct}%</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {bars.map((b) => (
          <div key={b.key} className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-xs text-ink-subtle">{b.label}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <span className="block h-full rounded-full" style={{ width: `${b.pct}%`, backgroundColor: b.color }} />
            </span>
            <span className="w-24 shrink-0 text-right text-xs font-medium text-ink">{b.value} ({b.pct}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
