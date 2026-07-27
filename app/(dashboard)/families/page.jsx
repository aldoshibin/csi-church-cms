"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Plus, Eye, Pencil, Download, MoreVertical, Users } from "lucide-react";
import { HiUserGroup } from "react-icons/hi2";
import { IoShieldHalf } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa";

import { Table } from "@/components/ui/Table";
import { Badge, STATUS_VARIANT_MAP } from "@/components/ui/Badge";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { FamilyFilterBar } from "@/components/family-management/FamilyFilterBar";
import { useFamilies } from "@/hooks/useFamilies";

// TEMPORARY mock, matching the screenshot exactly — remove once
// useFamilies() reliably returns live rows (same fallback pattern used
// on the Members page).
const MOCK_FAMILIES = [
  { id: "1", family_code: "FAM-2025-00248", family_name: "Thomas Family", head_of_family_name: "Jacob Thomas", parish_name: "CSI St. John's Church", member_count: 5, phone: "+91 98765 43210", status: "active" },
  { id: "2", family_code: "FAM-2025-00247", family_name: "Mathew Family", head_of_family_name: "Philip Mathew", parish_name: "CSI St. John's Church", member_count: 4, phone: "+91 98765 43211", status: "active" },
  { id: "3", family_code: "FAM-2025-00246", family_name: "George Family", head_of_family_name: "Paul George", parish_name: "CSI St. John's Church", member_count: 6, phone: "+91 98765 43212", status: "active" },
  { id: "4", family_code: "FAM-2025-00245", family_name: "Samuel Family", head_of_family_name: "David Samuel", parish_name: "CSI St. John's Church", member_count: 3, phone: "+91 98765 43213", status: "active" },
  { id: "5", family_code: "FAM-2025-00244", family_name: "Joseph Family", head_of_family_name: "Jerin Joseph", parish_name: "CSI St. John's Church", member_count: 4, phone: "+91 98765 43214", status: "active" },
  { id: "6", family_code: "FAM-2025-00243", family_name: "Rose Family", head_of_family_name: "Linda Rose", parish_name: "CSI St. John's Church", member_count: 2, phone: "+91 98765 43215", status: "inactive" },
  { id: "7", family_code: "FAM-2025-00242", family_name: "David Family", head_of_family_name: "Daniel David", parish_name: "CSI St. John's Church", member_count: 5, phone: "+91 98765 43216", status: "active" },
  { id: "8", family_code: "FAM-2025-00241", family_name: "Martin Family", head_of_family_name: "John Martin", parish_name: "CSI St. John's Church", member_count: 3, phone: "+91 98765 43217", status: "active" },
  { id: "9", family_code: "FAM-2025-00240", family_name: "Kumar Family", head_of_family_name: "Ravi Kumar", parish_name: "CSI St. John's Church", member_count: 4, phone: "+91 98765 43218", status: "active" },
  { id: "10", family_code: "FAM-2025-00239", family_name: "Rachel Family", head_of_family_name: "Riya Rachel", parish_name: "CSI St. John's Church", member_count: 3, phone: "+91 98765 43219", status: "active" },
];
const MOCK_TOTAL_COUNT = 248;

export default function FamilyOverviewPage() {
  const router = useRouter();
  const {
    families: liveFamilies, totalCount: liveTotalCount, isLoading, page, pageSize, setPage, setSearch,
  } = useFamilies();

  const families = liveFamilies?.length ? liveFamilies : MOCK_FAMILIES;
  const totalCount = liveFamilies?.length ? liveTotalCount : MOCK_TOTAL_COUNT;

  const [viewMode, setViewMode] = React.useState("list");

  const columns = [
    { key: "family_code", header: "Family ID", render: (row) => <span className="font-medium text-interactive-600">{row.family_code}</span> },
    { key: "family_name", header: "Family Name" },
    { key: "head_of_family_name", header: "Family Head", render: (row) => row.head_of_family_name || "—" },
    { key: "parish_name", header: "Parish", render: (row) => row.parish_name || "—" },
    {
      key: "member_count",
      header: "Members",
      render: (row) => (
        <span className="flex items-center gap-1.5 text-ink">
          <Users className="h-3.5 w-3.5 text-ink-subtle" /> {row.member_count}
        </span>
      ),
    },
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
          {row.status === "active" ? (
            <button
              onClick={(e) => { e.stopPropagation(); router.push(`/families/${row.id}/edit`); }}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
              aria-label={`Edit ${row.family_name}`}
            >
              <Pencil className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
              aria-label={`Download ${row.family_name} record`}
            >
              <Download className="h-4 w-4" />
            </button>
          )}
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
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Family Management</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/families" className="text-interactive-500 hover:underline">Family Management</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Family Overview</span>
          </p>
        </div>
        <Link href="/families/add">
          <button className="flex items-center gap-2 rounded-md bg-interactive-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-interactive-600">
            <Plus className="h-4 w-4" /> Add New Family
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <ParishStatCard label="Total Families" value="248" sublabel="All Time" icon={HiUserGroup} />
        <ParishStatCard label="Active Families" value="210" sublabel="84.7% of total" icon={IoShieldHalf} />
        <ParishStatCard label="New Families (This Year)" value="18" sublabel="2025" icon={FaUserPlus} />
        <ParishStatCard label="Inactive Families" value="38" sublabel="15.3% of total" icon={FaUserSlash} />
        <ParishStatCard label="Total Members" value="784" sublabel="All Families" icon={HiUserGroup} />
      </div>

      <FamilyFilterBar
        onSearchChange={setSearch}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <Table
        columns={columns}
        data={families}
        isLoading={isLoading}
        selectable
        emptyMessage="No families found"
        emptyDescription="Try adjusting your search or filters, or add a new family."
        onRowClick={(row) => router.push(`/families/${row.id}`)}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
      />
    </div>
  );
}
