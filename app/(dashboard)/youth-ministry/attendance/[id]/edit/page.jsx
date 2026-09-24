"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { X, Save } from "lucide-react";

import { useYmEditAttendance } from "@/hooks/useYmEditAttendance";
import { Button } from "@/components/ui/Button";
import { EditAttendanceEventBar } from "@/components/youth-ministry/attendance/edit/EditAttendanceEventBar";
import { EditAttendanceTable } from "@/components/youth-ministry/attendance/edit/EditAttendanceTable";
import { EditEventInformationCard, EditAttendanceSummaryCard, EditAttendanceQuickTips } from "@/components/youth-ministry/attendance/edit/EditAttendanceSidePanels";

export default function EditAttendancePage() {
  const { id } = useParams();
  const {
    event, members, totalCount, summary,
    search, setSearch, groupFilter, setGroupFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
    updateMember, toggleChecked, removeMember, markAllPresent,
    isSubmitting, submit,
  } = useYmEditAttendance(id);

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/attendance" className="hover:underline">Attendance</Link>
            <span className="text-ink-subtle">›</span>
            <Link href={`/youth-ministry/attendance/${event.id}`} className="hover:underline">Attendance Details</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Edit Attendance</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Edit Attendance</h1>
          <p className="mt-1 text-sm text-ink-subtle">Update attendance records for members for this event.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/youth-ministry/attendance/${event.id}`}>
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Changes
          </Button>
        </div>
      </div>

      <EditAttendanceEventBar event={event} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EditAttendanceTable
            members={members}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            groupFilter={groupFilter} onGroupFilterChange={setGroupFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onMarkAllPresent={markAllPresent}
            onToggleChecked={toggleChecked}
            onUpdateMember={updateMember}
            onRemoveMember={removeMember}
          />
        </div>

        <div className="flex flex-col gap-5">
          <EditEventInformationCard event={event} />
          <EditAttendanceSummaryCard summary={summary} />
          <EditAttendanceQuickTips />
        </div>
      </div>
    </div>
  );
}
