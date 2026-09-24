"use client";

export function DocumentActivityStatCard({ icon: Icon, iconBg, iconColor, value, label, sub }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-white p-5 shadow-card">
      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="text-sm font-medium text-ink-subtle">{label}</p>
        <p className="font-display text-2xl font-bold text-ink">{value}</p>
        <p className="text-xs text-ink-subtle">{sub}</p>
      </div>
    </div>
  );
}
