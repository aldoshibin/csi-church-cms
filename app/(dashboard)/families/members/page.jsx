"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Plus, Download, Printer, Eye, Pencil, MoreVertical, Users } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Badge, STATUS_VARIANT_MAP } from "@/components/ui/Badge";
import { FamilyDirectoryFilterBar } from "@/components/family-management/FamilymembersFilterBar";
import { FamilyQuickSummaryPanel } from "@/components/family-management/FamilymembersQuickSummaryPanel";
import { useFamilies } from "@/hooks/useFamilies";
import { IoIosMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";

// TEMPORARY mock, matching the screenshot exactly — remove once
// useFamilies() reliably returns live rows (same fallback pattern used
// on the Members and Family Overview pages).
const MOCK_FAMILIES = [
  { id: "1", family_code: "FAM-2025-00249", family_name: "Thomas Family", head_of_family_name: "Jacob Thomas", parish_name: "Seld Head", member_count: "5/9/1992", phone: "+91 98765 43210", gender: "Male", status: "active" },
  { id: "2", family_code: "FAM-2025-00248", family_name: "Mathew Family", head_of_family_name: "Arun Mathew", parish_name: "Wife", member_count: "20/6/1992", phone: "+91 98456 78901", gender: "Male", status: "active" },
  { id: "3", family_code: "FAM-2025-00247", family_name: "Philip Family", head_of_family_name: "Philip George", parish_name: "Daughter", member_count: "1/5/1975", phone: "+91 98745 61234", gender: "FeMale", status: "active" },
  { id: "4", family_code: "FAM-2025-00246", family_name: "John Family", head_of_family_name: "John Abraham", parish_name: "Son", member_count: "5/1/1985", phone: "+91 96541 23654", gender: "Male", status: "active" },
  { id: "5", family_code: "FAM-2025-00245", family_name: "Daniel Family", head_of_family_name: "Daniel Martin", parish_name: "Seld Head", member_count: "30/8/1990", phone: "+91 93456 78912", gender: "Male", status: "inactive" },
  { id: "6", family_code: "FAM-2025-00244", family_name: "Jose Family", head_of_family_name: "Jose Joseph", parish_name: "Wife", member_count: "25/1/1989", phone: "+91 91234 56780", gender: "FeMale", status: "active" },
  { id: "7", family_code: "FAM-2025-00243", family_name: "Raj Family", head_of_family_name: "Rajkumar R", parish_name: "Seld Head", member_count: "21/2/1996", phone: "+91 98941 25687", gender: "FeMale", status: "active" },
  { id: "8", family_code: "FAM-2025-00242", family_name: "Sam Family", head_of_family_name: "Samson Samuel", parish_name: "Wife", member_count: "12/3/1998", phone: "+91 90876 54321", gender: "Male", status: "active" },
  { id: "9", family_code: "FAM-2025-00241", family_name: "Paul Family", head_of_family_name: "Paul Varghese", parish_name: "Son", member_count: "1/2/1996", phone: "+91 93654 78965", gender: "Male", status: "inactive" },
  { id: "10", family_code: "FAM-2025-00240", family_name: "Martin Family", head_of_family_name: "Martin Luther", parish_name: "Daughter", member_count: "5/9/1992", phone: "+91 97865 41236", gender: "Male", status: "active" },
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
    { key: "family_code", header: "Member ID", render: (row) => <span className="font-medium text-interactive-600">{row.family_code}</span> },
    {
      key: "family_name",
      header: "Member Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <Users className="h-4 w-4" />
          </div>
          <span className="font-medium text-ink">{row.family_name}</span>
        </div>
      ),
    },
    { key: "head_of_family_name", header: "Family Name", render: (row) => row.head_of_family_name || "—" },
    { key: "parish_name", header: "Relationship with Head", render: (row) => row.parish_name || "—" },
    { key: "member_count", header: "Date of Birth", render: (row) => row.member_count },
    { key: "email", header: "Gender", 
      render: (row) => 
        (
          // row.gender || "—" 
           <div className="flex items-center gap-1.5">
            {row.gender == "Male" ? <IoIosMale className="h-4 w-4 text-blue-400" /> : <IoMdFemale className="h-4 w-4 text-pink-500" />}
            
            {row.gender || "—" }
           </div>

        )},
    { key: "phone", header: "Phone", render: (row) => row.phone || "—" },
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
        <h1 className="font-display text-2xl font-bold text-ink">Family Members</h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm">
          <Link href="/families" className="text-interactive-500 hover:underline">Family Management</Link>
          <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
          <span className="text-ink-subtle">Family Members</span>
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
            <Link href="/families/add">
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
