"use client";

import { BookOpenCheck, ShieldCheck, ShieldOff, RefreshCcw } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ChartOfAccountsStatsCards({ stats }) {
  const activePct = stats.totalAccounts ? ((stats.activeAccounts / stats.totalAccounts) * 100).toFixed(1) : 0;
  const inactivePct = stats.totalAccounts ? ((stats.inactiveAccounts / stats.totalAccounts) * 100).toFixed(1) : 0;

  const cards = [
    { label: "Total Accounts", value: stats.totalAccounts, sub: "All Accounts", icon: BookOpenCheck, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { label: "Active Accounts", value: stats.activeAccounts, sub: `${activePct}% of total`, icon: ShieldCheck, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { label: "Inactive Accounts", value: stats.inactiveAccounts, sub: `${inactivePct}% of total`, icon: ShieldOff, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { label: "Last Updated", value: formatDate(stats.lastUpdated), sub: "Recent Activity", icon: RefreshCcw, iconBg: "bg-accent-50", iconColor: "text-accent-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ label, value, sub, icon: Icon, iconBg, iconColor }) => (
        <div key={label} className="flex items-center gap-4 rounded-lg border border-border bg-white p-4 shadow-card">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-ink-subtle">{label}</p>
            <p className="truncate font-display text-xl font-bold text-ink">{value}</p>
            <p className="text-xs text-ink-subtle">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
