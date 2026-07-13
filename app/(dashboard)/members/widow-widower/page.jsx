"use client";

import * as React from "react";
import { Download, Eye, StickyNote, Phone } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useWidowWidowerMembers } from "@/hooks/useWidowWidowerMembers";
import { useToast } from "@/contexts/ToastContext";
import { memberService } from "@/services/memberService";
import { formatDate, cn } from "@/lib/utils";
import { WIDOW_WIDOWER_MOCK } from "@/lib/mock/widowWidowerMockData";
import { WidowWidowerFilterBar } from "@/components/widow-widower-registry/WidowWidowerFilterBar";
import { WidowWidowerStatCards } from "@/components/widow-widower-registry/WidowWidowerStatCards";
import { DistributionDonutPanel } from "@/components/widow-widower-registry/DistributionDonutPanel";
import { WidowWidowerQuickActionsPanel } from "@/components/widow-widower-registry/WidowWidowerQuickActionsPanel";
import { WidowWidowerNotePanel } from "@/components/widow-widower-registry/WidowWidowerNotePanel";
import { WidowWidowerDetailsModal } from "@/components/widow-widower-registry/WidowWidowerDetailsModal";
import { WidowWidowerNoteModal } from "@/components/widow-widower-registry/WidowWidowerNoteModal";
import { UpcomingMilestonesTab } from "@/components/widow-widower-registry/tabs/UpcomingMilestonesTab";
import { SupportAssistanceTab } from "@/components/widow-widower-registry/tabs/SupportAssistanceTab";
import { FollowUpNotesTab } from "@/components/widow-widower-registry/tabs/FollowUpNotesTab";
import { MilestoneDetailsModal } from "@/components/widow-widower-registry/tabs/MilestoneDetailsModal";
import { AddMilestoneModal } from "@/components/widow-widower-registry/tabs/AddMilestoneModal";
import { AddFollowUpNoteModal } from "@/components/widow-widower-registry/tabs/AddFollowUpNoteModal";
import { WW_UPCOMING_MILESTONES_MOCK, WW_SUPPORT_ASSISTANCE_MOCK, WW_FOLLOW_UP_NOTES_MOCK } from "@/lib/mock/widowWidowerTabsMockData";

const TABS = [
  { key: "list", label: "Registry Members" },
  { key: "milestones", label: "Upcoming Milestones" },
  { key: "support", label: "Support & Assistance" },
  { key: "notes", label: "Follow-up & Notes" },
];

const GENDER_LABEL = { WIDOW: "Widow", WIDOWER: "Widower" };
const GENDER_BADGE_VARIANT = { WIDOW: "accent", WIDOWER: "info" };

