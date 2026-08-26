"use client";

import { CircleDollarSign, Wallet, ClipboardCheck, Clock } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function IncomeStatsCards({ stats }) {
  const cards = [
    { label: "Total Income (This Month)", value: stats.totalIncomeThisMonth, sub: "This Month", icon: CircleDollarSign, iconBg: "bg-success-50", iconColor: "text-success-600", subColor: "text-success-600" },
    { label: "Total Income (This Year)", value: stats.totalIncomeThisYear, sub: "This Year", icon: Wallet, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", subColor: "text-interactive-600" },
    { label: "Total Received", value: stats.totalReceived, sub: "This Year", icon: ClipboardCheck, iconBg: "bg-warning-50", iconColor: "text-warning-600", subColor: "text-warning-600" },
    { label: "Total Pending", value: stats.totalPending, sub: "This Year", icon: Clock, iconBg: "bg-danger-50", iconColor: "text-danger-600", subColor: "text-danger-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ label, value, sub, icon: Icon, iconBg, iconColor, subColor }) => (
        <div key={label} className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
            <Icon className={`h-[18px] w-[18px] ${iconColor}`} />
          </div>
          <p className="mt-3 text-xs text-ink-subtle">{label}</p>
          <p className="mt-1 font-display text-2xl font-bold text-ink">{formatCurrency(value)}</p>
          <p className={`mt-1 text-xs font-medium ${subColor}`}>{sub}</p>
        </div>
      ))}
    </div>
  );
}
