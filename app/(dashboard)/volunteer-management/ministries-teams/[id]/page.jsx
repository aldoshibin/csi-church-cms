"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { useMinistryDetail } from "@/hooks/useMinistryDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MINISTRY_STATUS_VARIANT, MINISTRY_ICON_STYLE } from "@/lib/mock/ministriesTeamsMockData";
import { MinistryIcon } from "@/components/volunteer-management/ministries/MinistryIcon";
import { MinistryDetailTabs } from "@/components/volunteer-management/ministries/detail/MinistryDetailTabs";
import { MinistryDetailActionsMenu } from "@/components/volunteer-management/ministries/detail/MinistryDetailActionsMenu";
import { MinistryInformationCard } from "@/components/volunteer-management/ministries/detail/MinistryInformationCard";
import { TeamsInThisMinistryCard } from "@/components/volunteer-management/ministries/detail/TeamsInThisMinistryCard";
import { MinistryTabPlaceholder } from "@/components/volunteer-management/ministries/detail/MinistryTabPlaceholder";
import { MinistrySummaryCard } from "@/components/volunteer-management/ministries/detail/MinistrySummaryCard";
import { MinistryRecentAssignmentsMini } from "@/components/volunteer-management/ministries/detail/MinistryRecentAssignmentsMini";
import { MinistryDocumentsCard } from "@/components/volunteer-management/ministries/detail/MinistryDocumentsCard";

export default function MinistryDetailPage() {
  const { id } = useParams();
  const { ministry, isLoading } = useMinistryDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  if (isLoading || !ministry) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  const iconStyle = MINISTRY_ICON_STYLE[ministry.name] ?? { bg: "bg-interactive-50", color: "text-interactive-600", icon: "Church" };

  return (
    <div className="space-y-5 pb-10">
      <Link href="/volunteer-management/ministries-teams" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Ministries &amp; Teams
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-4">
          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${iconStyle.bg} ${iconStyle.color}`}>
            <MinistryIcon name={iconStyle.icon} className="h-7 w-7" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-bold text-ink">{ministry.name}</h1>
              <Badge variant={MINISTRY_STATUS_VARIANT[ministry.status] ?? "default"}>{ministry.status}</Badge>
            </div>
            <p className="mt-0.5 text-sm text-ink-subtle">{ministry.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Ministry</Button>
          <MinistryDetailActionsMenu
            onViewDetails={() => setActiveTab("Overview")}
            onAddTeam={() => console.log("Add team", ministry.id)}
            onAssignVolunteers={() => console.log("Assign volunteers", ministry.id)}
            onViewVolunteers={() => setActiveTab("Volunteers")}
            onViewAssignments={() => setActiveTab("Assignments")}
            onDeactivate={() => console.log("Deactivate", ministry.id)}
            onDelete={() => console.log("Delete", ministry.id)}
          />
        </div>
      </div>

      <MinistryDetailTabs active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          {activeTab === "Overview" ? (
            <>
              <MinistryInformationCard ministry={ministry} />
              <TeamsInThisMinistryCard teams={ministry.teamsInMinistry} />
            </>
          ) : activeTab === "Teams" ? (
            <TeamsInThisMinistryCard teams={ministry.teamsInMinistry} />
          ) : activeTab === "Assignments" ? (
            <MinistryRecentAssignmentsMini assignments={ministry.recentAssignments} />
          ) : activeTab === "Documents" ? (
            <MinistryDocumentsCard documents={ministry.documents} />
          ) : (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">
              <MinistryTabPlaceholder label={activeTab} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <MinistrySummaryCard ministry={ministry} />
          <MinistryRecentAssignmentsMini assignments={ministry.recentAssignments} onViewAll={() => setActiveTab("Assignments")} />
          <MinistryDocumentsCard documents={ministry.documents} onViewAll={() => setActiveTab("Documents")} />
        </div>
      </div>
    </div>
  );
}
