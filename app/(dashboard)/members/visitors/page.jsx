"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Download, Plus, Users, UserPlus, RefreshCw, UserCheck, Eye, Pencil, Trash2 } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { useVisitors } from "@/hooks/useVisitors";
import { useToast } from "@/contexts/ToastContext";
import { visitorService } from "@/services/visitorService";
import { formatDate } from "@/lib/utils";
import { VISITOR_MANAGEMENT_MOCK } from "@/lib/mock/visitorManagementMockData";
import { VisitorFilterBar } from "@/components/visitors/VisitorFilterBar";
import { VisitorFormModal } from "@/components/visitors/VisitorFormModal";
import { VisitorSourcesPanel } from "@/components/visitors/VisitorSourcesPanel";
import { FollowUpOverviewPanel } from "@/components/visitors/FollowUpOverviewPanel";
import { VisitorQuickActionsPanel } from "@/components/visitors/VisitorQuickActionsPanel";
import { RecentNotesPanel } from "@/components/visitors/RecentNotesPanel";
import { VisitorCheckInWidget } from "@/components/visitors/VisitorCheckInWidget";
import { StatusDot, VISITOR_STATUS_COLOR, FOLLOW_UP_COLOR } from "@/components/visitors/StatusDot";
import { VISITOR_STATUS_OPTIONS, FOLLOW_UP_STATUS_OPTIONS } from "@/utils/constants";

const STATUS_LABEL = Object.fromEntries(VISITOR_STATUS_OPTIONS.map((o) => [o.value, o.label]));
const FOLLOW_UP_LABEL = Object.fromEntries(FOLLOW_UP_STATUS_OPTIONS.map((o) => [o.value, o.label]));

export default function VisitorManagementPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { visitors, totalCount, isLoading, isUsingMockData, page, pageSize, setPage, setSearch, updateFilters, resetFilters, refetch } = useVisitors();
  const mock = VISITOR_MANAGEMENT_MOCK;

  const [formOpen, setFormOpen] = React.useState(false);
  const [editingVisitor, setEditingVisitor] = React.useState(null);
  const [isExporting, setIsExporting] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({ from: undefined, to: undefined });
  const checkInRef = React.useRef(null);

  const handleDelete = async (row) => {
    if (!confirm(`Remove ${row.full_name} from the visitor list?`)) return;
    try {
      await visitorService.remove(row.id);
      toast({ variant: "success", title: "Visitor removed" });
      refetch();
    } catch (error) {
      toast({ variant: "error", title: "Could not remove visitor", description: error?.response?.data?.detail || error?.message });
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      // BEST-GUESS — no confirmed export endpoint; mirrors memberService.exportExcel's shape.
      await visitorService.list({ export: "excel" });
      toast({ variant: "success", title: "Export requested" });
    } catch {
      toast({ variant: "error", title: "Export failed", description: "No export endpoint exists yet for visitors." });
    } finally {
      setIsExporting(false);
    }
  };

  const columns = [
    {
      key: "full_name",
      header: "Name",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="font-medium text-ink">{row.full_name}</span>
          <StatusDot color={VISITOR_STATUS_COLOR[row.status]} label={row.status === "RETURNING_VISITOR" ? "Returning" : "New"} />
        </div>
      ),
    },
    {
      key: "contact",
      header: "Contact",
      render: (row) => (
        <div>
          <p className="text-ink">{row.phone || "—"}</p>
          <p className="text-xs text-ink-subtle">{row.email || ""}</p>
        </div>
      ),
    },
    {
      key: "visit_date",
      header: "Visit Date",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.visit_date)}</p>
          <p className="text-xs text-ink-subtle">{row.visit_time || ""}</p>
        </div>
      ),
    },
    { key: "source", header: "Source", render: (row) => row.source || "—" },
    {
      key: "status",
      header: "Status",
      render: (row) => <StatusDot color={VISITOR_STATUS_COLOR[row.status]} label={STATUS_LABEL[row.status] || "New Visitor"} />,
    },
    {
      key: "follow_up_status",
      header: "Follow-up",
      render: (row) => <StatusDot color={FOLLOW_UP_COLOR[row.follow_up_status]} label={FOLLOW_UP_LABEL[row.follow_up_status] || "Pending"} />,
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); setEditingVisitor(row); setFormOpen(true); }} className="flex h-8 w-8 items-center justify-center rounded-md text-interactive-500 hover:bg-surface-muted" aria-label={`View ${row.full_name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setEditingVisitor(row); setFormOpen(true); }} className="flex h-8 w-8 items-center justify-center rounded-md text-interactive-500 hover:bg-surface-muted" aria-label={`Edit ${row.full_name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleDelete(row); }} className="flex h-8 w-8 items-center justify-center rounded-md text-danger-500 hover:bg-surface-muted" aria-label={`Remove ${row.full_name}`}>
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Visitor Management</h1>
          <p className="text-sm text-ink-subtle">Track and manage church visitors</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={handleExport} isLoading={isExporting}>
            Export
          </Button>
          <Link href="/members/visitors/add">
            <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>
              Add New Visitor
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Total Visitors", ...mock.cards.totalVisitors, icon: Users },
          { label: "New Visitors", ...mock.cards.newVisitors, icon: UserPlus },
          { label: "Returning Visitors", ...mock.cards.returningVisitors, icon: RefreshCw },
          { label: "Visitors Converted", ...mock.cards.visitorsConverted, icon: UserCheck },
        ].map((card) => (
          <div key={card.label} className="rounded-lg border border-border bg-white p-4 shadow-card">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-ink-subtle">{card.label}</p>
                <p className="mt-0.5 text-xl font-bold text-ink font-display">{card.value}</p>
                <p className="text-xs text-ink-subtle">{card.sublabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <VisitorFilterBar
            onSearchChange={setSearch}
            onStatusChange={(value) => updateFilters({ status: value || undefined })}
            onSourceChange={(value) => updateFilters({ source: value || undefined })}
            onDateRangeChange={(updater) => {
              setDateRange((prev) => {
                const next = updater(prev);
                updateFilters({ visit_date_from: next.from || undefined, visit_date_to: next.to || undefined });
                return next;
              });
            }}
            onReset={resetFilters}
          />

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4">
              <h3 className="text-base font-bold text-interactive-500">Visitor List</h3>
              {isUsingMockData && (
                <span className="rounded-full bg-warning-50 px-2.5 py-0.5 text-xs font-medium text-warning-600">
                  Showing sample data — /visitors/ endpoint not reachable yet
                </span>
              )}
            </div>
            <Table
              columns={columns}
              data={visitors}
              isLoading={isLoading}
              emptyMessage="No visitors found"
              emptyDescription="Try adjusting your search or filters, or add a new visitor."
              pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            />
          </div>

          <VisitorCheckInWidget ref={checkInRef} todayCount={mock.checkIn.today} weekCount={mock.checkIn.thisWeek} />
        </div>

        <div className="space-y-4">
          <VisitorSourcesPanel total={mock.visitorSources.total} breakdown={mock.visitorSources.breakdown} />
          <FollowUpOverviewPanel items={mock.followUpOverview} />
          <VisitorQuickActionsPanel
            onAddVisitor={() => router.push("/members/visitors/add")}
            onScrollToCheckIn={() => checkInRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
          />
          <RecentNotesPanel notes={mock.recentNotes} />
        </div>
      </div>

      <VisitorFormModal
        open={formOpen}
        onOpenChange={setFormOpen}
        visitor={editingVisitor}
        onSuccess={refetch}
      />
    </div>
  );
}
