"use client";

import { Badge } from "@/components/ui/Badge";
import { RELATED_SETLIST_STATUS_VARIANT } from "@/lib/mock/songsMockData";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

export function SongUsageSummaryCard({ usage }) {
  if (!usage) return null;
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Usage Summary</h4>
      <div className="flex flex-col gap-3">
        <Row label="Used in Services" value={usage.usedInServices} />
        <Row label="Used in Setlists" value={usage.usedInSetlists} />
        <div>
          <p className="text-xs text-ink-subtle">Last Used</p>
          <p className="text-sm font-medium text-ink">{formatDate(usage.lastUsedOn)}</p>
          <p className="text-xs text-ink-subtle">{usage.lastUsedService}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Upcoming Use</p>
          <p className="text-sm font-medium text-ink">{formatDate(usage.upcomingUseOn)}</p>
          <p className="text-xs text-ink-subtle">{usage.upcomingUseService}</p>
        </div>
      </div>
    </div>
  );
}

export function RelatedSetlistsCard({ setlists = [] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">Related Setlists</h4>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        {setlists.map((s, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{s.name}</p>
              <p className="text-xs text-ink-subtle">{formatDate(s.date)}</p>
            </div>
            <Badge variant={RELATED_SETLIST_STATUS_VARIANT[s.status] ?? "default"}>{s.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
