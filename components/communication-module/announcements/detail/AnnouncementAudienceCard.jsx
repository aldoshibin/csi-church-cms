"use client";

import { Users2 } from "lucide-react";

export function AnnouncementAudienceCard({ announcement }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Users2 className="h-4 w-4 text-ink-subtle" />
        <h3 className="text-base font-semibold text-ink">Audience</h3>
      </div>
      <p className="mt-3 text-sm font-medium text-ink">{announcement.audience}</p>
      <p className="mt-1 text-sm text-ink-subtle">{announcement.audienceDescription}</p>
    </div>
  );
}
