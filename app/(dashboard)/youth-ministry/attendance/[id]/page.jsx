"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, Download } from "lucide-react";

import { useYmEventAttendance } from "@/hooks/useYmEventAttendance";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AttendanceDetailStatsCards } from "@/components/youth-ministry/attendance/detail/AttendanceDetailStatsCards";
import { AttendanceDetailTabs } from "@/components/youth-ministry/attendance/detail/AttendanceDetailTabs";
import { AttendanceDetailTabPlaceholder } from "@/components/youth-ministry/attendance/detail/AttendanceDetailTabPlaceholder";
import { AttendanceRecordsTable } from "@/components/youth-ministry/attendance/detail/AttendanceRecordsTable";
import { EventDetailsCard, AttendanceDetailQuickActions, AttendanceNotesCard } from "@/components/youth-ministry/attendance/detail/AttendanceDetailSidePanels";
import { formatDate } from "@/lib/utils";

export default function AttendanceDetailsPage() {
  const { id } = useParams();
  const { event, isLoading, members, totalCount, search, setSearch, page, setPage, pageSize } = useYmEventAttendance(id);
  const [activeTab, setActiveTab] = useState("Attendance Records");

  return (
    <div className="space-y-5 pb-10">
      <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
        <Link href="/youth-ministry/attendance" className="hover:underline">Attendance</Link>
        <span className="text-ink-subtle">›</span>
        <span className="font-medium text-ink">Attendance Details</span>
      </nav>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">{event.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
            <Badge variant="info">{event.status}</Badge>
            <span>{formatDate(event.date)} ({event.day})</span>
            <span>·</span>
            <span>{event.time}</span>
            <span>·</span>
            <span>{event.venue}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/attendance">
            <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Attendance</Button>
          </Link>
          <Link href={`/youth-ministry/attendance/${event.id}/edit`}>
            <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Attendance</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export</Button>
        </div>
      </div>

      <AttendanceDetailStatsCards event={event} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <AttendanceDetailTabs active={activeTab} onChange={setActiveTab} />
            <div className="mt-5">
              {activeTab === "Attendance Records" ? (
                <AttendanceRecordsTable
                  members={members} isLoading={isLoading}
                  pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
                  search={search} onSearchChange={setSearch}
                />
              ) : (
                <AttendanceDetailTabPlaceholder label={activeTab} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <EventDetailsCard event={event} />
          <AttendanceDetailQuickActions />
          <AttendanceNotesCard notes={event.notes} />
        </div>
      </div>
    </div>
  );
}
