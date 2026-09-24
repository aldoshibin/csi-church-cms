"use client";

import Link from "next/link";

export function ClassesByTeacherCard({ teachers = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Classes by Teacher</h3>
      <div className="flex flex-col gap-3.5">
        {teachers.map((t) => (
          <div key={t.name} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {t.initials}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">{t.name}</span>
            <span className="shrink-0 text-sm text-ink-subtle">{t.classes} {t.classes === 1 ? "Class" : "Classes"}</span>
          </div>
        ))}
      </div>
      <Link href="/sunday-school/teachers" className="mt-3 inline-block text-sm font-medium text-interactive-500 hover:underline">
        View All
      </Link>
    </div>
  );
}
