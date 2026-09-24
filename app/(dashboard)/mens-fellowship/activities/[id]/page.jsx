"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, MoreHorizontal } from "lucide-react";

import { useActivityDetail } from "@/hooks/useActivityDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ACTIVITY_STATUS_VARIANT } from "@/lib/mock/activitiesMockData";
import { ActivityDetailTabs } from "@/components/mens-fellowship/activities/detail/ActivityDetailTabs";
import { ActivityDetailsPanel } from "@/components/mens-fellowship/activities/detail/ActivityDetailsPanel";
import { ActivityAgendaCard } from "@/components/mens-fellowship/activities/detail/ActivityAgendaCard";
import { ActivityNotesCard } from "@/components/mens-fellowship/activities/detail/ActivityNotesCard";
import { ActivityAttachmentsCard } from "@/components/mens-fellowship/activities/detail/ActivityAttachmentsCard";
import { ActivityParticipantsTab } from "@/components/mens-fellowship/activities/detail/ActivityParticipantsTab";
import { ActivityPhotosTab } from "@/components/mens-fellowship/activities/detail/ActivityPhotosTab";
import { ActivityRemindersTab } from "@/components/mens-fellowship/activities/detail/ActivityRemindersTab";
import { ActivitySummaryCard } from "@/components/mens-fellowship/activities/detail/ActivitySummaryCard";
import { ActivityLocationCard } from "@/components/mens-fellowship/activities/detail/ActivityLocationCard";
import { ActivityInformationCard } from "@/components/mens-fellowship/activities/detail/ActivityInformationCard";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const { activity } = useActivityDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/activities" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Activities
          </Link>
          <div className="flex items-center gap-2.5">
            <h1 className="font-display text-2xl font-bold text-ink">{activity.title}</h1>
            <Badge variant={ACTIVITY_STATUS_VARIANT[activity.status] ?? "default"}>{activity.status}</Badge>
          </div>
          <p className="mt-1 text-sm text-ink-subtle">{activity.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Pencil className="h-4 w-4" />}>Edit Activity</Button>
          <Button type="button" variant="secondary" rightIcon={<MoreHorizontal className="h-4 w-4" />}>More Actions</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <ActivityDetailTabs active={activeTab} onChange={setActiveTab} />

            <div className="mt-5">
              {activeTab === "Overview" && (
                <div className="flex flex-col gap-6">
                  <ActivityDetailsPanel activity={activity} />
                  <div className="grid grid-cols-1 gap-6 border-t border-border pt-5 sm:grid-cols-2">
                    <ActivityAgendaCard agenda={activity.agenda} />
                    <ActivityNotesCard notes={activity.notes} />
                  </div>
                  <div className="border-t border-border pt-5">
                    <ActivityAttachmentsCard attachments={activity.attachments} />
                  </div>
                </div>
              )}
              {activeTab === "Participants" && <ActivityParticipantsTab />}
              {activeTab === "Photos" && <ActivityPhotosTab />}
              {activeTab === "Notes & Attachments" && (
                <div className="flex flex-col gap-6">
                  <ActivityNotesCard notes={activity.notes} />
                  <ActivityAttachmentsCard attachments={activity.attachments} />
                </div>
              )}
              {activeTab === "Reminders" && <ActivityRemindersTab info={activity.activityInfo} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <ActivitySummaryCard summary={activity.summary} />
          <ActivityLocationCard location={activity.locationDetail} />
          <ActivityInformationCard info={activity.activityInfo} />
        </div>
      </div>
    </div>
  );
}
