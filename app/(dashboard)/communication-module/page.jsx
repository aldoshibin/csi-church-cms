"use client";

import { useRouter } from "next/navigation";

import { useCommunicationOverview } from "@/hooks/useCommunicationOverview";
import { CommunicationOverviewRow } from "@/components/communication-module/CommunicationOverviewRow";
import { CommunicationToolsGrid } from "@/components/communication-module/CommunicationToolsGrid";
import { RecentCommunicationsTable } from "@/components/communication-module/RecentCommunicationsTable";
import { AnnouncementsPanelCard } from "@/components/communication-module/AnnouncementsPanelCard";
import { UpcomingMessagesCard } from "@/components/communication-module/UpcomingMessagesCard";
import { CommunicationQuickActions } from "@/components/communication-module/CommunicationQuickActions";

export default function CommunicationModuleOverviewPage() {
  const router = useRouter();
  const { stats, tools, recent, isLoading, announcements, upcomingMessages } = useCommunicationOverview();

  return (
    <div className="space-y-5 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Communication Module</h1>
        <p className="mt-1 text-sm text-ink-subtle">Stay connected with your church community through announcements, messages and campaigns.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <CommunicationOverviewRow stats={stats} />
          <CommunicationToolsGrid tools={tools} />
          <RecentCommunicationsTable
            communications={recent}
            isLoading={isLoading}
            onViewAll={() => router.push("/communication-module/messages")}
            onView={(row) => console.log("View", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AnnouncementsPanelCard announcements={announcements} />
          <UpcomingMessagesCard messages={upcomingMessages} />
          <CommunicationQuickActions />
        </div>
      </div>
    </div>
  );
}
