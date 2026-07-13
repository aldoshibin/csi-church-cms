"use client";

import { User, Users, CalendarPlus } from "lucide-react";

export function WidowWidowerStatCards({ mock }) {
  const cards = [
    { label: "Total Widows", value: mock.cards.totalWidows.value, sublabel: `${mock.cards.totalWidows.percent}% of total`, icon: User },
    { label: "Total Widowers", value: mock.cards.totalWidowers.value, sublabel: `${mock.cards.totalWidowers.percent}% of total`, icon: User },
    { label: "Total Members", value: mock.cards.totalMembers, sublabel: "Registered in registry", icon: Users },
    { label: "Added This Year", value: mock.cards.addedThisYear, sublabel: "Newly added", icon: CalendarPlus },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
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
