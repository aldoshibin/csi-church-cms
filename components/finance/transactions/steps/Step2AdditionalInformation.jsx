"use client";

import { ArrowLeft, ArrowRight, Plus, Trash2, Upload } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { ALLOCATION_DEPARTMENT_OPTIONS } from "@/lib/mock/financeDashboardMockData";

export default function Step2AdditionalInformation({
  form, payment, setPaymentField,
  allocationRowsWithAmount, addAllocation, updateAllocation, removeAllocation, totalAllocationPct,
  onNext, onPrevious,
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Additional Information</h3>

      {/* Allocation */}
      <div className="mb-1 mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">Allocation (Optional)</p>
          <p className="text-xs text-ink-subtle">Allocate this transaction to departments, projects or cost centers.</p>
        </div>
        <Button type="button" variant="secondary" size="sm" leftIcon={<Plus className="h-3.5 w-3.5" />} onClick={addAllocation}>
          Add Allocation
        </Button>
      </div>

      <div className="mt-3 overflow-hidden rounded-md border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-canvas text-xs text-ink-subtle">
              <th className="w-8 py-2 pl-3 font-medium">#</th>
              <th className="py-2 pl-3 font-medium">Department / Project / Cost Center</th>
              <th className="w-32 py-2 pl-3 font-medium">Percentage (%)</th>
              <th className="w-32 py-2 pl-3 font-medium">Amount (₹)</th>
              <th className="w-16 py-2 pl-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {allocationRowsWithAmount.map((row, i) => (
              <tr key={i}>
                <td className="py-2.5 pl-3 text-ink-subtle">{i + 1}</td>
                <td className="py-2.5 pl-3 pr-2">
                  <select
                    className="h-9 w-full rounded-md border border-border bg-white px-2 text-sm text-ink"
                    value={row.dept}
                    onChange={(e) => updateAllocation(i, "dept", e.target.value)}
                  >
                    <option value="">Select department</option>
                    {ALLOCATION_DEPARTMENT_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </td>
                <td className="py-2.5 pl-3 pr-2">
                  <input
                    type="number" className="h-9 w-full rounded-md border border-border px-2 text-sm text-ink"
                    value={row.pct} onChange={(e) => updateAllocation(i, "pct", e.target.value)}
                  />
                </td>
                <td className="py-2.5 pl-3 text-ink-muted">{row.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                <td className="py-2.5 pl-3">
                  <button type="button" onClick={() => removeAllocation(i)} className="rounded p-1.5 text-danger-500 hover:bg-danger-50">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
            <tr className="bg-surface-canvas font-medium">
              <td colSpan={2} className="py-2.5 pl-3 text-ink-subtle">Total</td>
              <td className="py-2.5 pl-3 text-ink">{totalAllocationPct}%</td>
              <td className="py-2.5 pl-3 text-interactive-600">{formatCurrency(form.amount || 0)}</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment details */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-medium text-ink">Payment Details</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Received / Paid On" required type="date" value={payment.receivedOn} onChange={(e) => setPaymentField("receivedOn", e.target.value)} />
          <Input label="Received / Paid By" value={payment.receivedBy} onChange={(e) => setPaymentField("receivedBy", e.target.value)} />
          <Input label="Receipt / Voucher No." value={payment.receiptNo} onChange={(e) => setPaymentField("receiptNo", e.target.value)} />
        </div>
      </div>

      {/* Attachments */}
      <div className="mt-5">
        <p className="text-sm font-medium text-ink">Attachments (Optional)</p>
        <p className="mb-2 text-xs text-ink-subtle">Upload related documents or receipts.</p>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-8 text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
          <Upload className="h-5 w-5" />
          <span className="text-sm">
            Drag and drop files here or{" "}
            <span className="ml-1 rounded-md border border-border px-3 py-1.5 text-ink">Browse Files</span>
          </span>
          <input type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png" />
        </label>
        <p className="mt-1.5 text-xs text-ink-subtle">Allowed formats: PDF, JPG, PNG (Max size: 5MB)</p>
      </div>

      <div className="mt-5">
        <Textarea
          label="Notes (Internal Use)" rows={3} maxLength={500}
          value={payment.notes} onChange={(e) => setPaymentField("notes", e.target.value)}
          helperText={`${payment.notes.length}/500`}
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>
          Previous
        </Button>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>
          Next
        </Button>
      </div>
    </div>
  );
}
