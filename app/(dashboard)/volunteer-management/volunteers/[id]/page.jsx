"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Printer, MoreHorizontal, Phone, Mail, MapPin } from "lucide-react";

import { useVolunteerDetail } from "@/hooks/useVolunteerDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { VOLUNTEER_STATUS_VARIANT, VOLUNTEER_MINISTRY_BADGE } from "@/lib/mock/volunteersMockData";
import { formatDate } from "@/lib/utils";
import { VolunteerDetailTabs } from "@/components/volunteer-management/detail/VolunteerDetailTabs";
import { VolunteerPersonalInfoCard, VolunteerMinistryRoleInfoCard, VolunteerAdditionalInfoCard } from "@/components/volunteer-management/detail/PersonalAdditionalInfoCards";
import { RecentServiceAssignmentsCard } from "@/components/volunteer-management/detail/RecentServiceAssignmentsCard";
import { VolunteerTabPlaceholder } from "@/components/volunteer-management/detail/VolunteerTabPlaceholder";
import { VolunteerStatusOverviewCard } from "@/components/volunteer-management/detail/VolunteerStatusOverviewCard";
import { VolunteerRecentAssignmentsMini } from "@/components/volunteer-management/detail/VolunteerRecentAssignmentsMini";
import { VolunteerNotesCard } from "@/components/volunteer-management/detail/VolunteerNotesCard";
import { VolunteerDetailQuickActions } from "@/components/volunteer-management/detail/VolunteerDetailQuickActions";

export default function VolunteerDetailPage() {
  const { id } = useParams();
  const { volunteer, isLoading } = useVolunteerDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  if (isLoading || !volunteer) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  const ministryStyle = VOLUNTEER_MINISTRY_BADGE[volunteer.ministry] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/volunteer-management/volunteers" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Volunteers
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Volunteer Details</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Printer className="h-4 w-4" />}>Print</Button>
          <Button type="button" variant="secondary" rightIcon={<MoreHorizontal className="h-4 w-4" />}>More Actions</Button>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-lg font-semibold text-interactive-600">
              {volunteer.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-ink">{volunteer.name}</h2>
                <Badge variant={VOLUNTEER_STATUS_VARIANT[volunteer.status] ?? "default"}>{volunteer.status}</Badge>
              </div>
              <p className="mt-0.5 text-sm text-ink-subtle">{volunteer.id}</p>
              <div className="mt-1">
                <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${ministryStyle.bg} ${ministryStyle.color}`}>{volunteer.ministry}</span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {volunteer.phone}</span>
                <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {volunteer.email}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {volunteer.location}</span>
              </div>
            </div>
          </div>
          <div className="text-right text-sm text-ink-muted">
            <p className="text-xs text-ink-subtle">Joined On</p>
            <p className="font-medium text-ink">{formatDate(volunteer.joinedOn)}</p>
            <p className="mt-2 text-xs text-ink-subtle">Last Service</p>
            <p className="font-medium text-ink">{formatDate(volunteer.lastService)}</p>
          </div>
        </div>

        <div className="mt-5">
          <VolunteerDetailTabs active={activeTab} onChange={setActiveTab} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          {activeTab === "Overview" ? (
            <>
              <VolunteerPersonalInfoCard volunteer={volunteer} />
              <VolunteerMinistryRoleInfoCard volunteer={volunteer} />
              <VolunteerAdditionalInfoCard volunteer={volunteer} />
            </>
          ) : activeTab === "Service Assignments" ? (
            <RecentServiceAssignmentsCard assignments={volunteer.recentAssignments} />
          ) : (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">
              <VolunteerTabPlaceholder label={activeTab} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <VolunteerStatusOverviewCard volunteer={volunteer} />
          <VolunteerRecentAssignmentsMini assignments={volunteer.recentAssignments} onViewAll={() => setActiveTab("Service Assignments")} />
          <VolunteerNotesCard notes={volunteer.notes} onViewAll={() => setActiveTab("Notes & Documents")} />
          <VolunteerDetailQuickActions
            onEdit={() => console.log("Edit", volunteer.id)}
            onAssign={() => console.log("Assign", volunteer.id)}
            onViewSchedule={() => console.log("View schedule", volunteer.id)}
            onViewAttendance={() => console.log("View attendance", volunteer.id)}
            onDeactivate={() => console.log("Deactivate", volunteer.id)}
          />
        </div>
      </div>
    </div>
  );
}
