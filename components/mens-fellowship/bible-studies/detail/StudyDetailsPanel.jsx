"use client";

import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { STUDY_STATUS_VARIANT } from "@/lib/mock/bibleStudiesMockData";
import { formatDate, formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function StudyDetailsPanel({ study }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
          <BookOpen className="h-6 w-6" />
        </span>
        <h3 className="text-base font-semibold text-ink">Study Details</h3>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Row label="Topic / Series" value={study.series} />
        <div>
          <p className="text-xs text-ink-subtle">Study Category</p>
          <div className="mt-1"><Badge variant="info">{study.category}</Badge></div>
        </div>
        <Row label="Teacher" value={study.teacher} />
        <Row label="Started On" value={formatDate(study.startedOn)} />
        <Row label="Day & Time" value={`${study.day} · ${study.timeRange}`} />
        <Row label="Expected End Date" value={formatDate(study.expectedEndDate)} />
        <Row label="Location" value={study.location} />
        <Row label="Total Participants" value={`${study.participants} / ${study.target}`} />
        <div>
          <p className="text-xs text-ink-subtle">Status</p>
          <div className="mt-1"><Badge variant={STUDY_STATUS_VARIANT[study.status] ?? "default"}>{study.status}</Badge></div>
        </div>
        <Row label="Created By" value={study.createdBy} />
        <Row label="Description" value={study.description} />
        <Row label="Created On" value={formatDateTime(study.createdOn)} />
        <div />
        <Row label="Last Updated" value={formatDateTime(study.lastUpdated)} />
      </div>
    </div>
  );
}
