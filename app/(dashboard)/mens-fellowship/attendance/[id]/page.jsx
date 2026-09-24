"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, MoreHorizontal } from "lucide-react";

import { useMeetingAttendanceDetail } from "@/hooks/useMeetingAttendanceDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ATTENDANCE_LIST_STATUS_VARIANT } from "@/lib/mock/meetingAttendanceMockData";
import { AttendanceDetailTabs } from "@/components/mens-fellowship/attendance/detail/AttendanceDetailTabs";
import { AttendanceMeetingDetailsPanel } from "@/components/mens-fellowship/attendance/detail/AttendanceMeetingDetailsPanel";
import { AttendanceMeetingDescriptionCard } from "@/components/mens-fellowship/attendance/detail/AttendanceMeetingDescriptionCard";
import { AttendanceAgendaCard } from "@/components/mens-fellowship/attendance/detail/AttendanceAgendaCard";
import { AttendanceAttachmentsCard } from "@/components/mens-fellowship/attendance/detail/AttendanceAttachmentsCard";
import { AttendanceTabPlaceholder } from "@/components/mens-fellowship/attendance/detail/AttendanceTabPlaceholder";
import { AttendanceOverviewCard } from "@/components/mens-fellowship/attendance/AttendanceOverviewCard";
import { AttendanceSummaryMiniCard } from "@/components/mens-fellowship/attendance/detail/AttendanceSummaryMiniCard";
import { AttendanceDetailQuickActions } from "@/components/mens-fellowship/attendance/detail/AttendanceDetailQuickActions";

export default function MeetingAttendanceDetailPage() {
  const { id } = useParams();
  const { record } = useMeetingAttendanceDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/attendance" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Meeting Attendance
          </Link>
          <div className="flex items-center gap-2.5">
            <h1 className="font-display text-2xl font-bold text-ink">{record.title}</h1>
            <Badge variant={ATTENDANCE_LIST_STATUS_VARIANT[record.status] ?? "default"}>{record.status}</Badge>
          </div>
          <p className="mt-1 text-sm text-ink-subtle">{record.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Pencil className="h-4 w-4" />}>Edit Meeting</Button>
          <Button type="button" variant="secondary" rightIcon={<MoreHorizontal className="h-4 w-4" />}>More Actions</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <AttendanceDetailTabs active={activeTab} onChange={setActiveTab} />

            <div className="mt-5">
              {activeTab === "Overview" && (
                <div className="flex flex-col gap-6">
                  <AttendanceMeetingDetailsPanel record={record} />
                  <div className="border-t border-border pt-5">
                    <AttendanceMeetingDescriptionCard description={record.description} />
                  </div>
                  <div className="border-t border-border pt-5">
                    <AttendanceAgendaCard agenda={record.agenda} />
                  </div>
                  <div className="border-t border-border pt-5">
                    <AttendanceAttachmentsCard attachments={record.attachments} />
                  </div>
                </div>
              )}
              {activeTab === "Attendance" && <AttendanceTabPlaceholder label="Attendance" />}
              {activeTab === "Statistics" && <AttendanceTabPlaceholder label="Statistics" />}
              {activeTab === "Notes" && <AttendanceTabPlaceholder label="Notes" />}
              {activeTab === "Attachments" && <AttendanceAttachmentsCard attachments={record.attachments} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceOverviewCard overview={record.overview} />
          <AttendanceSummaryMiniCard record={record} />
          <AttendanceDetailQuickActions />
        </div>
      </div>
    </div>
  );
}
