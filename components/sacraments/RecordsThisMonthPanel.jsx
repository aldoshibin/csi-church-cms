"use client";

import { Church, Wine, Bird, Heart, HeartHandshake, ArrowRight } from "lucide-react";

const ICONS = { church: Church, wine: Wine, dove: Bird, rings: Heart, "heart-hands": HeartHandshake };

export function RecordsThisMonthPanel({ items, onViewMonthlyReport }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-interactive-500">Records This Month</h3>
      <ul className="flex-1 space-y-3">
        {items.map((item) => {
          const Icon = ICONS[item.icon] ?? Church;
          return (
            <li key={item.key} className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                <Icon className="h-4 w-4" />
              </div>
              <span className="flex-1 text-sm text-ink">{item.label}</span>
              <span className="text-sm font-semibold text-ink">{item.count}</span>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={onViewMonthlyReport} className="mt-3 flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
        View monthly report <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}
