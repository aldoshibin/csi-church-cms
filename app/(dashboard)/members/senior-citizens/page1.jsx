"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Download, Eye, StickyNote } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useSeniorMembers } from "@/hooks/useSeniorMembers";
import { useToast } from "@/contexts/ToastContext";
import { memberService } from "@/services/memberService";
import { formatDate, cn } from "@/lib/utils";
import { SENIOR_REGISTRY_MOCK } from "@/lib/mock/seniorRegistryMockData";
import { SeniorFilterBar } from "@/components/senior-registry/SeniorFilterBar";
import { SeniorStatCards } from "@/components/senior-registry/SeniorStatCards";
import { AgeGroupDistributionPanel } from "@/components/senior-registry/AgeGroupDistributionPanel";
import { MinistryGroupWisePanel } from "@/components/senior-registry/MinistryGroupWisePanel";
import { SeniorQuickActionsPanel } from "@/components/senior-registry/SeniorQuickActionsPanel";
import { SeniorNotePanel } from "@/components/senior-registry/SeniorNotePanel";
import { SeniorMemberDetailsModal } from "@/components/senior-registry/SeniorMemberDetailsModal";
import { SupportNoteModal } from "@/components/senior-registry/SupportNoteModal";

const TABS = [
  { key: "list", label: "Senior Members" },
  { key: "milestones", label: "Upcoming Milestones" },
  { key: "health", label: "Health & Assistance" },
  { key: "notes", label: "Follow-up & Notes" },
];

export default function SeniorCitizenRegistryPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { members, totalCount, isLoading, isUsingMockData, page, pageSize, setPage, setSearch, filters, updateFilters, clearFilters, refetch } = useSeniorMembers();
  const mock = SENIOR_REGISTRY_MOCK;

  const [activeTab, setActiveTab] = React.useState("list");
  const [pendingFilters, setPendingFilters] = React.useState({});
  const [detailsModal, setDetailsModal] = React.useState({ open: false, member: null });
  const [noteModal, setNoteModal] = React.useState({ open: false, member: null });
  const [isExporting, setIsExporting] = React.useState(false);

  const handleFieldChange = (key, value) => setPendingFilters((prev) => ({ ...prev, [key]: value }));
  const handleApplyFilters = () => updateFilters(pendingFilters);
  const handleClear = () => { setPendingFilters({}); clearFilters(); };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await memberService.exportExcel({ age_min: 60, ...filters });
      toast({ variant: "success", title: "Export started" });
    } catch {
      toast({ variant: "error", title: "Export failed" });
    } finally {
      setIsExporting(false);
    }
  };

  const columns = [
    { key: "full_name", header: "Member Name", render: (row) => <span className="font-medium text-ink">{row.full_name}</span> },
    { key: "membership_number", header: "Membership No.", render: (row) => row.membership_number || "—" },
    { key: "date_of_birth", header: "Date of Birth", render: (row) => row.date_of_birth ? formatDate(row.date_of_birth) : "—" },
    { key: "age", header: "Age", render: (row) => row.age ?? "—" },
    { key: "gender", header: "Gender", render: (row) => (row.gender === "MALE" ? "Male" : row.gender === "FEMALE" ? "Female" : "Other") },
    { key: "ministry_group", header: "Ministry / Group", render: (row) => row.ministry_group || "—" },
    { key: "phone_number", header: "Phone", render: (row) => row.phone_number || "—" },
    {
      key: "status",
      header: "Status",
      render: (row) => <Badge variant={row.membership_status === "INACTIVE" ? "default" : "success"}>{row.membership_status === "INACTIVE" ? "Inactive" : "Active"}</Badge>,
    },
    {
      key: "actions",
      header: "Action",
      render: (row) => (
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); setDetailsModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="View details">
            <Eye className="h-3.5 w-3.5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setNoteModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="Add assistance / support note">
            <StickyNote className="h-3.5 w-3.5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Senior Citizen Registry</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members" className="hover:underline">Member Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Senior Citizen Registry</span>
          </nav>
        </div>
        <Button variant="secondary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={handleExport} isLoading={isExporting}>
          Export Report
        </Button>
      </div>

      <SeniorFilterBar onSearchChange={setSearch} onFieldChange={handleFieldChange} onClear={handleClear} onApply={handleApplyFilters} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <SeniorStatCards mock={mock} />

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            <div className="flex gap-6 overflow-x-auto border-b border-border px-4">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative whitespace-nowrap py-3 text-sm font-medium transition-colors",
                    activeTab === tab.key ? "text-interactive-500" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.key && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
                </button>
              ))}
            </div>

            {activeTab === "list" ? (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2 p-4">
                  <h3 className="text-base font-bold text-interactive-500">Senior Members ({totalCount.toLocaleString()})</h3>
                  {isUsingMockData && (
                    <span className="rounded-full bg-warning-50 px-2.5 py-0.5 text-xs font-medium text-warning-600">
                      Showing sample data — no confirmed "senior member" filter on the backend yet
                    </span>
                  )}
                </div>
                <Table
                  columns={columns}
                  data={members}
                  isLoading={isLoading}
                  selectable
                  emptyMessage="No senior members found"
                  emptyDescription="Try adjusting your search or filters."
                  pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
                />
              </>
            ) : (
              <div className="p-8 text-center text-sm text-ink-subtle">
                {activeTab === "milestones" && "Upcoming birthday/anniversary milestones for senior members — no dedicated endpoint exists yet; see the Birthdays & Anniversaries module for the closest existing feature."}
                {activeTab === "health" && "Health & Assistance records — no HealthInfo model exists yet. \"Update Health Information\" in Quick Actions calls a best-guess endpoint (services/seniorCareService.js) that has nothing to list here yet."}
                {activeTab === "notes" && "Support notes are logged per member via the note icon in Senior Members — there's no cross-member notes feed endpoint yet to list them all here."}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <AgeGroupDistributionPanel total={mock.cards.totalSenior} breakdown={mock.ageDistribution} />
          <MinistryGroupWisePanel items={mock.ministryGroupWise} onViewFullReport={() => toast({ variant: "info", title: "No full-report page exists yet" })} />
          <SeniorQuickActionsPanel
            onAddMember={() => router.push("/members/individual-registration")}
            onUpdateHealth={() => toast({ variant: "info", title: "Select a member from the table to update health info" })}
            onAddNote={() => setNoteModal({ open: true, member: members[0] || null })}
            onExport={handleExport}
          />
          <SeniorNotePanel text={mock.note} />
        </div>
      </div>

      <SeniorMemberDetailsModal open={detailsModal.open} onOpenChange={(v) => setDetailsModal((s) => ({ ...s, open: v }))} member={detailsModal.member} />
      <SupportNoteModal open={noteModal.open} onOpenChange={(v) => setNoteModal((s) => ({ ...s, open: v }))} member={noteModal.member} />
    </div>
  );
}
