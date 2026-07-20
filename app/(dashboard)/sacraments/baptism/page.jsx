"use client";

import * as React from "react";
import Link from "next/link";
import { Upload, Plus, Download, Eye, MoreVertical, LayoutGrid, Table2, List } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/contexts/ToastContext";
import { useBaptismRegister } from "@/hooks/useBaptismRegister";
import { BAPTISM_REGISTER_MOCK } from "@/lib/mock/baptismRegisterMockData";
import { BaptismFilterBar } from "@/components/baptism-register/BaptismFilterBar";
import { BaptismStatCards } from "@/components/baptism-register/BaptismStatCards";
import { BaptismRecordDetailsModal } from "@/components/baptism-register/BaptismRecordDetailsModal";

export default function BaptismRegisterPage() {
  const { toast } = useToast();
  const { records, totalCount, page, pageSize, setPage, setSearch, updateFilters, clearFilters } = useBaptismRegister();
  const [detailsModal, setDetailsModal] = React.useState({ open: false, record: null });
  const [pendingFilters, setPendingFilters] = React.useState({});

  const notAvailable = (what) => toast({ variant: "info", title: `${what} not built yet`, description: "This demo only includes the sample data shown on this page." });

  const columns = [
    { key: "id", header: "#", render: (row) => row.id },
    { key: "baptismNo", header: "Baptism No.", render: (row) => <span className="font-medium text-interactive-500">{row.baptismNo}</span> },
    { key: "childName", header: "Child Name", render: (row) => <span className="font-medium text-ink">{row.childName}</span> },
    { key: "date", header: "Date of Baptism", render: (row) => row.date },
    { key: "gender", header: "Gender", render: (row) => (row.gender === "MALE" ? "Male" : "Female") },
    { key: "parents", header: "Parents / Guardians", render: (row) => row.parents },
    { key: "baptizedBy", header: "Baptized By", render: (row) => row.baptizedBy },
    { key: "church", header: "Church", render: (row) => row.church },
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
          <h1 className="font-display text-2xl font-bold text-ink">Baptism Register</h1>
          <p className="text-sm text-ink-subtle">View and manage all baptism records in the parish.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" leftIcon={<Upload className="h-4 w-4" />} onClick={() => notAvailable("Import Records")}>
            Import Records
          </Button>
          <Link href="/sacraments/baptism/add">
            <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>Add New Baptism</Button>
          </Link>
        </div>
      </div>

      <BaptismFilterBar
        onSearchChange={setSearch}
        onFieldChange={(key, value) => setPendingFilters((prev) => ({ ...prev, [key]: value }))}
        onReset={() => { setPendingFilters({}); clearFilters(); }}
        onSearch={() => updateFilters(pendingFilters)}
      />

      <BaptismStatCards cards={BAPTISM_REGISTER_MOCK.cards} />

      <div className="rounded-lg border border-border bg-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-2 p-4">
          <p className="text-sm text-interactive-500">Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, totalCount)} of {totalCount} records</p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" leftIcon={<Download className="h-3.5 w-3.5" />} onClick={() => notAvailable("Export")}>
              Export
            </Button>
            <div className="flex overflow-hidden rounded-md border border-border">
              <button className="flex h-9 w-9 items-center justify-center text-ink-subtle hover:bg-surface-muted" title="Grid view" onClick={() => notAvailable("Grid view")}>
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center border-l border-border bg-interactive-500 text-white" title="Table view">
                <Table2 className="h-4 w-4" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center border-l border-border text-ink-subtle hover:bg-surface-muted" title="List view" onClick={() => notAvailable("List view")}>
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <Table
          columns={columns}
          data={records}
          isLoading={false}
          emptyMessage="No baptism records found"
          pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
        />
      </div>

      <BaptismRecordDetailsModal open={detailsModal.open} onOpenChange={(v) => setDetailsModal((s) => ({ ...s, open: v }))} record={detailsModal.record} />
    </div>
  );
}
