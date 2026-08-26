"use client";

import Link from "next/link";
import { DollarSign, TrendingDown, Wallet, Landmark } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const CARD_META = [
  { key: "totalIncome", label: "Total Income", icon: DollarSign, iconBg: "bg-success-50", iconColor: "text-success-600" },
  { key: "totalExpenses", label: "Total Expenses", icon: TrendingDown, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
  { key: "netBalance", label: "Net Balance", icon: Wallet, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  { key: "bankBalance", label: "Bank Balance", icon: Landmark, iconBg: "bg-accent-50", iconColor: "text-accent-600" },
];

export function FinanceSummaryCards({ cards }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {CARD_META.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
        const card = cards?.[key];
        if (!card) return null;
        return (
          <div key={key} className="rounded-lg border border-border bg-white p-4 shadow-card">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
              <Icon className={`h-[18px] w-[18px] ${iconColor}`} />
            </div>
            <p className="mt-3 text-xs text-ink-subtle">{label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">{formatCurrency(card.value)}</p>
            {card.sub && <p className="mt-1 text-xs text-ink-subtle">{card.sub}</p>}

            {card.delta && (
              <div className="mt-2 flex items-center gap-1.5">
                <span className={`rounded px-1.5 py-0.5 text-[11px] font-semibold ${card.trendUp ? "bg-success-50 text-success-600" : "bg-danger-50 text-danger-600"}`}>
                  {card.trendUp ? "↑" : "↓"} {card.delta}
                </span>
                <span className="text-[11px] text-ink-subtle">vs Last Month</span>
              </div>
            )}

            {card.href && (
              <Link href={card.href} className="mt-2 inline-block text-xs font-medium text-interactive-500 hover:underline">
                View Accounts
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
