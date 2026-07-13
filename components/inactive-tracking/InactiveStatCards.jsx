"use client";

import { Users, UserX } from "lucide-react";

export function InactiveStatCards({ mock }) {
  const cards = [
    { label: "Total Inactive Members", value: mock.cards.totalInactive, sublabel: "Members not active", icon: Users, tone: "bg-brand-700" },
    { label: "Inactive (3 - 6 Months)", value: mock.cards.inactive3to6.value, sublabel: `${mock.cards.inactive3to6.percent}% of total`, icon: Users, tone: "bg-success-600" },
    { label: "Inactive (6 - 12 Months)", value: mock.cards.inactive6to12.value, sublabel: `${mock.cards.inactive6to12.percent}% of total`, icon: Users, tone: "bg-success-600" },
    { label: "Inactive (More than 12 Months)", value: mock.cards.inactiveOver12.value, sublabel: `${mock.cards.inactiveOver12.percent}% of total`, icon: UserX, tone: "bg-brand-700" },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="flex items-start gap-3">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${card.tone}`}>
              <card.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-ink-subtle">{card.label}</p>
              <p className="mt-0.5 text-xl font-bold text-ink font-display">{card.value}</p>
              <p className="text-xs text-ink-subtle">{card.sublabel}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
