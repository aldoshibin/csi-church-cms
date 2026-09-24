"use client";

import { Badge } from "@/components/ui/Badge";
import { MESSAGE_STATUS_VARIANT } from "@/lib/mock/vmMessagesMockData";

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

export function MessageDetailsSidebarCard({ message }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Message Details</h3>
      <div className="flex flex-col gap-3">
        <Row label="Message ID">{message.id}</Row>
        <Row label="Status"><Badge variant={MESSAGE_STATUS_VARIANT[message.status] ?? "default"}>{message.status}</Badge></Row>
        <Row label="Priority">{message.priority}</Row>
        <Row label="Sent On">{fmt(message.sentOn)}</Row>
        <Row label="Created On">{fmt(message.createdOn)}</Row>
        <Row label="Created By">{message.createdBy}</Row>
        <Row label="Channel">{message.channel}</Row>
        <Row label="Allow Replies">{message.allowReplies ? "Yes" : "No"}</Row>
      </div>
    </div>
  );
}
