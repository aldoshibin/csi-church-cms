"use client";

import { Users, CalendarDays, CheckSquare, UserCheck } from "lucide-react";

export function FellowshipReportsStatsCards({ stats }) {
  const cards = [
    { key: "totalMembers", label: "Total Members", icon: Users, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "totalMeetings", label: "Total Meetings", icon: CalendarDays, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "activitiesConducted", label: "Activities Conducted", icon: CheckSquare, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "totalParticipants", label: "Total Participants", icon: UserCheck, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
        const card = stats?.[key];
        if (!card) return null;
        return (
          <div key={key} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className="mt-1 truncate font-display text-xl font-bold text-ink">{card.value}</p>
              {card.delta && (
                <p className={`mt-1 text-xs font-medium ${card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                  {card.trendUp ? "↑" : "↓"} {card.delta} vs last 30 days
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
