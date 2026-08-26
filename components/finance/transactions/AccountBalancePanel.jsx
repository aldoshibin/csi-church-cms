"use client";

import { formatCurrency, formatDate } from "@/lib/utils";

export function AccountBalancePanel({ accountName, balance, lastUpdated }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">
        Account Balance {accountName ? `(${accountName.split(" (")[0]})` : ""}
      </h3>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-ink-subtle">Current Balance</p>
          <p className="mt-1 font-display text-lg font-bold text-success-600">{formatCurrency(balance)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-ink-subtle">Last Updated</p>
          <p className="mt-1 text-sm text-ink-muted">{formatDate(lastUpdated)}</p>
        </div>
      </div>
    </div>
  );
}
