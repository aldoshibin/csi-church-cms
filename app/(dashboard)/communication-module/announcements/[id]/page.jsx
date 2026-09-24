"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { useAnnouncementDetail } from "@/hooks/useAnnouncementDetail";
import { Badge } from "@/components/ui/Badge";
import { ANNOUNCEMENT_STATUS_VARIANT } from "@/lib/mock/vmAnnouncementsMockData";
import { AnnouncementIcon } from "@/components/communication-module/announcements/AnnouncementIcon";
import { AnnouncementDetailActionsMenu } from "@/components/communication-module/announcements/detail/AnnouncementDetailActionsMenu";
import { AnnouncementDetailsCard } from "@/components/communication-module/announcements/detail/AnnouncementDetailsCard";
import { AnnouncementAudienceCard } from "@/components/communication-module/announcements/detail/AnnouncementAudienceCard";
import { AnnouncementChannelsCard } from "@/components/communication-module/announcements/detail/AnnouncementChannelsCard";
import { AnnouncementStatusCard } from "@/components/communication-module/announcements/detail/AnnouncementStatusCard";
import { EngagementOverviewCard } from "@/components/communication-module/announcements/detail/EngagementOverviewCard";
import { AnnouncementActionsListCard } from "@/components/communication-module/announcements/detail/AnnouncementActionsListCard";

export default function AnnouncementDetailPage() {
  const { id } = useParams();
  const { announcement, isLoading } = useAnnouncementDetail(id);

  if (isLoading || !announcement) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  return (
    <div className="space-y-5 pb-10">
      <Link href="/communication-module/announcements" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Announcements
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-border bg-white p-5 shadow-card">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
            <AnnouncementIcon name="Megaphone" className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-xl font-bold text-ink">{announcement.title}</h1>
              <Badge variant={ANNOUNCEMENT_STATUS_VARIANT[announcement.status] ?? "default"}>{announcement.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-muted">{announcement.description.split("\n")[0]}</p>
            <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-ink-muted">
              <span>Category: <span className="font-medium text-ink">{announcement.category}</span></span>
              <span>Audience: <span className="font-medium text-ink">{announcement.audience}</span></span>
              <span>
                Published On: <span className="font-medium text-ink">
                  {new Date(announcement.publishedOn).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
                </span>
              </span>
              <span>Published By: <span className="font-medium text-ink">{announcement.publishedBy}</span></span>
            </div>
          </div>
        </div>
        <AnnouncementDetailActionsMenu
          onEdit={() => console.log("Edit", announcement.id)}
          onDuplicate={() => console.log("Duplicate", announcement.id)}
          onSchedule={() => console.log("Schedule again", announcement.id)}
          onDelete={() => console.log("Delete", announcement.id)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <AnnouncementDetailsCard announcement={announcement} />
          <AnnouncementAudienceCard announcement={announcement} />
          <AnnouncementChannelsCard channels={announcement.channels} />
        </div>

        <div className="flex flex-col gap-5">
          <AnnouncementStatusCard announcement={announcement} />
          <EngagementOverviewCard engagement={announcement.engagement} />
          <AnnouncementActionsListCard
            onEdit={() => console.log("Edit", announcement.id)}
            onDuplicate={() => console.log("Duplicate", announcement.id)}
            onSchedule={() => console.log("Schedule again", announcement.id)}
            onDelete={() => console.log("Delete", announcement.id)}
          />
        </div>
      </div>
    </div>
  );
}
