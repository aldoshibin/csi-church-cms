"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useMeetingAttendance } from "@/hooks/useMeetingAttendance";
import { Button } from "@/components/ui/Button";
import { MeetingsTable } from "@/components/womens-fellowship/meeting-attendance/MeetingsTable";
import { MtgUpcomingCard, AttendanceByTypeCard, MtgQuickActions } from "@/components/womens-fellowship/meeting-attendance/MeetingAttendanceSidebarExtras";
import { MeetingDetailsModal } from "@/components/womens-fellowship/meeting-attendance/MeetingDetailsModal";

export default function MeetingAttendancePage() {
  const {
    meetings, totalCount, isLoading, upcoming, byType,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
    selectedMeeting, setSelectedMeetingId,
  } = useMeetingAttendance();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Meeting Attendance</h1>
          <p className="mt-1 text-sm text-ink-subtle">Track and manage meeting attendance and participation.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/meeting-attendance/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Meeting</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <MeetingsTable
            meetings={meetings}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onView={(row) => setSelectedMeetingId(row.id)}
            onViewReport={(row) => console.log("View report", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <MtgUpcomingCard meetings={upcoming} />
          <AttendanceByTypeCard breakdown={byType.breakdown} />
          <MtgQuickActions />
        </div>
      </div>

      {selectedMeeting && (
        <MeetingDetailsModal meeting={selectedMeeting} onClose={() => setSelectedMeetingId(null)} />
      )}
    </div>
  );
}
