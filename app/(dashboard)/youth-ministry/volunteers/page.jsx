"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useYmVolunteers } from "@/hooks/useYmVolunteers";
import { Button } from "@/components/ui/Button";
import { VolunteersTable } from "@/components/youth-ministry/volunteers/VolunteersTable";

export default function YmVolunteersPage() {
  const {
    volunteers, totalCount, isLoading,
    search, setSearch, ministryFilter, setMinistryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useYmVolunteers();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Volunteers</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage and engage volunteers across ministries and events.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/volunteers/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Volunteer</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <VolunteersTable
        volunteers={volunteers}
        isLoading={isLoading}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
        search={search} onSearchChange={setSearch}
        ministryFilter={ministryFilter} onMinistryFilterChange={setMinistryFilter}
        statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
        onEdit={(row) => console.log("Edit", row.id)}
        onSendMessage={(row) => console.log("Send message", row.id)}
        onViewAssignments={(row) => console.log("View assignments", row.id)}
        onDeactivate={(row) => console.log("Deactivate", row.id)}
        onDelete={(row) => console.log("Delete", row.id)}
      />
    </div>
  );
}
