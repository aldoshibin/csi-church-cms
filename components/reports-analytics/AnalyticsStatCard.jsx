"use client";

export function AnalyticsStatCard({ icon: Icon, iconBg, iconColor, label, value, sub, trend }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-center gap-2.5">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-ink-subtle">{label}</span>
      </div>
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
      <p className="text-xs font-medium text-success-600">{trend}</p>
    </div>
  );
}
