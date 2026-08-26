"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Step3ReviewConfirm({ form, isSubAccount, parentLabel, isSubmitting, onConfirm, onPrevious }) {
  const detailRows = [
    [isSubAccount ? "Sub Account Code" : "Account Code", form.code],
    [isSubAccount ? "Sub Account Name" : "Account Name", form.name],
    ["Parent Account", parentLabel || "—"],
    [isSubAccount ? "Sub Account Type" : "Account Type", form.type],
    ["Account Category", form.category],
    ["Account Nature", form.nature],
    ["Opening Balance (₹)", Number(form.openingBalance || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })],
    ["As of Date", form.asOfDate],
    ["Account Currency", form.currency],
    ["Reporting Group", form.reportingGroup || "—"],
  ];

  const additionalRows = [
    ["Account Level", form.level],
    ["Account Normal Balance", form.normalBalance],
    ["Allow Transactions", form.allowTransactions],
    ["Tax Applicable", form.taxApplicable],
    ["Tags / Keywords", form.tags || "—"],
    ["Notes", form.notes || "No additional notes"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Review &amp; Confirm</h3>
      <p className="mb-5 text-sm text-ink-subtle">Please review all the details below before creating the {isSubAccount ? "sub account" : "account"}.</p>

      <h4 className="mb-3 text-sm font-semibold text-accent-700">{isSubAccount ? "Sub Account Details" : "Account Details"}</h4>
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
        {detailRows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-surface-muted pb-2">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-medium text-ink">{value}</span>
          </div>
        ))}
        {form.description && (
          <div className="col-span-full flex items-start justify-between gap-6 border-b border-surface-muted pb-2">
            <span className="shrink-0 text-ink-subtle">Description</span>
            <span className="text-right font-medium text-ink">{form.description}</span>
          </div>
        )}
      </div>

      <h4 className="mb-3 mt-6 text-sm font-semibold text-accent-700">Additional Information</h4>
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
        {additionalRows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-surface-muted pb-2">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" isLoading={isSubmitting} rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onConfirm}>Confirm &amp; Save</Button>
      </div>
    </div>
  );
}
