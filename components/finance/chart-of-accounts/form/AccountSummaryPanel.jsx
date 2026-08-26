"use client";

import {
  Hash, Tag, Layers, ClipboardList, Wallet, Landmark, CircleCheck, User, Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDateTime } from "@/lib/utils";

export function AccountSummaryPanel({ form, isSubAccount, parentLabel, final = false }) {
  const rows = [
    { label: isSubAccount ? "Sub Account Code" : "Account Code", value: form.code, icon: Hash },
    { label: isSubAccount ? "Sub Account Name" : "Account Name", value: form.name, icon: Tag },
    { label: isSubAccount ? "Sub Account Type" : "Account Type", value: form.type, icon: Layers },
    { label: "Account Category", value: form.category, icon: ClipboardList },
    { label: "Account Nature", value: form.nature, icon: Wallet },
    { label: "Normal Balance", value: form.normalBalance, icon: Wallet },
    { label: "Parent Account", value: parentLabel || "—", icon: Landmark },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <CircleCheck className="h-4 w-4" /> {isSubAccount ? "Sub Account Summary" : "Account Summary"}
      </h3>
      <div className="mt-2">
        {rows.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 border-b border-surface-muted py-2.5 last:border-0">
            <Icon className="h-4 w-4 shrink-0 text-ink-subtle" />
            <span className="w-32 shrink-0 text-xs text-ink-subtle">{label}</span>
            <span className="flex-1 truncate text-right text-sm font-medium text-ink">{value || "—"}</span>
          </div>
        ))}

        <div className="flex items-center gap-3 border-b border-surface-muted py-2.5">
          <Wallet className="h-4 w-4 shrink-0 text-ink-subtle" />
          <span className="w-32 shrink-0 text-xs text-ink-subtle">Opening Balance</span>
          <span className="flex-1 truncate text-right text-sm font-medium text-ink">₹{Number(form.openingBalance || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
        </div>

        <div className="flex items-center gap-3 border-b border-surface-muted py-2.5">
          <Landmark className="h-4 w-4 shrink-0 text-ink-subtle" />
          <span className="w-32 shrink-0 text-xs text-ink-subtle">Account Currency</span>
          <span className="flex-1 truncate text-right text-sm font-medium text-ink">{form.currency}</span>
        </div>

        <div className="flex items-center gap-3 border-b border-surface-muted py-2.5 last:border-0">
          <CircleCheck className="h-4 w-4 shrink-0 text-ink-subtle" />
          <span className="w-32 shrink-0 text-xs text-ink-subtle">Status</span>
          <span className="flex-1 text-right"><Badge variant="success">Active</Badge></span>
        </div>

        {final && (
          <>
            <div className="flex items-center gap-3 border-b border-surface-muted py-2.5">
              <User className="h-4 w-4 shrink-0 text-ink-subtle" />
              <span className="w-32 shrink-0 text-xs text-ink-subtle">Created By</span>
              <span className="flex-1 truncate text-right text-sm font-medium text-ink">Parish Office</span>
            </div>
            <div className="flex items-center gap-3 py-2.5">
              <Clock className="h-4 w-4 shrink-0 text-ink-subtle" />
              <span className="w-32 shrink-0 text-xs text-ink-subtle">Created On</span>
              <span className="flex-1 truncate text-right text-sm font-medium text-ink">{formatDateTime(new Date().toISOString())}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
