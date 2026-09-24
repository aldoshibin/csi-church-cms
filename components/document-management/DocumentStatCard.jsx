"use client";

export function DocumentStatCard({ icon: Icon, iconBg, iconColor, label, value, sub, progressPct }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-center gap-2">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-ink-subtle">{label}</span>
      </div>
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
      {progressPct != null ? (
        <div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
            <div className="h-full rounded-full bg-interactive-500" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mt-1 text-xs text-ink-subtle">{progressPct}%</p>
        </div>
      ) : (
        <p className="text-xs text-ink-subtle">{sub}</p>
      )}
    </div>
  );
}
