"use client";

import { History } from "lucide-react";
import { formatDateTime } from "@/lib/utils";

export function TimelineActivityLogCard({ timeline }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <History className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Timeline / Activity Log</h3>
      </div>
      <div className="mt-4 flex flex-col">
        {timeline.map((item, i) => (
          <div key={item.event} className="relative flex gap-3 pb-4 last:pb-0">
            {i < timeline.length - 1 && <span className="absolute left-[7px] top-4 h-full w-px bg-border" />}
            <span className="relative z-10 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success-500 text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{item.event}</p>
              <p className="text-xs text-ink-subtle">
                {formatDateTime(item.date)} &middot; By <span className="italic">{item.by}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
