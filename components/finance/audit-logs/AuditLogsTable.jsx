"use client";

import {
  DollarSign, TrendingDown, ArrowLeftRight, Landmark, PieChart, BarChart3,
  Layers, Users, Settings2, Eye,
} from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { AUDIT_MODULE_STYLE, AUDIT_ACTION_VARIANT } from "@/lib/mock/auditLogsMockData";
import { formatDate } from "@/lib/utils";

const MODULE_ICON = {
  "Income": DollarSign,
  "Expenses": TrendingDown,
  "Journal Entries": ArrowLeftRight,
  "Bank Accounts": Landmark,
  "Transfers": ArrowLeftRight,
  "Budgets": PieChart,
  "Financial Reports": BarChart3,
  "Chart of Accounts": Layers,
  "Users": Users,
  "Settings": Settings2,
};

export function AuditLogsTable({ logs, isLoading, pagination, onView }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{row.serial}</span> },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.time}</p>
        </div>
      ),
    },
    {
      key: "user", header: "User",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.user}</p>
            <p className="truncate text-xs text-ink-subtle">{row.role}</p>
          </div>
        </div>
      ),
    },
    {
      key: "module", header: "Module",
      render: (row) => {
        const style = AUDIT_MODULE_STYLE[row.module] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        const Icon = MODULE_ICON[row.module] ?? Layers;
        return (
          <div className="flex items-center gap-2">
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${style.bg}`}>
              <Icon className={`h-3.5 w-3.5 ${style.color}`} />
            </span>
            <span className="text-ink-muted">{row.module}</span>
          </div>
        );
      },
    },
    {
      key: "action", header: "Action",
      render: (row) => <Badge variant={AUDIT_ACTION_VARIANT[row.action] ?? "default"}>{row.action}</Badge>,
    },
    { key: "details", header: "Details", render: (row) => <span className="text-ink-muted">{row.details}</span> },
    {
      key: "recordId", header: "Record Affected",
      render: (row) => <span className="font-medium text-interactive-500">{row.recordId}</span>,
    },
    { key: "ip", header: "IP Address", render: (row) => <span className="text-ink-subtle">{row.ip}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <button
          type="button"
          onClick={() => onView?.(row)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`View log ${row.id}`}
        >
          <Eye className="h-4 w-4" />
        </button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={logs}
      isLoading={isLoading}
      getRowId={(row) => row.id}
      emptyMessage="No audit logs found"
      emptyDescription="Try adjusting your filters or search."
      pagination={pagination}
    />
  );
}
