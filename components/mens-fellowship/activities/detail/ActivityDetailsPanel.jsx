"use client";

import { Badge } from "@/components/ui/Badge";
import { ACTIVITY_STATUS_VARIANT } from "@/lib/mock/activitiesMockData";
import { ACTIVITY_ICON_COMPONENTS } from "../activityIcons";
import { formatDate, formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function ActivityDetailsPanel({ activity }) {
  const Icon = ACTIVITY_ICON_COMPONENTS["heart-hands"];
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="text-base font-semibold text-ink">Activity Details</h3>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Row label="Activity Type" value={activity.type} />
        <Row label="Organized By" value={activity.organizedBy} />
        <Row label="Date" value={activity.date ? `${formatDate(activity.date)}${activity.day ? ` (${activity.day})` : ""}` : "—"} />
        <Row label="Description" value={activity.description} />
        <Row label="Time" value={activity.timeRange} />
        <Row label="Created By" value={activity.createdBy} />
        <Row label="Location" value={activity.location} />
        <Row label="Created On" value={formatDateTime(activity.createdOn)} />
        <div>
          <p className="text-xs text-ink-subtle">Status</p>
          <div className="mt-1"><Badge variant={ACTIVITY_STATUS_VARIANT[activity.status] ?? "default"}>{activity.status}</Badge></div>
        </div>
        <Row label="Last Updated" value={formatDateTime(activity.lastUpdated)} />
      </div>
    </div>
  );
}
