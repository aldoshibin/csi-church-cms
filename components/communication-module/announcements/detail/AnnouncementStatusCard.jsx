"use client";

import { Badge } from "@/components/ui/Badge";
import { ANNOUNCEMENT_STATUS_VARIANT } from "@/lib/mock/vmAnnouncementsMockData";

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children}</span>
    </div>
  );
}

function fmt(dt) {
  return new Date(dt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
}

export function AnnouncementStatusCard({ announcement }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Announcement Status</h3>
      <div className="flex flex-col gap-3">
        <Row label="Status"><Badge variant={ANNOUNCEMENT_STATUS_VARIANT[announcement.status] ?? "default"}>{announcement.status}</Badge></Row>
        <Row label="Current Status Since">{fmt(announcement.currentStatusSince)}</Row>
        <Row label="Created On">{fmt(announcement.createdOn)}</Row>
        <Row label="Last Updated">{fmt(announcement.lastUpdated)}</Row>
        <Row label="Created By">{announcement.createdBy}</Row>
        <Row label="Updated By">{announcement.updatedBy}</Row>
      </div>
    </div>
  );
}
