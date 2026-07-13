"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Users, ShieldCheck, ShieldOff, UserPlus, Droplets, Home, List, Grid3x3, ChevronDown, Eye, MoreVertical } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Badge, STATUS_VARIANT_MAP } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { MemberForm } from "@/components/members/MemberForm";
import { MemberAvatar } from "@/components/members/MemberAvatar";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { MemberFilterBar } from "@/components/member-management/MemberFilterBar";
import { MemberQuickActions } from "@/components/member-management/MemberQuickActions";
import { MemberStatisticsPanel } from "@/components/member-management/MemberStatisticsPanel";
import { MembersByBranchPanel } from "@/components/member-management/MembersByBranchPanel";
import { useMembers } from "@/hooks/useMembers";
import { useToast } from "@/contexts/ToastContext";
import { memberService } from "@/services/memberService";
import { formatDate } from "@/lib/utils";
import { MEMBER_MANAGEMENT_MOCK } from "@/lib/mock/memberManagementMockData";
import { cn } from "@/lib/utils";

export default function MembersPage() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    members, totalCount, isLoading, page, pageSize, setPage,
    setSearch, filters, updateFilters, ordering, handleSortChange, refetch,
  } = useMembers();

  const mock = MEMBER_MANAGEMENT_MOCK;
  const [activeTab, setActiveTab] = React.useState("Member Directory");
  const [formOpen, setFormOpen] = React.useState(false);
  const [editingMember, setEditingMember] = React.useState(null);

  const columns = [
    {
      key: "full_name",
      header: "Member Name",
      sortable: true,
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
      key: "member_type",
      header: "Member Type",
      render: (row) => <Badge variant="info">{row.member_type || "Individual"}</Badge>,
    },
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
            onClick={(e) => { e.stopPropagation(); setEditingMember(row); setFormOpen(true); }}
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
      {/* Header */}
      <p className="flex items-center gap-1.5 text-sm">
        <Link href="/parish-administration" className="text-interactive-500 hover:underline">
          Parish Administration
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
        <span className="text-ink-subtle">Member Management</span>
      </p>

      {/* 6 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <ParishStatCard label="Total Members" value={mock.cards.totalMembers.value.toLocaleString()} sublabel={mock.cards.totalMembers.delta} icon={Users} />
        <ParishStatCard label="Active Members" value={mock.cards.activeMembers.value.toLocaleString()} sublabel={mock.cards.activeMembers.delta} icon={ShieldCheck} />
        <ParishStatCard label="Inactive Members" value={mock.cards.inactiveMembers.value.toLocaleString()} sublabel={mock.cards.inactiveMembers.delta} icon={ShieldOff} />
        <ParishStatCard label={mock.cards.newMembersThisMonth.label} value={mock.cards.newMembersThisMonth.value} sublabel={mock.cards.newMembersThisMonth.delta} icon={UserPlus} />
        <ParishStatCard label="Baptized Members" value={mock.cards.baptizedMembers.value.toLocaleString()} sublabel={mock.cards.baptizedMembers.delta} icon={Droplets} />
        <ParishStatCard label="Families" value={mock.cards.families.value.toLocaleString()} sublabel={mock.cards.families.delta} icon={Home} />
      </div>

      <MemberFilterBar
        onSearchChange={setSearch}
        onStatusChange={(value) => updateFilters({ membership_status: value || undefined })}
        onBranchChange={(value) => updateFilters({ church: value || undefined })}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <div className="flex gap-6 border-b border-border">
            {mock.tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "relative pb-3 text-sm font-medium transition-colors",
                    isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {tab}
                  {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
                </button>
              );
            })}
          </div>

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4">
              <h3 className="text-base font-bold text-interactive-500">
                Member Directory <span className="text-ink-subtle">({totalCount.toLocaleString()})</span>
              </h3>
              <div className="flex items-center gap-2">
                <button className="flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium text-ink hover:bg-surface-muted">
                  Bulk Actions
                  <ChevronDown className="h-3.5 w-3.5" />
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
              emptyDescription="Try adjusting your search or filters, or add a new member."
              sortKey={ordering.replace("-", "")}
              sortDirection={ordering.startsWith("-") ? "desc" : "asc"}
              onSortChange={handleSortChange}
              onRowClick={(row) => router.push(`/members/${row.id}`)}
              pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <MemberQuickActions actions={mock.quickActions} onAddMember={() => { setEditingMember(null); setFormOpen(true); }} />
          <MemberStatisticsPanel total={mock.memberStatistics.total} breakdown={mock.memberStatistics.breakdown} />
          <MembersByBranchPanel branches={mock.membersByBranch} />
        </div>
      </div>

      <Modal
        open={formOpen}
        onOpenChange={setFormOpen}
        title={editingMember ? "Edit Member" : "Register New Member"}
        size="lg"
      >
        <MemberForm
          member={editingMember}
          onCancel={() => setFormOpen(false)}
          onSuccess={() => { setFormOpen(false); refetch(); }}
        />
      </Modal>
    </div>
  );
}
