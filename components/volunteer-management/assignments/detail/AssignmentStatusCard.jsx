"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDateTime } from "@/lib/utils";
import { ASSIGNMENT_STATUS_VARIANT } from "@/lib/mock/serviceAssignmentsMockData";

export function AssignmentStatusCard({ assignment }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Assignment Status</h3>
        <Badge variant={ASSIGNMENT_STATUS_VARIANT[assignment.status] ?? "default"}>{assignment.status}</Badge>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <div>
          <p className="text-xs text-ink-subtle">Created By</p>
          <p className="font-medium text-ink">{assignment.createdBy}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Created On</p>
          <p className="font-medium text-ink">{formatDateTime(assignment.createdOn)}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Last Updated</p>
          <p className="font-medium text-ink">{formatDateTime(assignment.lastUpdated)} by {assignment.lastUpdatedBy}</p>
        </div>
      </div>
    </div>
  );
}
