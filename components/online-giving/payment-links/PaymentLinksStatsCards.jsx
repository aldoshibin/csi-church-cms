"use client";

import { Link2, Zap, Clock, IndianRupee, TrendingUp } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function PaymentLinksStatsCards({ stats }) {
  const cards = [
    { key: "totalPaymentLinks", label: "Total Payment Links", icon: Link2, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "activeLinks", label: "Active Links", icon: Zap, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "totalClicks", label: "Total Clicks", icon: Clock, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "totalAmountRaised", label: "Total Amount Raised", icon: IndianRupee, iconBg: "bg-warning-50", iconColor: "text-warning-600", isCurrency: true },
    { key: "conversionRate", label: "Conversion Rate", icon: TrendingUp, iconBg: "bg-[#CCFBF1]", iconColor: "text-[#0D9488]", isPercent: true },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map(({ key, label, icon: Icon, iconBg, iconColor, isCurrency, isPercent }) => {
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
                {isCurrency ? formatCurrency(card.value) : isPercent ? `${card.value}%` : card.value}
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
