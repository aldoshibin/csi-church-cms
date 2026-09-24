"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{children}</p>
    </div>
  );
}

export function RequestSummaryCard({ request }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Request Summary</h3>
      <div className="flex flex-col gap-3.5">
        <Field label="Request ID">{request.id}</Field>
        <Field label="Priority"><Badge variant="default">{request.priority}</Badge></Field>
        <Field label="Audience">{request.audience}</Field>
        <Field label="Estimated Reach">{request.estimatedReach ?? "—"}</Field>
        <Field label="Language">{request.language}</Field>
      </div>
    </div>
  );
}

export function RequestVisibilityCard({ request }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Visibility</h3>
      <div className="flex flex-col gap-3.5">
        <Field label="Visible to">{request.visibleTo}</Field>
        <Field label="Display In Bulletin">{formatDate(request.displayInBulletinDate)}</Field>
      </div>
    </div>
  );
}