export default function WidowWidowerRegistryPage() {
  const { toast } = useToast();
  const { members, totalCount, isLoading, isUsingMockData, page, pageSize, setPage, setSearch, filters, updateFilters, clearFilters, refetch } = useWidowWidowerMembers();
  const mock = WIDOW_WIDOWER_MOCK;

  const [activeTab, setActiveTab] = React.useState("list");
  const [pendingFilters, setPendingFilters] = React.useState({});
  const [detailsModal, setDetailsModal] = React.useState({ open: false, member: null });
  const [noteModal, setNoteModal] = React.useState({ open: false, member: null });
  const [milestoneDetails, setMilestoneDetails] = React.useState({ open: false, milestone: null });
  const [addMilestoneOpen, setAddMilestoneOpen] = React.useState(false);
  const [addTabNoteOpen, setAddTabNoteOpen] = React.useState(false);
  const [isExporting, setIsExporting] = React.useState(false);

  const handleFieldChange = (key, value) => setPendingFilters((prev) => ({ ...prev, [key]: value }));
  const handleApplyFilters = () => updateFilters(pendingFilters);
  const handleClear = () => { setPendingFilters({}); clearFilters(); };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await memberService.exportExcel({ is_widow_widower: true, ...filters });
      toast({ variant: "success", title: "Export started" });
    } catch {
      toast({ variant: "error", title: "Export failed" });
    } finally {
      setIsExporting(false);
    }
  };

  const handleCall = (row) => {
    if (!row.phone_number) {
      toast({ variant: "error", title: "No phone number on file" });
      return;
    }
    window.location.href = `tel:${row.phone_number.replace(/\s+/g, "")}`;
  };

  const columns = [
    { key: "full_name", header: "Member Name", render: (row) => <span className="font-medium text-ink">{row.full_name}</span> },
    { key: "membership_number", header: "Membership No.", render: (row) => row.membership_number || "—" },
    { key: "gender", header: "Gender", render: (row) => <Badge variant={GENDER_BADGE_VARIANT[row.gender] || "default"}>{GENDER_LABEL[row.gender] || "—"}</Badge> },
    { key: "age", header: "Age", render: (row) => row.age ?? "—" },
    { key: "spouse_name", header: "Spouse Name", render: (row) => row.spouse_name || "—" },
    {
      key: "membership_status",
      header: "Membership Status",
      render: (row) => <Badge variant={row.membership_status === "INACTIVE" ? "default" : "success"}>{row.membership_status === "INACTIVE" ? "Inactive" : "Active"}</Badge>,
    },
    { key: "registered_on", header: "Registered On", render: (row) => row.registered_on ? formatDate(row.registered_on) : "—" },
    { key: "ministry_group", header: "Ministry / Group", render: (row) => row.ministry_group || "—" },
    {
      key: "actions",
      header: "Action",
      render: (row) => (
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); setDetailsModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="View / edit details">
            <Eye className="h-3.5 w-3.5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setNoteModal({ open: true, member: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="Add support / assistance note">
            <StickyNote className="h-3.5 w-3.5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleCall(row); }} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-500 hover:bg-surface-muted" aria-label="Call member">
            <Phone className="h-3.5 w-3.5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Widow/Widower Registry</h1>
          <p className="text-sm text-ink-subtle">Member Management &nbsp;›&nbsp; Widow/Widower Registry</p>
        </div>
        <Button variant="secondary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={handleExport} isLoading={isExporting}>
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <WidowWidowerFilterBar onSearchChange={setSearch} onFieldChange={handleFieldChange} onClear={handleClear} onApply={handleApplyFilters} />

          <WidowWidowerStatCards mock={mock} />

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            {/* <div className="flex gap-6 overflow-x-auto border-b border-border px-4">
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
            </div> */}
            <div className="flex border-b border-gray-200 px-4 gap-2">
              {TABS.map((tab) => {
                const active = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={cn(
                      "relative px-6 py-4 text-[15px] font-medium transition-all duration-200",
                      active
                        ? "text-teal-600 border-b-[3px] border-teal-500 rounded-b-xl"
                        : "text-slate-700 border-b-[3px] border-transparent hover:text-slate-900"
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {activeTab === "list" && (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2 p-4">
                  <h3 className="text-base font-bold text-interactive-500">Widow / Widower Members ({totalCount.toLocaleString()})</h3>
                  {/* {isUsingMockData && (
                    <span className="rounded-full bg-warning-50 px-2.5 py-0.5 text-xs font-medium text-warning-600">
                      Showing sample data — no confirmed "widow/widower" filter on the backend yet
                    </span>
                  )} */}
                </div>
                <Table
                  columns={columns}
                  data={members}
                  isLoading={isLoading}
                  selectable
                  emptyMessage="No widow/widower members found"
                  emptyDescription="Try adjusting your search or filters."
                  pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
                />
              </>
            )}

            {activeTab === "milestones" && (
              <UpcomingMilestonesTab
                milestones={WW_UPCOMING_MILESTONES_MOCK}
                onAddMilestone={() => setAddMilestoneOpen(true)}
                onView={(m) => setMilestoneDetails({ open: true, milestone: m })}
              />
            )}

            {activeTab === "support" && (
              <SupportAssistanceTab
                items={WW_SUPPORT_ASSISTANCE_MOCK}
                onAction={() => setAddTabNoteOpen(true)}
              />
            )}

            {activeTab === "notes" && (
              <FollowUpNotesTab entries={WW_FOLLOW_UP_NOTES_MOCK} onAddNote={() => setAddTabNoteOpen(true)} />
            )}
          </div>
        </div>

        <div className="space-y-4">
          <DistributionDonutPanel title="Gender Distribution" total={mock.cards.totalWidows.value + mock.cards.totalWidowers.value} breakdown={mock.genderDistribution} />
          <DistributionDonutPanel title="Age Group Distribution" total={mock.cards.totalMembers} breakdown={mock.ageDistribution} />
          <WidowWidowerQuickActionsPanel
            onAddMember={() => setDetailsModal({ open: true, member: null })}
            onUpdateDetails={() => setDetailsModal({ open: true, member: members[0] || null })}
            onAddNote={() => setNoteModal({ open: true, member: members[0] || null })}
            onExport={handleExport}
          />
          <WidowWidowerNotePanel text={mock.note} />
        </div>
      </div>

      <WidowWidowerDetailsModal open={detailsModal.open} onOpenChange={(v) => setDetailsModal((s) => ({ ...s, open: v }))} member={detailsModal.member} onSaved={refetch} />
      <WidowWidowerNoteModal open={noteModal.open} onOpenChange={(v) => setNoteModal((s) => ({ ...s, open: v }))} member={noteModal.member} />
      <MilestoneDetailsModal open={milestoneDetails.open} onOpenChange={(v) => setMilestoneDetails((s) => ({ ...s, open: v }))} milestone={milestoneDetails.milestone} />
      <AddMilestoneModal open={addMilestoneOpen} onOpenChange={setAddMilestoneOpen} />
      <AddFollowUpNoteModal open={addTabNoteOpen} onOpenChange={setAddTabNoteOpen} />
    </div>
  );
}
