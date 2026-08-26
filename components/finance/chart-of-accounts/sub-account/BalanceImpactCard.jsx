"use client";

import { Scale } from "lucide-react";

export function BalanceImpactCard({ parentLabel, currentBalance, openingBalance }) {
  const hasImpact = Number(openingBalance) !== 0;
  const newBalance = Number(currentBalance) + Number(openingBalance || 0);

  return (
    <div className="mt-6 rounded-lg border border-border bg-surface-canvas p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-ink-subtle">
          <Scale className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">Balance Impact</p>
          <p className="text-sm text-ink-subtle">
            {hasImpact
              ? `This sub account will add ₹${Number(openingBalance).toLocaleString("en-IN", { minimumFractionDigits: 2 })} to the parent account's balance.`
              : "This sub account will have no opening balance impact on the parent account."}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-ink-subtle">Parent Account</p>
          <p className="mt-0.5 text-sm font-medium text-ink">{parentLabel}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Current Balance (₹)</p>
          <p className="mt-0.5 text-sm font-medium text-ink">{Number(currentBalance).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">After Adding This Sub Account</p>
          <p className="mt-0.5 text-sm font-medium text-ink">
            Parent Balance (₹) {newBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })} {!hasImpact && <span className="text-ink-subtle">(No Change)</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
