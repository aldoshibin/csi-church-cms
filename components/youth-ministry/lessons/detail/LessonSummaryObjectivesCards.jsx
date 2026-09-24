"use client";

import { FileText, Target } from "lucide-react";

export function LessonSummaryCard({ summary }) {
  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Lesson Summary
      </h3>
      <p className="text-sm leading-relaxed text-ink-muted">{summary}</p>
    </div>
  );
}

export function KeyLearningObjectivesCard({ objectives = [] }) {
  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Target className="h-4 w-4" /> Key Learning Objectives
      </h3>
      <ul className="flex flex-col gap-3">
        {objectives.map((o, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-xs font-semibold text-[#7C3AED]">{i + 1}</span>
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}
