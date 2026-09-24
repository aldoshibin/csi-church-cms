"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Pencil, MoreVertical, ChevronDown } from "lucide-react";

import { useMensFellowshipGroupDetail } from "@/hooks/useMensFellowshipGroupDetail";
import { Button } from "@/components/ui/Button";
import { GroupDetailsTabs, GroupDetailsTabPlaceholder } from "@/components/mens-fellowship/groups/detail/GroupDetailsTabs";
import { GroupDetailsCard, GroupAttendanceOverviewCard } from "@/components/mens-fellowship/groups/detail/GroupDetailsOverviewCards";
import { GroupRecentMeetingsTable, GroupUpcomingActivitiesTable } from "@/components/mens-fellowship/groups/detail/GroupMeetingsActivitiesTables";
import { GroupStatisticsCards, GroupLeadersCard, GroupQuickActionsCard } from "@/components/mens-fellowship/groups/detail/GroupDetailSidePanels";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export default function MensFellowshipGroupDetailsPage() {
  const { id } = useParams();
  const { group } = useMensFellowshipGroupDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/fellowship-groups" className="flex w-fit items-center gap-1.5 text-sm font-medium text-success-600 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Fellowship Groups
          </Link>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">{group.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Pencil className="h-4 w-4" />}>Edit Group</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" leftIcon={<MoreVertical className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
                More Actions
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={itemClass}>Duplicate Group</DropdownMenu.Item>
                <DropdownMenu.Item className={itemClass}>Deactivate Group</DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`}>Delete Group</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <GroupDetailsTabs active={activeTab} onChange={setActiveTab} group={group} />

      {activeTab === "Overview" ? (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <GroupDetailsCard group={group} />
            </div>
            <GroupAttendanceOverviewCard attendance={group.attendance} averageRate={group.attendanceRate} totalMeetings={group.totalMeetings} />
          </div>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            <div className="flex flex-col gap-5 xl:col-span-2">
              <GroupRecentMeetingsTable meetings={group.recentMeetings} />
              <GroupUpcomingActivitiesTable activities={group.upcomingActivities} />
            </div>

            <div className="flex flex-col gap-5">
              <GroupStatisticsCards group={group} />
              <GroupLeadersCard leaders={group.groupLeaders} />
              <GroupQuickActionsCard />
            </div>
          </div>
        </div>
      ) : (
        <GroupDetailsTabPlaceholder label={activeTab} />
      )}
    </div>
  );
}
