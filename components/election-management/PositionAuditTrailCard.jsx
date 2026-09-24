"use client";

import { formatDate } from "@/lib/utils";

export function PositionAuditTrailCard({ auditTrail }) {
  if (!auditTrail?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Audit Trail</h3>
      <div className="mt-4 flex flex-col gap-4">
        {auditTrail.map((item) => (
          <div key={item.id} className="flex gap-3">
            <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
            <div>
              <p className="text-sm font-medium text-ink">{item.title}</p>
              <p className="text-xs text-ink-subtle">{item.byName}</p>
              <p className="text-xs text-ink-subtle">{formatDate(item.on, { hour: "numeric", minute: "2-digit" })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
