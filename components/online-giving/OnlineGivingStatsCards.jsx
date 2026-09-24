"use client";

import { Calendar, Activity, Users, RotateCw, Undo2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function OnlineGivingStatsCards({ stats }) {
  const cards = [
    { key: "totalDonations", label: "Total Donations", icon: Calendar, iconBg: "bg-success-50", iconColor: "text-success-600", isCurrency: true },
    { key: "successfulTransactions", label: "Successful Transactions", icon: Activity, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "uniqueDonors", label: "Unique Donors", icon: Users, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "recurringDonations", label: "Recurring Donations", icon: RotateCw, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "refundsThisPeriod", label: "Refunds (This Period)", icon: Undo2, iconBg: "bg-[#CCFBF1]", iconColor: "text-[#0D9488]", isCurrency: true },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map(({ key, label, icon: Icon, iconBg, iconColor, isCurrency }) => {
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
                {isCurrency ? formatCurrency(card.value) : card.value}
              </p>
              <p className={`mt-1 text-xs font-medium ${card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                {card.trendUp ? "↑" : "↓"} {card.delta} vs last period
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
