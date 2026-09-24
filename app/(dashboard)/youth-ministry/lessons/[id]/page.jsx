"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, Share2, Download, Printer } from "lucide-react";

import { useYmLessonDetail } from "@/hooks/useYmLessonDetail";
import { Button } from "@/components/ui/Button";
import { LessonHeaderCard } from "@/components/youth-ministry/lessons/detail/LessonHeaderCard";
import { LessonDetailsTabs, LessonTabPlaceholder } from "@/components/youth-ministry/lessons/detail/LessonDetailsTabs";
import { LessonOverviewGrid } from "@/components/youth-ministry/lessons/detail/LessonOverviewGrid";
import { LessonSummaryCard, KeyLearningObjectivesCard } from "@/components/youth-ministry/lessons/detail/LessonSummaryObjectivesCards";
import { LessonScheduleCard, AttachedMaterialsCard } from "@/components/youth-ministry/lessons/detail/LessonScheduleMaterialsCards";

export default function YmLessonDetailsPage() {
  const { id } = useParams();
  const { lesson } = useYmLessonDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/lessons" className="hover:underline">Lessons</Link>
            <span className="text-ink-subtle">›</span>
            <span className="font-medium text-ink">Lesson Details</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Lesson Details</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage lesson information, content and schedules.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/lessons">
            <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Lessons</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Lesson</Button>
          <Button type="button" leftIcon={<Share2 className="h-4 w-4" />}>Share Lesson</Button>
        </div>
      </div>

      <LessonHeaderCard lesson={lesson} />

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <LessonDetailsTabs active={activeTab} onChange={setActiveTab} />
        <div className="mt-5">
          {activeTab === "Overview" ? (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="xl:col-span-2">
                  <LessonOverviewGrid lesson={lesson} />
                </div>
                <div className="flex flex-col gap-5">
                  <LessonScheduleCard schedule={lesson.schedule} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <LessonSummaryCard summary={lesson.summary} />
                <KeyLearningObjectivesCard objectives={lesson.learningObjectives} />
                <AttachedMaterialsCard materials={lesson.materials} />
              </div>
            </div>
          ) : (
            <LessonTabPlaceholder label={activeTab} />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download Lesson</Button>
        <Button type="button" leftIcon={<Printer className="h-4 w-4" />}>Print Lesson</Button>
      </div>
    </div>
  );
}
