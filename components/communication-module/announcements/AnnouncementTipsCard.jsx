"use client";

import { Lightbulb } from "lucide-react";

export function AnnouncementTipsCard({ tip = "Use clear titles and add relevant categories to help members easily find important announcements." }) {
  return (
    <div className="rounded-lg border border-success-50 bg-success-50/40 p-4">
      <div className="flex items-start gap-2.5">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
        <div>
          <h3 className="text-sm font-semibold text-ink">Tips</h3>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">{tip}</p>
        </div>
      </div>
    </div>
  );
}
