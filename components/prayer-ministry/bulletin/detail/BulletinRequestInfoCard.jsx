"use client";

import { FileText, Download } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BULLETIN_TYPE_BADGE } from "@/lib/mock/bulletinRequestsMockData";
import { formatDate } from "@/lib/utils";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}

export function BulletinRequestInfoCard({ request }) {
  const typeStyle = BULLETIN_TYPE_BADGE[request.requestType] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Request Information</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Field label="Title">{request.title}</Field>
        <Field label="Description">{request.description}</Field>

        <Field label="Request Type"><span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${typeStyle.bg} ${typeStyle.color}`}>{request.requestType}</span></Field>
        <Field label="Prayer Area / Focus"><Badge variant="info">{request.prayerAreaFocus}</Badge></Field>

        <Field label="Submitted By">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {request.submittedBy.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{request.submittedBy}</p>
              <p className="text-xs text-ink-subtle">Member ID: {request.memberId}</p>
            </div>
          </div>
        </Field>
        <Field label="Submission Date">{formatDate(request.submissionDate)} {request.submissionTime}</Field>

        <Field label="Publish Date">{formatDate(request.publishDate)}</Field>
        <Field label="Preferred Bulletin Date">{formatDate(request.preferredBulletinDate)}</Field>
      </div>

      {request.attachments?.length > 0 && (
        <div className="mt-5 border-t border-border pt-5">
          <p className="mb-2 text-xs text-ink-subtle">Attachments</p>
          <div className="flex flex-col gap-2">
            {request.attachments.map((file, i) => (
              <div key={i} className="flex max-w-sm items-center gap-3 rounded-lg border border-border px-3 py-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-danger-50 text-danger-500">
                  <FileText className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{file.name}</p>
                  <p className="text-xs text-ink-subtle">{file.size}</p>
                </div>
                <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${file.name}`}>
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
