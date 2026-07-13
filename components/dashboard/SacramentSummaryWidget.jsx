"use client";

import { Droplets, Sparkle, Wheat, HeartHandshake, Cross } from "lucide-react";

const ICON_MAP = {
  baptism: Droplets,
  confirmation: Sparkle,
  communion: Wheat,
  marriage: HeartHandshake,
  funeral: Cross,
};

export function SacramentSummaryWidget({ items = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="text-sm font-semibold text-interactive-500">Sacrament Summary</h3>
      <p className="mb-3 text-xs text-ink-subtle">(This Year)</p>

      <ul className="space-y-3">
        {items.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Droplets;
          return (
            <li key={item.label} className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <span className="flex-1 text-sm text-ink">{item.label}</span>
              <span className="text-sm font-semibold text-ink">{item.count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
