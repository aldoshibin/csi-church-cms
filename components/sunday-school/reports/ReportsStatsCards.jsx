"use client";

import { Users, UserPlus, Home, Droplet, DollarSign, Calendar } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function ReportsStatsCards({ stats }) {
  const cards = [
    { key: "totalMembers", label: "Total Members", icon: Users, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "newMembers", label: "New Members", icon: UserPlus, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "totalFamilies", label: "Total Families", icon: Home, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "baptismsThisYear", label: "Baptisms This Year", icon: Droplet, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "totalGivingThisMonth", label: "Total Giving (This Month)", icon: DollarSign, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
    { key: "totalEvents", label: "Total Events", icon: Calendar, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
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
                {card.isCurrency ? formatCurrency(card.value) : card.value}
              </p>
              <p className={`mt-1 text-xs font-medium ${card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                {card.trendUp ? "↑" : "↓"} {card.delta} {card.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
