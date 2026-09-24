"use client";

import { RotateCcw, Hourglass, CheckCircle2, XCircle, IndianRupee } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function RefundsStatsCards({ stats }) {
  const cards = [
    { key: "totalRefunds", label: "Total Refunds", icon: RotateCcw, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "pendingRefunds", label: "Pending Refunds", icon: Hourglass, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "completedRefunds", label: "Completed Refunds", icon: CheckCircle2, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "failedRefunds", label: "Failed Refunds", icon: XCircle, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
    { key: "totalRefundedAmount", label: "Total Refunded Amount", icon: IndianRupee, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", isCurrency: true },
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
