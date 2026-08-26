"use client";

import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { ExpenseRowActions } from "./ExpenseRowActions";
import { formatCurrency, formatDate } from "@/lib/utils";

export function ExpensesTable({ expenses, isLoading, pagination, onView, onEdit, onPrint, onDelete }) {
  const columns = [
    { key: "date", header: "Date", sortable: true, render: (row) => formatDate(row.date) },
    { key: "id", header: "Expense No.", render: (row) => <span className="text-ink-muted">{row.id}</span> },
    { key: "category", header: "Category" },
    { key: "description", header: "Description" },
    { key: "paidTo", header: "Paid To" },
    { key: "amount", header: "Amount (₹)", cellClassName: "text-right", className: "text-right", render: (row) => <div className="text-right font-medium text-ink">{formatCurrency(row.amount)}</div> },
    { key: "paymentMethod", header: "Payment Method" },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={row.status === "Paid" ? "success" : "warning"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => <ExpenseRowActions expense={row} onView={onView} onEdit={onEdit} onPrint={onPrint} onDelete={onDelete} />,
    },
  ];

  return (
    <Table
      columns={columns}
      data={expenses}
      isLoading={isLoading}
      getRowId={(row) => row.id}
      emptyMessage="No expenses found"
      emptyDescription="Try adjusting your search or add a new expense."
      pagination={pagination}
    />
  );
}
