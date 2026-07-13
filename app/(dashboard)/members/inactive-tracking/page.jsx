"use client";

import * as React from "react";
import { Download, Phone, Mail, StickyNote } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useInactiveMembers } from "@/hooks/useInactiveMembers";
import { useToast } from "@/contexts/ToastContext";
import { memberService } from "@/services/memberService";
import { formatDate, cn } from "@/lib/utils";
import { INACTIVE_TRACKING_MOCK } from "@/lib/mock/inactiveTrackingMockData";
import { InactiveFilterBar } from "@/components/inactive-tracking/InactiveFilterBar";
import { InactiveStatCards } from "@/components/inactive-tracking/InactiveStatCards";
import { InactiveSummaryPanel } from "@/components/inactive-tracking/InactiveSummaryPanel";
import { MinistryGroupWisePanel } from "@/components/inactive-tracking/MinistryGroupWisePanel";
import { InactiveQuickActionsPanel } from "@/components/inactive-tracking/InactiveQuickActionsPanel";
import { InactiveNotePanel } from "@/components/inactive-tracking/InactiveNotePanel";
import { CallMemberModal } from "@/components/inactive-tracking/CallMemberModal";
import { SendReminderModal } from "@/components/inactive-tracking/SendReminderModal";
import { FollowUpNoteModal } from "@/components/inactive-tracking/FollowUpNoteModal";

function monthsInactive(row) {
  // BEST-GUESS field name; falls back to computing from last_attended_on if present.
  if (row.inactive_since_months != null) return row.inactive_since_months;
  if (!row.last_attended_on) return null;
  const last = new Date(row.last_attended_on);
  if (Number.isNaN(last.getTime())) return null;
  return Math.max(0, Math.floor((Date.now() - last.getTime()) / (30 * 24 * 60 * 60 * 1000)));
}

export default function InactiveMemberTrackingPage() {
  const { toast } = useToast();
  const { members, totalCount, isLoading, page, pageSize, setPage, setSearch, filters, updateFilters, clearFilters, refetch } = useInactiveMembers();
  const mock = INACTIVE_TRACKING_MOCK;

  const [activeTab, setActiveTab] = React.useState("list");
  const [pendingFilters, setPendingFilters] = React.useState({});
  const [callModal, setCallModal] = React.useState({ open: false, member: null });
  const [reminderModal, setReminderModal] = React.useState({ open: false, member: null });
  const [noteModal, setNoteModal] = React.useState({ open: false, member: null });
  const [isExporting, setIsExporting] = React.useState(false);

  const handleFieldChange = (key, value) => setPendingFilters((prev) => ({ ...prev, [key]: value }));
  const handleApplyFilters = () => updateFilters(pendingFilters);
  const handleClear = () => { setPendingFilters({}); clearFilters(); };

  const handleMarkActive = async (member) => {
    if (!member) {
      toast({ variant: "error", title: "Select a member first" });
      return;
    }
    try {
      // REAL, confirmed — memberService.update() with membership_status.
      await memberService.update(member.id, { membership_status: "ACTIVE" });
      toast({ variant: "success", title: "Member marked as active" });
      refetch();
    } catch (error) {
      toast({ variant: "error", title: "Could not update member", description: error?.response?.data?.detail || error?.message });
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await memberService.exportExcel({ membership_status: "INACTIVE", ...filters });
      toast({ variant: "success", title: "Export started" });
    } catch {
      toast({ variant: "error", title: "Export failed" });
    } finally {
      setIsExporting(false);
    }
  };

  const columns = [
    { key: "full_name", header: "Member Name", render: (row) => <span className="font-medium text-ink">{row.full_name || `${row.first_name} ${row.last_name}`}</span> },
    { key: "membership_number", header: "Membership No.", render: (row) => row.membership_number || "—" },
    { key: "phone_number", header: "Phone", render: (row) => row.phone_number || "—" },
    { key: "last_attended_on", header: "Last Attended On", render: (row) => row.last_attended_on ? formatDate(row.last_attended_on) : "—" },
    {
      key: "inactive_since",
      header: "Inactive Since",
      render: (row) => {
        const months = monthsInactive(row);
        return <span className="font-medium text-warning-600">{months != null ? `${months} Months` : "—"}</span>;
      },
    },
    { key: "ministry_group", header: "Ministry / Group", render: (row) => row.ministry_group || "—" },
    {
      key: "status",
      header: "Status",
      render: (row) => {
        const months = monthsInactive(row);
        const isVery = months != null && months > 12;
        return <Badge variant={isVery ? "danger" : "warning"}>{isVery ? "Very Inactive" : "Inactive"}</Badge>;
      },
    },
    {
      key: "actions",
      header: "Action",
      render: (row) => (
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); setCallModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="Call member">
            <Phone className="h-3.5 w-3.5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setReminderModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="Send reminder">
            <Mail className="h-3.5 w-3.5" />
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
          <h1 className="font-display text-2xl font-bold text-ink">Inactive Member Tracking</h1>
          <p className="text-sm text-ink-subtle">Member Management &nbsp;›&nbsp; Inactive Member Tracking</p>
        </div>
        <Button variant="secondary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={handleExport} isLoading={isExporting}>
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <InactiveFilterBar onSearchChange={setSearch} onFieldChange={handleFieldChange} onClear={handleClear} onApply={handleApplyFilters} />

          <InactiveStatCards mock={mock} />

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            <div className="flex gap-6 border-b border-border px-4">
              {[{ key: "list", label: "Member List" }, { key: "notes", label: "Follow-up & Notes" }].map((tab) => (
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
                <div className="p-4">
                  <h3 className="text-base font-bold text-interactive-500">Inactive Members ({totalCount.toLocaleString()})</h3>
                </div>
                <Table
                  columns={columns}
                  data={members}
                  isLoading={isLoading}
                  selectable
                  emptyMessage="No inactive members found"
                  emptyDescription="Try adjusting your search or filters."
                  pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
                />
              </>
            ) : (
              <div className="p-8 text-center text-sm text-ink-subtle">
                Follow-up notes are logged per member via the note icon in the Member List — there's no
                dedicated cross-member notes feed endpoint yet to list them all here.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <InactiveSummaryPanel total={mock.cards.totalInactive} breakdown={mock.summaryBreakdown} />
          <MinistryGroupWisePanel items={mock.ministryGroupWise} onViewFullReport={() => toast({ variant: "info", title: "No full-report page exists yet" })} />
          <InactiveQuickActionsPanel
            onSendReminder={() => setReminderModal({ open: true, member: members[0] || null })}
            onAddNote={() => setNoteModal({ open: true, member: members[0] || null })}
            onMarkActive={() => handleMarkActive(members[0])}
            onExportReport={handleExport}
          />
          <InactiveNotePanel text={mock.note} />
        </div>
      </div>

      <CallMemberModal open={callModal.open} onOpenChange={(v) => setCallModal((s) => ({ ...s, open: v }))} member={callModal.member} />
      <SendReminderModal open={reminderModal.open} onOpenChange={(v) => setReminderModal((s) => ({ ...s, open: v }))} member={reminderModal.member} />
      <FollowUpNoteModal open={noteModal.open} onOpenChange={(v) => setNoteModal((s) => ({ ...s, open: v }))} member={noteModal.member} />
    </div>
  );
}
