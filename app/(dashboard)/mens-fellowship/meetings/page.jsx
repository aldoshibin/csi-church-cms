"use client";

import Link from "next/link";
import { Plus, Upload, Download, ChevronDown } from "lucide-react";

import { useMeetingsList } from "@/hooks/useMeetingsList";
import { Button } from "@/components/ui/Button";
import { MeetingsTable } from "@/components/mens-fellowship/meetings/MeetingsTable";
import { MeetingsQuickActions } from "@/components/mens-fellowship/meetings/MeetingsQuickActions";
import { RecentMeetingsCard } from "@/components/mens-fellowship/meetings/RecentMeetingsCard";
import { UpcomingMeetingsListCard } from "@/components/mens-fellowship/meetings/UpcomingMeetingsListCard";

export default function MeetingsPage() {
  const {
    meetings, totalCount, isLoading, recentMeetings, upcomingMeetings,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, locationFilter, setLocationFilter,
    page, setPage, pageSize,
  } = useMeetingsList();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Meetings</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage men&apos;s fellowship group meetings.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/mens-fellowship/meetings/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Schedule New Meeting</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Upload className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Import Meetings
          </Button>
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
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            locationFilter={locationFilter} onLocationFilterChange={setLocationFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onSendReminder={(row) => console.log("Send reminder", row.id)}
            onManageAttendance={(row) => console.log("Manage attendance", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <MeetingsQuickActions />
          <RecentMeetingsCard meetings={recentMeetings} />
          <UpcomingMeetingsListCard meetings={upcomingMeetings} />
        </div>
      </div>
    </div>
  );
}
