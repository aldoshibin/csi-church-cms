"use client";

import { User, ImagePlus, ImageOff, Clock } from "lucide-react";

export function PhotoStatCards({ mock }) {
  const cards = [
    { label: "Total Members", value: mock.cards.totalMembers.toLocaleString(), sublabel: "100% of total", icon: User },
    { label: "With Photo", value: mock.cards.withPhoto.value, sublabel: `${mock.cards.withPhoto.percent}% of total`, icon: ImagePlus },
    { label: "Without Photo", value: mock.cards.withoutPhoto.value, sublabel: `${mock.cards.withoutPhoto.percent}% of total`, icon: ImageOff },
    { label: "Recently Added", value: mock.cards.recentlyAdded, sublabel: "In last 30 days", icon: Clock },
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
