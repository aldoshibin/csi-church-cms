"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Plus, Download, Printer, Eye, Pencil, MoreVertical, Users } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Badge, STATUS_VARIANT_MAP } from "@/components/ui/Badge";
import { FamilyDirectoryFilterBar } from "@/components/family-management/FamilyEventsFilterBar";
import { FamilyQuickSummaryPanel } from "@/components/family-management/FamilyEventsSummaryPanel";
import { useFamilies } from "@/hooks/useFamilies";

// TEMPORARY mock, matching the screenshot exactly — remove once
// useFamilies() reliably returns live rows (same fallback pattern used
// on the Members and Family Overview pages).
const MOCK_FAMILIES = [
  { id: "1", family_code: "FAM-2025-00249", family_name: "Thomas Family", head_of_family_name: "Celebration", parish_name: "Thomas Family", member_count: "5/2/25 & 7:20 Pm", venue: "Prayer Hall", Organized: "Prayer minister", status: "active",eventlocastion: 'prayer hall',Attendance: 1 },
  { id: "2", family_code: "FAM-2025-00248", family_name: "Mathew Family", head_of_family_name: "Fellowship", parish_name: "Mathew Family", member_count: "5/7/26 & 5:20 Pm", venue: "Prayer Hall", Organized: "Youth minister", status: "active" ,eventlocastion: 'Fellow ship',Attendance: 18},
  { id: "3", family_code: "FAM-2025-00247", family_name: "Philip Family", head_of_family_name: "Thanksgiving", parish_name: "Philip Family", member_count: "1/2/25 & 6:20 Pm", venue: "Prayer Hall", Organized: "Prayer minister", status: "active",eventlocastion: 'prayer hall',Attendance: 20 },
  { id: "4", family_code: "FAM-2025-00246", family_name: "John Family", head_of_family_name: "Workship", parish_name: "John Family", member_count: "1/3/27 & 5:20 Pm", venue: "Prayer Hall", Organized: "Prayer minister", status: "active" ,eventlocastion: 'Monthly prayer',Attendance: 15},
  { id: "5", family_code: "FAM-2025-00245", family_name: "Daniel Family", head_of_family_name: "Outreach", parish_name: "Daniel Family", member_count: "4/3/25 & 7:20 Pm", venue: "Prayer Hall", Organized: "Youth minister", status: "inactive",eventlocastion: 'prayer hall',Attendance: 16},
  { id: "6", family_code: "FAM-2025-00244", family_name: "Jose Family", head_of_family_name: "Celebration", parish_name: "Jose Family", member_count: "1/2/26 & 7:20 Pm", venue: "Prayer Hall", Organized: "Youth minister", status: "active" ,eventlocastion: 'Sepical service',Attendance: 11},
  { id: "7", family_code: "FAM-2025-00243", family_name: "Raj Family", head_of_family_name: "Celebration", parish_name: "Raj Family", member_count: "1/5/25 & 4:20 Pm", venue: "Prayer Hall", Organized: "Youth minister", status: "active",eventlocastion: 'Sepical service' ,Attendance: 10},
  { id: "8", family_code: "FAM-2025-00242", family_name: "Sam Family", head_of_family_name: "Fellowship", parish_name: "Sam Family", member_count: "5/2/25 & 7:20 Pm", venue: "Prayer Hall", Organized: "Youth minister", status: "active",eventlocastion: 'Sepical service',Attendance: 14},
  { id: "9", family_code: "FAM-2025-00241", family_name: "Paul Family", head_of_family_name: "Fellowship", parish_name: "Paul Family", member_count: "5/2/25 & 7:20 Pm", venue: "Prayer Hall", Organized: "Youth minister", status: "inactive",eventlocastion: 'Sepical service',Attendance: 9},
  { id: "10", family_code: "FAM-2025-00240", family_name: "Martin Family", head_of_family_name: "Thanksgiving", parish_name: "Martin Family", member_count: "5/2/25 & 7:20 Pm", venue: "Prayer Hall", Organized: "Youth minister", status: "active" ,eventlocastion: 'Sepical service',Attendance: 10},
];
const MOCK_TOTAL_COUNT = 124;

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}

export default function FamilyDirectoryPage() {
  const router = useRouter();
  const {
    families: liveFamilies, totalCount: liveTotalCount, isLoading, page, pageSize, setPage, setSearch,
  } = useFamilies();

  const families = liveFamilies?.length ? liveFamilies : MOCK_FAMILIES;
  const totalCount = liveFamilies?.length ? liveTotalCount : MOCK_TOTAL_COUNT;

  const [viewMode, setViewMode] = React.useState("list");

  const columns = [
    // { key: "family_code", header: "Family ID", render: (row) => <span className="font-medium text-interactive-600">{row.family_code}</span> },
    {
      key: "family_name",
      header: "Event Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <Users className="h-4 w-4" />
          </div>
          <div>
          <p className="font-medium text-ink text-xs">{row.family_name}</p>
          <p className="font-medium text-ink text-[8px]">{row.eventlocastion}</p>
          </div>

        </div>
      ),
    },
    { key: "head_of_family_name", header: "Event Type", render: (row) => row.head_of_family_name || "—" },
    { key: "parish_name", header: "Family / Members", render: (row) => row.parish_name || "—" },
    { key: "member_count", header: "Date & Time", render: (row) => 
      (
        <div>
        <p className="text-xs">{row.member_count.split("&")[0]}</p>
        <p className="text-xs">{row.member_count.split("&")[1]}</p>
        </div>

    )},
    { key: "venue", header: "Venue", render: (row) => row.venue || "—" },
    { key: "Organized", header: "Organized By", render: (row) => row.Organized || "—" },
    { key: "Attendance", header: "Attendance", render: (row) => (
      <div className="flex gap-2 items-center">
            <Users className="h-4 w-4" />

      {row.Attendance || "—" }
      </div>
    )},

    {
      key: "status",
      header: "Status",
      render: (row) => (
        <Badge variant={STATUS_VARIANT_MAP[row.status] || "default"}>
          {row.status === "active" ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); router.push(`/families/${row.id}`); }}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
            aria-label={`View ${row.family_name}`}
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); router.push(`/families/${row.id}/edit`); }}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
            aria-label={`Edit ${row.family_name}`}
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted"
            aria-label="Row actions"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Family Events</h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm">
          <Link href="/families" className="text-interactive-500 hover:underline">Family Management</Link>
          <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
          <span className="text-ink-subtle">Family Events</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-4">
          <FamilyDirectoryFilterBar
            onSearchChange={setSearch}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link href="/families/events/add">
              <button className="flex items-center gap-2 rounded-md bg-interactive-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-interactive-600">
                <Plus className="h-4 w-4" /> Add New Family
              </button>
            </Link>
            <div className="flex gap-2.5">
              <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface-muted">
                <Download className="h-4 w-4" /> Export
              </button>
              <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface-muted">
                <Printer className="h-4 w-4" /> Print
              </button>
            </div>
          </div>

          <Table
            columns={columns}
            data={families}
            isLoading={isLoading}
            emptyMessage="No families found"
            emptyDescription="Try adjusting your search or filters, or add a new family."
            onRowClick={(row) => router.push(`/families/${row.id}`)}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
          />
        </div>

        <FamilyQuickSummaryPanel />
      </div>
    </div>
  );
}
