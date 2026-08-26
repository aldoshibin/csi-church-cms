"use client";

import { CircleDollarSign, Layers, Landmark, DollarSign, Calendar, Receipt, Users, FileText } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

const ROWS = [
  { key: "type", label: "Transaction Type", icon: CircleDollarSign, iconBg: "bg-success-50", iconColor: "text-success-600" },
  { key: "category", label: "Category", icon: Layers, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  { key: "account", label: "Account", icon: Landmark, iconBg: "bg-accent-50", iconColor: "text-accent-600" },
  { key: "amount", label: "Amount", icon: DollarSign, iconBg: "bg-warning-50", iconColor: "text-warning-600", isAmount: true },
  { key: "date", label: "Date", icon: Calendar, iconBg: "bg-success-50", iconColor: "text-success-600", isDate: true },
  { key: "paymentMethod", label: "Payment Method", icon: Receipt, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
  { key: "payer", label: "Payer / From", icon: Users, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  { key: "refNo", label: "Reference No.", icon: FileText, iconBg: "bg-accent-50", iconColor: "text-accent-600" },
];

export function TransactionSummaryPanel({ form }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Transaction Summary</h3>
      <div className="mt-2">
        {ROWS.map(({ key, label, icon: Icon, iconBg, iconColor, isAmount, isDate }) => {
          const value = form[key];
          return (
            <div key={key} className="flex items-center gap-3 border-b border-surface-muted py-2.5 last:border-0">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
                <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
              </span>
              <span className="w-28 shrink-0 text-xs text-ink-subtle">{label}</span>
              <span className={`flex-1 truncate text-right text-sm font-medium ${isAmount ? "text-success-600" : "text-ink"}`}>
                {isAmount ? formatCurrency(value || 0) : isDate ? formatDate(value) : value || "—"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
