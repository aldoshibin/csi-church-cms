"use client";

import { Users2, HeartHandshake, CalendarDays, CircleDollarSign } from "lucide-react";

export function ReportsOverviewRow({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "totalMembers", label: "Total Members", icon: Users2, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "activeVolunteers", label: "Active Volunteers", icon: HeartHandshake, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "servicesConducted", label: "Services Conducted", icon: CalendarDays, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "totalOfferings", label: "Total Offerings", icon: CircleDollarSign, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Reports Overview</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
          const card = stats[key];
          return (
            <div key={key} className={`rounded-lg border border-border p-4 ${iconBg}`}>
              <Icon className={`h-5 w-5 ${iconColor}`} />
              <p className="mt-2 font-display text-xl font-bold text-ink">{card.value}</p>
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className={`mt-1 text-[11px] font-medium ${card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                {card.trendUp ? "↑" : "↓"} {card.delta} vs last 7 days
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
