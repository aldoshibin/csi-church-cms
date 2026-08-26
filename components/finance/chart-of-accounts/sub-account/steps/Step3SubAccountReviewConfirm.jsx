"use client";

import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BalanceImpactCard } from "../BalanceImpactCard";

export default function Step3SubAccountReviewConfirm({ form, parentLabel, parentInfo, isSubmitting, onConfirm, onPrevious }) {
  const detailRows = [
    ["Parent Account", parentLabel],
    ["Sub Account Code", form.code],
    ["Sub Account Name", form.name],
    ["Sub Account Type", form.type],
    ["Account Nature", form.nature],
    ["Opening Balance (₹)", Number(form.openingBalance || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })],
    ["As of Date", form.asOfDate],
  ];

  const additionalRows = [
    ["Description", form.description || "—"],
    ["Department / Ministry", form.departmentMinistry || "—"],
    ["Allow Transactions", form.allowTransactions],
    ["Tax Applicable", form.taxApplicable],
    ["Default Payment Method", form.defaultPaymentMethod],
    ["Reporting Group", form.reportingGroup || "—"],
    ["Tags / Keywords", form.tags || "—"],
    ["Notes (Internal)", form.notesInternal || "—"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Review &amp; Confirm</h3>
      <p className="mb-5 text-sm text-ink-subtle">Please review all the details below before adding this sub account.</p>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-accent-700">Sub Account Details</h4>
          <div className="flex flex-col gap-3 text-sm">
            {detailRows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-surface-muted pb-2">
                <span className="text-ink-subtle">{label}</span>
                <span className="font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-accent-700">Additional Information</h4>
          <div className="flex flex-col gap-3 text-sm">
            {additionalRows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 border-b border-surface-muted pb-2">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between border-b border-surface-muted pb-2">
              <span className="text-ink-subtle">Active Status</span>
              <Badge variant="success">{form.activeStatus}</Badge>
            </div>
          </div>
        </div>
      </div>

      <BalanceImpactCard parentLabel={parentLabel} currentBalance={parentInfo.currentBalance} openingBalance={form.openingBalance} />

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" isLoading={isSubmitting} rightIcon={<Check className="h-4 w-4" />} onClick={onConfirm}>Confirm &amp; Save</Button>
      </div>
    </div>
  );
}
