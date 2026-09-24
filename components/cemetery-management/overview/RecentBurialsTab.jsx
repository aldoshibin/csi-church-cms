"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, Calendar, SlidersHorizontal, Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { BURIAL_STATUS_VARIANT, BURIAL_STATUS_OPTIONS, SECTION_OPTIONS } from "@/lib/mock/vmCemeteryMockData";
import { useOverviewBurialsTab } from "@/hooks/useOverviewBurialsTab";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function RecentBurialsTab() {
  const {
    records, totalCount, isLoading,
    search, setSearch, sectionFilter, setSectionFilter, statusFilter, setStatusFilter,
    dateFrom, setDateFrom, dateTo, setDateTo,
    page, setPage, pageSize,
  } = useOverviewBurialsTab();

  const columns = [
    { key: "recordNumber", header: "Burial ID", render: (r) => (
      <Link href={`/cemetery-management/burial-records/${r.id}`} className="font-medium text-interactive-600 hover:underline">
        {r.recordNumber}
      </Link>
    ) },
    { key: "deceasedName", header: "Deceased Name", render: (r) => (
      <div>
        <p className="text-ink">{r.deceasedName}</p>
        <p className="text-xs text-ink-subtle">{r.ageAtDeath} Years</p>
      </div>
    ) },
    { key: "plotNumber", header: "Plot No." },
    { key: "section", header: "Section" },
    { key: "dateOfBurial", header: "Burial Date", render: (r) => formatDate(r.dateOfBurial) },
    { key: "recordedBy", header: "Recorded By" },
    { key: "status", header: "Status", render: (r) => <Badge variant={BURIAL_STATUS_VARIANT[r.status] ?? "default"}>{r.status}</Badge> },
    { key: "actions", header: "Actions", render: (r) => (
      <div className="flex items-center gap-1">
        <Link href={`/cemetery-management/burial-records/${r.id}`} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View record">
          <Eye className="h-4 w-4" />
        </Link>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item asChild className={menuItemClass}>
                <Link href={`/cemetery-management/burial-records/${r.id}`}><Pencil className="h-4 w-4" /> Edit Record</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, plot no., or burial ID..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Sections</option>
          {SECTION_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {BURIAL_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <div className="flex items-center gap-1.5 rounded-md border border-border bg-white px-3 h-9 text-sm text-ink-muted">
          <Calendar className="h-4 w-4 text-ink-subtle" />
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="w-[110px] border-0 p-0 text-sm text-ink-muted focus:outline-none" />
          <span>-</span>
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="w-[110px] border-0 p-0 text-sm text-ink-muted focus:outline-none" />
        </div>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <Table
        columns={columns} data={records} isLoading={isLoading}
        emptyMessage="No burial records found."
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
      />
    </div>
  );
}
