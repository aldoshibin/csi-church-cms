"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDateTime } from "@/lib/utils";
import { BURIAL_STATUS_VARIANT } from "@/lib/mock/vmCemeteryMockData";

export function BurialStatusSidebarCard({ status, createdOn, updatedOn }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="h-2 w-2 rounded-full bg-success-500" /> Burial Status
        </h3>
        <Badge variant={BURIAL_STATUS_VARIANT[status] ?? "default"}>{status}</Badge>
      </div>
      <div className="mt-4 flex flex-col gap-3 text-sm">
        <div>
          <p className="text-xs text-ink-subtle">Record Created On</p>
          <p className="mt-0.5 font-medium text-ink">{formatDateTime(createdOn)}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Last Updated</p>
          <p className="mt-0.5 font-medium text-ink">{formatDateTime(updatedOn)}</p>
        </div>
      </div>
    </div>
  );
}
