"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, MoreHorizontal, BookOpen } from "lucide-react";

import { useLessonDetail } from "@/hooks/useLessonDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LESSON_STATUS_VARIANT } from "@/lib/mock/lessonsMockData";
import { LessonDetailsTabs } from "@/components/sunday-school/lessons/detail/LessonDetailsTabs";
import { LessonOverviewTab } from "@/components/sunday-school/lessons/detail/LessonOverviewTab";
import { LessonTabPlaceholder } from "@/components/sunday-school/lessons/detail/LessonTabPlaceholder";
import { LessonThumbnailDisplayPanel } from "@/components/sunday-school/lessons/detail/LessonThumbnailDisplayPanel";
import { LessonStatisticsPanel } from "@/components/sunday-school/lessons/detail/LessonStatisticsPanel";
import { RelatedLessonsPanel } from "@/components/sunday-school/lessons/detail/RelatedLessonsPanel";
import { formatDate } from "@/lib/utils";

export default function LessonDetailsPage() {
  const { id } = useParams();
  const { lesson } = useLessonDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Lesson Details</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/sunday-school/lessons" className="hover:underline">Lessons</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Lesson Details</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sunday-school/lessons">
            <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Lessons</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Lesson</Button>
          <Button type="button" variant="secondary" leftIcon={<MoreHorizontal className="h-4 w-4" />}>Actions</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-start gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success-50">
                  <BookOpen className="h-5 w-5 text-success-600" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-ink">{lesson.title}</h2>
                  <div className="mt-1.5 flex items-center gap-2">
                    <Badge variant={LESSON_STATUS_VARIANT[lesson.status] ?? "default"}>{lesson.status}</Badge>
                    <Badge variant="info">{lesson.className}</Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-xs">
                <div>
                  <p className="text-ink-subtle">Lesson ID</p>
                  <p className="mt-0.5 font-medium text-ink">{lesson.id}</p>
                </div>
                <div>
                  <p className="text-ink-subtle">Created By</p>
                  <p className="mt-0.5 flex items-center gap-1.5 font-medium text-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-interactive-50 text-[9px] font-semibold text-interactive-600">{lesson.createdByInitials}</span>
                    {lesson.createdBy}
                  </p>
                </div>
                <div>
                  <p className="text-ink-subtle">Created On</p>
                  <p className="mt-0.5 font-medium text-ink">{formatDate(lesson.createdOn)}</p>
                </div>
                <div>
                  <p className="text-ink-subtle">Last Updated</p>
                  <p className="mt-0.5 font-medium text-ink">{formatDate(lesson.lastUpdated)}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <LessonDetailsTabs active={activeTab} onChange={setActiveTab} />
            </div>

            <div className="mt-5">
              {activeTab === "Overview" ? <LessonOverviewTab lesson={lesson} /> : <LessonTabPlaceholder label={activeTab} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <LessonThumbnailDisplayPanel />
          <LessonStatisticsPanel stats={lesson.stats} />
          <RelatedLessonsPanel lessons={lesson.relatedLessons} />
        </div>
      </div>
    </div>
  );
}
