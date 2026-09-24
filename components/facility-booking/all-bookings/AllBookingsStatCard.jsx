"use client";

export function AllBookingsStatCard({ icon: Icon, iconBg, iconColor, label, labelColor = "text-ink", value, sub }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-center gap-2">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className={`text-sm font-medium ${labelColor}`}>{label}</span>
      </div>
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
      <p className="text-xs text-ink-subtle">{sub}</p>
    </div>
  );
}
