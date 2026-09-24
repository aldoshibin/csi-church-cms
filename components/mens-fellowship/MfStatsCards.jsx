"use client";

import { UsersRound, Users2, Calendar, FileText, Activity, Gauge } from "lucide-react";

export function MfStatsCards({ stats }) {
  const cards = [
    { key: "totalMembers", label: "Total Members", icon: UsersRound, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "activeGroups", label: "Active Groups", icon: Users2, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "meetingsThisMonth", label: "Meetings (This Month)", icon: Calendar, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "bibleStudies", label: "Bible Studies", icon: FileText, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "activities", label: "Activities", icon: Activity, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
    { key: "attendanceRate", label: "Attendance Rate", icon: Gauge, iconBg: "bg-success-50", iconColor: "text-success-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
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
              <p className="mt-1 text-xs font-medium text-success-600">↑ {card.delta} vs last 30 days</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
