"use client";

import { Users, UsersRound, BookOpen, HandHeart, Briefcase } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function YmReportsStatsCards({ stats }) {
  const cards = [
    { key: "totalMembers", label: "Total Members", icon: Users, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "attendanceAvg", label: "Attendance (Avg.)", icon: UsersRound, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "lessonsConducted", label: "Lessons Conducted", icon: BookOpen, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "activeVolunteers", label: "Active Volunteers", icon: HandHeart, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "offeringsReceived", label: "Offerings Received", icon: Briefcase, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
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
              <p className="mt-1 truncate font-display text-xl font-bold text-ink">
                {card.isCurrency ? formatCurrency(card.value) : card.value}
              </p>
              <p className="mt-1 truncate text-xs font-medium text-success-600">↑ {card.delta} {card.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
