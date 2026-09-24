"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, Ban } from "lucide-react";

import { useYouthGroupDetail } from "@/hooks/useYouthGroupDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { YG_STATUS_VARIANT } from "@/lib/mock/youthGroupsMockData";
import { GroupDetailsTabs } from "@/components/youth-ministry/groups/detail/GroupDetailsTabs";
import { GroupOverviewTab } from "@/components/youth-ministry/groups/detail/GroupOverviewTab";
import { GroupTabPlaceholder } from "@/components/youth-ministry/groups/detail/GroupTabPlaceholder";
import { GroupLeadersPanel, UpcomingMeetingPanel, GroupStatisticsPanel } from "@/components/youth-ministry/groups/detail/GroupDetailSidePanels";

export default function YouthGroupDetailsPage() {
  const { id } = useParams();
  const { group } = useYouthGroupDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/youth-groups" className="hover:underline">Youth Groups</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Youth Group Details</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">{group.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
            <Badge variant={YG_STATUS_VARIANT[group.status] ?? "default"}>{group.status}</Badge>
            <span>{group.ageRange}</span>
            <span>·</span>
            <span>Group ID: {group.id}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/youth-groups">
            <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Group</Button>
          <Button type="button" variant="secondary" leftIcon={<Ban className="h-4 w-4 text-danger-500" />} className="text-danger-600">Deactivate Group</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <GroupDetailsTabs active={activeTab} onChange={setActiveTab} />
            <div className="mt-5">
              {activeTab === "Overview" ? <GroupOverviewTab group={group} /> : <GroupTabPlaceholder label={activeTab} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <GroupLeadersPanel leaders={group.leaders} />
          <UpcomingMeetingPanel meeting={group.upcomingMeeting} />
          <GroupStatisticsPanel stats={group.stats} />
        </div>
      </div>
    </div>
  );
}
