"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Users2 } from "lucide-react";

import { useAssignmentDetail } from "@/hooks/useAssignmentDetail";
import { Badge } from "@/components/ui/Badge";
import { ASSIGNMENT_STATUS_VARIANT, ASSIGNMENT_ICON_STYLE } from "@/lib/mock/serviceAssignmentsMockData";
import { AssignmentIcon } from "@/components/volunteer-management/assignments/AssignmentIcon";
import { AssignmentDetailTabs } from "@/components/volunteer-management/assignments/detail/AssignmentDetailTabs";
import { AssignmentDetailActionsMenu } from "@/components/volunteer-management/assignments/detail/AssignmentDetailActionsMenu";
import { AssignmentDetailsCard } from "@/components/volunteer-management/assignments/detail/AssignmentDetailsCard";
import { VolunteersAssignedCard } from "@/components/volunteer-management/assignments/detail/VolunteersAssignedCard";
import { AssignmentTabPlaceholder } from "@/components/volunteer-management/assignments/detail/AssignmentTabPlaceholder";
import { AssignmentStatusCard } from "@/components/volunteer-management/assignments/detail/AssignmentStatusCard";
import { ScheduleOverviewCard } from "@/components/volunteer-management/assignments/detail/ScheduleOverviewCard";
import { RelatedAssignmentsCard } from "@/components/volunteer-management/assignments/detail/RelatedAssignmentsCard";
import { AssignmentDetailQuickActions } from "@/components/volunteer-management/assignments/detail/AssignmentDetailQuickActions";

export default function AssignmentDetailPage() {
  const { id } = useParams();
  const { assignment, isLoading } = useAssignmentDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  if (isLoading || !assignment) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  const iconStyle = ASSIGNMENT_ICON_STYLE[assignment.title] ?? { bg: "bg-interactive-50", color: "text-interactive-600", icon: "Church" };

  return (
    <div className="space-y-5 pb-10">
      <Link href="/volunteer-management/service-assignments" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Service Assignments
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-4">
          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${iconStyle.bg} ${iconStyle.color}`}>
            <AssignmentIcon name={iconStyle.icon} className="h-7 w-7" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-bold text-ink">{assignment.title}</h1>
              <Badge variant={ASSIGNMENT_STATUS_VARIANT[assignment.status] ?? "default"}>{assignment.status}</Badge>
            </div>
            <p className="mt-0.5 text-sm text-ink-subtle">{assignment.location}</p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {formatAssignmentDate(assignment)}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {assignment.startTime} - {assignment.endTime}</span>
              <span className="flex items-center gap-1.5"><Users2 className="h-3.5 w-3.5" /> {assignment.volunteersCount} Volunteers</span>
            </div>
          </div>
        </div>
        <AssignmentDetailActionsMenu
          onEdit={() => console.log("Edit", assignment.id)}
          onDuplicate={() => console.log("Duplicate", assignment.id)}
          onAssignVolunteers={() => console.log("Assign volunteers", assignment.id)}
          onViewVolunteers={() => setActiveTab("Volunteers")}
          onPrint={() => window.print()}
          onCancel={() => console.log("Cancel", assignment.id)}
          onDelete={() => console.log("Delete", assignment.id)}
        />
      </div>

      <AssignmentDetailTabs active={activeTab} onChange={setActiveTab} volunteersCount={assignment.volunteersCount} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          {activeTab === "Overview" ? (
            <>
              <AssignmentDetailsCard assignment={assignment} />
              <VolunteersAssignedCard
                volunteers={assignment.volunteersAssigned}
                totalCount={assignment.totalVolunteersAssigned}
                onViewAll={() => setActiveTab("Volunteers")}
              />
            </>
          ) : activeTab === "Volunteers" ? (
            <VolunteersAssignedCard volunteers={assignment.volunteersAssigned} totalCount={assignment.totalVolunteersAssigned} />
          ) : activeTab === "Details" ? (
            <AssignmentDetailsCard assignment={assignment} />
          ) : (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">
              <AssignmentTabPlaceholder label={activeTab} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <AssignmentStatusCard assignment={assignment} />
          <ScheduleOverviewCard assignment={assignment} />
          <RelatedAssignmentsCard assignments={assignment.relatedAssignments} />
          <AssignmentDetailQuickActions
            onAssignVolunteers={() => console.log("Assign volunteers", assignment.id)}
            onEdit={() => console.log("Edit", assignment.id)}
            onViewVolunteers={() => setActiveTab("Volunteers")}
            onPrint={() => window.print()}
          />
        </div>
      </div>
    </div>
  );
}

function formatAssignmentDate(assignment) {
  const date = new Date(assignment.date);
  if (Number.isNaN(date.getTime())) return assignment.date;
  const formatted = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(date);
  return assignment.dayLabel ? `${formatted} (${assignment.dayLabel})` : formatted;
}
