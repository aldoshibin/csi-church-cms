"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Building2, Phone, Mail } from "lucide-react";

import { useAvailabilityDetail } from "@/hooks/useAvailabilityDetail";
import { Badge } from "@/components/ui/Badge";
import { AVAILABILITY_STATUS_VARIANT } from "@/lib/mock/availabilityMockData";
import { AvailabilityDetailTabs } from "@/components/volunteer-management/availability/detail/AvailabilityDetailTabs";
import { AvailabilityDetailActionsMenu } from "@/components/volunteer-management/availability/detail/AvailabilityDetailActionsMenu";
import { AvailabilitySummaryCard } from "@/components/volunteer-management/availability/detail/AvailabilitySummaryCard";
import { WeeklyAvailabilityCard } from "@/components/volunteer-management/availability/detail/WeeklyAvailabilityCard";
import { AvailabilityDetailsTable } from "@/components/volunteer-management/availability/detail/AvailabilityDetailsTable";
import { AvailabilityTabPlaceholder } from "@/components/volunteer-management/availability/detail/AvailabilityTabPlaceholder";
import { VolunteerInfoSidebarCard } from "@/components/volunteer-management/availability/detail/VolunteerInfoSidebarCard";
import { UpcomingAssignmentsSidebarCard } from "@/components/volunteer-management/availability/detail/UpcomingAssignmentsSidebarCard";
import { AvailabilityQuickActions } from "@/components/volunteer-management/availability/AvailabilityQuickActions";
import { TimeOffUpcomingCard } from "@/components/volunteer-management/availability/detail/TimeOffUpcomingCard";
import { CURRENT_WEEK_MOCK } from "@/lib/mock/availabilityMockData";

export default function AvailabilityDetailPage() {
  const { id } = useParams();
  const { availability, isLoading } = useAvailabilityDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  if (isLoading || !availability) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  return (
    <div className="space-y-5 pb-10">
      <Link href="/volunteer-management/availability" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Availability
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-lg font-semibold text-interactive-600">
            {availability.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-bold text-ink">{availability.name}</h1>
              <Badge variant={AVAILABILITY_STATUS_VARIANT[availability.status] ?? "default"}>{availability.status}</Badge>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> {availability.ministry}</span>
              <span className="text-ink-subtle">Volunteer ID: {availability.volunteerId}</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {availability.phone}</span>
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {availability.email}</span>
            </div>
          </div>
        </div>
        <AvailabilityDetailActionsMenu
          onEdit={() => console.log("Edit", availability.id)}
          onAddTimeOff={() => setActiveTab("Time Off")}
          onCopy={() => console.log("Copy availability", availability.id)}
          onViewCalendar={() => setActiveTab("Calendar View")}
          onSendMessage={() => console.log("Send message", availability.id)}
          onDownload={() => console.log("Download schedule", availability.id)}
          onPrint={() => window.print()}
          onRemove={() => console.log("Remove availability", availability.id)}
        />
      </div>

      <AvailabilityDetailTabs active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          {activeTab === "Overview" ? (
            <>
              <AvailabilitySummaryCard summary={availability.summary} />
              <WeeklyAvailabilityCard weeklyAvailability={availability.weeklyAvailability} week={CURRENT_WEEK_MOCK} />
              <AvailabilityDetailsTable details={availability.availabilityDetails} />
            </>
          ) : activeTab === "Weekly View" ? (
            <WeeklyAvailabilityCard weeklyAvailability={availability.weeklyAvailability} week={CURRENT_WEEK_MOCK} />
          ) : activeTab === "Time Off" ? (
            <TimeOffUpcomingCard timeOff={availability.timeOffUpcoming} />
          ) : (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">
              <AvailabilityTabPlaceholder label={activeTab} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <VolunteerInfoSidebarCard availability={availability} />
          <UpcomingAssignmentsSidebarCard assignments={availability.upcomingAssignments} />
          <AvailabilityQuickActions />
          <TimeOffUpcomingCard timeOff={availability.timeOffUpcoming} />
        </div>
      </div>
    </div>
  );
}
