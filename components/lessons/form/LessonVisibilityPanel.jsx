"use client";

import { LESSON_VISIBILITY_OPTIONS } from "@/lib/mock/lessonsMockData";

export function LessonVisibilityPanel({ value, onChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Lesson Visibility</h3>
      <div className="flex flex-col gap-2.5">
        {LESSON_VISIBILITY_OPTIONS.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" name="lesson-visibility" className="h-4 w-4 accent-interactive-500" checked={value === option} onChange={() => onChange(option)} />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
