"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { useAttendanceDetail } from "@/hooks/useAttendanceDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ATTENDANCE_STATUS_VARIANT } from "@/lib/mock/vmAttendanceMockData";
import { AttendanceDetailTabs } from "@/components/volunteer-management/attendance/detail/AttendanceDetailTabs";
import { AttendanceDetailActionsMenu } from "@/components/volunteer-management/attendance/detail/AttendanceDetailActionsMenu";
import { AttendanceInfoRow } from "@/components/volunteer-management/attendance/detail/AttendanceInfoRow";
import { AttendanceOverviewCard } from "@/components/volunteer-management/attendance/detail/AttendanceOverviewCard";
import { AttendanceTimelineCard } from "@/components/volunteer-management/attendance/detail/AttendanceTimelineCard";
import { AttendanceNotesCard } from "@/components/volunteer-management/attendance/detail/AttendanceNotesCard";
import { ServiceAssignmentCard } from "@/components/volunteer-management/attendance/detail/ServiceAssignmentCard";
import { CheckInHistoryTable } from "@/components/volunteer-management/attendance/detail/CheckInHistoryTable";
import { AttendanceSummarySidebarCard } from "@/components/volunteer-management/attendance/detail/AttendanceSummarySidebarCard";
import { ThisWeekAttendanceCard } from "@/components/volunteer-management/attendance/detail/ThisWeekAttendanceCard";
import { AttendanceDetailQuickActions } from "@/components/volunteer-management/attendance/detail/AttendanceDetailQuickActions";

export default function AttendanceDetailPage() {
  const { id } = useParams();
  const { record, isLoading } = useAttendanceDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  if (isLoading || !record) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  return (
    <div className="space-y-5 pb-10">
      <Link href="/volunteer-management/attendance" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Attendance
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Attendance Details</h1>
          <p className="mt-1 text-sm text-ink-subtle">View detailed attendance information for the selected assignment.</p>
        </div>
        <AttendanceDetailActionsMenu
          onAddNote={() => setActiveTab("Notes")}
          onResendConfirmation={() => console.log("Resend confirmation", record.id)}
          onDownload={() => console.log("Download slip", record.id)}
          onPrint={() => window.print()}
          onDelete={() => console.log("Delete", record.id)}
        />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-border bg-white p-5 shadow-card">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-lg font-semibold text-interactive-600">
            {record.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-xl font-bold text-ink">{record.name} ({record.volunteerId})</h2>
              <Badge variant={ATTENDANCE_STATUS_VARIANT[record.status] ?? "default"}>{record.status}</Badge>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
              <span>{record.ministry}</span>
              <span>{record.role}</span>
              <span>{record.email}</span>
              <span>{record.phone}</span>
            </div>
          </div>
        </div>
        <Button type="button" leftIcon={<Pencil className="h-4 w-4" />}>Edit Attendance</Button>
      </div>

      <AttendanceInfoRow record={record} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <AttendanceDetailTabs active={activeTab} onChange={setActiveTab} />

            <div className="mt-5">
              {activeTab === "Overview" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="mb-4 text-base font-semibold text-ink">Attendance Overview</h3>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <AttendanceOverviewCard record={record} />
                      <AttendanceTimelineCard record={record} />
                    </div>
                  </div>
                  <div className="border-t border-border pt-5">
                    <AttendanceNotesCard notes={record.notes} />
                  </div>
                  <div className="border-t border-border pt-5">
                    <ServiceAssignmentCard assignment={record.serviceAssignment} />
                  </div>
                </div>
              )}
              {activeTab === "Check-in History" && <CheckInHistoryTable history={record.checkInHistory} />}
              {activeTab === "Notes" && <AttendanceNotesCard notes={record.notes} />}
              {activeTab === "Service Details" && <ServiceAssignmentCard assignment={record.serviceAssignment} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceSummarySidebarCard summary={record.summary} />
          <ThisWeekAttendanceCard week={record.weekAttendance} />
          <AttendanceDetailQuickActions
            onEdit={() => console.log("Edit", record.id)}
            onAddNote={() => setActiveTab("Notes")}
            onResendConfirmation={() => console.log("Resend confirmation", record.id)}
            onDownload={() => console.log("Download slip", record.id)}
          />
        </div>
      </div>
    </div>
  );
}
