"use client";

import { Badge } from "@/components/ui/Badge";
import { PRAISE_STATUS_VARIANT, PRAISE_CATEGORY_BADGE } from "@/lib/mock/praiseReportsMockData";
import { formatDate } from "@/lib/utils";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}

export function PraiseReportInfoGrid({ report }) {
  const categoryStyle = PRAISE_CATEGORY_BADGE[report.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-ink">Report Information</h4>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <Field label="Shared By">
          {report.sharedBy}
          <p className="mt-0.5 text-xs font-normal text-ink-subtle">{report.sharedByRole}</p>
        </Field>
        <Field label="Status"><Badge variant={PRAISE_STATUS_VARIANT[report.status] ?? "default"}>{report.status}</Badge></Field>

        <Field label="Category"><span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${categoryStyle.bg} ${categoryStyle.color}`}>{report.category}</span></Field>
        <Field label="Visibility">{report.visibility}</Field>

        <Field label="Date Shared">{formatDate(report.dateSharedOn)} - {report.dateSharedTime}</Field>
        <Field label="Last Updated">{formatDate(report.lastUpdatedOn)} - {report.lastUpdatedTime}</Field>
      </div>
    </div>
  );
}
