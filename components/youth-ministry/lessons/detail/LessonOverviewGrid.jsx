"use client";

import { FileText } from "lucide-react";

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function LessonOverviewGrid({ lesson }) {
  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Lesson Overview
      </h3>
      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        <div className="flex flex-col divide-y divide-surface-muted">
          <InfoRow label="Lesson Title" value={lesson.title} />
          <InfoRow label="Bible Reference" value={lesson.bibleRef} />
          <InfoRow label="Category" value={lesson.category} />
          <InfoRow label="Target Group" value={lesson.targetGroup} />
          <InfoRow label="Duration" value={lesson.duration} />
          <InfoRow label="Level" value={lesson.level} />
        </div>
        <div className="flex flex-col divide-y divide-surface-muted">
          <InfoRow label="Main Theme" value={lesson.mainTheme} />
          <InfoRow label="Key Verse" value={lesson.keyVerse} />
          <InfoRow label="Sub Themes" value={lesson.subThemes} />
          <InfoRow label="Tags" value={lesson.tags} />
          <InfoRow label="Language" value={lesson.language} />
          <InfoRow label="Class Size (Expected)" value={lesson.classSize} />
        </div>
      </div>
    </div>
  );
}
