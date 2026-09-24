"use client";

import { Calendar, FileText, FileImage, FileSpreadsheet, Presentation, Download } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function LessonScheduleCard({ schedule }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Calendar className="h-4 w-4" /> Schedule &amp; Availability
      </h3>
      <div className="flex flex-col divide-y divide-surface-muted">
        <Row label="Lesson Date" value={formatDate(schedule.lessonDate)} />
        <Row label="Start Time" value={schedule.startTime} />
        <Row label="End Time" value={schedule.endTime} />
        <Row label="Recurrence" value={schedule.recurrence} />
        <Row label="Next Occurrence" value={formatDate(schedule.nextOccurrence)} />
        <Row label="Location / Room" value={schedule.locationRoom} />
        <Row label="Teacher / Leader" value={schedule.teacherLeader} />
      </div>
    </div>
  );
}

const FILE_ICON = { pdf: FileText, docx: FileSpreadsheet, pptx: Presentation, default: FileImage };
const FILE_COLOR = { pdf: "text-danger-500", docx: "text-interactive-600", pptx: "text-warning-600", default: "text-ink-subtle" };

export function AttachedMaterialsCard({ materials = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Attached Materials
      </h3>
      <div className="flex flex-col gap-3">
        {materials.map((m) => {
          const Icon = FILE_ICON[m.type] ?? FILE_ICON.default;
          const color = FILE_COLOR[m.type] ?? FILE_COLOR.default;
          return (
            <div key={m.name} className="flex items-center gap-3">
              <Icon className={`h-5 w-5 shrink-0 ${color}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{m.name}</p>
                <p className="text-xs text-ink-subtle">{m.size}</p>
              </div>
              <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${m.name}`}>
                <Download className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
