"use client";

import * as React from "react";
import { Download, Eye, MoreVertical, Calendar } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/contexts/ToastContext";
import { SACRAMENTAL_RECORDS_MOCK } from "@/lib/mock/sacramentalRecordsMockData";
import { SacramentStatCards } from "@/components/sacraments/SacramentStatCards";
import { RecordsOverviewDonut } from "@/components/sacraments/RecordsOverviewDonut";
import { RecordsThisMonthPanel } from "@/components/sacraments/RecordsThisMonthPanel";
import { RecentRecordsPanel } from "@/components/sacraments/RecentRecordsPanel";
import { UpcomingSacramentsCalendar } from "@/components/sacraments/UpcomingSacramentsCalendar";
import { SacramentFilterBar } from "@/components/sacraments/SacramentFilterBar";
import { SacramentRecordDetailsModal } from "@/components/sacraments/SacramentRecordDetailsModal";


export default function SacramentalRecordsPage() {
  const { toast } = useToast();
  const mock = SACRAMENTAL_RECORDS_MOCK;

  const [detailsModal, setDetailsModal] = React.useState({ open: false, record: null });
  const [page, setPage] = React.useState(1);

  const notAvailable = (what) => toast({ variant: "info", title: `${what} not built yet`, description: "This demo only includes the sample data shown on this page." });

  const handlePageChange = (nextPage) => {
    if (nextPage === 1) { setPage(1); return; }
    notAvailable("Additional pages");
  };

  const columns = [
    { key: "index", header: "#", render: (row) => row.id },
    { key: "name", header: "Name", render: (row) => <span className="font-medium text-ink">{row.name}</span> },
    { key: "sacrament", header: "Sacrament", render: (row) => <span className="text-interactive-500">{row.sacrament}</span> },
    { key: "date", header: "Date", render: (row) => row.date },
    { key: "officiatedBy", header: "Officiated By", render: (row) => row.officiatedBy },
    { key: "location", header: "Location", render: (row) => row.location },
    { key: "status", header: "Status", render: (row) => <Badge variant="success">{row.status}</Badge> },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); setDetailsModal({ open: true, record: row }); }} className="flex h-8 w-8 items-center justify-center rounded-md text-interactive-500 hover:bg-surface-muted" aria-label="View record">
            <Eye className="h-3.5 w-3.5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); notAvailable("Additional actions"); }} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted" aria-label="More actions">
            <MoreVertical className="h-3.5 w-3.5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Sacramental Records</h1>
          <p className="text-sm text-ink-subtle">Manage and view all sacramental records and statistics.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink shadow-card hover:bg-surface-muted">
            <Calendar className="h-4 w-4 text-interactive-500" /> {mock.dateLabel}
          </button>
          <Button size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={() => notAvailable("Export")}>
            Export Report
          </Button>
        </div>
      </div>

      <SacramentStatCards cards={mock.cards} onViewDetails={(card) => notAvailable(`${card.label} details`)} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <RecordsOverviewDonut total={mock.overviewDonut.total} breakdown={mock.overviewDonut.breakdown} onViewFullReport={() => notAvailable("Full report")} />
        <RecordsThisMonthPanel items={mock.recordsThisMonth} onViewMonthlyReport={() => notAvailable("Monthly report")} />
        <RecentRecordsPanel records={mock.recentRecords} onViewAllRecords={() => notAvailable("All records view")} />
        <UpcomingSacramentsCalendar
          monthLabel={mock.calendar.monthLabel}
          highlighted={mock.calendar.highlighted}
          legend={mock.calendar.legend}
          onViewFullCalendar={() => notAvailable("Full calendar")}
        />
      </div>

      <SacramentFilterBar
        onSearchChange={() => {}}
        onFieldChange={() => {}}
        onApply={() => notAvailable("Filtering")}
        onReset={() => notAvailable("Reset")}
      />

      <div className="rounded-lg border border-border bg-white shadow-card">
        <div className="p-4">
          <h3 className="text-base font-bold text-interactive-500">Recent Sacramental Records</h3>
        </div>
        <Table
          columns={columns}
          data={mock.table.results}
          isLoading={false}
          emptyMessage="No sacramental records found"
          pagination={{ page, pageSize: mock.table.pageSize, totalCount: mock.table.total, onPageChange: handlePageChange }}
        />
      </div>

      <SacramentRecordDetailsModal open={detailsModal.open} onOpenChange={(v) => setDetailsModal((s) => ({ ...s, open: v }))} record={detailsModal.record} />
    </div>
  );
}
