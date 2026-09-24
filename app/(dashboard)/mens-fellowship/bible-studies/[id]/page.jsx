"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, MoreHorizontal } from "lucide-react";

import { useBibleStudyDetail } from "@/hooks/useBibleStudyDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { STUDY_STATUS_VARIANT } from "@/lib/mock/bibleStudiesMockData";
import { StudyDetailTabs } from "@/components/mens-fellowship/bible-studies/detail/StudyDetailTabs";
import { StudyDetailsPanel } from "@/components/mens-fellowship/bible-studies/detail/StudyDetailsPanel";
import { AboutStudyCard, StudyGoalsCard } from "@/components/mens-fellowship/bible-studies/detail/StudyAboutGoalsCards";
import { StudyAttachmentsCard } from "@/components/mens-fellowship/bible-studies/detail/StudyAttachmentsCard";
import { StudyTabPlaceholder } from "@/components/mens-fellowship/bible-studies/detail/StudyTabPlaceholder";
import { StudyOverviewCard } from "@/components/mens-fellowship/bible-studies/StudyOverviewCard";
import { UpcomingSessionsCard } from "@/components/mens-fellowship/bible-studies/UpcomingSessionsCard";
import { StudyDetailQuickActions } from "@/components/mens-fellowship/bible-studies/detail/StudyDetailQuickActions";

export default function BibleStudyDetailPage() {
  const { id } = useParams();
  const { study } = useBibleStudyDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/bible-studies" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Bible Studies
          </Link>
          <div className="flex items-center gap-2.5">
            <h1 className="font-display text-2xl font-bold text-ink">{study.title}</h1>
            <Badge variant={STUDY_STATUS_VARIANT[study.status] ?? "default"}>{study.status}</Badge>
          </div>
          <p className="mt-1 text-sm text-ink-subtle">{study.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Study</Button>
          <Button type="button" variant="secondary" rightIcon={<MoreHorizontal className="h-4 w-4" />}>More Actions</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <StudyDetailTabs active={activeTab} onChange={setActiveTab} />

            <div className="mt-5">
              {activeTab === "Overview" && (
                <div className="flex flex-col gap-6">
                  <StudyDetailsPanel study={study} />
                  <div className="border-t border-border pt-5">
                    <AboutStudyCard about={study.about} />
                  </div>
                  <div className="border-t border-border pt-5">
                    <StudyGoalsCard goals={study.goals} />
                  </div>
                  <div className="border-t border-border pt-5">
                    <StudyAttachmentsCard attachments={study.attachments} />
                  </div>
                </div>
              )}
              {activeTab === "Sessions" && <StudyTabPlaceholder label="Sessions" />}
              {activeTab === "Participants" && <StudyTabPlaceholder label="Participants" />}
              {activeTab === "Notes" && <StudyTabPlaceholder label="Notes" />}
              {activeTab === "Attachments" && <StudyAttachmentsCard attachments={study.attachments} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <StudyOverviewCard overview={study.overview} />
          <UpcomingSessionsCard sessions={study.upcomingSessions} />
          <StudyDetailQuickActions />
        </div>
      </div>
    </div>
  );
}
