"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, MoreHorizontal } from "lucide-react";

import { useMeetingDetail } from "@/hooks/useMeetingDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MEETING_STATUS_VARIANT } from "@/lib/mock/meetingsMockData";
import { MeetingDetailTabs } from "@/components/mens-fellowship/meetings/detail/MeetingDetailTabs";
import { MeetingDetailsPanel } from "@/components/mens-fellowship/meetings/detail/MeetingDetailsPanel";
import { MeetingAgendaCard } from "@/components/mens-fellowship/meetings/detail/MeetingAgendaCard";
import { MeetingNotesCard } from "@/components/mens-fellowship/meetings/detail/MeetingNotesCard";
import { MeetingAttachmentsCard } from "@/components/mens-fellowship/meetings/detail/MeetingAttachmentsCard";
import { MeetingAttendanceTab } from "@/components/mens-fellowship/meetings/detail/MeetingAttendanceTab";
import { MeetingOverviewCard } from "@/components/mens-fellowship/meetings/detail/MeetingOverviewCard";
import { AttendanceSummaryCard } from "@/components/mens-fellowship/meetings/detail/AttendanceSummaryCard";
import { MeetingInformationCard } from "@/components/mens-fellowship/meetings/detail/MeetingInformationCard";

export default function MeetingDetailPage() {
  const { id } = useParams();
  const { meeting } = useMeetingDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/meetings" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Meetings
          </Link>
          <div className="flex items-center gap-2.5">
            <h1 className="font-display text-2xl font-bold text-ink">{meeting.title}</h1>
            <Badge variant={MEETING_STATUS_VARIANT[meeting.status] ?? "default"}>{meeting.status}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Pencil className="h-4 w-4" />}>Edit Meeting</Button>
          <Button type="button" variant="secondary" rightIcon={<MoreHorizontal className="h-4 w-4" />}>More Actions</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <MeetingDetailTabs active={activeTab} onChange={setActiveTab} />

            <div className="mt-5">
              {activeTab === "Overview" && (
                <div className="flex flex-col gap-6">
                  <MeetingDetailsPanel meeting={meeting} />
                  <div className="grid grid-cols-1 gap-6 border-t border-border pt-5 sm:grid-cols-2">
                    <MeetingAgendaCard agenda={meeting.agenda} />
                    <MeetingNotesCard notes={meeting.notes} />
                  </div>
                  <div className="border-t border-border pt-5">
                    <MeetingAttachmentsCard attachments={meeting.attachments} />
                  </div>
                </div>
              )}
              {activeTab === "Attendance" && <MeetingAttendanceTab />}
              {activeTab === "Notes" && <MeetingNotesCard notes={meeting.notes} />}
              {activeTab === "Agenda" && <MeetingAgendaCard agenda={meeting.agenda} />}
              {activeTab === "Attachments" && <MeetingAttachmentsCard attachments={meeting.attachments} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <MeetingOverviewCard overview={meeting.overview} />
          <AttendanceSummaryCard summary={meeting.attendanceSummary} />
          <MeetingInformationCard info={meeting.meetingInfo} />
        </div>
      </div>
    </div>
  );
}
