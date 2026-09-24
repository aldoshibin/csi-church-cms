"use client";

import { Users, UserPlus, UsersRound, DollarSign, Calendar, Cross } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function WfReportsStatsCards({ stats }) {
  const cards = [
    { key: "totalMembers", label: "Total Members", icon: Users, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "newMembers", label: "New Members", icon: UserPlus, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "totalAttendance", label: "Total Attendance", icon: UsersRound, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "totalOfferings", label: "Total Offerings", icon: DollarSign, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "eventsConducted", label: "Events Conducted", icon: Calendar, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
    { key: "activeMinistries", label: "Active Ministries", icon: Cross, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
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
              <p className="mt-1 truncate font-display text-xl font-bold text-ink">
                {card.isCurrency ? formatCurrency(card.value) : card.value.toLocaleString?.("en-IN") ?? card.value}
              </p>
              <p className="mt-1 text-xs font-medium text-success-600">↑ {card.delta} vs last 30 days</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
