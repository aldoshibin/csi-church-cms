"use client";

import { CircleCheck } from "lucide-react";
import { formatDate } from "@/lib/utils";

function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}

export function LessonOverviewTab({ lesson }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Lesson Information</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <InfoRow label="Topic" value={lesson.topic} />
        <InfoRow label="Lesson Type" value={lesson.lessonType} />
        <InfoRow label="Class" value={lesson.class} />
        <InfoRow label="Bible Passage" value={lesson.biblePassage} />
        <InfoRow label="Teacher" value={lesson.teacher} />
        <InfoRow label="Memory Verse" value={<span className="italic">{lesson.memoryVerse}</span>} />
        <InfoRow label="Date" value={formatDate(lesson.date)} />
        <InfoRow
          label="Main Objective"
          value={lesson.mainObjective}
        />
        <InfoRow label="Duration" value={lesson.duration} />
        <InfoRow
          label="Keywords"
          value={
            <div className="mt-1 flex flex-wrap gap-1.5">
              {lesson.keywords.map((k) => (
                <span key={k} className="rounded-full bg-interactive-50 px-2.5 py-0.5 text-xs font-medium text-interactive-600">{k}</span>
              ))}
            </div>
          }
        />
        <InfoRow label="Status" value={<span className="rounded-sm bg-success-50 px-2.5 py-1 text-xs font-medium text-success-600">{lesson.status2}</span>} />
        <InfoRow
          label="Tags"
          value={
            <div className="mt-1 flex flex-wrap gap-1.5">
              {lesson.tags.map((t) => (
                <span key={t} className="rounded-full bg-[#F3E8FF] px-2.5 py-0.5 text-xs font-medium text-[#7C3AED]">{t}</span>
              ))}
            </div>
          }
        />
        <InfoRow label="Visibility" value={lesson.visibility} />
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-2 text-base font-semibold text-ink">Description</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{lesson.description}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 border-t border-border pt-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 text-base font-semibold text-ink">Learning Objectives</h3>
          <ul className="flex flex-col gap-2.5">
            {lesson.learningObjectives.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-success-500" /> {o}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-base font-semibold text-ink">Materials Needed</h3>
          <ul className="flex flex-col gap-2.5">
            {lesson.materialsNeeded.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-subtle" /> {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
