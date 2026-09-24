"use client";

import { Cross, Calendar, User, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { LSN_STATUS_VARIANT } from "@/lib/mock/ymLessonsMockData";
import { formatDate } from "@/lib/utils";

export function LessonHeaderCard({ lesson }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F3E8FF]">
            <Cross className="h-7 w-7 text-[#7C3AED]" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-ink">{lesson.title}</h2>
              <Badge variant={LSN_STATUS_VARIANT[lesson.status] ?? "default"}>{lesson.status}</Badge>
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
              <BookOpen className="h-3.5 w-3.5" /> {lesson.category} · {lesson.targetGroup}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">{lesson.bibleRef}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
              <Calendar className="h-3.5 w-3.5" /> {formatDate(lesson.date)} ({lesson.time})
              <span className="mx-1 text-ink-subtle">|</span>
              <User className="h-3.5 w-3.5" /> Created by {lesson.createdBy}
            </p>
          </div>
        </div>

        <div className="min-w-[200px]">
          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Lesson ID</span><span className="font-medium text-ink">{lesson.id}</span></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Status</span><Badge variant={LSN_STATUS_VARIANT[lesson.status] ?? "default"}>{lesson.status}</Badge></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Target Group</span><span className="font-medium text-ink">{lesson.targetGroup}</span></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Category</span><span className="font-medium text-ink">{lesson.category}</span></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Created On</span><span className="font-medium text-ink">{formatDate(lesson.createdOn)}</span></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Last Updated</span><span className="font-medium text-ink">{formatDate(lesson.lastUpdated)} by {lesson.lastUpdatedBy}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
