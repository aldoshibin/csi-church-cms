"use client";

import { UsersRound, User, Calendar, HandHeart, Clock } from "lucide-react";

export function WfStatsCards({ stats }) {
  const cards = [
    { key: "totalGroups", label: "Total Groups", icon: UsersRound, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "totalMembers", label: "Total Members", icon: User, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "eventsThisMonth", label: "Events This Month", icon: Calendar, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
    { key: "activitiesThisMonth", label: "Activities This Month", icon: HandHeart, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
    { key: "attendanceAvg", label: "Attendance (Avg.)", icon: Clock, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
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
              <p className="mt-1 text-xs font-medium text-success-600">↑ {card.delta} vs last month</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
