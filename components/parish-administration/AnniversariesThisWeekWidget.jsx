"use client";

import { Heart } from "lucide-react";
import { FaPeopleArrows } from "react-icons/fa";

export function AnniversariesThisWeekWidget({ couples = [] }) {
  return (
    // <div className="rounded-lg border border-border bg-white p-4 shadow-card">
    <div>
      <ul className="space-y-3">
        {couples.map((couple) => (
          <li key={couple.id} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff2e4] text-[#f58220]">
              <FaPeopleArrows className="h-4 w-4" />
            </div>
            <span className="flex-1 truncate text-sm text-ink">{couple.names}</span>
            <span className="text-xs text-ink-subtle">{couple.date}</span>
          </li>
        ))}
      </ul>

      <a href="/members?sort=anniversary" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        See all anniversaries →
      </a>
    </div>
  );
}
