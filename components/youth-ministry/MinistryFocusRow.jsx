"use client";

import { Cross, Heart, HandHeart, BookOpen } from "lucide-react";

const ICON_MAP = { cross: Cross, heart: Heart, hand: HandHeart, book: BookOpen };

export function MinistryFocusRow({ items = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Ministry Focus</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Cross;
          return (
            <div key={item.title} className="flex items-start gap-3 rounded-lg border border-border p-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${item.color}1A` }}>
                <Icon className="h-4 w-4" style={{ color: item.color }} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-ink-subtle">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
