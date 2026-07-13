"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Download, Search, Plus, ChevronDown, List, Grid3x3, Eye, MoreVertical } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge, STATUS_VARIANT_MAP } from "@/components/ui/Badge";
import { MemberAvatar } from "@/components/members/MemberAvatar";
import { MemberDirectoryFilterBar } from "@/components/member-directory/MemberDirectoryFilterBar";
import { MemberDirectoryTabs } from "@/components/member-directory/MemberDirectoryTabs";
import { MemberDirectorySummaryPanel } from "@/components/member-directory/MemberDirectorySummaryPanel";
import { MembersByCategoryPanel } from "@/components/member-directory/MembersByCategoryPanel";
import { MembersByBranchPanel } from "@/components/member-management/MembersByBranchPanel";
import { MemberDirectoryQuickActions } from "@/components/member-directory/MemberDirectoryQuickActions";
import { useMembers } from "@/hooks/useMembers";
import { useToast } from "@/contexts/ToastContext";
import { memberService } from "@/services/memberService";
import { formatDate } from "@/lib/utils";
import { MEMBER_DIRECTORY_MOCK } from "@/lib/mock/memberDirectoryMockData";

const CATEGORY_BADGE_VARIANT = { SPOUSE: "success", CHILD: "default", INDIVIDUAL: "accent" };


export default function MemberDirectoryPage() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    members, totalCount, isLoading, page, pageSize, setPage,
    setSearch, filters, updateFilters, ordering, handleSortChange,
  } = useMembers();

  const mock = MEMBER_DIRECTORY_MOCK;
  const [activeTab, setActiveTab] = React.useState("all");
  const [isExporting, setIsExporting] = React.useState(false);
  const [isPrinting, setIsPrinting] = React.useState(false);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setPage(1);
    if (key === "all") updateFilters({ membership_status: undefined, joined_date__gte: undefined, is_baptized: undefined });
    if (key === "active") updateFilters({ membership_status: "ACTIVE", joined_date__gte: undefined, is_baptized: undefined });
    if (key === "inactive") updateFilters({ membership_status: "INACTIVE", joined_date__gte: undefined, is_baptized: undefined });
    // BEST-GUESS filter params below — not confirmed against members/views.py's MemberFilter.
    if (key === "new_this_year") updateFilters({ membership_status: undefined, joined_date__gte: `${new Date().getFullYear()}-01-01`, is_baptized: undefined });
    if (key === "baptized") updateFilters({ membership_status: undefined, joined_date__gte: undefined, is_baptized: true });
  };

  const handleReset = () => {
    handleTabChange("all");
    setSearch("");
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await memberService.exportExcel(filters);
    } catch {
      toast({ variant: "error", title: "Export failed", description: "Could not generate the export file." });
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = async () => {
    setIsPrinting(true);
    try {
      await memberService.exportPdf(filters);
    } catch {
      toast({ variant: "error", title: "Could not print list", description: "Could not generate the PDF." });
    } finally {
      setIsPrinting(false);
    }
  };

  const columns = [
    {
      key: "full_name",
      header: "Member",
      render: (row) => (
        <div className="flex items-center gap-3">
          <MemberAvatar photo={row.photo} fullName={row.full_name} />
          <div>
            <p className="font-medium text-ink">{row.full_name}</p>
            <p className="text-xs text-ink-subtle">{row.email || "—"}</p>
          </div>
        </div>
      ),
    },
    { key: "membership_number", header: "Member ID", render: (row) => row.membership_number || "—" },
    {
      key: "church",
      header: "Branch / Church",
      render: (row) => (
        <div>
          <p className="text-ink">{row.church_name || "—"}</p>
          <p className="text-xs text-ink-subtle">{row.branch_name || ""}</p>
        </div>
      ),
    },
    {
      key: "member_category",
      header: "Member Category",
      render: (row) =>
        row.member_category === "FAMILY_HEAD" ? (
          <span className="text-sm font-semibold text-ink">Family Head</span>
        ) : (
          <Badge variant={CATEGORY_BADGE_VARIANT[row.member_category] || "info"}>
            {row.member_category ? row.member_category.charAt(0) + row.member_category.slice(1).toLowerCase() : "Individual"}
          </Badge>
        ),
    },
    { key: "phone_number", header: "Phone", render: (row) => row.phone_number || "—" },
    {
      key: "membership_status",
      header: "Status",
      render: (row) => (
        <Badge variant={STATUS_VARIANT_MAP[row.membership_status] || "default"}>
          {row.membership_status?.replace(/_/g, " ") || "Active"}
        </Badge>
      ),
    },
    { key: "joined_date", header: "Joined On", sortable: true, render: (row) => formatDate(row.joined_date) },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); router.push(`/members/${row.id}`); }}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
            aria-label={`View ${row.full_name}`}
          >
            <Eye className="h-4 w-4" />
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
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Member Directory</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/members" className="text-interactive-500 hover:underline">Member Management</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Member Directory</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={handleExport} isLoading={isExporting}>
            Export
          </Button>
          <Button variant="secondary" size="sm" leftIcon={<Search className="h-4 w-4" />} disabled title="Use the filter bar below for now">
            Advanced Search
          </Button>
          <Link href="/members/individual-registration">
            <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>Add New Member</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <MemberDirectoryFilterBar
            onSearchChange={setSearch}
            onStatusChange={(value) => updateFilters({ membership_status: value || undefined })}
            onBranchChange={(value) => updateFilters({ church: value || undefined })}
            onGenderChange={(value) => updateFilters({ gender: value || undefined })}
            onReset={handleReset}
          />

          <MemberDirectoryTabs tabs={mock.tabs} activeTab={activeTab} onChange={handleTabChange} />

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4">
              <p className="text-sm text-ink-subtle">
                Showing {members.length ? (page - 1) * pageSize + 1 : 0} to {(page - 1) * pageSize + members.length} of {totalCount.toLocaleString()} members
              </p>
              <div className="flex items-center gap-2">
                <button className="flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium text-ink hover:bg-surface-muted">
                  Bulk Actions <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md bg-interactive-500 text-white" aria-label="List view">
                  <List className="h-4 w-4" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Grid view">
                  <Grid3x3 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Table
              columns={columns}
              data={members}
              isLoading={isLoading}
              selectable
              emptyMessage="No members found"
              emptyDescription="Try adjusting your search or filters."
              sortKey={ordering.replace("-", "")}
              sortDirection={ordering.startsWith("-") ? "desc" : "asc"}
              onSortChange={handleSortChange}
              onRowClick={(row) => router.push(`/members/${row.id}`)}
              pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <MemberDirectorySummaryPanel summary={mock.summary} />
          <MembersByCategoryPanel total={mock.membersByCategory.total} breakdown={mock.membersByCategory.breakdown} />
          <MembersByBranchPanel branches={mock.membersByBranch} />
          <MemberDirectoryQuickActions onPrint={handlePrint} isPrinting={isPrinting} />
        </div>
      </div>
    </div>
  );
}
