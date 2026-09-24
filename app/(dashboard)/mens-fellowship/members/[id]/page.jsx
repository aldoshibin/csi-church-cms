"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, MoreHorizontal, User } from "lucide-react";

import { useMensFellowshipMemberDetail } from "@/hooks/useMensFellowshipMemberDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MEMBER_STATUS_VARIANT } from "@/lib/mock/mensFellowshipMockData";
import { MemberDetailTabs } from "@/components/mens-fellowship/members/detail/MemberDetailTabs";
import { MemberOverviewTab } from "@/components/mens-fellowship/members/detail/MemberOverviewTab";
import { MemberTabPlaceholder } from "@/components/mens-fellowship/members/detail/MemberTabPlaceholder";
import { GroupInformationCard } from "@/components/mens-fellowship/members/detail/GroupInformationCard";
import { MemberStatisticsCard } from "@/components/mens-fellowship/members/detail/MemberStatisticsCard";
import { MemberRecentAttendanceCard } from "@/components/mens-fellowship/members/detail/MemberRecentAttendanceCard";
import { MemberQuickActionsCard } from "@/components/mens-fellowship/members/detail/MemberQuickActionsCard";

export default function MensFellowshipMemberDetailPage() {
  const { id } = useParams();
  const { member } = useMensFellowshipMemberDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/members" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Members
          </Link>
          <div className="flex items-center gap-2.5">
            <h1 className="font-display text-2xl font-bold text-ink">{member.name}</h1>
            <Badge variant={MEMBER_STATUS_VARIANT[member.status] ?? "default"}>{member.status}</Badge>
          </div>
          <p className="mt-1 text-sm text-ink-subtle">Member ID: {member.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Pencil className="h-4 w-4" />}>Edit Member</Button>
          <Button type="button" variant="secondary" rightIcon={<MoreHorizontal className="h-4 w-4" />}>More Actions</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <div className="flex items-start gap-3 border-b border-border pb-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-interactive-50">
                <User className="h-5 w-5 text-interactive-600" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-ink">{member.name}</h2>
                <p className="mt-0.5 text-sm text-ink-subtle">{member.group?.name}</p>
              </div>
            </div>

            <div className="mt-4">
              <MemberDetailTabs active={activeTab} onChange={setActiveTab} />
            </div>

            <div className="mt-5">
              {activeTab === "Overview" ? <MemberOverviewTab member={member} /> : <MemberTabPlaceholder label={activeTab} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <GroupInformationCard group={member.group} />
          <MemberStatisticsCard stats={member.stats} />
          <MemberRecentAttendanceCard attendance={member.recentAttendance} memberId={member.id} />
          <MemberQuickActionsCard onAction={(label) => console.log(label, member.id)} />
        </div>
      </div>
    </div>
  );
}
