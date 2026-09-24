"use client";

export function SubscriptionsByFrequencyCard({ breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Subscriptions by Frequency</h3>
      <div className="flex flex-col gap-3.5">
        {breakdown.map((entry) => (
          <div key={entry.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-ink-muted">{entry.label}</span>
              <span className="font-medium text-ink">{entry.count} ({entry.pct}%)</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-success-500" style={{ width: `${entry.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
