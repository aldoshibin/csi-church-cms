"use client";

import { Users, Landmark, Music, Sparkles, HandHeart } from "lucide-react";
import { FaUsers } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
const ICON_MAP = {
  "Parish Council": FaUsers,
  "Finance Committee": Landmark,
  "Worship Committee": Music,
  "Youth Committee": FaChild,
  "Outreach Committee": FaHandshakeAngle,
};

export function CommitteeActivityWidget({ committees = [] }) {
  return (
    // <div className="rounded-lg border border-border bg-white p-4 shadow-card">
    <div>
      <ul className="space-y-3.5">
        {committees.map((committee) => {
          const Icon = ICON_MAP[committee.name] ?? Users;
          const percent = Math.round((committee.filled / committee.capacity) * 100);
          return (
            <li key={committee.id} className="flex items-center gap-3">
               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DFF7F1] text-[#00897b]">
              <Icon className="h-4 w-4 shrink-0 text-interactive-500" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="truncate text-sm text-ink">{committee.name}</span>
                  <span className="shrink-0 text-xs font-medium text-ink-subtle">
                    {committee.filled} / {committee.capacity}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-surface-muted">
                  <div className="h-1.5 rounded-full bg-interactive-500" style={{ width: `${percent}%` }} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <a href="/committees" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        See full overview →
      </a>
    </div>
  );
}
