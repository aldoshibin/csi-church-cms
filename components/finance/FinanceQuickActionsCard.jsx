"use client";

import Link from "next/link";
import { Plus, TrendingDown, ArrowLeftRight, FileText, PieChart, Receipt } from "lucide-react";

const ACTIONS = [
  { label: "Add Income", href: "/finance/transactions/add?type=Income", icon: Plus, color: "bg-success-500" },
  { label: "Add Expense", href: "/finance/transactions/add?type=Expense", icon: TrendingDown, color: "bg-danger-500" },
  { label: "Bank Transfer", href: "/finance/transfers", icon: ArrowLeftRight, color: "bg-[#7C3AED]" },
  { label: "Journal Entry", href: "/finance/journal-entries", icon: FileText, color: "bg-[#7C3AED]" },
  { label: "Create Budget", href: "/finance/budgets", icon: PieChart, color: "bg-warning-500" },
  { label: "Generate Report", href: "/finance/reports", icon: Receipt, color: "bg-[#0891B2]" },
];

export function FinanceQuickActionsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-[#00695C]">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-3 text-left transition-colors hover:border-interactive-300 hover:bg-interactive-50"
          >
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white ${action.color}`}>
              <action.icon className="h-3.5 w-3.5" />
            </span>
            <span className="truncate text-sm font-medium text-ink">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
