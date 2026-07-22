"use client";

import { Eye, MoreVertical } from "lucide-react";
import { Badge, STATUS_VARIANT_MAP } from "@/components/ui/Badge";
import { MemberAvatar } from "@/components/members/MemberAvatar";

export function MemberCardGrid({ members, onView, onRowActions }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((row) => (
        <div key={row.id} className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center gap-3">
            <MemberAvatar photo={row.photo} fullName={row.full_name} />
            <div className="min-w-0">
              <p className="truncate font-semibold text-ink">{row.full_name}</p>
              <p className="truncate text-xs text-ink-subtle">{row.email || "—"}</p>
            </div>
          </div>

          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-ink-subtle">ID</dt>
              <dd className="font-medium text-ink">{row.membership_number || "—"}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-subtle">Type</dt>
              <dd><Badge variant="info">{row.member_type || "Individual"}</Badge></dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-subtle">Branch</dt>
              <dd className="font-medium text-ink">{row.church_name || "—"}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-subtle">Status</dt>
              <dd>
                <Badge variant={STATUS_VARIANT_MAP[row.membership_status] || "default"}>
                  {row.membership_status?.replace(/_/g, " ") || "Active"}
                </Badge>
              </dd>
            </div>
          </dl>

          <div className="mt-3 flex items-center gap-1.5 border-t border-border pt-3">
            <button
              onClick={() => onView(row)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
              aria-label={`View ${row.full_name}`}
            >
              <Eye className="h-4 w-4" />
            </button>
            <button
              onClick={() => onRowActions(row)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted"
              aria-label="Row actions"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
