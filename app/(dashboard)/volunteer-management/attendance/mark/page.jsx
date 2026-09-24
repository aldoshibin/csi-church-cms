"use client";

import Link from "next/link";
import { ArrowLeft, X, Check } from "lucide-react";

import { useMarkAttendanceForm } from "@/hooks/useMarkAttendanceForm";
import { Button } from "@/components/ui/Button";
import { MarkAttendanceHeaderForm } from "@/components/volunteer-management/attendance/MarkAttendanceHeaderForm";
import { MarkAttendanceVolunteerTable } from "@/components/volunteer-management/attendance/MarkAttendanceVolunteerTable";
import { MarkAttendanceSummaryCards } from "@/components/volunteer-management/attendance/MarkAttendanceSummaryCards";
import { ServiceDetailsCard } from "@/components/volunteer-management/attendance/ServiceDetailsCard";
import { MarkAttendanceQuickActions } from "@/components/volunteer-management/attendance/MarkAttendanceQuickActions";

export default function MarkAttendancePage() {
  const {
    form, setField,
    roster, toggleSelected, selectAll, clearAll, bulkMarkPresent, setStatus, setRemarks, setCheckInTime,
    search, setSearch, statusFilter, setStatusFilter, roleFilter, setRoleFilter,
    summary, serviceDetails,
    isSubmitting, submit,
  } = useMarkAttendanceForm();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/volunteer-management/attendance" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Attendance
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Mark Attendance</h1>
          <p className="mt-1 text-sm text-ink-subtle">Mark attendance for the selected service, event, or assignment.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/attendance">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" leftIcon={<Check className="h-4 w-4" />} isLoading={isSubmitting} onClick={submit}>
            Save Attendance
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <MarkAttendanceHeaderForm form={form} setField={setField} />
          <MarkAttendanceVolunteerTable
            roster={roster}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            roleFilter={roleFilter} onRoleFilterChange={setRoleFilter}
            onSelectAll={selectAll} onClearAll={clearAll}
            onToggleSelected={toggleSelected} onStatusChange={setStatus}
            onRemarksChange={setRemarks} onCheckInTimeChange={setCheckInTime}
          />
        </div>

        <div className="flex flex-col gap-5">
          <MarkAttendanceSummaryCards summary={summary} />
          <ServiceDetailsCard details={serviceDetails} />
          <MarkAttendanceQuickActions onBulkMarkPresent={bulkMarkPresent} />
        </div>
      </div>
    </div>
  );
}
