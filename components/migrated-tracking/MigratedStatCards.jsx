"use client";

import { Users, UserCheck, Calendar, UserCircle2 } from "lucide-react";

export function MigratedStatCards({ mock }) {
  const cards = [
    { label: "Total Migrated Members", value: mock.cards.totalMigrated, sublabel: "Total migrated out", icon: Users },
    { label: "This Month", value: mock.cards.thisMonth, sublabel: "Migrated this month", icon: UserCheck },
    { label: "This Year", value: mock.cards.thisYear, sublabel: "Migrated this year", icon: Calendar },
    { label: "Awaiting Confirmation", value: mock.cards.awaitingConfirmation, sublabel: "From receiving church", icon: UserCircle2 },
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
