"use client";

import Link from "next/link";
import { Link2, Hourglass, HandCoins, ArrowRight } from "lucide-react";

export function QuickStatCards({ stats }) {
  const cards = [
    { label: "Active Payment Links", value: stats.activePaymentLinks, icon: Link2, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", cta: "View Links", href: "/online-giving/payment-links" },
    { label: "Pending Transactions", value: stats.pendingTransactions, icon: Hourglass, iconBg: "bg-warning-50", iconColor: "text-warning-600", cta: "View Pending", href: "/online-giving/donations" },
    { label: "Pledges", value: stats.pledges, icon: HandCoins, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", cta: "View Pledges", href: "/online-giving/pledges" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <div key={card.label} className="rounded-lg border border-border bg-white p-4 shadow-card">
          <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.iconBg}`}>
            <card.icon className={`h-4 w-4 ${card.iconColor}`} />
          </span>
          <p className="mt-3 text-xs text-ink-subtle">{card.label}</p>
          <p className="mt-0.5 font-display text-2xl font-bold text-ink">{String(card.value).padStart(2, "0")}</p>
          <Link href={card.href} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
            {card.cta} <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      ))}
    </div>
  );
}
