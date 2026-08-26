"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { AccountRowActionsMenu } from "./AccountRowActionsMenu";

function BalanceCell({ amount }) {
  const isNegative = amount < 0;
  const formatted = Math.abs(amount).toLocaleString("en-IN", { minimumFractionDigits: 2 });
  return (
    <span className={isNegative ? "font-medium text-danger-600" : "text-ink"}>
      {isNegative ? `(₹${formatted})` : `₹${formatted}`}
    </span>
  );
}

export function ChartOfAccountsTable({ accounts, isLoading, collapsedCodes, onToggleCollapse, onView, onEdit, onDuplicate, onDeactivate, onDelete, pagination }) {
  const columns = [
    {
      key: "code", header: "Account Code", sortable: true,
      render: (row) => <span className="text-ink-muted">{row.code}</span>,
    },
    {
      key: "name", header: "Account Name", sortable: true,
      render: (row) => {
        const isCollapsed = collapsedCodes.includes(row.code);
        return (
          <div style={{ paddingLeft: row.level * 20 }} className="flex items-center gap-1.5">
            {row.hasChildren ? (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onToggleCollapse(row.code); }}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-ink-subtle hover:bg-surface-canvas"
              >
                {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            ) : (
              <span className="w-5 shrink-0" />
            )}
            <span className={row.hasChildren ? "font-semibold text-ink" : "text-ink"}>{row.name}</span>
          </div>
        );
      },
    },
    { key: "category", header: "Category" },
    { key: "type", header: "Account Type" },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={row.status === "Active" ? "success" : "default"}>{row.status}</Badge>,
    },
    {
      key: "balance", header: "Balance (₹)", cellClassName: "text-right", className: "text-right",
      render: (row) => <div className="text-right"><BalanceCell amount={row.balance} /></div>,
    },
    {
      key: "actions", header: "Actions",
      render: (row) => (
        <AccountRowActionsMenu account={row} onView={onView} onEdit={onEdit} onDuplicate={onDuplicate} onDeactivate={onDeactivate} onDelete={onDelete} />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={accounts}
      isLoading={isLoading}
      getRowId={(row) => row.code}
      emptyMessage="No accounts found"
      emptyDescription="Try adjusting your filters or add a new account."
      pagination={pagination}
    />
  );
}
