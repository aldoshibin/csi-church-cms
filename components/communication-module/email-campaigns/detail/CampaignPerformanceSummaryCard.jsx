"use client";

export function CampaignPerformanceSummaryCard({ performance }) {
  if (!performance) return null;
  const tiles = [
    { key: "sent", label: "Sent", value: performance.sent, color: "text-ink" },
    { key: "opened", label: "Opened", value: performance.opened, pct: performance.openedPct, color: "text-success-600" },
    { key: "clicked", label: "Clicked", value: performance.clicked, pct: performance.clickedPct, color: "text-interactive-600" },
    { key: "bounced", label: "Bounced", value: performance.bounced, pct: performance.bouncedPct, color: "text-warning-600" },
  ];
  const bars = [
    { key: "opened", label: "Opened", value: performance.opened, pct: performance.openedPct, color: "#16A34A" },
    { key: "clicked", label: "Clicked", value: performance.clicked, pct: performance.clickedPct, color: "#2563EB" },
    { key: "bounced", label: "Bounced", value: performance.bounced, pct: performance.bouncedPct, color: "#F59E0B" },
    { key: "unopened", label: "Unopened", value: performance.unopened, pct: performance.unopenedPct, color: "#94A3B8" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Performance Summary</h3>
      <div className="grid grid-cols-4 gap-2">
        {tiles.map((t) => (
          <div key={t.key} className="text-center">
            <p className={`font-display text-xl font-bold ${t.color}`}>{t.value.toLocaleString()}</p>
            <p className="text-[11px] text-ink-subtle">{t.label}</p>
            {t.pct != null && <p className="text-[11px] text-ink-subtle">{t.pct}%</p>}
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
