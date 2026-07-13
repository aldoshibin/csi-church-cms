"use client";

import * as React from "react";
import { Download, Eye, StickyNote } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useMigratedMembers } from "@/hooks/useMigratedMembers";
import { useToast } from "@/contexts/ToastContext";
import { memberService } from "@/services/memberService";
import { migrationService } from "@/services/migrationService";
import { formatDate, cn } from "@/lib/utils";
import { MIGRATED_TRACKING_MOCK } from "@/lib/mock/migratedTrackingMockData";
import { MigratedFilterBar } from "@/components/migrated-tracking/MigratedFilterBar";
import { MigratedStatCards } from "@/components/migrated-tracking/MigratedStatCards";
import { MigrationSummaryPanel } from "@/components/migrated-tracking/MigrationSummaryPanel";
import { TopReceivingChurchesPanel } from "@/components/migrated-tracking/TopReceivingChurchesPanel";
import { MigratedQuickActionsPanel } from "@/components/migrated-tracking/MigratedQuickActionsPanel";
import { MigratedNotePanel } from "@/components/migrated-tracking/MigratedNotePanel";
import { MigratedMemberDetailsModal } from "@/components/migrated-tracking/MigratedMemberDetailsModal";
import { MigrationFollowUpNoteModal } from "@/components/migrated-tracking/MigrationFollowUpNoteModal";

const STATUS_VARIANT = { COMPLETED: "success", PENDING_CONFIRMATION: "warning", AWAITING_DETAILS: "info" };
const STATUS_LABEL = { COMPLETED: "Completed", PENDING_CONFIRMATION: "Pending Confirmation", AWAITING_DETAILS: "Awaiting Details" };

export default function MigratedMemberTrackingPage() {
  const { toast } = useToast();
  const { members, totalCount, isLoading, isUsingMockData, page, pageSize, setPage, setSearch, filters, updateFilters, clearFilters, refetch } = useMigratedMembers();
  const mock = MIGRATED_TRACKING_MOCK;

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
      await memberService.exportExcel({ membership_status: "TRANSFERRED_OUT", ...filters });
      toast({ variant: "success", title: "Export started" });
    } catch {
      toast({ variant: "error", title: "Export failed" });
    } finally {
      setIsExporting(false);
    }
  };

  const handleSendConfirmation = async (member) => {
    if (!member) {
      toast({ variant: "error", title: "No migrated members to notify" });
      return;
    }
    try {
      await migrationService.requestConfirmation(member.id);
      toast({ variant: "success", title: "Confirmation request sent" });
    } catch (error) {
      toast({ variant: "error", title: "Could not send request", description: error?.response?.data?.detail || error?.message });
    }
  };

  const columns = [
    { key: "full_name", header: "Member Name", render: (row) => <span className="font-medium text-ink">{row.full_name || `${row.first_name} ${row.last_name}`}</span> },
    { key: "membership_number", header: "Membership No.", render: (row) => row.membership_number || "—" },
    { key: "from_church", header: "From Church / Diocese", render: (row) => row.from_church || "—" },
    { key: "migrated_to", header: "Migrated To", render: (row) => <span className="text-interactive-500">{row.migrated_to || "—"}</span> },
    { key: "migrated_on", header: "Migrated On", render: (row) => row.migrated_on ? formatDate(row.migrated_on) : "—" },
    { key: "reason", header: "Reason", render: (row) => row.reason || "—" },
    {
      key: "status",
      header: "Status",
      render: (row) => <Badge variant={STATUS_VARIANT[row.migration_status] || "default"}>{STATUS_LABEL[row.migration_status] || "—"}</Badge>,
    },
    {
      key: "actions",
      header: "Action",
      render: (row) => (
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); setDetailsModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="View details">
            <Eye className="h-3.5 w-3.5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setNoteModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="Add follow-up note">
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
          <h1 className="font-display text-2xl font-bold text-ink">Migrated Member Tracking</h1>
          <p className="text-sm text-ink-subtle">Member Management &nbsp;›&nbsp; Migrated Member Tracking</p>
        </div>
        <Button variant="secondary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={handleExport} isLoading={isExporting}>
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <MigratedFilterBar onSearchChange={setSearch} onFieldChange={handleFieldChange} onClear={handleClear} onApply={handleApplyFilters} />

          <MigratedStatCards mock={mock} />

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            <div className="flex gap-6 border-b border-border px-4">
              {[{ key: "list", label: "Migrated Members" }, { key: "notes", label: "Follow-up & Notes" }].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative py-3 text-sm font-medium transition-colors",
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
                  <h3 className="text-base font-bold text-interactive-500">Migrated Members ({totalCount.toLocaleString()})</h3>
                  {isUsingMockData && (
                    <span className="rounded-full bg-warning-50 px-2.5 py-0.5 text-xs font-medium text-warning-600">
                      Showing sample data — migration backend not reachable yet
                    </span>
                  )}
                </div>
                <Table
                  columns={columns}
                  data={members}
                  isLoading={isLoading}
                  selectable
                  emptyMessage="No migrated members found"
                  emptyDescription="Try adjusting your search or filters."
                  pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
                />
              </>
            ) : (
              <div className="p-8 text-center text-sm text-ink-subtle">
                Follow-up notes are logged per member via the note icon in Migrated Members — there's no
                dedicated cross-member notes feed endpoint yet to list them all here.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <MigrationSummaryPanel total={mock.cards.totalMigrated} breakdown={mock.summaryBreakdown} />
          <TopReceivingChurchesPanel items={mock.topReceivingChurches} onViewFullReport={() => toast({ variant: "info", title: "No full-report page exists yet" })} />
          <MigratedQuickActionsPanel
            onSendConfirmation={() => handleSendConfirmation(members[0])}
            onFollowUp={() => setNoteModal({ open: true, member: members[0] || null })}
            onExport={handleExport}
          />
          <MigratedNotePanel text={mock.note} />
        </div>
      </div>

      <MigratedMemberDetailsModal open={detailsModal.open} onOpenChange={(v) => setDetailsModal((s) => ({ ...s, open: v }))} member={detailsModal.member} onSaved={refetch} />
      <MigrationFollowUpNoteModal open={noteModal.open} onOpenChange={(v) => setNoteModal((s) => ({ ...s, open: v }))} member={noteModal.member} />
    </div>
  );
}
